"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function ApprovalsAccess() {
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
                                Accessing Approvals

                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                 Accessing Approvals | Video
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                A quick explainer video to help internal users understand how to access and manage approval workflows within the company’s internal systems. Whether you're requesting access, tracking pending items, or reviewing approvals across departments, this guide ensures a smooth and intuitive user experience with step-by-step visuals.<br />This resource is designed for new employees, team leads, and operations staff who need a refresher or a first-time walkthrough on handling approval requests efficiently.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Reduces delays in internal processes by guiding users on where and how to access approvals.</li>
                                <li>Targeted for internal employees, HR/admin users, project managers, finance leads.</li>
                                <li>Short, step-by-step screen capture video with voiceover (or captions) for clarity.</li>
                                <li>Users feel confident managing approvals without relying on manual help or follow-ups.</li>
                                <li>Improves overall efficiency and reduces bottlenecks in internal workflows.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardContent>
                            {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">
                                    Accessing Approvals                                    
                                </h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="product-video/approvals-access.mp4"
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
