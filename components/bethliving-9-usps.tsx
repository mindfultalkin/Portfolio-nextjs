"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function Bethliving9USPS() {
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
                                Bethliving – 9 USPs Guide
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                9 USPs Guide | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We developed this guide to help Bethliving’s sales, service, and retail teams confidently communicate the top 9 USPs of our steel furniture products. Rather than relying on generic comparisons with wood, this guide dives deep into what each USP means, how it benefits the customer, and what misconceptions to proactively address.<br/>These talking points are designed to simplify technical specs into customer-friendly language that drives trust, clarity, and conversion.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>No adhesives, double layers, steam-cleanable</li>
                                <li>Ideal for wet zones like under sinks or bathrooms</li>
                                <li>Soft-close fitments, quiet operation, no metal bangs</li>
                                <li>Zinc + epoxy coated; engineered to last</li>
                                <li>Zero wood policy, solar-powered plant, recyclable parts</li>
                                <li>Doesn’t absorb moisture, unfriendly to bugs/fungus</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                9 USPs Documentation Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/training-content/bethliving-9-usps.pdf"
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
