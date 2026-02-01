import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-pattern-geo">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-keyvisual.jpg"
            alt="Harmony of Earth and Sunflowers"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-black/40 to-primary/80 z-10" />
        </div>

        {/* Decorative Borders */}
        <div className="absolute inset-4 md:inset-8 border border-white/20 z-20 pointer-events-none rounded-sm">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-30 text-center px-4">
          <div className="inline-block mb-6 px-4 py-1 border border-white/30 rounded-full bg-black/20 backdrop-blur-sm">
            <span className="text-secondary text-sm font-serif tracking-widest uppercase">Love & Peace Foundation</span>
          </div>

          <h1 className="!text-white font-serif font-bold text-4xl md:text-5xl lg:text-7xl leading-tight tracking-wide mb-8 animate-fade-in-up drop-shadow-lg">
            愛と平和で、<br className="md:hidden" />世界を繋ぐ。
            <span className="block mt-6 text-xl md:text-2xl lg:text-3xl font-sans font-light opacity-90 !text-white">
              時を超え、国境を越え、<br className="md:hidden" />普遍の価値を未来へ。
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link href="/about">
              <Button size="lg" className="bg-secondary text-white hover:bg-white hover:text-primary border border-transparent transition-all min-w-[200px]">
                設立の想い
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary min-w-[200px]">
                会員募集
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-30">
          <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* News Section (Compact) */}
      <div className="bg-white border-b border-gray-100 relative z-40 -mt-2 rounded-t-3xl shadow-lg mx-4 md:mx-0">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <span className="text-primary font-serif font-bold border-r border-gray-300 pr-4">News & Topics</span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 font-sans">2026.02.01</span>
              <span className="text-base font-medium text-gray-800">設立準備室を開設しました。</span>
            </div>
            <Link href="/news" className="text-sm text-secondary hover:underline md:ml-auto">
              一覧を見る &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Philosophy Section (Introduction) */}
      <Section className="py-24 md:py-32 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Block with Decoration */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-secondary/10 rounded-3xl -z-10" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder for Philosophy Image */}
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Earth from space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                Harmony with<br />the Earth
              </h2>
              <div className="h-1 w-20 bg-secondary" />
            </div>

            <p className="text-lg leading-loose text-muted-foreground font-sans">
              当財団は、世界の愛と平和の推進、国際文化の保全、そして人道支援を目的として設立されました。
              物理的な支援だけでなく、文化や心、精神性の交流を通じて、国や宗教の枠を超えた「グローバルな調和」の実現に寄与します。
            </p>

            <div className="pt-4">
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                  詳しく見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Activities Section (Zigzag Layout) */}
      <Section background="muted" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none" />

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Activities</h2>
          <p className="text-muted-foreground">主な活動内容</p>
        </div>

        <div className="space-y-24">
          {/* Activity 01: Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-6xl font-serif text-gray-200 font-bold -mb-10 block">01</span>
              <h3 className="text-3xl font-serif font-bold text-primary">Peace Action</h3>
              <p className="text-xl text-gray-600 font-medium">平和活動事業</p>
              <p className="leading-relaxed text-muted-foreground">
                世界平和祈願祭の開催や、紛争・戦争撲滅のための啓発活動を行います。
                国境を越えた対話の場を作り出し、真の平和構築を目指します。
              </p>
              <ul className="grid grid-cols-1 gap-2 mt-4 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" /> 世界平和祈願祭の開催
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" /> 平和国際会議の開催
                </li>
              </ul>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-video rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1596386461350-326ea75b32f6?q=80&w=2070&auto=format&fit=crop"
                  alt="Peace Action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary rounded-br-3xl" />
            </div>
          </div>

          {/* Activity 02: Left Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-1">
              <div className="relative aspect-video rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop"
                  alt="Culture & Tourism"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary rounded-tl-3xl" />
            </div>
            <div className="space-y-6 order-2">
              <span className="text-6xl font-serif text-gray-200 font-bold -mb-10 block">02</span>
              <h3 className="text-3xl font-serif font-bold text-primary">Culture & Tourism</h3>
              <p className="text-xl text-gray-600 font-medium">文化・観光事業</p>
              <p className="leading-relaxed text-muted-foreground">
                世界遺産の保全や、歴史的文明地域の研究（オスマン帝国等）を通じて、
                人類共通の遺産を未来へ継承し、文化交流を促進します。
              </p>
              <Link href="/activities" className="text-primary hover:text-secondary font-medium inline-flex items-center gap-1 mt-4">
                Learn More <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* More activities Button */}
          <div className="text-center pt-12">
            <Link href="/activities">
              <Button size="lg" className="bg-white text-primary border border-gray-200 hover:bg-gray-50 shadow-md">
                すべての事業を見る
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
