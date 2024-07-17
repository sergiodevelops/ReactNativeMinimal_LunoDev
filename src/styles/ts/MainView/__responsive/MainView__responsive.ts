import {StyleSheet, useWindowDimensions} from 'react-native';
import {IntRange, ResponsiveProps} from "../../../../constants/types";


export default function MainView__responsive(props: ResponsiveProps) {
    const {width} = useWindowDimensions();
    const {xs, sm, md, lg, xl, xxl} = props;
    const totalWidth: number = 100;
    const totalCols: number = 12;
    const defaultCols: number = 12;


    const getWidthByCols = (size: { part: IntRange<1, 13> } | undefined): number => {
        return ((size?.part || defaultCols) * totalWidth / totalCols)
    }


    const getWidthBySizeProps = (): number => {
        if(xxl && width >= 1400) {
            return getWidthByCols(xxl);
        }
        if(xl && width >= 1200) {
            return getWidthByCols(xl);
        }
        if(lg && width >= 992) {
            return getWidthByCols(lg);
        }
        if(md && width >= 768) {
            return getWidthByCols(md);
        }
        if(sm && width >= 576) {
            return getWidthByCols(sm);
        }

        return getWidthByCols(xs); // width < 576
    }


    // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    return (
        StyleSheet.create({
            mainView__responsive_flex: {
                display: "flex",
                width: `100%`,
                flexWrap: 'wrap',
                paddingBottom: 5,
                paddingTop: 5,
            },
            mainView__responsive_container: {
                padding: 15,
            },
            mainView__responsive_row: {
                alignItems: 'flex-start',
                flexDirection: 'row',
                justifyContent: 'space-around',
            },
            mainView__responsive_col: {
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
            },
            mainView__responsive_item: {
                alignContent: 'center', //TODO rivedere qui
                alignItems: 'center',
                width: `${getWidthBySizeProps()}%`,
                paddingLeft: 5,
                paddingRight: 5,
            },
        })
    );
};
