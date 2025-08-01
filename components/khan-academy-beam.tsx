"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function KhanAcademyBeam() {
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
                                Project BEAM – Khan Academy
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Khan Academy Project BEAM | 60+ articles | 12 weeks
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                We created this documentation to showcase Project BEAM, a scalable microlearning initiative by Khan Academy India, designed to uplift blue-collar workers through basic English and Math literacy. Delivered entirely over WhatsApp, the project aims to provide flexible, bite-sized learning to individuals who may not have completed formal schooling—empowering them with skills that have real-world utility in workplaces.<br/>In collaboration with partners like Chippersage and Gupshup.io, this project represents a powerful convergence of edtech, content design, and accessible delivery infrastructure to build learning habits where traditional education systems may not reach.
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Upskill blue-collar workers in basic Math and English to support career growth and confidence.</li>
                                <li>Individuals without Class 10 completion, mostly Gen Z, employed across logistics, delivery, retail, etc.</li>
                                <li>Deployed across 4 corporates with 3,000+ learners onboarded in under 5 months.</li>
                                <li>Delivered via WhatsApp, leveraging microlearning principles for flexible, bite-sized content.</li>
                                <li>Content designed to be relevant, practical, and immediately applicable in real-world scenarios.</li>
                                <li>Focus on building learning habits and confidence through accessible, engaging delivery.</li>
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Component</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Outcome / Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Target Profile</td>
                                            <td className="p-3 border border-[#e8e5db]">Blue-collar workers, Gen Z users</td>
                                            <td className="p-3 border border-[#e8e5db]">Build practical literacy in English and Math</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Learning Design</td>
                                            <td className="p-3 border border-[#e8e5db]">Micro-lessons (3 mins each)</td>
                                            <td className="p-3 border border-[#e8e5db]">Minimize cognitive load, promote habit formation</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Delivery Channel</td>
                                            <td className="p-3 border border-[#e8e5db]">WhatsApp via Gupshup</td>
                                            <td className="p-3 border border-[#e8e5db]">Always-available access; familiarity drives usage</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Content Strategy</td>
                                            <td className="p-3 border border-[#e8e5db]">Math by Khan Academy, English by Chippersage</td>
                                            <td className="p-3 border border-[#e8e5db]">Customized, life-relevant content in preferred languages</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Backend Infra</td>
                                            <td className="p-3 border border-[#e8e5db]">AWS S3 + UTM-tracked links</td>
                                            <td className="p-3 border border-[#e8e5db]">Seamless hosting, learner-specific analytics</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Tracking & Analytics</td>
                                            <td className="p-3 border border-[#e8e5db]">Google Analytics</td>
                                            <td className="p-3 border border-[#e8e5db]">Usage insights, popular content, optimization loop</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">User Motivation</td>
                                            <td className="p-3 border border-[#e8e5db]">Rewards, nudges, certificates</td>
                                            <td className="p-3 border border-[#e8e5db]">Boost participation and course completion</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This structured approach ensures that our documentation is not only comprehensive but also user-friendly, making it easy for learners to navigate and find the information they need.
                            </p>
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Documentation Workflow Steps
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/blogs/khan-academy-beam.pdf"
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
