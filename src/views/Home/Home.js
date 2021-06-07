import {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import joelmunizimg from '../../images/joel-muniz.jpg'
import spidermanimg from '../../images/spiderman.jpg'
import Thanosimg from '../../images/Thanos.jpg'
import sometaleimg from '../../images/some-tale.jpg'
import loader from '../../images/gif-loader.gif'
import { Row, Col } from 'react-bootstrap';
import Search from '../../components/Search/Search'
import Card from '../../components/Cards/Card'
import { config } from '../../Constant';
import axios from 'axios';
import SignupModal from '../../components/SignupModal/SignupModal'
import LoginModal from '../../components/LoginModal/LoginModal'
// import MovieInfo from '../../components/MovieInfo/MovieInfo'
import { BASE_URL, API_KEY, BASE_IMG } from '../../components/config';


const Home = () => {

    // var url = config.url.API_URL;
    const [Signup, setSignup] = useState(false);
    const [Login, setLogin] = useState(false);
    const handleClose = () => setSignup(false);
    const handleClose2 = () => setLogin(false);
    const [isLoaded, setLoaded] = useState(false);
    const [CardDetails, setCardDetails] = useState([])

    const options = {
        method: 'GET',
        url: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=eng`,
      };
      
      
    useEffect(() => {
        
        axios.request(options).then(function (response) {
            // const values = {
            //     values : response.data.results
            // }
            // axios
            // .post(
            //     "https://nimdeewksht.sandbox.9ijakids.com/movie-app/api.php/bulkInsert",
            //     values
            // )
            // .then((res) => {
            //     if (res.status === 200) {
            //         console.log(res.data.message)
            //     } else {
                    
            //     }
            // })
            // .catch(function (error) {
                
            //     console.log(error);
            // });
            console.log(response.data.results)
            setCardDetails(response.data.results)
            setLoaded(true)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div>
            {isLoaded ? ( 
                <div>
                    <Header/>
                    <SignupModal show={Signup} onHide={handleClose}/>
                    <LoginModal show={Login} onHide={handleClose2}/>
                    
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
                    <Search/>
                    <Card cardDetails={CardDetails} baseimg={BASE_IMG}/>
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
