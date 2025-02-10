import "./button.css";

export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <button className="contact-button">
    {children}
  </button>
  );
}