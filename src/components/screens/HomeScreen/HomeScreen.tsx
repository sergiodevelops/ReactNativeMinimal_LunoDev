import {NavigationProps} from "../../../app/App";
import ScreenWraper from "../ScreenWraper/ScreenWraper";
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
import MainView__fieldset from "../../../styles/ts/MainView/__fieldset/MainView__fieldset";


export function HomeScreen(props: NavigationProps) {
    const {mainView_container, mainView} = MainView();
    const {
        mainView__fieldset,
    } = MainView__fieldset();

    // fadeAnim will be used as the value for "opacity". Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // fadeAnim will be used as the value for "opacity". Initial defaultValue: 1
    const {fadeOpacity} = MainView__animation_fadeOpacity(fadeAnim);

    const handleOnPressButtonGoToSemanticScreen = () => navigation.navigate("semantic");
    const handleOnPressButtonReferenceScreen = () => navigation.navigate("reference");

    const {navigation} = props;
    const id = `MySemantic-${useId()}`;

    const {toogleStyleTheme, currentIconStyleTheme} = useStyleThemeStore();
    const {randomColor, changeRandomColor, resetRandomColor} = useRandomColor();
    /*const {
        randomColor: randColor,
        changeRandomColor: changColor
    } = useRandomColor(mainView_container.backgroundColor as RandomColorProp);*/
    // useMilisecondsInterval({callbackFn: changColor, interval: 3000, automatic: true});


    useEffect(() => {
        !!fadeAnim && fadeInOpacity({fadeAnim});
        return () => fadeAnim.resetAnimation();
    }, [fadeAnim]);


    return (
        <ScreenWraper
            style={mainView_container}
            animatedStyle={fadeOpacity}
        >
            <FlexResponsive style={[
                mainView,
                {backgroundColor: randomColor || mainView_container.backgroundColor},
            ]}>
                {/*<ProgressBar/>*/}
                {/*MAIN <main/>*/}
                <Main id={`${id}-main`} style={{padding: 10}}>
                    {/* Heading h1 */}
                    <Heading
                        id={`${id}-HeadingTitle`}
                        variant={"h1"}
                        children={`React Native Web (Semantic, Responsive, CSR, SSR, Redux)`}
                    />

                    {/*RESPONSIVE <FlexResponsive container/>*/}
                    <FlexResponsive container>
                        {/*RESPONSIVE <FlexResponsive item/>*/}
                        <FlexResponsive
                            style={{flexDirection: 'column'}}
                            item
                            xs={{colsNumber: 12}}
                            md={{colsNumber: 9}}
                        >
                            <Paragraph>
                                Benvenuti nel mio <Strong><Anchor
                                href={'https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/'}>progetto
                                "React Native
                                Web (Semantic, CSR, SSR, Redux)"</Anchor></Strong>,
                                che è "ancora in costruzione".
                            </Paragraph>
                            <Paragraph>
                                Sono <Strong>LUNO⚛Dev</Strong> (Sergio Ariel Juarez)
                                e questa visualizzazione mostra i
                                componenti personalizzati da me, che sono multipiattaforma,
                                compatibili sia per Web che per dispositivi mobili
                                (Android e iOS), che saranno migliorati e che possono
                                essere utilizzati con Redux.js per gestire gli stati
                                globali della tua applicazione.
                            </Paragraph>
                        </FlexResponsive>

                        {/*RESPONSIVE <FlexResponsive item/>*/}
                        <FlexResponsive
                            item
                            xs={{colsNumber: 12}}
                            md={{colsNumber: 3}}
                        >
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
                        </FlexResponsive>
                        <FlexResponsive
                            item
                            xs={{colsNumber: 12}}
                        >
                            {/* ANCHOR <a/> target _blank */}
                            <Anchor
                                href={`https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/`}
                                target={"_blank"}
                                children={`🔗 open "URL web deploy" in a new tab 🚀`}
                            />
                        </FlexResponsive>
                        <FlexResponsive item
                                        xs={{colsNumber: 10}}
                                        md={{colsNumber: 6}}
                        >
                            {/* BUTTON default */}
                            <Button
                                id={`${id}-button-default`}
                                type={'default'}
                                onPress={toogleStyleTheme}
                                children={`Toogle Theme "default" Button ${currentIconStyleTheme}`}
                            />
                        </FlexResponsive>

                    </FlexResponsive>


                    {/* NAVIGATION Menu */}
                    <Nav
                        id={`${id}-Nav`}
                        // style={{
                        //     backgroundColor: randColor || mainView_container.backgroundColor
                        // }}
                    >
                        {/*<Heading variant={'h5'} children={`Current random color is: ${randColor}`}/>*/}
                        <FlexResponsive
                            container
                            style={mainView__fieldset}
                        >
                            <Heading variant={'h5'} children={`Navbar menu projects`}/>
                            <FlexResponsive item
                                            xs={{colsNumber: 10}}
                                            md={{colsNumber: 6}}
                            >
                                {/* BUTTON - navigation to "Semantic Elements" screen */}
                                <Button
                                    id={`${id}-BUTTON-SEMANTIC-ELEMENTS`}
                                    type={"accept"}
                                    onPress={handleOnPressButtonGoToSemanticScreen}
                                    children={`🌟 Semantic elements 🌟`}
                                />
                            </FlexResponsive>
                            <FlexResponsive item
                                            xs={{colsNumber: 10}}
                                            md={{colsNumber: 6}}
                            >
                                 {/*BUTTON - navigation to "useRef hook" screen*/}
                                <Button
                                    id={`${id}-BUTTON-REFERENCES`}
                                    type={"accept"}
                                    onPress={handleOnPressButtonReferenceScreen}
                                    children={`📌 DOM manipulation 📌`}
                                />
                            </FlexResponsive>
                        </FlexResponsive>
                    </Nav>

                    {/*<FixMarginButtomProblem/>*/}
                </Main>
            </FlexResponsive>
        </ScreenWraper>
    )
}
