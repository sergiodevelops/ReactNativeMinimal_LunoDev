import {View, ViewProps} from "react-native";
import MainView__responsive from "../../styles/ts/MainView/__responsive/MainView__responsive";
import {ResponsiveProps} from "../../constants/types";


type FlexResponsiveProps = {
    container?: boolean | undefined;
    row?: boolean | undefined;
    column?: boolean | undefined;
    // divisor?: number | undefined;
    // numerator?: number | undefined;
    item?: boolean | undefined;
} & ResponsiveProps & ViewProps;
export default function FlexResponsive(props: FlexResponsiveProps) {
    // https://www.w3schools.com/tags/tag_aside.asp
    const {
        container,
        row,
        column,
        // divisor,
        // numerator,
        item,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
    } = props;
    const {
        mainView__responsive_flex,
        mainView__responsive_container,
        mainView__responsive_row,
        mainView__responsive_col,
        mainView__responsive_item,
    } = MainView__responsive({xs, sm, md, lg, xl, xxl});


    const isContainer=(): boolean => !!container;
    const isRow=(): boolean => !isContainer() && !column && !!row;
    const isColumn=(): boolean => !isContainer() && !row && !!column;
    const isItem=(): boolean => !isContainer() && !!item;
    const getResponsiveId = (): string => {
        const idNames: string[] = [];

        if (isContainer()) idNames.push('container')
        if (isRow()) idNames.push('row')
        if (isColumn()) idNames.push('column')
        if (isItem()) idNames.push('item')
        const responsiveId = `${idNames.join('_')}__flex-responsive`

        return(responsiveId);
    }

    return (
        <View
            id={getResponsiveId()}
            aria-label={getResponsiveId()}
            {...props}
            style={[
                mainView__responsive_flex,
                isContainer() && mainView__responsive_container,
                isRow() && mainView__responsive_row,
                isColumn() && mainView__responsive_col,
                isItem() && mainView__responsive_item,
                props.style,
            ]}
        />
    );
}
