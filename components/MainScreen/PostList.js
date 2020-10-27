import React, {useRef} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import RenderItem from './RenderItem';

export default function PostsList({data}) {
    const ref = useRef(null)

    return (
        <>
            <View style={styles.tabInner}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="transparent"
                    onPress={() => {
                        const index = data.findIndex(item => item.type.value === 'video')
                        if(index >= 0) {
                            ref.current.scrollToIndex({animated: true, index: index});
                        }                    }}>
                    <Text style={styles.tab}>videos</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="transparent"
                    onPress={() => {
                        const index = data.findIndex(item => item.type.value === 'link')
                        if(index >= 0) {
                            ref.current.scrollToIndex({animated: true, index: index});
                        }
                    }}>
                    <Text style={styles.tab}>links</Text>
                </TouchableHighlight>
            </View>
            <FlatList
                ref={ref}
                data={data}
                renderItem={RenderItem}
                keyExtractor={item => item.id}
                onScrollToIndexFailed={console.log}
            />
        </>
    );
}

const styles = StyleSheet.create({
    tabInner: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#C38D9E',
        marginBottom: 20
    },
    tab: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10
    }
})
