import {useEffect} from 'react';
import {isWeb} from "../utils/platform";


type UseScrollToTopProps = {
    automatic?: boolean
}
type UseScrollToTopResponse = {
    scrollTo: (x: number, y: number) => void;
}
export default function useScrollToTop(props?: UseScrollToTopProps): UseScrollToTopResponse {

    useEffect(() => {
        // Scroll to the top of the component when content changes
        if (!isWeb() || !props?.automatic) return;
            console.log("useScrollToTop");
            window.scrollTo(0, 0);
    }, []);

    const scrollTo = (x: number, y: number) => {
        if (!isWeb()) return;
        window.scrollTo(x, y);
    };


    return ({
        scrollTo,
    });
}
