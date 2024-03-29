import React from 'react';
import { ROUTE_ARR } from './routes';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
// import Nav from './pages/Layout/navbar/NavBar';
// import Footer from './pages/Layout/footer/Footer';
// import Main from './pages/main/Main';
// import MyPage from './pages/mypage/Mypage';
// import Login from './pages/login/Login';
// import SignUp from './pages/signup/SignUp';
// import CommunityMain from './pages/community/CommunityMain';
// import CommunityWrite from './pages/community/CommunityWrite';
// import CommunityDetail from './pages/community/CommunityDetail';

/*
  회원가입 : /register
  로그인 : /login
  사용자 정보 조회 : /users/:userId
  사용자 정보 수정 : /users/:userId
  사용자 정보 삭제 : /users/:userId
  메인 페이지 : /
  모임 메인 : /users/groups
  모임 상세 : /users/groups/:groupId
  모임 등록 : /users/groups/
  모임 수정 : /users/groups/:groupId 
  모임 삭제 : /users/groups/:groupId 
  댓글 등록 : /user/comments/:commentsId
  댓글 수정 : /user/comments/:commentsId
  댓글 삭제 : /user/comments/:commentsId
*/
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<SignUp />} />
//         <Route path="/users/:userId" element={<MyPage />} />
//         <Route path="/users/groups" element={<CommunityMain />} />
//         <Route path="/users/groups/:groupId" element={<CommunityDetail />} />
//         <Route path="/users/groups/new" element={<CommunityWrite />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default Router;

/// 코드리뷰반영 ///

const Router = () => {
  return (
    <>
      <Nav />
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
