/**
 * 🛠️ SOLANA HAINAN - 13大园区官方数据库 (全内容增强版)
 * 任务：补全所有园区的详细招商信息、政策红利、产业定位
 */
window.parksData = {
    "jiangdong": {
        name: { cn: "海口江东新区", en: "Haikou Jiangdong New Area", ru: "Район Цзяндун" },
        subtitle: { cn: "自贸港总部经济区与现代服务业集聚区", en: "HQ Economy & Modern Services Hub", ru: "Центр современных услуг" },
        detail_zh: `
            <div class="space-y-6">
                <div class="bg-blue-600/10 p-4 border-l-4 border-blue-600">
                    <p class="text-white font-bold">📍 核心定位：全面深化改革开放试验区的展示区</p>
                </div>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业集群</h3>
                    <p class="leading-relaxed">重点发展总部经济、现代服务业、临空经济。目前已吸引超过40家世界500强企业入驻。这里依托美兰国际机场，是海南联通全球的航空枢纽。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>双15%税收：</strong> 企业所得税15%，高端人才个税15%封顶。</li>
                        <li><strong>临空红利：</strong> 航空维修零关税、跨境电商提货免税。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Haikou Jiangdong New Area is the pioneer zone of Hainan FTP, focusing on HQ economy and aero-industries.</p>`
    },
    "fullsing": {
        name: { cn: "海口复兴城互联网园", en: "Haikou Fullsing Internet Park", ru: "IT-парк Фусинчэн" },
        subtitle: { cn: "数字经济与智能物联高地", en: "Digital Economy & IoT Hub", ru: "Центр цифровой экономики" },
        detail_zh: `
            <div class="space-y-6">
                <div class="bg-blue-600/10 p-4 border-l-4 border-blue-600">
                    <p class="text-white font-bold">📍 核心定位：海南数字经济发展的核心区</p>
                </div>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>聚焦数字贸易、智能物联、金融科技和离岸数据处理。作为“产城融合”示范区，集办公、住宅、教育、医疗于一体。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>离岸业务：</strong> 支持跨境数据流动及国际云服务试点。</li>
                        <li><strong>投融资：</strong> 享受QFLP/QDLP等跨境投融资便利化政策。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Focuses on Digital Trade, IoT, and FinTech. A leading area for digital economy.</p>`
    },
    "yazhou": {
        name: { cn: "三亚崖州湾科技城", en: "Sanya Yazhou Bay Sci-Tech City", ru: "Наукоград залива Ячжоу" },
        subtitle: { cn: "国家级南繁硅谷与深海科技高地", en: "Nanfan & Deep-Sea Tech Hub", ru: "Центр селекции и технологий" },
        detail_zh: `
            <div class="space-y-6">
                <div class="bg-blue-600/10 p-4 border-l-4 border-blue-600">
                    <p class="text-white font-bold">📍 核心定位：陆海科技创新中心</p>
                </div>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>布局“南繁硅谷”（种业育种）和“深海科技”。作为深海空间站的后勤保障基地，重点发展海洋装备、生物育种。已引入上海交大、浙大等知名高校科教资源。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>专利红利：</strong> 享受极速专利授权通道及知识产权特别保护。</li>
                        <li><strong>研发奖补：</strong> 对高新技术研发投入给予高比例资金返还。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>National Seed Industry (Nanfan Silicon Valley) and Deep-sea Technology Research Hub.</p>`
    },
    "sanya_cbd": {
        name: { cn: "三亚中央商务区", en: "Sanya CBD", ru: "Sanya CBD" },
        subtitle: { cn: "邮轮游艇与财富管理集聚区", en: "Cruise, Yacht & Finance", ru: "Яхты и финансы" },
        detail_zh: `
            <div class="space-y-6">
                <div class="bg-blue-600/10 p-4 border-l-4 border-blue-600">
                    <p class="text-white font-bold">📍 核心定位：国际旅游消费中心的重要门户</p>
                </div>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>重点发展邮轮游艇产业、现代金融（财富管理）以及高端商贸。这里是海南自贸港首个推行“免审即核”制度的园区。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>游艇自由行：</strong> 率先实施琼港澳游艇自由行，外籍游艇入境免担保。</li>
                        <li><strong>财富管理：</strong> 享受QFLP基金注册绿色通道。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Focuses on Cruises, Yachts, Modern Finance, and HQ Economy.</p>`
    },
    "yangpu": {
        name: { cn: "洋浦经济开发区", en: "Yangpu Economic Development Zone", ru: "Зона Янпу" },
        subtitle: { cn: "西部陆海新通道枢纽", en: "Logistics & Petrochemical Hub", ru: "Логистический хаб" },
        detail_zh: `
            <div class="space-y-6">
                <div class="bg-blue-600/10 p-4 border-l-4 border-blue-600">
                    <p class="text-white font-bold">📍 核心定位：自贸港封关运作的先行示范区</p>
                </div>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>国家级石化基地、航运枢纽。重点发展高端石化加工、国际航运物流。作为“中国洋浦港”船籍港所在地，拥有独一无二的保税油补给权限。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>增值免税：</strong> 鼓励类产业企业加工增值超过30%内销免征关税。</li>
                        <li><strong>保税油：</strong> 启运港退税及国际船舶补给保税燃料油。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Major hub for logistics and petrochemicals. Gateway to Western Land-Sea Corridor.</p>`
    },
    "software_park": {
        name: { cn: "海南生态软件园", en: "Hainan Ecological Software Park", ru: "Эко-софтпарк" },
        subtitle: { cn: "区块链、游戏与数字贸易先行区", en: "Blockchain & Gaming Hub", ru: "Блокчейн и игры" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>国家级数字服务出口基地。聚集了腾讯、百度等巨头。重点发展区块链技术、电子竞技、游戏出海及数字版权交易。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>牌照便利：</strong> 提供快捷的游戏版号申报绿色通道。</li>
                        <li><strong>区块链支持：</strong> 全国首个区块链试验区，支持技术研发应用。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>National hub for blockchain, gaming, and software industries.</p>`
    },
    "boao": {
        name: { cn: "博鳌乐城医疗先行区", en: "Boao Lecheng Medical Zone", ru: "Медзона Боао" },
        subtitle: { cn: "国际医疗旅游目的地", en: "Intl Medical Tourism", ru: "Медтуризм" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>中国唯一的“医疗特区”。允许先行先试国际最先进的药物和器械。重点发展肿瘤防治、干细胞研究、医养结合。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>特许准入：</strong> 国际最新药械可优先在区内临床使用，无需等待全国上市。</li>
                        <li><strong>真实世界数据：</strong> 试点临床数据可用于支持国家药品注册申请。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>The only medical pilot zone in China with special drug/device access.</p>`
    },
    "wenchang": {
        name: { cn: "文昌国际航天城", en: "Wenchang Aerospace City", ru: "Космоград" },
        subtitle: { cn: "商业航天产业集群", en: "Commercial Aerospace", ru: "Космос" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>依托中国唯一的滨海航天发射场，重点发展商业火箭发射、卫星应用、航天大数据及深空探测。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>发射便利：</strong> 支持商业卫星发射简化审批。</li>
                        <li><strong>高精尖补贴：</strong> 对航天核心技术研发团队给予高额奖励。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Developing satellite applications and commercial aerospace based on the Wenchang Launch Center.</p>`
    },
    "haikou_ftz": {
        name: { cn: "海口综合保税区", en: "Haikou Integrated FTZ", ru: "Бондовая зона" },
        subtitle: { cn: "保税加工与跨境电商", en: "Bonded Processing & E-comm", ru: "E-commerce" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>免税品集散中心、钻石珠宝加工中心。作为海南跨境电商交易量最大的园区，这里聚集了大量高档奢侈品及消费品保税仓储。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>加工增值：</strong> 加工增值30%免关税内销。</li>
                        <li><strong>免税物流：</strong> 极速通关政策支持国际中转。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>A hub for duty-free goods and high-end consumer processing.</p>`
    },
    "haikou_hitech": {
        name: { cn: "海口国家高新区", en: "Haikou National High-tech Zone", ru: "Хайкоу Hi-Tech" },
        subtitle: { cn: "生物制药与智能制造核心区", en: "Bio-pharma & Mfg", ru: "Биомед" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>医药产业的聚集地。重点发展生物制药、低碳智能制造。是海南工业产值的重要支撑点。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>环保红利：</strong> 支持绿色制造项目申报国家专项资金。</li>
                        <li><strong>技改补贴：</strong> 鼓励传统工业进行智能化转型。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Focuses on pharmaceuticals and intelligent manufacturing.</p>`
    },
    "lingshui_edu": {
        name: { cn: "陵水黎安教育区", en: "Lingshui Education Zone", ru: "Образование" },
        subtitle: { cn: "国际化教育服务贸易先导区", en: "Intl Education Platform", ru: "Образование" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>引进国际知名高校独立办学或中外合作办学。打造“留学海南”品牌，重点发展教育培训、研学旅游。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>独立办学：</strong> 允许境外知名高校在园区内直接独立办学。</li>
                        <li><strong>签证便利：</strong> 针对外籍师生提供更灵活的居留和工作许可。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Integration of International Higher Education and Tourism.</p>`
    },
    "dongfang": {
        name: { cn: "东方临港产业园", en: "Dongfang Industrial Park", ru: "Промзона Дунфан" },
        subtitle: { cn: "油气化工与装备制造基地", en: "Oil, Gas & Energy", ru: "Нефтехимия" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>重点布局海洋油气化工、新材料以及海上风电装备制造。这里是海南面向东南亚的工业合作前沿。</p>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Base for marine oil/gas industry and wind power equipment.</p>`
    },
    "mission_hills": {
        name: { cn: "海口观澜湖旅游园", en: "Mission Hills Resort", ru: "Mission Hills" },
        subtitle: { cn: "体育旅游与影视文化贸易", en: "Sports Tourism & Culture", ru: "Спорт и культура" },
        detail_zh: `
            <div class="space-y-6">
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 产业方向</h3>
                    <p>以顶级高尔夫、足球基地为核心，发展体育旅游。同时拥有冯小刚电影公社，重点布局影视拍摄、后期制作及文化产品出口。</p>
                </section>
                <section>
                    <h3 class="text-blue-400 text-lg font-bold mb-2">● 核心政策</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>免税红利：</strong> 园区内入驻的大型免税城享受免税购物政策支持。</li>
                    </ul>
                </section>
            </div>`,
        detail_en: `<h3>📍 Positioning</h3><p>Comprehensive zone for sports tourism, film industry, and cultural trade.</p>`
    }
};
console.log("🚀 13 Major Parks - Full Content Loaded!");
