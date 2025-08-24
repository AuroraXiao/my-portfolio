import { NavLink, Link } from 'react-router-dom';
import { SITE } from '@/data/site';
import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm rounded-xl hover:bg-muted ${isActive ? 'bg-muted' : ''}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-tight">
          {SITE.name}
        </Link>

        <nav className="hidden gap-1 md:flex">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/work" className={linkClass}>Work</NavLink>
          {/* <NavLink to="/about" className={linkClass}>About</NavLink> */}
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-xl p-2 hover:bg-muted" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild><Link to="/">Home</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/work">Work</Link></DropdownMenuItem>
              {/* <DropdownMenuItem asChild><Link to="/about">About</Link></DropdownMenuItem> */}
              <DropdownMenuItem asChild><Link to="/contact">Contact</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}


