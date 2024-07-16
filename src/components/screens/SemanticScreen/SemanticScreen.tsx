import React, {useEffect, useId, useRef} from "react";
import {Animated, Switch} from "react-native";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import Paragraph from "../../semantic/Paragraph/Paragraph";
import Heading from "../../semantic/Heading/Heading";
import Button from "../../semantic/Button/Button";
import Label from "../../semantic/Label/Label";
import Input from "../../semantic/Input/Input";
import Form from "../../semantic/Form/Form";
import Fieldset from "../../semantic/Fieldset/Fieldset";
import Textarea from "../../semantic/Textarea/Textarea";
import Anchor from "../../semantic/Anchor/Anchor";
import Header from "../../semantic/Header/Header";
import Footer from "../../semantic/Footer/Footer";
import Nav from "../../semantic/Nav/Nav";
import Article from "../../semantic/Article/Article";
import Main from "../../semantic/Main/Main";
import Select from "../../semantic/Select/Select";
import Aside from "../../semantic/Aside/Aside";
import Div from "../../semantic/Div/Div";
import FlexResponsive from "../../semantic/FlexResponsive/FlexResponsive";
import MainView__animation_fadeOpacity, {
    fadeInOpacity
} from "../../../styles/ts/MainView/__animation/MainView__animation_fadeOpacity";
import MainView from "../../../styles/ts/MainView/MainView";
import {NavigationProps} from "../../../app/App";
import useRandomColor from "../../../hooks/useRandomColor";
import {ILang, RandomColorProp} from "../../../constants/types";
import useMilisecondsInterval from "../../../hooks/useMilisecondsInterval";
import ScreenWraper from "../ScreenWraper/ScreenWraper";


