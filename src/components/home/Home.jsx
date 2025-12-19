export default function Home() {
    return (
        <>
            <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-950 p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Discover your next favorite movie</h1>
                        <p className="mt-3 text-slate-300 max-w-2xl">
                            Static workshop project: browse movies, view details, and practice forms and layouts with Tailwind.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <a href="./movies.html"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">
                            Browse all
                        </a>
                        <a href="./create-movie.html"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                            Add a movie
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- TOP 3 --> */}
            <section className="mt-10">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold">Most Popular</h2>
                        <p className="text-slate-400 text-sm mt-1">Top 3 movies this week (static data).</p>
                    </div>
                    <a href="./movies.html" className="text-indigo-300 hover:text-indigo-200 text-sm">View all →</a>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* <!-- Card 1 --> */}
                    <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                        href="./movie-details.html">
                        <div className="p-5">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-semibold text-lg group-hover:text-white">Interstellar</h3>
                                    <p className="text-sm text-slate-400 mt-1">Sci-Fi · 2014</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
                                    ★ 8.6
                                </span>
                            </div>

                            <p className="mt-4 text-sm text-slate-300 line-clamp-3">
                                A team travels through a wormhole in space in an attempt to ensure humanity’s survival.
                            </p>

                            <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                                <span>2h 49m</span>
                                <span className="group-hover:text-indigo-200">Details →</span>
                            </div>
                        </div>
                    </a>

                    {/* <!-- Card 2 --> */}
                    <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                        href="./movie-details.html">
                        <div className="p-5">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-semibold text-lg group-hover:text-white">The Dark Knight</h3>
                                    <p className="text-sm text-slate-400 mt-1">Action · 2008</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
                                    ★ 9.0
                                </span>
                            </div>

                            <p className="mt-4 text-sm text-slate-300 line-clamp-3">
                                Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.
                            </p>

                            <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                                <span>2h 32m</span>
                                <span className="group-hover:text-indigo-200">Details →</span>
                            </div>
                        </div>
                    </a>

                    {/* <!-- Card 3 --> */}
                    <a className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                        href="./movie-details.html">
                        <div className="p-5">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-semibold text-lg group-hover:text-white">Spirited Away</h3>
                                    <p className="text-sm text-slate-400 mt-1">Animation · 2001</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
                                    ★ 8.6
                                </span>
                            </div>

                            <p className="mt-4 text-sm text-slate-300 line-clamp-3">
                                A girl enters a world of spirits and must find her way back to the human realm.
                            </p>

                            <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                                <span>2h 5m</span>
                                <span className="group-hover:text-indigo-200">Details →</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}
