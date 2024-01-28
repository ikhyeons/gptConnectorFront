import RecoilRootProvider from "@/utils/RecoilRootProvider";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "gptConnector Log viewer",
  description: "gptConnector Log viewer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <RecoilRootProvider>
          <Header />
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  );
}
