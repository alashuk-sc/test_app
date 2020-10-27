import * as React from 'react';
import {StatusBar} from 'react-native';
import PostList from './PostList';
import Header from './Header'
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function MainScreen() {
    const [term, setTerm] = useState('')
    const [data, setData] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData =  async () => {
            const links = await axios.get('http://assets-production.applicaster.com/applicaster-employees/israel_team/Elad/assignment/link_json.json')
            const videos = await axios.get('http://assets-production.applicaster.com/applicaster-employees/israel_team/Elad/assignment/video_json.json')

            return [...videos?.data?.entry, ...links?.data?.entry];
        }
        fetchData().then((data) => {
            setData(data)
            setItems(data)
        })
    }, [])

    useEffect(() => {
        if (term === '') {
            setItems(data)
        } else {
            setItems(data.filter(item => item.title.includes(term)));
        }
    }, [term]);

    return (
        <>
            <StatusBar backgroundColor={'#C38D9E'}/>
            <Header term={term} setTerm={setTerm} />
            <PostList data={items}/>
        </>
    );
}
