interface Props {
  children: string;
  tone?: "default" | "accent";
}

export default function Tag({ children, tone = "default" }: Props) {
  const styles =
    tone === "accent"
      ? "border-signal/40 bg-signal/10 text-signal"
      : "border-edge bg-raised/60 text-ash";

  return (
    <span
      className={`inline-block border px-2 py-0.5 font-mono text-[0.7rem] leading-relaxed ${styles}`}
    >
      {children}
    </span>
  );
}
