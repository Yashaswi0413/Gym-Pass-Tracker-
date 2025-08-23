// import hero.jpg from '../assets/hero.jpg';
export default function Hero() {
    return (
    <section className="bg-gray-50 py-16 px-6 flex flex-col md:flex-row items-center justify-between">
  <div className="max-w-lg">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
      Find & Exchange Gym Passes Easily
    </h2>
    <p className="text-gray-600 mb-6">
      FitPass Exchange helps you buy, sell, and swap gym passes with ease. 
      Save money and never waste an unused pass again.
    </p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
      Get Started
    </button>
  </div>

<div className="mt-10 md:mt-0 md:w-1/3">
    <img 
      src="../../public/hero.jpg" 
      alt="Fitness Illustration" 
      className="rounded-xl shadow-lg"
    />
  </div>
</section>
)
}