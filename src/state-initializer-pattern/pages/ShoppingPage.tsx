import { ProductCard, ProductImg, ProductTitle, ProductButtons } from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
       {products.map((product)=>(
          <ProductCard product={product} className="bg-dark text-white">
              <ProductImg className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
              <ProductTitle title={product.title} className="text-white text-bold"/>
              <ProductButtons className="custom-buttons"/>
          </ProductCard>
          ))}
      </div>
    </div>
  );
};
export default ShoppingPage;
