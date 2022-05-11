import { ProductCard, ProductImg, ProductTitle, ProductButtons} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { Product } from "../interfaces/interfaces";

const ShoppingPage = () => {
  const onProductCountChange = ({ count, product }: {count: number; product: Product;}) => {
    // console.log("onProductCountChange", count, product);
  };
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            key={product.id}
            initialValues={{ count: 4, maxCount: 10}}>

                {({ reset, increaseBy, isMaxCountReached }) => (
                  <>
                    <ProductImg
                      className="custom-image"
                      style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
                    <ProductTitle
                      title={product.title}
                      className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons" />
                    <div style={{display: "flex" ,flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                    {!isMaxCountReached && (
                      <button onClick={()=> increaseBy(2)} 
                        className="custom-image"
                        style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}> + 2 </button>
              )}
                      <button onClick={()=> increaseBy(-2)} 
                        className="custom-image"
                        style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}> - 2 </button>
                      <button onClick={reset} 
                        className="custom-image"
                        style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}>RESET</button>
                    </div>
                  </>
                )}            

          </ProductCard>
        ))}
      </div>
    </div>
  );
};
export default ShoppingPage;
