// 海南索拉纳订单系统 - 服务数据
// 版本：v1.0

// 服务分类
const serviceCategories = {
  fiscal: { id: 'fiscal', name_zh: '工商财税类服务', name_en: 'Fiscal Services', icon: '📁' },
  design: { id: 'design', name_zh: '设计制作类服务', name_en: 'Design Services', icon: '🎨' },
  consulting: { id: 'consulting', name_zh: '咨询顾问类服务', name_en: 'Consulting Services', icon: '💡' }
};

// 服务列表（36个服务 - 精简版）
const services = {
  'name-check': { id: 'name-check', category: 'fiscal', price: 200, name_zh: '公司名称核准', name_en: 'Company Name Verification', description_zh: '提供3-5个名称核名', description_en: 'Verify 3-5 company names' },
  'reg-basic': { id: 'reg-basic', category: 'fiscal', price: 800, name_zh: '公司注册（基础）', name_en: 'Company Registration (Basic)', description_zh: '营业执照+刻章+税务登记', description_en: 'License + Seal + Tax' },
  'reg-full': { id: 'reg-full', category: 'fiscal', price: 1900, recommended: true, name_zh: '公司注册（全包）', name_en: 'Company Registration (Full)', description_zh: '基础服务+海南省内地址（1年）', description_en: 'Basic + Hainan address (1 year)' },
  'bookkeeping-zero': { id: 'bookkeeping-zero', category: 'fiscal', price: 1800, unit: 'year', name_zh: '代理记账（零申报）', name_en: 'Bookkeeping (Zero)', description_zh: '每月国地税零申报', description_en: 'Monthly zero tax filing' },
  'bookkeeping-small': { id: 'bookkeeping-small', category: 'fiscal', price: 2400, unit: 'year', name_zh: '代理记账（小规模）', name_en: 'Bookkeeping (Small)', description_zh: '月度报税+账务处理', description_en: 'Monthly tax + accounting' },
  'bookkeeping-general': { id: 'bookkeeping-general', category: 'fiscal', price: 6000, unit: 'year', name_zh: '代理记账（一般纳税人）', name_en: 'Bookkeeping (General)', description_zh: '增值税+全盘账务', description_en: 'VAT + full accounting' },
  'tax-basic': { id: 'tax-basic', category: 'fiscal', price: 2000, name_zh: '税务咨询（基础）', name_en: 'Tax Consulting (Basic)', description_zh: '1次深度咨询（2小时）', description_en: '1 consultation (2 hours)' },
  'tax-deep': { id: 'tax-deep', category: 'fiscal', price: 5000, name_zh: '税务咨询（深度）', name_en: 'Tax Consulting (Deep)', description_zh: '年度税务筹划方案', description_en: 'Annual tax planning' },
  'trademark': { id: 'trademark', category: 'fiscal', price: 900, name_zh: '商标注册', name_en: 'Trademark Registration', description_zh: '国内商标（1类）', description_en: 'Domestic trademark (1 class)' },
  'company-change': { id: 'company-change', category: 'fiscal', price: 600, unit: 'item', name_zh: '公司变更', name_en: 'Company Change', description_zh: '法人/股东/地址/资本', description_en: 'Legal rep/Shareholder/Address/Capital' },
  'company-close': { id: 'company-close', category: 'fiscal', price: 2000, name_zh: '公司注销', name_en: 'Company Deregistration', description_zh: '税务清算+工商注销', description_en: 'Tax clearance + deregistration' },
  'bank-account': { id: 'bank-account', category: 'fiscal', price: 1200, name_zh: '银行开户协助', name_en: 'Bank Account Opening', description_zh: '材料准备+陪同办理', description_en: 'Document prep + accompaniment' },
  'import-export': { id: 'import-export', category: 'fiscal', price: 1500, name_zh: '进出口权办理', name_en: 'Import/Export Rights', description_zh: '进出口权+海关备案', description_en: 'Import/export rights + customs' },
  'seal-service': { id: 'seal-service', category: 'fiscal', price: 300, name_zh: '刻章服务', name_en: 'Seal Service', description_zh: '公章/财务章/法人章等', description_en: 'Official/Financial/Legal seals' },
  'tax-registration': { id: 'tax-registration', category: 'fiscal', price: 500, name_zh: '税务报到', name_en: 'Tax Registration', description_zh: '税种核定+发票开通', description_en: 'Tax categorization + invoice' },
  'social-security': { id: 'social-security', category: 'fiscal', price: 500, name_zh: '社保公积金开户', name_en: 'Social Security', description_zh: '单位账户设立', description_en: 'Corporate account setup' },
  
  'logo-basic': { id: 'logo-basic', category: 'design', price: 1500, name_zh: 'LOGO设计（基础）', name_en: 'LOGO Design (Basic)', description_zh: '3款初稿+3次修改', description_en: '3 drafts + 3 revisions' },
  'logo-advanced': { id: 'logo-advanced', category: 'design', price: 3000, recommended: true, name_zh: 'LOGO设计（高级）', name_en: 'LOGO Design (Advanced)', description_zh: '5款初稿+无限修改', description_en: '5 drafts + unlimited revisions' },
  'vi-basic': { id: 'vi-basic', category: 'design', price: 5000, name_zh: 'VI设计（基础）', name_en: 'VI Design (Basic)', description_zh: 'VI基础要素系统', description_en: 'VI basic system' },
  'vi-full': { id: 'vi-full', category: 'design', price: 10000, recommended: true, name_zh: 'VI设计（全套）', name_en: 'VI Design (Complete)', description_zh: '完整VI手册', description_en: 'Complete VI manual' },
  'business-card': { id: 'business-card', category: 'design', price: 500, name_zh: '名片设计', name_en: 'Business Card', description_zh: '双面设计', description_en: 'Double-sided design' },
  'brochure': { id: 'brochure', category: 'design', price: 2000, name_zh: '宣传册设计', name_en: 'Brochure Design', description_zh: '8-12页设计', description_en: '8-12 page design' },
  'poster': { id: 'poster', category: 'design', price: 800, name_zh: '海报设计', name_en: 'Poster Design', description_zh: '单张海报设计', description_en: 'Single poster design' },
  'website-corporate': { id: 'website-corporate', category: 'design', price: 5000, recommended: true, name_zh: '网站设计（企业官网）', name_en: 'Website (Corporate)', description_zh: '响应式网站设计', description_en: 'Responsive website' },
  'website-ecommerce': { id: 'website-ecommerce', category: 'design', price: 12000, name_zh: '网站设计（电商）', name_en: 'Website (E-commerce)', description_zh: '完整商城系统', description_en: 'Complete e-commerce' },
  'website-landing': { id: 'website-landing', category: 'design', price: 1500, name_zh: '网站设计（落地页）', name_en: 'Landing Page', description_zh: '单页营销网站', description_en: 'Single page site' },
  'brand-package': { id: 'brand-package', category: 'design', price: 20000, recommended: true, name_zh: '品牌全案设计', name_en: 'Complete Brand Package', description_zh: 'LOGO+VI+网站+物料', description_en: 'LOGO+VI+website+materials' },
  'packaging': { id: 'packaging', category: 'design', price: 3000, name_zh: '包装设计', name_en: 'Packaging Design', description_zh: '产品包装设计', description_en: 'Product packaging' },
  
  'blockchain-basic': { id: 'blockchain-basic', category: 'consulting', price: 3000, name_zh: '区块链咨询（基础）', name_en: 'Blockchain Consulting (Basic)', description_zh: '1次深度咨询', description_en: '1 consultation' },
  'blockchain-annual': { id: 'blockchain-annual', category: 'consulting', price: 30000, unit: 'year', name_zh: '区块链咨询（年度）', name_en: 'Blockchain Consulting (Annual)', description_zh: '年度区块链顾问', description_en: 'Annual blockchain advisor' },
  'us-stock-account': { id: 'us-stock-account', category: 'consulting', price: 1500, name_zh: '美股开户咨询', name_en: 'US Stock Account', description_zh: '开户流程指导', description_en: 'Account opening guidance' },
  'us-stock-strategy': { id: 'us-stock-strategy', category: 'consulting', price: 3000, name_zh: '美股投资策略', name_en: 'US Stock Strategy', description_zh: '投资分析报告', description_en: 'Investment analysis' },
  'us-stock-tokenization': { id: 'us-stock-tokenization', category: 'consulting', price: 8000, name_zh: '美股上链咨询', name_en: 'US Stock Tokenization', description_zh: '资产代币化方案', description_en: 'Asset tokenization' },
  'park-basic': { id: 'park-basic', category: 'consulting', price: 2000, name_zh: '园区入驻（基础）', name_en: 'Park Entry (Basic)', description_zh: '园区对接', description_en: 'Park coordination' },
  'park-full': { id: 'park-full', category: 'consulting', price: 5000, recommended: true, name_zh: '园区入驻（全套）', name_en: 'Park Entry (Full)', description_zh: '入驻+政策申报', description_en: 'Entry + policy' },
  'policy-application': { id: 'policy-application', category: 'consulting', price: 3000, unit: 'item', name_zh: '政策申报服务', name_en: 'Policy Application', description_zh: '单项政策申报', description_en: 'Single policy application' }
};

