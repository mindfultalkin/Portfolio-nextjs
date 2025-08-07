"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function DigitalTransformationCustomerCentric() {
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
                                Digital Transformation to Make the Customer the King
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Digital Transformation | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This article helps organizations reframe digital transformation not just as a tech upgrade, but as a customer-first strategy. In today’s highly personalized, digital-first world, simply digitizing existing processes isn’t enough—brands must reimagine experiences that make customers feel seen, understood, and valued at every touchpoint.<br/>Using real-world examples and Lindsay Herbert’s BUILD framework, this piece serves as a guide for companies looking to design transformation efforts that drive long-term customer loyalty and market relevance.
                            </p>
                            {/* <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>71% of customers expect personalization</li>
                                <li>76% get frustrated when it’s missing</li>
                                <li>Customer experience drives retention and buying behavior</li>
                                <li>True digital transformation requires rethinking processes—not just moving them online</li>
                                <li>Customer-centric transformation leads to higher satisfaction, loyalty, and revenue</li>
                                <li>Brands must understand customer needs, behaviors, and pain points</li>
                                <li>Successful examples include Nike, Starbucks, and Domino’s</li>
                            </ul> */}
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        {/* <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Documentation Workflow for Digital Transformation
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Our documentation workflow is designed to ensure that we create high-quality, user-friendly content that meets the needs of our audience. The process includes the following stages:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Stage</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Business Outcome / Insight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Bridge</td>
                                            <td className="p-3 border border-[#e8e5db]">Identify Gaps in Experience</td>
                                            <td className="p-3 border border-[#e8e5db]">Understand where current processes fail the customer</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Uncover</td>
                                            <td className="p-3 border border-[#e8e5db]">Leadership Vision & Resource Mapping</td>
                                            <td className="p-3 border border-[#e8e5db]">Secure buy-in, align goals, expose enablers/barriers</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Iterate</td>
                                            <td className="p-3 border border-[#e8e5db]">Pilot, Test, Improve</td>
                                            <td className="p-3 border border-[#e8e5db]">Launch MVPs, listen to feedback, refine fast (e.g., Amazon’s checkout)</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Leverage</td>
                                            <td className="p-3 border border-[#e8e5db]">Scale What Works</td>
                                            <td className="p-3 border border-[#e8e5db]">Deploy tested solutions across more users or geographies</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Disseminate</td>
                                            <td className="p-3 border border-[#e8e5db]">Embed New Ways of Working</td>
                                            <td className="p-3 border border-[#e8e5db]">Make the transformed experience the new norm (e.g., VR in healthcare)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This workflow ensures that we not only create high-quality content but also continuously improve it based on user feedback and changing needs. By following these steps, we can maintain a high standard of documentation that supports our digital transformation goals.
                            </p>
                        </CardContent> */}

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Digital Transformation to Make Customer the King
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/blogs/digital-transformation-customer-centric.pdf"
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
