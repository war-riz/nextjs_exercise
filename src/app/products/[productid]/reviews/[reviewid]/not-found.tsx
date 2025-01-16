"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productid = pathname.split("/")[2];
  const reviewid = pathname.split("/")[4];

  return (
    <div>
      <h2>
        Review {reviewid} not found for product {productid}
      </h2>
      ;
    </div>
  );
}
