import Image from "next/image"
import { BookOpen, Settings, Search, Workflow } from "lucide-react"

export function KnowledgeBaseZendesk() {
  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
      {/* Header Section */}
      <div className="relative overflow-hidden border-b border-[#e8e5db]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0894b5]/5 to-[#f48d03]/5" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#0894b5]/15 border border-[#0894b5]/20 rounded-full text-[#0894b5] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-[#2c2c2c]">
              Knowledge Base using Zendesk
            </h1>
            <p className="text-lg sm:text-xl text-[#666666] mb-6 sm:mb-8 max-w-3xl leading-relaxed">
              An overview of the Secuvy.ai Help Center, its features, and how it assists users with privacy compliance
              tools.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Secuvy.ai Help Center Overview</h2>
          <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm mb-8">
            <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
              The Secuvy.ai Help Center is a comprehensive support portal designed to assist users in navigating the
              platform's features, modules, and privacy compliance tools. It offers a searchable knowledge base with two
              main sections:
            </p>
            <ul className="space-y-4 text-[#666666] mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-[#2c2c2c]">Product Overview</strong> – Provides insights into the Secuvy.ai
                  platform, highlighting its capabilities in data discovery, classification, and governance to support
                  compliance with global data privacy regulations.
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#f48d03] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-[#2c2c2c]">Getting Started</strong> – Offers guidance on setting up and using
                  various platform features.
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">
            Key Support Topics Illustrated in the Images
          </h2>
          <div className="space-y-6">
            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-[#0894b5] mr-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">Reclassifying Data</h3>
              </div>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Users can manually change classification, sensitivity, and document tags within the "Record Details"
                panel. The AI engine learns from these changes to improve future classifications.
              </p>
            </div>

            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <div className="flex items-center mb-4">
                <Search className="w-6 h-6 text-[#f48d03] mr-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">Data Subject Access Requests (DSARs)</h3>
              </div>
              <p className="text-base sm:text-lg text-[#666666] mb-4 leading-relaxed">
                A step-by-step DSAR Process Flow outlines how organizations can handle requests in accordance with GDPR,
                CCPA, and similar regulations. It includes:
              </p>
              <ul className="space-y-2 text-[#666666] ml-4 list-disc">
                <li>Configuration (privacy laws and templates)</li>
                <li>Fulfilling requests (via webforms or manual input)</li>
                <li>Monitoring (dashboards and audit logs)</li>
              </ul>
            </div>

            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <div className="flex items-center mb-4">
                <Workflow className="w-6 h-6 text-[#0894b5] mr-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">DSAR Workflow Setup</h3>
              </div>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Users configure SAR parameters through a dedicated SAR Settings panel, which includes three tabs:
                Privacy Law, Response Templates, and Report Config. This enables automated workflows for responding to
                subject access requests.
              </p>
            </div>

            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-[#f48d03] mr-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">Data Subject Request Workflow Diagram</h3>
              </div>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                A visual workflow depicts the lifecycle of a request—from submission and email verification to final
                approval or rejection by the Data Privacy Officer, including optional documentation steps.
              </p>
            </div>

            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-[#0894b5] mr-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">SAR Settings Detailed Explanation</h3>
              </div>
              <p className="text-base sm:text-lg text-[#666666] mb-4 leading-relaxed">
                Settings allow organizations to:
              </p>
              <ul className="space-y-2 text-[#666666] ml-4 list-disc">
                <li>Define request expiry timelines</li>
                <li>Automate reminder/notification emails</li>
                <li>Handle unverified or bot requests</li>
                <li>Configure retention periods after data transfers</li>
              </ul>
            </div>
          </div>

          {/* Images Section */}
          <div className="mt-12 space-y-8">
            <div className="bg-[#f5f2e8] p-4 rounded-xl border border-[#e8e5db] shadow-md">
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-4">Subject Access Requests (SARs) Page Example</h3>
              <Image
                src="/images/secuvy-sar.png"
                alt="Secuvy.ai Subject Access Requests (SARs) Page"
                width={1200}
                height={800}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            <div className="bg-[#f5f2e8] p-4 rounded-xl border border-[#e8e5db] shadow-md">
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-4">Secuvy.ai Help Center Landing Page</h3>
              <Image
                src="/images/secuvy-help-center.png"
                alt="Secuvy.ai Help Center Overview Page"
                width={1200}
                height={800}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
