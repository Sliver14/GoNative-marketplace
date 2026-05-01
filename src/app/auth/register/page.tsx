import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-xl items-center px-6 py-10">
      <div className="w-full rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black">Create Account</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Join the biggest seafood community
        </p>

        <form className="mt-8 space-y-4">
          {[
            ["Full Name", "John Doe", "text"],
            ["Phone Number", "+234 800 000 0000", "tel"],
            ["Email Address", "john@example.com", "email"],
            ["Password", "Create a password", "password"],
          ].map(([label, placeholder, type]) => (
            <label className="block" key={label}>
              <span className="mb-2 block text-sm font-semibold">{label}</span>
              <input
                type={type}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none focus:border-[#12D16E]"
                placeholder={placeholder}
              />
            </label>
          ))}

          <Link
            href="/"
            className="mt-2 block rounded-xl bg-[#12D16E] px-4 py-3 text-center text-lg font-black text-[#FFD700]"
          >
            Register
          </Link>
        </form>

        <p className="mt-7 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold text-[#12D16E]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
