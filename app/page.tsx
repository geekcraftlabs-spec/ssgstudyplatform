import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
      <div className="text-center py-16">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#003057]">Welcome to the Quiz App</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Interactive learning for Sandton School Group students. Choose your school section and start mastering your subjects.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/high-school" className="bg-[#003057] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#002244] transition">
            High School (Gr 8–12)
          </Link>
          <Link href="/primary" className="bg-white border-2 border-[#003057] text-[#003057] px-8 py-4 rounded-full font-semibold hover:bg-[#003057] hover:text-white transition">
            Primary School (Gr 1–7)
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-center">
          <div className="text-3xl mb-2">📚</div>
          <h3 className="font-bold text-slate-800">2 Subjects</h3>
          <p className="text-sm text-slate-500">Mathematics & Natural Sciences</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-center">
          <div className="text-3xl mb-2">📝</div>
          <h3 className="font-bold text-slate-800">20+ Quizzes</h3>
          <p className="text-sm text-slate-500">Interactive practice questions</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 text-center">
          <div className="text-3xl mb-2">🎯</div>
          <h3 className="font-bold text-slate-800">CAPS & IEB</h3>
          <p className="text-sm text-slate-500">Curriculum-aligned content</p>
        </div>
      </div>
    </div>
  );
}