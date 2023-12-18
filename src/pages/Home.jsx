import {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import Slider from "../Components/Slider";
import Jumbotron from "../Components/UI/jumbotron/Jumbotron";
import Point from "../Components/Point";
import MyCard from "../Components/UI/myCard/MyCard";
import Categories from "../Components/UI/categories/Categories";
import Pagination from "../Components/UI/pagination/Pagination";

const Home = () => {
    const [items, setItems] = useState([])
    const [categoryId, setCategoryId] = useState(0)

    useEffect(() => {
        fetch('https://657b74bc394ca9e4af145e99.mockapi.io/items')
            .then((res) =>  res.json())
            .then((arr) => {
                setItems(arr)
            })
    }, []);

    return (
        <>
        <Slider/>
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
            <Row>
                {items.map((obj) => (
                    <MyCard key={obj.id} {...obj} />
                ))}
            </Row>
            <Pagination/>
        <Jumbotron/>
        <Point/>
        </>
    );
};

export default Home;