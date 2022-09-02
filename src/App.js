import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import ListItem from "./components/ListItem";
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>TodoList App</h1>
      </header>
      <Routes>
        <Route path='/' element={<ListItem />}/>
        <Route path='/Detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
