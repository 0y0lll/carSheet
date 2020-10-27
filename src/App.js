import React from 'react';
/* 스타일 */
import './App.css';
/* 라우터 */
import { BrowserRouter, Link, Route, useHistory } from 'react-router-dom'
/* 컴포넌트 */
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import RecommendList from './components/RecommendList'
import MainList from './components/MainList'
import Footer from './components/Footer'

import CmprResult from './components/CmprResult'
import AjaxTest from './components/AjaxTest'

const cars = [
  {
    id: 1,
    name: '2020 쏘나타',
    brand: '현대',
    price: '2,386~3,367만원',
    img: 'https://img.danawa.com/images/news/images/000269/20190416133714529_T31QSVL9.jpg',
    checked: false
  },
  {
    id: 2,
    name: '2020 아반떼',
    brand: '현대',
    price: '1,570~2,779만원',
    img:'https://cdn.top-rider.com/news/photo/201811/27636_93030_1710.jpg',
    checked: false
  },
  {
    id: 3,
    name: '2021 K5',
    brand: '기아',
    price: '2,356~3,151만원',
    img:'https://post-phinf.pstatic.net/MjAyMDEwMTZfMTQ3/MDAxNjAyODA4MTE0NzI4.1klBz0RKXx6rsjtBBD8agvxx_WUMY0ReO0dwfzvaIOsg.0LjdWkAMXyAv715F3XHBQKNo5TNqFpb7pmA9MvD6dHIg.JPEG/image_2804645871602808093548.jpg?type=w1200',
    checked: false
  },
  {
    id: 4,
    name: '2021 셀토스',
    brand: '기아',
    price: '1,934~2,896만원',
    img: 'https://cdn.top-rider.com/news/photo/201906/28274_100463_270.jpg',
    checked: false
  },
  {
    id: 5,
    name: '2021 볼보 XC40',
    brand: '볼보',
    price: '4,670~5,130만원',
    img: 'https://lh3.googleusercontent.com/proxy/0eIQBlSs9GdTDyaYKLhgQV2kxz59OkatB_Mtfc8QJ9gwnRqss-RtEqr4bDnrezpc3Im78sW9HLyBpAvXR0f9y7bm0TcH5izWZMzPoGWXRhIBClPDAo7ak8FRIRnjn9AYGbe1qZOk',
    checked: false
  },
  {
    id: 6,
    name: '2020 폭스바겐 제타',
    brand: '폭스바겐',
    price: '2,714~2,951만원',
    img:'https://t1.daumcdn.net/cfile/tistory/99D82D385C0F6A022C',
    checked: false
  },
  {
    id: 7,
    name: '2020 벤츠 G클래스 AMG',
    brand: '벤츠',
    price: '21,500~24,300만원',
    img:'https://www.autodaily.co.kr/news/photo/202003/417408_51610_2715.jpg',
    checked: false
  },
  {
    id: 8,
    name: '2020 포르쉐 카이엔 GTS',
    brand: '포르쉐',
    price: '미정',
    img: 'https://post-phinf.pstatic.net/MjAyMDA5MTZfMzAw/MDAxNjAwMjEyNDg2MDMy.0yEvTPnRADuQ3lNHpj9Mny6a74b4mzTYeZAjFUhaUmkg.iKZqCXcJ9TsKQvtxJ1dsq5cFL-cGMWzEovLmJAMUwhog.JPEG/2020-porsche-cayenne-GTS-1.jpg?type=w1200',
    checked: false
  },
]

/**
 * App
 * --
 */
function App() {
  /* State */
  // 현재페이지 상태
  // const [page, setPage] = React.useState('main');
  // 아이템 상태
  const [selectMode, setSelectMode] = React.useState(false)
  //
  const [items, setItems] = React.useState(cars);
  // router location
  const history = useHistory();

  /*  */
  // let searchBar;
  // let recommendList;
  // let mainList;

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
    const itemsCopy = items.slice(0)
    const fid = itemsCopy.findIndex(item => {
      return item.id === id
    })
    itemsCopy[fid].checked = !itemsCopy[fid].checked
    setItems(itemsCopy)
  }

  /**
   * 선택한 항목 리스트 생성 함수
   * --
   */
  const handleSelectedList = () => {
    // console.log(items.filter(item => item.checked === true));
    const selectedItems = items.filter(item => item.checked === true)
    if (selectedItems.length <= 1) {
      alert('비교할 대상을 둘 이상 선택하세요.')
      return false
    } else {
      // sub1페이지로 데이터 전송
      let query = '?id='
      selectedItems.map(item => {
          query += item.id + ','
      })
      query = query.slice(0, -1)
      history.push(`/cmprResult${query}`)
    }
  }

  /* Render */
  return (
    <div className="App">
      {/* 상단 - 네비게이션 */}
      <Navbar />

      <div className="container">
        {/* 메인 상단 - 검색영역 */}
        <Route exact path="/" component={SearchBar} />
        {/* {searchBar} */}

        {/* 메인 상단 - 추천 아이템 리스트 : 최소 5개, 최대 10개 출력. 6개 이후 슬라이드 */}
        <Route exact path="/" component={RecommendList} />

        {/* 메인 콘텐츠 - 인기별 아이템 리스트 : 한줄에 4개씩 출력. 무한 스크롤*/}
        <Route exact path="/"
          render={() =>
            <MainList
              data={items}
              selectMode={selectMode}
              onChangeSelectMode={() => handleSelectItem()}
              onChangeCheck={(id) => handleChangeCheck(id)}
              onCreateList = {() => handleSelectedList()}
            />
          } />

        {/* test */}
        <Route exat path="/cmprResult" component={CmprResult}/>
        <Route exat path="/ajaxTest" component={AjaxTest} />

        {/* item view */}
        {/* <Route path="/view/:id" component={} /> */}

        {/*
          선택한 아이템을 다른 페이지로 넘겨보기!! 콘솔이나 어디든 출력해보기!!
          react에서 ajax로 jsonplaceholder 데이터를 가져와서 상태에 담기!!
        */}
      </div>

      {/* 하단 - 푸터. 고정 */}
      <Footer />
    </div>
  );
}

export default App;
