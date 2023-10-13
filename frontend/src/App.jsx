import { Routes, Route } from "react-router-dom";
import {
  Home,
  CreateBook,
  EditBook,
  DeleteBook,
  ShowBook,
} from "./pages/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateBook />} />
      <Route path="/edit/:id" element={<EditBook />} />
      <Route path="/detail/:id" element={<ShowBook />} />
      <Route path="/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
