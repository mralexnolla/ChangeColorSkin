import React, { /*Component,*/ useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

//** Keeoing this for reference */

// class BookList extends Component {
//     static contextType = ThemeContext;
    
//     render() { 
//         const {isLightTheme  , light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>How I learnt react</li>
//                     <li style={{background: theme.ui}}>React the ninja way</li>
//                     <li style={{background: theme.ui}}>Ping Jah React</li>
//                 </ul>
//             </div>
//         );
//     }
// }

const BookList = () => {
    const {isLightTheme  , light, dark} = useContext(ThemeContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark;
    return (  
        <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    {
                        books.map((book) => {
                            return(
                                <li style={{background: theme.ui}} key={book.id}>{book.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
    );
}
 
export default BookList;
 
// export default BookList;