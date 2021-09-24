import './Select.css'
import starWarsLogo from '../../images/Star_Wars-Logo.wine.png';
const Select = (props) => {
    const {movies, gender} = props;
    const handleDropdownChange = (e) =>{
        props.parentCallback(e.target.value);
    }
    const listOfGender = ['All', 'Male', 'Female']
    return (
        <div className="select" onChange={handleDropdownChange}>
            <select>
                  { gender ?
                    listOfGender.map((gender, index) => 
                        <option key={index} value={gender}>{gender}</option>
                    ) : 
                    <>
                        <option value='none' style={{backgroundImage:'../../images/Star_Wars-Logo.wine.png'}} defaultValue>Select a movie</option>
                        {movies.map(movie => 
                            <option key={movie.episode_id} value={movie.episode_id}>{movie.title}</option>
                        )}
                    </>
                  }
            </select>
        </div>
    )
}

export default Select