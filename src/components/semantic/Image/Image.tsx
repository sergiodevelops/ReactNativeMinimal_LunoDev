import React, {HTMLAttributes, ReactElement} from "react";
import {Image as Img, ImageProps, ImageStyle, Pressable, PressableProps} from "react-native";
import MainView__image from "../../../styles/ts/MainView/__image/MainView__image";
import Division from "../Division/Division";


type ImgProps = {
    onPointerEnter(): void,
    onPointerLeave(): void,
} & HTMLAttributes<HTMLImageElement> & ImageProps & PressableProps;
export default function Image(props: ImgProps): ReactElement {

    const {mainView__image} = MainView__image();


    return (
        <Division
            className={'img-container'}
            {...props}
            style={props.style as HTMLAttributes<HTMLDivElement>}
        >
            <Pressable {...props as PressableProps}>
                <Img
                    {...props as ImageProps}
                    style={[
                        mainView__image,
                        {pointerEvents: 'none'} as ImageStyle,
                        props.style,
                    ]}
                    role={'img'}
                />
            </Pressable>
        </Division>
    );
}
