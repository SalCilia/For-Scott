import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import axios from 'axios';
import Search from './components/Search';
import ImageCarousel from './components/ImageCarousel';


const App = () => {

    // const [page, setPage] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [breed, setBreed] = useState('');
    const [breedsList, setBreedsList] = useState(null)
    const getRequest = async () => {
        const url = breed === '' ? 'https://dog.ceo/api/breeds/image/random/7' : `https://dog.ceo/api/breed/${breed}/images/random/7`
        const response = await axios.get(url);
        console.log(response)
        setDogs(response.data.message)
    }
    const getBreeds = () => {
        axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
            console.log(response)
            setBreedsList(Object.keys(response.data.message))
        })
    }
    useEffect(() => {
        getBreeds()
        getRequest();
    }, [])



    return (
        <div className={'container vw-100 vh-100'}>
            <div className={'row header'}>
                <Header />
            </div>
            <div className={'row'}>
                <div className={'main-img-container text-center img-fluid'}><img className="img-fluid" alt="inital dog" src={dogs[0]} /></div>
            </div>

            <div className={'text-center'}>
                <Search setBreed={setBreed} breedsList={breedsList} />
                <Button className={'btn'} handleClick={getRequest} />
            </div>
            <div className={'container .bg-dark'}>
                <div className={'row no-gutters'} >
                    <ImageCarousel dogs={dogs.slice(1)} />
                </div>
            </div>
        </div>
    )





}



export default App;