"use client"

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react'

interface PDFViewerProps {
  url: string
  scale?: number
  showControls?: boolean
  enableDownload?: boolean
}

// Dynamically import PDF.js to avoid SSR issues
const loadPdfJs = async () => {
  const pdfjs = await import('pdfjs-dist')
  const worker = await import('pdfjs-dist/build/pdf.worker.entry')
  pdfjs.GlobalWorkerOptions.workerSrc = worker.default
  return pdfjs
}

export function PDFViewer({ 
  url, 
  scale: initialScale = 100, 
  showControls = true,
  enableDownload = true 
}: PDFViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRefs = useRef<Map<number, HTMLCanvasElement>>(new Map())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pdfjsLib, setPdfjsLib] = useState<any>(null)
  const [pdf, setPdf] = useState<any>(null)
  const [currentScale, setCurrentScale] = useState(initialScale)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [rotation, setRotation] = useState(0)

  // Memoized scale value for performance
  const scaleValue = useMemo(() => currentScale / 100, [currentScale])

  // Initialize PDF.js
  useEffect(() => {
    let mounted = true

    const initPdfJs = async () => {
      try {
        const pdfjs = await loadPdfJs()
        if (mounted) {
          setPdfjsLib(pdfjs)
        }
      } catch (err) {
        console.error('Error loading PDF.js:', err)
        if (mounted) {
          setError('Failed to initialize PDF viewer')
        }
      }
    }

    initPdfJs()
    return () => { mounted = false }
  }, [])

  // Load PDF document
  useEffect(() => {
    if (!pdfjsLib) return

    let mounted = true
    const loadPDF = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const loadingTask = pdfjsLib.getDocument(url)
        const pdfDoc = await loadingTask.promise
        
        if (mounted) {
          setPdf(pdfDoc)
          setTotalPages(pdfDoc.numPages)
          setCurrentPage(1)
        }
      } catch (err) {
        console.error('Error loading PDF:', err)
        if (mounted) {
          setError('Failed to load PDF document')
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadPDF()
    return () => { mounted = false }
  }, [pdfjsLib, url])

  // Render page to canvas with optimized performance
  const renderPage = useCallback(async (pageNum: number, canvas: HTMLCanvasElement, scale: number) => {
    if (!pdf) return

    try {
      const page = await pdf.getPage(pageNum)
      const originalViewport = page.getViewport({ scale: 1.0, rotation })
      
      // Calculate responsive scale
      const containerWidth = containerRef.current?.clientWidth || 800
      const fitScale = (containerWidth - 64) / originalViewport.width
      const finalScale = scale * fitScale

      const viewport = page.getViewport({ scale: finalScale, rotation })
      
      // Set canvas dimensions with device pixel ratio for crisp rendering
      const ctx = canvas.getContext('2d', { alpha: false })
      if (!ctx) throw new Error('Could not get canvas context')

      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = viewport.width * pixelRatio
      canvas.height = viewport.height * pixelRatio
      canvas.style.width = `${viewport.width}px`
      canvas.style.height = `${viewport.height}px`
      
      ctx.scale(pixelRatio, pixelRatio)

      // Render with high quality settings
      await page.render({
        canvasContext: ctx,
        viewport: viewport,
        enableWebGL: true,
        renderInteractiveForms: true
      }).promise

    } catch (err) {
      console.error(`Error rendering page ${pageNum}:`, err)
      throw err
    }
  }, [pdf, rotation])

  // Render all pages with optimized loading
  useEffect(() => {
    if (!pdf || !containerRef.current) return

    const container = containerRef.current
    container.innerHTML = ''

    const renderAllPages = async () => {
      try {
        setLoading(true)
        
        // Create page containers
        const pageContainers: HTMLDivElement[] = []
        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
          const wrapper = document.createElement('div')
          wrapper.className = 'pdf-page-wrapper'
          wrapper.style.opacity = '0'
          wrapper.style.transition = 'opacity 0.3s ease'

          const canvas = document.createElement('canvas')
          canvas.className = 'pdf-page-canvas'
          canvasRefs.current.set(pageNum, canvas)
          wrapper.appendChild(canvas)

          const pageNumber = document.createElement('div')
          pageNumber.className = 'page-number'
          pageNumber.textContent = `Page ${pageNum} of ${totalPages}`
          wrapper.appendChild(pageNumber)

          container.appendChild(wrapper)
          pageContainers.push(wrapper)
        }

        // Render pages with staggered loading for better UX
        const renderPromises = pageContainers.map(async (wrapper, index) => {
          const pageNum = index + 1
          const canvas = canvasRefs.current.get(pageNum)
          if (!canvas) return

          try {
            await renderPage(pageNum, canvas, scaleValue)
            
            // Fade in with staggered timing
            setTimeout(() => {
              wrapper.style.opacity = '1'
            }, 100 * pageNum)
          } catch (err) {
            console.error(`Failed to render page ${pageNum}:`, err)
          }
        })

        await Promise.all(renderPromises)
        setLoading(false)
      } catch (err) {
        console.error('Error rendering PDF pages:', err)
        setError('Failed to render PDF pages')
        setLoading(false)
      }
    }

    renderAllPages()
  }, [pdf, totalPages, scaleValue, renderPage])

  // Handle zoom controls
  const handleZoomIn = useCallback(() => {
    setCurrentScale(prev => Math.min(prev + 25, 300))
  }, [])

  const handleZoomOut = useCallback(() => {
    setCurrentScale(prev => Math.max(prev - 25, 25))
  }, [])

  const handleZoomChange = useCallback((value: number[]) => {
    setCurrentScale(value[0])
  }, [])

  const handleRotation = useCallback(() => {
    setRotation(prev => (prev + 90) % 360)
  }, [])

  // Handle download
  const handleDownload = useCallback(async () => {
    if (!pdf) return
    
    try {
      const link = document.createElement('a')
      link.href = url
      link.download = url.split('/').pop() || 'document.pdf'
      link.click()
    } catch (err) {
      console.error('Error downloading PDF:', err)
    }
  }, [pdf, url])

  if (error) {
    return (
      <div className="pdf-viewer">
        <div className="flex items-center justify-center h-64 text-red-500">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Error Loading PDF</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pdf-viewer">
      {showControls && (
        <div className="pdf-controls bg-white border-b border-gray-200 p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              disabled={currentScale <= 25}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2 min-w-[120px]">
              <Slider
                value={[currentScale]}
                onValueChange={handleZoomChange}
                min={25}
                max={300}
                step={25}
                className="w-20"
              />
              <span className="text-sm text-gray-600 min-w-[40px]">
                {currentScale}%
              </span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              disabled={currentScale >= 300}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRotation}
            >
              <RotateCw className="h-4 w-4" />
            </Button>
            
            {enableDownload && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="pdf-loading">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0894b5]"></div>
          <span className="ml-3 text-[#666666]">Loading document...</span>
        </div>
      )}

      <div
        ref={containerRef}
        className="pdf-container py-8"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  )
}
