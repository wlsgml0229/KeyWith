import "@/src/shared/styles";
import type { Metadata } from "next";
import { ThemeScript } from "@/src/shared/components/ThemeScript";
import React from "react";

export const metadata: Metadata = {
  title: "Keywith",
  description: "성공적인 공모주 청약을 돕는, 키윗",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
