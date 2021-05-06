import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
   const { setSearchTerm } = useGlobalContext();
   const refSearchValue = useRef("");

   useEffect(() => {
    refSearchValue.current.focus()
   }, [])

   const searchCocktail = () => {
      setSearchTerm(refSearchValue.current.value);
   };
    const handleSubmit = (e) => {
      e.preventDefault()
    }
   return (
      <section className="section search">
         <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="name">Search your cocktail by NAME</label>
               <input
                  type="text"
                  id="name"
                  ref={refSearchValue}
                  onChange={searchCocktail}
               />
            </div>
         </form>
      </section>
   );
};

export default SearchForm;
