// 海南13个重点园区完整详细数据（中英文）- 2025最新版
const parksData = {
  park01: {
    name_zh: '海口江东新区',
    name_en: 'Haikou Jiangdong New Area',
    subtitle_zh: '海南自贸港重点园区，国家级新区核心起步区',
    subtitle_en: 'Key Hainan FTP Park, Core Startup Zone of National New Area',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>海口江东新区是海南自由贸易港的重点园区，总规划面积298平方公里。</p>
<h3>🏢 园区地址</h3>
<p><strong>详细地址：</strong>海南省海口市美兰区江东新区起步区</p>
<p><strong>管委会地址：</strong>海口市美兰区江东大道一号</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>15%税率</li>
<li><strong>零关税：</strong>进口设备零关税</li>
<li><strong>人才补贴：</strong>最高300万元</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Haikou Jiangdong New Area, 298 sq km planned area.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Jiangdong New Area, Meilan District, Haikou</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Tax:</strong> 15% corporate tax</li>
<li><strong>Tariff:</strong> Zero tariff for equipment</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park02: {
    name_zh: '三亚中央商务区',
    name_en: 'Sanya Central Business District',
    subtitle_zh: '国际旅游消费中心核心区',
    subtitle_en: 'Core Zone of International Tourism Consumption Center',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>三亚CBD，规划面积6.8平方公里。</p>
<h3>🏢 园区地址</h3>
<p><strong>详细地址：</strong>海南省三亚市天涯区凤凰岛片区</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>税收：</strong>企业所得税15%</li>
<li><strong>人才：</strong>个税超15%部分免征</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Sanya CBD, 6.8 sq km area.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Phoenix Island, Tianya District, Sanya</p>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
`
  },

  park03: {
    name_zh: '洋浦经济开发区',
    name_en: 'Yangpu Economic Development Zone',
    subtitle_zh: '国家级经济技术开发区',
    subtitle_en: 'National Economic & Tech Zone',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>洋浦EDZ，114.7平方公里，30万吨级深水码头。</p>
<h3>🏢 地址</h3>
<p><strong>地址：</strong>海南省儋州市洋浦经济开发区</p>
<h3>💰 政策</h3>
<ul>
<li><strong>保税：</strong>境内关外政策</li>
<li><strong>加工：</strong>30%增值免关税</li>
</ul>
<h3>📞 联系</h3>
<p><strong>电话：</strong>181-1779-0507</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Yangpu EDZ, 114.7 sq km, 300K-ton berth.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Yangpu EDZ, Danzhou, Hainan</p>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
`
  },

  park04: {
    name_zh: '海口复兴城互联网信息产业园',
    name_en: 'Haikou Fuxingcheng Internet Park',
    subtitle_zh: '互联网创新创业示范园',
    subtitle_en: 'Internet Innovation Demo Park',
    detail_zh: `
<h3>📍 定位</h3>
<p>海南首个互联网创新创业园区。</p>
<h3>🏢 地址</h3>
<p><strong>地址：</strong>海口市美兰区海秀东路39号</p>
<h3>💰 政策</h3>
<ul>
<li><strong>免租：</strong>3年免租金</li>
<li><strong>补贴：</strong>最高50万元</li>
</ul>
<h3>📞 联系</h3>
<p><strong>电话：</strong>181-1779-0507</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Hainan's first internet innovation park.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> No.39 Haixiu East Rd, Haikou</p>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
`
  },
    park05: {
    name_zh: '陵水黎安国际教育创新试验区',
    name_en: "Lingshui Li'an International Education Innovation Zone",
    subtitle_zh: '中国首个国际教育创新试验区',
    subtitle_en: "China's First International Education Innovation Zone",
    detail_zh: `
<h3>📍 园区定位</h3>
<p>中国首个国际教育创新试验区，引进国内外知名高校。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省陵水黎族自治县黎安镇</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>教育开放：</strong>境外高校可独立办学</li>
<li><strong>学历互认：</strong>境外学历国内认可</li>
<li><strong>税收：</strong>15%企业所得税</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>China's first international education innovation pilot zone.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Li'an Town, Lingshui County, Hainan</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Education:</strong> Foreign universities can operate independently</li>
<li><strong>Tax:</strong> 15% corporate tax</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park06: {
    name_zh: '博鳌乐城国际医疗旅游先行区',
    name_en: 'Boao Lecheng International Medical Tourism Pilot Zone',
    subtitle_zh: '国家唯一国际医疗旅游先行区',
    subtitle_en: "China's Only International Medical Tourism Pilot Zone",
    detail_zh: `
<h3>📍 园区定位</h3>
<p>国家唯一的国际医疗旅游先行区，享有"国九条"特殊政策。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省琼海市博鳌镇乐城岛</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>"国九条"：</strong>进口药械特许准入</li>
<li><strong>零关税：</strong>医疗设备、药品零关税</li>
<li><strong>先行先试：</strong>可使用未在内地上市的药品器械</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>高端医疗：</strong>特许医疗、国际医疗</li>
<li><strong>康养旅游：</strong>健康管理、康复疗养</li>
<li><strong>医美抗衰：</strong>医疗美容、抗衰老</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>China's only international medical tourism pilot zone with "Nine National Policies".</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Lecheng Island, Boao Town, Qionghai, Hainan</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Nine Policies:</strong> Special access for imported drugs and devices</li>
<li><strong>Zero Tariff:</strong> Medical equipment and drugs duty-free</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park07: {
    name_zh: '海口国家高新技术产业开发区',
    name_en: 'Haikou National Hi-Tech Industrial Development Zone',
    subtitle_zh: '国家级高新技术产业开发区',
    subtitle_en: 'National High-Tech Industrial Development Zone',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>国家级高新技术产业开发区，重点发展生物医药、新能源等产业。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省海口市秀英区药谷一横路</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>高新企业：</strong>15%企业所得税</li>
<li><strong>研发费用：</strong>加计扣除100%</li>
<li><strong>专利补贴：</strong>发明专利最高10万元</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>生物医药：</strong>创新药、医疗器械</li>
<li><strong>新能源：</strong>光伏、风电、储能</li>
<li><strong>人工智能：</strong>AI芯片、机器学习</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>National Hi-Tech Zone focusing on biopharmaceuticals, new energy.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Yaogu 1st Road, Xiuying District, Haikou</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Tax:</strong> 15% corporate income tax</li>
<li><strong>R&D:</strong> 100% additional deduction</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park08: {
    name_zh: '三亚崖州湾科技城',
    name_en: 'Sanya Yazhou Bay Science & Technology City',
    subtitle_zh: '南繁科技创新高地、深海科技城',
    subtitle_en: 'Nanfan Sci-tech Innovation Highland, Deep-Sea Tech City',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>国家南繁科研育种基地和深海科技创新中心。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省三亚市崖州区崖州湾科技城</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>科研设备：</strong>进口科研设备零关税</li>
<li><strong>人才补贴：</strong>最高200万元</li>
<li><strong>税收：</strong>15%企业所得税</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>南繁育种：</strong>种业创新、种质资源</li>
<li><strong>深海科技：</strong>深海装备、海洋观测</li>
<li><strong>热带农业：</strong>热带作物、农业科技</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>China's Nanfan research base and deep-sea technology innovation center.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Yazhou Bay Sci-Tech City, Yazhou District, Sanya</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Equipment:</strong> Zero tariff for research equipment</li>
<li><strong>Talent:</strong> Up to ¥2M subsidy</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park09: {
    name_zh: '海口综合保税区',
    name_en: 'Haikou Comprehensive Bonded Zone',
    subtitle_zh: '海南首个综合保税区',
    subtitle_en: "Hainan's First Comprehensive Bonded Zone",
    detail_zh: `
<h3>📍 园区定位</h3>
<p>海南首个综合保税区，实行"境内关外"管理。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省海口市秀英区综合保税区</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>保税仓储：</strong>货物长期保税存储</li>
<li><strong>出口退税：</strong>即征即退</li>
<li><strong>进口免税：</strong>区内企业设备免税</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>保税物流：</strong>国际中转、分拨配送</li>
<li><strong>国际贸易：</strong>离岸贸易、转口贸易</li>
<li><strong>跨境电商：</strong>跨境电商、海外仓</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Hainan's first comprehensive bonded zone with "inside territory, outside customs" management.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Haikou CBZ, Xiuying District, Haikou</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Bonded Storage:</strong> Long-term bonded storage</li>
<li><strong>Export Rebate:</strong> Immediate rebate</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },
    park10: {
    name_zh: '海南生态软件园',
    name_en: 'Hainan Ecological Software Park',
    subtitle_zh: '中国互联网产业新高地',
    subtitle_en: "New Highland for China's Internet Industry",
    detail_zh: `
<h3>📍 园区定位</h3>
<p>中国互联网产业新高地，腾讯、华为、百度等巨头在此设立区域总部。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省澄迈县老城镇生态软件园</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>15%税率</li>
<li><strong>办公租金：</strong>前三年补贴50%</li>
<li><strong>人才安居：</strong>提供人才公寓</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>互联网：</strong>移动互联网、产业互联网</li>
<li><strong>游戏电竞：</strong>网络游戏、电竞赛事</li>
<li><strong>区块链：</strong>区块链技术、数字资产</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>New highland for China's internet industry with Tencent, Huawei, Baidu regional HQs.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Laocheng Town, Chengmai County, Hainan</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Tax:</strong> 15% corporate tax</li>
<li><strong>Rent:</strong> 50% subsidy for first 3 years</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park11: {
    name_zh: '海口国家高新区美安科技新城',
    name_en: "Haikou Hi-Tech Zone Mei'an Science City",
    subtitle_zh: '生物医药产业基地',
    subtitle_en: 'Biopharmaceutical Industrial Base',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>海口国家高新区核心片区，重点发展生物医药、医疗器械等产业。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省海口市秀英区美安科技新城</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>高新企业：</strong>15%企业所得税</li>
<li><strong>新药研发：</strong>最高500万元补助</li>
<li><strong>生产设备：</strong>进口设备零关税</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>生物医药：</strong>创新药、仿制药、生物制品</li>
<li><strong>医疗器械：</strong>高端医疗设备、体外诊断</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Core area of Haikou National Hi-Tech Zone focusing on biopharmaceuticals.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Mei'an Science City, Xiuying District, Haikou</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Tax:</strong> 15% corporate tax</li>
<li><strong>R&D:</strong> Up to ¥5M subsidy</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park12: {
    name_zh: '三亚科技城',
    name_en: 'Sanya Science & Technology City',
    subtitle_zh: '国家级科技企业孵化器',
    subtitle_en: 'National Sci-tech Enterprise Incubator',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>三亚市科技创新中心，重点发展高新技术、科技研发等产业。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省三亚市吉阳区三亚科技城</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>15%税率</li>
<li><strong>研发费用：</strong>加计扣除100%</li>
<li><strong>成果转化：</strong>最高200万元奖励</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>高新技术：</strong>新一代信息技术、新材料</li>
<li><strong>智慧城市：</strong>智慧交通、智慧医疗</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Sanya's sci-tech innovation center focusing on high-tech and R&D industries.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Sanya Sci-Tech City, Jiyang District, Sanya</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Tax:</strong> 15% corporate tax</li>
<li><strong>R&D:</strong> 100% additional deduction</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park13: {
    name_zh: '海南数据谷',
    name_en: 'Hainan Data Valley',
    subtitle_zh: '大数据产业集聚区',
    subtitle_en: 'Big Data Industrial Cluster',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>海南省大数据产业集聚区，打造面向东南亚的区域数据中心。</p>
<h3>🏢 园区地址</h3>
<p><strong>地址：</strong>海南省海口市龙华区海南数据谷</p>
<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>15%税率</li>
<li><strong>数据中心：</strong>电费最低0.35元/度</li>
<li><strong>服务器设备：</strong>进口零关税</li>
</ul>
<h3>🏭 重点产业</h3>
<ul>
<li><strong>大数据：</strong>数据采集、分析、应用</li>
<li><strong>云计算：</strong>云服务、云存储、云安全</li>
<li><strong>数字经济：</strong>数字贸易、数字金融</li>
</ul>
<h3>📞 联系方式</h3>
<p><strong>电话：</strong>181-1779-0507</p>
<p><strong>微信：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Hainan's big data industrial cluster, building regional data center facing Southeast Asia.</p>
<h3>🏢 Address</h3>
<p><strong>Address:</strong> Hainan Data Valley, Longhua District, Haikou</p>
<h3>💰 Policies</h3>
<ul>
<li><strong>Tax:</strong> 15% corporate tax</li>
<li><strong>Electricity:</strong> As low as ¥0.35/kWh</li>
</ul>
<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  }
};

// 显示园区详情弹窗函数
function showParkDetail(parkId) {
  const park = parksData[parkId];
  if (!park) return;
  
  const lang = currentLang || 'zh';
  const modal = document.getElementById('parkDetailModal');
  
  document.getElementById('parkModalTitle').textContent = lang === 'zh' ? park.name_zh : park.name_en;
  document.getElementById('parkModalSubtitle').textContent = lang === 'zh' ? park.subtitle_zh : park.subtitle_en;
  document.getElementById('parkModalContent').innerHTML = lang === 'zh' ? park.detail_zh : park.detail_en;
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// 关闭园区详情弹窗函数
function closeParkDetail() {
  const modal = document.getElementById('parkDetailModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ESC键关闭弹窗
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeParkDetail();
  }
});
