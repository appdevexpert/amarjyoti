"use client"

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="text-xs tracking-[0.2em] text-amber-600 uppercase">{eyebrow}</p> : null}
      <h2 className="mt-2 font-serif text-pretty text-2xl md:text-3xl font-semibold text-stone-800">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm leading-relaxed text-zinc-600">{subtitle}</p> : null}
      <div className={`mt-4 flex items-center ${align === "center" ? "justify-center" : ""} gap-2`}>
        <span className="h-px w-8 bg-amber-600" />
        <span className="h-1 w-1 rounded-full bg-amber-600" />
        <span className="h-px w-8 bg-amber-600" />
      </div>
    </div>
  )
}
