import { Routes, Route } from "react-router-dom";
import { Contact, Home } from "./pages";
const App = () => {
  return (
    <section className="min-h-screen">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </section>
  );
}
export default App;