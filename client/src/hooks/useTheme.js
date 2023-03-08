import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const useTheme = () => {
    return useContext(ThemeContext);
};
export default useTheme;