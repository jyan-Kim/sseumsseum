import "./Header.css";
import { useNavigate } from 'react-router-dom';


function Header({ toggleDarkMode, isDarkMode }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {/*로고 div*/}
      <div>
        <p onClick={() => navigate('/')}>로고</p>
      </div>
      {/*회원가입 로그인 div*/}
      <div className="auth">
        <div onClick={() => navigate('/signup')}>회원가입</div>
        <div onClick={() => navigate('/login')}>로그인</div>
        {/* 타원형 토글 스위치 */}
        <div className="toggle-switch" onClick={toggleDarkMode}>
          <div className={`slider${isDarkMode ? " dark" : ""}`}>
            {isDarkMode ? "☀️" : "🌙"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
