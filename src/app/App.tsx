import './styles/index.scss'

import { useTheme } from 'app/providers/themeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavBar } from 'widgets/navBar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'

function App() {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <div className="content-page">
          <Sidebar />

          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
