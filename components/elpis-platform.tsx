"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function ElpisPlatform() {
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
                                Elpis Smart Manufacturing Platform
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                A Modular, Scalable Solution for Industry 4.0 Adoption
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this document to present the Elpis Smart Manufacturing Platform — a modular, scalable solution designed to help MSMEs adopt Industry 4.0 technologies effectively. The platform addresses key manufacturing challenges such as equipment downtime, data silos, and operational inefficiencies by enabling real-time monitoring, predictive analytics, and seamless digital integration of legacy systems.<br />This guide provides an enterprise-wide view of how Indian manufacturers can modernize in a phased, cost-effective way—boosting OEE, reducing maintenance costs, and improving decision-making without the need for complete equipment overhauls.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Enable MSMEs to transition from proof-of-concepts (PoCs) to fully integrated smart factories.</li>
                                <li>Mid-sized manufacturers (50-100 machines), operations teams, plant heads, decision-makers.</li>
                                <li>IoT-powered E-REMOS platform + ready-to-deploy IIoT devices + predictive analytics.</li>
                                <li>Modular, scalable solution for Industry 4.0 adoption.</li>
                                <li>Real-time monitoring, predictive analytics, and digital integration of legacy systems.</li>
                                <li>Phased, cost-effective modernization to boost OEE, reduce maintenance costs, and improve decision-making.</li>
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
                                Our documentation process follows a structured workflow to ensure clarity, consistency, and user-friendliness. Each phase is designed to build upon the previous one, allowing for iterative improvements and comprehensive coverage of the platform's features and use cases.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Phase</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Component / Focus</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Business Value Delivered</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Phase 1</td>
                                            <td className="p-3 border border-[#e8e5db]">Digitization of Legacy Equipment</td>
                                            <td className="p-3 border border-[#e8e5db]">Converts analog signals to digital data for unified visibility</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Phase 2</td>
                                            <td className="p-3 border border-[#e8e5db]">Real-time Monitoring via E-REMOS</td>
                                            <td className="p-3 border border-[#e8e5db]">Remote access to temperature, energy, productivity, maintenance data</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Phase 3</td>
                                            <td className="p-3 border border-[#e8e5db]">Predictive Analytics & AI Decision Support</td>
                                            <td className="p-3 border border-[#e8e5db]">Proactive maintenance, reduced downtime, and improved quality</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">System Features</td>
                                            <td className="p-3 border border-[#e8e5db]">Customizable Dashboards, Alerts, OEE Computation</td>
                                            <td className="p-3 border border-[#e8e5db]">Role-based views for operations, planning, and management</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Use Cases</td>
                                            <td className="p-3 border border-[#e8e5db]">Cold Chain, Hydraulics, Production QA</td>
                                            <td className="p-3 border border-[#e8e5db]">Cross-industry applicability with measurable ROI</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Strategic Alignment</td>
                                            <td className="p-3 border border-[#e8e5db]">Toyota’s 16 Losses, Deloitte’s Framework</td>
                                            <td className="p-3 border border-[#e8e5db]">Built to address global smart manufacturing benchmarks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This structured approach ensures that our documentation is not only comprehensive but also aligned with industry best practices and the specific needs of our users.
                            </p>
                        </CardContent> */}

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Elpis Platform Overview                            
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/product-marketing/elpis-platform.pdf"
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
