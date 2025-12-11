import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="sticky h-10 bg-gray-950 text-white flex justify-end pr-10 items-center gap-6">
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  )
}