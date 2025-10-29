import Image from "next/image";
// import ProductsPage from "./components/products";
import PaginationProducts from "./components/pagination";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <PaginationProducts></PaginationProducts>
      {/* <ProductsPage></ProductsPage> */}
      <Slider></Slider>
    </>
  );
}
