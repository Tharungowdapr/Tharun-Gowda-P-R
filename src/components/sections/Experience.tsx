"use client";
import { motion, useReducedMotion } from "framer-motion";
import { experience, education, certifications, achievements } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Award, Target, Users, ExternalLink } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-micro text-[hsl(var(--brand))] mb-2">{children}</p>
  );
}

export function Experience() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section id="experience" className="py-24 border-t border-[hsl(var(--border))]" aria-labelledby="exp-heading">
      <div className="section-container">
        {/* Leadership & Activities */}
        <div className="mb-20">
          <SectionLabel>Leadership</SectionLabel>
          <h2 id="exp-heading" className="text-title text-[hsl(var(--foreground))] mb-10">
            Experience
          </h2>

          <div className="relative pl-6">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[hsl(var(--border))]" aria-hidden />

            <div className="space-y-10">
              {experience.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-[hsl(var(--brand))] ring-4 ring-[hsl(var(--background))]"
                    aria-hidden
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-heading text-[hsl(var(--foreground))]">{item.role}</h3>
                      <p className="text-small text-[hsl(var(--foreground-muted))]">{item.org}</p>
                    </div>
                    <span className="text-small font-mono text-[hsl(var(--foreground-subtle))] flex-shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-small text-[hsl(var(--foreground-muted))] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement */}
        <div className="mb-20">
          <SectionLabel>Achievement</SectionLabel>
          <h2 className="text-title text-[hsl(var(--foreground))] mb-10">Notable</h2>

          {achievements.map((a, i) => (
            <motion.div
              key={i}
              {...fadeUp(0)}
              className="flex items-start gap-4 p-5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[hsl(32_95%_52%/0.12)] border border-[hsl(32_95%_52%/0.2)] flex-shrink-0">
                <Target className="w-5 h-5 text-[hsl(var(--brand))]" aria-hidden />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-heading text-[hsl(var(--foreground))]">{a.title}</h3>
                  <Badge variant="brand">{a.subtitle}</Badge>
                </div>
                <p className="text-small text-[hsl(var(--foreground-muted))] leading-relaxed">
                  {a.description}
                </p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-micro text-[hsl(var(--brand))] hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" aria-hidden />
                    View credentials
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const reduced = useReducedMotion();

  return (
    <section id="education" className="py-24 border-t border-[hsl(var(--border))]" aria-labelledby="edu-heading">
      <div className="section-container">
        <div className="mb-12">
          <p className="text-micro text-[hsl(var(--brand))] mb-2">Background</p>
          <h2 id="edu-heading" className="text-title text-[hsl(var(--foreground))]">
            Education & Certifications
          </h2>
        </div>

        {/* Education */}
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12 p-6 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))]"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[hsl(32_95%_52%/0.12)] border border-[hsl(32_95%_52%/0.2)] flex-shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5 text-[hsl(var(--brand))]" aria-hidden />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-heading text-[hsl(var(--foreground))]">{edu.degree}</h3>
                    <p className="text-small text-[hsl(var(--foreground-muted))] mt-0.5">{edu.institution}</p>
                    <p className="text-small text-[hsl(var(--foreground-subtle))]">{edu.affiliation}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-small text-[hsl(var(--foreground-subtle))]">{edu.period}</span>
                    {edu.gpa ? (
                      <>
                        <div className="font-mono text-[1rem] font-semibold text-[hsl(var(--foreground))] mt-1">
                          {edu.gpa}
                        </div>
                        <span className="text-micro text-[hsl(var(--foreground-subtle))]">GPA</span>
                      </>
                    ) : edu.examScores ? (
                      <div className="mt-1 space-y-0.5">
                        {edu.examScores.map((s) => (
                          <div key={s.name} className="text-micro text-[hsl(var(--foreground-muted))]">
                            {s.name}: <span className="font-semibold text-[hsl(var(--foreground))]">{s.rank}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <p className="text-micro text-[hsl(var(--foreground-subtle))] mb-2">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((c) => (
                      <Badge key={c} variant="muted">{c}</Badge>
                    ))}
                  </div>
                </div>

                {edu.note && (
                  <p className="text-micro text-[hsl(var(--foreground-subtle))] mt-2 italic">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications */}
        <div>
          <p className="text-micro text-[hsl(var(--foreground-subtle))] mb-4">Certifications</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-center gap-3 p-4 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))]"
              >
                <Award className="w-4 h-4 text-[hsl(var(--brand))] flex-shrink-0" aria-hidden />
                <div>
                  <p className="text-small font-medium text-[hsl(var(--foreground))]">{cert.name}</p>
                  <p className="text-micro text-[hsl(var(--foreground-subtle))]">{cert.issuer} · {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
