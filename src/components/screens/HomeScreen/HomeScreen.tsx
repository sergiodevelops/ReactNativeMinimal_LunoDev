import {NavigationProps} from "../../../app/App";
import ScreenWrapper from "../ScreenWrapper/ScreenWrapper";
import FlexResponsive from "../../semantic/FlexResponsive/FlexResponsive";
import Heading from "../../semantic/Heading/Heading";
import Main from "../../semantic/Main/Main";
import Paragraph from "../../semantic/Paragraph/Paragraph";
import Strong from "../../semantic/Strong/Strong";
import Anchor from "../../semantic/Anchor/Anchor";
import Img from "../../semantic/Img/Img";
import profileSrc from "../../../../public/images/profile.png";
import Button from "../../semantic/Button/Button";
import Nav from "../../semantic/Nav/Nav";
import React, {useEffect, useId, useRef} from "react";
import MainView from "../../../styles/ts/MainView/MainView";
import {Animated} from "react-native";
import MainView__animation_fadeOpacity, {
    fadeInOpacity
} from "../../../styles/ts/MainView/__animation/MainView__animation_fadeOpacity";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import useRandomColor from "../../../hooks/useRandomColor";
import BreakLine from "../../semantic/BreakLine/BreakLine";


export default function HomeScreen(props: NavigationProps) {
    const {
        mainView_container,
        mainView,
    } = MainView();

    // fadeAnim will be used as the value for "opacity". Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // fadeAnim will be used as the value for "opacity". Initial defaultValue: 1
    const {fadeOpacity} = MainView__animation_fadeOpacity(fadeAnim);

    const handleOnPressButtonGoToSemanticScreen = () => navigation.navigate("semantic");
    const handleOnPressButtonReferenceScreen = () => navigation.navigate("reference");

    const {navigation} = props;
    const id = `MySemantic-${useId()}`;

    const {toogleStyleTheme, currentStyleTheme, currentIconStyleTheme} = useStyleThemeStore();
    const {randomColor, changeRandomColor, resetRandomColor} = useRandomColor();


    useEffect(() => {
        !!fadeAnim && fadeInOpacity({fadeAnim});
        return () => fadeAnim.resetAnimation();
    }, [fadeAnim]);


    return (
        <ScreenWrapper
            style={[mainView_container]}
            animatedStyle={fadeOpacity}
        >
            <FlexResponsive
                container
                style={{
                    ...mainView,
                    backgroundColor: randomColor || mainView_container.backgroundColor
                }}
            >
                {/*MAIN <main/>*/}
                <Main id={`${id}-main`}>
                    {/* Heading h1 */}
                    <Heading
                        id={`${id}-HeadingTitle`}
                        variant={"h1"}
                        children={`React Native Web (Semantic, Responsive, CSR, SSR, Redux)`}
                    />

                    {/*RESPONSIVE <FlexResponsive row/>*/}
                    <FlexResponsive row>
                        {/*RESPONSIVE <FlexResponsive itemCol/>*/}
                        <FlexResponsive item xs={{part: 10}} md={{part: 8}}>
                            <Paragraph>
                                {`Benvenuti nel mio `}
                                <Strong>
                                    <Anchor href={'https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/'}>
                                        {`progetto "React Native Web (Semantic, CSR, SSR, Redux)", `}
                                    </Anchor>
                                </Strong>
                                {`che è "ancora in costruzione". `}
                                <BreakLine/>{`Sono `}<Strong>{`LUNO⚛Dev `}</Strong>
                                <Anchor
                                    target={"_blank"}
                                    href={"https://github.com/sergiodevelops"}>
                                    {`sergiodevelops `}
                                </Anchor>
                                {"e questa visualizzazione mostra i componenti personalizzati da me, che sono multipiattaforma, compatibili sia per Web che per dispositivi mobili (Android e iOS), che saranno migliorati e che possono essere utilizzati con Redux.js per gestire gli stati globali della tua applicazione."}
                            </Paragraph>
                        </FlexResponsive>

                        {/*RESPONSIVE <FlexResponsive itemCol/>*/}
                        <FlexResponsive
                            item xs={{part: 12}} md={{part: 4}}
                            style={{alignContent: 'center'}} // TODO rivedere qui
                        >
                            {/*<Div style={{userSelect: 'none'}}>*/}
                            {/* IMAGE */}
                            <Img
                                onPressIn={changeRandomColor}
                                onPressOut={resetRandomColor}
                                onPointerEnter={changeRandomColor}
                                onPointerLeave={resetRandomColor}
                                id={`${id}-Img`}
                                alt={'this is the image about LUNO Dev, il creatore di quest\'APP native and web con semantica'}
                                source={profileSrc}
                                resizeMode={'contain'}
                                style={{width: 200, height: 150, cursor: 'pointer'}}
                            />
                            {/*</Div>*/}
                        </FlexResponsive>

                        <FlexResponsive column>
                            <FlexResponsive item>
                                {/* ANCHOR <a/> target _blank */}
                                <Anchor
                                    href={`https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/`}
                                    target={"_blank"}
                                    children={`🔗 open "URL web deploy" in a new tab 🚀`}
                                />
                            </FlexResponsive>
                            <FlexResponsive item xs={{part: 10}} md={{part: 6}}>
                                {/* BUTTON default */}
                                <Button
                                    style={{backgroundColor: mainView_container.backgroundColor}}
                                    id={`${id}-button-default`}
                                    type={'default'}
                                    onPress={toogleStyleTheme}
                                    children={`Toogle Theme ${currentIconStyleTheme} (${currentStyleTheme})`}
                                />
                            </FlexResponsive>
                        </FlexResponsive>
                    </FlexResponsive>

                    {/* NAVIGATION Menu */}
                    <Nav id={`${id}-Nav`}>
                        <FlexResponsive column>
                            <FlexResponsive
                                item
                                style={{alignContent: 'center'}} // TODO rivedere qui
                            >
                                <Heading variant={'h5'} children={`Navbar menu projects`}/>
                            </FlexResponsive>
                            <FlexResponsive item xs={{part: 10}} md={{part: 6}}>
                                {/* BUTTON - navigation to "Semantic Elements" screen */}
                                <Button
                                    id={`${id}-BUTTON_SEO-SEMANTIC-ELEMENTS`}
                                    type={"accept"}
                                    onPress={handleOnPressButtonGoToSemanticScreen}
                                    children={`🌟 SEO Semantic elements 🌟`}
                                />
                            </FlexResponsive>
                            <FlexResponsive item xs={{part: 10}} md={{part: 6}}>
                                {/*BUTTON - navigation to "useRef hook" screen*/}
                                <Button
                                    id={`${id}-BUTTON_DOM-REFERENCES`}
                                    type={"accept"}
                                    onPress={handleOnPressButtonReferenceScreen}
                                    children={`📌 DOM manipulation 📌`}
                                />
                            </FlexResponsive>
                            <FlexResponsive item xs={{part: 10}} md={{part: 6}}>
                                {/*BUTTON - navigation to "useRef hook" screen*/}
                                <Button
                                    id={`${id}-BUTTON_API-CONSUMPTION`}
                                    type={"default"}
                                    asLink={{href: 'https://sergiodevelops.github.io/weather-react-app/', target:'_blank'}}
                                    children={`🌐 API weather App consumption 🌐`}
                                />
                            </FlexResponsive>
                        </FlexResponsive>
                    </Nav>
                </Main>
            </FlexResponsive>
        </ScreenWrapper>
    )
}
