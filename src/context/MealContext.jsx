import { createContext, useState, useEffect } from 'react';
import { getMealBySearch, getMeals } from '../shared/api/meal';

const MealContext = createContext({});

export const DataProvider = ({ children }) => {
  const [meals, setMeals]=useState([]);
  const [query, setQuery]=useState('');
  const [error, setError]=useState({message:''})
  const [loading, setLoading]=useState(false);
  const [isOpen, setIsOpen]=useState(false);
  const [selectedMeal, setSelectedMeal]=useState(null);
  const [wishlist, setWishlist]=useState([]);

  const addToWishlist=(meal)=>{
    if(wishlist.find((item)=>item.idMeal===meal.idMeal)){
      return;
    }
    setWishlist([...wishlist,meal]);
  }

  const removeFromWishlist=(id)=>{
    const newWishlist=wishlist.filter(item=>item.idMeal!==id);
    setWishlist(newWishlist);
  }

  useEffect(() => {
    (async function(){
      try {
        let response;
        setLoading(true);
        if(query){
          response=await getMealBySearch(query);
          setLoading(false);
          const sortedByDesc=response.data.meals;
          setMeals(sortedByDesc);
        }
        else {
          response=await getMeals();
          setLoading(false);
          const sortedByDesc=response.data.meals;
          setMeals(sortedByDesc);
        }
      } catch (error) {
        setLoading(false);
        setError({message:error.message});
      }
      
    }());

    return () => {
      setMeals([]);
      setError({message:''});
      setLoading(false);
    }
  }, [query]);  

  
  return (
    <MealContext.Provider 
      value={{
        meals, 
        setMeals,
        query,
        setQuery,
        error,
        setError,
        loading,
        setLoading,
        isOpen,
        setIsOpen,
        selectedMeal,
        setSelectedMeal,
        wishlist,
        setWishlist,
        addToWishlist,
        removeFromWishlist
      }}>
      {children}
    </MealContext.Provider>
  )
};

export default MealContext;