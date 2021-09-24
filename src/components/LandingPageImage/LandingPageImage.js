
import Darth_Vader from '../../images/Darth-Vader.jpeg'
import fighter from '../../images/fighter.jpeg'
import jedi_fallen_order from '../../images/jedi-fallen-order.jpeg'
import { Row, Col } from 'react-bootstrap';

const LandingPageImage = () => {
    return (
        <div className="landing-page-container">
            <div className="landing-page-img">
                <Row>
                    <Col sm={4}>
                        <img src={Darth_Vader} alt="landing-page-img"/>
                    </Col>
                    <Col sm={4}>
                        <img src={jedi_fallen_order} alt="landing-page-img"/>
                    </Col>
                    <Col sm={4}>
                        <img src={fighter} alt="landing-page-img"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default LandingPageImage
