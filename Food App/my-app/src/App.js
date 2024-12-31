import { useState,useEffect } from 'react';
import axios from "axios";
import './App.css';
import Header from "./Components/Navbar";
import Search from "./Components/Search";
import Topnav from "./Components/Topnav";
import Treandfood from "./Components/Treandfood";
import Item_home from "./Components/Item_home";
import Food_diteal from './Components/Food_diteal';
import Shop from './Components/Shop';
import {
  BrowserRouter,
  Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [foodList, setFoodList]=useState([])
  useEffect(()=>{
    let getAllFoodList = async ()=>{
      try {
        const getFoods=await axios.get("http://127.0.0.1:8000/foodlist/")
        console.log(getFoods.data);
        setFoodList(getFoods.data)
      } catch (error) {
        
      }
    }
    getAllFoodList()
  },[])
  
  return (
    <BrowserRouter>
          <Header/>
        <Routes>
          <Route path='/' element={
            <>
              <Search/>
              <Topnav/>
              <Treandfood/>
              <Item_home foodList={foodList}/>
            </>
          } />
          {/* Shop */}
          <Route path='/details/:id' element={
            <>
              <Food_diteal foodList={foodList}/>
            </>
          } />
          <Route path='/shop/' element={
            <>
              <Search/>
              <Shop/>
            </>
          } />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
