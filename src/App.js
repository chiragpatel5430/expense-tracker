import { BrowserRouter,Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import AddExpense from "./pages/add-expense/addexpense";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/add-expense" element={<AddExpense/>}></Route>
        </Routes> 
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
