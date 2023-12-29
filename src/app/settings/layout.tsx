import React from "react";
import SettingsSidebar from "@/features/settings/components/SettingSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SettingsSidebar />
      <div className="p-6">{children}</div>
    </div>
  );
}
