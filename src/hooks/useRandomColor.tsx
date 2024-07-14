import {useState} from "react";
import {getRandomColor} from "../utils/styles";

type RandomColorProp = `#${string}` | undefined;
export interface UseRandomColorResponse {
    randomColor: RandomColorProp,
    changeRandomColor: ()=> void,
    removeRandomColor: ()=> void,
    resetRandomColor: ()=> void,
}


export default function useRandomColor(initValue?: RandomColorProp): UseRandomColorResponse {

    const [randomColor, setRandomColor] = useState<RandomColorProp>(initValue);

    const changeRandomColor = () => setRandomColor(getRandomColor(6));
    const resetRandomColor = () => setRandomColor(undefined);
    const removeRandomColor = () => setRandomColor(initValue);


    return({
        randomColor,
        changeRandomColor,
        resetRandomColor,
        removeRandomColor,
    });
}
