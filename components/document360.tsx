"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Document360() {
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
                                Help Center for a Mediatech Company
                            </h1>
                            <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                                Document360 | 140+ articles | 18 months
                            </Badge>
                            <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                                A complete self-service portal for the Mediatech company’s two products from the ground up. The key highlights are:
                            </p>
                            <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                                <li>140+ detailed, user-friendly help articles for the first product</li>
                                <li>Optimized for search with keyword strategy and metadata</li>
                                <li>Document360 platform</li>
                                <li>Delivered in 18 months, from planning to publishing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Documentation Workflow Section */}
                    <Card className="bg-[#f5f2e8] border-[#e8e5db]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Documentation Workflow Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                This matrix maps every stage of our documentation workflow to its key outputs, ensuring consistent quality and measurable progress across 60+ articles.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#0894b5] text-white">
                                            <th className="p-3 text-left border border-[#e8e5db]">Stage</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Topic Area</th>
                                            <th className="p-3 text-left border border-[#e8e5db]">Key Outputs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Introduction</td>
                                            <td className="p-3 border border-[#e8e5db]">What can you do with [Platform] NOW</td>
                                            <td className="p-3 border border-[#e8e5db]">Overview of platform capabilities including ingest, scheduling, monetisation, and delivery flows.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Account Setup</td>
                                            <td className="p-3 border border-[#e8e5db]">Account Setup and Login</td>
                                            <td className="p-3 border border-[#e8e5db]">Steps for account creation, onboarding, and user invitation.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Storage Integration</td>
                                            <td className="p-3 border border-[#e8e5db]">Direct Upload to S3</td>
                                            <td className="p-3 border border-[#e8e5db]">S3 access setup, credential generation, and CSV export process.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Media Management</td>
                                            <td className="p-3 border border-[#e8e5db]">Manage Media</td>
                                            <td className="p-3 border border-[#e8e5db]">Upload methods (CSV, mRSS), ingestion source updates, metadata bulk upload.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Channel Setup</td>
                                            <td className="p-3 border border-[#e8e5db]">Setup Channel with Configurations and Artwork</td>
                                            <td className="p-3 border border-[#e8e5db]">Channel creation, artwork, metadata, output formats, and broadcast time setup.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Delivery Setup</td>
                                            <td className="p-3 border border-[#e8e5db]">Set Up Deliveries to Platforms</td>
                                            <td className="p-3 border border-[#e8e5db]">Streaming protocol options (HLS, Zixi, SRT, RTP) and source parameter automation.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">Monetisation</td>
                                            <td className="p-3 border border-[#e8e5db]">Handle Change in Ad Monetisation Deal</td>
                                            <td className="p-3 border border-[#e8e5db]">Process for editing monetisation deals and switching deal types in the UI.</td>
                                        </tr>
                                        <tr className="bg-transparent">
                                            <td className="p-3 border border-[#e8e5db] font-semibold">UI & Monitoring</td>
                                            <td className="p-3 border border-[#e8e5db]">Understanding Clocks Displayed in UI</td>
                                            <td className="p-3 border border-[#e8e5db]">Timezone awareness in UI: operator time, UTC, and channel timestamps.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                                Our documentation workflow followed a structured set of steps and activities - from planning, content creation, review, and publishing. This ensured consistent quality across the 140+ articles.
                            </p>
                        </CardContent>

                        <CardHeader>
                            <CardTitle className="text-2xl text-[#0894b5]">
                                Snapshots: Take a tour of the Help Center on Document360
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/document360/platform-journey-flow.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 1"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="text-sm text-[#666666] mt-4">
                                <h3 className="font-semibold mb-2">“What can you do with [REDACTED] NOW”</h3>
                                <h4 className="font-semibold mb-1">Key Points:</h4>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Sets the strategic context and purpose of the platform.</li>
                                    <li>Uses a visual workflow diagram to map out the user journey (Account Setup → Media Management → Channel Setup → Delivery).</li>
                                    <li>Supports embedded navigation through hyperlinks under each icon.</li>
                                </ul>
                                <h4 className="font-semibold">Benefit:</h4>
                                <p>Provides a bird's-eye view with guided linear steps—ideal for new users or training.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/document360/setup-deliveries-protocols.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 2"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="text-sm text-[#666666] mt-4">
                                <h3 className="font-semibold mb-2">Setup Deliveries - Protocols Beyond HLS</h3>
                                <h4 className="font-semibold mb-1">Key Points:</h4>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Explains abstract backend concepts (protocols like SRT/Zixi).</li>
                                    <li>Uses a labeled diagram to show delivery vs. distribution.</li>
                                    <li>Clarifies technical constraints and possibilities through visuals and notes.</li>
                                </ul>
                                <h4 className="font-semibold">Benefit:</h4>
                                <p>Bridges the gap between technical features and user understanding, especially for operations teams.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/document360/handle-monetisation-deal.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 3"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="text-sm text-[#666666] mt-4">
                                <h3 className="font-semibold mb-2">Change in Monetization Deal</h3>
                                <h4 className="font-semibold mb-1">Key Points:</h4>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Shows how to switch monetization deal types in response to regional or contractual changes.</li>
                                    <li>Lists step-by-step instructions, ending with a visual of the confirmation modal.</li>
                                </ul>
                                <h4 className="font-semibold">Benefit:</h4>
                                <p>Addresses real-world exceptions and operational agility while ensuring traceability.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/document360/account-setup-login.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 4"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="text-sm text-[#666666] mt-4">
                                <h3 className="font-semibold mb-2">Account Setup Login</h3>
                                <h4 className="font-semibold mb-1">Key Points:</h4>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Clearly explains initial onboarding.</li>
                                    <li>Uses bolded bullet points for account creation requirements.</li>
                                    <li>Promotes a seamless flow by linking users to related pages such as “User Management.”</li>
                                </ul>
                                <h4 className="font-semibold">Benefit:</h4>
                                <p>Establishes a frictionless starting point with just enough context to act.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/document360/setup-channel-config-artwork.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 5"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="text-sm text-[#666666] mt-4">
                                <h3 className="font-semibold mb-2">Channel Configurations & Artwork</h3>
                                <h4 className="font-semibold mb-1">Key Points:</h4>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Shows the Channel Configuration UI with focused screenshot.</li>
                                    <li>Instructions break down each sub-step: adding info, artwork, descriptions, and output format.</li>
                                    <li>Hyperlinked text offers quick access to detailed guides.</li>
                                </ul>
                                <h4 className="font-semibold">Benefit:</h4>
                                <p>Simplifies what could be a dense UI by breaking it into components and callouts.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/document360/direct-upload-s3.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 6"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="text-sm text-[#666666] mt-4">
                                <h3 className="font-semibold mb-2">Direct Upload to S3</h3>
                                <h4 className="font-semibold mb-1">Key Points:</h4>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Highlights real actions with visual confirmation (e.g., "Download CSV" button).</li>
                                    <li>Blends steps with supporting UI visuals to reduce ambiguity.</li>
                                </ul>
                                <h4 className="font-semibold">Benefit:</h4>
                                <p>Helps users match written steps with visual confirmations for accuracy and confidence.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />

                            <div className="space-y-7 max-w-3xl mx-auto">
                                <Image
                                    src="/document360/ui-clocks-display.png"
                                    width={800}
                                    height={600}
                                    alt="Snapshot 7"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>

                            <figcaption className="text-sm text-[#666666] mt-4">
                                <h3 className="font-semibold mb-2">Understanding Clocks in UI</h3>
                                <h4 className="font-semibold mb-1">Key Points:</h4>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Details multiple timezones relevant to playout management.</li>
                                    <li>Labels a screenshot with clearly annotated timestamps: Channel, Operator, UTC.</li>
                                    <li>Emphasizes the purpose of each clock for broadcast synchronization.</li>
                                </ul>
                                <h4 className="font-semibold">Benefit:</h4>
                                <p>Reduces confusion around time-sensitive workflows and aligns global teams.</p>
                            </figcaption>
                            <hr className="border-[#e8e5db] my-4" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}
