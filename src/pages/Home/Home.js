import {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import axios from 'axios';
import Select from '../../components/Select/Select';
import Loader from '../../components/Spinner';
import MovieCrawl from '../../components/MovieCrawl';
import Table from '../../components/Table';
import LandingPageImage from '../../components/LandingPageImage/LandingPageImage';

const Home = () => {

    const [isLoaded, setLoaded] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [movieDetails, setMovieDetails] = useState([])
    const [characterDetails, setCharacterDetails] = useState([])
    const [initialCharacterDetails, setInitialCharacterDetails] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        axios.get("https://swapi.dev/api/films/")
            .then((res)=> {
                setLoaded(true)
                setMovies(res.data.results)
            })
            .catch((error=> {
                console.log(error)
            }))
    }, [])

        const handleCallback = async (movie_id) =>{
            const filteredMovies = movies.filter(item => item.episode_id === parseInt(movie_id))
            setMovieDetails(filteredMovies)
            const characters = await fetchData(filteredMovies && filteredMovies[0]?.characters)
            setCharacterDetails(characters)
            setInitialCharacterDetails(characters)
        }

        const handleGenderCallback = (gender) =>{
            // gender
            if (gender === 'All') {
                setCharacterDetails(initialCharacterDetails)
            } else {
                const filteredGender = initialCharacterDetails.filter(item => item.gender === gender.toLowerCase())
                setCharacterDetails(filteredGender)
            }
            
        }

        const fetchData = async (characters) => {
            setSpinner(true)
            try {
                const response = await Promise.all(
                    characters.map(url => axios.get(url).then(res => res.data))
                )
                setSpinner(false)
                return response
            } catch (error) {
                console.log("Error", error)
            }
        }

    return (
        <div>
            <Header/>
            {isLoaded ? ( 
                <>
                    <LandingPageImage/>
                    <h1 className="text-center mt-4 mb-4">Please select a movie</h1>
                    <Select parentCallback = {handleCallback} movies={movies}/>
                    {movieDetails.length ? 
                        <div className="container mt-5 mb-5">
                            <MovieCrawl movieDetails={movieDetails}/>
                            <div className="m-4">
                                <Select gender parentCallback = {handleGenderCallback}/>
                            </div>
                            <Table characterDetails={characterDetails} spinner={spinner}/>
                        </div>
                        : ''
                    } 
                </>
            ) : (
               <Loader/>
            )}
        </div> 
    )
}

export default Home