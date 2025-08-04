"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"


export function DataSecuritySoftware() {
    const workflowSteps = [
        "Planning & Strategy",
        "Content Creation",
        "Technical Review",
        "Editorial Review",
        "Publishing & QA"
    ]

    return (
        <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Hero Section */}
                    <div className="text-center space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0894b5] leading-tight">
                                Data Security Software Help Center
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Zendesk | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We built a complete self-service portal for Data Security Software from the ground up. The key highlights are:
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>60+ detailed, user-friendly help articles</li>
                                <li>Optimized for search with keyword strategy and metadata</li>
                                <li>Customized Zendesk interface with collapsible sections and tabbed views</li>
                                <li>Delivered in 12 weeks, from planning to publishings</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Matrix
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Here's a visual guide to our end-to-end documentation process and outcomes as we turned the product complexity into clarity.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Stage</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Topic Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Key Outputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Overview</td>
                                            <td className="p-3 border border-[#e8e5db]">Product Overview</td>
                                            <td className="p-3 border border-[#e8e5db]">Summary of Data Security Software platform, features, modules, and compliance benefits.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Getting Started</td>
                                            <td className="p-3 border border-[#e8e5db]">Setup & Initialization</td>
                                            <td className="p-3 border border-[#e8e5db]">Steps to onboard and configure platform features and modules.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Legal Requests</td>
                                            <td className="p-3 border border-[#e8e5db]">Subject Access Requests (SARs)</td>
                                            <td className="p-3 border border-[#e8e5db]">SAR settings for GDPR/CCPA, email templates, expiry rules, verification steps, and automation.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Workflows</td>
                                            <td className="p-3 border border-[#e8e5db]">SAR Workflow Diagram</td>
                                            <td className="p-3 border border-[#e8e5db]">End-to-end request flow: submit, confirm, verify, approve/deny, or request more documentation.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Data Discovery</td>
                                            <td className="p-3 border border-[#e8e5db]">Data Sources & Classification</td>
                                            <td className="p-3 border border-[#e8e5db]">DB connection setup, auto-scan schedules, PII query definitions, and classification types.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Lifecycle Tracking</td>
                                            <td className="p-3 border border-[#e8e5db]">DSAR Process Flow</td>
                                            <td className="p-3 border border-[#e8e5db]">Configuration, request intake, approval assignments, report generation, monitoring, and audit trail.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Data Management</td>
                                            <td className="p-3 border border-[#e8e5db]">Reclassifying Data</td>
                                            <td className="p-3 border border-[#e8e5db]">How to update classification, sensitivity, and tagging via UI dropdown; AI learns from updates.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Our documentation workflow followed a structured set of steps and activities - from planning, content creation, review, and publishing. This ensured consistent quality across the 60+ articles.
                            </p>
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Take a tour of Data Security Software's Help Center
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <p className="text-[#666666]">
                                The Data Security Software product served two distinct user groups: Chief Information Security Officers (CISOs) and Information Security Architects. The knowledgebase landing page was designed with a clean, intuitive layout that clearly presented two separate user journeys, allowing each audience to navigate content relevant to their needs.
                            </p>

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/data-security-software/1.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Help Center Landing Page</h3>
                                <p>The Data Security Software product had two kinds of users - Chief Information Security Officers and the Information Security Architects. The landing page was simple and clear to show two different paths to proceed for the end user's purpose.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/data-security-software/2.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Knowledge Base Navigation and Accessibility</h3>
                                <p>The knowledgebase features a side menu with a full table of contents, allowing users to quickly navigate through topics organized into two levels of sub-categories.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/data-security-software/3.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Content layout for increased readability and accessibility DSAR Settings Configuration</h3>
                                <p>Using accordions while describing several parameters does not overwhelm the reader. Subsequently, an experienced user can easily choose the topic of interest to dive deeper. A mosaic of muted slate and dove-gray panels hosts three tabs bathed in cerulean blue. Sharp edges meet rounded corners in harmonious balance, conveying both the rigor of compliance and the ease of customization.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/data-security-software/4.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Visual elements to illustrate and simplify</h3>
                                <p>Complex workflows are simplified with flowcharts that bring clarity to the reader.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/data-security-software/5.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Screenshots:</h3>
                                <p>Screenshots are captured and annotated to highlight and draw the attention of the user to all key features/insights in the screen.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/data-security-software/6.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Explainer or Concept Notes</h3>
                                <p>Domain specific information augments how-to articles. This enhances the usage of the product and helps educate readers about the subject before showing how to proceed with it in the product.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">Video Walkthrough</h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="data-security-software/data-security-software.mp4"
                                        controls
                                        className="w-full h-full rounded-lg"
                                    >
                                    </video>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}
