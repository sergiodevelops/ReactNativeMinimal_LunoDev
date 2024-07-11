import React, {useId, useState} from "react";
import {Switch, Image, View} from "react-native";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import Paragraph from "../Paragraph/Paragraph";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Form from "../Form/Form";
import Fieldset from "../Fieldset/Fieldset";
import Textarea from "../Textarea/Textarea";
import Anchor from "../Anchor/Anchor";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Article from "../Article/Article";
import Main from "../Main/Main";
import Select from "../Select/Select";
import Aside from "../Aside/Aside";
import FixMarginButtomProblem from "../../utils/FixMarginButtomProblem/FixMarginButtomProblem";
import Div from "../Div/Div";
import profileSrc from '../../../../public/images/profile.png';


// example for add semantic for DOM WEB platform output rendering
export default function MySemantic() {
    const id = `MySemantic-${useId()}`;
    const {toogleStyleTheme, currentIconStyleTheme} = useStyleThemeStore();
    const [state, setState] = React.useState<boolean>(false)
    const toogleState = () => setState(!state);
    type ILang = { lang: 'en-EN' | 'es-AR' | 'it-IT', name: string, id: number }
    const languages: ILang[] = [
        {lang: "en-EN", name: "ENGLISH", id: 1},
        {lang: "es-AR", name: "ESPAÑOL", id: 2},
        {lang: "it-IT", name: "ITALIANO", id: 3},
    ];
    const [selectedLanguage, setSelectedLanguage] = useState<ILang | undefined>(undefined)


    return (
        // MAIN <main/>
        <Main id={`${id}-main`}>
            <Paragraph children={`<main/> (WEB) / <View/> (NATIVE)`}/>
            {/* ANCHOR <a/> target _self */}
            <Anchor
                href={`https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/`}
                target={"_self"}
                children={`open URL in this page ⏳`}
            />
            {/* ANCHOR <a/> target _blank */}
            <Anchor
                href={`https://google.com`}
                target={"_blank"}
                children={
                    <Button
                        id={`${id}-Anchor-button-accept`}
                        type={"accept"}
                        children={`open URL in a new tab 🔗🚀`}
                    />
                }
            />
            {/* Heading h1 */}
            <Heading
                id={`${id}-HeadingTitle`}
                variant={"h1"}
                children={`React Native & Web (CSR & SSR) & Semantic`}
            />
            {/* BUTTON accept */}
            <Button
                id={`${id}-button-accept`}
                type={"accept"}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "accept" ${currentIconStyleTheme}`}
            />
            {/* BUTTON decline */}
            <Button
                id={`${id}-button-decline`}
                type={"decline"}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "decline" ${currentIconStyleTheme}`}
            />
            {/* BUTTON default */}
            <Button
                id={`${id}-button-default`}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "default" ${currentIconStyleTheme}`}
            />
            {/* BUTTON disabled */}
            <Button
                id={`${id}-button-disabled`}
                disabled
                onPress={toogleStyleTheme}
                children={`disabled <button/> (WEB) & <Pressable/> (NATIVE)`}
            />
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
                        placeholder={`placeholder for this <input/> (WEB) & <TextInput/> (NATIVE)`}
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
                        placeholder={`placeholder for this <textarea/> (WEB) & <TextInput/> (NATIVE)`}
                    />
                </Fieldset>
                {/* FIELDSET */}
                <Fieldset id={`${id}-FieldsetSelectPicker`}>
                    {/* LABEL */}
                    <Label
                        id={`${id}-LabelPicker`}
                        htmlFor={`${id}-SelectPicker`}
                        children={selectedLanguage?.name || "Select one language"}
                    />
                    {/* SELECT */}
                    <Select
                        label={'id'} // atribute identification to show (optional - by "name" by default)
                        id={`${id}-SelectPicker`}
                        options={languages}
                        onSelectedLanguage={setSelectedLanguage}
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
                    {/* SWITCH */}
                    <Switch
                        id={`${id}-Switch`}
                        value={state}
                        onChange={toogleState} // for NATIVE
                        onPointerDown={toogleState} // for WEB
                    />
                </Fieldset>
            </Form>
            {/* NAVIGATION */}
            <Nav id={`${id}-Nav`}>
                <Paragraph children={`<nav/> (WEB) & <View/> (NATIVE)`}/>
            </Nav>
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



            {/* IMAGE */}
            <Image
                role={'img'}
                id={`${id}-Image`}
                source={{uri: profileSrc}}
                style={{
                    width: '20%',
                    height: `20%`,
                }}
            />

            {/* CODE <code/> */}

            {/* CITE <cite/> */}

            {/* CANVAS <canvas/> */}

            {/* MAP <map/> */}
            {/* AREA <area/> */}

            {/* TABLE <table/>*/}
            {/* TABLE <caption/> table title */}
            {/* TABLE <tr/> row */}
            {/* TABLE <th/> col*/}

            <FixMarginButtomProblem/>
        </Main>
    );
}
