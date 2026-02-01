import Link from 'next/link';
import { siteConfig } from '@/config';
import { Button } from '@/components/ui/Button';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo Placeholder */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary" />
                    <span className="font-serif font-bold text-lg tracking-wide hidden sm:block">
                        {siteConfig.shortName}
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.navigation.map((nav) => (
                        <Link
                            key={nav.href}
                            href={nav.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {nav.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button size="sm" variant="primary">Join Us</Button>
                    </Link>
                </nav>

                {/* Mobile Menu Button Placeholder */}
                <button className="md:hidden p-2 text-foreground">
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};
