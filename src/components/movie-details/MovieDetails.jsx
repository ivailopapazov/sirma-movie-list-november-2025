export default function MovieDetails() {
    return (
        <>

            <div className="flex items-center justify-between gap-4">
                <a href="./movies.html" className="text-sm text-slate-300 hover:text-white">← Back to Movies</a>
                <span className="text-xs text-slate-400">Movie ID: 0001</span>
            </div>

            <section className="mt-6 grid gap-6 lg:grid-cols-3">
                {/* <!-- Poster/Meta --> */}
                <div className="lg:col-span-1">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <div className="aspect-[2/3] rounded-2xl bg-gradient-to-br from-indigo-500/25 via-slate-900 to-slate-950 border border-white/10 flex items-center justify-center">
                            <span className="text-6xl">🍿</span>
                        </div>

                        <div className="mt-5">
                            <div className="flex items-start justify-between gap-3">
                                <h1 className="text-2xl font-bold leading-tight">Interstellar</h1>
                                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★ 8.6</span>
                            </div>

                            <p className="mt-2 text-slate-400">Sci-Fi · 2014 · 2h 49m</p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Space</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Drama</span>
                                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Adventure</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Details --> */}
                <div className="lg:col-span-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-semibold">Overview</h2>
                                <p className="mt-3 text-slate-300 leading-relaxed">
                                    In Earth’s future, a global crop blight and dust storms are slowly rendering the planet uninhabitable.
                                    A team of explorers travels through a wormhole in space in an attempt to ensure humanity’s survival.
                                </p>
                            </div>

                            {/* <!-- ACTIONS --> */}
                            <div className="flex flex-wrap gap-2 md:justify-end">
                                <button
                                    type="button"
                                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm"
                                >
                                    ❤️ Like
                                </button>

                                <a
                                    href="./create-movie.html"
                                    className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold text-sm inline-flex items-center justify-center"
                                >
                                    ✏️ Edit
                                </a>

                                <button
                                    type="button"
                                    className="px-4 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/30 text-rose-200 text-sm"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>

                        <hr className="my-6 border-white/10" />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                                <p className="text-xs text-slate-400">Director</p>
                                <p className="mt-1 font-medium">Christopher Nolan</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                                <p className="text-xs text-slate-400">Release Date</p>
                                <p className="mt-1 font-medium">2014-11-07</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                                <p className="text-xs text-slate-400">Language</p>
                                <p className="mt-1 font-medium">English</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                                <p className="text-xs text-slate-400">Budget</p>
                                <p className="mt-1 font-medium">$165M</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Comments area (static placeholder) --> */}
                    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-semibold">Notes</h3>
                        <p className="text-slate-400 text-sm mt-2">Optional workshop extension: add comments UI.</p>

                        <div className="mt-4 flex gap-2">
                            <input
                                type="text"
                                placeholder="Write a note..."
                                className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60"
                            />
                            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
