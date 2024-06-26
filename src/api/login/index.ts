import { Api } from "../axios-config";

export const loginApi = async (username: string, password: string): Promise<string | Error> => {
    try{
        const { data } = await Api.post('/login', {username, password});
        
        if(data)
            return data.token;
        else
            return new Error('Credenciais inválidas')

    } catch (error) {
        console.error(error)
        return new Error((error as { message: string}).message || 'Login error.')
    }
};