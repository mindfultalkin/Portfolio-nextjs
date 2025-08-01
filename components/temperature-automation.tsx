"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function TemperatureAutomation() {
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
                                Automation in Temperature-Controlled Environments
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Temperature Automation | 50+ articles | 10 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We developed this document to showcase a real-world digital transformation journey undertaken by a leading food retailer, in collaboration with Elpis, to modernize temperature-controlled environments using IoT, automation, and AI.<br/>Our aim was to demonstrate how intelligent systems can not only enhance food safety and operational efficiency, but also scale across industries like pharmaceuticals, healthcare, logistics, and manufacturing. This case study acts as a blueprint for how data-driven automation can redefine refrigeration management with precision, sustainability, and predictability at its core.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Transform outdated manual refrigeration processes into a centralized, automated, real-time monitoring system.</li>
                                <li>IoT sensors, Elpis E-REMOS platform, AI-driven alerting, predictive maintenance, remote visibility.</li>
                                <li>Food retail, pharma, healthcare, logistics, agriculture, manufacturing</li>
                                <li>Reduce food waste, ensure compliance, improve safety, enhance customer trust.</li>
                                <li>Scalable solution adaptable to various temperature-sensitive industries.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Phase</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Objective / Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">1</td>
                                            <td className="p-3 border border-[#e8e5db]">Real-time IoT Monitoring</td>
                                            <td className="p-3 border border-[#e8e5db]">Replace manual checks, set custom alerts, and gain remote visibility</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">2</td>
                                            <td className="p-3 border border-[#e8e5db]">Predictive Maintenance</td>
                                            <td className="p-3 border border-[#e8e5db]">Use metrics like MTTR, RTA, MTBF to preempt failures and reduce spoilage</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3</td>
                                            <td className="p-3 border border-[#e8e5db]">AI-driven Automation</td>
                                            <td className="p-3 border border-[#e8e5db]">Auto-adjust refrigeration, optimize shelf life, enable dynamic inventory mgmt</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Metrics</td>
                                            <td className="p-3 border border-[#e8e5db]">Quality, Efficiency & Reliability Goals</td>
                                            <td className="p-3 border border-[#e8e5db]">99.9% uptime, 1% shrinkage, 85%+ utilization, near-zero spoilage</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Use Cases</td>
                                            <td className="p-3 border border-[#e8e5db]">Cross-industry Applications</td>
                                            <td className="p-3 border border-[#e8e5db]">Extend solution to pharma, healthcare, logistics, and other critical sectors</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This workflow ensures that our documentation is not only comprehensive but also user-friendly, enabling both customers and internal teams to fully leverage the product's capabilities.
                            </p>
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Temperature Automation                                
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/product-marketing/temperature-automation.pdf"
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
