import React from 'react'

const SearchBar = () => {
    return (
        <div class="d-flex w-50 mx-auto mb-5">
            <input type="text" class="form-control mr-2" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"/>
            <button class="btn btn-primary" id="basic-addon2" type="button">Search</button>
        </div>
    )
}

export default SearchBar;