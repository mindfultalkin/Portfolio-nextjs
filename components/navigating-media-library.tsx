"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function NavigatingMediaLibrary() {
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
                                Media Library in a Mediatech product
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Media Library | Video Management
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                An explainer video to help users navigate the Media Library in a mediatech product. This video is designed to guide operators, content managers, and broadcast coordinators in efficiently accessing, managing, and organizing their media assets in the platform.<br/>The Media Library is central to daily workflows, and this tutorial ensures that users can confidently locate, preview, and use the correct assets for live or scheduled playout.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Help users manage video, audio, and graphic assets within the media library.</li>
                                {/* <li>Channel operators, schedulers, content managers, and broadcast teams.</li> */}
                                <li>Short, step-by-step screen capture video with voiceover (or captions) for clarity.</li>
                                <li>Users feel confident navigating the media library without relying on manual help or follow-ups.</li>
                                {/* <li>Improves overall efficiency and reduces bottlenecks in content management workflows.</li> */}
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardContent>
                            {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">
                                    Media Library Navigation
                                </h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="product-video/media-library-navigation.mp4"
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
