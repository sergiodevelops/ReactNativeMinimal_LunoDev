import {useRef} from "react";


type UseRefCountResponse = {
    count: number,
    increase(amount?: number | undefined): void,
    decrease(amount?: number | undefined): void,
}

export default function useRefCount(initValue?: number | undefined): UseRefCountResponse {
    const count = useRef(initValue || 0);

    const increase = (amount?: number | undefined) => count.current += amount || 1;
    const decrease = (amount?: number | undefined) => count.current -= amount || 1;

    return ({
        increase,
        decrease,
        count: count.current,
    })
}
