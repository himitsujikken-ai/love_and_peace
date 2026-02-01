import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import React from "react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">会員募集・お問い合わせ</h1>
                    <p className="opacity-80">Membership & Contact</p>
                </div>
            </section>

            {/* Membership CTA Section */}
            <Section background="muted">
                <div className="max-w-4xl mx-auto text-center bg-white p-10 rounded-2xl shadow-sm border border-secondary/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary" />

                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">賛助会員の募集</h2>
                    <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto leading-relaxed">
                        私たちの理念に共鳴し、活動を支えてくださる会員を募集しています。<br />
                        共に、愛と平和の輪を世界へ広げていきましょう。
                    </p>

                    <Button size="lg" className="w-full md:w-auto px-12 animate-pulse">
                        お問い合わせフォームへ
                    </Button>
                </div>
            </Section>

            {/* Contact Form */}
            <Section title="お問い合わせ" id="contact-form">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">お名前</label>
                                <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="山田 太郎" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">メールアドレス</label>
                                <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="your@email.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">お問い合わせ種別</label>
                            <select id="subject" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                                <option>賛助会員について</option>
                                <option>事業内容について</option>
                                <option>取材・メディア掲載について</option>
                                <option>その他</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">お問い合わせ内容</label>
                            <textarea id="message" rows={5} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="お問い合わせ内容をご記入ください"></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <Button type="button" className="w-full md:w-1/2">
                                送信する
                            </Button>
                        </div>
                    </form>
                </div>
            </Section>
        </div>
    );
}
