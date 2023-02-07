import React, {useState, createContext } from 'react';
import {v1 as uuid} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) =>{
    const [books, setBooks] = useState([
        {title: "How I learnt react", id: 1},
        {title: "React the ninja way", id: 2},
        {title: "Ping Jah React", id: 3},
    ])
    
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider> 
    )
}

export default BookContextProvider