"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function MaypoleDanceManagedDevOps() {
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
                                Maypole Dance with Managed DevOps
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Blog | Digital Transformation | DevOps
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This blog highlights how Managed DevOps transforms software delivery by eliminating toolchain friction and enabling seamless, continuous workflows. Through the Maypole dance metaphor, the article illustrates how DevOps converges development, testing, deployment, and compliance into a coordinated dance—creating faster feedback, better collaboration, and a stronger delivery cadence.
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full rounded-lg overflow-hidden p-6">
                        <div className="space-y-6">
                            <div className="flex items-center justify-center">
                                <a
                                    href="https://blog.innoventestech.com/maypole-dance-with-manageddevops-731aab33da3a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-[#0894b5] text-white rounded-lg hover:bg-[#067a96] transition-colors"
                                >
                                    View Blog Post
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
