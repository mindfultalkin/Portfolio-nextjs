"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { CommunicationCoachBot } from "@/components/communication-coach-bot"
import { KnowledgeBaseZendesk } from "@/components/knowledge-base-zendesk" // Import the new component
import { KnowledgeBaseDocument360 } from "@/components/knowledge-base-document360"
import { KnowledgeBaseDocusaurus } from "@/components/knowledge-base-docusaurus" // Import the new component
import { KnowledgeBaseZendeskWalkthrough } from "@/components/knowledge-base-zendesk-walkthrough" // Import the new component
import { BusinessRequirements } from "@/components/business-requirements"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderContent = () => {
    switch (currentPage) {
      case "communication-coach-bot":
        return <CommunicationCoachBot />
      case "knowledge-base-zendesk": // Add new case for Zendesk KB
        return <KnowledgeBaseZendesk />
      case "knowledge-base-document360": // Add new case for Document360 KB
        return <KnowledgeBaseDocument360 />
      case "knowledge-base-docusaurus": // Add new case for Docusaurus KB
        return <KnowledgeBaseDocusaurus />
      case "knowledge-base-zendesk-walkthrough": // Add new case for Zendesk Walkthrough
        return <KnowledgeBaseZendeskWalkthrough />
      case "business-requirements": // Add new case for Business Requirements
        return <BusinessRequirements />
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
