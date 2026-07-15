"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const socials = [
   { name: "Instagram", img: "instagram.png", url: "https://www.instagram.com/sandtonschoolgroup" },
    { name: "Facebook", img: "facebook.png", url: "https://www.facebook.com/sandtonschoolgroup" },
    { name: "YouTube", img: "youtube.png", url: "https://www.youtube.com/@sandtonschoolgroup" },
    { name: "WhatsApp", img: "whatsapp.png", url: "https://wa.me/27684858415" },
  ];

  return (
    <footer className="bg-[#003057] text-white pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div className="flex items-start gap-4">
            <Image
              src="/images/mainlogo.png"
              alt="Sandton School Group"
              width={56}
              height={56}
              className="object-contain shrink-0"
              style={{ width: "auto", height: "56px" }}
            />
            <div>
              <h3 className="font-serif text-2xl text-white mb-2">Sandton School Group</h3>
              <p className="text-white/60 text-sm max-w-md leading-relaxed">
                Interactive learning platform offering IEB-aligned notes and quizzes for students from Grade 1 through 12.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#C41230] hover:scale-110 transition"
                    aria-label={social.name}
                  >
                    <Image
                      src={`/images/${social.img}`}
                      alt={social.name}
                      width={22}
                      height={22}
                      className="object-contain"
                      style={{ width: "auto", height: "22px" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/high-school" className="hover:text-white transition">High School</Link></li>
              <li><Link href="/primary" className="hover:text-white transition">Primary School</Link></li>
              <li><a href="https://sandtonschoolgroup.vercel.app/about" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">About Us</a></li>
              <li><a href="https://sandtonschoolgroup.vercel.app/contact" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="tel:+27111234567" className="hover:text-white transition">+27 11 123 4567</a></li>
              <li><a href="mailto:info@sandtonschoolgroup.co.za" className="hover:text-white transition">info@sandtonschoolgroup.co.za</a></li>
              <li className="text-white/40">123 Sandton Drive, Sandton, Johannesburg</li>
              <li className="text-white/40 text-xs mt-2">Mon–Fri: 07:30 – 16:00</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Sandton School Group. All rights reserved.</p>
          <p className="mt-1 text-white/20">Powered by <span className="text-white/50">Geekcraft Labs</span></p>
        </div>
      </div>
    </footer>
  );
}