import { registerApi } from "../../api/register/index";

interface Login {
    username: string,
    password: string,
}

const useRegister = () => {
    const handleSubmitRegister = async(values: Login) => {
        try{
            console.log("foi")
            const response = await registerApi(values.username, values.password);
            if(typeof response !== "object")
                alert("User created");
            else
                alert("User already exist")
        }catch(error){
            console.error(error)
            alert(error)
        }
    }

    return { handleSubmitRegister }
}

export default useRegister;