import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../components/useLocalStarage";

interface CartProbs {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartContextType {
  cartData: CartProbs[];
  setCartData: Dispatch<SetStateAction<CartProbs[]>>;
}

const initialValue = {
  cartData: [],
  setCartData: () => {},
};

const CartContext = createContext<CartContextType>(initialValue);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [savedData, setSavedData] = useLocalStorage<CartProbs[]>("cart", []);
  const [cartData, setCartData] = useState<CartProbs[]>(savedData);

  useEffect(() => {
    setSavedData(cartData);
  }, [cartData, setSavedData]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
