"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function FlippedClassMicrolearning() {
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
                                Flipped Class and Microlearning for Language Development – A Practitioner’s Experience
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                White Paper | Microlearning | Education
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                This white paper documents how flipped classrooms and microlearning can transform English language proficiency in school teachers—especially those working with first-generation English learners. <br/>The paper shares hands-on learnings from a large-scale deployment (Project TEFD), offering a replicable model for language capacity-building that blends pedagogical depth with flexibility and scale.
                            </p>
                            {/* <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>Many Indian teachers are expected to teach in English but lack fluency, which creates challenges for students and limits learning outcomes.</li>
                                <li>Combined flipped classroom methods (learn before class) with microlearning (short, focused modules) and 1:1 mentorship.</li>
                                <li>Rolled out to ~1000 teachers across public and private schools; tracked engagement, mentor interactions, and application.</li>
                                <li>Significant learning gains, higher use of English in classrooms, improved confidence, and clear preference for hybrid models.</li>
                                <li>Provides a replicable model for language capacity-building that blends pedagogical depth with flexibility and scale.</li>
                            </ul> */}
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
                                            <th className="p-3 text-left border border-[#e8e5db]">Stage</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Focus Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Learning/Operational Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">1</td>
                                            <td className="p-3 border border-[#e8e5db]">Needs Analysis</td>
                                            <td className="p-3 border border-[#e8e5db]">Identify teacher fluency gaps, delivery challenges, and learner context</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">2</td>
                                            <td className="p-3 border border-[#e8e5db]">Pedagogical Design</td>
                                            <td className="p-3 border border-[#e8e5db]">Blend flipped classroom with microlearning + mentor-led practice</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">3</td>
                                            <td className="p-3 border border-[#e8e5db]">Lesson Delivery</td>
                                            <td className="p-3 border border-[#e8e5db]">Deliver 60 mini-lessons (15 min each) via video, audio, quizzes</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">4</td>
                                            <td className="p-3 border border-[#e8e5db]">Mentorship Interaction</td>
                                            <td className="p-3 border border-[#e8e5db]">1:1 feedback and fluency practice; learners submit audio/video tasks</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">5</td>
                                            <td className="p-3 border border-[#e8e5db]">Progress Tracking</td>
                                            <td className="p-3 border border-[#e8e5db]">Monitor completion, assessment improvement, and classroom application</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">6</td>
                                            <td className="p-3 border border-[#e8e5db]">Learner Feedback & Insights</td>
                                            <td className="p-3 border border-[#e8e5db]">Track preferences, resistance, drop-off points, and mentor effectiveness</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">7</td>
                                            <td className="p-3 border border-[#e8e5db]">Recommendations</td>
                                            <td className="p-3 border border-[#e8e5db]">Buddy systems, leadership engagement, early onboarding support</td>
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
                                White Paper                              
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[800px] w-full">
                                <PDFViewer
                                    url="/blogs/flipped-class-microlearning.pdf"
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
