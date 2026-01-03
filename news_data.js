const newsData = [
  {
    id: 'news_closure1',
    title_zh: '🎯 历史性时刻！海南全岛封关正式启动',
    title_en: '🎯 Historic Moment! Island-wide Closure Launched',
    date: '2025-12-18',
    content_zh: '2025年12月18日，海南自由贸易港正式启动全岛封关，中国对外开放迎来里程碑时刻。3万多平方公里的海南岛正式成为海关监管特殊区域。',
    content_en: 'On December 18, 2025, Hainan Free Trade Port officially launched island-wide closure. The 30,000+ sq km island became a special customs supervision zone.',
    detail_zh: '2025年12月18日，海南自由贸易港正式启动全岛封关，中国对外开放迎来里程碑时刻。3万多平方公里的海南岛正式成为海关监管特殊区域，"一线放开、二线管住、岛内自由"的新篇章就此开启。封关运作标志着海南自贸港建设从"逐步探索"迈入"全面运行"新阶段，成为引领我国新时代对外开放的重要门户。封关首日，洋浦港、三亚凤凰国际机场等口岸集中进口原油、医疗设备、航材、食品原料等"零关税"货物，总货值超5亿元。',
    detail_en: 'On December 18, 2025, Hainan FTP officially launched island-wide closure operation, marking a milestone in China\'s opening-up. The 30,000+ sq km island officially became a special customs supervision zone, opening a new chapter of "first-line liberalization, second-line management, free flow within the island". On closure day, Yangpu Port and Sanya Phoenix Airport imported crude oil, medical equipment, aviation materials with total value exceeding 500 million yuan.',
    tags_zh: ['封关', '自贸港', '开放'],
    tags_en: ['Closure', 'FTP', 'Opening']
  },
  {
    id: 'news1',
    title_zh: '📈 人才个税政策延续',
    title_en: '📈 Talent Tax Extended',
    date: '2025-12-15',
    content_zh: '高端人才和紧缺人才个人所得税实际税负超过15%的部分免征政策延续至2035年。',
    content_en: 'High-end talent tax benefits extended to 2035, exempting excess above 15%.',
    detail_zh: '财政部、税务总局发布公告，明确海南自贸港高端人才和紧缺人才个人所得税优惠政策延续至2035年12月31日。对在海南自由贸易港工作的高端人才和紧缺人才，其个人所得税实际税负超过15%的部分予以免征。这一政策将大大增强海南对人才的吸引力。',
    detail_en: 'The Ministry of Finance announced the extension of preferential individual income tax policies for high-end and urgently-needed talent in Hainan FTP until December 31, 2035, exempting the portion exceeding 15% actual tax burden.',
    tags_zh: ['个税', '人才', '优惠政策'],
    tags_en: ['Tax', 'Talent', 'Benefits']
  },
  {
    id: 'news2',
    title_zh: '🎉 总书记考察海南',
    title_en: '🎉 President Visit',
    date: '2025-12-10',
    content_zh: '习近平总书记考察海南，强调要加快建设具有世界影响力的中国特色自由贸易港。',
    content_en: 'President Xi inspected Hainan, emphasizing building a world-class free trade port.',
    detail_zh: '习近平总书记在海南考察时强调，要解放思想、开拓创新，团结奋斗、攻坚克难，加快建设具有世界影响力的中国特色自由贸易港。总书记的重要讲话为海南自贸港建设指明了方向，提供了根本遵循。海南将牢记嘱托，勇担使命，全力推进自贸港建设。',
    detail_en: 'During his inspection in Hainan, President Xi emphasized the need to emancipate the mind, innovate, unite in struggle, and overcome difficulties to accelerate the construction of a Chinese-characteristic free trade port with world influence.',
    tags_zh: ['考察', '自贸港', '发展'],
    tags_en: ['Visit', 'FTP', 'Development']
  },
  {
    id: 'news3',
    title_zh: '💼 前11月外贸大增',
    title_en: '💼 Trade Growth',
    date: '2025-12-05',
    content_zh: '2025年前11月，海南外贸进出口总额同比增长19.4%，展现强劲发展态势。',
    content_en: 'Jan-Nov 2025 trade up 19.4% YoY, showing strong growth momentum.',
    detail_zh: '海关统计数据显示，2025年前11月，海南外贸进出口总额达到1850亿元，同比增长19.4%。其中，出口增长22.1%，进口增长17.8%。这一数据充分说明了海南自贸港政策红利正在不断释放，营商环境持续优化，吸引了越来越多的企业在海南开展业务。',
    detail_en: 'Customs statistics show that from January to November 2025, Hainan\'s total import and export volume reached 185 billion yuan, up 19.4% year-on-year, with exports up 22.1% and imports up 17.8%.',
    tags_zh: ['外贸', '数据', '增长'],
    tags_en: ['Trade', 'Data', 'Growth']
  },
  {
    id: 'news4',
    title_zh: '🏢 新增企业突破10万家',
    title_en: '🏢 100K+ New Enterprises',
    date: '2025-11-28',
    content_zh: '2025年海南新增市场主体突破10万家，市场活力持续增强。',
    content_en: '100,000+ new market entities in 2025, vitality continues to grow.',
    detail_zh: '截至2025年11月底，海南全省新增市场主体超过10万家，同比增长15.3%。其中，新增企业6.8万家，个体工商户3.2万家。市场主体的快速增长，充分体现了海南自贸港对企业的强大吸引力和良好的营商环境。',
    detail_en: 'As of end of November 2025, over 100,000 new market entities were added in Hainan, up 15.3% YoY, including 68,000 enterprises and 32,000 individual businesses.',
    tags_zh: ['企业', '注册', '市场主体'],
    tags_en: ['Enterprise', 'Registration', 'Market']
  },
  {
    id: 'news5',
    title_zh: '✈️ 开放第七航权',
    title_en: '✈️ 7th Freedom Rights',
    date: '2020-06-10',
    content_zh: '海南自贸港试点开放第七航权，这是我国民航史上最大力度航权开放。',
    content_en: 'Hainan FTP pilots 7th freedom rights, China\'s highest-level aviation opening.',
    detail_zh: '民航局印发《海南自由贸易港试点开放第七航权实施方案》，明确鼓励、支持外航在海南经营客、货运第七航权。这是我国民航首次同时试点开放客运和货运第七航权，是我国在航权方面的最高水平开放，也是世界范围内自贸港航权开放的最高水平。第七航权指完全第三国运输权，外国航空公司可在境外两国间载运客货，而不用返回本国。2025年12月，三亚至布拉格航线成为海南自贸港首条投入运营的第七航权航线。',
    detail_en: 'CAAC issued the Implementation Plan for Pilot Opening of 7th Freedom Rights in Hainan FTP, encouraging foreign airlines to operate passenger and cargo 7th freedom rights in Hainan. This is China\'s first simultaneous pilot opening of both passenger and cargo 7th freedom rights, representing the highest level of aviation rights opening in China and globally among free trade ports. The 7th freedom right allows foreign airlines to carry passengers and cargo between two foreign countries without returning to their home country. In December 2025, the Sanya-Prague route became Hainan FTP\'s first operational 7th freedom rights route.',
    tags_zh: ['航权', '开放', '民航'],
    tags_en: ['Aviation Rights', 'Opening', 'Aviation']
  }
];
