import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter(
  [{
    path: "/",
    element: <> <Head /><Body /></>,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      }
    ]
  }],
  {
    basename: "/clone-youtube"  // ✅ Add this line
  }
)

function App() {

  return (
    <Provider store={store}>
      <div>

        <RouterProvider router={appRouter} />

      </div>
    </Provider>
  )
}

export default App
