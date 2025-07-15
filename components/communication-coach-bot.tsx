import { Code, Database, MessageSquare } from "lucide-react"

export function CommunicationCoachBot() {
  return (
    <div className="min-h-screen bg-[#fffcf3] text-[#2c2c2c]">
      {/* Header Section */}
      <div className="relative overflow-hidden border-b border-[#e8e5db]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0894b5]/5 to-[#f48d03]/5" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#0894b5]/15 border border-[#0894b5]/20 rounded-full text-[#0894b5] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Code className="w-4 h-4 mr-2" />
              <span>API Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-[#2c2c2c]">
              Communication Coach Bot
            </h1>
            <p className="text-lg sm:text-xl text-[#666666] mb-6 sm:mb-8 max-w-3xl leading-relaxed">
              Version 2.1 - A comprehensive SaaS platform providing organizations with a low-code, no-code approach to
              setup services for sharing learning information through WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f5f2e8]/30">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a
                href="#introduction"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                1. Introduction
              </a>
              <a
                href="#communication-coach-bot"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                2. Communication Coach Bot
              </a>
              <a
                href="#requirements"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                3. Cloud and Software Requirements
              </a>
              <a
                href="#workflow"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                4. Example Workflow
              </a>
              <a
                href="#configuration"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                5. Configuration of the Bot
              </a>
              <a
                href="#workflow-parameters"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                6. Workflow Parameters
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="#message-templates"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                7. Message Templates
              </a>
              <a
                href="#template-parameters"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                8. Message Template Parameters
              </a>
              <a
                href="#whatsapp-integration"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                9. Integrating with Meta/WhatsApp API
              </a>
              <a
                href="#sender-api"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                10. Sender API
              </a>
              <a
                href="#listener-api"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                11. Listener API
              </a>
              <a
                href="#glossary"
                className="block p-3 text-[#0894b5] hover:bg-[#ebe8dd] rounded-lg transition-colors duration-200"
              >
                12. Glossary
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div id="introduction" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Introduction</h2>
          <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm mb-8">
            <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
              Organizations need to ensure every employee is equipped with the correct knowledge of the product/service
              they are working on. Traditionally, classroom-based training sessions have been the go-to way to impart
              this knowledge. However, due to factors like:
            </p>
            <ul className="space-y-3 text-[#666666] mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                <span>Fast-changing technology</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#f48d03] rounded-full mt-2 flex-shrink-0"></div>
                <span>Mobile workforce</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                <span>Inability to allocate a whole work day for learning</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#f48d03] rounded-full mt-2 flex-shrink-0"></div>
                <span>Ineffective learning in classroom session</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                <span>Need for continuous engagement</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              organizations are leaning towards micro-learning.
            </p>
          </div>
          <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
            Khan Academy's Basic English And Math (BEAM) is an English and Math learning program for workers in various
            organizations. Since WhatsApp is a ubiquitous mode of communication, organizations can leverage the same
            platform to reach their customers, provide information, and enable learning.
          </p>
        </div>
      </div>

      {/* Communication Coach Bot Section */}
      <div id="communication-coach-bot" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f5f2e8]/30">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Communication Coach Bot</h2>
          <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm mb-8">
            <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
              Communication Coach Bot is a SaaS platform that provides organizations a low-code, no-code approach to
              setup services to share learning information with their end users in the form of videos, images or text.
            </p>
            <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
              Khan Academy engages learners in its BEAM program through the Communication Coach Bot.
            </p>
            <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
              Learners receive an SMS or email with a link to a micro-site to enroll themselves in the course. When
              learners complete the enrollment, learners receive a WhatsApp message from the registered Khan Academy
              WhatsApp number onboarding them into the course. Subsequently, the Communication Coach Bot sends messages
              based on the configured workflow.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              The Communication Coach Bot platform enables a business to tailor the order and type of messages to the
              users. It defines workflows for onboarding and then delivering the lessons for the learners.
            </p>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div id="requirements" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Cloud and Software Requirements</h2>
          <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
            The Communication Coach Bot uses the following:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-[#0894b5] mr-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-[#666666]">
                <li>• AWS EC2 instance</li>
                <li>• AWS RDS MySQL database server</li>
              </ul>
            </div>
            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-[#f48d03] mr-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">WhatsApp Integration</h3>
              </div>
              <ul className="space-y-2 text-[#666666]">
                <li>• Meta Developer application</li>
                <li>• WhatsApp developer account</li>
                <li>• Business WhatsApp Number</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Example Workflow Section */}
      <div id="workflow" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f5f2e8]/30">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Example Workflow</h2>
          <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
            An example workflow that can be configured as follows:
          </p>
          <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm">
            <ul className="space-y-4 text-[#666666]">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                <span>Introductory welcome message</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#f48d03] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-medium">For 4 weeks:</span>
                  <ul className="mt-2 ml-4 space-y-2">
                    <li>○ 2 video lessons per week</li>
                    <li>○ 1 reminder</li>
                    <li>○ 1 quiz for self-assessment</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                <span>1 end-of-level assessment</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#f48d03] rounded-full mt-2 flex-shrink-0"></div>
                <span>Earn badge/certification</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Configuration Section */}
      <div id="configuration" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Configuration of the Bot</h2>
          <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
            This section helps you to setup the Communication Coach Bot server to deliver messages to your end users as
            per the business requirements. Client engagement teams can setup the workflow as per their engagement plan.
          </p>
          <div className="space-y-6">
            {[
              "Setup the organization details by adding the organization on the server. Select Organizations in the side menu and click on the +New Organization button to add a new organization.",
              "Each organization can have multiple cohorts. Setup a cohort for the organization and then proceed to enroll learners to be part of a cohort.",
              "Add a communication workflow as a course. An organization can have multiple courses or workflows under it. Select Courses in the side menu and click on +New Course to add a new course/workflow.",
              "A course/workflow must contain at least 1 level. Click on the 3-dot menu of the course and choose Levels to create a level.",
              "In the Levels screen, click on +New Level to add a new level to the course/workflow.",
              "To add the workflow for a course or level, click on the course in the Courses dashboard. Choose the appropriate level from the dropdown in the top right corner.",
              "Click on the +New Course Content button to add a new step to the workflow. A workflow can consist of one or more steps depending on the engagement plan of the business.",
              "To add a new workflow, click the Create Workflow button.",
            ].map((step, index) => (
              <div key={index} className="bg-[#f5f2e8] p-4 sm:p-6 rounded-xl border border-[#e8e5db] shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0894b5] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#fffcf3] font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-[#666666] leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Parameters Section */}
      <div id="workflow-parameters" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f5f2e8]/30">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Workflow Parameters</h2>
          <div className="overflow-x-auto">
            <div className="bg-[#f5f2e8] rounded-xl border border-[#e8e5db] shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e8e5db]">
                    <th className="text-left p-4 font-semibold text-[#2c2c2c]">Key</th>
                    <th className="text-left p-4 font-semibold text-[#2c2c2c]">Value</th>
                    <th className="text-left p-4 font-semibold text-[#2c2c2c]">Description</th>
                  </tr>
                </thead>
                <tbody className="text-[#666666]">
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Language</td>
                    <td className="p-4">English/Hindi/Kannada</td>
                    <td className="p-4">Choose the language you are sharing the welcome message in.</td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Type</td>
                    <td className="p-4">
                      <div className="space-y-2">
                        <div>
                          <strong>Message:</strong> The output of this type is a message with a fixed message as
                          mentioned in the template.
                        </div>
                        <div>
                          <strong>Question:</strong> The output of this type is a question with embedded video in the
                          header.
                        </div>
                        <div>
                          <strong>Assessment:</strong> The output of this type is a question with embedded video in the
                          header.
                        </div>
                      </div>
                    </td>
                    <td className="p-4">Different message types for various workflow steps.</td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Step</td>
                    <td className="p-4">A number</td>
                    <td className="p-4">
                      Choose a step number that identifies the order in which the item is to be invoked in the workflow.
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Week</td>
                    <td className="p-4">A number</td>
                    <td className="p-4">Number used to track the week for which the messages are being sent.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Message Templates Section */}
      <div id="message-templates" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Message Templates</h2>
          <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
            The Communication Coach Bot supports the following types of message templates for configuring your workflow:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "welcome_message",
              "daily_video_lesson",
              "quiz_reminder_template",
              "weekly_quiz_template",
              "weekly_completion_template",
              "level_assessment",
              "level_completion_success",
            ].map((template, index) => (
              <div key={index} className="bg-[#f5f2e8] p-4 rounded-lg border border-[#e8e5db] shadow-sm">
                <code className="text-[#0894b5] font-mono text-sm">{template}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Integration Section */}
      <div id="whatsapp-integration" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f5f2e8]/30">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Integrating with the Meta/WhatsApp API</h2>
          <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm mb-8">
            <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
              To enable the Communication Coach Bot to send and receive WhatsApp messages, you need to integrate it with
              the Meta or WhatsApp Business developer APIs.
            </p>
            <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
              Meta allows you to create applications on its developer platform to send business WhatsApp messages. These
              messages can be either business-initiated or user-initiated. Separate charges are applicable for different
              message types.
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">The Communication Coach Bot uses the:</p>
            <ul className="mt-4 space-y-2 text-[#666666]">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0894b5] rounded-full mt-2 flex-shrink-0"></div>
                <span>Sender API to initiate the message from the server.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#f48d03] rounded-full mt-2 flex-shrink-0"></div>
                <span>Listener API to capture the response from the learner's WhatsApp through a Meta webhook.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#f5f2e8] p-6 sm:p-8 rounded-xl border border-[#e8e5db] shadow-sm">
            <h3 className="text-xl font-semibold text-[#2c2c2c] mb-4">Before You Start</h3>
            <p className="text-base sm:text-lg text-[#666666] mb-4 leading-relaxed">
              To interact with the APIs, you must first create a Meta Application. You can create one at{" "}
              <a
                href="https://business.facebook.com"
                className="text-[#0894b5] hover:text-[#f48d03] transition-colors duration-200"
              >
                https://business.facebook.com
              </a>
              .
            </p>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              After creating the app, you must generate a WhatsApp account and generate a User Access Token with it.
              This token will allow you to manage permissions and objects you manage on this application. You should
              also configure a callback URL or a webhook.
            </p>
          </div>
        </div>
      </div>

      {/* Sender API Section */}
      <div id="sender-api" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Sender API</h2>
          <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
            The Communication Coach Bot initiates several messages like the onboarding message, lessons, quizzes,
            reminders, level completion, certificate messages from the server to the learner's WhatsApp.
          </p>

          <div className="space-y-6">
            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-4">Request Headers:</h3>
              <div className="bg-[#2c2c2c] p-4 rounded-lg">
                <code className="text-[#fffcf3] text-sm">
                  Authorization: WhatsApp Business API Token,
                  <br />
                  Content-Type: "application/json"
                </code>
              </div>
            </div>

            <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-4">Post Data:</h3>
              <div className="bg-[#2c2c2c] p-4 rounded-lg overflow-x-auto">
                <pre className="text-[#fffcf3] text-sm">
                  {`{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": <recipient phone num>,
  "type": "template",
  "template": {
    "name": "<template>",
    "Language": {"code": "en"},
    "components": [{
      "type": "body",
      "Parameters": [<parameters>]
    }]
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Listener API Section */}
      <div id="listener-api" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f5f2e8]/30">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Listener API</h2>
          <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
            In the case of quizzes and assignments, the learner responds to the questions with options. The Listener API
            listens to the data from the WhatsApp Webhook URL. This URL can be configured in the WhatsApp Developer API
            account.
          </p>

          <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-4">Server Management Commands:</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e8e5db]">
                    <th className="text-left p-3 font-semibold text-[#2c2c2c]">Command</th>
                    <th className="text-left p-3 font-semibold text-[#2c2c2c]">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[#666666]">
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-3">
                      <code className="bg-[#2c2c2c] text-[#fffcf3] px-2 py-1 rounded">pm2 start 0</code>
                    </td>
                    <td className="p-3">Start the server</td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-3">
                      <code className="bg-[#2c2c2c] text-[#fffcf3] px-2 py-1 rounded">pm2 restart</code>
                    </td>
                    <td className="p-3">Restart the server</td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-3">
                      <code className="bg-[#2c2c2c] text-[#fffcf3] px-2 py-1 rounded">pm2 logs</code>
                    </td>
                    <td className="p-3">Check the logs of the app</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <code className="bg-[#2c2c2c] text-[#fffcf3] px-2 py-1 rounded">pm2 monit</code>
                    </td>
                    <td className="p-3">Monitor the app</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Glossary Section */}
      <div id="glossary" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2c2c2c]">Glossary</h2>
          <div className="bg-[#f5f2e8] p-6 rounded-xl border border-[#e8e5db] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e8e5db]">
                    <th className="text-left p-4 font-semibold text-[#2c2c2c]">Term</th>
                    <th className="text-left p-4 font-semibold text-[#2c2c2c]">What it means</th>
                  </tr>
                </thead>
                <tbody className="text-[#666666]">
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Communication Coach Bot</td>
                    <td className="p-4">Micro-learning content delivery platform</td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">BEAM</td>
                    <td className="p-4">Basic English and Math program from Khan Academy</td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Workflow</td>
                    <td className="p-4">
                      A sequence of steps that defines the order of delivery of messages over WhatsApp.
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Workflow Parameters</td>
                    <td className="p-4">Parameters to define the workflow according to the message template used.</td>
                  </tr>
                  <tr className="border-b border-[#e8e5db]">
                    <td className="p-4 font-medium">Message Template</td>
                    <td className="p-4">Templates defined on the WhatsApp Business account</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Message Template Parameters</td>
                    <td className="p-4">Parameters specific to each template</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
