import { loginApi } from "../../api/login"
import { useMyContext } from "../../context/myContext";
import { useNavigate } from "react-router-dom";

interface Login {
    username: string,
    password: string,
}

const useLogin = () => {
    const {setToken} = useMyContext();
    const navigate = useNavigate();

    const handleSubmitLogin = async(values: Login) => {
        try{
            const response = await loginApi(values.username, values.password);
            if(typeof response === "string"){
                setToken(response);
                navigate("/list");
                window.location.reload();
            }
        }catch(error){
            console.error(error)
            alert(error)
        }
    }

    return { handleSubmitLogin }
}

export default useLogin;