import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import './App.css'
import Login from "./components/login/Login"
import { Route, Routes } from "react-router"

function App() {
    return (
        <>
            <Header />

            <main className="mx-auto container-max px-4 py-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App
