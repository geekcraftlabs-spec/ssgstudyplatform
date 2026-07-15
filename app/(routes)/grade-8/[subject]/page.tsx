"use client";

import { useParams } from "next/navigation";
import { useState, useRef, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Quiz from "@/app/components/Quiz";
import BackToTop from "@/app/components/BackToTop";

// Import subject data
import { grade8Maths } from "@/app/data/grade-8-maths";
import { grade8NaturalSciences } from "@/app/data/grade-8-natural-sciences";

// Types
interface Week {
  id: string;
  label: string;
  topic: string;
  notes: string;
  questions: Array<{
    id: number;
    question: string;
    options: string[];
    correct: number;
  }>;
}

interface SubjectData {
  subject: string;
  grade: number;
  terms: Record<string, { id: string; label: string; weeks: Week[] }>;
}

const subjectMap: Record<string, SubjectData> = {
  mathematics: grade8Maths,
  "natural-sciences": grade8NaturalSciences,
};

export default function SubjectPage() {
  const params = useParams();
  const slug = params.subject as string;
  const subjectData = subjectMap[slug];

  const termIds = useMemo(() => {
    return subjectData ? Object.keys(subjectData.terms) : [];
  }, [subjectData]);

  const [activeTerm, setActiveTerm] = useState<string>(termIds[0] || "");

  const weeks = useMemo(() => {
    if (!subjectData || !activeTerm) return [];
    return subjectData.terms[activeTerm]?.weeks || [];
  }, [subjectData, activeTerm]);

  const [activeWeek, setActiveWeek] = useState<string>(weeks[0]?.id || "");

  const handleTermChange = (termId: string) => {
    setActiveTerm(termId);
    const newWeeks = subjectData?.terms[termId]?.weeks || [];
    if (newWeeks.length > 0) {
      setActiveWeek(newWeeks[0].id);
    }
  };

  const weekData = weeks.find((w) => w.id === activeWeek);
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    if (quizRef.current) {
      quizRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!subjectData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-slate-900">Subject not found</h1>
        <p className="text-slate-500">
          The subject &quot;{slug}&quot; is not available yet.
        </p>
      </div>
    );
  }

  const displayName = subjectData.subject;

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900">
            Grade 8 {displayName}
          </h1>
          <p className="text-sm text-slate-500">CAPS Curriculum</p>
        </div>

        {/* Term Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {termIds.map((termId) => {
            const term = subjectData.terms[termId];
            return (
              <button
                key={termId}
                onClick={() => handleTermChange(termId)}
                onTouchStart={(e) => e.preventDefault()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleTermChange(termId);
                }}
                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition ${
                  activeTerm === termId
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-400"
                }`}
                style={{
                  touchAction: "manipulation",
                  minHeight: "48px",
                  cursor: "pointer",
                }}
              >
                {term.label || termId}
              </button>
            );
          })}
        </div>

        {/* Jump to Quiz */}
        <div className="flex justify-end mb-4">
          <button
            onClick={scrollToQuiz}
            onTouchStart={(e) => e.preventDefault()}
            onTouchEnd={(e) => {
              e.preventDefault();
              scrollToQuiz();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition"
            style={{
              touchAction: "manipulation",
              minHeight: "44px",
              cursor: "pointer",
            }}
          >
            ⬇️ Jump to Quiz
          </button>
        </div>

        {/* Week Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {weeks.map((week) => (
            <button
              key={week.id}
              onClick={() => setActiveWeek(week.id)}
              onTouchStart={(e) => e.preventDefault()}
              onTouchEnd={(e) => {
                e.preventDefault();
                setActiveWeek(week.id);
              }}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                activeWeek === week.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-slate-200 text-slate-600 hover:border-blue-400"
              }`}
              style={{
                touchAction: "manipulation",
                minHeight: "44px",
                cursor: "pointer",
              }}
            >
              {week.label}
            </button>
          ))}
        </div>

        {weekData ? (
          <>
            <div className="mb-8">
              <div className="inline-block bg-blue-50 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm border border-blue-200">
                {weekData.label}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mt-2 wrap-break-word">
                {weekData.topic}
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {weekData.notes}
              </ReactMarkdown>
            </div>

            <div className="relative my-10">
              <hr className="week-divider" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-4 text-slate-400 text-sm font-medium">
                ✏️ Practice Time
              </div>
            </div>

            <div ref={quizRef}>
              <Quiz questions={weekData.questions} />
            </div>
          </>
        ) : (
          <p className="text-slate-400">Content not found.</p>
        )}
      </div>

      <BackToTop />
    </>
  );
}