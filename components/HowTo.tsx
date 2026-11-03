type HowToStep = {
  title: string;
  description: string;
};

type HowToProps = {
  steps: HowToStep[];
};

export default function HowTo({ steps }: HowToProps) {
  return (
    <ol className="space-y-5">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex gap-5 rounded-[22px] border border-white/10 bg-[#101218] p-5"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-400 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-950">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="font-display text-[1.5rem] font-bold tracking-[-0.05em] text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-[1.05rem] leading-7 text-zinc-300">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
