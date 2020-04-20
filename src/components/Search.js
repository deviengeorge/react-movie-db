import React from 'react'

const Search = ({ handleInput, search }) => {
    return (
        <div>
            <section className="searchbar-wrap">
                <input
                    type="text"
                    placeholder="Search for movie..."
                    className="searchbox"
                    onChange={handleInput}
                    onKeyPress={search}
                />
            </section>
        </div>
    )
}

export default Search;