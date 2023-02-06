import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavbarMenu } from "./components/NabvarMenu/NavbarMenu";
import { ProductsPage } from "./pages/Products/ProductsPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { NewCategoryPage } from "./pages/NewCategory/NewCategoryPage";
import { NewProductPage } from "./pages/NewProduct/NewProductPage";

function App() {
  return (
    <BrowserRouter>
      <section className="container">
        <NavbarMenu></NavbarMenu>
      </section>
      <section className="container-fluid bg-primary p-4 vh-100">
        <Routes>
          <Route path="/" element={<ProductsPage />}></Route>
          <Route path="añadir-categoria" element={<NewCategoryPage />}></Route>
          <Route path="añadir-producto" element={<NewProductPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
