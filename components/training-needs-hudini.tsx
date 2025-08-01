"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function TrainingNeedsHudini() {
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
                                Hudini - Training Needs Analysis
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Training Needs Analysis | 30+ articles | 8 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this report to help Hudini’s product and delivery teams consistently meet on-time delivery expectations as the company scales globally. As a fast-growing hospitality tech platform with 100+ integrations, Hudini faces challenges around process clarity, communication gaps, and limited product knowledge—all of which directly impact delivery timelines and client trust.<br/>This report is based on 1:1 conversations with senior leadership, project managers, developers, and functional heads, and presents a systems-level view of what’s affecting performance, along with clear recommendations for training and process restructuring.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Understand delays in software delivery and propose soft-skill, technical, and process-focused training interventions.</li>
                                <li>Systems-thinking approach + root cause analysis (RCA) through stakeholder interviews.</li>
                                <li>Build accountability, improve delivery confidence, and promote proactive, strategic thinking among teams.</li>
                                <li>Lack of product documentation and domain knowledge</li>
                                <li>Inadequate estimation practices and cross-team coordination</li>
                                <li>Need for process clarity and structured training programs</li>
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Category</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Outcome / Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Soft Skills</td>
                                            <td className="p-3 border border-[#e8e5db]">Client handling, assertive communication</td>
                                            <td className="p-3 border border-[#e8e5db]">Improve internal & external communication, reduce misunderstandings</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Product Knowledge</td>
                                            <td className="p-3 border border-[#e8e5db]">Product features, configurable vs custom</td>
                                            <td className="p-3 border border-[#e8e5db]">Reduce rework, align delivery with realistic commitments</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Process Clarity</td>
                                            <td className="p-3 border border-[#e8e5db]">Estimation, sandboxing, documentation</td>
                                            <td className="p-3 border border-[#e8e5db]">Enable seamless knowledge transfer and accurate delivery timelines</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Team Collaboration</td>
                                            <td className="p-3 border border-[#e8e5db]">Cross-functional handovers, role clarity</td>
                                            <td className="p-3 border border-[#e8e5db]">Build transparency, reduce internal bottlenecks</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Org Development</td>
                                            <td className="p-3 border border-[#e8e5db]">Time management, mentoring culture</td>
                                            <td className="p-3 border border-[#e8e5db]">Balance workloads, reduce burnout, develop junior talent sustainably</td>
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
                                Training Needs Analysis Example
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/consulting/training-needs-hudini.pdf"
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
