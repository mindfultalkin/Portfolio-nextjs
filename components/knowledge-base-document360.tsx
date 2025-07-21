import Image from "next/image";
import { BookOpen } from "lucide-react";

export function KnowledgeBaseDocument360() {
    return (
        <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
            {/* Introduction Section */}
            <div className="relative overflow-hidden border-b border-[#e8e5db]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0894b5]/5 to-[#f48d03]/5" />
                <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-6">
                            <span className="text-[#f48d03] text-xs sm:text-sm font-semibold uppercase tracking-wide">
                                Introduction
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 text-[#2c2c2c]">
                                &#91;REDACTED&#93; NOW Help Center Documentation
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-[#666666] mb-4">
                                This documentation outlines how the [REDACTED] NOW platform was documented in a user-friendly help center format using Document360. It aims to support onboarding, setup, content management, monetization, and delivery workflows for content partners across multiple streaming protocols and formats. The approach focused on creating modular, task-based articles supplemented by visual aids and contextual navigation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Overview Matrix Section */}
            <section id="doc-matrix" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Matrix</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left border border-[#e8e5db] rounded-xl">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th className="px-4 py-2">Step</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2">Deliverable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2">Plan</td>
                                    <td className="px-4 py-2">Identify feature groups (Account setup, Media management, Playlists, etc.). Align with personas.</td>
                                    <td className="px-4 py-2">Modular help categories and article map</td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2">Structure</td>
                                    <td className="px-4 py-2">Use left-panel navigation and linkable subtopics to organize the documentation</td>
                                    <td className="px-4 py-2">Contextual TOC and nested menu in Document360</td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2">Illustrate</td>
                                    <td className="px-4 py-2">Use flowcharts, UI screenshots, and highlighted labels to simplify tasks and features</td>
                                    <td className="px-4 py-2">Visual-first help articles with annotations</td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2">Explain</td>
                                    <td className="px-4 py-2">Provide contextual instructions (e.g. login steps, timezones, ad types)</td>
                                    <td className="px-4 py-2">Clear how-to and explainer articles</td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2">Connect</td>
                                    <td className="px-4 py-2">Cross-link related features and actions (e.g., “See User Management” or "Channel Information")</td>
                                    <td className="px-4 py-2">Linked references to drive retention and reuse</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-4 py-2">Optimize</td>
                                    <td className="px-4 py-2">Group related tasks into end-to-end flows (e.g., login → media → playout → delivery)</td>
                                    <td className="px-4 py-2">Seamless onboarding journeys</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-[#666666]">
                        (Implied Workflow – not shown as a table but inferred from structure)
                    </p>
                </div>
            </section>

            {/* Section: Account Setup and Login */}
            <section id="account-setup" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Account Setup and Login</h2>
                    <figure className="bg-white p-6 rounded-xl border border-[#e8e5db] shadow-md">
                        <Image
                            src="/document360/account-setup-login.png"
                            alt="Account Setup and Login"
                            width={1200}
                            height={800}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </figure>
                    <figcaption className="text-sm text-[#666666] mt-4">
                        <h3 className="font-semibold mb-2">Screenshot 1</h3>
                        <h4 className="font-semibold mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside mb-2">
                            <li>Clearly explains initial onboarding.</li>
                            <li>Uses bolded bullet points for account creation requirements.</li>
                            <li>Promotes a seamless flow by linking users to related pages such as “User Management.”</li>
                        </ul>
                        <h4 className="font-semibold">Benefit:</h4>
                        <p>Establishes a frictionless starting point with just enough context to act.</p>
                    </figcaption>
                </div>
            </section>

            {/* Section: Visual Illustration of Interfaces and Workflows */}
            <section id="setup-channel" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Visual Illustration of Interfaces and Workflows</h2>
                    <figure className="bg-white p-6 rounded-xl border border-[#e8e5db] shadow-md">
                        <Image
                            src="/document360/setup-channel-config-artwork.png"
                            alt="Setup a Channel with Configurations and Artwork"
                            width={1200}
                            height={800}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </figure>
                    <figcaption className="text-sm text-[#666666] mt-4">
                        <h3 className="font-semibold mb-2">Screenshot 2: Channel Configurations & Artwork</h3>
                        <h4 className="font-semibold mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside mb-2">
                            <li>Shows the Channel Configuration UI with focused screenshot.</li>
                            <li>Instructions break down each sub-step: adding info, artwork, descriptions, and output format.</li>
                            <li>Hyperlinked text offers quick access to detailed guides.</li>
                        </ul>
                        <h4 className="font-semibold">Benefit:</h4>
                        <p>Simplifies what could be a dense UI by breaking it into components and callouts.</p>
                    </figcaption>
                </div>
            </section>

            {/* Section: Hands-on Instructions with Annotated Screenshots */}
            <section id="direct-upload" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Hands-on Instructions with Annotated Screenshots</h2>
                    <figure className="bg-white p-6 rounded-xl border border-[#e8e5db] shadow-md">
                        <Image
                            src="/document360/direct-upload-s3.png"
                            alt="Direct upload to S3"
                            width={1200}
                            height={800}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </figure>
                    <figcaption className="text-sm text-[#666666] mt-4">
                        <h3 className="font-semibold mb-2">Screenshot 3: Direct Upload to S3</h3>
                        <h4 className="font-semibold mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside mb-2">
                            <li>Highlights real actions with visual confirmation (e.g., "Download CSV" button).</li>
                            <li>Blends steps with supporting UI visuals to reduce ambiguity.</li>
                        </ul>
                        <h4 className="font-semibold">Benefit:</h4>
                        <p>Helps users match written steps with visual confirmations for accuracy and confidence.</p>
                    </figcaption>
                </div>
            </section>

            {/* Section: System Overview and Journey Flow */}
            <section id="platform-journey" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">System Overview and Journey Flow</h2>
                    <figure className="bg-white p-6 rounded-xl border border-[#e8e5db] shadow-md">
                        <Image
                            src="/document360/platform-journey-flow.png"
                            alt="Platform Journey Flow Diagram"
                            width={1200}
                            height={400}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </figure>
                    <figcaption className="text-sm text-[#666666] mt-4">
                        <h3 className="font-semibold mb-2">Screenshot 4: “What can you do with [REDACTED] NOW”</h3>
                        <h4 className="font-semibold mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside mb-2">
                            <li>Sets the strategic context and purpose of the platform.</li>
                            <li>Uses a visual workflow diagram to map out the user journey (Account Setup → Media Management → Channel Setup → Delivery).</li>
                            <li>Supports embedded navigation through hyperlinks under each icon.</li>
                        </ul>
                        <h4 className="font-semibold">Benefit:</h4>
                        <p>Provides a bird’s-eye view with guided linear steps—ideal for new users or training.</p>
                    </figcaption>
                </div>
            </section>

            {/* Section: System Capabilities and Protocols */}
            <section id="setup-deliveries" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">System Capabilities and Protocols</h2>
                    <figure className="bg-white p-6 rounded-xl border border-[#e8e5db] shadow-md">
                        <Image
                            src="/document360/setup-deliveries-protocols.png"
                            alt="Setup Deliveries Protocols"
                            width={1200}
                            height={800}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </figure>
                    <figcaption className="text-sm text-[#666666] mt-4">
                        <h3 className="font-semibold mb-2">Screenshot 5: Setup Deliveries – Protocols Beyond HLS</h3>
                        <h4 className="font-semibold mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside mb-2">
                            <li>Explains abstract backend concepts (protocols like SRT/Zixi).</li>
                            <li>Uses a labeled diagram to show delivery vs. distribution.</li>
                            <li>Clarifies technical constraints and possibilities through visuals and notes.</li>
                        </ul>
                        <h4 className="font-semibold">Benefit:</h4>
                        <p>Bridges the gap between technical features and user understanding, especially for operations teams.</p>
                    </figcaption>
                </div>
            </section>

            {/* Section: Handling Business-Specific Scenarios */}
            <section id="monetisation-deal" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Handling Business-Specific Scenarios</h2>
                    <figure className="bg-white p-6 rounded-xl border border-[#e8e5db] shadow-md">
                        <Image
                            src="/document360/handle-monetisation-deal.png"
                            alt="Handle change in ad monetisation deal"
                            width={1200}
                            height={800}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </figure>
                    <figcaption className="text-sm text-[#666666] mt-4">
                        <h3 className="font-semibold mb-2">Screenshot 6: Change in Monetization Deal</h3>
                        <h4 className="font-semibold mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside mb-2">
                            <li>Shows how to switch monetization deal types in response to regional or contractual changes.</li>
                            <li>Lists step-by-step instructions, ending with a visual of the confirmation modal.</li>
                        </ul>
                        <h4 className="font-semibold">Benefit:</h4>
                        <p>Addresses real-world exceptions and operational agility while ensuring traceability.</p>
                    </figcaption>
                </div>
            </section>

            {/* Section: Explaining UI Elements (Clocks & Timezones) */}
            <section id="ui-clocks" className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f5f2e8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Explaining UI Elements (Clocks & Timezones)</h2>
                    <figure className="bg-white p-6 rounded-xl border border-[#e8e5db] shadow-md">
                        <Image
                            src="/document360/ui-clocks-display.png"
                            alt="Understanding the clocks displayed in the UI"
                            width={1200}
                            height={400}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </figure>
                    <figcaption className="text-sm text-[#666666] mt-4">
                        <h3 className="font-semibold mb-2">Screenshot 7: Understanding Clocks in UI</h3>
                        <h4 className="font-semibold mb-1">Key Points:</h4>
                        <ul className="list-disc list-inside mb-2">
                            <li>Details multiple timezones relevant to playout management.</li>
                            <li>Labels a screenshot with clearly annotated timestamps: Channel, Operator, UTC.</li>
                            <li>Emphasizes the purpose of each clock for broadcast synchronization.</li>
                        </ul>
                        <h4 className="font-semibold">Benefit:</h4>
                        <p>Reduces confusion around time-sensitive workflows and aligns global teams.</p>
                    </figcaption>
                </div>
            </section>
        </div>
    );
}
