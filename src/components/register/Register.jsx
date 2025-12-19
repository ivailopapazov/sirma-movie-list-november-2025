import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import { login } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerHandler = async (formData) => {
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirm = formData.get('confirm');

        if (password !== confirm) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(result.user, { displayName: name });

            dispatch(login(result.user));

            toast.success("Registration successful!");

            navigate('/movies');
        } catch (error) {
            toast.error(`Registration failed: ${error.message}`);
        }
    }

    return (
        <>
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
                <h1 className="text-2xl font-bold">Create account</h1>
                <p className="text-slate-400 text-sm mt-2">Join to like, add, and manage movies.</p>

                <form action={registerHandler} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm text-slate-300 mb-2" htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Your name"
                            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                    </div>

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

                    <div>
                        <label className="block text-sm text-slate-300 mb-2" htmlFor="confirm">Confirm Password</label>
                        <input id="confirm" name="confirm" type="password" placeholder="••••••••"
                            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                    </div>

                    <label className="inline-flex items-start gap-2 text-sm text-slate-300">
                        <input type="checkbox" className="mt-1 rounded border-white/20 bg-white/10" />
                        <span>
                            I agree to the <a href="#" className="text-indigo-300 hover:text-indigo-200">Terms</a>.
                        </span>
                    </label>

                    <button type="submit"
                        className="w-full mt-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                        Register
                    </button>
                </form>

                <p className="mt-6 text-sm text-slate-400">
                    Already have an account?
                    <a href="./login.html" className="text-indigo-300 hover:text-indigo-200">Login</a>
                </p>
            </div>

        </>
    );
}
