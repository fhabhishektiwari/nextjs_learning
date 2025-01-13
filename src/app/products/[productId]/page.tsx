// import { Metadata } from "next";
// type Props = {
//   params: {
//     productId: string;
//   };
// };

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`iphone ${params.productId}`);
//     }, 1000);
//   });
//   return {
//     title: `Product ${title}`,
//   };
// };
// export default function ProductDetails({ params }: Props) {
//   // console.log("params", params.productId);
//   return <h1>Details about Product {params.productId}</h1>;
// }

import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  // Ensure params is awaited correctly if required
  const { productId } = params;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  const { productId } = params;

  return <h1>Details about Product {productId}</h1>;
}
