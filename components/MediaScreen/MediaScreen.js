import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const Orientation = require('react-native-orientation');

export default function MediaScreen({ src, navigation }) {
    useEffect(() => {
        Orientation.lockToLandscape();
        return () => {
            Orientation.lockToPortrait();
            Orientation.unlockAllOrientations();
        }
    }, []);

    return (
        <>
            <StatusBar hidden={true} />
            <VideoPlayer
                source={{uri: src}}
                navigator={navigation}
                toggleResizeModeOnFullscreen={false}
                disableFullscreen={true}
                controlTimeout={10000}
            />
        </>
    );
}
