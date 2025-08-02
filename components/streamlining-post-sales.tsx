"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function StreamliningPostSales() {
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
                                Streamlining the Customer Journey: From Sales to Measurement to Delivery and Beyond
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Post-Sales Journey | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this framework to help retail and home interior brands streamline the post-sales customer journey—from store interaction to delivery, installation, and warranty support. Often, a lack of visibility, unclear roles, and fragmented communication after the sale lead to delays, dissatisfaction, and operational stress.<br/>This guide lays out a stage-by-stage blueprint to deliver consistency, accountability, and customer delight—supported by measurement protocols, CRM handoffs, and service processes that close the loop.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Most customer dissatisfaction arises after the sale—due to unclear timelines, poor communication, or post-installation support issues.</li>
                                <li>Sales teams, measurement engineers, CRM managers, logistics staff, and customer success personnel.</li>
                                <li>Align people, process, and systems across every customer-facing stage after store interaction.</li>
                                <li>Ensure seamless handoffs, clear roles, and accountability at every step—from measurement to delivery to post-installation support.</li>
                                <li>Deliver a consistent, high-quality experience that builds trust and loyalty.</li>                                
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Stage</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Key Outcome / Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">At the Store</td>
                                            <td className="p-3 border border-[#e8e5db]">Initial interaction, design, negotiation</td>
                                            <td className="p-3 border border-[#e8e5db]">Confirm scope, agree on timelines, and collect token payment</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Measurement Phase</td>
                                            <td className="p-3 border border-[#e8e5db]">3x verification by different personnel</td>
                                            <td className="p-3 border border-[#e8e5db]">Ensure accuracy, reduce errors, finalize site-specific production data</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">CRM Handoff</td>
                                            <td className="p-3 border border-[#e8e5db]">Transfer measurement data to CRM</td>
                                            <td className="p-3 border border-[#e8e5db]">Ensure all data is captured and accessible for next steps</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Delivery & Installation</td>
                                            <td className="p-3 border border-[#e8e5db]">Logistics, scheduling, and installation</td>
                                            <td className="p-3 border border-[#e8e5db]">Ensure timely delivery, proper installation, and customer satisfaction</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Post-Installation Support</td>
                                            <td className="p-3 border border-[#e8e5db]">Warranty claims, service requests</td>
                                            <td className="p-3 border border-[#e8e5db]">Provide ongoing support, handle issues promptly, maintain customer trust</td>
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
                                Streamlining Post-Sales Journey                                
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/training-content/streamlining-post-sales.pdf"
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
