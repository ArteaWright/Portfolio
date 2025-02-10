import "./container.css";

export default function Container({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
  <div className={`container ${className}`}>
    {children}
  </div>
  );
}