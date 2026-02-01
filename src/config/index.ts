export const siteConfig = {
  name: "一般財団法人 愛と平和財団",
  fullName: "一般財団法人 愛と平和財団 | LOVE & PEACE FOUNDATION - Global",
  shortName: "LOVE & PEACE FOUNDATION",
  description: "世界の愛と平和の推進、国際文化保全、人道支援およびグローバル交流促進を行う財団法人",
  status: "establishment_preparation", // 設立準備中
  keywords: ["Global", "Love", "Peace", "Harmony", "International"],

  // Note: Images are still placeholders, need real assets later
  keyImages: {
    earth: "/images/earth-placeholder.jpg",
    space: "/images/space-placeholder.jpg",
    light: "/images/light-placeholder.jpg",
  },

  contact: {
    email: "info@love-and-peace-foundation.global", // Placeholder
    phone: "03-1234-5678", // Placeholder
    address: "Tokyo, Japan", // Placeholder
  },

  navigation: [
    { name: "TOP", href: "/" },
    { name: "理念", href: "/about" },
    { name: "事業内容", href: "/activities" },
    { name: "組織概要", href: "/organization" },
    { name: "会員募集", href: "/contact" }, // Mapping "membership" to contact page for now as per previous structure
  ],

  footer: {
    copyright: "© 2026 LOVE & PEACE FOUNDATION - Global. All Rights Reserved.",
    notes: "※本法人は現在、設立登記準備中です。",
  }
};
