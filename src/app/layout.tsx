import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Training and Development | Tobams Group",
  description:
    "Tobams Group's comprehensive range of programs and resources designed to enhance skills, broaden knowledge, and propel careers forward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;1,600&family=Nunito+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
