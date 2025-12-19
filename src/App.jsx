import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import './App.css'
import Login from "./components/login/Login"

function App() {
    return (
        <>
            <Header />

            <main className="mx-auto container-max px-4 py-10">
                {/* <Home /> */}
                <Login />
            </main>

            <Footer />
        </>
    )
}

export default App
