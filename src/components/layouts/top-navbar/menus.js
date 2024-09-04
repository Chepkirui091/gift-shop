import {IconButton} from "@mui/material";

const Menus = () => {
    return (
        <nav className="p-4">
            <ul className="flex flex-col md:flex-row md:space-x-6 text-lg text-white whitespace-nowrap">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About us <IconButton>Dropdown</IconButton></a>
                </li>
                <li>
                    <a href="/products" >Our Products <IconButton>Dropdown</IconButton></a>
                </li>
                <li>
                    <a href="/branches">Branches <IconButton>Dropdown</IconButton></a>
                </li>
                <li>
                    <a href="/vouchers">Gift Vouchers</a>
                </li>
                <li>
                    <a href="/contact">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menus;
