interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: Props) {
  return (
    <div className="mb-10">
      <p className="rule-label mb-3 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-signal" />
        {label}
      </p>
      <h2 className="text-title text-bone">{title}</h2>
      {description && <p className="prose-body mt-4">{description}</p>}
    </div>
  );
}
