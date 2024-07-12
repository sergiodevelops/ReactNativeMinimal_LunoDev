import {View, ViewProps} from "react-native";
import MainView__responsive, {IntRange} from "../../../styles/ts/MainView/__responsive/MainView__responsive";


type FlexResponsiveProps = {
    container?: boolean | undefined;
    item?: boolean | undefined;
    xs?: {colsNumber: IntRange<1, 13>} | undefined; // < 576 px
    sm?: {colsNumber: IntRange<1, 13>} | undefined; // >= 576 px
    md?: {colsNumber: IntRange<1, 13>} | undefined; // >= 768 px
    lg?: {colsNumber: IntRange<1, 13>} | undefined; // >= 992 px
    xl?: {colsNumber: IntRange<1, 13>} | undefined; // >= 1200 px
    xxl?: {colsNumber: IntRange<1, 13>} | undefined; // >= 1400 px
} & ViewProps;
export default function FlexResponsive (props: FlexResponsiveProps){
    // https://www.w3schools.com/tags/tag_aside.asp
    const {container, item, xs, sm, md, lg, xl, xxl} = props;
    const {
        mainView__responsive,
        mainView__responsive_container,
        mainView__responsive_item,
    } = MainView__responsive({xs, sm, md, lg, xl, xxl});

    function isItem(): boolean {
        return !container && !!item;
    }



    return (
        <View
            {...props}
            aria-label={"responsive-"+(!isItem() ? "container" : "item")}
            style={[
                mainView__responsive,
                !!container && mainView__responsive_container,
                isItem() && mainView__responsive_item,
                props.style,
            ]}
        />
    );
}

