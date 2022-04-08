import './App.css';
import { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );

  return (
    <Routes>
      <Route path="/" element={<NewsPage />}>
        <Route path=":category" element={<NewsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
