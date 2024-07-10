import {useWindowDimensions} from "react-native";


export default function WindowDimensions() {
    const size = useWindowDimensions();
    // const size = useWindowSize();


    return (
        <main>
            <p>
                {/*{`width ${size.width}px / height ${size.height}px`}*/}
                {`width ${size.width}px / height ${size.height}px`}
            </p>
        </main>
    );
}
