export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left: login form */}
      <div className="flex flex-1 flex-col justify-center px-12">
        <h1 className="text-2xl font-bold">Sign in</h1>
      </div>
      {/* Right: indigo gradient panel */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-indigo-800" />
    </div>
  );
}
