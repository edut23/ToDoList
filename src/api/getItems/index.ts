import { Api } from "../axios-config";

interface List {
    itemid: number,
    title: string,
    description: string,
    status: string,
    creation: string
}

export const getItems = async (): Promise<List[] | Error> => {
    try{
        const { data } = await Api.get('/items');
        
        if(data)
            return data;
        else
            return new Error('Credenciais inválidas')

    } catch (error) {
        console.error(error)
        return new Error((error as { message: string}).message || 'Login error.')
    }
};