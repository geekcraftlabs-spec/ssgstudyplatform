"use client";

import AuthCheck from "../../../../../../components/AuthCheck";
import Quiz from "../../../../../../components/Quiz";
import Link from "next/link";
import { useParams } from "next/navigation";
import { modules } from "../../../../../../lib/data";

export default function ModulePage() {
  const { grade, subject, moduleId } = useParams();
  const moduleData = modules[moduleId as string];

  if (!moduleData) {
    return (
      <div className="pt-24 min-h-[70vh] px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-[#003057]">Module not found</h1>
          <p className="text-gray-500">The module you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <AuthCheck>
      <div className="pt-24 min-h-[70vh] px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`/grade/${grade}/subject/${subject}`}
            className="text-[#003057] hover:underline mb-6 inline-block"
          >
            ← Back to {moduleData.subject}
          </Link>
          <h1 className="font-serif text-3xl font-bold text-[#003057] mb-2">{moduleData.title}</h1>
          <p className="text-gray-500 mb-6">Grade {grade} • {moduleData.subject}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h2 className="font-serif text-xl font-bold text-[#003057] mb-4">📖 Notes</h2>
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: moduleData.notes }}
              />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h2 className="font-serif text-xl font-bold text-[#003057] mb-4">📝 Quiz</h2>
              <Quiz questions={moduleData.quiz} />
            </div>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}