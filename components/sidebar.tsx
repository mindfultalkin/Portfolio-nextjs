"use client"

import { useState, useCallback, useMemo } from "react"
import { ChevronDown, ChevronRight, Menu, X, Home } from "lucide-react"

const navigationItems = [
  {
    title: "Knowledge Base",
    children: [
      { title: "Data Security Software", href: "/knowledge-base/data-security-software" },
      { title: "Document360", href: "/knowledge-base/document360" },
      { title: "Docusaurus", href: "/knowledge-base/docusaurus" },
      { title: "Share Point", href: "/knowledge-base/share-point" },
    ],
  },
  {
    title: "SDLC",
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
  // {
  //   title: "Content Strategy",
  //   children: [
  //     { title: "FAQs, Troubleshooting Tips, and Glossary", href: "/content-strategy/faqs-troubleshooting" },
  //     { title: "Product Requirements Specifications", href: "/content-strategy/product-requirements" },
  //     { title: "User Manuals", href: "/content-strategy/user-manuals" },
  //   ],
  // },
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
    children: [
      { title: "Talent Acquisition", href: "/sop/talent-acquisition" },
      { title: "Furniture Maker Processes", href: "/sop/furniture-maker-processes" },
    ],
  },
  {
    title: "Training Content",
    children: [
      { title: "Health Insurance Cost-of-Care Scenarios", href: "/training-content/health-insurance-scenarios" },
      { title: "Denial Code CO 197", href: "/training-content/denial-code-co-197" },
      // { title: "Why Are Questions Important?", href: "/training-content/questions-importance" },
      { title: "Unisol Sales Objection Handling", href: "/training-content/unisol-objection-handling" },
      { title: "Bethliving Sales Success Guide", href: "/training-content/bethliving-sales-success" },
      { title: "Bethliving Objection Handling Guide", href: "/training-content/bethliving-objection-handling" },
      { title: "Bethliving 9 USPs Guide", href: "/training-content/bethliving-9-usps" },
      { title: "Bethliving Storytelling for Sales", href: "/training-content/bethliving-storytelling" },
      { title: "Bethliving CRM Training Guide", href: "/training-content/bethliving-crm-training" },
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
      { title: "Digital Transformation for Customer-Centric Experiences", href: "/blogs/digital-transformation-customer-centric", },
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

export function Sidebar({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Knowledge Base", "Software Development Life Cycle"])
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const navRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      // Restore scroll position from sessionStorage if it exists
      const savedScrollPosition = sessionStorage.getItem('sidebarScrollPosition')
      if (savedScrollPosition) {
        node.scrollTop = parseInt(savedScrollPosition, 10)
      }
    }
  }, [])

  const handleScroll = useCallback((e: React.UIEvent<HTMLElement>) => {
    // Save scroll position to sessionStorage
    sessionStorage.setItem('sidebarScrollPosition', e.currentTarget.scrollTop.toString())
  }, [])

  const toggleExpanded = useCallback((title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }, [])

  const handleNavigation = useCallback(
    (href: string) => {
      // Special handling for specific pages
      if (href === "/api-docs/communication-coach-bot") {
        onNavigate("communication-coach-bot")
      } else if (href === "/knowledge-base/data-security-software") {
        onNavigate("data-security-software")
      } else if (href === "/knowledge-base/document360") {
        onNavigate("document360")
      } else if (href === "/knowledge-base/docusaurus") {
        onNavigate("docusaurus")
      } else if (href === "/knowledge-base/share-point") {
        onNavigate("share-point")
      } else if (href === "/sdlc/business-requirements") {
        onNavigate("business-requirements")
      } else if (href === "/sdlc/system-architecture") {
        onNavigate("system-architecture")
      } else if (href === "/sdlc/product-development") {
        onNavigate("product-development")
      } else if (href === "/user-manual/globocast-live") {
        onNavigate("globocast-live")
      } else if (href === "/content-strategy/faqs-troubleshooting") {
        onNavigate("faqs-troubleshooting")
      } else if (href === "/content-strategy/product-requirements") {
        onNavigate("product-requirements")
      } else if (href === "/content-strategy/user-manuals") {
        onNavigate("user-manuals")
      } else if (href === "/product-tour/flow-of-english") {
        onNavigate("flow-of-english")
      } else if (href === "/sop/talent-acquisition") {
        onNavigate("talent-acquisition")
      } else if (href === "/sop/furniture-maker-processes") {
        onNavigate("furniture-maker-processes")
      } else if (href === "/product-video/approvals-access") {
        onNavigate("approvals-access")
      } else if (href === "/product-video/apply-leave") {
        onNavigate("apply-leave")
      } else if (href === "/product-video/compensatory-off") {
        onNavigate("compensatory-off")
      } else if (href === "/product-video/navigating-media-library") {
        onNavigate("navigating-media-library")
      } else if (href === "/product-video/adjusting-flexible-duration") {
        onNavigate("adjusting-flexible-duration")
      } else if (href === "/product-video/update-seo") {
        onNavigate("update-seo")
      } else if (href === "/product-marketing/temperature-automation") {
        onNavigate("temperature-automation")
      } else if (href === "/product-marketing/elpis-platform") {
        onNavigate("elpis-platform")
      } else if (href === "/consulting/training-needs-bethliving") {
        onNavigate("training-needs-bethliving")
      } else if (href === "/consulting/training-needs-unisol") {
        onNavigate("training-needs-unisol")
      } else if (href === "/consulting/training-needs-hudini") {
        onNavigate("training-needs-hudini")
      } else if (href === "/blogs/flipped-class-microlearning") {
        onNavigate("flipped-class-microlearning")
      } else if (href === "/blogs/khan-academy-beam") {
        onNavigate("khan-academy-beam")
      } else if (href === "/blogs/elpis-empowering-msmes") {
        onNavigate("elpis-empowering-msmes")
      } else if (href === "/blogs/digital-transformation-customer-centric") {
        onNavigate("digital-transformation-customer-centric")
      } else if (href === "/blogs/maypole-dance-manageddevops") {
        onNavigate("maypole-dance-manageddevops")
      } else if (href === "/blogs/deliberate-decide-data") {
        onNavigate("deliberate-decide-data")
      } else if (href === "/training-content/health-insurance-scenarios") {
        onNavigate("health-insurance-scenarios")
      } else if (href === "/training-content/denial-code-co-197") {
        onNavigate("denial-code-co-197")
        // } else if (href === "/training-content/questions-importance") {
        //   onNavigate("questions-importance")
      } else if (href === "/training-content/unisol-objection-handling") {
        onNavigate("unisol-objection-handling")
      } else if (href === "/training-content/bethliving-sales-success") {
        onNavigate("bethliving-sales-success")
      } else if (href === "/training-content/bethliving-objection-handling") {
        onNavigate("bethliving-objection-handling")
      } else if (href === "/training-content/bethliving-9-usps") {
        onNavigate("bethliving-9-usps")
      } else if (href === "/training-content/bethliving-storytelling") {
        onNavigate("bethliving-storytelling")
      } else if (href === "/training-content/bethliving-crm-training") {
        onNavigate("bethliving-crm-training")
      } else if (href === "/training-content/streamlining-post-sales") {
        onNavigate("streamlining-post-sales")
      } else {
        // Default navigation for other items (can be expanded later)
        onNavigate(href.replace("/", ""))
      }
      setIsMobileOpen(false) // Close mobile menu after navigation
    },
    [onNavigate],
  )

  const SidebarContent = useMemo(
    () => () => (
      <div className="h-full bg-[#f0ede3] border-r border-[#e8e5db] shadow-lg">
        <div className="p-4 sm:p-6 border-b border-[#e8e5db]">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center space-x-3 w-full hover:bg-[#ebe8dd] rounded-lg p-2 transition-colors duration-200"
          >
            <img
              src="/mindful_logo.png"
              alt="Portfolio Logo"
              className="h-12 w-auto object-contain"
            />
          </button>
        </div>

        <nav
          ref={navRef}
          onScroll={handleScroll}
          className="p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto scrollbar-hide"
          style={{ maxHeight: "calc(100vh - 120px)" }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Home Button */}
          <button
            onClick={() => onNavigate("home")}
            className="w-full flex items-center space-x-3 p-2 sm:p-3 text-left text-[#2c2c2c] hover:bg-[#ebe8dd] rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0894b5] focus:ring-opacity-50"
            aria-label="Go to home page"
          >
            <Home className="w-4 h-4 text-[#666666] flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium">Home</span>
          </button>

          {navigationItems.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(item.title)}
                    className="w-full flex items-center justify-between p-2 sm:p-3 text-left text-[#2c2c2c] hover:bg-[#ebe8dd] rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0894b5] focus:ring-opacity-50"
                    aria-expanded={expandedItems.includes(item.title)}
                    aria-controls={`submenu-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <span className="text-sm sm:text-base font-medium truncate">{item.title}</span>
                    {expandedItems.includes(item.title) ? (
                      <ChevronDown className="w-4 h-4 text-[#666666] flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#666666] flex-shrink-0" />
                    )}
                  </button>
                  {expandedItems.includes(item.title) && (
                    <div
                      className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1"
                      id={`submenu-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => handleNavigation(child.href)}
                          className="w-full text-left block p-2 text-xs sm:text-sm text-[#666666] hover:text-[#0894b5] hover:bg-[#ebe8dd] rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0894b5] focus:ring-opacity-50"
                          role="menuitem"
                        >
                          <span className="truncate block">{child.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation(item.href || "#")}
                  className={`block p-2 sm:p-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${item.active
                    ? "bg-[#0894b5] text-[#fffcf3] shadow-md focus:ring-[#fffcf3]"
                    : "text-[#2c2c2c] hover:bg-[#ebe8dd] focus:ring-[#0894b5]"
                    }`}
                >
                  <span className="truncate block">{item.title}</span>
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
    ),
    [expandedItems, handleNavigation, onNavigate],
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
