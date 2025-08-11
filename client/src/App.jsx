import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { useEffect } from 'react'
import './App.css'

function App() {
  //다크모드 상태관리 
  const [isDarkMode, setIsDarkMode] = useState(false)
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark')
    setIsDarkMode(isDark)
    localStorage.setItem('theme' ,isDark ? 'dark':'light')
  }
  //페이지가 처음로드 될때 localStorage에서 테마를 읽어와 적용
  useEffect(()=> {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.body.classList.add('dark')
      setIsDarkMode(true)
    }
  }, [])
  return (
    <>
    <BrowserRouter>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <AppRoutes />
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default App
