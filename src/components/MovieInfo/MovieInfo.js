import './MovieInfo.css'
import { Modal, Row, Col  } from 'react-bootstrap';
import { BASE_IMG, VIDEO_URL } from '../../components/config';

const MovieInfo = (props) => {
    return (
        <div >
            <Modal size="lg" {...props} className="movie-info-modal-lg">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="movie-info-content-container">
                    <div className="movie-info-title-container">
                        <h3 className="mb-4">{props.selectedMovie.title}</h3>
                        <div className="movie-info-header">
                            <div className="movie-info-title"></div>
                            <div className="movie-info-like">
                                <a className="like-movie" href>
                                    <i className="fa fa-heart" aria-hidden="true" style={{color : "grey", fontSize:"1.2rem", cursor:"pointer"}}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="movie-info-container">
                        <img className="movie-title" alt={props.selectedMovie.original_title} src={`${BASE_IMG}${props.selectedMovie.poster_path}`}></img>
                        <div className="movie-info mt-5">
                            <h4 className="mb-4">Overview</h4>
                            {props.selectedMovie.overview}
                        </div>
                        <div className="mt-3 mb-3">
                            <h6>Release date: {props.selectedMovie.release_date}</h6>
                        </div>
                        <div className="movie-info-cast mt-5">
                            <h4 className="mb-3">Casts</h4>
                            <Row className="movie-info-cast-container">
                                {
                                    props.cast.map((item)=>{
                                        return(
                                            <Col sm={3} key={item.id}>
                                                <img src={`${BASE_IMG}${item.profile_path}`} alt={item.name}></img>
                                                <h6 className="text-center">{item.name}</h6>
                                            </Col>
                                        )
                                    })
                                }
                                
                            </Row>
                        </div>
                            
                        <div className="thriller mt-5">
                            <h4 className="mb-4">Thriller</h4>
                            {props.movies.map((video)=>{
                                return(
                                    <iframe title="movie" src={`${VIDEO_URL}${video.key}`} class="d-block w-100" height="400px" allow="fullscreen" key={video.id}></iframe>
                                )
                            })}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MovieInfo
