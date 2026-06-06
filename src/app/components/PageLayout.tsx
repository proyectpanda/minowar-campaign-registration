import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-[#EDE7E3] text-[#0d0d0e]"
      style={{ fontFamily: '"Barlow Condensed", system-ui, sans-serif' }}
    >
      <Sidebar />
      <main className="lg:pl-[160px] pt-14 lg:pt-0">{children}</main>
    </div>
  );
}
