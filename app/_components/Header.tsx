import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

// Header with logo and navigation
function Header() {
  return (
    <header className="border-b border-primary-700 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
