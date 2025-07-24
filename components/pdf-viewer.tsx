"use client"

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

interface PDFViewerProps {
  url: string
  scale: number
}

// Dynamically import PDF.js to avoid SSR issues
const loadPdfJs = async () => {
  const pdfjs = await import('pdfjs-dist')
  const worker = await import('pdfjs-dist/build/pdf.worker.entry')
  pdfjs.GlobalWorkerOptions.workerSrc = worker.default
  return pdfjs
}

export function PDFViewer({ url, scale }: PDFViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pdfjsLib, setPdfjsLib] = useState<any>(null)

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

  useEffect(() => {
    if (!pdfjsLib || !containerRef.current) return

    async function renderPDF() {
      const container = containerRef.current
      if (!container) return

      try {
        setLoading(true)
        const loadingTask = pdfjsLib.getDocument(url)
        const pdf = await loadingTask.promise

        container.innerHTML = ''

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum)
          const originalViewport = page.getViewport({ scale: 1.0 })
          
          // Calculate scale to fit the page width (with some margin)
          const containerWidth = container.clientWidth - 64 // 32px padding on each side
          const fitScale = containerWidth / originalViewport.width
          const finalScale = (scale / 100) * fitScale

          const viewport = page.getViewport({ scale: finalScale })

          const wrapper = document.createElement('div')
          wrapper.className = 'pdf-page-wrapper'
          wrapper.style.opacity = '0'

          const canvas = document.createElement('canvas')
          canvas.className = 'pdf-page-canvas'
          const context = canvas.getContext('2d', { alpha: false })

          if (!context) {
            throw new Error('Could not get canvas context')
          }

          canvas.height = viewport.height
          canvas.width = viewport.width

          wrapper.appendChild(canvas)

          const pageNumber = document.createElement('div')
          pageNumber.className = 'page-number'
          pageNumber.textContent = `Page ${pageNum}`
          wrapper.appendChild(pageNumber)

          container.appendChild(wrapper)

          await page.render({
            canvasContext: context,
            viewport: viewport
          }).promise

          // Fade in the page
          setTimeout(() => {
            wrapper.style.transition = 'opacity 0.3s ease'
            wrapper.style.opacity = '1'
          }, 50 * pageNum) // Stagger the fade-in
        }

        setLoading(false)
      } catch (err) {
        console.error('Error rendering PDF:', err)
        setError('Failed to render PDF')
        setLoading(false)
      }
    }

    renderPDF()
  }, [pdfjsLib, url, scale])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="pdf-viewer">
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
