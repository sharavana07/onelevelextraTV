// src/app/layout.tsx
import "./globals.css";

export const metadata = {
title: "1LE TV - One Level Extra",
  description: "Premium Smart TVs built for tomorrow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