// 热销套餐（5个）
const packages = {
  'startup-basic': { id: 'startup-basic', services: ['reg-full', 'bookkeeping-zero'], original_price: 3700, package_price: 3000, savings: 700, name_zh: '创业基础包', name_en: 'Startup Basic', description_zh: '注册+记账1年', description_en: 'Registration + bookkeeping' },
  'startup-standard': { id: 'startup-standard', services: ['reg-full', 'bookkeeping-small', 'logo-basic'], original_price: 5800, package_price: 4500, savings: 1300, recommended: true, name_zh: '创业标准包', name_en: 'Startup Standard', description_zh: '注册+记账+LOGO', description_en: 'Registration + bookkeeping + LOGO' },
  'startup-deluxe': { id: 'startup-deluxe', services: ['reg-full', 'bookkeeping-small', 'vi-basic', 'website-corporate'], original_price: 14300, package_price: 10000, savings: 4300, name_zh: '创业豪华包', name_en: 'Startup Deluxe', description_zh: '注册+记账+VI+网站', description_en: 'Registration + bookkeeping + VI + website' },
  'brand-building': { id: 'brand-building', services: ['logo-advanced', 'vi-basic', 'website-corporate', 'business-card', 'brochure'], original_price: 15500, package_price: 10000, savings: 5500, name_zh: '品牌建设包', name_en: 'Brand Building', description_zh: 'LOGO+VI+网站+名片+宣传册', description_en: 'LOGO+VI+website+card+brochure' },
  'park-entry': { id: 'park-entry', services: ['park-full', 'reg-full', 'policy-application'], original_price: 9900, package_price: 7000, savings: 2900, name_zh: '园区入驻全套', name_en: 'Park Entry Complete', description_zh: '园区咨询+注册+政策', description_en: 'Park consulting + registration + policy' }
};

console.log('✅ Order data loaded: 36 services + 5 packages');
```

---

**4. Commit message：**
```
🔧 修复 order-data.js 语法错误
