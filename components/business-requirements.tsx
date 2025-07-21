"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Download, ZoomIn, ZoomOut, ExternalLink, FileText, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import * as pdfjsLib from "pdfjs-dist"
import "pdfjs-dist/web/pdf_viewer.css"

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
}

export function BusinessRequirements() {
  const [scale, setScale] = useState<number>(100)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [pdfDoc, setPdfDoc] = useState<any>(null)
  const [numPages, setNumPages] = useState<number>(0)
  const pdfContainerRef = useRef<HTMLDivElement>(null)
  const pagesRef = useRef<HTMLCanvasElement[]>([])

  const zoomIn = () => setScale((prev) => Math.min(prev + 10, 200))
  const zoomOut = () => setScale((prev) => Math.max(prev - 10, 50))

  const renderPage = useCallback(async (pageNum: number) => {
    if (!pdfDoc) return

    const page = await pdfDoc.getPage(pageNum)
    const viewport = page.getViewport({ scale: scale / 100 })
    
    const canvas = pagesRef.current[pageNum - 1] || document.createElement('canvas')
    const context = canvas.getContext('2d')
    
    canvas.height = viewport.height
    canvas.width = viewport.width
    canvas.style.margin = '20px auto'
    canvas.style.display = 'block'

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise

    if (!pagesRef.current[pageNum - 1]) {
      pagesRef.current[pageNum - 1] = canvas
      pdfContainerRef.current?.appendChild(canvas)
    }
  }, [pdfDoc, scale])

  const loadPDF = useCallback(async () => {
    try {
      const loadingTask = pdfjsLib.getDocument('/software-development-life-cycle/business-requirements.pdf')
      const pdf = await loadingTask.promise
      setPdfDoc(pdf)
      setNumPages(pdf.numPages)
      setLoading(false)
      setError(null)
    } catch (err) {
      setLoading(false)
      setError("Failed to load PDF document. Please try downloading the file directly.")
    }
  }, [])

  // Initial PDF load
  useEffect(() => {
    loadPDF()
  }, [loadPDF])

  // Render pages when PDF is loaded or scale changes
  useEffect(() => {
    if (!pdfDoc || !pdfContainerRef.current) return

    // Clear existing canvases when scale changes
    if (scale !== 100) {
      pdfContainerRef.current.innerHTML = ''
      pagesRef.current = []
    }

    const renderPages = async () => {
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        await renderPage(pageNum)
      }
    }

    renderPages()
  }, [pdfDoc, numPages, scale, renderPage])

  const handlePdfError = useCallback(() => {
    setLoading(false)
    setError("Failed to load PDF document. Please try downloading the file directly.")
  }, [])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c] px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0894b5]">Business Requirements</h1>

          <div className="bg-[#f5f2e8] border border-[#e8e5db] rounded-lg p-8 text-center">
            <div className="text-red-500 mb-4">
              <FileText className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#2c2c2c]">PDF Viewer Unavailable</h2>
            <p className="text-[#666666] mb-6">{error}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button
                onClick={() => window.open("/software-development-life-cycle/business-requirements.pdf", "_blank")}
                className="bg-[#0894b5] text-[#fffcf3] hover:bg-[#0894b5]/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={() => window.open("/software-development-life-cycle/business-requirements.pdf", "_blank")}
                variant="outline"
                className="border-[#e8e5db] hover:bg-[#ebe8dd]"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </Button>
            </div>

            <div className="bg-[#fffcf3] border border-[#e8e5db] rounded-lg p-6 text-left">
              <h3 className="text-lg font-semibold mb-4 text-[#0894b5]">Document Overview</h3>
              <div className="space-y-4 text-[#2c2c2c]">
                <p className="text-sm">
                  This document contains the comprehensive business requirements for the SaaSmile Plugin for eCommerce
                  platform development project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-[#0894b5] mb-2">Key Sections:</h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Introduction and Scope</li>
                      <li>User Stories and Journey</li>
                      <li>Role Players in SaaSmile Ecosystem</li>
                      <li>Plugin Requirements (16 detailed requirements)</li>
                      <li>Technical Requirements</li>
                      <li>Information Architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0894b5] mb-2">Document Details:</h4>
                    <ul className="space-y-1">
                      <li>
                        <strong>Classification:</strong> Confidential
                      </li>
                      <li>
                        <strong>Platform:</strong> Magento 2
                      </li>
                      <li>
                        <strong>Pages:</strong> 17
                      </li>
                      <li>
                        <strong>Requirements:</strong> 16 Business + 2 Technical
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#f0ede3] rounded-lg">
                  <h4 className="font-semibold mb-2 text-[#0894b5]">Project Summary:</h4>
                  <p className="text-sm text-[#666666]">
                    Development of a SaaSmile shipping plugin for logistics providers whose customers use eCommerce
                    platforms to sell their products. The plugin enables merchants to configure details for specific
                    logistics providers on their eCommerce sites, supporting multiple carriers like UPS, Aramex, and
                    Thabit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${isFullscreen ? "fixed inset-0 z-50" : "min-h-screen"} bg-[#fffcf3] text-[#2c2c2c]`}>
      <div className="px-4 sm:px-6 lg:px-8 py-6 h-full flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0894b5]">Business Requirements</h1>
                <p className="text-sm text-[#666666]">SaaSmile Plugin for eCommerce Platform - Confidential Document</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="bg-red-50 border-red-200 text-red-700">
                    Confidential
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                    Magento 2 Platform
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                    17 Pages
                  </Badge>
                </div>
              </div>
              {isFullscreen && (
                <Button
                  onClick={toggleFullscreen}
                  variant="outline"
                  size="sm"
                  className="bg-[#fffcf3] border-[#e8e5db] hover:bg-[#ebe8dd]"
                >
                  Exit Fullscreen
                </Button>
              )}
            </div>
          </div>

          {/* PDF Controls */}
          <div className="bg-[#f5f2e8] border border-[#e8e5db] rounded-lg p-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Button
                  onClick={zoomOut}
                  disabled={scale <= 50}
                  variant="outline"
                  size="sm"
                  className="bg-[#fffcf3] border-[#e8e5db] hover:bg-[#ebe8dd]"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium px-3 py-1 bg-[#fffcf3] rounded border border-[#e8e5db] min-w-[80px] text-center">
                  {scale}%
                </span>
                <Button
                  onClick={zoomIn}
                  disabled={scale >= 200}
                  variant="outline"
                  size="sm"
                  className="bg-[#fffcf3] border-[#e8e5db] hover:bg-[#ebe8dd]"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  onClick={toggleFullscreen}
                  variant="outline"
                  size="sm"
                  className="bg-[#fffcf3] border-[#e8e5db] hover:bg-[#ebe8dd]"
                >
                  <Maximize2 className="w-4 h-4 mr-2" />
                  {isFullscreen ? "Exit" : "Fullscreen"}
                </Button>
                <Button
                  onClick={() => window.open("/software-development-life-cycle/business-requirements.pdf", "_blank")}
                  variant="outline"
                  size="sm"
                  className="bg-[#0894b5] text-[#fffcf3] border-[#0894b5] hover:bg-[#0894b5]/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button
                  onClick={() => window.open("/software-development-life-cycle/business-requirements.pdf", "_blank")}
                  variant="outline"
                  size="sm"
                  className="bg-[#fffcf3] border-[#e8e5db] hover:bg-[#ebe8dd]"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  New Tab
                </Button>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-[#f5f2e8] border border-[#e8e5db] rounded-lg p-4 flex-1 min-h-0">
            {loading && (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0894b5]"></div>
                <span className="ml-3 text-[#666666]">Loading document...</span>
              </div>
            )}

            <div 
              className="h-full w-full overflow-auto flex justify-center"
              style={{
                height: isFullscreen ? "calc(100vh - 200px)" : "800px",
                minHeight: "600px",
              }}
            >
              <div 
                id="pdfContainer"
                className="pdf-container border-0 shadow-lg rounded bg-white"
                style={{
                  width: `${scale}%`,
                  minWidth: "800px",
                }}
              />
            </div>
          </div>

          {/* Document Info */}
          <div className="mt-6 bg-[#f0ede3] border border-[#e8e5db] rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#666666]">
              <div>
                <span className="font-medium text-[#2c2c2c]">Document:</span> SaaSmile Plugin Requirements
              </div>
              <div>
                <span className="font-medium text-[#2c2c2c]">Path:</span>{" "}
                software-development-life-cycle/business-requirements.pdf
              </div>
              <div>
                <span className="font-medium text-[#2c2c2c]">Classification:</span> Confidential
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
