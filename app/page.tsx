"use client"

import dynamic from 'next/dynamic'
import { useState, Suspense } from "react"
import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

// Dynamically import components for better performance
const CommunicationCoachBot = dynamic(
  () => import("@/components/communication-coach-bot").then((mod) => mod.CommunicationCoachBot),
  { ssr: false }
)
const DataSecuritySoftware = dynamic(
  () => import("@/components/data-security-software").then((mod) => mod.DataSecuritySoftware),
  { ssr: false }
)
const KnowledgeBaseDocument360 = dynamic(
  () => import("@/components/document360").then((mod) => mod.Document360),
  { ssr: false }
)
const KnowledgeBaseDocusaurus = dynamic(
  () => import("@/components/docusaurus").then((mod) => mod.Docusaurus),
  { ssr: false }
)
const SharePoint = dynamic(
  () => import("@/components/share-point").then((mod) => mod.SharePoint),
  { ssr: false }
)
const BusinessRequirements = dynamic(
  () => import("@/components/business-requirements").then((mod) => mod.BusinessRequirements),
  { ssr: false }
)
const SystemArchitecture = dynamic(
  () => import("@/components/system-architecture").then((mod) => mod.SystemArchitecture),
  { ssr: false }
)
const ProductDevelopment = dynamic(
  () => import("@/components/product-development").then((mod) => mod.ProductDevelopment),
  { ssr: false }
)
const GlobocastLive = dynamic(() =>
  import("@/components/globocast-live").then((module) => ({ default: module.GlobocastLive })),
)
const FAQsTroubleshooting = dynamic(() =>
  import("@/components/faqs-troubleshooting").then((module) => ({ default: module.FAQsTroubleshooting })),
)
const ProductRequirements = dynamic(() =>
  import("@/components/product-requirements").then((module) => ({ default: module.ProductRequirements })),
)
const UserManuals = dynamic(() =>
  import("@/components/user-manuals").then((module) => ({ default: module.UserManuals })),
)
const FlowOfEnglish = dynamic(() =>
  import("@/components/flow-of-english").then((module) => ({ default: module.FlowOfEnglish })),
)
const TalentAcquisition = dynamic(() =>
  import("@/components/talent-acquisition").then((module) => ({ default: module.TalentAcquisition })),
)
const FurnitureMakerProcesses = dynamic(() =>
  import("@/components/furniture-maker-processes").then((module) => ({ default: module.FurnitureMakerProcesses })),
)
const ApprovalsAccess = dynamic(() =>
  import("@/components/approvals-access").then((module) => ({ default: module.ApprovalsAccess })),
)
const ApplyLeave = dynamic(() =>
  import("@/components/apply-leave").then((module) => ({ default: module.ApplyLeave })),
)
const CompensatoryOff = dynamic(() =>
  import("@/components/compensatory-off").then((module) => ({ default: module.CompensatoryOff })),
)
const NavigatingMediaLibrary = dynamic(() =>
  import("@/components/navigating-media-library").then((module) => ({ default: module.NavigatingMediaLibrary })),
)
const AdjustingFlexibleDuration = dynamic(() =>
  import("@/components/adjusting-flexible-duration").then((module) => ({ default: module.AdjustingFlexibleDuration })),
)
const UpdateSeo = dynamic(() =>
  import("@/components/update-seo").then((module) => ({ default: module.UpdateSeo })),
)
const TemperatureAutomation = dynamic(() =>
  import("@/components/temperature-automation").then((module) => ({ default: module.TemperatureAutomation })),
)
const ElpisPlatform = dynamic(() =>
  import("@/components/elpis-platform").then((module) => ({ default: module.ElpisPlatform })),
)
const TrainingNeedsBethliving = dynamic(() =>
  import("@/components/training-needs-bethliving").then((module) => ({ default: module.TrainingNeedsBethliving })),
)
const TrainingNeedsUnisol = dynamic(() =>
  import("@/components/training-needs-unisol").then((module) => ({ default: module.TrainingNeedsUnisol })),
)
const TrainingNeedsHudini = dynamic(() =>
  import("@/components/training-needs-hudini").then((module) => ({ default: module.TrainingNeedsHudini })),
)
const FlippedClassMicrolearning = dynamic(() =>
  import("@/components/flipped-class-microlearning").then((module) => ({ default: module.FlippedClassMicrolearning })),
)
const KhanAcademyBeam = dynamic(() =>
  import("@/components/khan-academy-beam").then((module) => ({ default: module.KhanAcademyBeam })),
)
const ElpisEmpoweringMSMEs = dynamic(() =>
  import("@/components/elpis-empowering-msmes").then((module) => ({ default: module.ElpisEmpoweringMSMEs })),
)
const DigitalTransformationCustomerCentric = dynamic(() =>
  import("@/components/digital-transformation-customer-centric").then((module) => ({ default: module.DigitalTransformationCustomerCentric })),
)
const MaypoleDanceManagedDevOps = dynamic(() =>
  import("@/components/maypole-dance-manageddevops").then((module) => ({ default: module.MaypoleDanceManagedDevOps })),
)
const DeliberateDecideData = dynamic(() =>
  import("@/components/deliberate-decide-data").then((module) => ({ default: module.DeliberateDecideData })),
)
const HealthInsuranceScenario = dynamic(() =>
  import("@/components/health-insurance-scenarios").then((module) => ({ default: module.HealthInsuranceScenario })),
)
const DenialCodeCo197 = dynamic(() =>
  import("@/components/denial-code-co-197").then((module) => ({ default: module.DenialCodeCo197 })),
)
// const QuestionsImportance = dynamic(() =>
//   import("@/components/questions-importance").then((module) => ({ default: module.QuestionsImportance })),
// )
const UnisolObjectionHandling = dynamic(() =>
  import("@/components/unisol-objection-handling").then((module) => ({ default: module.UnisolObjectionHandling })),
)
const BethlivingSalesSuccess = dynamic(() =>
  import("@/components/bethliving-sales-success").then((module) => ({ default: module.BethlivingSalesSuccess })),
)
const BethlivingObjectionHandling = dynamic(() =>
  import("@/components/bethliving-objection-handling").then((module) => ({ default: module.BethlivingObjectionHandling })),
)
const Bethliving9USPS = dynamic(() =>
  import("@/components/bethliving-9-usps").then((module) => ({ default: module.Bethliving9USPS })),
)
const BethlivingStorytelling = dynamic(() =>
  import("@/components/bethliving-storytelling").then((module) => ({ default: module.BethlivingStorytelling })),
)
const BethlivingCRMTraining = dynamic(() =>
  import("@/components/bethliving-crm-training").then((module) => ({ default: module.BethlivingCRMTraining })),
)
const StreamliningPostSales = dynamic(() =>
  import("@/components/streamlining-post-sales").then((module) => ({ default: module.StreamliningPostSales })),
)


