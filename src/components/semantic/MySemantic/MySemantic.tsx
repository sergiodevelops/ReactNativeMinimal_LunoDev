import React, {useId, useState} from "react";
import {Switch} from "react-native";
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
import Img from "../Img/Img";
import profileSrc from "../../../../public/images/profile.png";
import FlexResponsive from "../FlexResponsive/FlexResponsive";
import Strong from "../Strong/Strong";


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
        <FlexResponsive>
            {/*MAIN <main/>*/}
            <Main id={`${id}-main`} style={{padding: 10}}>
                <Paragraph children={`<main/> (WEB) / <View/> (NATIVE)`}/>

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
                        item
                        xs={{colsNumber: 12}}
                        md={{colsNumber: 9}}
                    >
                        <Paragraph>
                            Benvenuti nel mio <Strong><Anchor
                            href={'https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/'}>progetto "React Native
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
                        style={{flexDirection: 'row'}}
                        xs={{colsNumber: 12}}
                        md={{colsNumber: 3}}
                    >
                        {/* IMAGE */}
                        <Img
                            id={`${id}-Img`}
                            alt={'this is the image about LUNO Dev, il creatore di quest\'APP native and web con semantica'}
                            source={profileSrc}
                            style={{width: 200, height: 150, resizeMode: 'contain'}}
                        />
                    </FlexResponsive>
                    <FlexResponsive item xs={{colsNumber: 12}}>
                        {/* ANCHOR <a/> target _self */}
                        <Anchor
                            href={`https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/`}
                            target={"_self"}
                            children={`🔗 open "URL web deploy" in this page ⏳`}
                        />
                        </FlexResponsive>
                        <FlexResponsive item xs={{colsNumber: 12}}>
                        {/* ANCHOR <a/> target _blank */}
                        <Anchor
                            style={{flexShrink: 1, flexWrap: 'wrap'}}
                            href={`https://google.com`}
                            target={"_blank"}
                            children={ `🔗 open "URL web deploy" in a new tab 🚀`
                                /*<Button
                                    id={`${id}-Anchor-button-accept`}
                                    type={"accept"}
                                    children={`🔗 open "URL web deploy" in a new tab 🚀`}
                                />*/
                            }
                        />
                    </FlexResponsive>
                </FlexResponsive>



                {/* BUTTON accept */}
                <Button
                    asLink={{href: 'https://google.com', target: '_blank'}}
                    id={`${id}-button-accept`}
                    type={"accept"}
                    onPress={toogleStyleTheme}
                    children={`Toogle Theme "accept" ${currentIconStyleTheme} tab tab tab tab tab tab tab tab tab tab tab tab tab tab`}
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
                            label={'name'} // atribute identification to show (optional - by "name" by default)
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
        </FlexResponsive>
    );
}
