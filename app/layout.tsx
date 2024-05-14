import "./globals.css";

export const metadata = {
  title: "evolveRWA",
  description: "Let's evolve together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
