import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "logout",
  description: "this is the admin page",
  icons: {
    icon: "/next.svg",
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>This is the nav bar of Admin</div>
      {children}
    </div>
  );
}
