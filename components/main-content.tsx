import { ArrowRight, Users, Target, Award, TrendingUp } from "lucide-react"

export function MainContent() {
  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0894b5]/10 to-[#f48d03]/10" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#0894b5]/15 border border-[#0894b5]/20 rounded-full text-[#0894b5] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span>NSRCEL - IIM Bangalore Incubated</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-[#2c2c2c]">
              Introduction and basic
              <br />
              <span className="text-[#0894b5]">stats: MindfulTalk 2025</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#666666] mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Join the transformation in professional communication. Making professionals communicate better across
              enterprises.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-[#f5f2e8] p-4 sm:p-6 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl sm:text-4xl font-bold text-[#0894b5] mb-2">100+</div>
                <div className="text-[#666666] text-sm sm:text-base">
                  Years of combined experience across education and IT
                </div>
              </div>
              <div className="bg-[#f5f2e8] p-4 sm:p-6 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl sm:text-4xl font-bold text-[#f48d03] mb-2">500+</div>
                <div className="text-[#666666] text-sm sm:text-base">
                  Professionals trained across various industries
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 bg-[#0894b5] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-[#fffcf3] font-bold">MT</span>
                </div>
                <div className="flex-1">
                  <blockquote className="text-base sm:text-lg italic text-[#2c2c2c] mb-4 leading-relaxed">
                    "We don't just teach English — we develop real business communication skills that improve clarity,
                    collaboration, and confidence."
                  </blockquote>
                  <div className="text-[#666666]">
                    <div className="font-semibold text-sm sm:text-base">MindfulTalk Team</div>
                    <div className="text-xs sm:text-sm">Communication Excellence Experts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <span className="text-[#f48d03] text-xs sm:text-sm font-semibold uppercase tracking-wide">
              Introduction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4 sm:mb-6 text-[#2c2c2c]">
              Communication's strategic role goes beyond support
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-[#666666] mb-4 sm:mb-6 leading-relaxed">
              Communication is no longer just a support skill — it's a vital business asset. Companies today recognize
              that effective communication drives revenue, reduces costs, and builds stronger long-term loyalty.
            </p>

            <p className="text-base sm:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
              We asked 500+ professionals across various technical writer and author of The Mindful Docs about their
              communication challenges, training needs, and business impact. Here's what we discovered: Poor
              communication costs organizations productivity, morale, and revenue. Our training directly addresses these
              gaps, resulting in increased revenue, reduced attrition, and stronger leadership.
            </p>

            <div className="bg-[#f5f2e8] p-4 sm:p-6 rounded-xl border border-[#e8e5db] shadow-sm mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[#0894b5] mb-3 sm:mb-4">Key Findings</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#666666]">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">
                    Poor communication directly impacts business outcomes and team effectiveness
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#f48d03] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">
                    Organizations need structured communication training programs
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">
                    Technical documentation quality affects user experience and scalability
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[#f5f2e8]/50">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-[#2c2c2c]">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#0894b5] rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <Users className="w-6 h-6 text-[#fffcf3]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#2c2c2c]">
                Corporate Business Communication
              </h3>
              <p className="text-[#666666] mb-4 text-sm sm:text-base leading-relaxed">
                From writing impactful emails to delivering powerful presentations, we help professionals articulate
                ideas, solve problems collaboratively, and influence effectively.
              </p>
              <div className="flex items-center text-[#0894b5] text-sm font-medium hover:text-[#f48d03] transition-colors duration-200 cursor-pointer">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#f48d03] rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <Target className="w-6 h-6 text-[#fffcf3]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#2c2c2c]">Programs for Women</h3>
              <p className="text-[#666666] mb-4 text-sm sm:text-base leading-relaxed">
                Targeted coaching for early- and mid-career women focusing on assertiveness, networking, emotional
                intelligence, transitions, and leadership presence.
              </p>
              <div className="flex items-center text-[#f48d03] text-sm font-medium hover:text-[#0894b5] transition-colors duration-200 cursor-pointer">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#0894b5] rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-md">
                <Award className="w-6 h-6 text-[#fffcf3]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#2c2c2c]">
                Technical Documentation Services
              </h3>
              <p className="text-[#666666] mb-4 text-sm sm:text-base leading-relaxed">
                We specialize in technical writing for SaaS, software, and product-based businesses — from user manuals
                to release notes and SOPs.
              </p>
              <div className="flex items-center text-[#0894b5] text-sm font-medium hover:text-[#f48d03] transition-colors duration-200 cursor-pointer">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#2c2c2c]">Why It Matters</h2>
          <p className="text-lg sm:text-xl text-[#666666] mb-8 sm:mb-12 leading-relaxed">
            Poor communication is like a leaky pipe — it costs organizations productivity, morale, and revenue. Our
            training directly addresses these gaps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-16 h-16 bg-[#0894b5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <TrendingUp className="w-8 h-8 text-[#fffcf3]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#2c2c2c]">Increased Revenue</h3>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                Better communication leads to improved customer satisfaction and business growth
              </p>
            </div>

            <div className="text-center bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-16 h-16 bg-[#f48d03] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="w-8 h-8 text-[#fffcf3]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#2c2c2c]">Reduced Attrition</h3>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                Clear communication reduces misunderstandings and improves team retention
              </p>
            </div>

            <div className="text-center bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm hover:shadow-md transition-all duration-200 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#0894b5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="w-8 h-8 text-[#fffcf3]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#2c2c2c]">Stronger Leadership</h3>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                Enhanced communication skills build confident leaders and engaged employees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
