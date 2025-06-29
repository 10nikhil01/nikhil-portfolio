function DesktopMenusSkeleton() {
  return (
    <div className="flex items-center justify-center max-sm:hidden max-lg:mx-auto gap-8 px-6 text-black dark:text-amber-300 py-2 rounded-full font-medium transition-all duration-300 lg:ml-auto  animate-pulse">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="h-5 w-20 bg-muted rounded" />
      ))}
    </div>
  );
}

export default DesktopMenusSkeleton;
