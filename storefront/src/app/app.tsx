export default function HomePage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold text-red-600">Welcome to My Store</h1>
        <p className="mt-4 text-lg">The best Medusa-powered eCommerce experience.</p>
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg">
          Shop Now
        </button>
      </div>
    );
  }
  