"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"

const navigationItems = [
  {
    title: "Knowledge Base",
    children: [
      { title: "Knowledge Base using Zendesk", href: "/knowledge-base/zendesk" },
      { title: "Knowledge Base using Document360", href: "/knowledge-base/document360" },
      { title: "Knowledge Base using Docusaurus", href: "/knowledge-base/docusaurus" },
      { title: "Video Walkthrough of Zendesk Knowledge Base", href: "/knowledge-base/zendesk-walkthrough" },
    ],
  },
  {
    title: "Software Development Life Cycle",
    children: [
      { title: "Business Requirements", href: "/sdlc/business-requirements" },
      { title: "System Architecture", href: "/sdlc/system-architecture" },
      { title: "Product Development Approach", href: "/sdlc/product-development" },
    ],
  },
  {
    title: "User Manual",
    children: [{ title: "GloboCast Live", href: "/user-manual/globocast-live" }],
  },
  {
    title: "Content Strategy",
    children: [
      { title: "FAQs, Troubleshooting Tips, and Glossary", href: "/content-strategy/faqs-troubleshooting" },
      { title: "Product Requirements Specifications", href: "/content-strategy/product-requirements" },
      { title: "User Manuals", href: "/content-strategy/user-manuals" },
    ],
  },
  {
    title: "Product Tour/ User Onboarding",
    children: [{ title: "Flow of English", href: "/product-tour/flow-of-english" }],
  },
  {
    title: "API Docs",
    children: [{ title: "Communication Coach Bot", href: "/api-docs/communication-coach-bot" }],
  },
  {
    title: "SOP",
    children: [{ title: "SOP for the Talent Acquisition", href: "/sop/talent-acquisition" }],
  },
  {
    title: "Training Content",
    children: [
      { title: "Health Insurance Cost-of-Care Scenarios", href: "/training-content/health-insurance-scenarios" },
      { title: "Denial Code CO 197", href: "/training-content/denial-code-co-197" },
      { title: "Why Are Questions Important?", href: "/training-content/questions-importance" },
      { title: "Unisol Sales Objection Handling", href: "/training-content/unisol-objection-handling" },
      { title: "Bethliving Sales Success Guide", href: "/training-content/bethliving-sales-success" },
      { title: "Bethliving Objection Handling Guide", href: "/training-content/bethliving-objection-handling" },
      { title: "Bethliving 9 USPs Guide", href: "/training-content/bethliving-9-usps" },
      { title: "Bethliving Storytelling for Sales", href: "/training-content/bethliving-storytelling" },
      { title: "Bethliving CRM Training Guide", href: "/training-content/bethliving-crm-training" },
      { title: "Post Sales Journey", href: "/training-content/post-sales-journey" },
      { title: "Streamlining Post Sales Journey", href: "/training-content/streamlining-post-sales" },
    ],
  },
  {
    title: "Product Video",
    children: [
      { title: "Approvals Access", href: "/product-video/approvals-access" },
      { title: "Apply Leave", href: "/product-video/apply-leave" },
      { title: "Compensatory Off", href: "/product-video/compensatory-off" },
      { title: "Navigating Media Library", href: "/product-video/navigating-media-library" },
      { title: "Adjusting Flexible Duration", href: "/product-video/adjusting-flexible-duration" },
      { title: "How to Update SEO", href: "/product-video/update-seo" },
    ],
  },
  {
    title: "Product Marketing",
    children: [
      { title: "Temperature Automation", href: "/product-marketing/temperature-automation" },
      { title: "Elpis Platform", href: "/product-marketing/elpis-platform" },
    ],
  },
  {
    title: "Blogs/ White Paper",
    children: [
      { title: "Flipped Class and Microlearning", href: "/blogs/flipped-class-microlearning" },
      { title: "Khan Academy Project BEAM", href: "/blogs/khan-academy-beam" },
      { title: "Elpis Empowering MSMEs for Smart Manufacturing", href: "/blogs/elpis-empowering-msmes" },
      {
        title: "Digital Transformation for Customer-Centric Experiences",
        href: "/blogs/digital-transformation-customer-centric",
      },
      { title: "Maypole Dance with ManagedDevOps", href: "/blogs/maypole-dance-manageddevops" },
      { title: "Deliberate and Decide with Data", href: "/blogs/deliberate-decide-data" },
    ],
  },
  {
    title: "Consulting",
    children: [
      { title: "Training Needs Analysis - Bethliving", href: "/consulting/training-needs-bethliving" },
      { title: "Training Needs Report - Unisol", href: "/consulting/training-needs-unisol" },
      { title: "Training Needs Analysis - Hudini", href: "/consulting/training-needs-hudini" },
    ],
  },
]

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Knowledge Base", "Software Development Life Cycle"])
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const SidebarContent = () => (
    <div className="h-full bg-[#f0ede3] border-r border-[#e8e5db] shadow-lg">
      <div className="p-4 sm:p-6 border-b border-[#e8e5db]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0894b5] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-[#fffcf3] font-bold text-sm sm:text-base">MT</span>
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-[#2c2c2c] font-bold text-base sm:text-lg truncate">MindfulTalk.in</h1>
            <p className="text-[#666666] text-xs sm:text-sm truncate">Communication Excellence</p>
          </div>
        </div>
      </div>

      <nav
        className="p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto scrollbar-hide"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        {navigationItems.map((item) => (
          <div key={item.title}>
            {item.children ? (
              <div>
                <button
                  onClick={() => toggleExpanded(item.title)}
                  className="w-full flex items-center justify-between p-2 sm:p-3 text-left text-[#2c2c2c] hover:bg-[#ebe8dd] rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0894b5] focus:ring-opacity-50"
                >
                  <span className="text-sm sm:text-base font-medium truncate">{item.title}</span>
                  {expandedItems.includes(item.title) ? (
                    <ChevronDown className="w-4 h-4 text-[#666666] flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#666666] flex-shrink-0" />
                  )}
                </button>
                {expandedItems.includes(item.title) && (
                  <div className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block p-2 text-xs sm:text-sm text-[#666666] hover:text-[#0894b5] hover:bg-[#ebe8dd] rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0894b5] focus:ring-opacity-50"
                      >
                        <span className="truncate block">{child.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href || "#"}
                className={`block p-2 sm:p-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  item.active
                    ? "bg-[#0894b5] text-[#fffcf3] shadow-md focus:ring-[#fffcf3]"
                    : "text-[#2c2c2c] hover:bg-[#ebe8dd] focus:ring-[#0894b5]"
                }`}
              >
                <span className="truncate block">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 sm:p-3 bg-[#f5f2e8] border border-[#e8e5db] rounded-lg shadow-md hover:bg-[#ebe8dd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0894b5] focus:ring-opacity-50"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c2c2c]" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-72 xl:w-80 h-screen fixed left-0 top-0 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-[#2c2c2c] bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 w-72 sm:w-80 h-full">
            <div className="relative h-full">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#f5f2e8] border border-[#e8e5db] rounded-lg shadow-md hover:bg-[#ebe8dd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0894b5] focus:ring-opacity-50"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-[#2c2c2c]" />
              </button>
              <SidebarContent />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
