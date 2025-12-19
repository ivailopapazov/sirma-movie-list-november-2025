import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../features/movies/movieSlice";
import { getAllMovies } from "../../features/movies/movieSelectors";
import { toast } from "react-toastify";
import { Link } from "react-router";

export default function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(getAllMovies);

    useEffect(() => {
        fetch('https://sirma-movie-list-november-2025-default-rtdb.firebaseio.com/movies.json')
            .then(response => response.json())
            .then(data => {
                dispatch(movieActions.getAll(data));
            })
            .catch(error => {
                toast.error('Error fetching movies: ' + error.message);
            });
    }, []);

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
                {movies.map(movie => (
                    <Link key={movie.id} to={`/movies/${movie.id}/details`} className="card-link group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                        <div className="p-5">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="font-semibold text-lg group-hover:text-white">{movie.title}</h3>
                                    <p className="text-sm text-slate-400 mt-1">{movie.genre} · {movie.year}</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">★ {movie.rating}</span>
                            </div>
                            <p className="mt-4 text-sm text-slate-300 line-clamp-3">{movie.overview}</p>
                            <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                                <span>2h 49m</span><span className="group-hover:text-indigo-200">Details →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
