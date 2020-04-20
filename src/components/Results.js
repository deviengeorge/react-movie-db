import React from 'react'
import Result from './Result';


const Results = ({ results, openPopup }) => {
    return (
        <div>
            <section className="results">
                {results.map(result => (
                    <Result key={result.imdbID} result={result} openPopup={openPopup} />
                ))}
            </section>
        </div>
    )
}

export default Results;