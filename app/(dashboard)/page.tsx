"use client";

import AuthCheck from "../components/AuthCheck";
import Link from "next/link";
import { grades } from "../lib/data";

export default function DashboardPage() {
  return (
    <AuthCheck>
      <div className="pt-24 min-h-[70vh] px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl font-bold text-[#003057] mb-2">
            My Learning Dashboard
          </h1>
          <p className="text-gray-500 mb-8">Select your grade to start learning:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {grades.map((grade: { id: number; name: string }) => (
              <Link
                key={grade.id}
                href={`/grade/${grade.id}`}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 text-center group"
              >
                <div className="text-5xl mb-3">📚</div>
                <h3 className="font-bold text-[#003057] text-lg">{grade.name}</h3>
                <span className="inline-block mt-3 text-[#C41230] font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}