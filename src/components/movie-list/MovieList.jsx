export default function MovieList() {
    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">All Movies</h1>
                    <p className="text-slate-400 text-sm mt-2">Search + filter UI is static (great for layout practice).</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <div className="relative">
                        <input type="text" placeholder="Search movies..."
                            className="w-full sm:w-72 rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                        <span className="absolute right-3 top-2.5 text-slate-400 text-sm">⌕</span>
                    </div>

                    <select className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60">
                        <option>Sort: Popular</option>
                        <option>Sort: Rating</option>
                        <option>Sort: Year</option>
                    </select>

                    <a href="./create-movie.html"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                        + Create
                    </a>
                </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* <!-- Repeatable cards --> */}
                <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    href="./movie-details.html">
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="font-semibold text-lg group-hover:text-white">Interstellar</h3>
                                <p className="text-sm text-slate-400 mt-1">Sci-Fi · 2014</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★
                                8.6</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-300 line-clamp-3">Wormholes, time dilation, and a mission to save humanity.</p>
                        <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                            <span>2h 49m</span><span className="group-hover:text-indigo-200">Details →</span>
                        </div>
                    </div>
                </a>

                <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    href="./movie-details.html">
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="font-semibold text-lg group-hover:text-white">The Dark Knight</h3>
                                <p className="text-sm text-slate-400 mt-1">Action · 2008</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★
                                9.0</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-300 line-clamp-3">A battle for Gotham’s soul against the Joker.</p>
                        <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                            <span>2h 32m</span><span className="group-hover:text-indigo-200">Details →</span>
                        </div>
                    </div>
                </a>

                <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    href="./movie-details.html">
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="font-semibold text-lg group-hover:text-white">Spirited Away</h3>
                                <p className="text-sm text-slate-400 mt-1">Animation · 2001</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★
                                8.6</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-300 line-clamp-3">A stunning journey through a spirit world.</p>
                        <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                            <span>2h 5m</span><span className="group-hover:text-indigo-200">Details →</span>
                        </div>
                    </div>
                </a>

                <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    href="./movie-details.html">
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="font-semibold text-lg group-hover:text-white">Inception</h3>
                                <p className="text-sm text-slate-400 mt-1">Sci-Fi · 2010</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★
                                8.8</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-300 line-clamp-3">Dream layers, heists, and bending reality.</p>
                        <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                            <span>2h 28m</span><span className="group-hover:text-indigo-200">Details →</span>
                        </div>
                    </div>
                </a>

                <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    href="./movie-details.html">
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="font-semibold text-lg group-hover:text-white">Parasite</h3>
                                <p className="text-sm text-slate-400 mt-1">Thriller · 2019</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★
                                8.5</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-300 line-clamp-3">A sharp social satire with twists.</p>
                        <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                            <span>2h 12m</span><span className="group-hover:text-indigo-200">Details →</span>
                        </div>
                    </div>
                </a>

                <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    href="./movie-details.html">
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="font-semibold text-lg group-hover:text-white">The Matrix</h3>
                                <p className="text-sm text-slate-400 mt-1">Action · 1999</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★
                                8.7</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-300 line-clamp-3">Red pill, blue pill, and reality rewritten.</p>
                        <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                            <span>2h 16m</span><span className="group-hover:text-indigo-200">Details →</span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
