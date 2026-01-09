// ===================================================
// 海南自贸港13个重点园区完整数据
// 用于网站园区详情弹窗展示
// ===================================================

const parksDetailData = {
  park01: {
    id: 'park01',
    name_zh: '海口江东新区',
    name_en: 'Haikou Jiangdong New Area',
    icon: '1️⃣',
    position_zh: '海南自贸港重点园区，国家级新区核心起步区',
    position_en: 'Key FTP zone, national-level new area core',
    
    intro_zh: `
      <h3>🏙️ 园区概况</h3>
      <p>海口江东新区位于海口东海岸，总面积298平方公里，是海南自由贸易港建设的集中展示区和先行区。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>金融服务：</strong>现代金融、金融科技、资产管理</li>
        <li><strong>总部经济：</strong>跨国企业总部、区域总部、功能总部</li>
        <li><strong>现代物流：</strong>临空经济、国际物流、供应链管理</li>
        <li><strong>科技创新：</strong>高新技术研发、科技成果转化</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>企业所得税15%</strong>（内地25%）</li>
        <li>✅ <strong>零关税政策</strong>：进口设备、原材料免关税</li>
        <li>✅ <strong>人才补贴</strong>：高端人才最高200万安家费</li>
        <li>✅ <strong>租金减免</strong>：企业入驻前3年租金补贴50%</li>
        <li>✅ <strong>个人所得税优惠</strong>：高端人才实际税负不超15%</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>13家企业建设总部大楼</li>
        <li>海南国际能源交易中心落户</li>
        <li>美兰国际机场二期投入使用</li>
        <li>CBD总部聚集区加速建设</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>金融服务机构、跨国公司总部、科技创新企业、现代物流企业、专业服务机构</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🏙️ Overview</h3>
      <p>Jiangdong New Area is located on Haikou's east coast, covering 298 square kilometers. It's the concentrated display and pilot area of Hainan FTP construction.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Financial Services:</strong> Modern finance, fintech, asset management</li>
        <li><strong>Headquarters Economy:</strong> Multinational HQs, regional HQs</li>
        <li><strong>Modern Logistics:</strong> Airport economy, international logistics</li>
        <li><strong>Tech Innovation:</strong> High-tech R&D, tech transformation</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>15% Corporate Tax</strong> (vs 25% mainland)</li>
        <li>✅ <strong>Zero Tariff</strong>: Duty-free equipment & materials</li>
        <li>✅ <strong>Talent Subsidy</strong>: Up to 2M yuan settlement allowance</li>
        <li>✅ <strong>Rent Reduction</strong>: 50% rent subsidy for first 3 years</li>
        <li>✅ <strong>Personal Income Tax</strong>: Max 15% for high-end talents</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>13 enterprises building headquarters</li>
        <li>Hainan International Energy Exchange settled</li>
        <li>Meilan Airport Phase II operational</li>
        <li>CBD headquarters cluster accelerating</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Financial institutions, multinational HQs, tech companies, logistics firms, professional services</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park02: {
    id: 'park02',
    name_zh: '三亚中央商务区',
    name_en: 'Sanya Central Business District',
    icon: '2️⃣',
    position_zh: '国际旅游消费中心核心区',
    position_en: 'Core area of international tourism consumption center',
    
    intro_zh: `
      <h3>🏢 园区概况</h3>
      <p>三亚中央商务区总面积99.3平方公里，定位为国际旅游消费中心核心区，重点发展现代金融、国际贸易、专业服务等产业。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>国际贸易：</strong>离岸贸易、转口贸易、跨境电商</li>
        <li><strong>航运物流：</strong>国际航运、邮轮母港、游艇产业</li>
        <li><strong>专业服务：</strong>法律、会计、咨询、设计服务</li>
        <li><strong>邮轮游艇：</strong>邮轮旅游、游艇租赁、海洋运动</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>税收优惠</strong>：企业所得税15%</li>
        <li>✅ <strong>高端人才个税15%</strong>：超过部分免征</li>
        <li>✅ <strong>离岛免税</strong>：每人每年10万元免税额度</li>
        <li>✅ <strong>邮轮游艇政策</strong>：进口游艇零关税</li>
        <li>✅ <strong>金融开放</strong>：QDLP、QFLP试点</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>2023年税收增长43.6%（全省最快）</li>
        <li>投资增长40.3%</li>
        <li>千亿级现代金融产业集群</li>
        <li>凤凰岛国际邮轮港运营</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>金融服务机构、国际贸易公司、专业服务企业、邮轮游艇企业、高端商业地产</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🏢 Overview</h3>
      <p>Sanya CBD covers 99.3 sq km, positioned as the core area of international tourism consumption center, focusing on modern finance, international trade, and professional services.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>International Trade:</strong> Offshore trade, transit trade, cross-border e-commerce</li>
        <li><strong>Shipping & Logistics:</strong> International shipping, cruise home port, yacht industry</li>
        <li><strong>Professional Services:</strong> Legal, accounting, consulting, design</li>
        <li><strong>Cruise & Yacht:</strong> Cruise tourism, yacht leasing, marine sports</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>Tax Benefits</strong>: 15% corporate income tax</li>
        <li>✅ <strong>Talent Tax</strong>: 15% max for high-end talents</li>
        <li>✅ <strong>Duty-Free</strong>: 100,000 yuan annual allowance per person</li>
        <li>✅ <strong>Yacht Policy</strong>: Zero tariff on imported yachts</li>
        <li>✅ <strong>Financial Opening</strong>: QDLP, QFLP pilot</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>Tax growth 43.6% in 2023 (fastest in province)</li>
        <li>Investment growth 40.3%</li>
        <li>Hundred-billion yuan finance cluster</li>
        <li>Phoenix Island International Cruise Port operational</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Financial institutions, international traders, professional services, cruise & yacht companies, high-end commercial real estate</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park03: {
    id: 'park03',
    name_zh: '洋浦经济开发区',
    name_en: 'Yangpu Economic Development Zone',
    icon: '3️⃣',
    position_zh: '国家级经济技术开发区、国际航运枢纽',
    position_en: 'National economic zone, international shipping hub',
    
    intro_zh: `
      <h3>⚗️ 园区概况</h3>
      <p>洋浦经济开发区位于海南西北部，是中国第一个由外商成片开发、享受保税区政策的国家级开发区，规划面积31平方公里。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>石油化工：</strong>炼油、乙烯、石化新材料</li>
        <li><strong>港口物流：</strong>国际中转、保税仓储、大宗贸易</li>
        <li><strong>国际贸易：</strong>大宗商品交易、能源贸易</li>
        <li><strong>保税加工：</strong>加工增值、保税制造</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>保税港区政策</strong>：全覆盖保税政策</li>
        <li>✅ <strong>加工增值免关税</strong>：增值30%以上免关税</li>
        <li>✅ <strong>企业所得税15%</strong></li>
        <li>✅ <strong>"中国洋浦港"船籍港政策</strong></li>
        <li>✅ <strong>零关税进口</strong>：生产设备、原材料</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>2023年营收突破5000亿元</li>
        <li>税收超过200亿元</li>
        <li>信用评级AA</li>
        <li>百万吨乙烯项目投产</li>
        <li>超40艘船舶享受零关税政策</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>石化企业、港口物流、能源贸易、保税加工、航运企业、大宗商品交易</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>⚗️ Overview</h3>
      <p>Yangpu is China's first national zone developed by foreign investors with bonded policies, covering 31 sq km in northwest Hainan.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Petrochemicals:</strong> Refining, ethylene, new materials</li>
        <li><strong>Port Logistics:</strong> International transit, bonded warehousing</li>
        <li><strong>International Trade:</strong> Bulk commodities, energy trading</li>
        <li><strong>Bonded Processing:</strong> Value-added processing</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>Bonded Zone Policies</strong>: Full coverage</li>
        <li>✅ <strong>Duty-Free Processing</strong>: 30%+ value-added</li>
        <li>✅ <strong>15% Corporate Tax</strong></li>
        <li>✅ <strong>"China Yangpu Port" Registry</strong></li>
        <li>✅ <strong>Zero-Tariff Imports</strong>: Equipment & materials</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>Revenue exceeded 500B yuan in 2023</li>
        <li>Tax contribution over 20B yuan</li>
        <li>Credit rating AA</li>
        <li>Million-ton ethylene project operational</li>
        <li>40+ ships enjoyed zero-tariff policy</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Petrochemical companies, port logistics, energy traders, bonded processors, shipping firms, commodity traders</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park04: {
    id: 'park04',
    name_zh: '海口复兴城互联网信息产业园',
    name_en: 'Haikou Fuxingcheng Internet Industrial Park',
    icon: '4️⃣',
    position_zh: '海南互联网创新创业示范园区',
    position_en: 'Internet innovation & entrepreneurship demonstration park',
    
    intro_zh: `
      <h3>🌐 园区概况</h3>
      <p>海口复兴城互联网信息产业园位于海口滨海核心商业区，总面积1.64平方公里，是海南首个互联网创新创业园区。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>互联网：</strong>互联网应用、移动互联网、物联网</li>
        <li><strong>软件开发：</strong>软件研发、系统集成、信息服务</li>
        <li><strong>区块链：</strong>区块链技术、数字资产、应用开发</li>
        <li><strong>电子商务：</strong>跨境电商、社交电商、直播电商</li>
        <li><strong>游戏动漫：</strong>游戏研发、动漫制作、电竞产业</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>三年免租金</strong>：入驻企业前3年免租</li>
        <li>✅ <strong>创业补贴</strong>：创业团队最高50万补贴</li>
        <li>✅ <strong>人才奖励</strong>：技术人才最高100万奖励</li>
        <li>✅ <strong>投融资支持</strong>：政府引导基金支持</li>
        <li>✅ <strong>企业所得税15%</strong></li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>营收进入"千亿俱乐部"</li>
        <li>入驻企业超5000家</li>
        <li>国家级科技企业孵化器</li>
        <li>千亿级数字经济产业集群</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>互联网科技公司、软件开发企业、区块链企业、电商平台、游戏动漫公司、创业团队</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🌐 Overview</h3>
      <p>Fuxingcheng Park is located in Haikou's coastal core business area, covering 1.64 sq km. It's Hainan's first internet innovation & entrepreneurship park.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Internet:</strong> Internet applications, mobile internet, IoT</li>
        <li><strong>Software Development:</strong> R&D, system integration</li>
        <li><strong>Blockchain:</strong> Blockchain tech, digital assets</li>
        <li><strong>E-commerce:</strong> Cross-border, social, live-streaming</li>
        <li><strong>Games & Animation:</strong> Game dev, animation, e-sports</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>3-Year Rent-Free</strong>: First 3 years free rent</li>
        <li>✅ <strong>Startup Subsidy</strong>: Up to 500K yuan for teams</li>
        <li>✅ <strong>Talent Rewards</strong>: Up to 1M yuan for tech talents</li>
        <li>✅ <strong>Investment Support</strong>: Government-guided funds</li>
        <li>✅ <strong>15% Corporate Tax</strong></li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>Revenue entered "hundred-billion club"</li>
        <li>Over 5,000 enterprises registered</li>
        <li>National-level tech incubator</li>
        <li>Hundred-billion yuan digital economy cluster</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Internet tech companies, software developers, blockchain firms, e-commerce platforms, game companies, startups</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park05: {
    id: 'park05',
    name_zh: '陵水黎安国际教育创新试验区',
    name_en: 'Lingshui Li\'an International Education Pilot Zone',
    icon: '5️⃣',
    position_zh: '中国首个国际教育创新试验区',
    position_en: 'China\'s first international education innovation pilot zone',
    
    intro_zh: `
      <h3>🎓 园区概况</h3>
      <p>陵水黎安国际教育创新试验区位于陵水黎族自治县，是中国教育对外开放的新高地，规划面积7.2平方公里。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>国际教育：</strong>中外合作办学、国际学校</li>
        <li><strong>教育培训：</strong>职业教育、语言培训、技能培训</li>
        <li><strong>文化创意：</strong>文化产业、创意设计</li>
        <li><strong>教育科技：</strong>在线教育、教育软件、智慧教育</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>教育开放试点</strong>：独特的教育政策试验田</li>
        <li>✅ <strong>境外办学</strong>：境外高校独立办学许可</li>
        <li>✅ <strong>人才引进优惠</strong>：教育人才补贴、安居房</li>
        <li>✅ <strong>企业所得税15%</strong></li>
        <li>✅ <strong>学生签证便利</strong>：国际学生签证简化</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>签约引进高校22所</li>
        <li>8个中外合作办学项目获批</li>
        <li>入驻师生近2000人</li>
        <li>中国首个境外高校独立办学项目</li>
        <li>投资增长22.9%</li>
      </ul>
      
      <h3>🏫 入驻高校</h3>
      <ul>
        <li>海南比勒费尔德应用科学大学（德国）</li>
        <li>中国传媒大学（海南）</li>
        <li>电子科技大学（海南）</li>
        <li>北京体育大学（海南）</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>国际教育机构、职业培训学校、教育科技公司、文化创意企业、教育服务机构</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🎓 Overview</h3>
      <p>Li'an Pilot Zone is located in Lingshui, covering 7.2 sq km. It's China's first international education innovation pilot zone and new highland for education opening-up.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>International Education:</strong> Sino-foreign cooperation, international schools</li>
        <li><strong>Education & Training:</strong> Vocational education, language training</li>
        <li><strong>Cultural Creativity:</strong> Cultural industries, creative design</li>
        <li><strong>EdTech:</strong> Online education, educational software</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>Education Pilot</strong>: Unique education policy testbed</li>
        <li>✅ <strong>Foreign Schools</strong>: Independent foreign university licenses</li>
        <li>✅ <strong>Talent Benefits</strong>: Education talent subsidies, housing</li>
        <li>✅ <strong>15% Corporate Tax</strong></li>
        <li>✅ <strong>Student Visa</strong>: Simplified international student visas</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>22 universities signed</li>
        <li>8 Sino-foreign programs approved</li>
        <li>Nearly 2,000 faculty and students</li>
        <li>China's first independent foreign university</li>
        <li>Investment growth 22.9%</li>
      </ul>
      
      <h3>🏫 Resident Universities</h3>
      <ul>
        <li>Hainan Bielefeld University (Germany)</li>
        <li>Communication Univ. of China (Hainan)</li>
        <li>UESTC (Hainan)</li>
        <li>Beijing Sport University (Hainan)</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> International education institutions, vocational training schools, edtech companies, cultural enterprises, education services</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park06: {
    id: 'park06',
    name_zh: '博鳌乐城国际医疗旅游先行区',
    name_en: 'Boao Lecheng Medical Tourism Pilot Zone',
    icon: '6️⃣',
    position_zh: '国家唯一国际医疗旅游先行区',
    position_en: 'China\'s only international medical tourism pilot zone',
    
    intro_zh: `
      <h3>🏥 园区概况</h3>
      <p>博鳌乐城国际医疗旅游先行区位于琼海市博鳌镇，规划面积20平方公里，是中国唯一的国际医疗旅游先行区。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>高端医疗：</strong>特许医疗、前沿医疗技术</li>
        <li><strong>康养旅游：</strong>健康管理、康复疗养</li>
        <li><strong>医美抗衰：</strong>医疗美容、抗衰老治疗</li>
        <li><strong>干细胞治疗：</strong>再生医学、细胞治疗</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>进口药械特许准入</strong>：国际新药械同步使用</li>
        <li>✅ <strong>"国九条"特殊政策</strong>：全球独有医疗政策</li>
        <li>✅ <strong>零关税</strong>：进口医疗器械、药品免关税</li>
        <li>✅ <strong>真实世界数据应用</strong>：先行先试</li>
        <li>✅ <strong>企业所得税15%</strong></li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>引进国际创新药械360种</li>
        <li>13个特许药械获国内注册</li>
        <li>实现"三同步"（技术、装备、药品）</li>
        <li>服务患者超10万人次</li>
        <li>成为全球医疗技术展示窗口</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>国际医疗机构、康养中心、医美机构、医药研发企业、医疗器械公司、健康管理企业</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🏥 Overview</h3>
      <p>Boao Lecheng is located in Boao Town, Qionghai, covering 20 sq km. It's China's only international medical tourism pilot zone.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>High-end Medical:</strong> Privileged medicine, frontier medical tech</li>
        <li><strong>Health Tourism:</strong> Health management, rehabilitation</li>
        <li><strong>Medical Aesthetics:</strong> Medical beauty, anti-aging</li>
        <li><strong>Stem Cell Therapy:</strong> Regenerative medicine, cell therapy</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>Privileged Drug Access</strong>: Synchronized use of international new drugs</li>
        <li>✅ <strong>"Nine Policies"</strong>: Globally unique medical policies</li>
        <li>✅ <strong>Zero Tariff</strong>: Duty-free medical devices & drugs</li>
        <li>✅ <strong>Real-World Data</strong>: First to pilot application</li>
        <li>✅ <strong>15% Corporate Tax</strong></li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>360 international innovative drugs introduced</li>
        <li>13 privileged drugs registered domestically</li>
        <li>"Three synchronizations" achieved</li>
        <li>Over 100,000 patients served</li>
        <li>Became global medical tech showcase</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> International medical institutions, wellness centers, medical aesthetics, pharma R&D, medical device companies, health management</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park07: {
    id: 'park07',
    name_zh: '海口国家高新技术产业开发区',
    name_en: 'Haikou National Hi-tech Development Zone',
    icon: '7️⃣',
    position_zh: '国家级高新技术产业开发区',
    position_en: 'National-level hi-tech industrial development zone',
    
    intro_zh: `
      <h3>💊 园区概况</h3>
      <p>海口国家高新技术产业开发区是国务院批准的国家级高新区，重点发展生物医药、新能源、高端制造、人工智能等产业。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>生物医药：</strong>药品研发、生物制药、医疗器械</li>
        <li><strong>新能源：</strong>太阳能、风能、储能技术</li>
        <li><strong>高端制造：</strong>智能制造、精密制造</li>
        <li><strong>人工智能：</strong>AI应用、机器学习、智能系统</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>高新技术企业15%税率</strong></li>
        <li>✅ <strong>研发费用加计扣除</strong>：175%加计扣除</li>
        <li>✅ <strong>专利补贴</strong>：发明专利最高5万补贴</li>
        <li>✅ <strong>新药研发补助</strong>：创新药研发资金支持</li>
        <li>✅ <strong>生产设备零关税</strong></li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>500亿级生物医药产业集群</li>
        <li>税收55.82亿元（2023年）</li>
        <li>信用评级AA-</li>
        <li>入驻企业超1000家</li>
        <li>税收增长26.7%</li>
      </ul>
      
      <h3>🏭 重点企业</h3>
      <ul>
        <li>齐鲁制药海南分公司</li>
        <li>康芝药业</li>
        <li>海灵化学制药</li>
        <li>赛诺康药业</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>生物医药研发、医疗器械制造、新能源企业、高端制造业、AI科技公司、科技孵化器</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>💊 Overview</h3>
      <p>Haikou National Hi-tech Zone is approved by State Council, focusing on biopharmaceuticals, new energy, high-end manufacturing, and AI.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Biopharmaceuticals:</strong> Drug R&D, biological pharmaceuticals</li>
        <li><strong>New Energy:</strong> Solar, wind, energy storage</li>
        <li><strong>High-end Manufacturing:</strong> Intelligent & precision manufacturing</li>
        <li><strong>Artificial Intelligence:</strong> AI applications, machine learning</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>15% Tax for Hi-tech Enterprises</strong></li>
        <li>✅ <strong>R&D Super Deduction</strong>: 175% deduction</li>
        <li>✅ <strong>Patent Subsidy</strong>: Up to 50K yuan for invention patents</li>
        <li>✅ <strong>New Drug R&D Support</strong>: Innovation drug funding</li>
        <li>✅ <strong>Zero-Tariff Equipment</strong></li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>50-billion yuan biopharma cluster</li>
        <li>Tax contribution 5.582B yuan (2023)</li>
        <li>Credit rating AA-</li>
        <li>Over 1,000 enterprises</li>
        <li>Tax growth 26.7%</li>
      </ul>
      
      <h3>🏭 Key Enterprises</h3>
      <ul>
        <li>Qilu Pharmaceutical Hainan Branch</li>
        <li>Kangzhi Pharmaceutical</li>
        <li>Hailing Chemical Pharmaceutical</li>
        <li>Sainuokang Pharmaceutical</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Biopharma R&D, medical device manufacturing, new energy, high-end manufacturing, AI companies, tech incubators</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park08: {
    id: 'park08',
    name_zh: '三亚崖州湾科技城',
    name_en: 'Sanya Yazhou Bay Science & Technology City',
    icon: '8️⃣',
    position_zh: '南繁科技创新高地、深海科技城',
    position_en: 'Seed breeding highland, deep-sea technology city',
    
    intro_zh: `
      <h3>🌊 园区概况</h3>
      <p>三亚崖州湾科技城位于三亚市崖州区，规划面积26.1平方公里，由"一港、三城、一基地"组成，是中国深海科技和南繁育种的重要基地。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>南繁育种：</strong>种子研发、育种技术、种业科技</li>
        <li><strong>深海科技：</strong>深海装备、海洋资源开发</li>
        <li><strong>热带农业：</strong>热带作物、农业科技</li>
        <li><strong>海洋渔业：</strong>远洋渔业、水产养殖</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>科研设备零关税</strong>：进口科研设备免关税</li>
        <li>✅ <strong>人才补贴最高200万</strong>：顶尖人才安家费</li>
        <li>✅ <strong>科研项目资助</strong>：重大科研项目资金支持</li>
        <li>✅ <strong>企业所得税15%</strong></li>
        <li>✅ <strong>用地优惠</strong>：科研用地租金减免</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>信用评级AA+（最高）</li>
        <li>入驻高校及科研机构30余家</li>
        <li>深海装备研发国内领先</li>
        <li>南繁育种面积全国最大</li>
        <li>投资增长1.7%</li>
      </ul>
      
      <h3>🏫 入驻机构</h3>
      <ul>
        <li>中国海洋大学三亚海洋研究院</li>
        <li>上海交通大学三亚崖州湾深海科技研究院</li>
        <li>中国农业大学三亚研究院</li>
        <li>武汉理工大学三亚科教创新园</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>种业科技、深海装备制造、海洋生物医药、农业科技、科研服务、海洋渔业</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🌊 Overview</h3>
      <p>Yazhou Bay Sci-Tech City is located in Yazhou District, Sanya, covering 26.1 sq km. Composed of "one port, three cities, one base", it's China's important base for deep-sea tech and seed breeding.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Seed Breeding:</strong> Seed R&D, breeding technology</li>
        <li><strong>Deep-sea Technology:</strong> Deep-sea equipment, marine resources</li>
        <li><strong>Tropical Agriculture:</strong> Tropical crops, agri-tech</li>
        <li><strong>Marine Fishery:</strong> Ocean fishing, aquaculture</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>Zero-Tariff Equipment</strong>: Duty-free research equipment</li>
        <li>✅ <strong>Talent Subsidy up to 2M yuan</strong>: Top talent settlement allowance</li>
        <li>✅ <strong>Research Project Funding</strong>: Major research project support</li>
        <li>✅ <strong>15% Corporate Tax</strong></li>
        <li>✅ <strong>Land Benefits</strong>: Research land rent reduction</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>Credit rating AA+ (highest)</li>
        <li>Over 30 universities & research institutions</li>
        <li>Leading deep-sea equipment R&D in China</li>
        <li>Largest seed breeding area nationally</li>
        <li>Investment growth 1.7%</li>
      </ul>
      
      <h3>🏫 Resident Institutions</h3>
      <ul>
        <li>Ocean University of China Sanya Research Institute</li>
        <li>Shanghai Jiao Tong Univ. Deep-sea Tech Research Institute</li>
        <li>China Agricultural Univ. Sanya Research Institute</li>
        <li>Wuhan Univ. of Tech Sanya Sci-Edu Innovation Park</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Seed industry tech, deep-sea equipment, marine biomedicine, agri-tech, research services, marine fishery</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park09: {
    id: 'park09',
    name_zh: '海口综合保税区',
    name_en: 'Haikou Comprehensive Bonded Zone',
    icon: '9️⃣',
    position_zh: '海南首个综合保税区',
    position_en: 'Hainan\'s first comprehensive bonded zone',
    
    intro_zh: `
      <h3>🚢 园区概况</h3>
      <p>海口综合保税区是经国务院批准设立，海南唯一的综合保税区，规划面积4.59平方公里，是海南开放层次最高的园区。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>保税物流：</strong>国际中转、保税仓储、配送</li>
        <li><strong>国际贸易：</strong>转口贸易、离岸贸易</li>
        <li><strong>跨境电商：</strong>跨境电商平台、海外仓</li>
        <li><strong>保税加工：</strong>保税制造、加工贸易</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>保税仓储</strong>：进口货物保税存储</li>
        <li>✅ <strong>出口退税</strong>：出口货物退税</li>
        <li>✅ <strong>进口免税</strong>：境内进入保税区免税</li>
        <li>✅ <strong>跨境电商试点</strong>：跨境电商综合试验区</li>
        <li>✅ <strong>企业所得税15%</strong></li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>千亿级产业集群</li>
        <li>投资增长150%（2023年）</li>
        <li>跨境电商交易额突破百亿</li>
        <li>入驻企业800余家</li>
        <li>消费精品贸易与加工集群</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>跨境电商平台、保税加工制造、国际贸易企业、保税物流服务、进出口企业</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🚢 Overview</h3>
      <p>Haikou Comprehensive Bonded Zone is approved by State Council, covering 4.59 sq km. It's Hainan's only comprehensive bonded zone with the highest opening level.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Bonded Logistics:</strong> International transit, bonded warehousing</li>
        <li><strong>International Trade:</strong> Transit trade, offshore trade</li>
        <li><strong>Cross-border E-commerce:</strong> Platforms, overseas warehouses</li>
        <li><strong>Bonded Processing:</strong> Bonded manufacturing, processing trade</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>Bonded Warehousing</strong>: Tax-deferred storage for imports</li>
        <li>✅ <strong>Export Tax Rebate</strong>: Tax refund for exports</li>
        <li>✅ <strong>Import Tax-Free</strong>: Duty-free for domestic goods entering zone</li>
        <li>✅ <strong>E-commerce Pilot</strong>: Cross-border e-commerce comprehensive pilot</li>
        <li>✅ <strong>15% Corporate Tax</strong></li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>Hundred-billion yuan industrial cluster</li>
        <li>Investment growth 150% (2023)</li>
        <li>Cross-border e-commerce exceeded 10B yuan</li>
        <li>Over 800 enterprises registered</li>
        <li>Consumer goods trade & processing cluster</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Cross-border e-commerce platforms, bonded processors, international traders, bonded logistics, import/export companies</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park10: {
    id: 'park10',
    name_zh: '海南生态软件园',
    name_en: 'Hainan Ecological Software Park',
    icon: '🔟',
    position_zh: '中国互联网产业新高地',
    position_en: 'New highland for China\'s internet industry',
    
    intro_zh: `
      <h3>💻 园区概况</h3>
      <p>海南生态软件园位于澄迈县老城镇，规划面积15.58平方公里，是海南数字经济发展的主要载体和平台。2023年3月与金马物流园、老城经济开发区合并为老城科技新城。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>互联网：</strong>互联网平台、互联网应用</li>
        <li><strong>游戏电竞：</strong>游戏研发、电竞赛事</li>
        <li><strong>大数据：</strong>数据中心、数据分析、云计算</li>
        <li><strong>人工智能：</strong>AI应用、智能系统</li>
        <li><strong>区块链：</strong>区块链技术、数字资产</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>企业所得税15%</strong></li>
        <li>✅ <strong>办公租金补贴</strong>：前3年租金补贴50%</li>
        <li>✅ <strong>人才安居房</strong>：提供人才公寓</li>
        <li>✅ <strong>子女入学</strong>：国际学校、优质教育资源</li>
        <li>✅ <strong>数字健康产业扶持</strong></li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>2023年营收超2300亿元</li>
        <li>全口径税收贡献152亿元</li>
        <li>入驻企业1.4万家</li>
        <li>注册员工2.9万人</li>
        <li>国家区块链试验区</li>
      </ul>
      
      <h3>🏢 入驻企业</h3>
      <ul>
        <li>腾讯（员工超1000人）</li>
        <li>百度（员工400余人）</li>
        <li>华为</li>
        <li>字节跳动</li>
        <li>阅文集团</li>
        <li>唯品会</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>互联网科技企业、游戏公司、区块链企业、数字健康服务、大数据公司、AI企业</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>💻 Overview</h3>
      <p>Ecological Software Park is located in Laocheng, Chengmai, covering 15.58 sq km. It's the main carrier of Hainan's digital economy. Merged with Jinma Logistics and Laocheng Economic Zone in March 2023 to form Laocheng Science & Technology New City.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Internet:</strong> Internet platforms, applications</li>
        <li><strong>Games & E-sports:</strong> Game development, e-sports events</li>
        <li><strong>Big Data:</strong> Data centers, data analytics, cloud computing</li>
        <li><strong>Artificial Intelligence:</strong> AI applications, intelligent systems</li>
        <li><strong>Blockchain:</strong> Blockchain technology, digital assets</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>15% Corporate Tax</strong></li>
        <li>✅ <strong>Office Rent Subsidy</strong>: 50% rent subsidy for first 3 years</li>
        <li>✅ <strong>Talent Housing</strong>: Talent apartments provided</li>
        <li>✅ <strong>Children's Education</strong>: International schools, quality education</li>
        <li>✅ <strong>Digital Health Support</strong></li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>Revenue exceeded 230B yuan in 2023</li>
        <li>Full-caliber tax contribution 15.2B yuan</li>
        <li>14,000 enterprises registered</li>
        <li>29,000 employees registered</li>
        <li>National blockchain pilot zone</li>
      </ul>
      
      <h3>🏢 Resident Enterprises</h3>
      <ul>
        <li>Tencent (over 1,000 employees)</li>
        <li>Baidu (over 400 employees)</li>
        <li>Huawei</li>
        <li>ByteDance</li>
        <li>Yuewen Group</li>
        <li>Vipshop</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Internet tech companies, game companies, blockchain firms, digital health services, big data companies, AI enterprises</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park11: {
    id: 'park11',
    name_zh: '海口国家高新区美安科技新城',
    name_en: 'Haikou National Hi-tech Zone Meian Sci-Tech City',
    icon: '1️⃣1️⃣',
    position_zh: '海口国家高新区核心片区，生物医药产业基地',
    position_en: 'Core area of Haikou Hi-tech Zone, biopharmaceutical base',
    
    intro_zh: `
      <h3>💊 园区概况</h3>
      <p>美安科技新城是海口国家高新区核心片区，重点打造生物医药产业基地，是海南省生物医药产业的主要聚集区。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>生物医药：</strong>新药研发、生物制药、中药现代化</li>
        <li><strong>医疗器械：</strong>医疗设备、诊断试剂、医用耗材</li>
        <li><strong>智能制造：</strong>医药智能制造、自动化设备</li>
        <li><strong>精准医疗：</strong>基因检测、个性化治疗</li>
        <li><strong>新材料：</strong>医用新材料、生物材料</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>高新技术企业15%税率</strong></li>
        <li>✅ <strong>新药研发补助</strong>：创新药研发最高1000万补助</li>
        <li>✅ <strong>生产设备零关税</strong>：进口生产设备免关税</li>
        <li>✅ <strong>GMP认证奖励</strong>：通过GMP认证奖励50万</li>
        <li>✅ <strong>人才引进补贴</strong>：医药人才最高100万</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>500亿级生物医药产业集群</li>
        <li>入驻医药企业超200家</li>
        <li>多个一类新药获批</li>
        <li>GMP认证企业80余家</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>生物医药研发、医疗器械制造、精准医疗、新药研发、医药外包服务</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>💊 Overview</h3>
      <p>Meian Sci-Tech City is the core area of Haikou National Hi-tech Zone, focusing on building a biopharmaceutical industrial base. It's the main concentration area for Hainan's biopharmaceutical industry.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Biopharmaceuticals:</strong> New drug R&D, biopharmaceuticals, modern TCM</li>
        <li><strong>Medical Devices:</strong> Medical equipment, diagnostic reagents, consumables</li>
        <li><strong>Intelligent Manufacturing:</strong> Pharma intelligent manufacturing, automation</li>
        <li><strong>Precision Medicine:</strong> Gene testing, personalized treatment</li>
        <li><strong>New Materials:</strong> Medical new materials, biomaterials</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>15% Tax for Hi-tech Enterprises</strong></li>
        <li>✅ <strong>New Drug R&D Subsidy</strong>: Up to 10M yuan for innovative drugs</li>
        <li>✅ <strong>Zero-Tariff Equipment</strong>: Duty-free production equipment</li>
        <li>✅ <strong>GMP Certification Reward</strong>: 500K yuan for GMP certification</li>
        <li>✅ <strong>Talent Subsidy</strong>: Up to 1M yuan for pharma talents</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>50-billion yuan biopharma cluster</li>
        <li>Over 200 pharmaceutical enterprises</li>
        <li>Multiple Class I new drugs approved</li>
        <li>Over 80 GMP-certified enterprises</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Biopharma R&D, medical device manufacturing, precision medicine, new drug R&D, pharma outsourcing services</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park12: {
    id: 'park12',
    name_zh: '三亚科技城（三亚市高新技术产业园）',
    name_en: 'Sanya Sci-Tech City (Hi-tech Industrial Park)',
    icon: '1️⃣2️⃣',
    position_zh: '三亚科技创新中心，国家级科技企业孵化器',
    position_en: 'Sanya tech innovation center, national-level tech incubator',
    
    intro_zh: `
      <h3>🚀 园区概况</h3>
      <p>三亚科技城是三亚市高新技术产业园，定位为三亚科技创新中心，是国家级科技企业孵化器，重点发展高新技术、科技研发等产业。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>高新技术：</strong>高新技术研发、技术转化</li>
        <li><strong>科技研发：</strong>科研项目、技术创新</li>
        <li><strong>新一代信息技术：</strong>5G、物联网、云计算</li>
        <li><strong>节能环保：</strong>新能源、环保技术</li>
        <li><strong>智慧城市：</strong>智慧交通、智慧管理</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>企业所得税15%</strong></li>
        <li>✅ <strong>研发费用加计扣除</strong>：175%加计扣除</li>
        <li>✅ <strong>科技成果转化奖励</strong>：最高500万奖励</li>
        <li>✅ <strong>创业孵化补贴</strong>：入孵企业租金减免</li>
        <li>✅ <strong>人才补贴</strong>：科技人才最高50万</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>国家级科技企业孵化器</li>
        <li>入驻科技企业超300家</li>
        <li>多项科技成果转化</li>
        <li>创新创业活跃</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>高新技术企业、科技研发机构、信息技术公司、节能环保企业、创业团队</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>🚀 Overview</h3>
      <p>Sanya Sci-Tech City is Sanya's hi-tech industrial park, positioned as the tech innovation center. It's a national-level tech enterprise incubator, focusing on hi-tech and R&D.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Hi-tech:</strong> Hi-tech R&D, technology transformation</li>
        <li><strong>Tech R&D:</strong> Research projects, tech innovation</li>
        <li><strong>New-gen IT:</strong> 5G, IoT, cloud computing</li>
        <li><strong>Energy Conservation:</strong> New energy, environmental tech</li>
        <li><strong>Smart City:</strong> Smart transportation, smart management</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>15% Corporate Tax</strong></li>
        <li>✅ <strong>R&D Super Deduction</strong>: 175% deduction</li>
        <li>✅ <strong>Tech Transformation Reward</strong>: Up to 5M yuan</li>
        <li>✅ <strong>Incubation Subsidy</strong>: Rent reduction for incubated companies</li>
        <li>✅ <strong>Talent Subsidy</strong>: Up to 500K yuan for tech talents</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>National-level tech enterprise incubator</li>
        <li>Over 300 tech enterprises registered</li>
        <li>Multiple tech transformation achievements</li>
        <li>Active innovation & entrepreneurship</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Hi-tech enterprises, tech R&D institutions, IT companies, energy conservation firms, startup teams</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  },

  park13: {
    id: 'park13',
    name_zh: '海南数据谷（大数据产业园）',
    name_en: 'Hainan Data Valley (Big Data Industrial Park)',
    icon: '1️⃣3️⃣',
    position_zh: '海南省大数据产业集聚区，数字经济示范园区',
    position_en: 'Big data industrial cluster, digital economy demonstration park',
    
    intro_zh: `
      <h3>📊 园区概况</h3>
      <p>海南数据谷是海南省大数据产业集聚区和数字经济示范园区，重点发展大数据、云计算、数字经济等产业。</p>
      
      <h3>💼 产业定位</h3>
      <ul>
        <li><strong>大数据：</strong>数据采集、数据分析、数据应用</li>
        <li><strong>云计算：</strong>云服务、云存储、云平台</li>
        <li><strong>数字经济：</strong>数字贸易、数字金融、数字内容</li>
        <li><strong>数据中心：</strong>IDC数据中心、云数据中心</li>
        <li><strong>软件服务：</strong>软件开发、系统集成、IT服务</li>
        <li><strong>数据安全：</strong>网络安全、数据安全、信息安全</li>
      </ul>
      
      <h3>🎁 政策优惠</h3>
      <ul>
        <li>✅ <strong>企业所得税15%</strong></li>
        <li>✅ <strong>数据中心电费优惠</strong>：数据中心用电优惠价格</li>
        <li>✅ <strong>服务器设备零关税</strong>：进口服务器设备免关税</li>
        <li>✅ <strong>数字人才补贴</strong>：数字人才最高80万补贴</li>
        <li>✅ <strong>研发费用加计扣除</strong>：175%加计扣除</li>
      </ul>
      
      <h3>📊 发展成就</h3>
      <ul>
        <li>数字经济示范园区</li>
        <li>入驻大数据企业超100家</li>
        <li>建成大型数据中心3个</li>
        <li>数字经济产业快速发展</li>
      </ul>
      
      <h3>💡 投资机会</h3>
      <p><strong>适合企业类型：</strong>大数据公司、云计算企业、数据中心运营商、软件开发公司、数字经济企业、网络安全公司</p>
      
      <h3>📞 联系方式</h3>
      <p>咨询热线：<strong>181-1779-0507</strong><br>
      微信：<strong>kosok_hainan</strong></p>
    `,
    
    intro_en: `
      <h3>📊 Overview</h3>
      <p>Hainan Data Valley is the province's big data industrial cluster and digital economy demonstration park, focusing on big data, cloud computing, and digital economy.</p>
      
      <h3>💼 Industrial Focus</h3>
      <ul>
        <li><strong>Big Data:</strong> Data collection, analysis, application</li>
        <li><strong>Cloud Computing:</strong> Cloud services, cloud storage, cloud platforms</li>
        <li><strong>Digital Economy:</strong> Digital trade, digital finance, digital content</li>
        <li><strong>Data Centers:</strong> IDC data centers, cloud data centers</li>
        <li><strong>Software Services:</strong> Software development, system integration, IT services</li>
        <li><strong>Data Security:</strong> Network security, data security, information security</li>
      </ul>
      
      <h3>🎁 Preferential Policies</h3>
      <ul>
        <li>✅ <strong>15% Corporate Tax</strong></li>
        <li>✅ <strong>Data Center Electricity Discount</strong>: Preferential electricity prices</li>
        <li>✅ <strong>Zero-Tariff Server Equipment</strong>: Duty-free imported servers</li>
        <li>✅ <strong>Digital Talent Subsidy</strong>: Up to 800K yuan for digital talents</li>
        <li>✅ <strong>R&D Super Deduction</strong>: 175% deduction</li>
      </ul>
      
      <h3>📊 Achievements</h3>
      <ul>
        <li>Digital economy demonstration park</li>
        <li>Over 100 big data enterprises</li>
        <li>3 large data centers completed</li>
        <li>Rapid digital economy development</li>
      </ul>
      
      <h3>💡 Investment Opportunities</h3>
      <p><strong>Suitable for:</strong> Big data companies, cloud computing firms, data center operators, software developers, digital economy enterprises, cybersecurity companies</p>
      
      <h3>📞 Contact</h3>
      <p>Hotline: <strong>181-1779-0507</strong><br>
      WeChat: <strong>kosok_hainan</strong></p>
    `
  }
};

// 弹窗显示函数
function showParkDetail(parkId) {
  const park = parksDetailData[parkId];
  if (!park) {
    console.error('园区数据未找到:', parkId);
    return;
  }
  
  const lang = currentLang || 'zh';
  const modal = document.getElementById('parkDetailModal');
  
  if (!modal) {
    console.error('弹窗元素未找到');
    return;
  }
  
  // 设置标题
  document.getElementById('parkModalTitle').textContent = 
    lang === 'zh' ? park.name_zh : park.name_en;
  
  // 设置副标题
  document.getElementById('parkModalSubtitle').textContent = 
    lang === 'zh' ? park.position_zh : park.position_en;
  
  // 设置内容
  document.getElementById('parkModalContent').innerHTML = 
    lang === 'zh' ? park.intro_zh : park.intro_en;
  
  // 显示弹窗
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeParkDetail() {
  const modal = document.getElementById('parkDetailModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ESC键关闭
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeParkDetail();
  }
});
