import React, { useEffect } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const CmprResult = ({ location, history }) => {
    /* 쿼리로 받은 모델 id */
    const query = queryString.parse(location.search);
    const ids = query.id && query.id.split(',');

    /* 데이터 */
    const [items, setItems] = React.useState([]);
    // console.log('set items');

    /* fetch data */
    useEffect(() => {
        // console.log('hook');
        if (!ids || ids.length > 6) {
            alert('잘못된 접근 입니다.')
            history.push('/')
        } else {
            // const fetchData = async () => {
            //     const result = await fetch('http://localhost:3001/cars')
            //         .then(res => res.json())
            //         .catch(err => console.log(err))

            //     setItems({ cars : result })
            // }
            // fetchData();
            // console.log('fetch');
            fetch('http://localhost:3001/cars')
                .then(res => res.json())
                .then(data => {
                    // items 가공 데이터
                    // const filterData = data.cars.filter(car => car.year === '2020')
                    // const dataCopy = [...data.cars];
                    // console.log('dataCopy : ', dataCopy);
                    const itemsFilterData = [];
                    // // 선택아이디 반복
                    ids.map(id => {
                        // car 데이터 반복
                        data.cars.map(car => {
                            if (car.id == id) {
                                // console.log(car.id == id);
                                itemsFilterData.push(car);
                            }
                        })
                    });
                    // debugger
                    setItems(itemsFilterData);
                    // console.log(data);
                    // console.log(data.cars);
                    // setItems(data);
                })
                .catch(err => console.log(err));
        }
    }, []);

    /* item element */
    const handleCreateItem = (item) => {
        const itemsLength = items.length;

        return (
            <div className="col-2 px-0" key={item.id}
                style={{ maxWidth: "calc((100% - 16.666667%)/" + itemsLength + ")", flex: "none" }}>
                <div style={{ height: "200px", borderBottom: "1px solid #ddd" }}>
                    <Link to="#" className="">
                        <img src={item.modelImg} alt={item.name} />
                    </Link>
                    <div className="mt-3">
                        <span>{item.brand}</span>
                        <h6 className="">{item.name}</h6>
                    </div>
                </div>
                <ul className="list-unstyled cmpr-list-content">
                    <li>{item.price}</li>
                    <li>-</li>
                    <li>-</li>
                    <li>{item.year}</li>
                </ul>
                <ul className="list-unstyled cmpr-list-content">
                    <li>엔진형식</li>
                    <li>과급방식</li>
                    <li>배기량</li>
                    <li>연료</li>
                    <li>연비(등급)</li>
                    <li>최대출력</li>
                    <li>합산출력</li>
                    <li>모터최대출력</li>
                    <li>승차인원</li>
                    <li>구동방식</li>
                    <li>변속기</li>
                </ul>
                <ul className="list-unstyled cmpr-list-content">
                    <li>가동식 스포일러</li>
                    <li>글라스 루프</li>
                    <li>열선 스티어링</li>
                    <li>버튼식 시동장치</li>
                    <li>코너링 램프</li>
                    <li>사각지대 감시장치</li>
                    <li>서라운드 모니터</li>
                    <li>자동주차</li>
                    <li>스타트-스톱</li>
                    <li>토크 벡터링</li>
                </ul>
            </div>
        )
    }

    /* save list */
    const handleSaveList = () => {
        alert('준비중')
    }

    /* RENDER */
    return (
        <React.Fragment>
            <h4>모델비교</h4>
            <div className="row text-left my-5 cmpr-list">
                {/* 테이블 항목 */}
                <div className="col-2 px-0">
                    <div className="" style={{ height: "200px", borderBottom: "1px solid #ddd" }}></div>
                    {/* <p className="">기본정보</p> */}
                    <ul className="list-unstyled cmpr-list-subject">
                        <li>신차가격</li>
                        <li>차종(배기량 기준)</li>
                        <li>외형 Type</li>
                        <li>연식(출시년월)</li>
                    </ul>
                    <ul className="list-unstyled cmpr-list-subject">
                        <li>엔진형식</li>
                        <li>과급방식</li>
                        <li>배기량</li>
                        <li>연료</li>
                        <li>연비(등급)</li>
                        <li>최대출력</li>
                        <li>합산출력</li>
                        <li>모터최대출력</li>
                        <li>승차인원</li>
                        <li>구동방식</li>
                        <li>변속기</li>
                    </ul>
                    <ul className="list-unstyled cmpr-list-subject">
                        <li>가동식 스포일러</li>
                        <li>글라스 루프</li>
                        <li>열선 스티어링</li>
                        <li>버튼식 시동장치</li>
                        <li>코너링 램프</li>
                        <li>사각지대 감시장치</li>
                        <li>서라운드 모니터</li>
                        <li>자동주차</li>
                        <li>스타트-스톱</li>
                        <li>토크 벡터링</li>
                    </ul>
                </div>

                {/* 테이블 데이터 */}
                { items && items.map(item => (handleCreateItem(item))) }

            </div>

            {/* 저장 */}
            <button type="button" onClick={() => handleSaveList()} className="btn btn-primary mb-5">저장</button>
        </React.Fragment>
    )
}

export default CmprResult