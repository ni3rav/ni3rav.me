import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { skills, experiences, achievements } from "@/content/about-me";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About",
  description:
    "Get to know Nirav Mehta - fullstack developer, computer science student at Adani University. Learn about my skills, experience, achievements, and journey in web development.",
  url: "/about",
});

export default function AboutMe() {
  return (
    <main>
      <Navbar />

      {/* About Header */}
      <section className="pb-8">
        <h1 className="text-lg font-medium mb-2">about</h1>
        <p className="text-sm text-muted-foreground">
          get to know me and my work
        </p>
      </section>

      <hr className="dashed" />

      {/* Bio */}
      <section className="py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10">
        <div>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              hello! i&apos;m nirav, a fullstack developer and computer science
              junior at Adani University. i specialize in building modern web
              applications using React, Next.js, and TypeScript.
            </p>
            <p>
              having been exposed to computers from a young age, i stumbled upon
              coding which sparked my curiosity. after exploring various
              programming domains, i discovered my true passion in web
              development.
            </p>
            <p className="italic">
              when i&apos;m not coding, you can find me watching cat videos
              because i like cats.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/resume.pdf"
              className="inline-block text-sm dashed-border px-4 py-2 text-foreground hover:bg-surface/50 transition-colors"
            >
              view resume →
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[180px] h-[220px]">
            <div className="dashed-border absolute top-[-8px] right-[-8px] w-full h-full" />
            <Image
              src="/hero.jpeg"
              alt="Nirav profile"
              width={180}
              height={220}
              className="relative z-10 object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <hr className="dashed" />

      {/* Skills */}
      <section className="py-10">
        <h2 className="text-sm font-medium mb-6">skills</h2>
        <div className="space-y-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-xs text-muted-foreground mb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs dashed-border px-2.5 py-1 text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="dashed" />

      {/* Achievements */}
      <section className="py-10" id="achievements">
        <h2 className="text-sm font-medium mb-6">achievements</h2>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="dashed-border p-5 hover:border-blue/30 transition-colors"
              style={{ borderColor: undefined }}
            >
              <h3 className="text-sm font-medium mb-1">{achievement.title}</h3>
              <p className="text-xs text-blue mb-2">
                {achievement.organization}
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                {achievement.year}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="dashed" />

      {/* Experience */}
      <section className="py-10" id="experience">
        <h2 className="text-sm font-medium mb-6">experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="dashed-border-l pl-5 relative">
              <div className="absolute w-1.5 h-1.5 bg-blue rounded-full left-[-4px] top-1.5" />
              <h3 className="text-sm font-medium">{experience.title}</h3>
              <p className="text-xs text-blue mb-1">
                {experience.company} · {experience.period}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="dashed" />

      {/* Education */}
      <section className="py-10">
        <h2 className="text-sm font-medium mb-6">education</h2>
        <div className="dashed-border-l pl-5 relative">
          <div className="absolute w-1.5 h-1.5 bg-blue rounded-full left-[-4px] top-1.5" />
          <h3 className="text-sm font-medium">
            Computer Science and Engineering (AI &amp; ML)
          </h3>
          <p className="text-xs text-blue mb-1">
            Adani University · 2023 – 2027
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">CGPA:</span> 7.73 (As
            of Semester 4)
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="font-medium text-foreground">Coursework:</span>{" "}
            Data Structures, Algorithms, DBMS, Computer Networks, Operating
            Systems
          </p>
        </div>
      </section>
    </main>
  );
}
