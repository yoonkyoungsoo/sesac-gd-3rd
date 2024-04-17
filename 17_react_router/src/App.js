import { Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotoPage from "./pages/PhotoPage";

function App() {
  return (
    <div className="App">
      {/* <h1>routing!</h1>

        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes> */}

      {/* 
      라우팅 연습 2
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board/1" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <Header />
      {/* 라우팅 하기 */}
      {/* ProductPage 컴포넌트 경로: /products */}
      {/* ProductDetailPage 컴포넌트 경로: /products/1 */}
      {/* PhotoPage 컴포넌트 경로: /photos */}
      {/* 이외 모든 페이지 NotFound 컴포넌트 */}

      <ProductPage />
      <ProductDetailPage />
      <PhotoPage />
      <NotFound />
    </div>
  );
}

export default App;
