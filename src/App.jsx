import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

        <Routes>   

          <Route path='/' element={<ItemListContainer />}  / >
          <Route path='/item/:itemId' element={<ItemDetailContainer />} / >  
          <Route path='/category/:categoryId' element={<ItemListContainer />} / >  
          
        </Routes>
  
    </BrowserRouter>
  );
};

export default App;
