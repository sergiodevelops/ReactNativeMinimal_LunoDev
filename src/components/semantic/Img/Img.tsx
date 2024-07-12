import React, {ReactElement} from "react";
import {Image, ImageProps, View} from "react-native";
import MainView__image from "../../../styles/ts/MainView/__image/MainView__image";


type ImgProps = ImageProps;
export default function Img(props: ImgProps): ReactElement {

    const {
        mainView__image_container,
        mainView__image,
    } = MainView__image();


    return (
        <View style={mainView__image_container}>
            <Image
                {...props}
                style={[
                    mainView__image,
                    props.style,
                ]}
                role={'img'}
            />
        </View>
    );
}
