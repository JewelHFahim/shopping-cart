import {Link} from "react-router-dom";


const Navbar = () => {

    return (
        <nav className="px-[120px] py-4 flex justify-between items-center shadow-md border-b bg-slate-100">
            <div>
               <a href="" className="text-[22px] font-semibold text-slate-700" 
               >RadiumGlass</a>
            </div>

            <ul className="flex items-center gap-8">
                <li><Link to="/" className="hover:text-blue-700">Shop</Link></li>
                <li><Link to="/contact" className="hover:text-blue-700">Contact</Link></li>
                <li><Link to="/cart" className="hover:text-blue-700 relative">
                    Cart
                    <span className="w-[8px] h-[8px] bg-blue-500 rounded-full absolute top-0 -right-2 animate-pulse"></span>
                    </Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;