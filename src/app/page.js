import Image from "next/image";
// import ProductsPage from "./components/products";
import PaginationProducts from "./components/pagination";

export default function Home() {
  return (
    <>
      <PaginationProducts></PaginationProducts>
      {/* <ProductsPage></ProductsPage> */}
    </>
  );
}
