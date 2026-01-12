// 海南13个重点园区完整数据（中英文）
const parksData = {
  park01: {
    name_zh: '海口江东新区',
    name_en: 'Haikou Jiangdong New Area',
    subtitle_zh: '海南自贸港重点园区，国家级新区核心起步区',
    subtitle_en: 'Key Hainan FTP Park, Core Startup Zone of National New Area',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>海口江东新区是海南自由贸易港的重点园区，也是国家级新区的核心起步区。作为海南自贸港建设的先行区和集中展示区，江东新区承担着引领海南高质量发展的重要使命。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>鼓励类企业减按15%征收（内地25%）</li>
<li><strong>零关税：</strong>进口自用生产设备零关税</li>
<li><strong>人才补贴：</strong>高层次人才最高300万元安家费</li>
<li><strong>租金减免：</strong>符合条件企业3年租金减免</li>
<li><strong>研发补贴：</strong>研发费用加计扣除100%</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>金融服务：</strong>离岸金融、跨境金融、金融科技</li>
<li><strong>总部经济：</strong>跨国公司区域总部、功能性总部</li>
<li><strong>现代物流：</strong>航空物流、保税物流、智慧物流</li>
<li><strong>科技创新：</strong>人工智能、大数据、云计算</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Haikou Jiangdong New Area is a key park of Hainan Free Trade Port and the core startup zone of the national new area. As a pioneering and demonstration zone for Hainan FTP construction, Jiangdong New Area shoulders the important mission of leading Hainan's high-quality development.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Corporate Income Tax:</strong> 15% for encouraged industries (vs 25% mainland)</li>
<li><strong>Zero Tariff:</strong> Zero tariff for imported production equipment</li>
<li><strong>Talent Subsidy:</strong> Up to ¥3M settlement subsidy for high-level talent</li>
<li><strong>Rent Reduction:</strong> 3-year rent exemption for qualified enterprises</li>
<li><strong>R&D Subsidy:</strong> 100% additional R&D expense deduction</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Financial Services:</strong> Offshore finance, cross-border finance, fintech</li>
<li><strong>Headquarters Economy:</strong> Regional HQs, functional headquarters</li>
<li><strong>Modern Logistics:</strong> Aviation logistics, bonded logistics, smart logistics</li>
<li><strong>Tech Innovation:</strong> AI, big data, cloud computing</li>
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
<p>三亚中央商务区是海南国际旅游消费中心的核心区域，致力于打造面向太平洋、印度洋的国际航运枢纽和对外开放门户。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>税收优惠：</strong>企业所得税15%、个人所得税15%</li>
<li><strong>高端人才：</strong>个税超15%部分免征</li>
<li><strong>离岛免税：</strong>每年每人10万元免税额度</li>
<li><strong>办公补贴：</strong>符合条件企业租金补贴50%</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>国际贸易：</strong>离岸贸易、转口贸易、跨境电商</li>
<li><strong>航运物流：</strong>国际航运、邮轮母港、游艇服务</li>
<li><strong>专业服务：</strong>法律、会计、咨询、设计</li>
<li><strong>邮轮游艇：</strong>游艇制造、游艇租赁、邮轮服务</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Sanya Central Business District is the core area of Hainan International Tourism Consumption Center, committed to building an international shipping hub and opening-up gateway facing the Pacific and Indian Oceans.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Tax Benefits:</strong> 15% corporate tax, 15% personal income tax</li>
<li><strong>High-end Talent:</strong> Personal income tax exemption above 15%</li>
<li><strong>Duty-free:</strong> ¥100,000 annual duty-free quota per person</li>
<li><strong>Office Subsidy:</strong> 50% rent subsidy for qualified enterprises</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>International Trade:</strong> Offshore trade, re-export trade, cross-border e-commerce</li>
<li><strong>Shipping Logistics:</strong> International shipping, cruise home port, yacht services</li>
<li><strong>Professional Services:</strong> Legal, accounting, consulting, design</li>
<li><strong>Cruise & Yacht:</strong> Yacht manufacturing, yacht leasing, cruise services</li>
</ul>

<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park03: {
    name_zh: '洋浦经济开发区',
    name_en: 'Yangpu Economic Development Zone',
    subtitle_zh: '国家级经济技术开发区、国际航运枢纽',
    subtitle_en: 'National Economic & Tech Development Zone, International Shipping Hub',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>洋浦经济开发区是国家级经济技术开发区，也是海南自贸港建设的重点园区，致力于打造国际陆海贸易新通道的新支点。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>保税政策：</strong>保税港区"境内关外"政策</li>
<li><strong>加工增值：</strong>加工增值30%以上免关税</li>
<li><strong>企业所得税：</strong>鼓励类企业15%税率</li>
<li><strong>出口退税：</strong>出口货物即征即退</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>石油化工：</strong>炼油、化工、新材料</li>
<li><strong>港口物流：</strong>集装箱运输、大宗商品交易</li>
<li><strong>国际贸易：</strong>离岸贸易、转口贸易</li>
<li><strong>保税加工：</strong>保税仓储、保税加工、保税物流</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Yangpu Economic Development Zone is a national-level economic and technological development zone and a key park for Hainan FTP construction, committed to building a new pivot for the International Land-Sea Trade Corridor.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Bonded Policy:</strong> "Inside territory, outside customs" bonded port policy</li>
<li><strong>Processing Value-added:</strong> Tariff exemption for 30%+ processing value-added</li>
<li><strong>Corporate Tax:</strong> 15% rate for encouraged industries</li>
<li><strong>Export Tax Rebate:</strong> Immediate export tax rebate</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Petrochemicals:</strong> Refining, chemicals, new materials</li>
<li><strong>Port Logistics:</strong> Container transport, bulk commodity trading</li>
<li><strong>International Trade:</strong> Offshore trade, re-export trade</li>
<li><strong>Bonded Processing:</strong> Bonded warehousing, processing, logistics</li>
</ul>

<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park04: {
    name_zh: '海口复兴城互联网信息产业园',
    name_en: 'Haikou Fuxingcheng Internet Information Park',
    subtitle_zh: '海南互联网创新创业示范园区',
    subtitle_en: 'Hainan Internet Innovation & Entrepreneurship Demonstration Park',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>复兴城是海南省首个互联网创新创业园区，聚焦互联网、区块链、数字经济等新兴产业，打造海南互联网产业高地。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>三年免租：</strong>符合条件企业前三年免租金</li>
<li><strong>创业补贴：</strong>创业团队最高50万元补贴</li>
<li><strong>人才奖励：</strong>高层次人才最高100万元奖励</li>
<li><strong>投融资支持：</strong>政府引导基金、天使投资支持</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>互联网：</strong>移动互联网、互联网+</li>
<li><strong>软件开发：</strong>企业软件、行业解决方案</li>
<li><strong>区块链：</strong>区块链技术、数字资产</li>
<li><strong>电子商务：</strong>跨境电商、社交电商</li>
<li><strong>游戏动漫：</strong>网络游戏、动漫制作</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Fuxingcheng is Hainan's first internet innovation and entrepreneurship park, focusing on emerging industries such as internet, blockchain, and digital economy to build Hainan's internet industry highland.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>3-Year Rent-free:</strong> First 3 years rent exemption for qualified enterprises</li>
<li><strong>Startup Subsidy:</strong> Up to ¥500,000 for startup teams</li>
<li><strong>Talent Rewards:</strong> Up to ¥1M rewards for high-level talent</li>
<li><strong>Investment Support:</strong> Government guidance fund, angel investment support</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Internet:</strong> Mobile internet, Internet+</li>
<li><strong>Software Development:</strong> Enterprise software, industry solutions</li>
<li><strong>Blockchain:</strong> Blockchain technology, digital assets</li>
<li><strong>E-commerce:</strong> Cross-border e-commerce, social commerce</li>
<li><strong>Gaming & Animation:</strong> Online games, animation production</li>
</ul>

<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park05: {
    name_zh: '陵水黎安国际教育创新试验区',
    name_en: "Lingshui Li'an International Education Innovation Zone",
    subtitle_zh: '中国首个国际教育创新试验区',
    subtitle_en: "China's First International Education Innovation Pilot Zone",
    detail_zh: `
<h3>📍 园区定位</h3>
<p>黎安国际教育创新试验区是中国首个国际教育创新试验区，引进国内外知名高校，打造"大学小镇"和教育对外开放新高地。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>教育开放：</strong>境外高校可独立办学</li>
<li><strong>学历互认：</strong>境外学历国内认可</li>
<li><strong>人才引进：</strong>外籍教师工作许可便利化</li>
<li><strong>税收优惠：</strong>教育机构企业所得税15%</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>国际教育：</strong>中外合作办学、留学服务</li>
<li><strong>教育培训：</strong>职业培训、语言培训</li>
<li><strong>文化创意：</strong>教育科技、文化产业</li>
<li><strong>教育科技：</strong>在线教育、智慧教育</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Li'an International Education Innovation Zone is China's first international education innovation pilot zone, introducing renowned domestic and international universities to build a "University Town" and a new highland for educational opening-up.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Education Opening:</strong> Foreign universities can operate independently</li>
<li><strong>Degree Recognition:</strong> Foreign degrees recognized domestically</li>
<li><strong>Talent Recruitment:</strong> Facilitated work permits for foreign teachers</li>
<li><strong>Tax Benefits:</strong> 15% corporate tax for educational institutions</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>International Education:</strong> Sino-foreign cooperative education, study abroad services</li>
<li><strong>Education & Training:</strong> Vocational training, language training</li>
<li><strong>Cultural & Creative:</strong> Edtech, cultural industries</li>
<li><strong>EdTech:</strong> Online education, smart education</li>
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
<p>博鳌乐城是国家唯一的国际医疗旅游先行区，享有"国九条"特殊政策，可使用国际最新药品和医疗器械。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>"国九条"：</strong>进口药械特许准入</li>
<li><strong>零关税：</strong>医疗设备、药品零关税</li>
<li><strong>先行先试：</strong>可使用未在内地上市的药品器械</li>
<li><strong>保险创新：</strong>商业健康保险创新试点</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>高端医疗：</strong>特许医疗、国际医疗</li>
<li><strong>康养旅游：</strong>健康管理、康复疗养</li>
<li><strong>医美抗衰：</strong>医疗美容、抗衰老</li>
<li><strong>干细胞治疗：</strong>干细胞研究、再生医学</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Boao Lecheng is China's only international medical tourism pilot zone, enjoying "Nine National Policies" special policies, allowing use of the latest international drugs and medical devices.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>"Nine Policies":</strong> Special access for imported drugs and devices</li>
<li><strong>Zero Tariff:</strong> Zero tariff for medical equipment and drugs</li>
<li><strong>Pilot Zone:</strong> Can use drugs/devices not yet marketed in mainland</li>
<li><strong>Insurance Innovation:</strong> Commercial health insurance innovation pilot</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>High-end Medical:</strong> Special medical, international medical</li>
<li><strong>Health Tourism:</strong> Health management, rehabilitation</li>
<li><strong>Medical Aesthetics:</strong> Medical beauty, anti-aging</li>
<li><strong>Stem Cell Therapy:</strong> Stem cell research, regenerative medicine</li>
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
<p>海口国家高新区是国家级高新技术产业开发区，重点发展生物医药、新能源、高端制造等战略性新兴产业。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>高新企业：</strong>15%企业所得税税率</li>
<li><strong>研发费用：</strong>研发费用加计扣除100%</li>
<li><strong>专利补贴：</strong>发明专利最高10万元补贴</li>
<li><strong>人才补贴：</strong>博士最高100万元安家费</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>生物医药：</strong>创新药、医疗器械、生物制品</li>
<li><strong>新能源：</strong>光伏、风电、储能</li>
<li><strong>高端制造：</strong>智能制造、精密制造</li>
<li><strong>人工智能：</strong>AI芯片、机器学习、计算机视觉</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Haikou National Hi-Tech Zone is a national-level high-tech industrial development zone, focusing on strategic emerging industries such as biopharmaceuticals, new energy, and advanced manufacturing.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Hi-tech Enterprises:</strong> 15% corporate income tax rate</li>
<li><strong>R&D Expenses:</strong> 100% additional R&D expense deduction</li>
<li><strong>Patent Subsidy:</strong> Up to ¥100,000 for invention patents</li>
<li><strong>Talent Subsidy:</strong> Up to ¥1M settlement subsidy for PhDs</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Biopharmaceuticals:</strong> Innovative drugs, medical devices, biologics</li>
<li><strong>New Energy:</strong> Solar, wind power, energy storage</li>
<li><strong>Advanced Manufacturing:</strong> Smart manufacturing, precision manufacturing</li>
<li><strong>AI:</strong> AI chips, machine learning, computer vision</li>
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
<p>崖州湾科技城是国家南繁科研育种基地和深海科技创新中心，打造"南繁硅谷"和深海科技国家实验室。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>科研设备：</strong>进口科研设备零关税</li>
<li><strong>人才补贴：</strong>高层次人才最高200万元补贴</li>
<li><strong>科研项目：</strong>国家级项目配套资助</li>
<li><strong>税收优惠：</strong>企业所得税15%</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>南繁育种：</strong>种业创新、种质资源</li>
<li><strong>深海科技：</strong>深海装备、海洋观测</li>
<li><strong>热带农业：</strong>热带作物、农业科技</li>
<li><strong>海洋渔业：</strong>远洋渔业、水产养殖</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Yazhou Bay Science & Technology City is China's Nanfan scientific research and breeding base and deep-sea technology innovation center, building "Nanfan Silicon Valley" and National Deep-Sea Laboratory.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Research Equipment:</strong> Zero tariff for imported research equipment</li>
<li><strong>Talent Subsidy:</strong> Up to ¥2M subsidy for high-level talent</li>
<li><strong>Research Projects:</strong> Matching grants for national-level projects</li>
<li><strong>Tax Benefits:</strong> 15% corporate income tax</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Nanfan Breeding:</strong> Seed industry innovation, germplasm resources</li>
<li><strong>Deep-sea Technology:</strong> Deep-sea equipment, ocean observation</li>
<li><strong>Tropical Agriculture:</strong> Tropical crops, agricultural technology</li>
<li><strong>Marine Fishery:</strong> Offshore fishery, aquaculture</li>
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
<p>海口综合保税区是海南首个综合保税区，实行"境内关外"管理，享受保税仓储、出口退税等政策。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>保税仓储：</strong>货物可长期保税存储</li>
<li><strong>出口退税：</strong>出口货物即征即退</li>
<li><strong>进口免税：</strong>区内企业进口设备免税</li>
<li><strong>跨境电商：</strong>跨境电商零售进口试点</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>保税物流：</strong>国际中转、分拨配送</li>
<li><strong>国际贸易：</strong>离岸贸易、转口贸易</li>
<li><strong>跨境电商：</strong>跨境电商、海外仓</li>
<li><strong>保税加工：</strong>保税加工、保税维修</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Haikou Comprehensive Bonded Zone is Hainan's first comprehensive bonded zone, implementing "inside territory, outside customs" management, enjoying bonded warehousing, export tax rebate and other policies.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Bonded Warehousing:</strong> Long-term bonded storage of goods</li>
<li><strong>Export Tax Rebate:</strong> Immediate export tax rebate</li>
<li><strong>Import Duty-free:</strong> Equipment import duty exemption for enterprises</li>
<li><strong>Cross-border E-commerce:</strong> Cross-border retail import pilot</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Bonded Logistics:</strong> International transit, distribution</li>
<li><strong>International Trade:</strong> Offshore trade, re-export trade</li>
<li><strong>Cross-border E-commerce:</strong> Cross-border e-commerce, overseas warehouses</li>
<li><strong>Bonded Processing:</strong> Bonded processing, bonded maintenance</li>
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
<p>海南生态软件园是中国互联网产业新高地，腾讯、华为、百度等互联网巨头均在此设立区域总部。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>15%税率</li>
<li><strong>办公租金：</strong>前三年租金补贴50%</li>
<li><strong>人才安居：</strong>提供人才公寓</li>
<li><strong>子女入学：</strong>优质教育资源配套</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>互联网：</strong>移动互联网、产业互联网</li>
<li><strong>游戏电竞：</strong>网络游戏、电竞赛事</li>
<li><strong>大数据：</strong>数据中心、数据分析</li>
<li><strong>人工智能：</strong>AI应用、智能制造</li>
<li><strong>区块链：</strong>区块链技术、数字资产</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Hainan Ecological Software Park is a new highland for China's internet industry, with internet giants such as Tencent, Huawei, and Baidu establishing regional headquarters here.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Corporate Tax:</strong> 15% tax rate</li>
<li><strong>Office Rent:</strong> 50% rent subsidy for first 3 years</li>
<li><strong>Talent Housing:</strong> Talent apartments provided</li>
<li><strong>Children's Education:</strong> Quality education resources</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Internet:</strong> Mobile internet, industrial internet</li>
<li><strong>Gaming & Esports:</strong> Online games, esports events</li>
<li><strong>Big Data:</strong> Data centers, data analytics</li>
<li><strong>AI:</strong> AI applications, smart manufacturing</li>
<li><strong>Blockchain:</strong> Blockchain technology, digital assets</li>
</ul>

<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park11: {
    name_zh: '海口国家高新区美安科技新城',
    name_en: "Haikou Hi-Tech Zone Mei'an Science City",
    subtitle_zh: '海口国家高新区核心片区，生物医药产业基地',
    subtitle_en: 'Core Area of Haikou National Hi-Tech Zone, Biopharmaceutical Industrial Base',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>美安科技新城是海口国家高新区的核心片区，重点发展生物医药、医疗器械、智能制造等高新技术产业。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>高新企业：</strong>15%企业所得税税率</li>
<li><strong>新药研发：</strong>创新药研发最高500万元补助</li>
<li><strong>生产设备：</strong>进口生产设备零关税</li>
<li><strong>GMP认证：</strong>通过GMP认证奖励100万元</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>生物医药：</strong>创新药、仿制药、生物制品</li>
<li><strong>医疗器械：</strong>高端医疗设备、体外诊断</li>
<li><strong>智能制造：</strong>医药智能制造、自动化生产</li>
<li><strong>精准医疗：</strong>基因检测、个性化治疗</li>
<li><strong>新材料：</strong>生物材料、医用材料</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Mei'an Science City is the core area of Haikou National Hi-Tech Zone, focusing on high-tech industries such as biopharmaceuticals, medical devices, and intelligent manufacturing.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Hi-tech Enterprises:</strong> 15% corporate income tax rate</li>
<li><strong>Drug R&D:</strong> Up to ¥5M subsidy for innovative drug R&D</li>
<li><strong>Production Equipment:</strong> Zero tariff for imported production equipment</li>
<li><strong>GMP Certification:</strong> ¥1M reward for GMP certification</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Biopharmaceuticals:</strong> Innovative drugs, generic drugs, biologics</li>
<li><strong>Medical Devices:</strong> High-end medical equipment, IVD</li>
<li><strong>Intelligent Manufacturing:</strong> Pharmaceutical smart manufacturing, automation</li>
<li><strong>Precision Medicine:</strong> Gene testing, personalized therapy</li>
<li><strong>New Materials:</strong> Biomaterials, medical materials</li>
</ul>

<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park12: {
    name_zh: '三亚科技城（三亚市高新技术产业园）',
    name_en: 'Sanya Science & Technology City (Sanya Hi-Tech Park)',
    subtitle_zh: '三亚科技创新中心，国家级科技企业孵化器',
    subtitle_en: 'Sanya Sci-tech Innovation Center, National Sci-tech Enterprise Incubator',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>三亚科技城是三亚市科技创新中心，国家级科技企业孵化器，重点发展高新技术、科技研发等产业。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>15%税率</li>
<li><strong>研发费用：</strong>研发费用加计扣除100%</li>
<li><strong>科技成果转化：</strong>成果转化奖励最高200万元</li>
<li><strong>创业孵化：</strong>孵化企业3年免租金</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>高新技术：</strong>新一代信息技术、新材料</li>
<li><strong>科技研发：</strong>企业研发中心、科研机构</li>
<li><strong>新一代信息技术：</strong>物联网、5G、人工智能</li>
<li><strong>节能环保：</strong>清洁能源、环保技术</li>
<li><strong>智慧城市：</strong>智慧交通、智慧医疗</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Sanya Science & Technology City is Sanya's sci-tech innovation center and national-level sci-tech enterprise incubator, focusing on high-tech and R&D industries.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Corporate Tax:</strong> 15% tax rate</li>
<li><strong>R&D Expenses:</strong> 100% additional R&D expense deduction</li>
<li><strong>Tech Commercialization:</strong> Up to ¥2M rewards for tech transfer</li>
<li><strong>Startup Incubation:</strong> 3-year rent-free for incubated enterprises</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>High-tech:</strong> Next-gen IT, new materials</li>
<li><strong>Sci-tech R&D:</strong> Corporate R&D centers, research institutions</li>
<li><strong>Next-gen IT:</strong> IoT, 5G, AI</li>
<li><strong>Energy Conservation:</strong> Clean energy, environmental technology</li>
<li><strong>Smart City:</strong> Smart transportation, smart healthcare</li>
</ul>

<h3>📞 Contact</h3>
<p><strong>Phone:</strong> 181-1779-0507</p>
<p><strong>WeChat:</strong> kosok_hainan</p>
`
  },

  park13: {
    name_zh: '海南数据谷（大数据产业园）',
    name_en: 'Hainan Data Valley (Big Data Industrial Park)',
    subtitle_zh: '海南省大数据产业集聚区，数字经济示范园区',
    subtitle_en: 'Hainan Big Data Industrial Cluster, Digital Economy Demonstration Park',
    detail_zh: `
<h3>📍 园区定位</h3>
<p>海南数据谷是海南省大数据产业集聚区，打造面向东南亚的区域数据中心和数字经济示范园区。</p>

<h3>💰 优惠政策</h3>
<ul>
<li><strong>企业所得税：</strong>15%税率</li>
<li><strong>数据中心：</strong>电费优惠，最低0.35元/度</li>
<li><strong>服务器设备：</strong>进口服务器设备零关税</li>
<li><strong>数字人才：</strong>数字经济人才补贴最高50万元</li>
</ul>

<h3>🏭 重点产业</h3>
<ul>
<li><strong>大数据：</strong>数据采集、数据分析、数据应用</li>
<li><strong>云计算：</strong>云服务、云存储、云安全</li>
<li><strong>数字经济：</strong>数字贸易、数字金融</li>
<li><strong>数据中心：</strong>IDC机房、云计算中心</li>
<li><strong>软件服务：</strong>SaaS、PaaS、IaaS</li>
<li><strong>数据安全：</strong>数据加密、网络安全</li>
</ul>

<h3>📞 联系方式</h3>
<p><strong>咨询电话：</strong>181-1779-0507</p>
<p><strong>微信咨询：</strong>kosok_hainan</p>
`,
    detail_en: `
<h3>📍 Positioning</h3>
<p>Hainan Data Valley is Hainan's big data industrial cluster, building a regional data center facing Southeast Asia and a digital economy demonstration park.</p>

<h3>💰 Preferential Policies</h3>
<ul>
<li><strong>Corporate Tax:</strong> 15% tax rate</li>
<li><strong>Data Center:</strong> Electricity discount, as low as ¥0.35/kWh</li>
<li><strong>Server Equipment:</strong> Zero tariff for imported server equipment</li>
<li><strong>Digital Talent:</strong> Up to ¥500,000 subsidy for digital economy talent</li>
</ul>

<h3>🏭 Key Industries</h3>
<ul>
<li><strong>Big Data:</strong> Data collection, data analytics, data applications</li>
<li><strong>Cloud Computing:</strong> Cloud services, cloud storage, cloud security</li>
<li><strong>Digital Economy:</strong> Digital trade, digital finance</li>
<li><strong>Data Centers:</strong> IDC facilities, cloud computing centers</li>
<li><strong>Software Services:</strong> SaaS, PaaS, IaaS</li>
<li><strong>Data Security:</strong> Data encryption, cybersecurity</li>
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
