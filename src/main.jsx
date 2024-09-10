import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/Page404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'genre', element: <GenreListPage /> },
      { path: 'movie', element: <MovieListPage /> },
      { path: 'movie/:id', element: <MovieDetailPage /> },
      { path: 'movie/:ge', element: <MoviesByGenrePage /> },
      { path: '*', element: <PageNotFound /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
