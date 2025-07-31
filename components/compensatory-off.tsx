"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function CompensatoryOff() {
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
                                Apply for a Compensatory Off (Comp-Off)

                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Apply for a Comp-Off | Video
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this instructional video to help employees understand how to apply for a Compensatory Off (Comp-Off) in our internal HR system. Whether someone has worked extra hours on a weekend, holiday, or beyond regular shift timings, this video guides them step-by-step on how to record and claim their compensatory leave transparently.<br/>This video supports smoother HR operations, reduces errors in leave tracking, and ensures fairness in time-off management.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Help employees apply for comp-off correctly and track it through approval stages.</li>
                                <li>Employees who work overtime or during holidays and need to claim time-off compensation</li>
                                <li>Employees confidently apply for comp-off, and HR teams receive structured, verifiable requests.</li>
                                <li>Reduces confusion and errors in leave management, ensuring fair treatment for all employees.</li>
                                <li>Improves overall employee satisfaction by providing clear, actionable guidance on leave policies.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardContent>
                            {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">
                                    How to Apply for a Comp-Off
                                </h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="product-video/comp-off-application.mp4"
                                        controls
                                        className="w-full h-full rounded-lg"
                                    >
                                    </video>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}
