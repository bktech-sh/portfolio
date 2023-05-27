import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "200", "600"],
});

export const metadata = {
  title: "bktech",
  description: "Your IT Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}
