import Image from "next/image"

export function KnowledgeBaseDocusaurus() {
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
                Training Interface Overview
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#666666] mb-4">
                The training interface for the new Mindfultalk project provides a structured, intuitive, and visually guided
                environment for learners to gain a comprehensive understanding of the platform and its operational procedures.
                Designed with clarity and user progression in mind, the portal offers modular learning paths, glossary
                references, functional diagrams, and step-by-step configuration guidance.
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

      {/* Matrix: Page-Wise Analysis */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[#f5f2e8]/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 text-[#2c2c2c]">
              Page-Wise Analysis
            </h2>
          </div>

          {/* Item 1 */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Welcome Page / Training Portal</h3>
            <Image
              src="docusaurus/welcome-page.png"
              alt="Welcome Page / Training Portal"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl border border-[#e8e5db] shadow-sm"
            />
            <p className="text-sm text-[#666666] mt-4">
              <strong>Purpose:</strong> Acts as the landing page and entry to the training modules.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>Key Elements:</strong> Welcome message, “Click here to begin” CTA, links to features like SOP, Support, Simulation, etc.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>User Action / Flow:</strong> User clicks to begin their training journey.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Training Home</h3>
            <Image
              src="docusaurus/training-home.png"
              alt="Training Home"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl border border-[#e8e5db] shadow-sm"
            />
            <p className="text-sm text-[#666666] mt-4">
              <strong>Purpose:</strong> Central hub for all modules and sections.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>Key Elements:</strong> Left-side collapsible menu, “Next” button to start overview.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>User Action / Flow:</strong> Begin navigation into content sections.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Overview of Product</h3>
            <Image
              src="docusaurus/overview-product.png"
              alt="Overview of Product"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl border border-[#e8e5db] shadow-sm"
            />
            <p className="text-sm text-[#666666] mt-4">
              <strong>Purpose:</strong> Introduction to product structure and functionality.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>Key Elements:</strong> Branded logo, modules like User Management, Setup, Functional Flow.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>User Action / Flow:</strong> Choose any sub-topic to continue.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Glossary</h3>
            <Image
              src="docusaurus/glossary.png"
              alt="Glossary"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl border border-[#e8e5db] shadow-sm"
            />
            <p className="text-sm text-[#666666] mt-4">
              <strong>Purpose:</strong> Provides definitions for pharmaceutical and platform terms.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>Key Elements:</strong> Alphabet filters, entries for API, FG, SFG.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>User Action / Flow:</strong> User browses or looks up unfamiliar terms.
            </p>
          </div>

          {/* Item 5 */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Functional Flow</h3>
            <Image
              src="docusaurus/functional-flow.png"
              alt="Functional Flow"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl border border-[#e8e5db] shadow-sm"
            />
            <p className="text-sm text-[#666666] mt-4">
              <strong>Purpose:</strong> Visual explanation of the process flow (e.g., QC or manufacturing workflow).
            </p>
            <p className="text-sm text-[#666666]">
              <strong>Key Elements:</strong> Flowchart diagram with decision nodes, sample testing path, re-test logic.
            </p>
            <p className="text-sm text-[#666666]">
              <strong>User Action / Flow:</strong> Follow visual logic for process understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
