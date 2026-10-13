export default function EmptyState({ title, children, action }) {
  return (
    <div className="rounded-xl border border-dashed border-line bg-surface px-6 py-12 text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">{children}</p>
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  );
}
