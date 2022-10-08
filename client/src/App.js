import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar/Navbar";

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Navbar />}>
      <Route  index element={<Home />} />
       </Route>
    </Routes>
  )
};

export default App;