export function Seo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="30" width="4" height="10" fill="#0ea5e9" rx="1" />
      <rect x="18" y="25" width="4" height="15" fill="#0ea5e9" rx="1" />
      <rect x="26" y="20" width="4" height="20" fill="#0ea5e9" rx="1" />
      <rect x="34" y="15" width="4" height="25" fill="#0ea5e9" rx="1" />

      <path d="M10 26 L22 14 L28 20 L38 10" stroke="#16a34a" stroke-width="3" fill="none" />
    </svg>
  );
}
