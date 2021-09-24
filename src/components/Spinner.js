import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className="text-center">
            <Spinner animation="grow" />
            <span>Loading...</span>
        </div>
    )
}

export default Loader
