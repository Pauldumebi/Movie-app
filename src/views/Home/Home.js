import {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import joelmunizimg from '../../images/joel-muniz.jpg'
import spidermanimg from '../../images/spiderman.jpg'
import Thanosimg from '../../images/Thanos.jpg'
import sometaleimg from '../../images/some-tale.jpg'
import loader from '../../images/gif-loader.gif'
import { Row, Col } from 'react-bootstrap';
import Card from '../../components/Cards/Card'
import axios from 'axios';
import { BASE_URL, API_KEY, BASE_IMG } from '../../components/config';


const Home = () => {

    const [isLoaded, setLoaded] = useState(false);
    const [CardDetails, setCardDetails] = useState([])
    const [filterResult, setfilterResult] = useState([])

    //endpoint for getting movies
    const options = {
        method: 'GET',
        url: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=eng`,
    };
    
    //fetch movies
    useEffect(() => {
        axios.request(options).then(function (response) {
            setCardDetails(response.data.results)
            setfilterResult(response.data.results)
            setLoaded(true)
        }).catch(function (error) {
            console.error(error);
        });
        
    }, [])

    //Search movies
    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        // debugger
        
        result = CardDetails.filter((data) => {
            console.log(data.title)
            return data.title.toLowerCase().includes(value);
        });
            setfilterResult(result);
            console.log(result)
        }

    return (
        <div>
            {isLoaded ? ( 
                <div>
                    <Header/>
                    <div className="landing-page-container">
                        <div className="landing-page-img">
                            <Row>
                                <Col sm={3}>
                                    <img src={joelmunizimg} alt="landing-page-img"/>
                                </Col>
                                <Col sm={3}>
                                    <img src={sometaleimg} alt="landing-page-img"/>
                                </Col>
                                <Col sm={3}>
                                    <img src={Thanosimg} alt="landing-page-img"/>
                                </Col>
                                <Col sm={3}>
                                    <img src={spidermanimg} alt="landing-page-img"/>
                                </Col>
                            </Row>
                        </div>
                        <div className="landing-page-text">
                            <h1>Bored? We've got movies to help you out</h1>
                            <p>Over 1000 movies available in HD, 4k and many more.</p>
                        </div>
                    </div>
                    
                    <div className="search-input-container">
                        <div className="search-input-with-dropdown">
                            <div className="left-side-wrapper">
                                <i className="fa fa-search search-icon" aria-hidden="true"></i>
                                <form className="search-input-form">
                                    <label htmlFor="search" className="text">Search</label>
                                    <input id="search" type="text" placeholder="Search a movie" className="search-input" 
                                        onChange={(event) =>handleSearch(event)}></input>
                                </form>
                            </div>
                            <div className="vertical-divider"></div>
                            <span className="btn-dropdown">
                                <a className="btn-dropdown-link" href data-dropdown-state="closed">
                                    <span>Horror</span>
                                    <i className="fa fa-sort-desc btn-dropdown-caret" aria-hidden="true"></i>
                                </a>
                                {/* <div className="btn-dropdown-options">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div> */}
                            </span>
                        </div>
                    </div>
                    <Card cardDetails={filterResult} baseimg={BASE_IMG}/>

                </div>
            ) : (
                <div className="text-center">
                    <img
                        className="img-fluid text-center"
                        src={loader}
                        alt="Work In Progress"
                    ></img>
                </div>
            )}
        </div>
    )
}

export default Home
