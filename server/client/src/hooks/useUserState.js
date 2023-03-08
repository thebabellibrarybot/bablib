// set localstorage flag to true
import { useContext } from "react";
import { useStateContex } from "../context/UseStateContext";

const useStateHook = () => {

    return useContext(useStateContex)

}
export default useStateHook;