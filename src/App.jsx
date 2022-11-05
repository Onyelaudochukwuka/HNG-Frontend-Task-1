import { Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import { Contact, Home } from "./pages";
const App = () => {
  return (
    <section className="min-h-screen">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </section>
  );
}
export default App;