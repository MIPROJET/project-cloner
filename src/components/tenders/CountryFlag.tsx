import { cn } from "@/lib/utils";

interface CountryFlagProps {
  code: string | null | undefined;
  className?: string;
  size?: number; // px, height
  rounded?: boolean;
  title?: string;
}

/**
 * Renders a real country flag image (PNG via flagcdn) — works on every OS,
 * including Windows desktop where flag emojis are not rendered.
 */
export const CountryFlag = ({ code, className, size = 18, rounded = true, title }: CountryFlagProps) => {
  const iso = (code || "").toLowerCase();
  if (!iso || iso.length !== 2) {
    return (
      <span
        className={cn("inline-flex items-center justify-center bg-muted text-muted-foreground", rounded && "rounded-sm", className)}
        style={{ height: size, width: Math.round(size * 1.5), fontSize: size * 0.7 }}
        aria-hidden
      >
        🌍
      </span>
    );
  }
  const w2 = Math.max(20, Math.round(size * 1.6));
  return (
    <img
      src={`https://flagcdn.com/${w2}x${Math.round(w2 * 0.75)}/${iso}.png`}
      srcSet={`https://flagcdn.com/${w2 * 2}x${Math.round(w2 * 0.75) * 2}/${iso}.png 2x`}
      alt={title || iso.toUpperCase()}
      title={title || iso.toUpperCase()}
      loading="lazy"
      className={cn("inline-block object-cover border border-border/40", rounded && "rounded-sm", className)}
      style={{ height: size, width: "auto" }}
    />
  );
};
