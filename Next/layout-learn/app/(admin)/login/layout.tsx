import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "login",
  description: "this is the login page",
  icons: {
    icon: "/next.svg",
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>This is the nav bar of login</div>
      {children}
    </div>
  );
}