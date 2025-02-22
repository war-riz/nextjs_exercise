import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import { Metadata } from "next";
import ErrorRemoveWrapper from "@/components/error_remove";

export const metadata: Metadata = {
  title: {
    default: "Next Tutorial",
    template: "%s | Next Tutorial",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <ErrorRemoveWrapper>{children}</ErrorRemoveWrapper>
        <FooterComponent />
      </body>
    </html>
  );
}
