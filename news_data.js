// 新闻数据 - 按日期倒序排列（最新的在前）
const newsData = [
  {
    id: 'news_20251218',
    date: '2025-12-18',
    title_zh: '🎉 海南自贸港全岛封关正式启动',
    title_en: '🎉 Hainan FTP Official Closure Launch',
    content_zh: '"零关税"从21%提升至74%，"双15%"所得税优惠，86国免签入境。封关不是封岛，而是更大力度的开放！',
    content_en: 'Zero-tariff increased from 21% to 74%, 15% income tax, 86 countries visa-free. Closure means greater opening!',
    tags_zh: ['封关运作', '零关税', '政策利好'],
    tags_en: ['Closure Operation', 'Zero Tariff', 'Policy Benefits']
  },
  {
    id: 'news_20241127',
    date: '2024-11-27',
    title_zh: '📈 人才个税政策延续',
    title_en: '📈 Talent Tax Policy Extended',
    content_zh: '高端人才个税超15%部分免征政策延续至2035年，吸引更多国际人才。',
    content_en: 'High-end talent tax benefits (15%+exempt) extended to 2035, attracting more international talent.',
    tags_zh: ['人才政策', '个税优惠'],
    tags_en: ['Talent Policy', 'Tax Benefits']
  },
  {
    id: 'news_20241115',
    date: '2024-11-15',
    title_zh: '🎯 总书记考察海南',
    title_en: '🎯 President Inspects Hainan',
    content_zh: '习近平总书记强调加快建设具有世界影响力的自由贸易港，对海南发展提出新要求。',
    content_en: 'President Xi emphasized building a world-class free trade port, setting new requirements for Hainan.',
    tags_zh: ['领导关怀', '战略定位'],
    tags_en: ['Leadership', 'Strategic Position']
  },
  {
    id: 'news_20241101',
    date: '2024-11-01',
    title_zh: '💼 前11月外贸大增',
    title_en: '💼 Foreign Trade Surges',
    content_zh: '2024年前11月进出口总额增长19.4%，外向型经济发展迅速。',
    content_en: 'Jan-Nov 2024 trade up 19.4%, rapid development of export-oriented economy.',
    tags_zh: ['外贸数据', '经济增长'],
    tags_en: ['Trade Data', 'Economic Growth']
  },
  {
    id: 'news_20241015',
    date: '2024-10-15',
    title_zh: '🚀 洋浦港跃居全国第二',
    title_en: '🚀 Yangpu Port Ranks 2nd Nationally',
    content_zh: '"中国洋浦港"船籍港国际航行船舶总吨位跃居全国第二，航运枢纽地位凸显。',
    content_en: 'Yangpu Port international vessel tonnage ranks 2nd nationally, highlighting shipping hub status.',
    tags_zh: ['航运发展', '港口建设'],
    tags_en: ['Shipping', 'Port Development']
  },
  {
    id: 'news_20240920',
    date: '2024-09-20',
    title_zh: '🌏 86国免签入境',
    title_en: '🌏 86 Countries Visa-Free',
    content_zh: '海南免签国家增至86个，停留30天，事由扩展至商贸、医疗、会展等。',
    content_en: '86 countries enjoy visa-free entry, 30-day stay, expanded to business, medical, exhibition purposes.',
    tags_zh: ['免签政策', '人员往来'],
    tags_en: ['Visa-Free', 'Personnel Exchange']
  }
];
