import React, {useEffect, useId, useRef} from "react";
import MainView from "../../../styles/ts/MainView/MainView";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import Button from "../../semantic/Button/Button";
import {NavigationProps} from "../../../app/App";
import useRandomColor from "../../../hooks/useRandomColor";
import Heading from "../../semantic/Heading/Heading";
import FlexResponsive from "../../semantic/FlexResponsive/FlexResponsive";
import {RandomColorProp} from "../../../constants/types";
import useMilisecondsInterval from "../../../hooks/useMilisecondsInterval";
import ScreenWraper from "../ScreenWraper/ScreenWraper";
import useRefCountRenders from "../../../hooks/useRefCountRenders";
import {Animated} from "react-native";
import MainView__animation_fadeOpacity, {
    fadeInOpacity
} from "../../../styles/ts/MainView/__animation/MainView__animation_fadeOpacity";


export function ReferencesScreen(props: NavigationProps) {
    // fadeAnim will be used as the value for "opacity". Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // fadeAnim will be used as the value for "opacity". Initial defaultValue: 1
    const {fadeOpacity} = MainView__animation_fadeOpacity(fadeAnim);

    const {navigation} = props;
    const id = `MySemantic-${useId()}`;
    const {count} = useRefCountRenders();

    const {mainView_container, mainView} = MainView();
    const {toogleStyleTheme, currentIconStyleTheme} = useStyleThemeStore();
    const {
        randomColor,
        resetRandomColor,
        changeRandomColor,
    } = useRandomColor(mainView_container.backgroundColor as RandomColorProp);
    const handleOnPressButtonGoToHomeScreen = () => navigation.navigate("home");
    const {start, puase, reset} = useMilisecondsInterval({
        callbackFn: changeRandomColor,
        resetFn: resetRandomColor,
        interval: 500
    })


    useEffect(() => {
        !!fadeAnim && fadeInOpacity({fadeAnim});
    }, [fadeAnim]);


    return (
        <ScreenWraper style={[fadeOpacity]}>
            <FlexResponsive style={[
                mainView_container,
                mainView,
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: randomColor || mainView_container.backgroundColor,
                },
            ]}>
                <Heading
                    variant={"h1"}
                    children={`Number of Renders: ${String(count)}`}
                />

                <FlexResponsive container>
                    <FlexResponsive item>
                        <Heading variant={'h1'}>🤩 Details Screen 🤝</Heading>
                    </FlexResponsive>
                    <FlexResponsive item>
                        <Heading variant={'h2'} children={`Current random color is: ${randomColor}`}/>
                    </FlexResponsive>

                    <FlexResponsive item md={{colsNumber: 4}}>
                        <Button type={'accept'} onPress={start}>🟢 START</Button>
                    </FlexResponsive>
                    <FlexResponsive item md={{colsNumber: 4}}>
                        <Button type={'default'} onPress={puase}>🟡 PAUSE</Button>
                    </FlexResponsive>
                    <FlexResponsive item md={{colsNumber: 4}}>
                        <Button type={'decline'} onPress={reset}>🛑 RESET</Button>
                    </FlexResponsive>
                </FlexResponsive>

                {/* BUTTON default */}
                <Button
                    id={`${id}-button-default`}
                    type={'accept'}
                    onPress={toogleStyleTheme}
                    children={`Toogle Theme "default" Button ${currentIconStyleTheme}`}
                />
                {/* BUTTON accept */}
                <Button
                    id={`${id}-button-goToDetailsScreen`}
                    type={"default"}
                    onPress={handleOnPressButtonGoToHomeScreen}
                    children={`👈 Go back to "Home" screen`}
                />
            </FlexResponsive>
        </ScreenWraper>
    );
}
