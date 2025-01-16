import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 6000);
  });
  return <h2>My Blog</h2>;
}
