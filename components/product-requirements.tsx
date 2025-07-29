"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function ProductRequirements() {
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
                                Product Requirements Specification (PRS)
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Product Requirements Specification (PRS) | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We developed this document to outline how a well-crafted Product Requirements Specification (PRS) serves as a critical link between customer expectations and product delivery. At mindfultalk.in, we work closely with SaaS and product teams to translate business needs into clear, actionable product requirements that align stakeholders, reduce ambiguity, and accelerate development.<br />This document showcases our approach to creating internal documentation such as PRDs, user journeys, and acceptance criteria—ensuring that the project team understands not just what to build, but why and for whom.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Provide detailed internal product specs that guide design, development, and QA teams.</li>
                                <li>Internal product managers, project teams, and business stakeholders.</li>
                                <li>Ensure alignment on product vision, features, and user needs.</li>
                                <li>Reduce ambiguity and miscommunication during development.</li>
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
                                The Product Requirements Specification (PRS) is a comprehensive document that outlines the key components of our internal documentation process. It serves as a blueprint for how we define, scope, and validate product features, ensuring that all stakeholders have a clear understanding of the product vision and requirements.
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
                                            <td className="p-3 border border-[#e8e5db]">Value of PRS in SaaS</td>
                                            <td className="p-3 border border-[#e8e5db]">Align stakeholders, improve clarity, and support accurate delivery</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Customer Example</td>
                                            <td className="p-3 border border-[#e8e5db]">Doos - PRS with user journey</td>
                                            <td className="p-3 border border-[#e8e5db]">Demonstrates how user context informs features and structure</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Key Components</td>
                                            <td className="p-3 border border-[#e8e5db]">Requirements, Acceptance Criteria</td>
                                            <td className="p-3 border border-[#e8e5db]">Standardizes how features are defined, scoped, and validated</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">IA Section</td>
                                            <td className="p-3 border border-[#e8e5db]">Information Architecture</td>
                                            <td className="p-3 border border-[#e8e5db]">Visual and structural layout of feature modules and interactions</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Writing Best Practices</td>
                                            <td className="p-3 border border-[#e8e5db]">Context, Accuracy, Discoverability</td>
                                            <td className="p-3 border border-[#e8e5db]">Ensures internal docs are just as robust and useful as customer-facing ones</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This PRS serves as a guide for our internal documentation process, ensuring that we maintain high standards of clarity, accuracy, and usability across all product-related content. By following this structured approach, we can effectively communicate product requirements to all stakeholders, from development teams to business leaders.
                            </p>
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Product Requirements Document (PRS) Example
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/content-strategy/product-requirements.pdf"
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
