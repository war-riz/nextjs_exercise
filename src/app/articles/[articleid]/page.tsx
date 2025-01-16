"use client"
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const articleid = (use(params)).articleid;
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h2>New Article {articleid}</h2>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleid}?lang=en`}>English</Link>
        <Link href={`/articles/${articleid}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleid}?lang=es`}>Spanish</Link>
      </div>
    </div>
  );
}
