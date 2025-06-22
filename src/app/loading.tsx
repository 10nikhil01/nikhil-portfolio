function loading() {
  return (
    <div className="flex h-[calc(100dvh-64px)] w-full items-center justify-center bg-background">
      <div className="size-10 animate-spin rounded-full border-4 border-foreground/70 border-b-transparent" />
    </div>
  );
}

export default loading;
