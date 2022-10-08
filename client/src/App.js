import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./routes/Navbar/Navbar";
import Signin from "./routes/Signin";
import Signup from './routes/Signup';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  )
};

export default App;