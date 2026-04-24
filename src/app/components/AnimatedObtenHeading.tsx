import { useEffect, useMemo, useState } from "react";

const defaultTerms = ["Ahorro", "Credito", "Tarjeta debito/credito"];

type AnimatedObtenHeadingProps = {
  className?: string;
  terms?: string[];
};

export function AnimatedObtenHeading({
  className = "",
  terms = defaultTerms,
}: AnimatedObtenHeadingProps) {
  const activeTerms = useMemo(() => (terms.length ? terms : defaultTerms), [terms]);
  const [termIndex, setTermIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTerm = activeTerms[termIndex] ?? "";
    const isComplete = !isDeleting && visibleChars === currentTerm.length;
    const isEmpty = isDeleting && visibleChars === 0;
    const delay = isComplete ? 1400 : isEmpty ? 260 : isDeleting ? 45 : 80;

    const timeoutId = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setTermIndex((currentIndex) => (currentIndex + 1) % activeTerms.length);
        return;
      }

      setVisibleChars((currentLength) => currentLength + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [activeTerms, isDeleting, termIndex, visibleChars]);

  const typedTerm = (activeTerms[termIndex] ?? "").slice(0, visibleChars);

  return (
    <h2
      className={`min-h-[3.25rem] text-center font-display text-3xl font-bold md:text-4xl ${className}`}
    >
      <span className="text-primary">Obten tu</span>{" "}
      <span aria-live="polite" className="inline-flex text-amber-400">
        <span className="border-r-2 border-amber-400 pr-1">
          {typedTerm || "\u00a0"}
        </span>
      </span>
    </h2>
  );
}
