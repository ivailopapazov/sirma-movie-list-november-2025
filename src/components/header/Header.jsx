export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
            <nav className="mx-auto container-max px-4 py-3 flex items-center justify-between">
                <a href="./index.html" className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 border border-indigo-400/30">
                        🎬
                    </span>
                    <span className="font-semibold tracking-wide">MovieList</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <a href="./index.html" className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10">Home</a>
                    <a href="./movies.html" className="px-3 py-2 rounded-lg hover:bg-white/10">Movies</a>
                    <a href="./create-movie.html" className="px-3 py-2 rounded-lg hover:bg-white/10">Create</a>
                </div>

                <div className="flex items-center gap-2">
                    <a href="./login.html" className="px-3 py-2 rounded-lg hover:bg-white/10">Login</a>
                    <a href="./register.html" className="px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                        Register
                    </a>

                    {/* <!-- Mobile menu hint (static) --> */}
                    <span className="md:hidden text-xs text-slate-400 ml-2">☰</span>
                </div>
            </nav>
        </header>
    );
}
