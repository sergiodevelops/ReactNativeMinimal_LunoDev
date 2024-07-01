import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {toogle} from "../redux/features/styleTheme/styleThemeSlice";
import {useEffect, useState} from "react";


export interface UseStyleThemeResponse {
    currentStyleTheme: "light" | "dark",
    toogleStyleTheme: ()=> void,
    currentIconStyleTheme: "🔆" | "🌙",
}


export default function useStyleThemeStore(): UseStyleThemeResponse {

    const currentStyleTheme = useSelector((state: RootState)=>state.styleTheme)
    const dispatch = useDispatch();
    const toogleStyleTheme = () => dispatch(toogle());
    const [icon, setIcon] = useState<"🔆" | "🌙">("🔆");


    useEffect(() => {
        setIcon(currentStyleTheme.value === 'dark' ? "🌙" : "🔆");
    }, [currentStyleTheme]);


    return({
        currentStyleTheme: currentStyleTheme.value,
        toogleStyleTheme,
        currentIconStyleTheme: icon,
    });
}
