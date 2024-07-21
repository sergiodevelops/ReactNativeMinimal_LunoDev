import React, {useEffect, useId, useRef, useState} from "react";
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
import Navbar from "../../semantic/Navbar/Navbar";
import Article from "../../semantic/Article/Article";
import Main from "../../semantic/Main/Main";
import Select from "../../semantic/Select/Select";
import Aside from "../../semantic/Aside/Aside";
import Division from "../../semantic/Division/Division";
import FlexResponsive from "../../FlexResponsive/FlexResponsive";
import MainView__animation_fadeOpacity, {
    fadeInOpacity
} from "../../../styles/ts/MainView/__animation/MainView__animation_fadeOpacity";
import MainView from "../../../styles/ts/MainView/MainView";
import {IOptionExample, NavigationProps} from "../../../constants/types";
import ScreenWrapper from "../ScreenWrapper/ScreenWrapper";


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
    const objectsExample: IOptionExample[] = [
        {stringValue: "stringValueOption1", name: "EXAMPLE NAME OPTION 1", id: 1},
        {stringValue: "stringValueOption2", name: "EXAMPLE NAME OPTION 2", id: 2},
        {stringValue: "stringValueOption3", name: "EXAMPLE NAME OPTION 3", id: 3},
    ];

    const {toogleStyleTheme, currentStyleTheme, currentIconStyleTheme} = useStyleThemeStore();


    useEffect(() => {
        !!fadeAnim && fadeInOpacity({fadeAnim});
    }, [fadeAnim]);


    const [selectedOptionExample, setSelectedOptionExample] = useState<IOptionExample>();
    return (
        <ScreenWrapper
            style={mainView_container}
            animatedStyle={fadeOpacity}
        >
            <FlexResponsive container style={mainView}>
                {/*MAIN <main/>*/}
                <Main id={`${id}-main`}>
                    <Paragraph children={`<main/> (WEB) / <View/> (NATIVE)`}/>

                    {/* Heading h1 */}
                    <Heading
                        id={`${id}-HeadingTitle`}
                        variant={"h1"}
                        children={`Semantic and Responsive elements`}
                    />

                    {/*RESPONSIVE <FlexResponsive container/>*/}
                    <FlexResponsive row>
                        <FlexResponsive item>
                            {/* ANCHOR <a/> target _self */}
                            <Anchor
                                href={`https://github.com/sergiodevelops/ReactNativeMinimal_LunoDev/blob/master/README.md`}
                                target={"_blank"}
                                children={`🔗 open "URL project" on GitHub ⏳`}
                            />
                        </FlexResponsive>
                    </FlexResponsive>
                    <FlexResponsive row>
                        <FlexResponsive item
                                        xs={{part: 10}}
                                        md={{part: 7}}
                        >
                            {/* BUTTON decline */}
                            <Button
                                id={`${id}-button-decline`}
                                type={"decline"}
                                onPress={toogleStyleTheme}
                                children={`Toogle Theme "decline" Button ${currentIconStyleTheme}`}
                            />
                        </FlexResponsive>
                        <FlexResponsive item
                                        xs={{part: 10}}
                                        md={{part: 7}}
                        >

                            {/* BUTTON default */}
                            <Button
                                id={`${id}-button-default`}
                                type={'default'}
                                onPress={toogleStyleTheme}
                                children={`Toogle Theme "default" Button ${currentIconStyleTheme}`}
                            />
                        </FlexResponsive>
                        <FlexResponsive item
                                        xs={{part: 10}}
                                        md={{part: 7}}
                        >
                            {/* BUTTON accept */}
                            <Button
                                id={`${id}-button-disabled`}
                                disabled
                                type={'accept'}
                                onPress={toogleStyleTheme}
                                children={`disabled <button/> (WEB) & <Pressable/> (NATIVE)`}
                            />
                        </FlexResponsive>
                    </FlexResponsive>

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
                    <Division id={`${id}-div`}>
                        <Paragraph children={`<div/> (WEB) & <View/> (NATIVE)`}/>
                    </Division>
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
                                children={
                                    selectedOptionExample?.name ?
                                        `${selectedOptionExample?.name} is selected` :
                                        "Select one option"
                                }
                            />
                            {/* SELECT */}
                            <Select
                                id={`${id}-SelectPicker`}
                                mode={'dialog'}
                                defaultLabel={'name'} // atribute to show (optional - by "name" by default)
                                options={objectsExample}
                                // defaultOption={objectsExample[0]} // init selected option
                                onOptionChange={setSelectedOptionExample as () => IOptionExample}
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

                    {/* NAVIGATION Menu */}
                    <Navbar id={`${id}-Nav`}>
                        <FlexResponsive column>
                            <FlexResponsive
                                item
                                style={{alignContent: 'center'}} // TODO rivedere qui
                            >
                                <Heading variant={'h5'} children={`Navbar menu projects`}/>
                            </FlexResponsive>
                            <Paragraph children={`<nav/> (WEB) & <View/> (NATIVE)`}/>
                        </FlexResponsive>
                        <FlexResponsive row>
                            <FlexResponsive item
                                            xs={{part: 10}}
                                            md={{part: 3}}
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
                                            xs={{part: 10}}
                                            md={{part: 3}}
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
                    </Navbar>
                </Main>
            </FlexResponsive>
        </ScreenWrapper>
    );
}
