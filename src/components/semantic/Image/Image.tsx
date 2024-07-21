import React, {HTMLAttributes, ReactElement} from "react";
import {Image as Img, ImageProps, Pressable, PressableProps} from "react-native";
import MainView__image from "../../../styles/ts/MainView/__image/MainView__image";
import {ImageSourcePropType} from "react-native/Libraries/Image/Image";


type ImgProps = {
    source: ImageSourcePropType;
    onPointerEnter?: () => void,
    onPointerLeave?: () => void,
    onPressIn?: () => void,
    onPressOut?: () => void,
} & HTMLAttributes<HTMLImageElement> & ImageProps & PressableProps;
export default function Image(props: ImgProps): ReactElement {

    const {mainView__image} = MainView__image();


    return (
        /*<Division
            className={'img-container'}
            {...props}
            style={undefined}
            // style={props.style as HTMLAttributes<HTMLDivElement>}
        >*/
        <Pressable
            onPointerEnter={props.onPointerEnter}
            onPointerLeave={props.onPointerLeave}
            onPressIn={props.onPressIn}
            onPressOut={props.onPressOut}
        >
            <Img
                resizeMode={props.resizeMode || 'contain'}
                source={props.source}
                style={[
                    mainView__image,
                    props.style,
                ]}
                role={'img'}
            />
        </Pressable>
        // </Division>
    );
}
