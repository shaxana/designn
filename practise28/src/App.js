import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories"
import About from './pages/About';
import NoPage from "./pages/NoPage";
import Navbar from './components/Navbar';
import AddCategory from './pages/AddCategory';
import CategoryDetail from './pages/CategoryDetail';
function App() {
  return (
   <>
    <BrowserRouter>
   <Navbar/>

      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" >
            <Route index element={<Categories/>}/>
            <Route path="add" element={<AddCategory/>}/>
            <Route path=":id" element={<CategoryDetail/>}/>
          </Route>
          
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
