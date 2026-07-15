import Link from "next/link";

export default function HighSchoolPage() {
  const grades = [
    { name: "Grade 8", slug: "grade-8", available: true },
    { name: "Grade 9", slug: "grade-9", available: false },
    { name: "Grade 10", slug: "grade-10", available: false },
    { name: "Grade 11", slug: "grade-11", available: false },
    { name: "Grade 12", slug: "grade-12", available: false },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
      <div className="mb-8">
        <Link href="/" className="text-[#003057] hover:underline inline-flex items-center gap-2 text-sm">
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#003057] mt-4">High School</h1>
        <p className="text-slate-500 mt-2">Grades 8–12 • CAPS & IEB aligned</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {grades.map((grade) =>
          grade.available ? (
            <Link key={grade.slug} href={`/${grade.slug}`} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-center transition hover:shadow-xl hover:border-blue-400">
              <div className="text-4xl mb-2">📖</div>
              <h3 className="font-bold text-slate-800">{grade.name}</h3>
              <p className="text-xs text-slate-400 mt-1">View Subjects →</p>
            </Link>
          ) : (
            <div key={grade.slug} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-center opacity-60 cursor-not-allowed">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-bold text-slate-400">{grade.name}</h3>
              <p className="text-xs text-slate-400 mt-1">Coming Soon</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}