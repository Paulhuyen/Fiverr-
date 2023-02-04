import React from 'react';
import './assets/scss/styles.scss'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Categories from './pages/catagories/Categories';
import HomePages from './pages/HomePages/HomePages';
import HomeTemplates from './templates/HomeTemplates';
import PagesTemplates from './templates/PagesTemplates';
import Result from './pages/Result/Result';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplates/>}>
        <Route index element={<HomePages/>}></Route>

      </Route>
      <Route path='' element={<PagesTemplates/>}>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/result' element={<Result/>}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
);

