"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function ApplyLeave() {
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
                                Leave Application Process 

                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                leave application process | Video
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this short, user-friendly video to walk employees through the leave application process within our HR or internal system. Designed for both new joiners and existing staff, this video ensures a clear understanding of how to check balances, apply for leave, and track approvals—eliminating confusion and improving turnaround time.<br/>The goal is to simplify self-service HR tasks, reduce dependency on manual follow-ups, and ensure policy compliance.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Help employees apply for leave accurately and efficiently without HR intervention.</li>
                                <li>All employees—especially new joiners or remote staff unfamiliar with the system.</li>
                                <li>Step-by-step screencast with optional narration or captions.</li>
                                <li>Users can independently navigate the leave application process, reducing errors and delays.</li>
                                <li>Improves employee satisfaction by making HR processes transparent and easy to follow.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardContent>
                            {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">
                                    Leave Application Process Video                                    
                                </h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="product-video/leave-application-process.mp4"
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
