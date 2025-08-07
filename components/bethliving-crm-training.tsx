"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function BethlivingCRMTraining() {
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
                                CRM Training Guide   
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                CRM Training Guide | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This CRM training guide helps showroom, field, and backend teams build a culture of process visibility, timely follow-up, and customer-first action. This guide aligns sales and service touchpoints to ensure every team member uses the CRM as a single source of truth from enquiry to delivery.<br/>When followed consistently, this approach improves conversion rates, reduces confusion, and strengthens customer confidence across the journey.
                            </p>
                            {/* <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>CRM is not optional — It replaces memory, sticky notes, and personal records.</li>
                                <li>Every interaction should be logged in the CRM, not just sales.</li>
                                <li>Use the CRM to track customer journeys, not just sales numbers.</li>
                                <li>Follow up on every lead within 24 hours to maintain momentum.</li>
                                <li>Use tags and categories to segment customers for personalized follow-ups.</li>
                            </ul> */}
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                CRM Training Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/training-content/bethliving-crm-training.pdf"
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
