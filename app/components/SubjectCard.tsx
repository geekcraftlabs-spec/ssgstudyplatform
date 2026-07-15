// app/components/SubjectCard.tsx
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  status?: "available" | "coming-soon";
}

export default function SubjectCard({ title, href, status = "available" }: Props) {
  if (status === "coming-soon") {
    return (
      <div className="subject-card block opacity-60 cursor-not-allowed">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-400 mt-1">🔒 Coming Soon</p>
      </div>
    );
  }

  return (
    <Link href={href} className="subject-card block">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-400 mt-1">View notes & quizzes →</p>
    </Link>
  );
}