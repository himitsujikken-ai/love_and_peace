import { Section } from "@/components/ui/Section";
import React from "react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero */}
            <section className="relative py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">設立の想い</h1>
                    <p className="opacity-80">Philosophy & Mission</p>
                </div>
            </section>

            <Section>
                <div className="max-w-3xl mx-auto text-center space-y-10">
                    <div className="prose prose-lg mx-auto text-muted-foreground leading-loose font-serif">
                        <p className="text-xl md:text-2xl text-primary font-bold mb-8">
                            "愛と平和で、世界を繋ぐ。"
                        </p>
                        <p>
                            当財団は、世界の愛と平和の推進、国際文化の保全、そして人道支援を目的として設立されました。
                        </p>
                        <p>
                            物理的な支援だけでなく、文化や心、精神性の交流を通じて、
                            国や宗教の枠を超えた「グローバルな調和」の実現に寄与します。
                        </p>
                    </div>

                    <div className="pt-12 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                            <div className="w-32 h-32 rounded-full bg-gray-200 shrink-0" /> {/* Avatar Placeholder */}
                            <div className="text-left">
                                <p className="text-sm text-gray-500 mb-2">設立者・代表理事</p>
                                <p className="text-xl font-bold text-primary">【 氏名 】</p>
                                {/* <img src="/signature.png" alt="Signature" className="h-10 mt-2 opacity-50" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
