import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MealContext from './context/MealContext';
import Wishlist from './components/meal/Wishlist';
import MealList from './components/meal/MealList';


function App() {
  const {wishlist}=useContext(MealContext);
  return (
    <>
      <Navbar />
      <main>
        {wishlist.length?<Wishlist wishlist={wishlist}/>:""}
        <MealList />
      </main>
    </>
  )
}

export default App
