"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function ElpisEmpoweringMSMEs() {
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
                                The Future of Manufacturing: How Elpis is Empowering MSMEs to Go Smart
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Elpis Smart Manufacturing | 50+ articles | 8 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We wrote this piece to spotlight how the Elpis Smart Manufacturing Platform helps India's MSMEs (Micro, Small, and Medium Enterprises) transition into the world of Industry 4.0—without the high costs or complexity typically associated with digital transformation.<br/>In an environment where outdated machinery, scattered data, and rising operational costs threaten growth, Elpis delivers plug-and-play smart solutions that empower MSMEs to digitize, monitor, and optimize their manufacturing processes efficiently.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Legacy machines that don’t communicate</li>
                                <li>Disconnected data systems</li>
                                <li>High energy costs and frequent equipment failures</li>
                                <li>Plug-and-play integration (no need to replace existing equipment)</li>
                                <li>Real-time dashboards to track energy, production, and performance</li>
                                <li>AI-driven insights to optimize operations and reduce costs</li>
                                <li>Scalable solutions that grow with the business</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        {/* <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Documentation Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Our documentation process is designed to ensure that every piece of content is accurate, relevant, and easy to find. We follow a structured workflow that includes:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Pain Point</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Elpis Solution</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Result / Benefit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Legacy infrastructure</td>
                                            <td className="p-3 border border-[#e8e5db]">Plug-and-play device integration</td>
                                            <td className="p-3 border border-[#e8e5db]">Avoid costly equipment replacement</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Data silos</td>
                                            <td className="p-3 border border-[#e8e5db]">Unified dashboards for key metrics</td>
                                            <td className="p-3 border border-[#e8e5db]">Make informed decisions faster</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Machine breakdowns</td>
                                            <td className="p-3 border border-[#e8e5db]">Predictive analytics + alerts</td>
                                            <td className="p-3 border border-[#e8e5db]">Reduce maintenance costs and downtime</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Energy inefficiency</td>
                                            <td className="p-3 border border-[#e8e5db]">Real-time energy monitoring</td>
                                            <td className="p-3 border border-[#e8e5db]">Improve efficiency and reduce costs</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Operational disconnects</td>
                                            <td className="p-3 border border-[#e8e5db]">Centralized monitoring across machines</td>
                                            <td className="p-3 border border-[#e8e5db]">Enable factory-wide visibility and planning</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                By addressing these challenges, Elpis empowers MSMEs to not only survive but thrive in the competitive manufacturing landscape. Our platform is designed to be accessible, affordable, and adaptable, ensuring that every business can harness the power of smart manufacturing.
                            </p>
                        </CardContent> */}

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Workflow Steps
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/blogs/elpis-empowering-msmes.pdf"
                                    scale={100}
                                    showControls={true}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}
