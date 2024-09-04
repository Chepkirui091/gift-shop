import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/static/logo.jpg';

const Logo = () => {
    return (
        <div className="w-28 h-28">
            <Link href="/">

                    <Image src={logo} alt="Logo" layout="responsive" />

            </Link>
        </div>
    );
};

export default Logo;
