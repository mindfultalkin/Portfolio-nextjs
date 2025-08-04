"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function FurnitureMakerProcesses() {
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
                                SOPs for a Furniture Making Company
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                SOP Playbook | 50+ articles | 8 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We developed this SOP playbook to help cabinet and closet manufacturers standardize their core workflows—reducing repetitive questions, minimizing dependency on managers, and increasing operational consistency. Rooted in lean manufacturing strategies, the guide empowers your team to work on the business instead of always working in it.
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full rounded-lg overflow-hidden p-6">
                        <div className="space-y-6">
                            <div className="flex items-center justify-center">
                                <a 
                                    href="https://sites.google.com/mindfultalk.in/cabinet-factory"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-[#0894b5] text-white rounded-lg hover:bg-[#067a96] transition-colors"
                                >
                                    View SOP Playbook
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
