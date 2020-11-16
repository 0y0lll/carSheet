import React, { useEffect } from 'react';
/* 스타일 */
import './App.css';
/* 라우터 */
import { BrowserRouter, Link, Route, useHistory } from 'react-router-dom'

/* 컴포넌트 */
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import SearchBar from './components/SearchBar'
import RecommendList from './components/RecommendList'
import MainList from './components/MainList'
import CmprResult from './components/CmprResult'
import AjaxTest from './components/AjaxTest'

import CarList from './pages/CarList'


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
  }, [])

  /**
   * Node.js 테스트
   * --
   */
  // const nodeTest = () => {
  //   fetch('http://localhost:3001/cars')
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }
  // nodeTest()

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
    */
    // const itemsCopy = items.slice(0)
    const itemsCopy = JSON.parse(JSON.stringify(items.cars))
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
    // console.log(items);
    // console.log(items.filter(item => item.checked === true));
    const selectedItems = JSON.parse(JSON.stringify(items.cars)).filter(item => item.checked === true)
    if (selectedItems.length <= 1) {
      alert('비교할 대상을 둘 이상 선택하세요.')
      return false
    } else {
      // sub1페이지로 데이터 전송
      let query = '?id=';
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
        <SearchBar />
        {/* <Route exact path="/" component={SearchBar} /> */}
        {/* {searchBar} */}

        {/* 메인 상단 - 추천 아이템 리스트 : 최소 5개, 최대 10개 출력. 6개 이후 슬라이드 */}
        <Route exact path="/"
          render={() =>
            <RecommendList
              data={items}
              // data={() => onLoadItems()}
            />
          }
        />

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
          }
        />

        <Route exat path="/cmprResult" component={CmprResult}/>
        <Route exat path="/ajaxTest" component={AjaxTest} />
        <Route exat path="/cars" component={CarList} />

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
