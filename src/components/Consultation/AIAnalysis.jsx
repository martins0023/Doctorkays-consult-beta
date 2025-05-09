import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import TermsPolicy from "../TermsPolicy";
import axios from "axios";

const API_BASE = "https://doctorkays-backend-1.onrender.com";

export default function AIAnalysis() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [rawOutput, setRawOutput] = useState("");
  const [error, setError] = useState("");

  // 1) fetch the saved consultation
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/consultation/${id}`)
      .then(res => setReport(res.data.consultation))
      .catch(err => {
        console.error(err);
        setError("Failed to load consultation record.");
      });
  }, [id]);

  // 2) request AI analysis
  useEffect(() => {
    if (!report?.reportFileUrl) return;

    setLoading(true);
    axios
      .post(`${API_BASE}/api/ai-analysis`, {
        fileUrl: report.reportFileUrl,
        userName: report.name,
        userStory: report.story || report.description,
      })
      .then(res => {
        setAnalysis(res.data.analysis);
        setRawOutput(res.data.raw || "");
      })
      .catch(err => {
        console.error(err);
        setError("AI analysis failed.");
      })
      .finally(() => setLoading(false));
  }, [report]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (loading || !analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">
          Analyzing your report, one moment…
        </p>
      </div>
    );
  }

  const sections = [
    "Overall Purpose and Context",
    "Structure and Format",
    "Content Analysis (Section by Section)",
    "Strengths of the Sample Report",
    "Weaknesses / Areas for Improvement",
    "Key Takeaways & Implications",
    "Conclusion",
    "Next Steps & Recommendations",
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 lg:p-12 space-y-8">
        <h1 className="text-3xl font-bold">AI Analysis Results</h1>

        {sections.map(heading => {
          const body = analysis[heading];
          if (!body) return null;
          return (
            <section key={heading}>
              <h2 className="text-xl font-semibold mb-2">{heading}</h2>
              <p className="text-gray-700 whitespace-pre-line">{body}</p>
            </section>
          );
        })}

        <section>
          <h2 className="text-xl font-semibold mb-2">Full AI Output</h2>
          <pre className="bg-gray-100 p-4 rounded">{rawOutput}</pre>
        </section>
      </main>
      <TermsPolicy />
    </div>
  );
}
