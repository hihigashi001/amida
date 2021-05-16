import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full text-right text-gray-700 text-sm bg-gray-200">
      <small className="mr-8">
        <Link href="/">
          <a>&copy; {new Date().getFullYear()} Hirota All Rights Reserved.</a>
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
