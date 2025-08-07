"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function DenialCodeCo197() {
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
                                Simulation: Claim Resolution
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Simulation | Medical Billing | Training
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This is a simulation to help train medical billing professionals to resolve a claim. This simulation provides a comprehensive overview of Denial Code CO-197, which is used to indicate that a claim has been denied due to the absence of a valid authorization or referral. Understanding this code is crucial for healthcare providers and billing professionals to ensure proper claim submission and avoid denials.<br/>At mindfultalk.in, we specialize in creating accurate and engaging simulation that helps stakeholders navigate complex healthcare billing processes.
                            </p>
                        </div>
                    </div>

                    {/* Embedded Content Section */}
                    <div className="w-full rounded-lg overflow-hidden shadow-lg">
                        <div className="relative aspect-[16/9]">
                            <iframe
                                src="https://tcwvideos.s3.ap-south-1.amazonaws.com/Articulate360/Simulation+167/index.html"
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
