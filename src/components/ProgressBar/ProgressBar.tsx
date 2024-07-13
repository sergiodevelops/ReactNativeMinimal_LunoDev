import React, {useEffect, useState} from 'react';
import { View, Text, Animated } from 'react-native';
import MainView__progress from "../../styles/ts/MainView/__progress/MainView__progress";


export default function ProgressBar () {
    // https://reactnative.dev/docs/animated
    // https://medium.com/@jujunsetiawan10/how-to-create-progress-bar-in-react-native-f27ae2871ac3

    const {
        mainView__progress_container,
        mainView__progress_bar,
    } = MainView__progress();

    const [progress, setProgress] = useState<Animated.Value>(new Animated.Value(0));
    const animation = Animated.timing(progress, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false,
    });


    useEffect(() => {
        animation.start(console.log);
    }, []);


    return (
        <View style={mainView__progress_container}>
            <Animated.View style={[mainView__progress_bar, { width: progress }]} />
            <Text>{String(progress)}</Text>
        </View>
    );
};

