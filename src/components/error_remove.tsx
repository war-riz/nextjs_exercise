"use client";  // This is a client-side component

import { usePathname } from "next/navigation";
import { ErrorWrapper } from "@/app/error-wrapper";

export default function ErrorRemoveWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isDeepestRoute = pathname === "/";

  return (
    <>
      { !isDeepestRoute ? <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">{children}</div> : <ErrorWrapper>{children}</ErrorWrapper>}
    </>
  );
}
