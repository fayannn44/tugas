import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
