import React from 'react'

const recommendList = () => {
    const itemCount = [1, 2, 3, 4];
    const listItem = <div className="col-lg-3 col-6">
                        <div className="text-left">
                            <p>볼보</p>
                            <h4>2021 XC40</h4>
                            <span style={{ width: '20px', height: '1px', background: '#d2d2d2', display: 'block' }}></span>
                            <p>4,670~5,130만원</p>
                            <img className="float-right" src="https://imgauto-phinf.pstatic.net/20200819_1/auto_1597824307665Mn5d0_PNG/20200819170455_fIak5ChI.png?type=f152_110" />
                        </div>
                    </div>
    const list = itemCount.map(() => listItem)
    return (
        <div className="row justify-content-between mb-5">
            <div className="col-12">
                <h4 className="text-left mb-4">올해 신차</h4>
            </div>
            {list}
        </div>
    )
}

export default recommendList