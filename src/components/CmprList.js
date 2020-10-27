import React from 'react'

const cmprList = (props) => {
    const { data } = props

    const handleCreateItem = (item) => {
        return (
            <div className="col-3">
                <div className="card">
                    <img src={item.img} width={253} height={153} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">가격: {item.price}</p>
                    </div>
                </div>
            </div>
        )
    }

    /* RENDER */
    return (
        <div className="row justify-content-between">
            {data.map(item => handleCreateItem(item))}
        </div>
    )
}

export default cmprList