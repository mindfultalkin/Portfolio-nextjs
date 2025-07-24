'use client'

import { useState } from 'react'
import { Download, ZoomIn, ZoomOut, ExternalLink, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge' 
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
    <div className={`min-h-screen flex flex-col ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
      {/* Introduction Section */}
      <div className="relative overflow-hidden border-b border-[#e8e5db]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0894b5]/5 to-[#f48d03]/5" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-[#f48d03] text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 text-[#2c2c2c]">
                Document Creation Approach
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#666666] mb-4">
                SaaSmile [doos.me] is one of the leading logistics companies in Saudi Arabia, offering complete end-to-end logistics and supply chain solutions to both businesses and individual shoppers business-requirements. To integrate seamlessly with eCommerce platforms, merchants require a dedicated plugin that enables them to book shipments, generate airway bills (AWBs), track deliveries, and manage finance workflows directly from their store interface business-requirements.
                This document has been developed following a structured business-requirements approach to ensure clarity, traceability, and alignment with stakeholder needs:
              </p>
              <p className="text-[#666666] mb-4">The system emphasizes clarity through:</p>
              <ul className="list-disc list-inside text-[#666666] mb-4">
                <li>Clean visual hierarchy</li>
                <li>Guided navigation</li>
                <li>Real-world use cases</li>
                <li>Terminology support</li>
              </ul>
              <p className="text-[#666666]">
                Each section is purposefully built to align with a user’s learning curve—from introductory content to
                technical configuration and operational flows—ensuring complete user enablement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-[#f8f9fa]">
        <div className="absolute inset-0">
          <PDFViewer url={pdfUrl} scale={scale} />
        </div>
      </div>
    </div>
  )
}
