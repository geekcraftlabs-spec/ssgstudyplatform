import Link from "next/link";

export default function PrimarySchoolPage() {
  const grades = [
    { name: "Grade 1", slug: "grade-1" },
    { name: "Grade 2", slug: "grade-2" },
    { name: "Grade 3", slug: "grade-3" },
    { name: "Grade 4", slug: "grade-4" },
    { name: "Grade 5", slug: "grade-5" },
    { name: "Grade 6", slug: "grade-6" },
    { name: "Grade 7", slug: "grade-7" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
      <div className="mb-8">
        <Link href="/" className="text-[#003057] hover:underline inline-flex items-center gap-2 text-sm">
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#003057] mt-4">Primary School</h1>
        <p className="text-slate-500 mt-2">Grades 1–7 • Coming Soon</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {grades.map((grade) => (
          <div key={grade.slug} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-center opacity-60 cursor-not-allowed">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="font-bold text-slate-800">{grade.name}</h3>
            <p className="text-xs text-slate-400 mt-1">Coming Soon</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
        <h2 className="font-serif text-xl font-bold text-[#003057] mb-2">🚀 Primary School Coming Soon!</h2>
        <p className="text-slate-600">We&apos;re working hard to bring interactive learning to Grades 1–7. Check back later for updates.</p>
        <Link href="/" className="inline-block mt-4 px-6 py-2.5 bg-[#003057] text-white rounded-full font-semibold hover:bg-[#002244] transition">
          Return to High School
        </Link>
      </div>
    </div>
  );
}