function DesktopMenusSkeleton() {
  return (
    <div className="flex animate-pulse items-center justify-center gap-8 rounded-full px-6 py-2 font-medium text-black transition-all duration-300 dark:text-amber-300 max-lg:mx-auto max-sm:hidden  lg:ml-auto">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="h-5 w-20 rounded bg-muted" />
      ))}
    </div>
  );
}

export default DesktopMenusSkeleton;
