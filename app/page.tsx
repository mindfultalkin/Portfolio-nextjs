"use client"

import { useState, Suspense, lazy } from "react"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

// Lazy load components for better performance
const CommunicationCoachBot = lazy(() =>
  import("@/components/communication-coach-bot").then((module) => ({ default: module.CommunicationCoachBot })),
)
const KnowledgeBaseZendesk = lazy(() =>
  import("@/components/secuvy").then((module) => ({ default: module.Secuvy })),
)
const KnowledgeBaseDocument360 = lazy(() =>
  import("@/components/document360").then((module) => ({ default: module.Document360 })),
)
const KnowledgeBaseDocusaurus = lazy(() =>
  import("@/components/docusaurus").then((module) => ({ default: module.Docusaurus })),
)
const BusinessRequirements = lazy(() =>
  import("@/components/business-requirements").then((module) => ({ default: module.BusinessRequirements })),
)
const PDFDemo = lazy(() =>
  import("@/app/content-pdf-demo/page").then((module) => ({ default: module.default })),
)

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#fffcf3] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0894b5] mx-auto mb-4"></div>
        <p className="text-[#666666]">Loading content...</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderContent = () => {
    switch (currentPage) {
      case "communication-coach-bot":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CommunicationCoachBot />
          </Suspense>
        )
      case "secuvy":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseZendesk />
          </Suspense>
        )        
      case "document360":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseDocument360 />
          </Suspense>
        )
      case "docusaurus":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseDocusaurus />
          </Suspense>
        )
      case "business-requirements":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BusinessRequirements />
          </Suspense>
        )
      case "pdf-demo":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <PDFDemo />
          </Suspense>
        )
      default:
        return <MainContent />
    }
  }

  return (
    <div className="flex min-h-screen bg-[#fffcf3]">
      <Sidebar onNavigate={setCurrentPage} />
      <main className="flex-1 lg:ml-72 xl:ml-80 transition-all duration-300">{renderContent()}</main>
    </div>
  )
}
