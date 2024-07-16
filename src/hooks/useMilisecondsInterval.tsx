import {useEffect, useRef} from "react";


type UseMilisecondsIntervalResponse = {
    start?: () => void | undefined,
    puase?: () => void | undefined,
    reset?: () => void | undefined,
}

export default function useMilisecondsInterval(props: {
    callbackFn(): void,
    interval?: number | undefined,
    automatic?: boolean | undefined,
    resetFn?: () => void,
}): UseMilisecondsIntervalResponse {
    const {callbackFn, resetFn, interval, automatic} = props;
    const intervalId = useRef<NodeJS.Timeout | undefined>(undefined);


    const start = (): void => {
        if(!(intervalId.current === undefined)) return;
        intervalId.current = setInterval(callbackFn, interval || 1000)
    };
    const puase = (): void => clearInterval(intervalId.current);
    const reset = (): void => {
        puase();
        intervalId.current = undefined;
        if (resetFn) resetFn();
    }


    useEffect(() => {
        if (automatic) start();
        // const intervalId: NodeJS.Timeout = setInterval(callbackFn, interval || 1000);
        return () => reset();
    }, []);


    return ({start, puase, reset});
}
