import React, {useRef, useEffect} from 'react';

function SearchBar({handleSubmit, searchTerm, handleChange, id, children, isFocused = true}) {
  const inputRef = useRef(); 
  useEffect(() => {
    if(isFocused && inputRef.current){
      inputRef.current.focus();
    }
  }, [isFocused]); 
  return (
    <section className='search-bar'>
      <form onSubmit={handleSubmit}>
      <label htmlFor={id}>
      {children}
        <br />
        <input 
        type='text' 
        className='city' 
        placeholder='City'
        onChange={handleChange}
        value={searchTerm}
        ref={inputRef}
        />
        </label>
        <button type='submit'>Search</button>
      </form>
    </section>
  )
}

export default SearchBar;
