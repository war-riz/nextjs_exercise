import { redirect } from "next/navigation";

export default async function productreview({
  params,
}: {
  params: Promise<{ productid: string; reviewid: string }>;
}) {
  const { productid, reviewid } = await params;
  if (parseInt(reviewid) > 1000) {
    // notFound()
    redirect('/products')
  }
  return (
    <h2>
      Review {reviewid} for product {productid}
    </h2>
  );
}
