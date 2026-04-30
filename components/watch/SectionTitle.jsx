export default function SectionTitle({ eyebrow, title, body, align = "start" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--night)] sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-7 text-[var(--muted)]">{body}</p> : null}
    </div>
  );
}
