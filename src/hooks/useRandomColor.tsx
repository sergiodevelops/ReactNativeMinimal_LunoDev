import {useEffect, useState} from "react";
import {getRandomColor} from "../utils/styles";
import {RandomColorProp} from "../constants/types";


type UseRandomColorResponse = {
    randomColor: RandomColorProp,
    changeRandomColor: ()=> void,
    resetRandomColor: ()=> void,
}

export default function useRandomColor(initValue?: RandomColorProp): UseRandomColorResponse {

    const [randomColor, setRandomColor] = useState<RandomColorProp>(initValue);

    const changeRandomColor = () => setRandomColor(getRandomColor(6));
    const resetRandomColor = () => setRandomColor(initValue);


    useEffect(() => {
        setRandomColor(initValue);
    }, [initValue]);


    return({
        randomColor,
        changeRandomColor,
        resetRandomColor,
    });
}
