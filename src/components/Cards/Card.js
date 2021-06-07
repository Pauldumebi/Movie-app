import {useState} from 'react'
import './Card.css'
import { Row, Col } from 'react-bootstrap';
import MovieInfo from '../MovieInfo/MovieInfo'
import { BASE_URL, API_KEY} from '../../components/config';
import axios from 'axios'

const Card = ({cardDetails, baseimg}) => {

    const [filmInfo, setfilmInfo] = useState(false);
    const [SelectedMovie, setSelectedMovie] = useState({})
    const [Cast, setCast] = useState([])
    const [Movies, setMovies] = useState([])
    const handleClose3 = () => setfilmInfo(false);

    const getCredits = (item) => {
        axios
            .get(
                `${BASE_URL}/movie/${item.id}/credits?api_key=${API_KEY}`
            )
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.cast.slice(0, 4))
                    setCast(res.data.cast.slice(0, 4))
                } 
            })
            .catch(function (error) {
                
                console.log(error);
            });
    }
    const getMovies = (item) => {
        axios
            .get(
                `${BASE_URL}/movie/${item.id}/videos?api_key=${API_KEY}`
            )
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.results.slice(0, 1))
                    setMovies(res.data.results.slice(0, 1))
                } 
            })
            .catch(function (error) {
                
                console.log(error);
            });
    }

    const movieDetails = (item) => {
        getCredits(item)
        getMovies(item)
        setSelectedMovie(item)
        setfilmInfo(true)
    } 
    
    return (
        <div>
            <MovieInfo show={filmInfo} onHide={handleClose3} selectedMovie={SelectedMovie} cast={Cast} movies={Movies}/>
                <Row className="thumbnail-maincontainer">
                {cardDetails.map((item) => {
                    return(
                        <Col sm={4}>
                                <div className="thumbnail thumbnail-container ">
                                    <div className="thumbnail-base">
                                        <figure style={{ backgroundColor: "#ECECEC"}}className="thumbnail-placeholder" onClick={()=> movieDetails(item)}>
                                            <img alt={item.original_title} src={`${baseimg}${item.poster_path}`}></img>
                                        </figure>
                                    </div>
                                </div>
                            <div className="shot-title d-flex justify-content-between pl-2 pr-2 pt-4 pb-4">
                                <h5>{item.original_title}</h5>
                                <a className="like-shot" href>
                                    <i className="fa fa-heart" aria-hidden="true" style={{color : "grey", fontSize:"1.2rem"}}></i>
                                </a>
                            </div>
                        </Col>
                        )
                    })}
                </Row>
           
    </div>
    )
}

export default Card
