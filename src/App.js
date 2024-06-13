import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewBook from './components/ViewBook';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBook />} />
        <Route path='/Search' element={<SearchBook />} />
        <Route path='/Delete' element={<DeleteBook />} />
        <Route path='/View' element={<ViewBook />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
