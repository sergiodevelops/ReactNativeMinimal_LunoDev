import useWindowSize from "../../../hooks/useWindowSize";
import {Fragment} from "react";


export default function WindowDimensions() {
    const size = useWindowSize();

    return (
        <Fragment>
            <div>
                {`width ${size.width}px / height ${size.height}px`}
            </div>
        </Fragment>
    );
}