// example for add semantic for DOM WEB platform output rendering
export default function SemanticScreen(props: NavigationProps) {
    const {mainView_container, mainView} = MainView();
    // fadeAnim will be used as the value for "opacity". Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // fadeAnim will be used as the value for "opacity". Initial defaultValue: 1
    const {fadeOpacity} = MainView__animation_fadeOpacity(fadeAnim);
    const handleOnPressButtonGoToHomeScreen = () => navigation.navigate("home");

    const {navigation} = props;
    const id = `MySemantic-${useId()}`;
    const languages: ILang[] = [
        {lang: "en-EN", name: "ENGLISH", id: 1},
        {lang: "es-AR", name: "ESPAÑOL", id: 2},
        {lang: "it-IT", name: "ITALIANO", id: 3},
    ];

    const {toogleStyleTheme, currentStyleTheme, currentIconStyleTheme} = useStyleThemeStore();
    const {
        randomColor: randColor,
        changeRandomColor: changColor
    } = useRandomColor(mainView_container.backgroundColor as RandomColorProp);
    useMilisecondsInterval({callbackFn: changColor, interval: 3000, automatic: true});


    useEffect(() => {
        !!fadeAnim && fadeInOpacity({fadeAnim});
    }, [fadeAnim]);


    return (
        <ScreenWraper
            style={mainView_container}
            animatedStyle={fadeOpacity}
        >
            <FlexResponsive style={[
                mainView,
            ]}>
                {/*<ProgressBar/>*/}
                {/*MAIN <main/>*/}
                <Main id={`${id}-main`} style={{padding: 10}}>
                    <Paragraph children={`<main/> (WEB) / <View/> (NATIVE)`}/>

                    {/* Heading h1 */}
                    <Heading
                        id={`${id}-HeadingTitle`}
                        variant={"h1"}
                        children={`Semantic and Responsive elements`}
                    />

                    {/*RESPONSIVE <FlexResponsive container/>*/}
                    <FlexResponsive container>
                        <FlexResponsive
                            item
                            xs={{colsNumber: 12}}
                        >
                            {/* ANCHOR <a/> target _self */}
                            <Anchor
                                href={`https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/`}
                                target={"_self"}
                                children={`🔗 open "URL web deploy" in this page ⏳`}
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
                    </FlexResponsive>

                    {/* BUTTON decline */}
                    <Button
                        id={`${id}-button-decline`}
                        type={"decline"}
                        onPress={toogleStyleTheme}
                        children={`Toogle Theme "decline" Button ${currentIconStyleTheme}`}
                    />
                    {/* BUTTON default */}
                    <Button
                        id={`${id}-button-default`}
                        type={'default'}
                        onPress={toogleStyleTheme}
                        children={`Toogle Theme "default" Button ${currentIconStyleTheme}`}
                    />
                    {/* BUTTON accept */}
                    <Button
                        id={`${id}-button-disabled`}
                        disabled
                        type={'accept'}
                        onPress={toogleStyleTheme}
                        children={`disabled <button/> (WEB) & <Pressable/> (NATIVE)`}
                    />
                    {/* NAVIGATION Menu */}
                    <Nav
                        id={`${id}-Nav`}
                        style={{
                            backgroundColor: randColor || mainView_container.backgroundColor
                        }}>
                        <Paragraph children={`<nav/> (WEB) & <View/> (NATIVE)`}/>
                        <Heading variant={'h2'} children={`Current random color is: ${randColor}`}/>
                        <FlexResponsive container>
                            <FlexResponsive item
                                            xs={{colsNumber: 10}}
                                            md={{colsNumber: 3}}
                            >
                                {/* BUTTON accept */}
                                <Button
                                    id={`${id}-button-goToDetailsScreen`}
                                    type={"default"}
                                    onPress={handleOnPressButtonGoToHomeScreen}
                                    children={`👈 Go back to "Home" screen`}
                                />
                            </FlexResponsive>
                            <FlexResponsive item
                                            xs={{colsNumber: 10}}
                                            md={{colsNumber: 3}}
                            >
                                {/* BUTTON accept - navigation to "google.com" screen */}
                                <Button
                                    id={`${id}-button-accept`}
                                    type={"accept"}
                                    asLink={{href: 'https://google.com', target: '_blank'}}
                                    children={`navigation to "google.com" - asLink _blank - test overflow text, test overflow text, test overflow text, test overflow text, test overflow text, test overflow text, test overflow text, test overflow text, `}
                                />
                            </FlexResponsive>
                        </FlexResponsive>
                    </Nav>

                    {/* HEADING H1-H6 <p/> */}
                    {/* Heading h1 */}
                    <Heading
                        id={`${id}-Heading-h1`}
                        variant={"h1"}
                        children={`<h1/> (WEB) & <Text/> (NATIVE)`}
                    />
                    {/* Heading h2 */}
                    <Heading
                        id={`${id}-Heading-h2`}
                        variant={"h2"}
                        children={`<h2/> (WEB) & <Text/> (NATIVE)`}
                    />
                    {/* Heading h3 */}
                    <Heading
                        id={`${id}-Heading-h3`}
                        variant={"h3"}
                        children={`<h3/> (WEB) & <Text/> (NATIVE)`}
                    />
                    {/* Heading h4 */}
                    <Heading
                        id={`${id}-Heading-h4`}
                        variant={"h4"}
                        children={`<h4/> (WEB) & <Text/> (NATIVE)`}
                    />
                    {/* Heading h5 */}
                    <Heading
                        id={`${id}-Heading-h5`}
                        variant={"h5"}
                        children={`<h5/> (WEB) & <Text/> (NATIVE)`}
                    />
                    {/* Heading h6 */}
                    <Heading
                        id={`${id}-Heading-h6`}
                        variant={"h6"}
                        children={`<h6/> (WEB) & <Text/> (NATIVE)`}
                    />
                    {/* PARAGRAPH <p/> */}
                    <Paragraph
                        id={`${id}-Paragraph-p`}
                        children={`<p/> (WEB) & <Text/> (NATIVE)`}
                    />
                    {/* ARTICLE */}
                    <Article id={`${id}-article`} role={"article"}>
                        <Paragraph children={`<article/> (WEB) & <View/> (NATIVE)`}/>
                    </Article>
                    {/* DIV */}
                    <Div id={`${id}-div`}>
                        <Paragraph children={`<div/> (WEB) & <View/> (NATIVE)`}/>
                    </Div>
                    {/* FORM */}
                    <Form>
                        <Paragraph children={`<form/> (WEB) & <View/> (NATIVE)`}/>
                        {/* FIELDSET */}
                        <Fieldset id={`${id}-FieldsetInput`}>
                            {/* LABEL */}
                            <Label
                                id={`${id}-LabelInput`}
                                htmlFor={`${id}-Input`}
                                children={`<label/> input (WEB) & <Text/> (NATIVE) click me e vedrai!`}
                            />
                            {/* INPUT */}
                            <Input
                                id={`${id}-Input`}
                                placeholder={`placeholder <input/> (WEB) & <TextInput/> (NATIVE)`}
                                defaultValue={""}
                                onChangeText={console.log}
                            />
                        </Fieldset>
                        {/* FIELDSET */}
                        <Fieldset id={`${id}-FieldsetTextarea`}>
                            {/* LABEL */}
                            <Label
                                id={`${id}-LabelTextarea`}
                                htmlFor={`${id}-Textarea`}
                                children={`<label/> textarea (WEB) & <Text/> (NATIVE) click me e vedrai!`}
                            />
                            {/* INPUT */}
                            <Textarea
                                id={`${id}-Textarea`}
                                placeholder={`placeholder <textarea/> (WEB) & <TextInput/> (NATIVE)`}
                                defaultValue={"asd1\nasd2\nasd3"}
                                onChangeText={console.log}
                                minOfLines={1}
                                maxOfLines={3}
                            />
                        </Fieldset>
                        {/* FIELDSET */}
                        <Fieldset id={`${id}-FieldsetSelectPicker`}>
                            {/* LABEL */}
                            <Label
                                id={`${id}-LabelPicker`}
                                htmlFor={`${id}-SelectPicker`}
                                children={"Select one language"}
                            />
                            {/* SELECT */}
                            <Select
                                id={`${id}-SelectPicker`}
                                mode={'dialog'}
                                defaultLabel={'name'} // atribute to show (optional - by "name" by default)
                                options={languages}
                                defaultOption={languages[0]}
                                onOptionChange={console.log}
                            />
                        </Fieldset>
                        {/* FIELDSET */}
                        <Fieldset id={`${id}-FieldsetSwitch`}>
                            {/* LABEL */}
                            <Label
                                id={`${id}-LabelSwitch`}
                                htmlFor={`${id}-Switch`}
                                children={`<button/> Switch (WEB) & <Switch/> (NATIVE) click me e vedrai!`}
                            />
                            <FlexResponsive item>
                                {/* SWITCH */}
                                <Switch
                                    id={`${id}-Switch`}
                                    value={currentStyleTheme === 'light'}
                                    onChange={toogleStyleTheme} // for NATIVE
                                    onPointerDown={toogleStyleTheme} // for WEB
                                />
                            </FlexResponsive>
                        </Fieldset>
                    </Form>
                    {/* HEADER */}
                    <Header id={`${id}-Header`}>
                        <Paragraph children={`<header/> (WEB) & <View/> (NATIVE)`}/>
                    </Header>
                    {/* FOOTER */}
                    <Footer id={`${id}-Footer`}>
                        <Paragraph children={`<footer/> (WEB) & <View/> (NATIVE)`}/>
                    </Footer>
                    {/* ASIDE */}
                    <Aside id={`${id}-Aside`}>
                        <Paragraph children={`<aside/> (WEB) & <View/> (NATIVE)`}/>
                    </Aside>


                    {/* CODE <code/> */}

                    {/* CITE <cite/> */}

                    {/* CANVAS <canvas/> */}

                    {/* MAP <map/> */}
                    {/* AREA <area/> */}

                    {/* TABLE <table/>*/}
                    {/* TABLE <caption/> table title */}
                    {/* TABLE <tr/> row */}
                    {/* TABLE <th/> col*/}

                    {/*<FixMarginButtomProblem/>*/}
                </Main>
            </FlexResponsive>
        </ScreenWraper>
    );
}
