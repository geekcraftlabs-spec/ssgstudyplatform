// app/lib/data.ts

import { grade8Maths } from "../data/grade-8-maths";
import { grade8NaturalSciences } from "../data/grade-8-natural-sciences";

// Types
interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface Module {
  grade: number;
  subject: string;
  title: string;
  notes: string;
  quiz: Question[];
}

export interface ModuleWithId extends Module {
  id: string;
}

// Grades list
export const grades: { id: number; name: string }[] = [
  { id: 8, name: "Grade 8" },
  // Add other grades as you build them
];

// Subjects per grade
export const subjects: Record<number, string[]> = {
  8: ["Mathematics", "Natural Sciences"],
  // Add other grades as you build them
};

// Convert existing data to module format
export const modules: Record<string, Module> = {};

// Convert Maths data
Object.values(grade8Maths.terms).forEach((term) => {
  term.weeks.forEach((week) => {
    const moduleId = `maths-grade8-${week.id}`;
    modules[moduleId] = {
      grade: 8,
      subject: "Mathematics",
      title: `${week.label}: ${week.topic}`,
      notes: week.notes,
      quiz: week.questions,
    };
  });
});

// Convert Natural Sciences data
Object.values(grade8NaturalSciences.terms).forEach((term) => {
  term.weeks.forEach((week) => {
    const moduleId = `ns-grade8-${week.id}`;
    modules[moduleId] = {
      grade: 8,
      subject: "Natural Sciences",
      title: `${week.label}: ${week.topic}`,
      notes: week.notes,
      quiz: week.questions,
    };
  });
});

// Helper to get modules for a grade and subject
export function getModulesForSubject(grade: number, subjectSlug: string): ModuleWithId[] {
  const keys = Object.keys(modules).filter((key) => {
    const mod = modules[key];
    return mod.grade === grade && mod.subject.toLowerCase().replace(/\s/g, "-") === subjectSlug;
  });
  return keys.map((key) => ({ id: key, ...modules[key] }));
}