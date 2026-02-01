import Link from 'next/link';
import { siteConfig } from '@/config';

export const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-serif font-bold text-xl tracking-wide mb-4 block text-white">
                            {siteConfig.name}
                        </Link>
                        <p className="text-blue-100/80 text-sm max-w-md leading-relaxed">
                            {siteConfig.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-white">Links</h3>
                        <ul className="space-y-2">
                            {siteConfig.navigation.map((nav) => (
                                <li key={nav.href}>
                                    <Link href={nav.href} className="text-base text-blue-100/80 hover:text-white transition-colors">
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-white">Contact</h3>
                        <ul className="space-y-2 text-base text-blue-100/80">
                            <li>{siteConfig.contact.address}</li>
                            <li>{siteConfig.contact.email}</li>
                            <li>{siteConfig.contact.phone}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/80">
                    <div className="text-center md:text-left">
                        <p>{siteConfig.footer.copyright}</p>
                        <p className="mt-1 opacity-75">{siteConfig.footer.notes}</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
