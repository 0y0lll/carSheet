import React, { useEffect } from 'react'

const CmprResult = () => {
    const [ postData, setPostData ] = React.useState([])
    /**
     * fetch Test
     * --
     */
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                // .then(data => console.log(data.map(el => el.id)))
                // .then(data => this.setState({ postData : data }))
                .catch(err => console.log(err))
            setPostData(result)
        }
        fetchData()
    }, []);

    // console.log('FetchData : ', postData);

    /* RENDER */
    return (
        <React.Fragment>
            <h4 className="text-left">테스트</h4>
            {/* <p className="mb-0">{postData.filter(post => post.id <= 10).map(post => post.id)}</p> */}

            {/* 썸네일 */}
            <div className="row justify-content-between cmpr-table">
                <div className="col-3 cmpr-table-col"></div>
                {postData.filter((post,index) => index < 3).map(post => (
                    <div className="col-3 cmpr-table-col cmpr-thumbnail" key={post.id}>
                        <img src="https://img.khan.co.kr/news/2019/10/07/l_2019100701000915200069141.jpg" width="253" height="153" alt="..."/>
                    </div>
                ))}
            </div>

            {/* 제품별 이름 */}
            <div className="row justify-content-between align-items-center cmpr-table">
                <div className="col-3 cmpr-table-col text-col">
                    <p className="my-2 text-left">모델명</p>
                    <p className="my-2 text-left">트림</p>
                </div>
                {postData.filter(post => post.id <= 3).map(post => (
                    <div className="col-3 text-left cmpr-table-col text-col" key={post.id}>
                        <p className="my-2">{post.title.substr(0, 5)}</p>
                        <p className="my-2">트림</p>
                    </div>
                ))}
            </div>

            {/* 제품별 기본정보 */}
            <div className="row justify-content-between cmpr-table">
                <div className="col-3 cmpr-table-col">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mb-0 cmpr-table-th">기본정보</p>
                        <ul className="list-unstyled mb-0 cmpr-table-td cmpr-table-list">
                            <li class="list-head">정보</li>
                            <li class="list-head">정보</li>
                            <li class="list-head">정보</li>
                        </ul>
                    </div>
                </div>
                {postData.filter(post => post.id <= 3).map(post => (
                    <div className="col-3 cmpr-table-col">
                        <ul className="list-unstyled mb-0 cmpr-table-list">
                            <li>{post.title.substr(0, 5)}</li>
                            <li>{post.title.substr(0, 5)}</li>
                            <li>{post.title.substr(0, 5)}</li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* 제품별 제원/성능 */}
            <div className="row justify-content-between cmpr-table">
                <div className="col-3 cmpr-table-col">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mb-0 cmpr-table-th">제원/성능</p>
                        <ul className="list-unstyled mb-0 cmpr-table-td cmpr-table-list">
                            <li class="list-head">정보</li>
                            <li class="list-head">정보</li>
                            <li class="list-head">정보</li>
                        </ul>
                    </div>
                </div>
                {postData.filter(post => post.id <= 3).map(post => (
                    <div className="col-3 cmpr-table-col">
                        <ul className="list-unstyled mb-0 cmpr-table-list">
                            <li>{post.title.substr(0, 5)}</li>
                            <li>{post.title.substr(0, 5)}</li>
                            <li>{post.title.substr(0, 5)}</li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* 제품별 옵션 */}
            <div className="row justify-content-between cmpr-table">
                <div className="col-3 cmpr-table-col">
                    <div className="d-flex align-items-center">
                        <p className="mb-0 mb-0 cmpr-table-th">옵션</p>
                        <ul className="list-unstyled mb-0 cmpr-table-td cmpr-table-list">
                            <li class="list-head">정보</li>
                            <li class="list-head">정보</li>
                            <li class="list-head">정보</li>
                        </ul>
                    </div>
                </div>
                {postData.filter(post => post.id <= 3).map(post => (
                    <div className="col-3 cmpr-table-col">
                        <ul className="list-unstyled mb-0 cmpr-table-list">
                            <li>{post.title.substr(0, 5)}</li>
                            <li>{post.title.substr(0, 5)}</li>
                            <li>{post.title.substr(0, 5)}</li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* <div className="row justify-content-center">
                {postData.filter(post => post.id <= 3).map(post => (
                    <div className="col-4">
                        <div className="card" key={post.id}>
                            <img src="" width={253} height={153} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="mb-0 card-text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </React.Fragment>
    )
}

export default CmprResult
