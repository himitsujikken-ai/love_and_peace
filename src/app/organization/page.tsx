import { Section } from "@/components/ui/Section";
import React from "react";

export default function OrganizationPage() {
    const boardMembers = [
        { role: "理事長", name: "【 氏名 】" },
        { role: "理事", name: "【 氏名 】, 【 氏名 】" }, // Handling multiple names as string for simplicity
        { role: "評議員", name: "【 氏名 】, 【 氏名 】, 【 氏名 】" },
        { role: "監事", name: "【 氏名 】" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">組織概要</h1>
                    <p className="opacity-80">Organization Data</p>
                </div>
            </section>

            <Section>
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50/50">
                                <th className="py-6 px-6 md:px-10 bg-gray-50 font-serif font-bold text-gray-700 w-1/3">名称</th>
                                <td className="py-6 px-6 md:px-10">一般財団法人 愛と平和財団</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50">
                                <th className="py-6 px-6 md:px-10 bg-gray-50 font-serif font-bold text-gray-700">所在地</th>
                                <td className="py-6 px-6 md:px-10">
                                    <div className="mb-2">
                                        <span className="font-bold text-xs bg-primary text-white px-2 py-1 rounded mr-2">本部</span>
                                        東京都中央区銀座 【 丁目・番地 】
                                    </div>
                                    <div>
                                        <span className="font-bold text-xs bg-gray-500 text-white px-2 py-1 rounded mr-2">支部</span>
                                        福岡県福岡市西区マリナタウン・ウェーブコースト
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50/50">
                                <th className="py-6 px-6 md:px-10 bg-gray-50 font-serif font-bold text-gray-700">事業年度</th>
                                <td className="py-6 px-6 md:px-10">毎年4月1日から翌年3月31日まで</td>
                            </tr>
                            {boardMembers.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50">
                                    <th className="py-6 px-6 md:px-10 bg-gray-50 font-serif font-bold text-gray-700">{member.role}</th>
                                    <td className="py-6 px-6 md:px-10">{member.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>
        </div>
    );
}
