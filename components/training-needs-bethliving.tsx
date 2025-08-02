"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function TrainingNeedsBethliving() {
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
                                Bethliving - Training Needs Analysis
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Training Needs Analysis | 44 Outlets | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this report to assess and address the training needs of Bethliving’s customer-facing teams across their 44 retail outlets in India. As Bethliving expands under COCO, FICO, and FOFO formats, the leadership recognized the need to deliver consistent, confident, and brand-aligned communication at every store.<br/>This report documents our Phase 1 exploratory findings—based on interviews, mystery shopping, and in-store assessments—and proposes a structured roadmap for skill-building across product knowledge, process adherence, and soft skills.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Identify gaps in product understanding, customer handling, and process consistency.</li>
                                <li>Field visits, phone audits, leadership interviews, and persona mapping.</li>
                                <li>Strong belief in the product and CRM consistency was observed.</li>
                                <li>Gaps existed in uniform product explanation, brochure use, objection handling, and customer engagement.</li>
                                <li>Store In-Charge, Sales Manager, BDE, and Installation Technicians – all of whom need tailored training.</li>
                                <li>Proposed training modules on product knowledge, process adherence, and soft skills.</li>
                                <li>Focus on building confidence, consistency, and brand alignment across all customer interactions.</li>
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Phase</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Training Objective / Output</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">1</td>
                                            <td className="p-3 border border-[#e8e5db]">Product & Process Training</td>
                                            <td className="p-3 border border-[#e8e5db]">USPs, materials, portfolio walkthroughs, 3D design use, CRM consistency</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">2</td>
                                            <td className="p-3 border border-[#e8e5db]">Pitch & Presentation Skills</td>
                                            <td className="p-3 border border-[#e8e5db]">30-sec to 10-min product pitch, competitive positioning, brochure fluency</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3</td>
                                            <td className="p-3 border border-[#e8e5db]">Brand Ethos & Storytelling</td>
                                            <td className="p-3 border border-[#e8e5db]">Communicate sustainability, social proof, success stories, Bethliving values</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">4</td>
                                            <td className="p-3 border border-[#e8e5db]">Soft Skills Training</td>
                                            <td className="p-3 border border-[#e8e5db]">Empathy, probing, small talk, objection handling, customer follow-up</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">5</td>
                                            <td className="p-3 border border-[#e8e5db]">Role-Specific Deep Dives</td>
                                            <td className="p-3 border border-[#e8e5db]">Tailored modules for installers, store managers, and sales team</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">6</td>
                                            <td className="p-3 border border-[#e8e5db]">Mock Demos & Reinforcement</td>
                                            <td className="p-3 border border-[#e8e5db]">Case-based roleplays, monthly refreshers, success metrics</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">7</td>
                                            <td className="p-3 border border-[#e8e5db]">Process Improvements</td>
                                            <td className="p-3 border border-[#e8e5db]">Better walk-in handling, CRM follow-ups, multilingual brochures, store signage</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">8</td>
                                            <td className="p-3 border border-[#e8e5db]">Pilot & Scale</td>
                                            <td className="p-3 border border-[#e8e5db]">Train 10 master trainers → collect feedback → full rollout</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This workflow ensures that our documentation is not only comprehensive but also user-friendly, enabling both customers and internal teams to fully leverage the product's capabilities.
                            </p>
                        </CardContent> */}

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Training Needs Analysis Report
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/consulting/training-needs-bethliving.pdf"
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
