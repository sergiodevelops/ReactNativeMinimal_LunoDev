import {StyleSheet, useWindowDimensions} from 'react-native';


// https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
export default function MainView__responsive(props: {
    xs?: { colsNumber: IntRange<1, 13> } | undefined; // < 576 px
    sm?: { colsNumber: IntRange<1, 13> } | undefined; // >= 576 px
    md?: { colsNumber: IntRange<1, 13> } | undefined; // >= 768 px
    lg?: { colsNumber: IntRange<1, 13> } | undefined; // >= 992 px
    xl?: { colsNumber: IntRange<1, 13> } | undefined; // >= 1200 px
    xxl?: { colsNumber: IntRange<1, 13> } | undefined; // >= 1400 px
}) {
    const {width} = useWindowDimensions();
    const {xs, sm, md, lg, xl, xxl} = props;
    const totalWidth: number = 100;
    const totalCols: number = 12;
    const defaultCols: number = 12;


    const getWidthByCols = (size: { colsNumber: IntRange<1, 13> } | undefined): number => {
        return ((size?.colsNumber || defaultCols) * totalWidth / totalCols)
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


    return (
        StyleSheet.create({
            mainView__responsive: {
                display: "flex",
                width: `100%`,
            },
            mainView__responsive_container: {
                padding: 10,
                flexWrap: 'wrap',
                flexDirection: 'row',
                // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
                justifyContent: 'space-around',
                alignContent: 'flex-start',
            },
            mainView__responsive_item: {
                alignItems: 'flex-start',
                flexDirection: 'row', // TODO rivedere qui
                width: `${getWidthBySizeProps()}%`,
                justifyContent: 'center',
            },
        })
    );
};
