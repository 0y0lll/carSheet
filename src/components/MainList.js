import React from 'react'
import { Link } from 'react-router-dom'
/* fontawesome */
import './FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mainList = (props) => {
    const {
        data,
        selectMode,
        onChangeCheck,
        onChangeSelectMode,
        onCreateList
    } = props;

    const cmprItemPicker = <div className="position-relative">
                                <div className="position-absolute cmpr-item-picker-wrap">
                                    <span className="d-flex align-items-center justify-content-center cmpr-item-picker">
                                        <FontAwesomeIcon icon="check" />
                                    </span>
                                </div>
                            </div>

    const handleCreateItem = (item) => {
        return (
            <div className="col-3 mb-3" key={item.id}>
                { item.checked && selectMode ? cmprItemPicker : '' }

                <img src={item.conceptImg} width={253} height={153} alt="..." />
                <div className="mt-3 text-left">
                    <span>{item.brand}</span>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">출시가 {item.price}</p>
                    {/* <a href="#" className="btn btn-primary stretched-link">Go somewhere</a> */}
                    {!selectMode
                        ? <Link to="#" className="stretched-link"></Link>
                        : <Link to="#" className="stretched-link" onClick={() => onChangeCheck(item.id)}></Link>
                    }
                </div>
            </div>
        )
    }

    /* RENDER */
    return (
        <React.Fragment>
            <div className="row justify-content-between">
                <div className="col-12 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-left mb-0">모델비교</h4>
                        {!selectMode
                            ? <button className="btn btn-primary" onClick={() => onChangeSelectMode()}>선택</button>
                            : (
                                <div>
                                    <button className="btn btn-primary" onClick={() => onCreateList()}>비교</button>
                                    <button className="btn btn-danger" onClick={() => onChangeSelectMode()}>취소</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                {/* <div className=""> */}
                {/* {data && data.map(item => handleCreateItem(item))} */}
                {data && data.cars && data.cars.map(car => (handleCreateItem(car)))}
                {/* </div> */}
            </div>
        </React.Fragment>
    )
}

export default mainList