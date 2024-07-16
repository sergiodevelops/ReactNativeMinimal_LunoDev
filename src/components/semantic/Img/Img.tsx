import React, {ReactElement} from "react";
import {Image, ImageProps, Pressable, PressableProps, View} from "react-native";
import MainView__image from "../../../styles/ts/MainView/__image/MainView__image";


type ImgProps = {
    onPointerEnter(): void,
    onPointerLeave(): void,
} & ImageProps & PressableProps;
export default function Img(props: ImgProps): ReactElement {

    const {
        mainView__image_container,
        mainView__image,
    } = MainView__image();


    return (
        <View style={mainView__image_container}>
            <Pressable {...props as PressableProps}>
                <Image
                    {...props as ImageProps}
                    style={[
                        mainView__image,
                        props.style,
                    ]}
                    role={'img'}
                />
            </Pressable>
        </View>

    );
}
