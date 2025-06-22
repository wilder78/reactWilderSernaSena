import FloatingButton from "../../shared/components/floatingButton/FloatingButton";
import ToolbarHeader from "./ToolbarHeader";
import SidebarFilter from "./SidebarFilter/SidebarFilter";
import RecommendedProducts from "./recommendedProducts/RecommendedProducts";
import Form from "../../shared/components/Form";

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
