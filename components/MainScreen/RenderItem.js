import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RenderItem({item}) {

    const filterImages = (arr) => {
        const item =  arr.find(({media_item}) => {
            return media_item.find(({key}) => key === 'image_base')
        })
        return item?.media_item[0];
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            {item.type.value === 'video'
                ? Actions.fullscreenVideo({src: item?.content?.src})
                : Actions.WebViewScreen({item})
            }
        }}>
            <View style={styles.row}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <View style={styles.inner}>
                    <Text style={styles.summary}>{item.summary}</Text>
                    <View style={{position: 'relative', height: 100}}>
                        {item.type.value === 'video'
                            ? <Icon style={styles.icon} name="play-circle" size={50} color="#fff"/>
                            : null}
                        <Image
                            style={styles.image}
                            source={{
                                uri: filterImages(item.media_group)?.src
                            }}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 2,
        borderBottomColor: '#C38D9E',
        borderStyle: 'solid',
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#C38D9E',
        marginBottom: 15
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: '#b0b0b0',
    },
    summary: {
        flex: 1,
        color: '#000',
        marginBottom: 10,
        paddingRight: 30,
    },
    inner: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        bottom: '50%',
        left: '50%',
        zIndex: 1,
        transform: [
            { translateX: -25 },
            { translateY: 25 },
        ]
    }
})
