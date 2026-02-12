import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <button aria-expanded="false">Home</button>
          <ul className="sub-menu" aria-label="Apps">
            <li><Link to="/jungling">Jungling</Link></li>
            <li><Link to="/jungling">Chat</Link></li>
            <li><Link to="/jungling">Email</Link></li>
          </ul></li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li><Link to="/jungling">Jungling</Link></li>
            <li><Link to="/jungling">Chat</Link></li>
            <li><Link to="/jungling">Email</Link></li>
          </ul></li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li><Link to="/jungling">Jungling</Link></li>
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="/jungling">Email</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}