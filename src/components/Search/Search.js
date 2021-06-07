import './Search.css'
const Search = () => {
    return (
        <div className="search-input-container">
            <div className="search-input-with-dropdown">
                <div className="left-side-wrapper">
                    <i className="fa fa-search search-icon" aria-hidden="true"></i>
                    <form className="search-input-form">
                        <label htmlFor="search" className="text">Search</label>
                        <input id="search" type="search" placeholder="Search a movie" className="search-input"></input>
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
    )
}

export default Search
