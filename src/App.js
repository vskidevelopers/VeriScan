import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Approval from "./Pages/Approval";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents/dRGJ132UdskjaKJ1" element={<Approval />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
