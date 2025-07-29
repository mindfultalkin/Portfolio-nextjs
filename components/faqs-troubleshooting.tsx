"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function FAQsTroubleshooting() {
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
                                FAQs, Troubleshooting Tips & Glossary
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                FAQs, Troubleshooting Tips & Glossary | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this document to emphasize the importance of supporting documentation—FAQs, troubleshooting tips, and glossaries—as essential complements to core product content. These components improve customer success by making information easily discoverable, context-rich, and always up to date.<br />At mindfultalk.in, we help SaaS and product teams deliver right, ready, and relevant documentation that ensures customer satisfaction and reduces support load.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Gaps in documentation (especially FAQs and Glossaries) lead to product underutilization.</li>
                                <li>Helps customers find answers faster, resolve issues independently, and understand terminology.</li>
                                <li>Each entry is written with clear "why, what, who" to maximize relevance and usability.</li>
                                <li>Optimized with SEO keywords and meta descriptions for searchability.</li>
                                <li>Synced with product releases for accuracy and continued trust.</li>
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
                                This matrix outlines the key sections of our documentation, the types of content created, and the value delivered to users. Each component plays a crucial role in enhancing customer experience and product adoption.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Section</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Content Type</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Purpose / Value Delivered</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Intro & Context</td>
                                            <td className="p-3 border border-[#e8e5db]">Importance of Add-on Docs</td>
                                            <td className="p-3 border border-[#e8e5db]">Educates why FAQs and glossaries are critical alongside core docs</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">FAQs</td>
                                            <td className="p-3 border border-[#e8e5db]">Customer-Facing Support</td>
                                            <td className="p-3 border border-[#e8e5db]">Offers quick solutions to common user questions</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Troubleshooting</td>
                                            <td className="p-3 border border-[#e8e5db]">Self-Help Resolutions</td>
                                            <td className="p-3 border border-[#e8e5db]">Enables users to resolve common problems without contacting support</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Glossary</td>
                                            <td className="p-3 border border-[#e8e5db]">Terminology Reference</td>
                                            <td className="p-3 border border-[#e8e5db]">Explains key product or domain-specific terms in user-friendly language</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Documentation Tips</td>
                                            <td className="p-3 border border-[#e8e5db]">Writing Best Practices</td>
                                            <td className="p-3 border border-[#e8e5db]">Emphasizes clarity, accuracy, discoverability, and SEO alignment</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This matrix outlines the key sections of our documentation, the types of content created, and the value delivered to users. Each component plays a crucial role in enhancing customer experience and product adoption.
                            </p>
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                FAQs, Troubleshooting Tips & Glossary Document
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/content-strategy/faqs-troubleshooting.pdf"
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
