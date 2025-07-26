"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Docusaurus() {
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
                                Training Portal
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Docusaurus | Documentation Twin | Ongoing
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We built a complete training portal for a manufacturing company from the ground up. The key highlights are:
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Structured and intuitive learning path</li>
                                <li>Guided walkthrough with a documentation twin</li>
                                <li>Glossary and References</li>
                                <li>Configuration guidance with functional diagrams</li>
                                <li>Docusaurus platform (free and open source)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Page-Wise Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Page-Wise Documentation Workflow Matrix:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Page</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Section Title</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Purpose/Key Outputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">1</td>
                                            <td className="p-3 border border-[#e8e5db]">Welcome Page / Portal Home</td>
                                            <td className="p-3 border border-[#e8e5db]">Introduction to the platform with categories like Product Features, SOP, Support, etc.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">2</td>
                                            <td className="p-3 border border-[#e8e5db]">Training Home</td>
                                            <td className="p-3 border border-[#e8e5db]">Navigation hub with links to Overview of Product, Setup, User Mgmt, Virtual Tour, etc.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3</td>
                                            <td className="p-3 border border-[#e8e5db]">Overview of Product</td>
                                            <td className="p-3 border border-[#e8e5db]">Entry point into grouped learning modules like User Mgmt, Configuration, Functional Flow.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">4</td>
                                            <td className="p-3 border border-[#e8e5db]">Glossary</td>
                                            <td className="p-3 border border-[#e8e5db]">List of domain-specific abbreviations (e.g., API, FG, SFG).</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">5</td>
                                            <td className="p-3 border border-[#e8e5db]">Functional Flow</td>
                                            <td className="p-3 border border-[#e8e5db]">Quality Control diagram for process steps; visual SOPs for product lifecycle.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Our documentation workflow followed a structured set of steps and activities - from planning, content creation, review, and publishing. This ensured consistent quality across the 60+ articles.
                            </p> */}
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Snapshots:
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* <p className="text-[#666666]">
                                The Secuvy product served two distinct user groups: Chief Information Security Officers (CISOs) and Information Security Architects. The knowledgebase landing page was designed with a clean, intuitive layout that clearly presented two separate user journeys, allowing each audience to navigate content relevant to their needs.
                            </p>
                            <div className="space-y-2 text-[#666666]">
                                <p>Screenshots are captured and annotated to:</p>
                                <ul className="list-disc list-inside">
                                    <li>Highlight and draw the attention of the user to all key features/insights in the screen</li>
                                    <li>Draw the attention of the user to all key features/insights available to them</li>
                                </ul>
                            </div> */}
                            <Image
                                src="/docusaurus/1.png"
                                width={800}
                                height={600}
                                alt="Snapshot 1"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <Image
                                src="/docusaurus/3.png"
                                width={800}
                                height={600}
                                alt="Snapshot 1"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <Image
                                src="/docusaurus/4.png"
                                width={800}
                                height={600}
                                alt="Snapshot 1"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <Image
                                src="/docusaurus/5.png"
                                width={800}
                                height={600}
                                alt="Snapshot 1"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Wiki Portal
                            </CardTitle>
                            <p className="text-[#666666]">
                                Microsoft SharePoint | Dynamic and Static Content | Access controlled content
                            </p>
                            <p className="text-[#666666]">
                                We built a proof of concept of a Wiki portal for a medical billing company. The company dealt with large amounts of static data combined with dynamic data updates that arrived periodically...
                            </p>
                            <div className="space-y-2 text-[#666666]">
                                <p>The key highlights are:</p>
                                <ul className="list-disc list-inside">
                                    <li>General static content accessible to all</li>
                                    <li>Team-specific data for the same topics</li>
                                    <li>Data access is team-based</li>
                                    <li>Dynamic data is updated</li>
                                    <li>Search results to show both dynamic and static content</li>
                                </ul>
                            </div>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Snapshots:
                            </CardTitle>
                            <p className="text-[#666666]">
                                comment: I will share the videos to be used here - you can put some screenshots from that

                            </p>

                            {/* Video Section */}
                            {/* <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">Video Walkthrough</h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="video/secuvy-portal-walkthrough.mp4"
                                        controls
                                        className="w-full h-full rounded-lg"
                                    >
                                    </video>
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
