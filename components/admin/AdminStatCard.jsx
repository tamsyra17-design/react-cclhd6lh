export default function AdminStatCard({ label, value, delta }) {
  return (
    <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_48px_rgba(19,35,45,0.08)]">
      <p className="text-sm text-[#6d7169]">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-3xl font-semibold text-[#13232d]">{value}</p>
        <span className="rounded-full bg-[#efe5d0] px-3 py-1 text-xs font-semibold text-[#7a5d22]">{delta}</span>
      </div>
    </div>
  );
}
