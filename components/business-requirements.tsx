"use client"

import { useState } from "react"
import { Download, ZoomIn, ZoomOut, ExternalLink, FileText, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(
  () => import('@/components/pdf-viewer').then(mod => mod.PDFViewer),
  { ssr: false }
)

export function BusinessRequirements() {
  const [scale, setScale] = useState<number>(100)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const pdfUrl = '/software-development-life-cycle/business-requirements.pdf'

  const zoomIn = () => setScale(prev => Math.min(prev + 10, 200))
  const zoomOut = () => setScale(prev => Math.max(prev - 10, 50))
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'business-requirements.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
                  onClick={handleDownload}
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
          <div className="bg-white border border-[#e8e5db] rounded-lg shadow-lg flex-1 min-h-0 overflow-hidden">
            <div
              className="h-full w-full overflow-auto"
              style={{
                height: isFullscreen ? "calc(100vh - 200px)" : "800px",
                minHeight: "600px",
                background: "#f8f9fa",
              }}
            >
              <PDFViewer url={pdfUrl} scale={scale} />
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
