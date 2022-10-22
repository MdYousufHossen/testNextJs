
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];


  return (
    <>
      <h1>Slug: {slug}</h1>
     
    </>
  );
};

export default Product;
