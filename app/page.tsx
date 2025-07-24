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
// const KnowledgeBaseZendesk = lazy(() =>
//   import("@/components/knowledge-base-zendesk").then((module) => ({ default: module.KnowledgeBaseZendesk })),
// )
const KnowledgeBaseDocument360 = lazy(() =>
  import("@/components/knowledge-base-document360").then((module) => ({ default: module.KnowledgeBaseDocument360 })),
)
const KnowledgeBaseDocusaurus = lazy(() =>
  import("@/components/knowledge-base-docusaurus").then((module) => ({ default: module.KnowledgeBaseDocusaurus })),
)
const KnowledgeBaseZendeskWalkthrough = lazy(() =>
  import("@/components/knowledge-base-zendesk-walkthrough").then((module) => ({
    default: module.KnowledgeBaseZendeskWalkthrough,
  })),
)
const BusinessRequirements = lazy(() =>
  import("@/components/business-requirements").then((module) => ({ default: module.BusinessRequirements })),
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
        
      // case "knowledge-base-zendesk":
      //   return (
      //     <Suspense fallback={<LoadingSpinner />}>
      //       <KnowledgeBaseZendesk />
      //     </Suspense>
      //   )
      case "knowledge-base-document360":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseDocument360 />
          </Suspense>
        )
      case "knowledge-base-docusaurus":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseDocusaurus />
          </Suspense>
        )
      case "knowledge-base-zendesk-walkthrough":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseZendeskWalkthrough />
          </Suspense>
        )
      case "business-requirements":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BusinessRequirements />
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
