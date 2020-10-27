import React, {useState} from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, StyleSheet } from 'react-native'


export default function WebViewScreen({ item }) {
    const [load, setLoad] = useState(false)
    console.log(item.link.href)
    return (
        <>
            {!load ? <ActivityIndicator style={styles.loader} size="large" color="#C38D9E" /> : null}
            <WebView
                source={{ uri: 'https://google.com' }} // item.link.href
                onLoadEnd={() => setLoad(true)}
            />
        </>
    );
}

const styles = StyleSheet.create({
    loader: {
        flex: 1
    }
})
