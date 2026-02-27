// 强制挂载到全局 window，确保任何页面都能秒读
window.parksData = {
  "park01": {
    name: { cn: "海口江东新区", en: "Haikou Jiangdong New Area", ru: "Район Цзяндун" },
    subtitle: { cn: "自贸港集中展示区", en: "FTP Display Area", ru: "Демонстрационная зона ПСТ" },
    detail_zh: `<h3>📍 园区定位</h3><p>海口江东新区是海南自贸港建设的重点先行区...</p>`, // 建议在此处粘贴你原有的长文本
    detail_en: `<h3>📍 Positioning</h3><p>Haikou Jiangdong New Area is a key pioneer zone...</p>`
  },
  "park08": {
    name: { cn: "三亚崖州湾科技城", en: "Sanya Yazhou Bay Sci-Tech City", ru: "Наукоград залива Ячжоу" },
    subtitle: { cn: "南繁科技、深海科技创新高地", en: "Nanfan & Deep-Sea Tech Hub", ru: "Центр селекции и глубоководных технологий" },
    detail_zh: `<h3>📍 园区定位</h3><p>国家南繁科研育种基地和深海科技创新中心...</p>`, 
    detail_en: `<h3>📍 Positioning</h3><p>National Nanfan breeding research base and deep-sea technology center...</p>`
  },
  // 重复此结构直到 park13...
};
