import { ProductCard } from "../components/ProductCard";
import { ProductImg } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { ProductButtons } from '../components/ProductButtons';
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Delicious Coffe",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <ProductCard product={product} className="bg-dark text-white">
          <ProductImg className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
          <ProductTitle title={product.title} className="text-white text-bold"/>
          <ProductButtons className="custom-buttons"/>
      </ProductCard>
      </div>
    </div>
  );
};
export default ShoppingPage;
