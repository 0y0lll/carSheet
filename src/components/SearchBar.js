import React from 'react'

const SearchBar = () => {
    return (
        <div className="d-flex w-50 mx-auto mb-5">
            <input type="text" className="form-control mr-2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
            <button className="btn btn-primary" id="basic-addon2" type="button">Search</button>
        </div>
    )
}

export default SearchBar;