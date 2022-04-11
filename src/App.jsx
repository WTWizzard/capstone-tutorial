import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Nav from "./routes/navigation/nav.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1>Hello from the shop</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
