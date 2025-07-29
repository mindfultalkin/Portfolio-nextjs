"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function UserManuals() {
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
                                User Manual & Use Cases
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                User Manual & Use Cases | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this document to highlight how well-written user manuals and use cases play a pivotal role in enabling both customers and internal teams to fully understand and use a product. Whether it’s helping a new customer explore a complex UI or onboarding a support engineer, good documentation reduces friction and boosts satisfaction.<br/>At mindfultalk.in, we specialize in crafting comprehensive and discoverable user-facing documentation that improves feature adoption and drives long-term engagement.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Without clear documentation, customers may avoid or abandon features they don’t understand.</li>
                                <li>Walk users through product setup, UI, and advanced capabilities.</li>
                                <li>Encourage independent learning and reduce support requests.</li>
                                <li>Help both internal and external stakeholders grasp the practical impact of product features.</li>
                                <li>Improve customer satisfaction and retention by providing clear, actionable guidance.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Documentation Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Our documentation process is designed to ensure that every piece of content is accurate, relevant, and easy to find. We follow a structured workflow that includes:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Section</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Topic</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Purpose / Value Delivered</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Overview</td>
                                            <td className="p-3 border border-[#e8e5db]">Importance of Manuals & Use Cases</td>
                                            <td className="p-3 border border-[#e8e5db]">Establishes the role of structured documentation in SaaS success</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">User Manuals</td>
                                            <td className="p-3 border border-[#e8e5db]">Setup, Features, UI Walkthrough</td>
                                            <td className="p-3 border border-[#e8e5db]">Guides end users through product usage with clarity and confidence</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Use Cases</td>
                                            <td className="p-3 border border-[#e8e5db]">Feature Impact in Practice</td>
                                            <td className="p-3 border border-[#e8e5db]">Demonstrates real-world scenarios to improve understanding and adoption</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Customer Example</td>
                                            <td className="p-3 border border-[#e8e5db]">Amagi Cloudport Manual</td>
                                            <td className="p-3 border border-[#e8e5db]">Case study showcasing complete onboarding-to-feature-usage documentation</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Best Practices</td>
                                            <td className="p-3 border border-[#e8e5db]">Discoverability, Accuracy, Context</td>
                                            <td className="p-3 border border-[#e8e5db]">Ensures content is searchable, updated, and relevant to its intended audience</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This workflow ensures that our documentation is not only comprehensive but also user-friendly, enabling both customers and internal teams to fully leverage the product's capabilities.
                            </p>
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                User Manual Example
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/content-strategy/user-manuals.pdf"
                                    scale={100}
                                    showControls={true}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}
