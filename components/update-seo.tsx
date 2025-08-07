"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function UpdateSeo() {
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
                                Zendesk - Updating SEO Metadata

                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Video Tutorial
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This is a video walkthrough for content and product teams to update SEO metadata within the Secuvy platform. Optimizing metadata such as titles, descriptions, and keywords helps enhance content discoverability across search engines and internal search systems, driving more meaningful traffic and improved ranking.<br/>This tutorial ensures users can confidently edit, validate, and publish metadata for knowledge base articles, product pages, and other customer-facing documentation.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Improve search engine visibility and content discovery within Secuvy-managed pages.</li>
                                {/* <li>Content writers, SEO specialists, product marketing teams, documentation owners.</li> */}
                                <li>Learn how to edit and validate SEO metadata for knowledge base articles, product pages, and other customer-facing documentation.</li>
                                {/* <li>Ensure content is optimized for search engines and internal search systems.</li> */}
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardContent>
                            {/* Video Section */}
                            <div className="mt-8">
                                <h3 className="text-xl text-[#0894b5] mb-4">
                                    Video Tutorial: Updating SEO Metadata
                                </h3>
                                <div className="aspect-video bg-black rounded-lg">
                                    <video
                                        src="product-video/seo-update.mp4"
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
