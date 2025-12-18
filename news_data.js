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
    tags_en: ['Closure Operation', 'Zero Tariff', 'Policy Benefits'],
    detail_zh: `2025年12月18日，海南自由贸易港正式启动全岛封关运作，这是中国改革开放史上的历史性时刻。

**核心政策"四个更加"：**

**1. 更加优惠的"零关税"政策**
"零关税"商品税目比例从21%大幅提升至74%，涵盖6,637个税目。在岛内享惠主体之间可以免进口税收流通，加工增值达到30%的可免关税销往内地。

**2. 更加宽松的贸易管理措施**
在"一线"进口方向，对全国现有的部分禁止、限制类进口货物作出开放性安排，贸易便利化水平大幅提升。

**3. 更加便利的通行措施**
设立8个对外开放口岸作为"一线"口岸，10个"二线口岸"，对符合条件的进口货物径予放行。海口新海港年设计查验能力达172万辆车次。

**4. 更加高效精准的监管模式**
海关智慧监管平台启用，对"零关税"货物实行低干预、高效率的精准监管，保障各项开放政策平稳落地。

**重大利好：**
- 企业所得税和个人所得税均为15%
- 86个国家或地区人员可免签入境海南
- 176个国家和地区在琼投资
- 2020-2024年实际使用外资1667亿元

封关不是封岛，而是更大力度的开放！海南正式成为引领中国新时代对外开放的重要门户。`,
    detail_en: `On December 18, 2025, Hainan Free Trade Port officially launched island-wide closure operation, marking a historic moment in China's reform and opening-up.

**Four Core Policies:**

**1. More Favorable Zero-Tariff Policy**
Zero-tariff coverage increased from 21% to 74%, covering 6,637 items. Goods can flow tax-free among qualified entities within the island, and products with 30%+ value-added can be sold to mainland duty-free.

**2. More Relaxed Trade Management**
Relaxed import restrictions at the "first line", significantly improving trade facilitation.

**3. More Convenient Access**
8 opening ports as "first line" ports, 10 "second line" ports. Haikou Port annual capacity: 1.72 million vehicles.

**4. More Efficient Supervision**
Smart customs supervision platform with low-intervention, high-efficiency precision management.

**Major Benefits:**
- 15% corporate and personal income tax
- 86 countries/regions visa-free entry
- 176 countries/regions investing in Hainan
- 166.7 billion RMB FDI (2020-2024)

Closure means greater opening! Hainan becomes China's gateway to the world.`
  },
  {
    id: 'news_20241127',
    date: '2024-11-27',
    title_zh: '📈 人才个税政策延续',
    title_en: '📈 Talent Tax Policy Extended',
    content_zh: '高端人才个税超15%部分免征政策延续至2035年，吸引更多国际人才。',
    content_en: 'High-end talent tax benefits (15%+exempt) extended to 2035, attracting more international talent.',
    tags_zh: ['人才政策', '个税优惠'],
    tags_en: ['Talent Policy', 'Tax Benefits'],
    detail_zh: `海南自贸港高端人才个人所得税优惠政策正式延续至2035年。

**政策内容：**
对在海南自由贸易港工作的高端人才和紧缺人才，其个人所得税实际税负超过15%的部分，予以免征。

**适用范围：**
- 符合海南自贸港需求的高端人才
- 各行业紧缺专业人才
- 在海南实质性运营的企业员工

**优惠力度：**
相比内地25%-45%的个税税率，海南最高仅15%，对高收入人才吸引力巨大。

**申请条件：**
- 在海南自贸港工作
- 属于鼓励类产业
- 实际居住时间符合要求

此政策是海南"百万人才进海南"行动计划的重要配套，截至目前已累计引进人才85.1万人。`,
    detail_en: `Hainan FTP high-end talent personal income tax preferential policy officially extended to 2035.

**Policy Details:**
For high-end and urgently-needed talents working in Hainan FTP, the portion of personal income tax exceeding 15% will be exempted.

**Applicable Scope:**
- High-end talents meeting Hainan FTP needs
- Urgently-needed professionals in various industries
- Employees of enterprises with substantive operations in Hainan

**Benefits:**
Compared to mainland's 25%-45% personal income tax rates, Hainan's maximum of only 15% is highly attractive to high-income talents.

**Application Requirements:**
- Working in Hainan FTP
- In encouraged industries
- Meeting actual residence time requirements

This policy is a key supporting measure for Hainan's "One Million Talents to Hainan" action plan. To date, 851,000 talents have been attracted.`
  },
  {
    id: 'news_20241115',
    date: '2024-11-15',
    title_zh: '🎯 总书记考察海南',
    title_en: '🎯 President Inspects Hainan',
    content_zh: '习近平总书记强调加快建设具有世界影响力的自由贸易港，对海南发展提出新要求。',
    content_en: 'President Xi emphasized building a world-class free trade port, setting new requirements for Hainan.',
    tags_zh: ['领导关怀', '战略定位'],
    tags_en: ['Leadership', 'Strategic Position'],
    detail_zh: `2024年11月，习近平总书记在海南考察时强调，要认真落实党中央关于海南自由贸易港建设的各项部署。

**重要指示：**
"建设海南自由贸易港的战略目标，就是要把海南自由贸易港打造成为引领我国新时代对外开放的重要门户。要锚定这个战略目标不动摇，全面落实海南自由贸易港建设总体方案。"

**新要求：**
1. 科学谋划封关前后的改革开放工作
2. 确保封关运作平稳有序
3. 加快制度集成创新
4. 推动高质量发展

**战略定位：**
- 引领我国新时代对外开放的重要门户
- 展示中国开放形象的重要窗口
- 促进国内国际双循环的重要交汇点

习近平总书记的重要指示为海南自贸港建设指明了方向，增强了全省上下的信心和决心。`,
    detail_en: `In November 2024, President Xi Jinping emphasized implementing all Party Central Committee deployments for Hainan FTP construction during his inspection.

**Key Instructions:**
"The strategic goal of building Hainan Free Trade Port is to make it an important gateway leading China's new era of opening-up. We must anchor this goal and fully implement the overall plan."

**New Requirements:**
1. Scientifically plan reform and opening work before and after closure
2. Ensure smooth and orderly closure operation
3. Accelerate institutional integrated innovation
4. Promote high-quality development

**Strategic Positioning:**
- Important gateway leading China's new era of opening-up
- Important window showcasing China's open image
- Important intersection promoting domestic and international circulation

President Xi's instructions provide clear direction and strengthen confidence for Hainan FTP construction.`
  },
  {
    id: 'news_20241101',
    date: '2024-11-01',
    title_zh: '💼 前11月外贸大增',
    title_en: '💼 Foreign Trade Surges',
    content_zh: '2024年前11月进出口总额增长19.4%，外向型经济发展迅速。',
    content_en: 'Jan-Nov 2024 trade up 19.4%, rapid development of export-oriented economy.',
    tags_zh: ['外贸数据', '经济增长'],
    tags_en: ['Trade Data', 'Economic Growth'],
    detail_zh: `2024年前11个月，海南自贸港进出口总额实现大幅增长，外向型经济发展势头强劲。

**关键数据：**
- 进出口总额增长19.4%
- 货物贸易年均增速超30%
- 服务贸易年均增速超31%
- 2024年全年贸易总额预计突破2800亿元

**增长亮点：**
1. **对外开放口岸效应显现**
   8个对外开放口岸全面运营，通关效率大幅提升

2. **"零关税"政策带动**
   原辅料、设备等零关税政策吸引大量企业入驻

3. **加工增值免关税**
   累计享受关税减免超8亿元

4. **国际航线扩容**
   开通超过80条境外客运和货物航线

**区域合作：**
与40个境外自贸区（港）建立伙伴关系，贸易进出口总额较2020年增长2倍。

外向型经济的快速发展，标志着海南自贸港国际影响力持续提升。`,
    detail_en: `In the first 11 months of 2024, Hainan FTP's total import and export volume achieved significant growth, with strong momentum in export-oriented economy.

**Key Data:**
- Total import-export up 19.4%
- Goods trade annual growth over 30%
- Service trade annual growth over 31%
- 2024 total trade expected to exceed 280 billion RMB

**Growth Highlights:**
1. **Opening Port Effects**
   8 opening ports fully operational, customs clearance efficiency greatly improved

2. **Zero-Tariff Policy Drive**
   Zero-tariff policies attract numerous enterprises

3. **Value-Added Duty Exemption**
   Cumulative tariff reduction exceeds 800 million RMB

4. **International Route Expansion**
   Over 80 overseas passenger and cargo routes opened

**Regional Cooperation:**
Partnerships with 40 overseas FTZs/ports, trade volume tripled since 2020.

The rapid development of export-oriented economy marks Hainan FTP's rising international influence.`
  },
  {
    id: 'news_20241015',
    date: '2024-10-15',
    title_zh: '🚀 洋浦港跃居全国第二',
    title_en: '🚀 Yangpu Port Ranks 2nd Nationally',
    content_zh: '"中国洋浦港"船籍港国际航行船舶总吨位跃居全国第二，航运枢纽地位凸显。',
    content_en: 'Yangpu Port international vessel tonnage ranks 2nd nationally, highlighting shipping hub status.',
    tags_zh: ['航运发展', '港口建设'],
    tags_en: ['Shipping', 'Port Development'],
    detail_zh: `"中国洋浦港"船籍港建设取得重大突破，国际航行船舶总吨位跃居全国第二位。

**发展成就：**
- 登记国际船舶66艘
- 运力规模居全国自贸区首位
- 国际航行船舶总吨位全国第二

**政策优势：**
1. **船舶登记便利**
   简化登记流程，最快3天完成

2. **税收优惠**
   船舶租赁、融资等享受优惠政策

3. **国际航线丰富**
   连接RCEP国家及"一带一路"共建国家

4. **服务体系完善**
   提供一站式船舶服务

**战略意义：**
- 强化海南国际航运枢纽地位
- 服务"一带一路"建设
- 推动海洋强国战略
- 促进区域经济一体化

**未来展望：**
将进一步优化营商环境，吸引更多国际船舶注册，打造世界一流船籍港。`,
    detail_en: `"China Yangpu Port" ship registry achieved major breakthrough, international vessel tonnage ranks 2nd nationally.

**Development Achievements:**
- 66 international vessels registered
- Leading capacity among Chinese FTZs
- 2nd nationally in international vessel tonnage

**Policy Advantages:**
1. **Convenient Registration**
   Simplified process, as fast as 3 days

2. **Tax Benefits**
   Preferential policies for ship leasing, financing

3. **Rich International Routes**
   Connecting RCEP countries and Belt & Road nations

4. **Complete Service System**
   One-stop ship services

**Strategic Significance:**
- Strengthen Hainan's international shipping hub status
- Serve Belt & Road Initiative
- Promote maritime power strategy
- Facilitate regional economic integration

**Future Outlook:**
Further optimize business environment, attract more international vessel registrations, build world-class ship registry.`
  },
  {
    id: 'news_20240920',
    date: '2024-09-20',
    title_zh: '🌏 86国免签入境',
    title_en: '🌏 86 Countries Visa-Free',
    content_zh: '海南免签国家增至86个，停留30天，事由扩展至商贸、医疗、会展等。',
    content_en: '86 countries enjoy visa-free entry, 30-day stay, expanded to business, medical, exhibition purposes.',
    tags_zh: ['免签政策', '人员往来'],
    tags_en: ['Visa-Free', 'Personnel Exchange'],
    detail_zh: `海南自贸港免签政策再次升级，免签国家增至86个，大幅提升人员往来便利度。

**政策要点：**
- **免签国家：** 86个国家或地区
- **停留时间：** 30天
- **适用事由：** 旅游、商贸、访问、探亲、医疗、会展、体育竞技等

**主要免签国家包括：**
- 欧洲：英国、法国、德国、意大利、西班牙等
- 美洲：美国、加拿大、巴西、阿根廷等
- 亚洲：日本、韩国、新加坡、马来西亚等
- 大洋洲：澳大利亚、新Zealand等

**政策优势：**
1. 事由范围广，涵盖商务、旅游、医疗等多个领域
2. 停留时间长，30天足够深度体验
3. 办理便捷，无需提前申请签证
4. 多次往返，一年内可多次使用

**数据亮点：**
2024年入境过夜游客111万人次，同比增长115.6%。免签政策成为吸引国际游客的重要因素。

**未来展望：**
将继续扩大免签国家范围，进一步提升海南国际化水平。`,
    detail_en: `Hainan FTP visa-free policy upgraded again, expanded to 86 countries, significantly improving personnel exchange convenience.

**Policy Highlights:**
- **Visa-Free Countries:** 86 countries/regions
- **Stay Duration:** 30 days
- **Purposes:** Tourism, business, visits, family, medical, exhibitions, sports, etc.

**Major Visa-Free Countries:**
- Europe: UK, France, Germany, Italy, Spain, etc.
- Americas: USA, Canada, Brazil, Argentina, etc.
- Asia: Japan, Korea, Singapore, Malaysia, etc.
- Oceania: Australia, New Zealand, etc.

**Policy Advantages:**
1. Wide range of purposes covering business, tourism, medical, etc.
2. Extended stay of 30 days for in-depth experience
3. Convenient processing without prior visa application
4. Multiple entries allowed within one year

**Data Highlights:**
1.11 million inbound overnight tourists in 2024, up 115.6% YoY. Visa-free policy is a key factor attracting international visitors.

**Future Outlook:**
Continue expanding visa-free countries to further enhance Hainan's internationalization.`
  }
];
