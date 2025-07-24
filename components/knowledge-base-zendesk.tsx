import Image from "next/image"
import { BookOpen, Settings, Search, Workflow } from "lucide-react"

export function KnowledgeBaseZendesk() {
  // Steps for the inline SVG flowchart
  const steps = [
    "Planning",
    "Authoring",
    "Review",
    "Design",
    "Publish",
    "Optimize",
  ]

  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
      {/* Header Section */}
      <div className="relative overflow-hidden border-[#e8e5db]">
        <div className="absolute inset-0 from-[#0894b5]/5 to-[#f48d03]/5" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#0894b5]/15 border border-[#0894b5]/20 rounded-full text-[#0894b5] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Knowledge Base</span>a
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Secuvy.ai Help Center Documentation
            </h1>
            <p className="text-lg sm:text-xl text-[#666666] max-w-3xl leading-relaxed">
              A visual guide to our comprehensive documentation process, showcasing how we planned, created, reviewed, and published 60+ articles over three months. The articles incorporate SEO keywords and meta information to make it easily searchable by users in a Knowledgebase. The knowledgebase was enhanced using a custom theme on Zendesk that provided features like tabs and accordions to use the data efficiently
            </p>
          </div>
        </div>
      </div>

      {/* Overview Matrix Section */}
      <section id="doc-matrix" className="px-4 sm:px-6 lg:px-8 py-12 border-[#e8e5db]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Matrix</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-[#e8e5db] rounded-xl">
              <thead className="bg-white border-b">
                <tr>
                  <th className="px-4 py-2">Step</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Deliverable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-4 py-2">Plan</td>
                  <td className="px-4 py-2">Understand the subject and topics, target audience for the knowledgebase, and their usage pattern. Discuss the cost and presentation timelines</td>
                  <td className="px-4 py-2">Knowledgebase recommendation (with suitable theme). Content layout and hierarchy.</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-2">Product Immersion</td>
                  <td className="px-4 py-2">Research the domain and understand the product; Interview the SMEs; Read other relevant literature already available.</td>
                  <td className="px-4 py-2">Understanding the product and gaining domain-specific information.</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-2">Author</td>
                  <td className="px-4 py-2">Write articles on the topics targeted for the persona</td>
                  <td className="px-4 py-2">Draft articles with good readability score</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-2">Illustrate</td>
                  <td className="px-4 py-2">Create screenshots, diagrams, and visual assets.</td>
                  <td className="px-4 py-2">Visual assets</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-2">Review</td>
                  <td className="px-4 py-2">Peer review, fact-checking, style compliance (Internal and with customer).</td>
                  <td className="px-4 py-2">Reviewed docs</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-4 py-2">Publish</td>
                  <td className="px-4 py-2">Deploy on Zendesk; Adjust to theme to increase interaction and engagement.</td>
                  <td className="px-4 py-2">Live articles</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2">Optimize</td>
                  <td className="px-4 py-2">Refine keywords.</td>
                  <td className="px-4 py-2">Improved searchability.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[#666666]">
            This matrix maps every stage of our documentation workflow to its key outputs, ensuring consistent
            quality and measurable progress across 60+ articles.
          </p>
        </div>
      </section>

      {/* Flowchart Section */}
      {/* <section id="doc-process" className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Documentation Process Flowchart</h2>
          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 720 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-full h-auto">
              {steps.map((step, i) => (
                <g key={i}>
                  <rect
                    x={i * 120}
                    y={20}
                    width={100}
                    height={60}
                    rx={8}
                    fill="#0894b5"
                    fillOpacity={0.1}
                    stroke="#0894b5"
                  />
                  <text
                    x={i * 120 + 50}
                    y={55}
                    textAnchor="middle"
                    fill="#2c2c2c"
                    fontSize={12}>
                    {step}
                  </text>
                  {i < steps.length - 1 && (
                    <polygon
                      points={`${i * 120 + 100},50 ${i * 120 + 115},45 ${i * 120 + 115},55`}
                      fill="#0894b5"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>
          <p className="mt-4 text-[#666666]">
            This flowchart, created in Lucidchart and exported as SVG, visualizes our end-to-end process—from initial
            planning through SEO-driven optimization—ensuring transparency and alignment across teams.
          </p>
        </div>
      </section> */}

      {/* Images Section with Enriched Visual Captions */}
      <div className="mt-12 space-y-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <figure className="bg-[#f5f2e8] p-4 rounded-xl border border-[#e8e5db] shadow-md">
          <h3 className="text-lg font-semibold mb-2">Help Center Landing Page</h3>
          <Image
            src="/images/1.png"
            alt="Secuvy.ai Help Center Overview Page"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded-lg"
          />
          <figcaption className="text-sm text-[#666666] mt-2">
            The Secuvy product had two kinds of users - Chief Information Security Officers and the Information Security Architects. The landing page was simple and clear to show two different paths to proceed for the end user’s purpose
          </figcaption>
        </figure>

        <figure className="bg-[#f5f2e8] p-4 rounded-xl border border-[#e8e5db] shadow-md">
          <h3 className="text-lg font-semibold mb-2">Knowledge Base Navigation and Accessibility</h3>
          <Image
            src="/images/2.png"
            alt="Secuvy.ai Knowledge Base Categories"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded-lg"
          />
          <figcaption className="text-sm text-[#666666] mt-2">
            The knowledgebase features a side menu with a full table of contents, allowing users to quickly navigate through topics organized into two levels of sub-categories.
          </figcaption>
        </figure>

        <figure className="bg-[#f5f2e8] p-4 rounded-xl border border-[#e8e5db] shadow-md">
          <h3 className="text-lg font-semibold mb-2">Visual elements to illustrate and simplify</h3>
          <Image
            src="/images/3.png"
            alt="Subject Access Requests (SARs) Article"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded-lg"
          />
          <figcaption className="text-sm text-[#666666] mt-2">
            Complex workflows are simplified with flowcharts that bring clarity to the reader.
          </figcaption>
        </figure>

        <figure className="bg-[#f5f2e8] p-4 rounded-xl	border border-[#e8e5db] shadow-md">
          <h3 className="text-lg font-semibold mb-2">Screenshots:</h3>
          <Image
            src="/images/4.png"
            alt="DSAR Settings Configuration"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded-lg"
          />
          <figcaption className="text-sm text-[#666666] mt-2">
            Screenshots are captured and annotated to highlight and draw the attention of the user to all key features/insights in the screen. 
          </figcaption>
        </figure>

        <figure className="bg-[#f5f2e8] p-4 rounded-xl	border border-[#e8e5db] shadow-md">
          <h3 className="text-lg font-semibold mb-2">Explainer or Concept Notes</h3>
          <Image
            src="/images/5.png"
            alt="DSAR Process Flow Graphic"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded-lg"
          />
          <figcaption className="text-sm text-[#666666] mt-2">
            Domain specific information augments how-to articles. This enhances the usage of the product and helps educate readers about the subject before showing how to proceed with it in the product.
          </figcaption>
        </figure>

      </div>
    </div>
  )
}
