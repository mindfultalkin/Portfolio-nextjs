"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function AdjustingFlexibleDuration() {
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
                                Flexible Duration feature in Amagi NOW

                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Flexible Duration | Video Tutorial | 3 minutes
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this video to introduce the Flexible Duration feature in Amagi NOW, empowering operators to dynamically handle content timing during playout. This feature is particularly useful for live events, last-minute schedule changes, or runtime uncertainties where rigid scheduling isn't feasible.<br />This tutorial walks users through how to enable, configure, and use flexible durations to ensure seamless transitions and uninterrupted playout—even when actual content length varies from planned schedules.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>To help operators manage unpredictable content timing with flexible playout windows.</li>
                                <li>Channel schedulers, broadcast operators, and playout engineers using Amagi NOW.</li>
                                <li>To ensure smooth transitions and uninterrupted playout even when content length varies.</li>
                                <li>To reduce manual intervention and improve operational efficiency during live events or schedule changes.</li>
                                <li>To enhance user experience by providing flexibility in content scheduling.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardContent>
                            {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">
                                    Video Tutorial
                                </h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="product-video/flexible-duration.mp4"
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
