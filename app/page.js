import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white min-h-screen flex items-center">
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The best URL shortener in the market
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            A fast, simple, and privacy-friendly URL shortener. No tracking, no unnecessary login,
            just clean and reliable link shortening built for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 cursor-pointer transition text-white px-6 py-3 rounded-xl shadow-md font-semibold">
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/amanshcode">
              <button className="border border-purple-600 text-purple-700 cursor-pointer hover:bg-purple-50 transition px-6 py-3 rounded-xl font-semibold">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/vector.jpg"
            alt="URL shortener illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </section>
    </main>
  );
}