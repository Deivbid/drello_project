export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-slate-100">
      <main className="pt-40 pb-20 bg-slate-200">{children}</main>
    </div>
  );
}
