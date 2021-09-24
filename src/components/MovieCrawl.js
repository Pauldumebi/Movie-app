const MovieCrawl = ({movieDetails}) => {
    return (
        <div id="scroll-container" className="text-align-justify mb-5">
            <div id="scroll-text">
                {movieDetails[0].opening_crawl}
            </div>
        </div>
    )
}

export default MovieCrawl
