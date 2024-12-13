import Header from "./components/header";
import "./App.css";
import AllRoutes from "./routes/router";
import Footer from "./components/footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <main>
      <CartProvider>
        <Header />
        <AllRoutes />
      </CartProvider>
      <Footer />
    </main>
  );
}

export default App;
