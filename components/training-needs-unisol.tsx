"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function TrainingNeedsUnisol() {
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
                                Training Needs Report - Unisol
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Training Needs Report | 30+ insights | 8 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this training needs report to support Unisol’s transformation into a market-leading solutions partner for fiber optic products and services. With clients across telecom, IT, energy, defence, and infrastructure, Unisol is poised to scale — but needed structured training, stronger internal processes, and enhanced cross-functional collaboration.<br />This document captures insights from leadership and team discussions, identifying gaps in communication, coordination, product understanding, and sales enablement. The recommendations serve as a roadmap for institutionalizing knowledge, building customer trust, and driving consistent performance across departments.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Understand current team capabilities and design a company-wide training and process improvement plan.</li>
                                <li>Product knowledge gaps, especially in new team members.</li>
                                <li>Fragmented sales, procurement, and project handoffs.</li>
                                <li>Limited documentation of institutional knowledge.</li>
                                <li>Empower Unisol teams to close more deals, improve project execution, and enhance customer relationships.</li>
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Training Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Topics Covered</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Target Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Customer Management</td>
                                            <td className="p-3 border border-[#e8e5db]">Objection handling, paraphrasing, empathy, follow-ups</td>
                                            <td className="p-3 border border-[#e8e5db]">Build trust and long-term customer relationships</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Business Storytelling</td>
                                            <td className="p-3 border border-[#e8e5db]">Success stories, context-based selling</td>
                                            <td className="p-3 border border-[#e8e5db]">Sell with confidence using real examples</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Team Collaboration</td>
                                            <td className="p-3 border border-[#e8e5db]">Inter-team support, clarity in handoffs</td>
                                            <td className="p-3 border border-[#e8e5db]">Increase efficiency and reduce delays in execution</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Adaptive Communication</td>
                                            <td className="p-3 border border-[#e8e5db]">Email writing, WhatsApp etiquette, meeting conduct</td>
                                            <td className="p-3 border border-[#e8e5db]">Professional communication across all channels</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Product Knowledge</td>
                                            <td className="p-3 border border-[#e8e5db]">OEM vs trading, proposal prep, demo training</td>
                                            <td className="p-3 border border-[#e8e5db]">Faster onboarding, better quoting and closure rates</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Process Clarity</td>
                                            <td className="p-3 border border-[#e8e5db]">Procurement flow, receivables, status updates</td>
                                            <td className="p-3 border border-[#e8e5db]">Ensure all teams operate with shared visibility and accountability</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Continuous Learning</td>
                                            <td className="p-3 border border-[#e8e5db]">Knowledge-sharing sessions, senior mentorship</td>
                                            <td className="p-3 border border-[#e8e5db]">Institutionalize knowledge for scalable growth</td>
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
                                Training Needs Report Example
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/consulting/training-needs-unisol.pdf"
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
