import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavbarMenu } from "./components/NabvarMenu/NavbarMenu";
import { ProductsPage } from "./pages/Products/ProductsPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { NewCategoryPage } from "./pages/NewCategory/NewCategoryPage";
import { NewProductPage } from "./pages/NewProduct/NewProductPage";

function App() {
  return (
    <BrowserRouter>
      <section className="d-block d-md-none container">
        <NavbarMenu></NavbarMenu>
      </section>
      <section className="container-fluid bg-primary vh-100">
        <section className="row">
          <section className="d-none d-md-block col-2 m-0 p-0">
            <NavbarMenu></NavbarMenu>
          </section>
          <section className="col-12 col-md-10">
            <Routes>
              <Route path="/" element={<ProductsPage />}></Route>
              <Route
                path="añadir-categoria"
                element={<NewCategoryPage />}
              ></Route>
              <Route
                path="añadir-producto"
                element={<NewProductPage />}
              ></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </section>
        </section>
      </section>
    </BrowserRouter>
  );
}

export default App;
