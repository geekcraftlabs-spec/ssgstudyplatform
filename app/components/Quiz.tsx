"use client";

import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [selected, setSelected] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    const newSelected = [...selected];
    newSelected[questionIndex] = optionIndex;
    setSelected(newSelected);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(new Array(questions.length).fill(null));
    setSubmitted(false);
  };

  const score = submitted
    ? selected.reduce<number>((acc, val, idx) => {
        return acc + (val === questions[idx].correct ? 1 : 0);
      }, 0)
    : 0;

  return (
    <div id="quiz-section" className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 mt-8 scroll-mt-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-slate-900">📝 Practice Questions</h3>
        <span className="text-sm text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
          {questions.length} questions
        </span>
      </div>
      <p className="text-sm text-slate-500 mb-6">
        Answer all {questions.length} questions, then click Submit to check your answers.
      </p>

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          return (
            <div key={q.id} className="border-b border-slate-100 pb-4 last:border-0">
              <p className="font-medium text-slate-800 mb-2 text-sm sm:text-base wrap-break-word">
                {qIdx + 1}. {q.question}
              </p>
              <div className="space-y-1.5">
                {q.options.map((opt, oIdx) => {
                  let className =
                    "w-full text-left px-4 py-3 rounded-lg border border-slate-200 transition text-sm sm:text-base touch-manipulation active:bg-slate-100";

                  if (submitted) {
                    if (oIdx === q.correct) {
                      className += " bg-green-50 border-green-400 text-green-700";
                    } else if (selected[qIdx] === oIdx && oIdx !== q.correct) {
                      className += " bg-red-50 border-red-400 text-red-700";
                    } else {
                      className += " opacity-50";
                    }
                  } else if (selected[qIdx] === oIdx) {
                    className += " bg-blue-50 border-blue-400";
                  } else {
                    className += " hover:bg-slate-50";
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      onTouchStart={(e) => {
                        e.preventDefault();
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        handleSelect(qIdx, oIdx);
                      }}
                      className={className}
                      disabled={submitted}
                      style={{
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                        minHeight: "48px",
                        cursor: submitted ? "default" : "pointer",
                      }}
                    >
                      <span className="font-medium mr-2">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && selected[qIdx] === null && (
                <p className="text-sm text-red-500 mt-1">⚠️ You didn&apos;t answer this question.</p>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          onTouchStart={(e) => e.preventDefault()}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl transition w-full sm:w-auto touch-manipulation"
          style={{
            touchAction: "manipulation",
            minHeight: "52px",
            cursor: "pointer",
          }}
        >
          Submit Answers
        </button>
      ) : (
        <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-lg font-bold text-slate-900">
            Score: {score} / {questions.length}
          </p>
          <p className="text-sm text-slate-500">
            {score === questions.length
              ? "🎉 Perfect! You&apos;re a genius!"
              : score >= 15
              ? "👏 Great job! Keep practicing."
              : score >= 10
              ? "📖 Review the notes and try again."
              : "💪 Keep going! You&apos;ve got this."}
          </p>
          <button
            onClick={handleReset}
            onTouchStart={(e) => e.preventDefault()}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleReset();
            }}
            className="mt-3 px-6 py-3 bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-700 font-medium rounded-lg transition w-full sm:w-auto touch-manipulation"
            style={{
              touchAction: "manipulation",
              minHeight: "48px",
              cursor: "pointer",
            }}
          >
            Reset & Try Again
          </button>
        </div>
      )}
    </div>
  );
}