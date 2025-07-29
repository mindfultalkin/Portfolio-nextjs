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
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Snapshots:
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/docusaurus/1.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Welcome Page / Training Portal</h3>
                                <p>Acts as the landing page and entry to the training modules.</p>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Welcome message, “Click here to begin” CTA, links to features like SOP, Support, Simulation, etc.</li>
                                    <li>User Action / Flow: User clicks to begin their training journey.</li>
                                </ul>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/docusaurus/3.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Overview of Product</h3>
                                <p>Introduction to product structure and functionality.</p>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Branded logo, modules like User Management, Setup, Functional Flow.</li>
                                    <li>User Action / Flow: Choose any sub-topic to continue.</li>
                                </ul>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/docusaurus/4.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Glossary</h3>
                                <p>Provides definitions for pharmaceutical and platform terms.</p>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Key Elements: Alphabet filters, entries for API, FG, SFG.</li>
                                    <li>User Action / Flow: User browses or looks up unfamiliar terms.</li>
                                </ul>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/docusaurus/5.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="space-y-2 text-[#666666]">
                                <h3 className="font-semibold">Functional Flow</h3>
                                <p>Visual explanation of the process flow (e.g., QC or manufacturing workflow).</p>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Flowchart diagram with decision nodes, sample testing path, re-test logic.</li>
                                    <li>User Action / Flow: Follow visual logic for process understanding.</li>
                                </ul>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
