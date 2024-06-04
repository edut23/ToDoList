import React, { createContext, useState, ReactNode, useContext, useMemo, useEffect } from 'react';

interface List{
  itemid: number
  title: string
  description: string
  status: string
  creation: string
}

interface MyContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>,
    toDoList: List[],
    setToDoList: React.Dispatch<React.SetStateAction<List[]>>,
    modal: boolean | number,
    setModal: React.Dispatch<React.SetStateAction<boolean | number>>
  }
  
  const defaultState: MyContextType = {
    token: '',
    setToken: () => {},
    toDoList: [],
    setToDoList: () => {},
    modal: false,
    setModal: () => {},
  };

export const MyContext = createContext<MyContextType>(defaultState);

interface MyProviderProps {
    children: ReactNode;
  }

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {

    const [token, setToken] = useState<string>(localStorage.getItem("token") ?? '');
    const [toDoList, setToDoList] = useState<List[]>([]);
    const [modal, setModal] = useState<boolean | number>(false);

    useEffect(() => {
      if(token !== ''){
        localStorage.setItem("token", token);
      }
    },[token])

    const memoBrand = useMemo(() => ({token, setToken, toDoList, setToDoList, modal, setModal}),[token, toDoList, modal])


    return (
        <MyContext.Provider value={memoBrand}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext)