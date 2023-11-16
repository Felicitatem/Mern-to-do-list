import { createContext, useState } from "react";//import createContext and useState from React

export const TodoContext = createContext();//created a TodoContext using createContext().

export const TodoProvider = ( props ) => {
    const getTodos = JSON.parse( localStorage.getItem( 'todos' ) );
    const [ todos, setTodos ] = useState( getTodos ? getTodos : [] );

    return (
        <TodoContext.Provider value={[ todos, setTodos ]}>
            { props.children }
        </TodoContext.Provider>
    );
}