// dynamic load PDF demo component
const PDFDemo = dynamic(() =>
  import("@/app/content-pdf-demo/page").then((module) => ({ default: module.default })),
)

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#fffcf3] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0894b5] mx-auto mb-4"></div>
        <p className="text-[#666666]">Loading content...</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderContent = () => {
    switch (currentPage) {
      case "communication-coach-bot":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CommunicationCoachBot />
          </Suspense>
        )
      case "data-security-software":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <DataSecuritySoftware />
          </Suspense>
        )        
      case "document360":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseDocument360 />
          </Suspense>
        )
      case "docusaurus":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KnowledgeBaseDocusaurus />
          </Suspense>
        )
      case "share-point":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <SharePoint />
          </Suspense>
        )
      case "business-requirements":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BusinessRequirements />
          </Suspense>
        )
      case "system-architecture":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <SystemArchitecture />
          </Suspense>
        )
      case "product-development":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDevelopment />
          </Suspense>
        )
      case "globocast-live":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <GlobocastLive />
          </Suspense>
        )
      case "faqs-troubleshooting":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <FAQsTroubleshooting />
          </Suspense>
        )
      case "product-requirements":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductRequirements />
          </Suspense>
        )
      case "user-manuals":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <UserManuals />
          </Suspense>
        )
      case "flow-of-english":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <FlowOfEnglish />
          </Suspense>
        )
      case "talent-acquisition":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <TalentAcquisition />
          </Suspense>
        )
      case "furniture-maker-processes":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <FurnitureMakerProcesses />
          </Suspense>
        )
      case "approvals-access":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ApprovalsAccess />
          </Suspense>
        )
      case "apply-leave":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ApplyLeave />
          </Suspense>
        )
      case "compensatory-off":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CompensatoryOff />
          </Suspense>
        )
      case "navigating-media-library":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <NavigatingMediaLibrary />
          </Suspense>
        )
      case "adjusting-flexible-duration":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AdjustingFlexibleDuration />
          </Suspense>
        )
      case "update-seo":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <UpdateSeo />
          </Suspense>
        )
      case "temperature-automation":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <TemperatureAutomation />
          </Suspense>
        )
      case "elpis-platform":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ElpisPlatform />
          </Suspense>
        )
      case "training-needs-bethliving":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <TrainingNeedsBethliving />
          </Suspense>
        )
      case "training-needs-unisol":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <TrainingNeedsUnisol />
          </Suspense>
        )
      case "training-needs-hudini":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <TrainingNeedsHudini />
          </Suspense>
        )
      case "flipped-class-microlearning":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <FlippedClassMicrolearning />
          </Suspense>
        )
      case "khan-academy-beam":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <KhanAcademyBeam />
          </Suspense>
        )
      case "elpis-empowering-msmes":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ElpisEmpoweringMSMEs />
          </Suspense>
        )
      case "digital-transformation-customer-centric":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <DigitalTransformationCustomerCentric />
          </Suspense>
        )
      case "maypole-dance-manageddevops":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <MaypoleDanceManagedDevOps />
          </Suspense>
        )
      case "deliberate-decide-data":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <DeliberateDecideData />
          </Suspense>
        )
      case "health-insurance-scenarios":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HealthInsuranceScenario />
          </Suspense>
        )
      case "denial-code-co-197":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <DenialCodeCo197 />
          </Suspense>
        )
      // case "questions-importance":
      //   return (
      //     <Suspense fallback={<LoadingSpinner />}>
      //       <QuestionsImportance />
      //     </Suspense>
      //   )
      case "unisol-objection-handling":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <UnisolObjectionHandling />
          </Suspense>
        )
      case "bethliving-sales-success":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BethlivingSalesSuccess />
          </Suspense>
        )
      case "bethliving-objection-handling":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BethlivingObjectionHandling />
          </Suspense>
        )
      case "bethliving-9-usps":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <Bethliving9USPS />
          </Suspense>
        )
      case "bethliving-storytelling":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BethlivingStorytelling />
          </Suspense>
        )
      case "bethliving-crm-training":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BethlivingCRMTraining />
          </Suspense>
        )
      case "streamlining-post-sales":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <StreamliningPostSales />
          </Suspense>
        )
      case "pdf-demo":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <PDFDemo />
          </Suspense>
        )
      default:
        return <MainContent />
    }
  }

  return (
    <div className="flex min-h-screen bg-[#fffcf3]">
      <Sidebar onNavigate={setCurrentPage} />
      <main className="flex-1 lg:ml-72 xl:ml-80 transition-all duration-300">{renderContent()}</main>
    </div>
  )
}
