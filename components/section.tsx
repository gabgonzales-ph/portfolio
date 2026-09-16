export default function Section({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 md:grid md:grid-cols-[180px_1fr] gap-35 mt-5 ">
      <div className="mb-3 md:mb-0 text-sm font-medium uppercase tracking-wide text-subheading">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}