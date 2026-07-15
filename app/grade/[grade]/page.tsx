"use client";

import AuthCheck from "../../components/AuthCheck";
import Link from "next/link";
import { useParams } from "next/navigation";
import { subjects } from "../../lib/data";

export default function GradePage() {
  const { grade } = useParams();
  const gradeNum = parseInt(grade as string);
  const gradeSubjects = subjects[gradeNum] || [];

  return (
    <AuthCheck>
      <div className="pt-24 min-h-[70vh] px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#003057] hover:underline mb-6 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="font-serif text-3xl font-bold text-[#003057] mb-2">
            Grade {gradeNum}
          </h1>
          <p className="text-gray-500 mb-8">Choose a subject:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gradeSubjects.map((subject: string) => (
              <Link
                key={subject}
                href={`/grade/${gradeNum}/subject/${subject.toLowerCase().replace(/\s/g, "-")}`}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 text-center group"
              >
                <div className="text-4xl mb-3">📖</div>
                <h3 className="font-bold text-[#003057]">{subject}</h3>
                <span className="inline-block mt-3 text-[#C41230] font-semibold group-hover:underline">
                  View Modules →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}