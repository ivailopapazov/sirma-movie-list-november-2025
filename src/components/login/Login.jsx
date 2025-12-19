import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = async (formData) => {
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);

            dispatch(login(result.user));

            toast.success("Login successful!");

            navigate('/movies');
        } catch (error) {
            toast.error("Login failed:", error);
        }
    };


    return (
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-slate-400 text-sm mt-2">Login to manage your movie list.</p>

            <form action={loginHandler} className="mt-6 space-y-4">
                <div>
                    <label className="block text-sm text-slate-300 mb-2" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                </div>

                <div>
                    <label className="block text-sm text-slate-300 mb-2" htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="••••••••"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="inline-flex items-center gap-2 text-slate-300">
                        <input type="checkbox" className="rounded border-white/20 bg-white/10" />
                        Remember me
                    </label>
                    <a href="#" className="text-indigo-300 hover:text-indigo-200">Forgot password?</a>
                </div>

                <button type="submit"
                    className="w-full mt-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                    Login
                </button>
            </form>

            <p className="mt-6 text-sm text-slate-400">
                New here?
                <Link to="/register" className="text-indigo-300 hover:text-indigo-200">Create an account</Link>
            </p>
        </div>
    );
}
