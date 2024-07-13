import {StyleSheet} from "react-native";


export default function MainView__progress(){
    return(
        StyleSheet.create({
            mainView__progress_container: {
                height: 20,
                backgroundColor: '#ccc',
                borderRadius: 10,
                margin: 10,
            },
            mainView__progress_bar: {
                height: 20,
                backgroundColor: '#333',
                borderRadius: 10,
            },
        })
    );
}
