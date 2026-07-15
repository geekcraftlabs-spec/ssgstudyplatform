"use client";

import AuthCheck from "../../../../components/AuthCheck";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getModulesForSubject, ModuleWithId } from "../../../../lib/data";

export default function SubjectPage() {
  const { grade, subject } = useParams();
  const gradeNum = parseInt(grade as string);
  const subjectSlug = subject as string;

  const modules: ModuleWithId[] = getModulesForSubject(gradeNum, subjectSlug);

  return (
    <AuthCheck>
      <div className="pt-24 min-h-[70vh] px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href={`/grade/${grade}`} className="text-[#003057] hover:underline mb-6 inline-block">
            ← Back to Grade {grade}
          </Link>
          <h1 className="font-serif text-3xl font-bold text-[#003057] mb-2">
            {subjectSlug.replace(/-/g, " ")}
          </h1>
          <p className="text-gray-500 mb-8">Grade {grade} • Modules</p>

          <div className="grid grid-cols-1 gap-4">
            {modules.map((mod: ModuleWithId) => (
              <Link
                key={mod.id}
                href={`/grade/${grade}/subject/${subjectSlug}/module/${mod.id}`}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 group flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-[#003057]">{mod.title}</h3>
                  <p className="text-sm text-gray-500">Quiz: {mod.quiz.length} questions</p>
                </div>
                <span className="text-[#C41230] font-semibold group-hover:underline">Start →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}