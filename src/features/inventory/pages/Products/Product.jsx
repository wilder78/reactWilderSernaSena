import "./Product.css";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ToolbarHeader from "./ToolbarHeader/ToolbarHeader";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import RecommendedProducts from "./RecommendedProducts/RecommendedProducts";
import Form from "../../components/Forms/Form";

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
      <div className="b-example-divider" />
      <Form />
      <div className="b-example-divider" />
      <FloatingButton />
    </>
  );
};
