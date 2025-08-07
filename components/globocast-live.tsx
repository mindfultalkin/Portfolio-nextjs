"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function GlobocastLive() {
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
                                GloboCast Live User Manual
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Mediatech | 60+ Usecases | 10 Months
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This user manual guides operators, broadcasters, and live event managers to effectively use GloboCast Live and GloboCast Fluid — our powerful cloud-based platforms for live channel orchestration and OTT event streaming.<br/>These tools enable users to manage scheduled and unscheduled live events with flexibility, ensuring smooth transitions, real-time updates, and broadcast-grade controls — all from a remote interface. <br/>Whether you're streaming a news bulletin, a sports tournament, or a product launch, this document helps you navigate the platform and deliver a seamless viewer experience.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Provide a step-by-step user guide for operating GloboCast Live and GloboCast Fluid.</li>
                                <li>On the field support document for channel operators and broadcast managers handling live streaming workflows.</li>
                                {/* <li>24x7 linear playout system with live and file-based content.</li> */}
                                {/* <li>On-demand OTT live event orchestration with support for multiple concurrent streams.</li> */}
                                {/* <li>Live source switching, graphics overlays, break insertion</li> */}
                                {/* <li>Immediate or scheduled live event handling</li> */}
                                {/* <li>Real-time control through a web UI</li> */}
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        {/* <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                GloboCast Live Documentation Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                The following matrix outlines the key sections and topics covered in the GloboCast Live user manual, providing a structured overview of the platform's capabilities and operational guidelines.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Section</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Topic</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Key Purpose / Output</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">1</td>
                                            <td className="p-3 border border-[#e8e5db]">Introduction to GloboCast Live</td>
                                            <td className="p-3 border border-[#e8e5db]">Overview of platform features, live control, remote orchestration</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">2</td>
                                            <td className="p-3 border border-[#e8e5db]">Understanding the UI</td>
                                            <td className="p-3 border border-[#e8e5db]">Breakdown of live control UI components and dashboard widgets</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3.1</td>
                                            <td className="p-3 border border-[#e8e5db]">Automatic Go Live (Scheduled)</td>
                                            <td className="p-3 border border-[#e8e5db]">How to auto-schedule a live playlist and enable "Auto Live On"</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3.2</td>
                                            <td className="p-3 border border-[#e8e5db]">Manual Go Live (Scheduled)</td>
                                            <td className="p-3 border border-[#e8e5db]">Instructions for manually taking a scheduled live event to air</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3.3</td>
                                            <td className="p-3 border border-[#e8e5db]">Immediate Go Live (Unscheduled)</td>
                                            <td className="p-3 border border-[#e8e5db]">Step-by-step to override playlist and go live instantly for urgent content</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Glossary</td>
                                            <td className="p-3 border border-[#e8e5db]">Broadcast Terminology</td>
                                            <td className="p-3 border border-[#e8e5db]">Definitions for key operational terms (e.g., SCTE, Take Live, Playlist, etc)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This matrix outlines the key sections and topics covered in the GloboCast Live user manual, providing a structured overview of the platform's capabilities and operational guidelines.
                            </p>
                        </CardContent> */}
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/user-manuals/globocast-live-user-manual.pdf"
                                    scale={100}
                                    showControls={true}
                                // enableDownload={true}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
