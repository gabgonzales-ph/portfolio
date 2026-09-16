export default function ScrollEdgeFade({
  position,
  height = 100,
  opacity = 1,
}: {
  position: "top" | "bottom";
  height?: number;
  opacity?: number;
}) {
  const isTop = position === "top";
  const fadeDirection = isTop ? "to bottom" : "to top";

  return (
    <div
      aria-hidden
      className={`fixed inset-x-0 ${isTop ? "top-0" : "bottom-0"} z-40 pointer-events-none`}
      style={{
        height,
        opacity,
        background: `linear-gradient(${fadeDirection}, var(--background) 0%, transparent 100%)`,
      }}
    />
  );
}