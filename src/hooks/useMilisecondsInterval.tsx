import {useEffect, useRef} from "react";


type UseMilisecondsIntervalResponse = {
    start?: () => void | undefined,
    puase?: () => void | undefined,
    reset?: () => void | undefined,
}

export default function useMilisecondsInterval(props: {
    intervalCallback(): void,
    interval?: number | undefined,
    automatic?: boolean | undefined,
    resetCallback?: () => void,
}): UseMilisecondsIntervalResponse {
    const {intervalCallback, resetCallback, interval, automatic} = props;
    const intervalId = useRef<NodeJS.Timeout | undefined>(undefined);


    const start = (): void => {
        if(intervalId.current !== undefined) return;
        intervalId.current = setInterval(intervalCallback, interval || 1000)
    }

    const puase = (): void => {
        clearInterval(intervalId.current);
        intervalId.current = undefined;
    }

    const reset = (): void => {
        puase();
        if (resetCallback) resetCallback();
    }


    useEffect(() => {
        if (automatic) start();
        // const intervalId: NodeJS.Timeout = setInterval(callbackFn, interval || 1000);
        return () => reset();
    }, []);


    return ({start, puase, reset});
}
