import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"

function App() {
    return (
        <>
            <Header />

            <main className="mx-auto container-max px-4 py-10">
                <Home />
            </main>

            <Footer />
        </>
    )
}

export default App
