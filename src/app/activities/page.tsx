import { Section } from "@/components/ui/Section";
import React from "react";

export default function ActivitiesPage() {
    const activities = [
        {
            id: "01",
            title: "Peace Action",
            jaTitle: "平和活動事業",
            description: "世界の平穏と安寧を願い、具体的な行動を起こします。",
            items: [
                "世界平和祈願祭の開催",
                "紛争・戦争撲滅啓発",
                "平和国際会議の開催・参加"
            ],
            color: "bg-blue-50 border-blue-100"
        },
        {
            id: "02",
            title: "Culture & Tourism",
            jaTitle: "文化・観光事業",
            description: "歴史的遺産を守り、文化交流を通じて相互理解を深めます。",
            items: [
                "世界遺産保全・歴史的文明地域の研究（オスマン帝国等）",
                "国際観光推進・文化交流促進"
            ],
            color: "bg-amber-50 border-amber-100"
        },
        {
            id: "03",
            title: "Medical & Welfare",
            jaTitle: "医療・福祉事業",
            description: "誰もが健康で安心して暮らせる社会を目指します。",
            items: [
                "癌撲滅運動支援・医療研究支援",
                "患者及び家族支援"
            ],
            color: "bg-emerald-50 border-emerald-100"
        },
        {
            id: "04",
            title: "Global Projects",
            jaTitle: "教育・環境・その他",
            description: "次世代の育成と地球環境の保護に取り組みます。",
            items: [
                "天然資源保護 (Global Resource Rights Project)",
                "グローバル人材育成・平和教育",
                "世界遺産巡礼プロジェクト・特別ツアー企画"
            ],
            color: "bg-indigo-50 border-indigo-100"
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">事業内容</h1>
                    <p className="opacity-80">Our Activities</p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activities.map((act) => (
                        <div key={act.id} className={`p-8 rounded-2xl border ${act.color} hover:shadow-lg transition-shadow`}>
                            <div className="text-sm font-bold opacity-50 mb-2">ACTIVITY {act.id}</div>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-2">{act.title}</h2>
                            <h3 className="text-lg font-bold text-gray-600 mb-4">{act.jaTitle}</h3>

                            <p className="text-gray-600 mb-6 text-sm">{act.description}</p>

                            <ul className="space-y-3">
                                {act.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-primary mt-1">✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
