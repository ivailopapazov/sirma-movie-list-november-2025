export default function Login() {
    return (
        <div class="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
            <h1 class="text-2xl font-bold">Welcome back</h1>
            <p class="text-slate-400 text-sm mt-2">Login to manage your movie list.</p>

            <form action="#" method="post" class="mt-6 space-y-4">
                <div>
                    <label class="block text-sm text-slate-300 mb-2" for="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com"
                        class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                </div>

                <div>
                    <label class="block text-sm text-slate-300 mb-2" for="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="••••••••"
                        class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-indigo-400/60" />
                </div>

                <div class="flex items-center justify-between text-sm">
                    <label class="inline-flex items-center gap-2 text-slate-300">
                        <input type="checkbox" class="rounded border-white/20 bg-white/10" />
                        Remember me
                    </label>
                    <a href="#" class="text-indigo-300 hover:text-indigo-200">Forgot password?</a>
                </div>

                <button type="submit"
                    class="w-full mt-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold">
                    Login
                </button>
            </form>

            <p class="mt-6 text-sm text-slate-400">
                New here?
                <a href="./register.html" class="text-indigo-300 hover:text-indigo-200">Create an account</a>
            </p>
        </div>
    );
}
