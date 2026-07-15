"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const highSchoolGrades = [
  { name: "Grade 8", slug: "grade-8", available: true },
  { name: "Grade 9", slug: "grade-9", available: false },
  { name: "Grade 10", slug: "grade-10", available: false },
  { name: "Grade 11", slug: "grade-11", available: false },
  { name: "Grade 12", slug: "grade-12", available: false },
];

const primarySchoolGrades = [
  { name: "Grade 1", slug: "grade-1" },
  { name: "Grade 2", slug: "grade-2" },
  { name: "Grade 3", slug: "grade-3" },
  { name: "Grade 4", slug: "grade-4" },
  { name: "Grade 5", slug: "grade-5" },
  { name: "Grade 6", slug: "grade-6" },
  { name: "Grade 7", slug: "grade-7" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };


  const navigateAndClose = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const isHighSchool = pathname?.startsWith("/grade-") || pathname === "/high-school";
  const isPrimarySchool = pathname?.startsWith("/primary");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200/50 py-1" : "bg-white/80 backdrop-blur-sm border-b border-gray-200/30 py-1"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo – no onClick */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/mainlogo.png"
              alt="Sandton School Group"
              width={40}
              height={40}
              className="object-contain"
              style={{ width: "auto", height: "40px" }}
              priority
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-serif text-lg md:text-2xl lg:text-3xl font-bold text-[#003057] tracking-tight truncate">Sandton School Group</span>
              <span className="text-[8px] md:text-[10px] text-gray-500 font-medium tracking-[0.15em] uppercase whitespace-nowrap">
                {isHighSchool ? "High School" : isPrimarySchool ? "Primary School" : "Quiz App"} • Interactive Learning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation – all Link have no onClick */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <div className="relative group">
              <button className={`transition flex items-center gap-1 ${isHighSchool ? "text-[#003057] border-b-2 border-[#C41230] pb-1" : "text-gray-600 hover:text-[#003057] hover:border-b-2 hover:border-[#C41230] pb-1"}`}>
                High School <span className="text-xs ml-1">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-2xl border border-gray-100 py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {highSchoolGrades.map((grade) =>
                  grade.available ? (
                    <Link key={grade.slug} href={`/${grade.slug}`} className={`block px-6 py-2.5 text-sm hover:bg-gray-50 transition ${pathname === `/${grade.slug}` ? "text-[#C41230] font-semibold" : "text-gray-700"}`}>
                      {grade.name}
                    </Link>
                  ) : (
                    <div key={grade.slug} className="block px-6 py-2.5 text-sm text-gray-400 cursor-not-allowed">
                      {grade.name} <span className="text-[10px] ml-2">(Coming Soon)</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative group">
              <button className={`transition flex items-center gap-1 ${isPrimarySchool ? "text-[#003057] border-b-2 border-[#C41230] pb-1" : "text-gray-600 hover:text-[#003057] hover:border-b-2 hover:border-[#C41230] pb-1"}`}>
                Primary School <span className="text-xs ml-1">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-2xl border border-gray-100 py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-100">Coming Soon</div>
                {primarySchoolGrades.map((grade) => (
                  <div key={grade.slug} className="block px-6 py-2.5 text-sm text-gray-400 cursor-not-allowed">
                    {grade.name} <span className="text-[10px] ml-2">(Coming Soon)</span>
                  </div>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <Link href="/primary" className="block px-6 py-2.5 text-sm text-[#003057] hover:bg-gray-50 transition font-medium">
                    View Primary School →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/" className={`transition ${pathname === "/" ? "text-[#003057] border-b-2 border-[#C41230] pb-1" : "text-gray-600 hover:text-[#003057] hover:border-b-2 hover:border-[#C41230] pb-1"}`}>Home</Link>
          </div>

          {/* CTA Buttons – no onClick on Link */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {isAuthenticated && user && <span className="text-sm text-gray-600 font-medium">👋 {user.studentName || "Student"}</span>}
            <Link href="https://sandtonschoolgroup.vercel.app/contact" className="border border-[#003057] text-[#003057] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#003057] hover:text-white transition whitespace-nowrap">Help</Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer shrink-0 ml-2" aria-label="Toggle menu">
            <span className={`w-5 h-0.5 bg-[#1A2A3A] transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#1A2A3A] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#1A2A3A] transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu – all navigation uses buttons with router.push, NO Link with onClick */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            <button onClick={() => navigateAndClose("/")} className={`py-3 px-2 rounded-lg transition text-left ${pathname === "/" ? "bg-[#003057] text-white" : "hover:bg-gray-50 text-gray-700"}`}>
              Home
            </button>

            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileDropdown("High School")} className="w-full flex items-center justify-between py-3 px-2 font-semibold text-[#003057] text-left">
                High School <span className={`transition-transform ${mobileDropdownOpen === "High School" ? "rotate-180" : ""}`}>▾</span>
              </button>
              {mobileDropdownOpen === "High School" && (
                <div className="pl-4 pb-2 flex flex-col gap-1">
                  {highSchoolGrades.map((grade) =>
                    grade.available ? (
                      <button key={grade.slug} onClick={() => navigateAndClose(`/${grade.slug}`)} className={`py-2.5 px-4 rounded-lg transition text-left ${pathname === `/${grade.slug}` ? "bg-[#003057] text-white" : "hover:bg-gray-50 text-gray-700"}`}>
                        {grade.name}
                      </button>
                    ) : (
                      <div key={grade.slug} className="py-2.5 px-4 rounded-lg text-gray-400 cursor-not-allowed">
                        {grade.name} <span className="text-[10px] ml-2">(Coming Soon)</span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileDropdown("Primary School")} className="w-full flex items-center justify-between py-3 px-2 font-semibold text-[#003057] text-left">
                Primary School <span className={`transition-transform ${mobileDropdownOpen === "Primary School" ? "rotate-180" : ""}`}>▾</span>
              </button>
              {mobileDropdownOpen === "Primary School" && (
                <div className="pl-4 pb-2 flex flex-col gap-1">
                  {primarySchoolGrades.map((grade) => (
                    <div key={grade.slug} className="py-2.5 px-4 rounded-lg text-gray-400 cursor-not-allowed">
                      {grade.name} <span className="text-[10px] ml-2">(Coming Soon)</span>
                    </div>
                  ))}
                  <button onClick={() => navigateAndClose("/primary")} className="py-2.5 px-4 rounded-lg text-[#003057] font-medium hover:bg-gray-50 transition text-left">
                    View Primary School →
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
              {isAuthenticated && user && <div className="text-center text-sm text-gray-500 py-2">👋 Logged in as {user.studentName}</div>}
              <Link href="https://sandtonschoolgroup.vercel.app/contact" className="border border-[#003057] text-[#003057] text-center py-3 rounded-full font-semibold">Help</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}