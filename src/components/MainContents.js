import React, { useEffect } from 'react';

/* 라우터 */
import { BrowserRouter, Link, Route, useHistory } from 'react-router-dom';

/* 컴포넌트 */
import RecommendList from './RecommendList';
import MainList from './MainList';
import SearchBar from '../components/SearchBar';

const MainContents = () => {
    /* State */
    // 아이템 상태
    const [selectMode, setSelectMode] = React.useState(false)
    // 아이템
    const [items, setItems] = React.useState();
    // router location
    const history = useHistory();

    /**
     * 아이템 목록 불러오기
     * --
     * items에 setItems 하기 위한 함수
    */
    useEffect(() => {
        fetch('http://localhost:3001/cars')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.log(err));
    }, []);

    /**
     * 항목선택 시 발생하는 함수
     * --
    */
    const handleSelectItem = () => {
        // const itemsCopy = items.slice(0)
        // const fid = itemsCopy.findIndex(item => {
        //   return item.checked === true
        // })
        // if (fid > -1) {
        //   itemsCopy[fid].checked = false
        //   setItems(itemsCopy)
        // }
        setSelectMode(!selectMode)
    }

    /**
     * 항목선택 시 checked 상태 변경 함수
     * --
     * @param {*} id
    */
    const handleChangeCheck = (id) => {
        /*
        object를 slice하여 복제할 수 없으므로 꼼수 써야함
        JSON.stringify -> JSON.parse
        이건 옳지 않은 방법!! 전개연산자를 사용하자
        */
        // const itemsCopy = items.slice(0)
        // const itemsCopy = JSON.parse(JSON.stringify(items.cars))
        const itemsCopy = [...items.cars];
        const fid = itemsCopy.findIndex(item => {
            return item.id === id
        })
        itemsCopy[fid].checked = !itemsCopy[fid].checked
        setItems({cars: itemsCopy})
    }

    /**
     * 선택한 항목 리스트 생성 함수
     * --
     */
    const handleSelectedList = () => {
        const selectedItems = JSON.parse(JSON.stringify(items.cars)).filter(item => item.checked === true)
        if (selectedItems.length <= 1) {
            alert('비교할 대상을 둘 이상 선택하세요.');
            return false
        } else if (selectedItems.length > 5) {
            alert('최대 5개까지 선택가능 합니다.');
            return false
        } else {
            // cmprResult 로 데이터 전송
            let query = '?id=';
            selectedItems.map(item => {
                query += item.id + ',';
            })
            query = query.slice(0, -1);
            history.push(`/cmprResult${query}`);
            // console.log(selectedItems);
        }
    }

    /* RENDER */
    return (
        <React.Fragment>
            <SearchBar />
            {/* 메인 상단 - 추천 아이템 리스트 : 최소 5개, 최대 10개 출력. 6개 이후 슬라이드 */}
            <RecommendList
                data={items}
                // data={() => onLoadItems()}
            />

            {/* 메인 콘텐츠 - 인기별 아이템 리스트 : 한줄에 4개씩 출력. 무한 스크롤*/}
            <MainList
                data={items}
                selectMode={selectMode}
                onChangeSelectMode={() => handleSelectItem()}
                onChangeCheck={(id) => handleChangeCheck(id)}
                onCreateList = {() => handleSelectedList()}
            />
        </React.Fragment>
    )
}

export default MainContents;