import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
export default HomePage
const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-3xl font-extrabold text-purple-700">Quizzz</h1>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-600">
            About us
          </Link>
          <Link href="/contact" className="hover:text-purple-600">
            Contact us
          </Link>
        </nav>
        <div className="flex space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-semibold">
            Sign up Free
          </button>
          <button className="text-black font-semibold hover:text-purple-600">
            Log in
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center bg-purple-800 py-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          let’s Take Quizzz!
        </h2>

        {/* Images Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
          <Image
            src="/jojo.jpg"
            alt="jojo"
            width={200}
            height={250}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/emoji.jpg" 
            width={200}
            height={250}
            className="rounded-xl shadow-lg"
          />
          <div className="bg-gray-100 flex items-center justify-center rounded-xl shadow-lg p-4">
            <p className="text-lg font-bold text-gray-800">
              Guess the words challenge
            </p>
          </div>
          <Image
            src="/grammar.jpg"
            alt="English Grammar"
            width={200}
            height={250}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/vocab.jpg"
            alt="Vocabulary"
            width={200}
            height={250}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Start Button */}
        <Link href="/quiz">
          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white text-xl px-8 py-3 rounded-full font-bold">
            START
          </button>
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
