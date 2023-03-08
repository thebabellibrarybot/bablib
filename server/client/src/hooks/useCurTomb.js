import { useContext } from "react";
import { CurTombContext } from "../context/curTombContext";

const useCurTomb = () => {
    return useContext(CurTombContext);
};
export default useCurTomb;