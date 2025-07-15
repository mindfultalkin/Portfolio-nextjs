"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { CommunicationCoachBot } from "@/components/communication-coach-bot"
import { KnowledgeBaseZendesk } from "@/components/knowledge-base-zendesk" // Import the new component

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderContent = () => {
    switch (currentPage) {
      case "communication-coach-bot":
        return <CommunicationCoachBot />
      case "knowledge-base-zendesk": // Add new case for Zendesk KB
        return <KnowledgeBaseZendesk />
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
