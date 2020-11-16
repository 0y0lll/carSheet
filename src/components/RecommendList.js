import React from 'react'

const recommendList = (props) => {
    const { data } = props;

    const currentYear = new Date().getFullYear()

    const handleCreateItem = (item) => {
        return (
            <div className="col-lg-3 col-6" key={item.id}>
                <div className="text-left">
                    <h4 className="mb-0">{item.name}</h4>
                    <span className="my-3 small-stroke"></span>
                    <p>{item.price}</p>
                    <img className="float-right" src={item.modelImg} />
                </div>
            </div>
        )
    }

    return (
        <div className="row justify-content-between mb-5">
            <div className="col-12">
                <h4 className="text-left mb-4">올해 신차</h4>
            </div>
            {/* {data.map(item => handleCreateItem(item))} */}
            { data && data.cars && data.cars.filter((car, index) => car.year >= currentYear && index < 4).sort((a, b) => b.year - a.year).map(car => handleCreateItem(car)) }
        </div>
    )
}

export default recommendList