"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"


export function SharePoint() {
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
                                Wiki Portal
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Microsoft SharePoint | Dynamic and Static Content | Access controlled content
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We built a proof of concept of a Wiki portal for a medical billing company. The company dealt with large amounts of static data combined with dynamic data updates that arrived periodically. . The key highlights are:
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>General static content accessible to all</li>
                                <li>Team-specific data for the same topics</li>
                                <li>Data access is team-based</li>
                                <li>Dynamic data is updated</li>
                                <li>Search results to show both dynamic and static content</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardContent className="space-y-6">

                        {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">Wiki Portal</h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="share-point/sharepoint-wiki-portal.mp4"
                                        controls
                                        className="w-full h-full rounded-lg"
                                    >
                                    </video>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">Rendering Content Dynamically</h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="share-point/sharepoint-dynamic.mp4"
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
        </div>
    )
}
