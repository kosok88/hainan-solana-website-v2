// 强制挂载到 window，防止页面找不到数据
window.parksData = {
    "park01": {
        name: { cn: "海口江东新区", en: "Haikou Jiangdong New Area", ru: "Район Цзяндун (Хайкоу)" },
        subtitle: { cn: "自贸港建设集中展示区", en: "FTP Concentrated Display Area", ru: "Демонстрационная зона ПСТ" },
        detail_zh: `<h3>📍 园区定位</h3><p>海口江东新区是海南自贸港建设的重点先行区，总面积约298平方公里。</p><h3>💰 优惠政策</h3><ul><li>15% 企业所得税优惠</li><li>个人所得税最高15%封顶</li></ul>`,
        detail_en: `<h3>📍 Positioning</h3><p>Haikou Jiangdong New Area is a key pioneer zone of Hainan FTP...</p>`
    },
    "park08": {
        name: { cn: "三亚崖州湾科技城", en: "Sanya Yazhou Bay Sci-Tech City", ru: "Наукоград залива Ячжоу (Санья)" },
        subtitle: { cn: "南繁科技创新高地、深海科技城", en: "Nanfan & Deep-Sea Tech City", ru: "Центр селекции и глубоководных исследований" },
        detail_zh: `<h3>📍 园区定位</h3><p>国家“南繁硅谷”核心区，重点发展种业、深海科技。</p><h3>💰 优惠政策</h3><ul><li>科研设备零关税</li><li>高层次人才安家费补贴</li></ul>`,
        detail_en: `<h3>📍 Positioning</h3><p>Core area of National Nanfan Silicon Valley...</p>`
    }
    // 注意：请按照上面的格式，把你那1387行里剩下的 park09-park13 也贴在这里
};
console.log("Parks database loaded successfully:", window.parksData);
