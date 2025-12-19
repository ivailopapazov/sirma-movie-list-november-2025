export default function MovieCreate() {
    return (
        <>
            <div class="flex items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl md:text-3xl font-bold">Create Movie</h1>
                    <p class="text-slate-400 text-sm mt-2">Use this page for create (and later reuse for edit).</p>
                </div>
                <a href="./movies.html" class="text-sm text-slate-300 hover:text-white">Cancel</a>
            </div>

            <section class="mt-6 grid gap-6 lg:grid-cols-3">
                <div class="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
                    <form action="#" method="post" class="space-y-5">
                        <div>
                            <label class="block text-sm text-slate-300 mb-2" htmlFor="title">Title</label>
                            <input id="title" name="title" type="text" placeholder="e.g. Interstellar"
                                class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label class="block text-sm text-slate-300 mb-2" htmlFor="year">Year</label>
                                <input id="year" name="year" type="number" placeholder="2014"
                                    class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                            </div>

                            <div>
                                <label class="block text-sm text-slate-300 mb-2" htmlFor="genre">Genre</label>
                                <select id="genre" name="genre"
                                    class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60">
                                    <option>Action</option>
                                    <option>Drama</option>
                                    <option>Sci-Fi</option>
                                    <option>Thriller</option>
                                    <option>Animation</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label class="block text-sm text-slate-300 mb-2" htmlFor="duration">Duration (minutes)</label>
                                <input id="duration" name="duration" type="number" placeholder="169"
                                    class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                            </div>

                            <div>
                                <label class="block text-sm text-slate-300 mb-2" htmlFor="rating">Rating</label>
                                <input id="rating" name="rating" type="number" step="0.1" min="0" max="10" placeholder="8.6"
                                    class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm text-slate-300 mb-2" htmlFor="director">Director</label>
                            <input id="director" name="director" type="text" placeholder="e.g. Christopher Nolan"
                                class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                        </div>

                        <div>
                            <label class="block text-sm text-slate-300 mb-2" htmlFor="overview">Overview</label>
                            <textarea id="overview" name="overview" rows="5" placeholder="Short description..."
                                class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60"></textarea>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end pt-2">
                            <a href="./movies.html" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-center">
                                Cancel
                            </a>
                            <button type="submit" class="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                                Save Movie
                            </button>
                        </div>
                    </form>
                </div>

                <aside class="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 class="text-lg font-semibold">Preview</h2>
                    <p class="text-sm text-slate-400 mt-2">Static preview block. Later: update live with JS.</p>

                    <div class="mt-5 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <p class="font-semibold">Movie Title</p>
                                <p class="text-sm text-slate-400">Genre · Year</p>
                            </div>
                            <span class="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★ 0.0</span>
                        </div>
                        <p class="mt-3 text-sm text-slate-300">Your overview will appear here…</p>
                    </div>
                </aside>
            </section>

        </>
    );
}
