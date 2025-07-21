import React, { useState } from "react"

interface FeedbackWidgetProps {
  articleId: string
}

export const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ articleId }) => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendFeedback = async (helpful: boolean) => {
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articleId, helpful }),
      })
      if (!res.ok) throw new Error("Network response was not ok")
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Failed to submit feedback.")
    }
  }

  if (submitted) {
    return <p className="text-green-600">Thanks for your feedback!</p>
  }

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => sendFeedback(true)}
        aria-label="Helpful"
        className="p-2 rounded hover:bg-gray-100"
      >
        👍
      </button>
      <button
        onClick={() => sendFeedback(false)}
        aria-label="Not Helpful"
        className="p-2 rounded hover:bg-gray-100"
      >
        👎
      </button>
      {error && <p className="text-red-600 ml-4">{error}</p>}
    </div>
  )
}
