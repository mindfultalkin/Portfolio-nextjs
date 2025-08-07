"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function BethlivingSalesSuccess() {
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
                                Sales Success Guide
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Sales Success Guide | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This guide helps sales teams consistently close deals by building trust, demonstrating product value, and following a structured CRM-driven process. While product knowledge is crucial, success in th sales model comes from understanding the customer, offering design support, and staying involved even after the token payment.<br/>This guide combines soft skills, brand storytelling, and process discipline to help teams convert walk-ins into long-term advocates.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Product knowledge (USP vs. wood/local brands)</li>
                                <li>Belief in the brand (Company values, warranty, quality)</li>
                                {/* <li>It’s about comfort, clarity, and continued follow-up.</li> */}
                                {/* <li>Customers often take time to align decisions with family; your role is to nudge, support, and assure.</li> */}
                                {/* <li>Push for virtual design discussions and demos to accelerate closure.</li>                                 */}
                                <li>Toolkit for sales team to use during customer facing situations.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Sales Success Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/training-content/bethliving-sales-success.pdf"
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
