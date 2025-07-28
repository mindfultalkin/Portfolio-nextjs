"use client"

import { PDFViewer } from "@/components/pdf-viewer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ZoomIn, RotateCw } from "lucide-react"

export default function PDFDemoPage() {
  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0894b5] leading-tight">
                Enhanced PDF Viewer Demo
              </h1>
              <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                Canvas-based Rendering | High Performance | Interactive Controls
              </Badge>
              <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                Experience our enhanced PDF viewer with canvas-based rendering, optimized for performance and user experience. 
                Features include zoom controls, rotation, download functionality, and responsive design.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5] flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-[#e8e5db]">
                  <div className="flex items-center gap-2 mb-2">
                    <ZoomIn className="h-5 w-5 text-[#0894b5]" />
                    <h3 className="font-semibold text-[#0894b5]">Zoom Controls</h3>
                  </div>
                  <p className="text-sm text-[#666666]">
                    Smooth zoom in/out with slider control and percentage display. Range from 25% to 300%.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-[#e8e5db]">
                  <div className="flex items-center gap-2 mb-2">
                    <RotateCw className="h-5 w-5 text-[#0894b5]" />
                    <h3 className="font-semibold text-[#0894b5]">Rotation</h3>
                  </div>
                  <p className="text-sm text-[#666666]">
                    Rotate PDF pages 90 degrees at a time for better viewing of landscape documents.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-[#e8e5db]">
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="h-5 w-5 text-[#0894b5]" />
                    <h3 className="font-semibold text-[#0894b5]">Download</h3>
                  </div>
                  <p className="text-sm text-[#666666]">
                    Direct download functionality for easy access to the original PDF document.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-[#e8e5db]">
                  <h3 className="font-semibold text-[#0894b5] mb-2">High DPI Support</h3>
                  <p className="text-sm text-[#666666]">
                    Optimized rendering for high-resolution displays with crisp, clear text and graphics.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-[#e8e5db]">
                  <h3 className="font-semibold text-[#0894b5] mb-2">Responsive Design</h3>
                  <p className="text-sm text-[#666666]">
                    Adapts seamlessly to different screen sizes with mobile-optimized controls and layout.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-[#e8e5db]">
                  <h3 className="font-semibold text-[#0894b5] mb-2">Performance Optimized</h3>
                  <p className="text-sm text-[#666666]">
                    Efficient canvas rendering with WebGL support and memory management for smooth performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PDF Viewer Demo */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5]">
                Business Requirements Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[800px] w-full">
                <PDFViewer
                  url="/software-development-life-cycle/business-requirements.pdf"
                  scale={100}
                  showControls={true}
                  enableDownload={true}
                />
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0894b5]">
                Technical Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#0894b5] mb-3">Canvas Rendering</h3>
                  <ul className="text-sm text-[#666666] space-y-2">
                    <li>• PDF.js library for PDF parsing and rendering</li>
                    <li>• Canvas-based rendering for optimal performance</li>
                    <li>• Device pixel ratio optimization for crisp display</li>
                    <li>• WebGL acceleration for complex graphics</li>
                    <li>• Memory-efficient page loading and caching</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#0894b5] mb-3">User Experience</h3>
                  <ul className="text-sm text-[#666666] space-y-2">
                    <li>• Smooth zoom controls with visual feedback</li>
                    <li>• Staggered page loading for better perceived performance</li>
                    <li>• Responsive design for all device sizes</li>
                    <li>• Dark mode support for accessibility</li>
                    <li>• Error handling with user-friendly messages</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 