import React, {ReactElement, useEffect, useId, useRef} from "react";
import MainView from "../../../styles/ts/MainView/MainView";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import Button from "../../semantic/Button/Button";
import useRandomColor from "../../../hooks/useRandomColor";
import Heading from "../../semantic/Heading/Heading";
import FlexResponsive from "../../utils/FlexResponsive/FlexResponsive";
import {NavigationProps, RandomColorProp} from "../../../constants/types";
import useMilisecondsInterval from "../../../hooks/useMilisecondsInterval";
import ScreenWrapper from "../ScreenWrapper/ScreenWrapper";
import useRefCountRenders from "../../../hooks/useRefCountRenders";
import {Animated, Text} from "react-native";
import MainView__animation_fadeOpacity, {
    fadeInOpacity
} from "../../../styles/ts/MainView/__animation/MainView__animation_fadeOpacity";
import Paragraph from "../../semantic/Paragraph/Paragraph";
import Navbar from "../../semantic/Navbar/Navbar";
import BreakLine from "../../semantic/BreakLine/BreakLine";
import Separator from "../../semantic/Separator/Separator";


export default function ReferencesScreen(props: NavigationProps) {
    // fadeAnim will be used as the value for "opacity". Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // fadeAnim will be used as the value for "opacity". Initial defaultValue: 1
    const {fadeOpacity} = MainView__animation_fadeOpacity(fadeAnim);

    const {navigation} = props;
    const id = `MySemantic-${useId()}`;
    const {count} = useRefCountRenders();

    const {mainView_container, mainView} = MainView();
    const {toogleStyleTheme, currentStyleTheme, currentIconStyleTheme} = useStyleThemeStore();
    const {
        randomColor,
        resetRandomColor,
        changeRandomColor,
    } = useRandomColor(mainView_container.backgroundColor as RandomColorProp);
    const handleOnPressButtonGoToHomeScreen = () => navigation.navigate("home");
    const {start, puase, reset} = useMilisecondsInterval({
        intervalCallback: changeRandomColor,
        resetCallback: resetRandomColor,
        interval: 200,
    })

    const {
        randomColor: autoColor,
        changeRandomColor: autoChangeColor,
    } = useRandomColor();
    useMilisecondsInterval({
        automatic: true,
        interval: 200,
        intervalCallback: autoChangeColor,
        resetCallback: resetRandomColor,
    });

    useEffect(() => {
        !!fadeAnim && fadeInOpacity({fadeAnim});
    }, [fadeAnim]);


    function getTextWithFlashColor(text: string): ReactElement {
        return <Text style={{color: autoColor}} children={text}/>;
    }

    return (
        <ScreenWrapper
            style={mainView_container}
            animatedStyle={fadeOpacity}
        >
            <FlexResponsive container
                            style={{
                                ...mainView,
                                backgroundColor: randomColor || mainView_container.backgroundColor,
                            }}
            >

                <FlexResponsive item>
                    <Paragraph
                        children={`Number of Renders: ${String(count)}`}
                    />
                    <Heading variant={'h1'}>
                        🤩 DOM manipulation in React 🤝
                    </Heading>
                </FlexResponsive>
                <Separator/>
                <FlexResponsive item>
                    <Heading
                        variant={'h2'}
                        style={{textAlign: "center"}}
                    >
                        {getTextWithFlashColor('{{')}
                        {`Current random color is`}
                        {getTextWithFlashColor('}}')}
                        <BreakLine/>
                        <Text
                            style={{
                                textDecorationLine: 'underline',
                                textDecorationColor: autoColor
                        }}>
                            {randomColor}
                        </Text>
                    </Heading>
                </FlexResponsive>
                <FlexResponsive row>
                    <FlexResponsive item
                                    xs={{part: 10}}
                                    md={{part: 4}}
                    >
                        <Button
                            type={'accept'}
                            onPress={start}
                            children={
                                <Paragraph style={{textAlign: 'center'}}>
                                    {`🟢 START`}
                                </Paragraph>
                            }
                        />
                    </FlexResponsive>
                    <FlexResponsive item
                                    xs={{part: 10}}
                                    md={{part: 4}}
                    >
                        <Button
                            type={'default'}
                            onPress={puase}
                            children={
                                <Paragraph style={{textAlign: 'center'}}>
                                    {`🟡 PAUSE`}
                                </Paragraph>
                            }
                        />
                    </FlexResponsive>
                    <FlexResponsive item
                                    xs={{part: 10}}
                                    md={{part: 4}}
                    >
                        <Button
                            type={'decline'}
                            onPress={reset}
                            children={
                                <Paragraph style={{textAlign: 'center'}}>
                                    {`🛑 RESET`}
                                </Paragraph>
                            }
                        />
                    </FlexResponsive>
                    <FlexResponsive item
                                    xs={{part: 10}}
                                    md={{part: 6}}
                    >
                        {/* BUTTON default */}
                        <Button
                            id={`${id}-button-default`}
                            type={'accept'}
                            onPress={toogleStyleTheme}
                            children={
                                <Paragraph style={{textAlign: 'center'}}>
                                    {`Toogle Theme`}
                                    <BreakLine/>
                                    {`"default" Button`}
                                    <BreakLine/>
                                    {`${currentIconStyleTheme} ${currentStyleTheme.toUpperCase()} ${currentIconStyleTheme}`}
                                </Paragraph>
                            }
                        />
                    </FlexResponsive>
                </FlexResponsive>

                <Navbar id={`${id}-Nav`}>
                    <FlexResponsive column>
                        <FlexResponsive
                            item
                            style={{alignContent: 'center'}} // TODO rivedere qui
                        >
                            <Heading variant={'h5'} children={`Navbar menu projects`}/>
                        </FlexResponsive>

                        <FlexResponsive item
                                        xs={{part: 10}}
                                        md={{part: 6}}
                        >
                            {/* BUTTON accept */}
                            <Button
                                id={`${id}-button-goToDetailsScreen`}
                                type={"default"}
                                onPress={handleOnPressButtonGoToHomeScreen}
                                children={
                                    <Paragraph style={{textAlign: 'center'}}>
                                        {`👈 Go back to 👈`}
                                        <BreakLine/>
                                        {`"Home" screen`}
                                    </Paragraph>
                                }
                            />
                        </FlexResponsive>
                    </FlexResponsive>
                </Navbar>
            </FlexResponsive>
        </ScreenWrapper>
    );
}
