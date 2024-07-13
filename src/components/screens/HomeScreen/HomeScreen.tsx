import {NavigationProps} from "../../../app/App";
import MySemantic from "../../semantic/MySemantic/MySemantic";


export function HomeScreen(props: NavigationProps) {
    return(
        <MySemantic {...props} />
    )
}
