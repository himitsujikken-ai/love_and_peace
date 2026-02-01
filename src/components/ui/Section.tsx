import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
    background?: 'default' | 'muted' | 'none';
}

export const Section = ({
    children,
    className = '',
    id,
    title,
    subtitle,
    background = 'default'
}: SectionProps) => {
    const bgStyles = {
        default: "bg-transparent",
        muted: "bg-muted/30 backdrop-blur-sm",
        none: "",
    };

    return (
        <section
            id={id}
            className={`relative py-16 md:py-24 ${bgStyles[background]} ${className}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="mb-12 text-center">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary tracking-wide mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};
