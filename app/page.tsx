import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#fffcf3]">
      <Sidebar />
      <main className="flex-1 lg:ml-72 xl:ml-80 transition-all duration-300">
        <MainContent />
      </main>
    </div>
  )
}
