import { Routes, Route, Link } from 'react-router-dom'
import React, { Suspense, useContext, useState } from 'react'
import { Theme } from './theme/theme.context'
import './styles/index.scss'
import { AboutPageAsync } from './pages/aboutPage/aboutPageAsync'
import { MainPageAsync } from './pages/mainPage/mainPageAsync'
import { ThemeContext } from './theme/theme.context'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
