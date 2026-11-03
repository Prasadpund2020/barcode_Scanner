type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
};

export default function Faq({ items }: FaqProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[20px] border border-white/10 bg-[#101218] p-5 text-left"
        >
          <summary className="cursor-pointer list-none font-display text-[1.2rem] font-bold tracking-[-0.04em] text-white marker:hidden">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-[1.05rem] leading-7 text-zinc-300">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
