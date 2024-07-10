import React, {useId} from "react";
import {View, Text} from "react-native";
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
import {isWeb} from "../../../utils/platform";


// example for add semantic for DOM WEB platform output rendering
export default function MySemantic() {
    const id = `MySemantic-${useId()}`;
    const {
        toogleStyleTheme,
        currentIconStyleTheme,
    } = useStyleThemeStore();


    return (
        <Main id={`${id}-main`}>

            <Anchor
                href={`https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/`}
                target={"_self"}
                children={`open URL in this page ⏳`}
            />
            <Anchor
                href={`https://google.com`}
                target={"_blank"}
                children={
                    <Button
                        id={"button-accept"}
                        type={"accept"}
                        children={`open URL in a new tab 🔗🚀`}
                    />
                }
            />

            <Paragraph children={`<main/> (WEB) / <View/> (NATIVE)`}/>

            <Heading
                id={`${id}-HeadingTitle`}
                variant={"h1"}
                children={`React Native & Web (CSR & SSR) & Semantic`}
            />

            <Button
                id={"button-accept"}
                type={"accept"}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "accept" ${currentIconStyleTheme}`}
            />
            <Button
                id={"button-decline"}
                type={"decline"}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "decline" ${currentIconStyleTheme}`}
            />
            <Button
                id={"button-default"}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "default" ${currentIconStyleTheme}`}
            />
            <Button
                id={"button-disabled"}
                disabled
                onPress={toogleStyleTheme}
                children={`disabled <button/> (WEB) & <Pressable/> (NATIVE)`}
            />

            <Heading
                id={`${id}-Heading-h1`}
                variant={"h1"}
                children={`<h1/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                id={`${id}-Heading-h2`}
                variant={"h2"}
                children={`<h2/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                id={`${id}-Heading-h3`}
                variant={"h3"}
                children={`<h3/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                id={`${id}-Heading-h4`}
                variant={"h4"}
                children={`<h4/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                id={`${id}-Heading-h5`}
                variant={"h5"}
                children={`<h5/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                id={`${id}-Heading-h6`}
                variant={"h6"}
                children={`<h6/> (WEB) & <Text/> (NATIVE)`}
            />

            <Paragraph
                id={`${id}-Paragraph-p`}
                children={`<p/> (WEB) & <Text/> (NATIVE)`}
            />

            <Article id={`${id}-article`} role={"article"}>
                <Paragraph children={`<article/> (WEB) & <View/> (NATIVE)`}/>
            </Article>
            <View id={`${id}-div`}>
                <Paragraph children={`<div/> (WEB) & <View/> (NATIVE)`}/>
            </View>

            {/*
            Some elements, not all of them form-associated, are categorized
            as labelable elements. These are elements that can be associated
            with a label element. "button" "input" (if the type attribute
            is not in the hidden state) "keygen" "meter" "output" "progress"
            "select" "textarea"
            https://stackoverflow.com/questions/66943376/react-htmlfor-clicking-label-focus-on-the-wrong-input
            generate unique id for linked label with input in React
            https://react.dev/reference/react/useId
            */}
            <Form>
                <Paragraph children={`<form/> (WEB) & <View/> (NATIVE)`}/>
                <Fieldset id={`${id}-FieldsetInput`}>
                    <Label
                        htmlFor={`${id}-Input`}
                        children={`<label/> input (WEB) & <Text/> (NATIVE) click me e vedrai!`}
                    />
                    <Input
                        id={`${id}-Input`}
                        placeholder={`placeholder for this <input/> (WEB) & <TextInput/> (NATIVE)`}
                    />
                </Fieldset>
                <Fieldset id={`${id}-FieldsetTextarea`}>
                    <Label
                        htmlFor={`${id}-Textarea`}
                        children={`<label/> textarea (WEB) & <Text/> (NATIVE) click me e vedrai!`}
                    />
                    <Textarea
                        id={`${id}-Textarea`}
                        placeholder={`placeholder for this <textarea/> (WEB) & <TextInput/> (NATIVE)`}
                    />
                </Fieldset>
            </Form>

            <Nav children={<Paragraph children={`<nav/> (WEB) & <View/> (NATIVE)`}/>}/>

            <Header id={`${id}-header`}>
                <Paragraph children={`<header/> (WEB) & <View/> (NATIVE)`}/>
            </Header>

            <Footer id={`${id}-footer`}>
                <Paragraph children={`<footer/> (WEB) & <View/> (NATIVE)`}/>
            </Footer>
            {
                isWeb() ? null :
                    <View>
                        <Text></Text>
                        <Text></Text>
                    </View>
            }
        </Main>
    );
}
