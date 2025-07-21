export function KnowledgeBaseZendeskWalkthrough() {
  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
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
                Secuvy Portal Walkthrough Video
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#666666] mb-4">
                The Secuvy Portal Walkthrough video offers a step-by-step visual guide through the core features and interface of the Secuvy platform. This portal appears to support data governance, privacy compliance, and security workflows, guiding users through discovery, classification, and access control functionalities.
              </p>
              <p className="text-[#666666]">
                The walkthrough is visually structured, with a clear user interface that emphasizes dashboards, search functions, and configuration tools, making it intuitive for data privacy and security professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_2zIrsZhM9jGu4gDLJ7CxcX4H9Tzs/XTOb1Hf4ddg_YvYfBJX43q/public/knowledge-base-video/secuvy-portal-walkthrough.mp4"
            controls
            className="w-full h-auto rounded-xl border border-[#e8e5db] shadow-sm"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
