"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function TalentAcquisition() {
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
                                SOP for Talent Acquisition (TA)
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Software Industry | Talent Acquisition | SOP
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this Standard Operating Procedure (SOP) to define a structured, scalable, and tech-enabled Talent Acquisition (TA) process. Designed for TA team members, this document outlines the complete hiring journey — from intake to onboarding — including continuous sourcing, structured interviews, AI-driven screening, offer negotiation, and candidate engagement.<br/>Our goal is to ensure consistency, efficiency, and strategic alignment in hiring across all teams and hiring partners, while leveraging data, automation, and standardized communication.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>To standardize TA processes, reduce dropouts, and improve hire quality using tools, checklists, and repeatable workflows.</li>
                                {/* <li>TA team at Innoventes (internal) + extended hiring partners and evaluators.</li> */}
                                {/* <li>Freshteam, HackerRank, iMocha, ChatGPT, Fathom, ATS, resume parsers, AI-driven screening tools.</li> */}
                                <li>Includes workflow diagrams covering all aspects of the TA process, from intake to onboarding.</li>
                                <li>Developed over 2 weeks with input from TA team members, hiring managers, and external partners.</li>
                                {/* <li>Focuses on continuous sourcing, structured interviews, AI-driven screening, offer negotiation, and candidate engagement.</li> */}
                                <li>Ensures consistency, efficiency, and strategic alignment in hiring across all teams and hiring partners.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        {/* <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Talent Acquisition Documentation Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                The Talent Acquisition (TA) process at Innoventes is designed to be comprehensive and structured, ensuring that every step is documented and approved by relevant stakeholders. The workflow includes:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Section</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Topic</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Purpose / Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">1</td>
                                            <td className="p-3 border border-[#e8e5db]">Continuous Sourcing</td>
                                            <td className="p-3 border border-[#e8e5db]">Build long-term pipelines using alumni, referrals, portals, and agencies</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">2</td>
                                            <td className="p-3 border border-[#e8e5db]">Continuous Networking</td>
                                            <td className="p-3 border border-[#e8e5db]">Leverage HR forums, layoffs, colleges to source talent proactively</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3</td>
                                            <td className="p-3 border border-[#e8e5db]">Company Marketing & Branding</td>
                                            <td className="p-3 border border-[#e8e5db]">Strengthen Innoventes’ hiring brand online</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">4</td>
                                            <td className="p-3 border border-[#e8e5db]">End-to-End SOP</td>
                                            <td className="p-3 border border-[#e8e5db]">Intake → JD finalization → Sourcing → Interviewing → Offer → Onboarding</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">4.1-4.5</td>
                                            <td className="p-3 border border-[#e8e5db]">JD Validation to Onboarding</td>
                                            <td className="p-3 border border-[#e8e5db]">AI-enhanced job descriptions, ranking channels, interviews, onboarding</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Appendix A-E</td>
                                            <td className="p-3 border border-[#e8e5db]">Checklists, Screening, Probing, Reports</td>
                                            <td className="p-3 border border-[#e8e5db]">Standardize evaluation, engagement, documentation, and negotiation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This workflow ensures that every step of the TA process is documented, reviewed, and approved by relevant stakeholders. It allows us to maintain high standards of quality and consistency across all our hiring practices.
                            </p>
                        </CardContent> */}

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Talent Acquisition SOP
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/sop/talent-acquisition.pdf"
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
