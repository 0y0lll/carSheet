import React from 'react'
import queryString from 'query-string';

const CmprResult = ({ location }) => {
    /* 쿼리로 받은 모델 id */
    const query = queryString.parse(location.search);

    const [items, setItems] = React.useState();

    const ids = query.id.split(',');

    if (!query) {
        alert('잘못된 접근 입니다.')
    } else {
        // fetch('http://localhost:3001/cars')
        //     .then(res => res.json())
        //     .then(data => setItems(JSON.parse(JSON.stringify(data))))
        //     .catch(err => console.log(err))
    console.log('success');
    }

    return (
        <div>
            <h4>모델비교</h4>
            <p>{query.id}</p>
            <ul>
                {/* { data && data.cars && ids.map(id => data.cars.filter(car.id === id)) } */}
                <li></li>
            </ul>
        </div>
    )
}

export default CmprResult