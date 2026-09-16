export default function Separator({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-subheading/30 ${className}`} />;
}