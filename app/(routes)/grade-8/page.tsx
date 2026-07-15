import SubjectCard from "@/app/components/SubjectCard";

const subjects = [
  { title: "Mathematics", href: "/grade-8/mathematics", status: "available" },
  { title: "Natural Sciences", href: "/grade-8/natural-sciences", status: "available" },
  { title: "English (HL)", href: "/grade-8/english", status: "coming-soon" },
  { title: "Afrikaans (FAL)", href: "/grade-8/afrikaans", status: "coming-soon" },
  { title: "Social Sciences", href: "/grade-8/social-sciences", status: "coming-soon" },
  { title: "EMS", href: "/grade-8/ems", status: "coming-soon" },
  { title: "Technology", href: "/grade-8/technology", status: "coming-soon" },
  { title: "Creative Arts", href: "/grade-8/creative-arts", status: "coming-soon" },
  { title: "Life Orientation", href: "/grade-8/life-orientation", status: "coming-soon" },
];

export default function Grade8Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-24">
      <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">Grade 8</h1>
      <p className="text-slate-500 mb-8">Choose your subject to start learning.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.title}
            title={subject.title}
            href={subject.href}
            status={subject.status as "available" | "coming-soon"}
          />
        ))}
      </div>
    </div>
  );
}