import { createItems } from "../../api/createItems"
import { updateItems } from "../../api/updateItems"
import { useMyContext } from "../../context/myContext"
import useList from "../useList"

interface List{
    title: string
    description: string
    status: string
    creation: string
  }

const useModal = (show: boolean | number) => {
    const {fetchData} = useList();
    const {setModal} = useMyContext();

    const createItem = async(values: List) => {
        if(typeof show === 'boolean'){
            try{
                await createItems(values);
                alert("Item created");
                await fetchData();
                setModal(false);
            }catch(error){
                console.error(error)
            }
        }
    }

    const updateItem = async(values: List) => {
        if(typeof show === 'number'){
            try{
                await updateItems(values, show);
                alert("Item created");
                await fetchData();
                setModal(false);
            }catch(error){
                console.error(error)
            }
        }
    }

    return {createItem, updateItem}
}

export default useModal;