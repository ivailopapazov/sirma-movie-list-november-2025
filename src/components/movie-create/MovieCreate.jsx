import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function MovieCreate() {
    const navigate = useNavigate();
    const cerateMovieHandler = async (formData) => {
        const movieData = Object.fromEntries(formData);

        try {
            const result = await fetch('https://sirma-movie-list-november-2025-default-rtdb.firebaseio.com/movies.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movieData)
            });

            if (!result.ok) {
                throw new Error('Failed to create movie.');
            }
            
            toast.success('Movie created successfully!');

            navigate('/movies');
        } catch (error) {
            toast.error('Error creating movie: ' + error.message);
            return;
        }
    }

    return (
        <>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Create Movie</h1>
                    <p className="text-slate-400 text-sm mt-2">Use this page for create (and later reuse for edit).</p>
                </div>
                <a href="./movies.html" className="text-sm text-slate-300 hover:text-white">Cancel</a>
            </div>

            <section className="mt-6 grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
                    <form action={cerateMovieHandler} className="space-y-5">
                        <div>
                            <label className="block text-sm text-slate-300 mb-2" htmlFor="title">Title</label>
                            <input id="title" name="title" type="text" placeholder="e.g. Interstellar"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm text-slate-300 mb-2" htmlFor="year">Year</label>
                                <input id="year" name="year" type="number" placeholder="2014"
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-300 mb-2" htmlFor="genre">Genre</label>
                                <select id="genre" name="genre"
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60">
                                    <option>Action</option>
                                    <option>Drama</option>
                                    <option>Sci-Fi</option>
                                    <option>Thriller</option>
                                    <option>Animation</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm text-slate-300 mb-2" htmlFor="duration">Duration (minutes)</label>
                                <input id="duration" name="duration" type="number" placeholder="169"
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-300 mb-2" htmlFor="rating">Rating</label>
                                <input id="rating" name="rating" type="number" step="0.1" min="0" max="10" placeholder="8.6"
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-slate-300 mb-2" htmlFor="director">Director</label>
                            <input id="director" name="director" type="text" placeholder="e.g. Christopher Nolan"
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                        </div>

                        <div>
                            <label className="block text-sm text-slate-300 mb-2" htmlFor="overview">Overview</label>
                            <textarea id="overview" name="overview" rows="5" placeholder="Short description..."
                                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60"></textarea>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end pt-2">
                            <a href="./movies.html" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-center">
                                Cancel
                            </a>
                            <button type="submit" className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                                Save Movie
                            </button>
                        </div>
                    </form>
                </div>

                <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-lg font-semibold">Preview</h2>
                    <p className="text-sm text-slate-400 mt-2">Static preview block. Later: update live with JS.</p>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="font-semibold">Movie Title</p>
                                <p className="text-sm text-slate-400">Genre · Year</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★ 0.0</span>
                        </div>
                        <p className="mt-3 text-sm text-slate-300">Your overview will appear here…</p>
                    </div>
                </aside>
            </section>

        </>
    );
}
