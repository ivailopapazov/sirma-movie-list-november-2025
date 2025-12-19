import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import './App.css'
import Login from "./components/login/Login"
import { Route, Routes } from "react-router"
import MovieCreate from "./components/movie-create/MovieCreate"
import Register from "./components/register/Register"
import MovieList from "./components/movie-list/MovieList"
import { ToastContainer } from "react-toastify"

function App() {
    return (
        <>
            <Header />

            <ToastContainer />

            <main className="mx-auto container-max px-4 py-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/movies" element={<MovieList />} />
                    <Route path="/create-movie" element={<MovieCreate />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App
