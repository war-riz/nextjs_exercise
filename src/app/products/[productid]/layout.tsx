export default function ProductDetails({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <h2>Featured Detail</h2>
    </>
  )
}
