import React from 'react'

const Login = () => {
  return (
    <div className='login-form-container'>
      <div className='id-container'><input className='id-input' type='text' id='id' placeholder='아이디'></input></div>
      <div className='password-container'><input className='password-input' type='password' id='password' placeholder='비밀번호'></input></div>
      <div className='login-btn-container'>
        <button className='login-btn'>로그인</button>
      </div>
      <div className='find-login-info-container'>
        <div className='signup'>회원가입</div>
        <div className='search-id'>아이디 찾기</div>
        <div className='search-password'>비밀번호 찾기</div>
      </div>
    </div>
  )
}

export default Login
