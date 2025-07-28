"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function SystemArchitecture() {
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
                                System Architecture
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                SUNDOOR | 10+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This document presents the architecture of the SUNDOOR system, developed to control platform screen doors (PSDs) in metro stations. SUNDOOR ensures the safe and automated operation of sliding doors by monitoring motor behavior, detecting obstructions, and coordinating with the central metro controller. SUNDOOR is not responsible for compartment door synchronization—that is managed centrally. Instead, it communicates with the central controller using PROFINET protocol and manages one left-right door pair per unit. We have developed this architecture to comply with CENELEC SIL 3 safety standards, specifically EN 50126, EN 50128, and EN 50129. This document details SUNDOOR's components, interfaces, operating modes, safety logic, and diagnostics in alignment with these standards.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Define the system architecture for SUNDOOR, which automates and secures platform screen doors in metro stations.</li>
                                <li>Designed to meet SIL 3 requirements per CENELEC norms.</li>
                                <li>Controls door opening/closing, detects obstructions, logs events, and communicates with the metro's central system.</li>
                                <li>Operates in Learn Mode (setup), Normal, Auto, Isolation, and Bypass.</li>
                                <li>PROFINET, RS-485, USB, CAN; used for diagnostics, communication, and configuration.</li>
                                <li>Follows EN 50126, 50128, 50129, and 50159 standards for functional safety and communication integrity.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Matrix
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Here's a visual guide to our end-to-end documentation process and outcomes as we turned the product complexity into clarity.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Title</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Purpose / Key Outputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Preface</td>
                                            <td className="p-3 border border-[#e8e5db]">High-level purpose of SUNDOOR: to control platform screen doors safely and automatically.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Purpose</td>
                                            <td className="p-3 border border-[#e8e5db]">Define the system’s architectural design scope for SIL 3 compliance.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Scope</td>
                                            <td className="p-3 border border-[#e8e5db]">Limits of design coverage and reference to relevant safety and technical documents.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">System Overview</td>
                                            <td className="p-3 border border-[#e8e5db]">Functional behavior of SUNDOOR, key components like motors, E-locks, and controller roles.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Req. 1-3: Plugin install, config, token</td>
                                            <td className="p-3 border border-[#e8e5db]">Setup process for merchants and token-based transaction workflow.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Operation Modes</td>
                                            <td className="p-3 border border-[#e8e5db]">Learn, Normal, Auto, Isolation, Bypass – how SUNDOOR reacts in each.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Key Safety Functions</td>
                                            <td className="p-3 border border-[#e8e5db]">Lists safety-critical actions: obstruction handling, force control, rotor monitoring, etc.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Definitions, Acronyms, References</td>
                                            <td className="p-3 border border-[#e8e5db]">Clarifies technical terminology, standards, and reference documents.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Architecture Description</td>
                                            <td className="p-3 border border-[#e8e5db]">Detailed breakdown of inputs/outputs, power supply, motor interface, communication, etc.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Power Supply</td>
                                            <td className="p-3 border border-[#e8e5db]">Isolated drive, control, and monitor supplies for reliability.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Inputs & Outputs</td>
                                            <td className="p-3 border border-[#e8e5db]">Vital vs Non-Vital; safety logic and diagnostic capabilities.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Motor Interface</td>
                                            <td className="p-3 border border-[#e8e5db]">Motor drive feedback, encoders, current sensing, fault protection.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Functional Flow</td>
                                            <td className="p-3 border border-[#e8e5db]">Step-by-step logic flow for door control based on safety and command signals.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">System Boundary & Modules</td>
                                            <td className="p-3 border border-[#e8e5db]">Architectural limits and modular design elements (e.g., power, control, comms).</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Design Guidelines (EN 50129 compliance)</td>
                                            <td className="p-3 border border-[#e8e5db]">Safety-focused design techniques for SIL 3: watchdogs, dual MCUs, fail-safes, etc.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Fault Handling & Safeguards</td>
                                            <td className="p-3 border border-[#e8e5db]">Measures against voltage, EMI/EMC, sabotage, temperature rise, human error, etc.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Hardware Specifications</td>
                                            <td className="p-3 border border-[#e8e5db]">Electrical, mechanical, and environmental specs for deployment.</td>
                                        </tr>
                                        <tr className="bg-transparent"></tr>
                                        <tr className="bg-transparent"></tr>
                                        <tr className="bg-transparent"></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Documentation Workflow Matrix - SUNDOOR System Architecture
                            </p>
                        </CardContent>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/software-development-life-cycle/system-architecture.pdf"
                                    scale={100}
                                    showControls={true}
                                    enableDownload={true}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
