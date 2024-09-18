import Image from "next/legacy/image";
import Link from "next/link";

// Displays the website's logo and name.
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Magic Tales
      </span>
    </Link>
  );
}

export default Logo;
