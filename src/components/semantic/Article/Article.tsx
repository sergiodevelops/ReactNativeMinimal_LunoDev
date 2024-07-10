import {View, ViewProps} from "react-native";


type ArticleProps = ViewProps;
export default function Article (props: ArticleProps){
    // https://www.w3schools.com/tags/tag_article.asp


    return (
        <View
            {...props}
            role={'article'}
            accessibilityLabel={"article"}
        />
    );
}

