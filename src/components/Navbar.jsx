// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">FitPass Exchange</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="gyms" className="hover:text-blue-600">Gyms</a></li>
        <li><a href="#passes" className="hover:text-blue-600">Passes</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
      </ul>
    </nav>
  );
}
