type FeatureCardProps = {
  title: string;
  description: string;
  variant?: "accent" | "dark";
};

export default function FeatureCard({
  title,
  description,
  variant = "dark",
}: FeatureCardProps) {
  const isAccent = variant === "accent";

  return (
    <article
      className={[
        "rounded-[24px] p-8 min-h-[240px] border",
        isAccent
          ? "border-lime-300 bg-lime-400 text-zinc-950"
          : "border-white/10 bg-[#16181E] text-white",
      ].join(" ")}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-current/30 bg-current/5">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
          {title.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <h3 className="font-display text-[30px] leading-none tracking-[-0.05em]">
        {title}
      </h3>
      <p
        className={[
          "mt-5 max-w-[28ch] text-base leading-7",
          isAccent ? "text-zinc-900" : "text-zinc-300",
        ].join(" ")}
      >
        {description}
      </p>
    </article>
  );
}
