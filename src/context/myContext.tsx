import React, { createContext, useState, ReactNode, useContext, useMemo } from 'react';

interface ToDo{
  title: string
  description: string
  status: string
  timestamp: number
}

interface MyContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>,
    toDoList: ToDo[],
    setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>,
  }
  
  const defaultState: MyContextType = {
    token: '',
    setToken: () => {},
    toDoList: [],
    setToDoList: () => {},
  };

export const MyContext = createContext<MyContextType>(defaultState);

interface MyProviderProps {
    children: ReactNode;
  }

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {

    const [token, setToken] = useState<string>('')
    const [toDoList, setToDoList] = useState<ToDo[]>([])

    const memoBrand = useMemo(() => ({token, setToken, toDoList, setToDoList}),[token, toDoList])


    return (
        <MyContext.Provider value={memoBrand}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext)