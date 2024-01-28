import RecoilRootProvider from "@/utils/RecoilRootProvider";
import type { Metadata } from "next";
import "./globals.css";

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
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
