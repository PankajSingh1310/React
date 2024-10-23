import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="bg-gray-300">
            <ul className="flex gap-5 p-2">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-gray-700"}`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-gray-700"}`
                        }
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${isActive ? "text-orange-700" : "text-gray-700"}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

