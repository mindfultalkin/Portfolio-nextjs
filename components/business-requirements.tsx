"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PDFViewer } from "@/components/pdf-viewer"

export function BusinessRequirements() {
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
                Business Requirement Document (BRD)
              </h1>
              <Badge variant="outline" className="bg-[#f5f2e8] border-[#0894b5] text-[#0894b5] px-4 py-2">
                SaaSmile | 60+ articles | 12 weeks
              </Badge>
              <p className="text-lg sm:text-xl text-[#666666] mx-auto text-left leading-relaxed">
                This document outlines the business and technical requirements for building the SaaSmile shipping plugin for Magento 2. The plugin enables merchants to manage shipments, generate AWBs, and track deliveries directly within their eCommerce platform. Designed for use by SaaSmile Admins, Carrier Admins, and Merchant Users, the plugin supports integration with multiple logistics carriers. This serves as a foundational guide for consistent, scalable plugin development across partners and platforms.
              </p>
              <ul className="text-[#666666] list-disc list-inside text-left mx-auto">
                <li>Define business and technical requirements for the SaaSmile shipping plugin on Magento 2</li>
                <li>Enables merchants to manage shipments, generate AWBs, track deliveries, and view remittances.</li>
                <li>Focused solely on Magento 2 (Magento 1 support discontinued)</li>
                <li>Merchants using multiple carriers must configure separate plugins.</li>
                <li>Designed to support future white-labeled plugins for platforms like Shopify, WooCommerce, and Salla</li>
                <li>Provides a foundational guide for consistent, scalable plugin development across partners and platforms</li>
              </ul>
            </div>
          </div>

          {/* Documentation Workflow Section */}
          <Card className="bg-[#f5f2e8] border-[#e8e5db]">
            {/* <CardHeader>
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
                      <td className="p-3 border border-[#e8e5db] font-semibold">Introduction and Scope</td>
                      <td className="p-3 border border-[#e8e5db]">Introduces SaaSmile, plugin purpose, platforms, access roles, and story context.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">User Stories & Journey</td>
                      <td className="p-3 border border-[#e8e5db]">Real-world example with XYZ Apparels; explains role-based interaction and credential use.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Roles & Prerequisites</td>
                      <td className="p-3 border border-[#e8e5db]">Details all stakeholders, credential dependencies, platform assumptions, and terminology.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Plugin Requirements (Req. 1-16)</td>
                      <td className="p-3 border border-[#e8e5db]">End-to-end functional requirements from plugin installation to manual AWB creation.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Req. 1-3: Plugin install, config, token</td>
                      <td className="p-3 border border-[#e8e5db]">Setup process for merchants and token-based transaction workflow.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Req. 4-5: AWB creation, inventory use</td>
                      <td className="p-3 border border-[#e8e5db]">AWB creation and inventory source selection per shipment.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Req. 6-7: Dashboard & CSV Reporting</td>
                      <td className="p-3 border border-[#e8e5db]">Shipment status view by roles, and downloadable CSV shipment data.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Req. 8-9: AWB tracking, package view</td>
                      <td className="p-3 border border-[#e8e5db]">Full event history and package item details per shipment.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Req. 10-12: Freight rates, invoices</td>
                      <td className="p-3 border border-[#e8e5db]">View freight pricing, shipment invoices, and upload proof of payments.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Req. 13-15: COD remittance workflows</td>
                      <td className="p-3 border border-[#e8e5db]">Monitor, approve, and confirm receipt of COD payments from carriers.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Req. 16: Manual AWB</td>
                      <td className="p-3 border border-[#e8e5db]">Allow order-based AWB creation with rich metadata and validations.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Technical Requirements (Req. 20-21)</td>
                      <td className="p-3 border border-[#e8e5db]">White-labeling, branding, plugin duplication, UI consistency, centralized infra.</td>
                    </tr>
                    <tr className="bg-transparent">
                      <td className="p-3 border border-[#e8e5db] font-semibold">Information Architecture (Reference Only)</td>
                      <td className="p-3 border border-[#e8e5db]">High-level data model to guide development and integration.</td>
                    </tr>
                    <tr className="bg-transparent"></tr>
                    <tr className="bg-transparent"></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-[#666666] mx-auto text-left leading-relaxed">
                Our documentation workflow followed a structured set of steps and activities - from planning, content creation, review, and publishing. This ensured consistent quality across the 60+ articles.
              </p>
            </CardContent>             */}
            <CardContent>
              <div className="relative h-[800px] w-full">
                <PDFViewer
                  url="/software-development-life-cycle/business-requirements.pdf"
                  scale={100}
                  showControls={true}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
