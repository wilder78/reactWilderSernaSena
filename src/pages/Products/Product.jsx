import "./Product.css";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ToolbarHeader from "./ToolbarHeader/ToolbarHeader";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import RecommendedProducts from "./RecommendedProducts/RecommendedProducts";

export const Product = () => {
  return (
    <>
      <main className="container my-5">
        <ToolbarHeader />
        <div className="row g-4">
          <SidebarFilter />
          <RecommendedProducts />
        </div>
      </main>
      <FloatingButton />
    </>
  );
};
