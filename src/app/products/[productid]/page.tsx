import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productid;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function productdetails({ params }: Props) {
  const ProductId = (await params).productid;
  return <h2>Detail abouts product {ProductId}</h2>;
}
