import Card from "../components/card";
import { useCart } from "../context/CartContext";
import Products from "../products.json";

const ProductList: React.FC = () => {
  const { cartData: cart, setCartData: setCart } = useCart();

  return (
    <main className="flex flex-wrap gap-5">
      {Products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          img={product.image}
          name={product.title}
          category={product.category}
          description={product.description}
          price={product.price}
          ratting={+product.rating.rate}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </main>
  );
};

export default ProductList;
