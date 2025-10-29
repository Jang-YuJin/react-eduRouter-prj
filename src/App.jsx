import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom';
import AllProduct from './page/AllProduct'
import Login from './page/Login'
import { Analytics } from "@vercel/analytics/react"
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품, 로그인, 상품상세 페이지
// 1-1. Navbar 만들기

// 2. 전체상품 페이지는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나옴
// 4. 로그인이 되었을 경우 상품상세 페이지를 볼 수 있다.

// 5. 로그아웃 버튼을 클릭하면 로그아웃
// 6. 로그아웃이 되면 상품상세 페이지를 볼 수 없다. 다시 로그인 페이지 보임
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보임
// 8. 상품을 검색할 수 있다.

function App() {
  const [selectMenu, setSelectMenu] = useState('');
  const [authenticate, setAuthenticate] = useState(false);
  const [viewType, setViewType] = useState('Grid');

  return (
    <>
      <Navbar setSelectMenu={setSelectMenu} selectMenu={selectMenu} authenticate={authenticate} setAuthenticate={setAuthenticate}></Navbar>
      <Routes>
        <Route path='/' element={<AllProduct viewType={viewType} setViewType={setViewType}></AllProduct>}></Route>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}></Login>}></Route>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}></PrivateRoute>}></Route>
      </Routes>
    </>
  )
}

export default App
