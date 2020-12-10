import React from 'react';
/* 스타일 */
import './App.css';
/* 라우터 */
import { BrowserRouter, Link, Route, useHistory } from 'react-router-dom';

/* 컴포넌트 */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AjaxTest from './components/AjaxTest';
import CarList from './pages/CarList';
import MainContents from './components/MainContents';
import CmprResult from './pages/CmprResult';

/* users */
import SignIn from './pages/SignIn';


/**
 * App
 * --
 */
function App() {
  /* Render */
  return (
    <div className="App">
      {/* 상단 - 네비게이션 */}
      <Navbar />

      <div className="container">

        {/* 메인 검색바, 리스트 */}
        <Route exact path="/" component={MainContents} />
        {/* 자동차 비교 결과 페이지: 독립적인 페이지 */}
        <Route exact path="/cmprResult" component={CmprResult} />

        <Route exact path="/ajaxTest" component={AjaxTest} />
        <Route exact path="/cars" component={CarList} />

        <Route exact path="/signIn" component={SignIn} />
      </div>

      {/* 하단 - 푸터. 고정 */}
      <Footer />
    </div>
  );
}

export default App;
