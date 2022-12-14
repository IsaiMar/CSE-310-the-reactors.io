import React from 'react';
//import Budget from './components/Budget';
//import logo from './logo.svg';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import Categories from './CategoriesPage/Categories';
import {Routes, Route} from "react-router-dom";
import BudgetApp from './BudgetPg/budgetapp';


function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Categories' element={<Categories />}></Route>
          <Route path='/Budget' element = {<BudgetApp/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
