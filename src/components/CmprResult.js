import React from 'react'
import queryString from 'query-string';

const Sub1 = ({ location }) => {
    const query = queryString.parse(location.search);
    // console.log('query: ', query);
    // const ids = query.id.split(',')
    return (
        <div>
            <h4>모델비교</h4>
            <p>{query.id}</p>
        </div>
    )
}

export default Sub1