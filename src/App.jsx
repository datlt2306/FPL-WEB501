import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Product name="Sản phẩm A" price={200} />
            </main>
            <Footer />
        </div>
    );
};
export default App;
