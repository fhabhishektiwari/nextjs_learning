export default function Product({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  console.log("params", params.productId);
  return <h1>Details about Product {params.productId}</h1>;
}
