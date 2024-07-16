import {useEffect} from "react";
import useRefCount from "./useRefCount";


type UseRefCountRendersResponse = {
    count: number,
}

export default function useRefCountRenders(): UseRefCountRendersResponse {
    const {count, increase} = useRefCount();

    useEffect(() => {
        increase();
    }, []);

    return ({count});
}
