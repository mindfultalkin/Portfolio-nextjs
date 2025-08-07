"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function ProductDevelopment() {
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
                                Product Development
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Thought Paper | Product Management | Agile Development
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This document outlines a structured, stage-by-stage approach to taking a product from idea to launch. It provides a framework for validating ideas, gathering customer insights, planning development, and iterating based on feedback—ultimately helping teams align business, user, and technical goals for successful product delivery.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>We created this document to provide a structured roadmap for turning product ideas into successful launches.</li>
                                <li>The guide reflects our hands-on experience in product management, customer discovery, agile execution, and GTM strategies.</li>
                                <li>It is designed to help founders, product managers, and tech teams navigate every stage of product development—starting from a pitch to continuous iteration.</li>
                                <li>The stages are built to ensure early validation, clear communication, and efficient execution across cross-functional teams.</li>
                                <li>Each phase includes practical tools, team alignment practices, and a focus on customer-centric design.</li>
                                <li>This framework enables teams to reduce risk, accelerate delivery, and build products that meet real market needs.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        {/* <CardHeader>
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Outputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">1</td>
                                            <td className="p-3 border border-[#e8e5db]">Idea & Pitch</td>
                                            <td className="p-3 border border-[#e8e5db]">30-sec articulation of product concept</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">2</td>
                                            <td className="p-3 border border-[#e8e5db]">Benefits & Audience</td>
                                            <td className="p-3 border border-[#e8e5db]">Defined value props and target segments</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3</td>
                                            <td className="p-3 border border-[#e8e5db]">Competition Analysis</td>
                                            <td className="p-3 border border-[#e8e5db]">Unique selling proposition (USP)</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">4</td>
                                            <td className="p-3 border border-[#e8e5db]">Customer Insights</td>
                                            <td className="p-3 border border-[#e8e5db]">Key features and pain points</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">5</td>
                                            <td className="p-3 border border-[#e8e5db]">PM & Dev Tools</td>
                                            <td className="p-3 border border-[#e8e5db]">Tooling stack for build & tracking</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">6</td>
                                            <td className="p-3 border border-[#e8e5db]">User Stories</td>
                                            <td className="p-3 border border-[#e8e5db]">MVP features and assumptions</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">7</td>
                                            <td className="p-3 border border-[#e8e5db]">Revenue Model</td>
                                            <td className="p-3 border border-[#e8e5db]">Validated monetization approach</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">8</td>
                                            <td className="p-3 border border-[#e8e5db]">MVP Definition</td>
                                            <td className="p-3 border border-[#e8e5db]">Final scope, risks, and user validation</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">9-10</td>
                                            <td className="p-3 border border-[#e8e5db]">Build & Deliver MVP</td>
                                            <td className="p-3 border border-[#e8e5db]">Feature development and feedback loop</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">11</td>
                                            <td className="p-3 border border-[#e8e5db]">Go-to-Market (GTM)</td>
                                            <td className="p-3 border border-[#e8e5db]">Launch plan, pricing, distribution</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">12-13</td>
                                            <td className="p-3 border border-[#e8e5db]">Iterate</td>
                                            <td className="p-3 border border-[#e8e5db]">Course correction and next sprint planning</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Our documentation workflow followed a structured set of steps and activities - from planning, content creation, review, and publishing. This ensured consistent quality across the 60+ articles.
                            </p>
                        </CardContent> */}
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/software-development-life-cycle/product-development.pdf"
                                    scale={100}
                                    showControls={true}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
