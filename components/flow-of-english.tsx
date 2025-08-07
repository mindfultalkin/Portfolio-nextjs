"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function FlowOfEnglish() {
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
                                Flow of English
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Product Tour | Interactive Learning | Education
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                A structured guide to showcase Flow of English – Learner, a dynamic, interactive learning solution designed for children aged 8–12. Flow of English delivers impactful English language learning using multisensory methods—audio, visual, and tactile—making reading and comprehension engaging and effective.<br/>The digital product tour helps learners navigate the platform and explore new features. This enhances user engagement and product adoption.
                            </p>
                        </div>
                    </div>

                    {/* Embedded Content Section */}
                    <div className="w-full rounded-lg overflow-hidden shadow-lg">
                        <div className="relative aspect-[16/9]">
                            <iframe
                                src="https://chippersageblr.s3.ap-south-1.amazonaws.com/ChippersageS3_data/Learner+-+Demo-+build/start.html"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
