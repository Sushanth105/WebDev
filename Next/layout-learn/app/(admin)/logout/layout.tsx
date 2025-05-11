import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "logout",
  description: "this is the logout page",
  icons: {
    icon: "/next.svg",
  },
};

export default function LogoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>This is the nav bar of logout</div>
      {children}
    </div>
  );
}