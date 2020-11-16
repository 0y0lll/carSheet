import React from 'react';

/**
 * CarList
 * --
 */
const CarList = () => {
    /* State */
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    /* Hook */
    React.useEffect(() => {
        /**
         * Node.js 테스트
         * --
         */
        const nodeTest = () => {
            fetch('http://localhost:3001/cars')
                .then(data =>data.json())
                .then(data => {
                    console.log('Hook')
                    setTimeout(() => {
                        setData(data)
                        setLoading(false)
                    }, 1000)
                });
        }
        nodeTest()
    }, [])


    console.log('Hook2222222')

    /* RENDER */
    return (
        <>
            {loading ? 'Loading...' : data && JSON.stringify(data.title)}
            <ul style={{ textAlign:'left'}}>
            {data && data.cars && data.cars.map(car =>(
                <li>{JSON.stringify(car)}</li>
            ))}
            </ul>
        </>

    );
}

export default CarList;