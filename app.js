/* ==========================================================================
  HIESABATI AI — ENTERPRISE LOGIC, TRANSLATIONS & INTERACTIVITY
   ========================================================================== */

/* ============== 1. COMPLETE 5-LANGUAGE DICTIONARY ============== */
// Merge features translations from translations.js
const I18N = {
  en: {
    dir: "ltr",
    brandName: "Hiesabati AI",
    "nav.features": "Features",
    "nav.aicfo": "AI CFO",
    "nav.products": "Products",
    "nav.gallery": "Gallery",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "nav.extraSolutions": "Solutions",
    "nav.extraSecurity": "Security",
    "nav.extraIntegrations": "Integrations",

    "hero.badge": "Finance • Business Operations • AI Assistant",
    "hero.title": "Hiesabati AI",
    "hero.lead": "Start talking to your intelligent business and financial partner. Hiesabati AI understands every detail of your business, analyzing accounting, sales, inventory, manufacturing, construction, materials, workforce, and operations in real time to deliver predictive insights, accurate recommendations, and automated risk prevention.",
    "hero.pillar1Title": "Cross-Sector Intelligence",
    "hero.pillar1Desc": "Real-time data parsing across accounting, inventory, manufacturing, construction, and workforce.",
    "hero.pillar2Title": "Predictive Analytics",
    "hero.pillar2Desc": "Advanced forecasting, automated budgeting, and strategic recommendations at your fingertips.",
    "hero.pillar3Title": "Zero-Error Compliance",
    "hero.pillar3Desc": "24/7 anomaly alerts, automated risk prevention, and multi-country tax auditing.",
    "hero.ctaPrimary": "Request Sovereign Briefing",
    "hero.ctaSecondary": "Explore Ecosystem",
    "hero.stat1": "Active Clients",
    "hero.stat2": "Daily Audits",
    "hero.stat3": "System SLA",
    "hero.float1Label": "Monthly Revenue",
    "hero.float2Label": "Audit Risk Score",

    "partners.title": "Powering Financial Systems for Industry Leaders",

    "features.eyebrow": "Corporate Ecosystem",
    "features.title": "Everything you need to govern corporate finances",
    "features.lead": "Consolidate accounting ledger, shift terminals, payroll runs, and asset inventory into one secure workspace governed by automated workflows.",

    "stats.s1": "Active Enterprises",
    "stats.s2": "Audited Transactions",
    "stats.s3v": "95%",
    "stats.s3": "Filing Accuracy Rate",
    "stats.s4": "Compliance Score",

    "aicfo.eyebrow": "Cognitive Fintech Engine",
    "aicfo.title": "Meet Aria — Your Autonomous Financial Advisory CFO",
    "aicfo.lead": "Engage our conversational AI engine for instant ledger reconciliation, tax compliance audits, working capital forecasting, and invoice anomaly detection.",
    "aicfo.assistantName": "Aria — Corporate AI CFO",
    "aicfo.assistantStatus": "Secure Connection Active",
    "aicfo.welcomeMsg": "Welcome. I am Aria. Select one of the audit options below to run instant compliance checks on your active corporate ledger.",
    "aicfo.suggestedLabel": "Select Audit Query",
    "aicfo.voiceStandby": "Voice CFO mode standby. Click mic to begin.",
    "aicfo.voiceTitle": "Voice CFO Simulator",
    "aicfo.voiceSubtitle": "Click microphone to consult Aria via voice model",
    "aicfo.voiceListening": "Aria is listening. Speak now...",
    "aicfo.voiceUserQuery": "User: Predict our cash flow variance for next quarter...",
    "aicfo.voiceAriaResponse": "Aria: Processing ledger inputs. I project Q4 gross cash runway at 16.4 months based on current average burn-rates. Risk indices remain stable at 1.2%.",

    "aicfo.forecastTitle": "Dynamic Working Capital & Profit Simulator",
    "aicfo.forecastLead": "Rationalize operational budgets, test margin sensitivities, and simulate quarterly cash runway scenarios.",
    "aicfo.sliderGrowth": "Projected Growth Rate",
    "aicfo.sliderExpense": "Operating Expense Cut",
    "aicfo.forecastRevenue": "Estimated Revenue",
    "aicfo.forecastExpense": "Estimated OPEX",
    "aicfo.forecastProfit": "Estimated EBITDA Margin",

    "products.eyebrow": "Product Ecosystem",
    "products.title": "Sleek, powerful modules for every operational unit",
    "products.lead": "A unified platform built to scale internationally. Replace fragmented tools with certified compliance.",

    "prodTab.accounting": "Accounting",
    "prodTab.sales": "Sales (POS)",
    "prodTab.expenses": "Expenses",
    "prodTab.hr": "HR Suite",
    "prodTab.payroll": "Payroll",
    "prodTab.inventory": "Inventory",
    "prodTab.reports": "Reports Engine",
    "prodTab.automation": "Automation",
    "prodTab.communication": "Communication",

    "gallery.eyebrow": "Visual Showcase",
    "gallery.title": "High-Fidelity Operations Interface",
    "gallery.lead": "Take a virtual tour of the unified financial terminal, point-of-sale shift controllers, and compliance tracking dashboards.",

    "galleryFilter.all": "All Screens",
    "galleryFilter.ai": "AI & Forecasts",
    "galleryFilter.accounting": "Accounting & POS",
    "galleryFilter.hr": "HR & Payroll",
    "galleryFilter.reports": "Reports & Tax",

    "sectors.eyebrow": "Enterprise Verticals",
    "sectors.title": "Specialized Industry Solutions Built for Every Sector",
    "sectors.lead": "From heavy industry floors to high-street retail and sovereign market analytics — Hiesabati delivers precision-engineered modules for every operational environment.",
    "sectors.glassTitle": "Glass & Material Processing ERP",
    "sectors.glassDesc": "From raw sheet optimization to custom tempering runs. Monitor batch efficiency, wastage percentages, and glass manufacturing overhead calculations automatically.",
    "sectors.mfgTitle": "Industrial Manufacturing & Shop Floor Control",
    "sectors.mfgDesc": "Synchronize bill of materials (BOM), track routing steps, allocate labor variances, and manage raw inventory with full serial traceability.",
    "sectors.posTitle": "Point of Sale (POS) & Frictionless Retail",
    "sectors.posDesc": "High-volume, multi-register POS that operates offline, syncs instantly with the global ledger, and compiles local tax rules automatically.",
    "sectors.reportsTitle": "Sovereign Market Intelligence & Analytics",
    "sectors.reportsDesc": "Dynamic financial reporting, currency fluctuation tracking, and analytical insights compiled directly for sovereign investment portfolios.",

    "video.eyebrow": "Product Tour",
    "video.title": "Enterprise Operations Platform Walkthrough",
    "video.lead": "Watch our 2-minute system overview to see how Hiesabati automates journal entries, flags tax anomalies, and generates audit logs.",

    "price.eyebrow": "Scalable Plans",
    "price.title": "Transparent pricing for global expansion",
    "pricing.monthly": "Monthly Billing",
    "pricing.annually": "Annual Billing",
    "pricing.saveTag": "Save 20%",

    "test.eyebrow": "Client Success",
    "test.title": "Validated by Corporate CFOs Globally",

    "about.eyebrow": "Corporate Profile",
    "about.title": "Built for institutional control and global expansion",
    "about.p1": "Hiesabati AI integrates advanced machine learning models with robust double-entry financial ledgers to deliver complete operational visibility for international businesses.",
    "about.p2": "Headquartered remote-first, our compliance framework supports multi-country tax guidelines (VAT, corporate tax, regional customs) with zero-compromise security.",

    "contact.eyebrow": "Client Desk",
    "contact.title": "Initiate Corporate Onboarding",
    "contact.lead": "Schedule a detailed platform briefing with our solutions architects.",
    "contact.name": "Full Name",
    "contact.company": "Corporate entity",
    "contact.email": "Business Email Address",
    "contact.message": "Platform Requirements",
    "contact.submit": "Submit Briefing Request",
    "contact.siteLabel": "Official Domain",
    "contact.emailLabel": "Corporate Inbox",
    "contact.phoneLabel": "Solutions Hotline",
    "contact.hqLabel": "Global Head Office",
    "contact.hqVal": "Aspin Commercial Tower, Sheikh Zayed Road, Dubai, UAE",
    "contact.socialTitle": "Official Corporate Channels",

    "footer.blurb": "The AI-driven financial operating system for enterprises targeting frictionless audits and rapid expansion.",
    "footer.timelineTitle": "Hiesabati Corporate Milestones",
    "footer.mapTitle": "Global Corporate Network",
    "footer.mapLead": "Hiesabati maintains secure hosting architecture, regulatory consulting offices, and financial hubs in major global trade centers.",
    "footer.institutionalCTA": "Initiate Institutional Onboarding",
    "aicfo.heatMapTitle": "Sovereign Audit Risk Heat Map",
    "aicfo.heatMapLead": "Autonomous compliance engines running continuous double-entry ledger audits and tax risk tracking across global sub-entities.",
    "timeline.2020": "Double-entry ledger core engine certified.",
    "timeline.2022": "GCC tax framework & automated VAT launched.",
    "timeline.2024": "Aria Autonomous CFO cognitive engine integrated.",
    "timeline.2026": "Pre-IPO compliance audits & international expansion.",
    "footer.h1": "Solutions",
    "footer.solutionsTitle": "Core Modules",
    "footer.h2": "Corporate",
    "footer.hSubscribe": "Subscribe to compliance updates",
    "footer.subscribeLead": "Get monthly alerts on regional tax changes and Hiesabati releases.",
    "footer.subscribeBtn": "Subscribe",
    "footer.solAccounting": "Double-Entry Ledger",
    "footer.solReporting": "Dynamic Compliance",
    "footer.solWorkflow": "Automated Workflows",
    "footer.careers": "Careers",
    "footer.blog": "Resource Blog",
    "footer.privacy": "Privacy Charter",
    "footer.terms": "Terms of Governance",
    "footer.cookie": "Cookie Settings",
    "video.sessionTitle": "Aria Autonomous Session",
    "video.sessionSub": "Live ledger compliance walkthrough",
    "sec.card1Title": "SOC 2 Type II Certified",
    "sec.card1Desc": "Annual independent CPA auditing of operational processes, secure hosting, and encryption safeguards.",
    "sec.card2Title": "ISO 27001 Standard",
    "sec.card2Desc": "Complete execution of ISO/IEC information security management systems rules across global operations.",
    "sec.card3Title": "GDPR & IFRS Compliant",
    "sec.card3Desc": "Strict regional data privacy guidelines and globally standardized corporate accounting ledger audits.",
    "sec.card4Title": "AES-256 Encryption",
    "sec.card4Desc": "All database records and file storage nodes are secured using military-grade cryptographic keys.",
    "reg.eyebrow": "Official Registration",
    "reg.title": "HIESABATI — Registered Enterprise",
    "reg.desc": "Licensed, registered, and operating under UAE commercial law. Full transparency for enterprise due diligence.",
    "reg.labelLicense": "Trade License Number",
    "reg.labelMembership": "Membership Number",
    "reg.labelRegistration": "Registration Number",
    "reg.labelProprietor": "Proprietor",
    "reg.labelAddress": "Registered Address",
    "reg.valAddress": "B05-102, Commercial Center, Floor 1508, Dubai, UAE",
    "reg.labelWebsite": "Official Website",
    "office.hqTitle": "Dubai HQ (AET)",
    "office.hqAddress": "B05-102, Commercial Center, Floor 1508, Dubai, UAE",
    "office.waTitle": "WhatsApp Direct",
    "office.waDesc": "Instant enterprise support via WhatsApp business line",
    "office.webTitle": "Official Website",
    "office.webDesc": "Platform demos, product tours, and enterprise briefings",
    "office.emailTitle": "Corporate Inbox",
    "office.emailDesc": "Solution architects available within 24 hours",
    "journey.eyebrow": "Interactive Simulation",
    "journey.title": "The Hiesabati Business Journey from A to Z",
    "journey.lead": "Step through the complete corporate operations cycle to see Hiesabati in real-time actions.",
    "journey.s1Title": "Company Registration",
    "journey.s1Desc": "Establish entity profile, set fiscal dates, and currency defaults.",
    "journey.s2Title": "Branch & Warehouse Setup",
    "journey.s2Desc": "Configure global locations, bins, and store managers.",
    "journey.s3Title": "User & Role Management",
    "journey.s3Desc": "Invite team, set granular ACL scopes, and force 2FA.",
    "journey.s4Title": "Customer & Supplier Management",
    "journey.s4Desc": "Track credit limits, payables, and commercial profiles.",
    "journey.s5Title": "Product & Inventory Management",
    "journey.s5Desc": "Generate barcodes, trigger warehouse transfers, and track stock.",
    "journey.s6Title": "Sales Process",
    "journey.s6Desc": "Quotation to sales orders, invoicing, payments, and statements.",
    "journey.s7Title": "Purchasing Process",
    "journey.s7Desc": "Purchase requests, orders, supplier matching, and inventory updates.",
    "journey.s8Title": "Financial Management",
    "journey.s8Desc": "General Ledger, double-entry, AR/AP control, and reconciliations.",
    "journey.s9Title": "Human Resources",
    "journey.s9Desc": "Profiles, scheduling, attendance tracking, and performance payroll.",
    "journey.s10Title": "Tax & Compliance",
    "journey.s10Desc": "VAT declarations, audit logs, and regional regulations.",
    "journey.s11Title": "Automation Engine",
    "journey.s11Desc": "Configure multi-stage approvals, alert flows, and scheduled reports.",
    "journey.s12Title": "AI CFO Engine",
    "journey.s12Desc": "Run predictions, detect financial anomalies, and generate recommendations.",
    "journey.s13Title": "Reports & Analytics",
    "journey.s13Desc": "Generate cash flow reports, executive KPIs, and audit trails.",
    "journey.s14Title": "Executive Decision Center",
    "journey.s14Desc": "Verify entity health index score and strategic advisory.",
    "journey.s15Title": "Business Growth",
    "journey.s15Desc": "Expand with multi-currency operations and international subsidiaries.",
    "journey.statementTitle": "\"From Your First Invoice to Your Global Enterprise...\"",
    "journey.statementDesc": "HIESABATI powers every step of your business.",
    "footer.copy": "© 2026 Hiesabati AI. All rights reserved. Trade License No: 987654/DXB.",
    "demoVideo.eyebrow": "Aria In Action",
    "demoVideo.title": "Experience the AI Sales Assistant",
    "demoVideo.desc": "Watch a live demonstration of how Aria intelligently interacts with users to provide real-time information on features, pricing, and bank-grade security, before seamlessly connecting you with a human Solutions Architect via WhatsApp.",
    "success.counter1": "40+ Countries",
    "success.counter2": "25,000+ Businesses",
    "success.counter3": "5 Continents",
    "success.counter4": "Global Platform",
    "success.filterCountry": "Country:",
    "success.filterIndustry": "Industry:",
    "success.filterSize": "Company Size:",
    "success.labelCountry": "📍 Country",
    "success.labelIndustry": "🏢 Industry",
    "success.labelScale": "👥 Scale",
    "success.labelType": "💼 Type",
    "success.operChallenge": "Operational Challenge",
    "success.hiesabatiSol": "Hiesabati Solution",
    "success.yearsClient": "Years Client",
    "footer.linkCustomerExp": "Customer Experience",
    "footer.linkSecurity": "Security & Trust",
    "footer.linkOfficialSite": "Official Website",
    "footer.linkWhatsApp": "WhatsApp Support"
  },
  ar: {
    dir: "rtl",
    brandName: "حسابتي الذكي",
    "nav.features": "المزايا",
    "nav.aicfo": "المدير المالي",
    "nav.products": "المنتجات",
    "nav.gallery": "المعرض",
    "nav.pricing": "الأسعار",
    "nav.about": "من نحن",
    "nav.contact": "تواصل معنا",
    "nav.getStarted": "ابدأ الآن",
    "nav.extraSolutions": "الحلول",
    "nav.extraSecurity": "الأمن والثقة",
    "nav.extraIntegrations": "التكاملات",

    "hero.badge": "المالية • العمليات التجارية • مساعد الذكاء الاصطناعي",
    "hero.title": "حسابتي الذكي",
    "hero.lead": "ابدأ التحدث مع شريكك المالي والتجاري الذكي. يفهم حسابتي الذكي (Hiesabati AI) كل تفاصيل عملك، حيث يقوم بتحليل المحاسبة، والمبيعات، والمخزون، والتصنيع، والمقاولات، والمواد، والقوى العاملة، والعمليات في الوقت الفعلي لتقديم رؤى تنبؤية وتوصيات دقيقة ومنع المخاطر تلقائياً.",
    "hero.pillar1Title": "ذكاء متعدد القطاعات",
    "hero.pillar1Desc": "تحليل البيانات الفورية عبر المحاسبة والمخزون والتصنيع والمقاولات والقوى العاملة.",
    "hero.pillar2Title": "التحليلات التنبؤية",
    "hero.pillar2Desc": "توقعات متقدمة، ميزانيات مؤتمتة، وتوصيات استراتيجية في متناول يدك.",
    "hero.pillar3Title": "امتثال خالٍ من الأخطاء",
    "hero.pillar3Desc": "تنبيهات فورية بالانحرافات، حماية آلية من المخاطر، وتدقيق ضريبي متعدد الدول.",
    "hero.ctaPrimary": "طلب إحاطة سيادية",
    "hero.ctaSecondary": "استكشف المنظومة",
    "hero.stat1": "الشركات النشطة",
    "hero.stat2": "التدقيقات اليومية",
    "hero.stat3": "جاهزية النظام",
    "hero.float1Label": "الإيرادات الشهرية",
    "hero.float2Label": "مستوى مخاطر التدقيق",

    "partners.title": "ندير الأنظمة المالية لقادة الصناعة",

    "features.eyebrow": "النظام البيئي للمؤسسات",
    "features.title": "كل ما تحتاجه لإدارة الشؤون المالية للشركات",
    "features.lead": "قم بدمج دفاتر المحاسبة، ومحطات المبيعات، ومسيرات الرواتب، وجرد الأصول في مساحة عمل واحدة آمنة تخضع لتدفقات العمل المؤتمتة.",

    "stats.s1": "الشركات النشطة",
    "stats.s2": "المعاملات المدققة",
    "stats.s3v": "95%",
    "stats.s3": "دقة التقديم الضريبي",
    "stats.s4": "مؤشر الامتثال",

    "aicfo.eyebrow": "محرك التكنولوجيا المالية المعرفي",
    "aicfo.title": "آريا — مستشارك المالي والمدير المالي الذكي المستقل",
    "aicfo.lead": "تفاعل مع محرك الذكاء الاصطناعي الخاص بنا لإجراء تسويات فورية للحسابات، وتدقيق الامتثال الضريبي، وتوقع رأس المال العامل، واكتشاف الشذوذ المالي في الفواتير.",
    "aicfo.assistantName": "آريا — المدير المالي بالذكاء الاصطناعي",
    "aicfo.assistantStatus": "الاتصال الآمن نشط",
    "aicfo.welcomeMsg": "مرحباً بك. أنا آريا. اختر أحد خيارات التدقيق أدناه لتشغيل مراجعة فورية للامتثال لدفاترك المالية النشطة.",
    "aicfo.suggestedLabel": "اختر سؤال التدقيق",
    "aicfo.voiceStandby": "مساعد CFO الصوتي في وضع الاستعداد. اضغط على الميكروفون للبدء.",
    "aicfo.voiceTitle": "محاكي المدير المالي الصوتي",
    "aicfo.voiceSubtitle": "اضغط على الميكروفون لاستشارة آريا عبر النموذج الصوتي",
    "aicfo.voiceListening": "آريا تستمع. اطرح سؤالاً مالياً...",
    "aicfo.voiceUserQuery": "المستخدم: توقع انحراف تدفقاتنا النقدية للربع القادم...",
    "aicfo.voiceAriaResponse": "آريا: معالجة مدخلات الدفتر. أتوقع أن يبلغ مسار السيولة الإجمالي للربع الرابع 16.4 شهراً بناءً على معدلات الإنفاق الحالية. تظل مؤشرات المخاطر مستقرة عند 1.2%.",

    "aicfo.forecastTitle": "محاكي رأس المال العامل والأرباح التفاعلي",
    "aicfo.forecastLead": "قم بترشيد ميزانيات التشغيل، واختبار حساسية الهوامش الربحية، ومحاكاة سيناريوهات التدفق النقدي الربع سنوي.",
    "aicfo.sliderGrowth": "معدل النمو المتوقع",
    "aicfo.sliderExpense": "تقليص نفقات التشغيل",
    "aicfo.forecastRevenue": "الإيرادات التقديرية",
    "aicfo.forecastExpense": "النفقات التشغيلية التقديرية",
    "aicfo.forecastProfit": "هامش الأرباح التقديري (EBITDA)",

    "products.eyebrow": "منظومة المنتجات",
    "products.title": "أدوات ذكية وقوية لكل قطاع تشغيلي",
    "products.lead": "منصة موحدة صُممت للتوسع العالمي. استبدل الأدوات المتفرقة بنظام امتثال معتمد.",

    "prodTab.accounting": "المحاسبة",
    "prodTab.sales": "نقاط البيع",
    "prodTab.expenses": "المصروفات",
    "prodTab.hr": "الموارد البشرية",
    "prodTab.payroll": "مسيرات الرواتب",
    "prodTab.inventory": "المخزون",
    "prodTab.reports": "محرك التقارير",
    "prodTab.automation": "الأتمتة",
    "prodTab.communication": "التواصل",

    "gallery.eyebrow": "معرض المنتجات",
    "gallery.title": "واجهة العمليات عالية الدقة",
    "gallery.lead": "قم بجولة افتراضية للوحة التحكم المالية الموحدة، ومراقبي ورديات نقاط البيع، ولوحات متابعة الامتثال الضريبي.",

    "galleryFilter.all": "جميع اللوحات",
    "galleryFilter.ai": "الذكاء الاصطناعي والتوقعات",
    "galleryFilter.accounting": "المحاسبة ونقاط البيع",
    "galleryFilter.hr": "الموارد البشرية والرواتب",
    "galleryFilter.reports": "التقارير والضرائب",

    "sectors.eyebrow": "القطاعات المتخصصة",
    "sectors.title": "حلول صناعية متخصصة لكل قطاع",
    "sectors.lead": "من قطاعات الصناعة الثقيلة إلى تجارة التجزئة وتحليلات الأسواق السيادية — تقدم حسابتي وحدات مصممة بدقة لكل بيئة تشغيلية.",
    "sectors.glassTitle": "نظام ERP لتصنيع الزجاج والمواد",
    "sectors.glassDesc": "من تحسين الألواح الخام إلى تشغيل التقسية المخصصة. راقب كفاءة الدفعات، ونسب الهدر، وحسابات التكاليف الثابتة لتصنيع الزجاج تلقائياً.",
    "sectors.mfgTitle": "التصنيع الصناعي والتحكم في طابق الإنتاج",
    "sectors.mfgDesc": "زامن قوائم المواد، وتتبع خطوات التوجيه، وخصص فجوات العمالة، وأدر المخزون الخام مع إمكانية التتبع الكامل بالرقم التسلسلي.",
    "sectors.posTitle": "نقاط البيع والبيع بالتجزئة السلس",
    "sectors.posDesc": "نقاط بيع متعددة الطاولات وعالية الحجم تعمل دون إنترنت، وتزامن فوراً مع الدفتر العام، وتحسب قواعد الضرائب المحلية تلقائياً.",
    "sectors.reportsTitle": "الاستخبارات السوقية السيادية والتحليلات",
    "sectors.reportsDesc": "تقارير مالية ديناميكية وتتبع تقلبات العملات ورؤى تحليلية مجمعة مباشرة لمحافظ الاستثمار السيادية.",

    "video.eyebrow": "عرض للنظام",
    "video.title": "شرح منصة عمليات المؤسسات",
    "video.lead": "شاهد شرحاً للنظام مدته دقيقتان لتتعرف على كيفية أتمتة القيود اليومية في حسابتي، وتنبيهات الأنومالي الضريبية، وسجلات التدقيق.",

    "price.eyebrow": "باقات مرنة",
    "price.title": "أسعار شفافة للتوسع العالمي",
    "pricing.monthly": "فاتورة شهرية",
    "pricing.annually": "فاتورة سنوية",
    "pricing.saveTag": "توفير 20%",

    "test.eyebrow": "نجاح العملاء",
    "test.title": "موثوق به من المدراء الماليين للمؤسسات الكبرى",

    "about.eyebrow": "ملف الشركة",
    "about.title": "مصمم للرقابة المؤسسية والتوسع العالمي",
    "about.p1": "يدمج حسابتي الذكي نماذج التعلم الآلي المتقدمة مع دفاتر مالية متينة مزدوجة القيد لتوفير رؤية تشغيلية كاملة للشركات الدولية.",
    "about.p2": "يقع مقرنا الرئيسي كفريق يعمل عن بُعد بالكامل، ويدعم نظام الامتثال لدينا اللوائح الضريبية لعدة دول (ضريبة القيمة المضافة، ضريبة الشركات، الجمارك الإقليمية) بأمان فائق.",

    "contact.eyebrow": "مكتب العملاء",
    "contact.title": "ابدأ عملية الانضمام للمنصة",
    "contact.lead": "حدد موعداً لجلسة مراجعة متكاملة للمنصة مع مهندسي الحلول لدينا.",
    "contact.name": "الاسم الكامل",
    "contact.company": "اسم الشركة",
    "contact.email": "البريد الإلكتروني للعمل",
    "contact.message": "متطلبات المنصة",
    "contact.submit": "إرسال الطلب",
    "contact.siteLabel": "النطاق الرسمي",
    "contact.emailLabel": "صندوق البريد الإلكتروني",
    "contact.phoneLabel": "خط الحلول المباشر",
    "contact.hqLabel": "المكتب الرئيسي العالمي",
    "contact.hqVal": "برج أسبين التجاري، شارع الشيخ زايد، دبي، الإمارات العربية المتحدة",
    "contact.socialTitle": "القنوات الرسمية للشركة",

    "footer.blurb": "نظام التشغيل المالي الموجه بالذكاء الاصطناعي للمؤسسات التي تستهدف تدقيقاً خالياً من المتاعب وتوسعاً سريعاً.",
    "footer.h1": "الحلول",
    "footer.solutionsTitle": "الأقسام التشغيلية",
    "footer.h2": "الشركة",
    "footer.hSubscribe": "اشترك في تحديثات الامتثال",
    "footer.subscribeLead": "احصل على تنبيهات شهرية حول التغييرات الضريبية الإقليمية وإصدارات حسابتي.",
    "footer.subscribeBtn": "اشتراك",
    "footer.solAccounting": "دفتر المحاسبة المزدوج",
    "footer.solReporting": "الامتثال الديناميكي",
    "footer.solWorkflow": "الأتمتة التشغيلية",
    "footer.careers": "الوظائف",
    "footer.blog": "مدونة المصادر",
    "footer.privacy": "ميثاق الخصوصية",
    "footer.terms": "شروط الحوكمة",
    "footer.cookie": "إعدادات الكوكيز",
    "video.sessionTitle": "جلسة آريا المستقلة",
    "video.sessionSub": "عرض حي لامتثال دفاتر الحسابات",
    "sec.card1Title": "شهادة SOC 2 Type II",
    "sec.card1Desc": "تدقيق سنوي مستقل من جهة محاسبية قانونية للعمليات التشغيلية، والاستضافة الآمنة، وضمانات التشفير.",
    "sec.card2Title": "معيار ISO 27001",
    "sec.card2Desc": "تنفيذ كامل لقواعد أنظمة إدارة أمن المعلومات ISO/IEC عبر العمليات العالمية.",
    "sec.card3Title": "متوافق مع GDPR و IFRS",
    "sec.card3Desc": "إرشادات صارمة لخصوصية البيانات الإقليمية وعمليات تدقيق دفاتر المحاسبة القياسية عالمياً.",
    "sec.card4Title": "تشفير AES-256",
    "sec.card4Desc": "جميع سجلات قواعد البيانات وعقد تخزين الملفات مؤمنة بمفاتيح تشفير عسكرية.",
    "reg.eyebrow": "التسجيل الرسمي",
    "reg.title": "حسابتي — منشأة مسجلة",
    "reg.desc": "مرخصة ومسجلة وتعمل بموجب القانون التجاري لدولة الإمارات. شفافية كاملة للفحص التشغيلي للمؤسسات.",
    "reg.labelLicense": "رقم الرخصة التجارية",
    "reg.labelMembership": "رقم العضوية",
    "reg.labelRegistration": "رقم التسجيل",
    "reg.labelProprietor": "المالك",
    "reg.labelAddress": "العنوان المسجل",
    "reg.valAddress": "B05-102، المركز التجاري، الطابق 1508، دبي، الإمارات العربية المتحدة",
    "reg.labelWebsite": "الموقع الرسمي",
    "office.hqTitle": "المقر الرئيسي في دبي",
    "office.hqAddress": "B05-102، المركز التجاري، الطابق 1508، دبي، الإمارات العربية المتحدة",
    "office.waTitle": "واتساب مباشر",
    "office.waDesc": "دعم فوري للمؤسسات عبر خط واتساب للأعمال",
    "office.webTitle": "الموقع الرسمي",
    "office.webDesc": "عرض المنصة، وجولات المنتجات، وإحاطات المؤسسات",
    "office.emailTitle": "صندوق البريد المشترك",
    "office.emailDesc": "مهندسو الحلول متاحون في غضون 24 ساعة",
    "journey.eyebrow": "المحاكاة التفاعلية",
    "journey.title": "رحلة أعمال حسابتي من الألف إلى الياء",
    "journey.lead": "خطوة بخطوة عبر دورة العمليات الكاملة للمؤسسة لمشاهدة حسابتي في إجراءات فورية.",
    "journey.s1Title": "تأسيس الشركة",
    "journey.s1Desc": "إنشاء ملف المنشأة وتحديد التواريخ المالية والعملات الافتراضية.",
    "journey.s2Title": "إعداد الفروع والمستودعات",
    "journey.s2Desc": "تهيئة المواقع العالمية، ورفوف التخزين، ومدراء الفروع.",
    "journey.s3Title": "إدارة المستخدمين والأدوار",
    "journey.s3Desc": "دعوة الفريق، وتحديد صلاحيات الوصول الدقيقة ACL، وفرض التحقق الثنائي 2FA.",
    "journey.s4Title": "إدارة العملاء والموردين",
    "journey.s4Desc": "متابعة الحدود الائتمانية، والمدفوعات، والملفات التجارية للشركاء.",
    "journey.s5Title": "إدارة المنتجات والمخزون",
    "journey.s5Desc": "توليد الرموز الشريطية (باركود)، وتحفيز التحويلات المخزنية، وتتبع المخزون.",
    "journey.s6Title": "عملية المبيعات",
    "journey.s6Desc": "من عروض الأسعار إلى أوامر المبيعات، والفواتير، والمدفوعات، والكشوفات.",
    "journey.s7Title": "عملية الشراء",
    "journey.s7Desc": "طلبات الشراء، والأوامر، والمطابقة مع الموردين، وتحديثات المخزون.",
    "journey.s8Title": "الإدارة المالية",
    "journey.s8Desc": "دفتر الأستاذ العام، القيد المزدوج، مراقبة الحسابات الدائنة والمدينة، والتسويات.",
    "journey.s9Title": "الموارد البشرية",
    "journey.s9Desc": "ملفات الموظفين، الجدولة، تتبع الحضور، ومسيرات رواتب الأداء.",
    "journey.s10Title": "الضرائب والامتثال",
    "journey.s10Desc": "إقرارات ضريبة القيمة المضافة، سجلات التدقيق، والامتثال للأنظمة الإقليمية.",
    "journey.s11Title": "محرك الأتمتة",
    "journey.s11Desc": "تهيئة الموافقات متعددة المراحل، وتدفقات التنبيهات، والتقارير المجدولة.",
    "journey.s12Title": "محرك المدير المالي الذكي",
    "journey.s12Desc": "تشغيل التوقعات، واكتشاف الانحرافات المالية، وتوليد التوصيات.",
    "journey.s13Title": "التقارير والتحليلات",
    "journey.s13Desc": "توليد تقارير التدفق النقدي، ومؤشرات الأداء الرئيسية التنفيذية، ومسارات التدقيق.",
    "journey.s14Title": "مركز القرار التنفيذي",
    "journey.s14Desc": "التحقق من درجة مؤشر صحة المنشأة والاستشارات الاستراتيجية.",
    "journey.s15Title": "نمو الأعمال",
    "journey.s15Desc": "التوسع بعمليات متعددة العملات والشركات التابعة الدولية.",
    "journey.statementTitle": "\"من فاتورتك الأولى إلى مؤسستك العالمية...\"",
    "journey.statementDesc": "حسابتي تدعم كل خطوة في عملك.",
    "footer.copy": "© 2026 حسابتي الذكي. جميع الحقوق محفوظة. ترخيص تجاري رقم: 987654/DXB.",
    "demoVideo.eyebrow": "أريا في العمل",
    "demoVideo.title": "اختبر مساعد المبيعات بالذكاء الاصطناعي",
    "demoVideo.desc": "شاهد عرضاً مباشراً لكيفية تفاعل أريا بذكاء مع المستخدمين لتوفير معلومات فورية حول الميزات والتسعير والأمان على مستوى البنوك، قبل التواصل السلس مع مهندس حلول بشري عبر واتساب.",
    "success.counter1": "+40 دولة",
    "success.counter2": "+25,000 شركة",
    "success.counter3": "5 قارات",
    "success.counter4": "منصة عالمية",
    "success.filterCountry": "الدولة:",
    "success.filterIndustry": "القطاع:",
    "success.filterSize": "حجم الشركة:",
    "success.labelCountry": "📍 الدولة",
    "success.labelIndustry": "🏢 القطاع",
    "success.labelScale": "👥 الحجم",
    "success.labelType": "💼 النوع",
    "success.operChallenge": "التحدي التشغيلي",
    "success.hiesabatiSol": "حل حسابتي",
    "success.yearsClient": "سنوات كعميل",
    "footer.linkCustomerExp": "تجارب العملاء",
    "footer.linkSecurity": "الأمن والثقة",
    "footer.linkOfficialSite": "الموقع الرسمي",
    "footer.linkWhatsApp": "دعم واتساب"
  },
  fr: {
    dir: "ltr",
    brandName: "Hiesabati AI",
    "nav.features": "Fonctionnalités",
    "nav.aicfo": "CFO IA",
    "nav.products": "Produits",
    "nav.gallery": "Galerie",
    "nav.pricing": "Tarification",
    "nav.about": "À Propos",
    "nav.contact": "Contact",
    "nav.getStarted": "Commencer",
    "nav.extraSolutions": "Solutions",
    "nav.extraSecurity": "Sécurité",
    "nav.extraIntegrations": "Intégrations",

    "hero.badge": "Finance • Opérations Commerciales • Assistant IA",
    "hero.title": "Hiesabati AI",
    "hero.lead": "Commencez à parler à votre partenaire financier et commercial intelligent. Hiesabati AI comprend chaque détail de votre entreprise, analysant en temps réel la comptabilité, les ventes, les stocks, la fabrication, la construction, les matériaux, les effectifs et les opérations pour fournir des informations prédictives, des recommandations précises et une prévention automatisée des risques.",
    "hero.pillar1Title": "Intelligence Multi-Sectorielle",
    "hero.pillar1Desc": "Analyse des données en temps réel: comptabilité, stocks, fabrication, construction et effectifs.",
    "hero.pillar2Title": "Analyses Prédictives",
    "hero.pillar2Desc": "Prévisions avancées, budgétisation automatisée et recommandations stratégiques à portée de main.",
    "hero.pillar3Title": "Conformité Zéro-Erreur",
    "hero.pillar3Desc": "Alertes d'anomalies 24/7, prévention automatisée des risques et audits fiscaux multi-pays.",
    "hero.ctaPrimary": "Demander un Briefing Souverain",
    "hero.ctaSecondary": "Explorer l'Écosystème",
    "hero.stat1": "Entreprises Actives",
    "hero.stat2": "Audits Journaliers",
    "hero.stat3": "Disponibilité SLA",
    "hero.float1Label": "Revenu Mensuel",
    "hero.float2Label": "Indice de Risque d'Audit",

    "partners.title": "Le choix des leaders industriels pour la gestion financière",

    "features.eyebrow": "Écosystème d'Entreprise",
    "features.title": "Tout pour gouverner les finances d'entreprise",
    "features.lead": "Centralisez comptabilité générale, terminaux de vente, exécution de la paie et stocks d'actifs dans un espace sécurisé avec flux automatisés.",

    "stats.s1": "Entreprises Actives",
    "stats.s2": "Transactions Auditées",
    "stats.s3v": "95%",
    "stats.s3": "Précision des Déclarations",
    "stats.s4": "Indice de Conformité",

    "aicfo.eyebrow": "Intelligence Financière Cognitive",
    "aicfo.title": "Découvrez Aria — Votre Directeur Financier IA Autonome",
    "aicfo.lead": "Interrogez Aria en langage naturel pour la réconciliation des comptes, les audits de TVA, la prévision du fonds de roulement et l'audit des factures.",
    "aicfo.assistantName": "Aria — Directeur Financier IA",
    "aicfo.assistantStatus": "Connexion Sécurisée Active",
    "aicfo.welcomeMsg": "Bonjour. Je suis Aria. Sélectionnez l'une des options ci-dessous pour lancer une analyse de conformité en direct sur votre grand livre.",
    "aicfo.suggestedLabel": "Sélectionner une requête",
    "aicfo.voiceStandby": "Mode CFO vocal en attente. Cliquez sur le micro pour commencer.",
    "aicfo.voiceTitle": "Simulateur de CFO Vocal",
    "aicfo.voiceSubtitle": "Cliquez sur le micro pour consulter Aria via le modèle vocal",
    "aicfo.voiceListening": "Aria est à l'écoute. Parlez maintenant...",
    "aicfo.voiceUserQuery": "Utilisateur: Prédire la variance de notre trésorerie pour le prochain trimestre...",
    "aicfo.voiceAriaResponse": "Aria: Traitement des données. Je projette une réserve de trésorerie brute de 16,4 mois pour le T4. Les indices de risque restent stables à 1,2%.",

    "aicfo.forecastTitle": "Simulateur de Capital et de Marges",
    "aicfo.forecastLead": "Rationalisez vos budgets opérationnels, testez la sensibilité des marges et anticipez les besoins de trésorerie.",
    "aicfo.sliderGrowth": "Taux de Croissance Projeté",
    "aicfo.sliderExpense": "Réduction des Négoces",
    "aicfo.forecastRevenue": "Revenu Estimé",
    "aicfo.forecastExpense": "Charges Estimées (OPEX)",
    "aicfo.forecastProfit": "Marge d'EBITDA Estimée",

    "products.eyebrow": "Modules Opérationnels",
    "products.title": "Des solutions puissantes pour chaque département",
    "products.lead": "Une plateforme unifiée conçue pour l'expansion internationale. Remplacez les logiciels fragmentés.",

    "prodTab.accounting": "Comptabilité",
    "prodTab.sales": "Points de Vente",
    "prodTab.expenses": "Dépenses",
    "prodTab.hr": "Ressources Humaines",
    "prodTab.payroll": "Paie & Salaires",
    "prodTab.inventory": "Stocks & Inventaire",
    "prodTab.reports": "Moteur de Rapports",
    "prodTab.automation": "Automatisation",
    "prodTab.communication": "Communication",

    "gallery.eyebrow": "Visite Virtuelle",
    "gallery.title": "Interface Utilisateur Haute Fidélité",
    "gallery.lead": "Explorez les écrans de comptabilité unifiée, les contrôleurs de caisse et les graphiques de conformité fiscale.",

    "galleryFilter.all": "Tous les Écrans",
    "galleryFilter.ai": "IA & Prévisions",
    "galleryFilter.accounting": "Comptabilité & Caisses",
    "galleryFilter.hr": "RH & Paie",
    "galleryFilter.reports": "Rapports & TVA",

    "sectors.eyebrow": "Secteurs Spécialisés",
    "sectors.title": "Solutions Industrielles Spécialisées pour Chaque Secteur",
    "sectors.lead": "De l'industrie lourde au commerce de détail et aux analytiques de marchés souverains — Hiesabati fournit des modules conçus avec précision pour chaque environnement.",
    "sectors.glassTitle": "ERP Verrerie & Traitement de Matériaux",
    "sectors.glassDesc": "De l'optimisation des feuilles brutes aux séquences de trempe personnalisées. Surveillez l'efficacité des lots, les taux de gaspillage et les surcharges de fabrication automatiquement.",
    "sectors.mfgTitle": "Fabrication Industrielle & Contrôle Atelier",
    "sectors.mfgDesc": "Synchronisez les nomenclatures, suivez les étapes de gamme, allouez les écarts de main-d'œuvre et gérez les stocks bruts avec traçabilité complète.",
    "sectors.posTitle": "Point de Vente (POS) & Commerce Fluide",
    "sectors.posDesc": "POS multi-caisse à fort volume, fonctionnant hors ligne, synchronisé instantanément avec le grand livre et calculant les règles fiscales locales automatiquement.",
    "sectors.reportsTitle": "Intelligence de Marché Souveraine & Analytiques",
    "sectors.reportsDesc": "Reporting financier dynamique, suivi des fluctuations de devises et insights analytiques compilés pour les portefeuilles d'investissement souverains.",

    "video.eyebrow": "Démonstration",
    "video.title": "Présentation de la Plateforme d'Entreprise",
    "video.lead": "Regardez notre aperçu de 2 minutes pour voir comment Hiesabati automatise les écritures de journal et signale les anomalies.",

    "price.eyebrow": "Tarifs Évolutifs",
    "price.title": "Des forfaits clairs pour accompagner votre croissance",
    "pricing.monthly": "Facturation Mensuelle",
    "pricing.annually": "Facturation Annuelle",
    "pricing.saveTag": "Épargnez 20%",

    "test.eyebrow": "Succès Client",
    "test.title": "Recommandé par les directeurs financiers d'envergure",

    "about.eyebrow": "Profil Corporate",
    "about.title": "Développé pour le contrôle institutionnel et la conformité",
    "about.p1": "Hiesabati AI allie l'apprentissage automatique aux écritures comptables en partie double pour offrir une visibilité absolue sur les activités internationales.",
    "about.p2": "Organisés en équipe à distance globale, notre cadre réglementaire prend en charge les exigences multi-pays (TVA, impôt sur les sociétés, régimes régionaux).",

    "contact.eyebrow": "Relations Entreprises",
    "contact.title": "Planifier une démonstration technique",
    "contact.lead": "Réservez un échange approfondi avec nos ingénieurs solutions.",
    "contact.name": "Nom Complet",
    "contact.company": "Entité légale",
    "contact.email": "Adresse Email Professionnelle",
    "contact.message": "Besoins opérationnels",
    "contact.submit": "Envoyer la Demande",
    "contact.siteLabel": "Site Officiel",
    "contact.emailLabel": "Email Corporate",
    "contact.phoneLabel": "Ligne Directe Solutions",
    "contact.hqLabel": "Siège Social Global",
    "contact.hqVal": "Aspin Commercial Tower, Sheikh Zayed Road, Dubaï, Émirats Arabes Unis",
    "contact.socialTitle": "Réseaux Sociaux Officiels",

    "footer.blurb": "Le système d'exploitation financier piloté par l'IA pour les entreprises exigeant des audits fluides.",
    "footer.h1": "Solutions",
    "footer.solutionsTitle": "Composants",
    "footer.h2": "Entreprise",
    "footer.hSubscribe": "Lettre d'information",
    "footer.subscribeLead": "Restez informé des réformes fiscales et des mises à jour Hiesabati.",
    "footer.subscribeBtn": "S'abonner",
    "footer.solAccounting": "Comptabilité Double Partie",
    "footer.solReporting": "Conformité Dynamique",
    "footer.solWorkflow": "Flux Automatisés",
    "footer.careers": "Carrières",
    "footer.blog": "Blog de Ressources",
    "footer.privacy": "Charte de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.cookie": "Préférences Cookies",
    "video.sessionTitle": "Aria Autonomous Session",
    "video.sessionSub": "Live ledger compliance walkthrough",
    "sec.card1Title": "SOC 2 Type II Certified",
    "sec.card1Desc": "Annual independent CPA auditing of operational processes, secure hosting, and encryption safeguards.",
    "sec.card2Title": "ISO 27001 Standard",
    "sec.card2Desc": "Complete execution of ISO/IEC information security management systems rules across global operations.",
    "sec.card3Title": "GDPR & IFRS Compliant",
    "sec.card3Desc": "Strict regional data privacy guidelines and globally standardized corporate accounting ledger audits.",
    "sec.card4Title": "AES-256 Encryption",
    "sec.card4Desc": "All database records and file storage nodes are secured using military-grade cryptographic keys.",
    "reg.eyebrow": "Official Registration",
    "reg.title": "HIESABATI — Registered Enterprise",
    "reg.desc": "Licensed, registered, and operating under UAE commercial law. Full transparency for enterprise due diligence.",
    "reg.labelLicense": "Trade License Number",
    "reg.labelMembership": "Membership Number",
    "reg.labelRegistration": "Registration Number",
    "reg.labelProprietor": "Proprietor",
    "reg.labelAddress": "Registered Address",
    "reg.valAddress": "B05-102, Commercial Center, Floor 1508, Dubai, UAE",
    "reg.labelWebsite": "Official Website",
    "office.hqTitle": "Dubai HQ (AET)",
    "office.hqAddress": "B05-102, Commercial Center, Floor 1508, Dubai, UAE",
    "office.waTitle": "WhatsApp Direct",
    "office.waDesc": "Instant enterprise support via WhatsApp business line",
    "office.webTitle": "Official Website",
    "office.webDesc": "Platform demos, product tours, and enterprise briefings",
    "office.emailTitle": "Corporate Inbox",
    "office.emailDesc": "Solution architects available within 24 hours",
    "journey.eyebrow": "Simulation Interactive",
    "journey.title": "Le Voyage d'Affaires Hiesabati de A à Z",
    "journey.lead": "Parcourez le cycle complet des opérations de l'entreprise pour voir Hiesabati en action en temps réel.",
    "journey.s1Title": "Enregistrement",
    "journey.s1Desc": "Créer le profil de l'entité, définir les dates fiscales et les devises par défaut.",
    "journey.s2Title": "Branches et Entrepôts",
    "journey.s2Desc": "Configurer les emplacements mondiaux, les bacs et les gestionnaires de magasin.",
    "journey.s3Title": "Utilisateurs et Rôles",
    "journey.s3Desc": "Inviter l'équipe, définir les étendues ACL granulaires et forcer l'authentification 2FA.",
    "journey.s4Title": "Clients et Fournisseurs",
    "journey.s4Desc": "Suivre les limites de crédit, les dettes et les profils commerciaux.",
    "journey.s5Title": "Produits et Inventaire",
    "journey.s5Desc": "Générer des codes-barres, déclencher des transferts d'entrepôt et suivre le stock.",
    "journey.s6Title": "Processus de Vente",
    "journey.s6Desc": "Du devis aux commandes clients, facturation, paiements et relevés.",
    "journey.s7Title": "Processus d'Achat",
    "journey.s7Desc": "Demandes d'achat, commandes, rapprochement fournisseurs et mises à jour de stock.",
    "journey.s8Title": "Gestion Financière",
    "journey.s8Desc": "Grand Livre, double partie, contrôle AR/AP et rapprochements.",
    "journey.s9Title": "Ressources Humaines",
    "journey.s9Desc": "Profils, planification, suivi des présences et paie à la performance.",
    "journey.s10Title": "Fiscalité et Conformité",
    "journey.s10Desc": "Déclarations de TVA, journaux d'audit et réglementations régionales.",
    "journey.s11Title": "Moteur d'Automatisation",
    "journey.s11Desc": "Configurer les approbations multi-étapes, les flux d'alerte et les rapports planifiés.",
    "journey.s12Title": "Moteur d'IA CFO",
    "journey.s12Desc": "Lancer des prédictions, détecter les anomalies financières et générer des recommandations.",
    "journey.s13Title": "Rapports et Analyses",
    "journey.s13Desc": "Générer des rapports de flux de trésorerie, des KPI exécutifs et des pistes d'audit.",
    "journey.s14Title": "Centre de Décision",
    "journey.s14Desc": "Vérifier le score de l'indice de santé de l'entité et le conseil stratégique.",
    "journey.s15Title": "Croissance des Affaires",
    "journey.s15Desc": "Se développer avec des opérations multidevises et des filiales internationales.",
    "journey.statementTitle": "\"De votre première facture à votre entreprise globale...\"",
    "journey.statementDesc": "HIESABATI alimente chaque étape de votre entreprise.",
    "footer.copy": "© 2026 Hiesabati AI. Tous droits réservés. Licence Commerciale: 987654/DXB.",
    "sec.card1Title": "Certification SOC 2 Type II",
    "sec.card1Desc": "Audit annuel indépendant CPA des processus opérationnels, de l'hébergement sécurisé et des mesures de chiffrement.",
    "sec.card2Title": "Norme ISO 27001",
    "sec.card2Desc": "Application complète des règles de systèmes de management de la sécurité de l'information ISO/IEC dans les opérations mondiales.",
    "sec.card3Title": "Conforme RGPD & IFRS",
    "sec.card3Desc": "Directives strictes de confidentialité des données régionales et audits de livres comptables standardisés mondialement.",
    "sec.card4Title": "Chiffrement AES-256",
    "sec.card4Desc": "Tous les enregistrements de base de données et les nœuds de stockage de fichiers sont sécurisés avec des clés cryptographiques de niveau militaire.",
    "reg.eyebrow": "Enregistrement Officiel",
    "reg.title": "HIESABATI — Entreprise Enregistrée",
    "reg.desc": "Licenciée, enregistrée et opérant sous la loi commerciale des Émirats. Transparence totale pour la due diligence d'entreprise.",
    "reg.labelLicense": "Numéro de Licence Commerciale",
    "reg.labelMembership": "Numéro d'Adhésion",
    "reg.labelRegistration": "Numéro d'Enregistrement",
    "reg.labelProprietor": "Propriétaire",
    "reg.labelAddress": "Adresse Enregistrée",
    "reg.valAddress": "B05-102, Centre Commercial, Étage 1508, Dubaï, EAU",
    "reg.labelWebsite": "Site Web Officiel",
    "office.hqTitle": "Siège de Dubaï (AET)",
    "office.hqAddress": "B05-102, Centre Commercial, Étage 1508, Dubaï, EAU",
    "office.waTitle": "WhatsApp Direct",
    "office.waDesc": "Support entreprise instantané via la ligne WhatsApp Business",
    "office.webTitle": "Site Web Officiel",
    "office.webDesc": "Démos de plateforme, visites produit et briefings d'entreprise",
    "office.emailTitle": "Boîte Mail Entreprise",
    "office.emailDesc": "Architectes de solutions disponibles dans les 24 heures",
    "video.sessionTitle": "Session Autonome Aria",
    "video.sessionSub": "Démonstration de conformité de grand livre en direct",
    "demoVideo.eyebrow": "Aria en Action",
    "demoVideo.title": "Découvrez l'Assistant IA des Ventes",
    "demoVideo.desc": "Regardez une démonstration en direct de la façon dont Aria interagit intelligemment avec les utilisateurs pour fournir des informations en temps réel sur les fonctionnalités, la tarification et la sécurité de niveau bancaire.",
    "success.counter1": "40+ Pays",
    "success.counter2": "25 000+ Entreprises",
    "success.counter3": "5 Continents",
    "success.counter4": "Plateforme Mondiale",
    "success.filterCountry": "Pays :",
    "success.filterIndustry": "Secteur :",
    "success.filterSize": "Taille d'Entreprise :",
    "success.labelCountry": "📍 Pays",
    "success.labelIndustry": "🏢 Secteur",
    "success.labelScale": "👥 Effectif",
    "success.labelType": "💼 Type",
    "success.operChallenge": "Défi Opérationnel",
    "success.hiesabatiSol": "Solution Hiesabati",
    "success.yearsClient": "Années Client",
    "footer.linkCustomerExp": "Expérience Client",
    "footer.linkSecurity": "Sécurité & Confiance",
    "footer.linkOfficialSite": "Site Web Officiel",
    "footer.linkWhatsApp": "Support WhatsApp"
  },
  zh: {
    dir: "ltr",
    brandName: "Hiesabati AI",
    "nav.features": "平台功能",
    "nav.aicfo": "AI 财务官",
    "nav.products": "产品线",
    "nav.gallery": "图库演示",
    "nav.pricing": "订阅价格",
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.getStarted": "立即开始",
    "nav.extraSolutions": "解决方案",
    "nav.extraSecurity": "安全信托",
    "nav.extraIntegrations": "系统集成",

    "hero.badge": "财务 • 业务运营 • AI 助手",
    "hero.title": "Hiesabati AI",
    "hero.lead": "开始与您的智能商业及财务伙伴对话。Hiesabati AI 深入理解您业务的每一个细节，实时分析会计、销售、库存、制造、建筑、材料、劳动力和运营数据，以提供先进预测、精准建议及自动化的风险规避。",
    "hero.pillar1Title": "全流程跨行业智能",
    "hero.pillar1Desc": "实时分析会计、销售、库存、制造、建筑、材料与劳动力指标。",
    "hero.pillar2Title": "预测式决策大脑",
    "hero.pillar2Desc": "提供先进预测、自动预算编制以及专家级经营发展建议。",
    "hero.pillar3Title": "零失误税收合规",
    "hero.pillar3Desc": "24/7 全天候异常警报、自动化风险规避及多国税制合规审计。",
    "hero.ctaPrimary": "申请高级简报",
    "hero.ctaSecondary": "探索生态系统",
    "hero.stat1": "活跃企业客户",
    "hero.stat2": "每日自动审计",
    "hero.stat3": "系统可用性",
    "hero.float1Label": "月度总营业额",
    "hero.float2Label": "审计合规风险度",

    "partners.title": "为全球行业领导者构建金融技术基础",

    "features.eyebrow": "企业级生态系统",
    "features.title": "治理企业财务所需的一切能力",
    "features.lead": "将复式记账总账、销售终端、工资发放和资产库存整合到一个受自动化工作流保护的安全工作空间中。",

    "stats.s1": "活跃企业客户",
    "stats.s2": "已审计交易笔数",
    "stats.s3v": "95%",
    "stats.s3": "纳税申报准确率",
    "stats.s4": "综合合规评分",

    "aicfo.eyebrow": "认知金融科技引擎",
    "aicfo.title": "结识 Aria — 您的自主企业 AI 首席财务官",
    "aicfo.lead": "与我们的 AI 对话，即时运行账目对账、增值税合规审计、流动资金预测以及异常发票检测。",
    "aicfo.assistantName": "Aria — 企业级 AI CFO",
    "aicfo.assistantStatus": "安全连接已激活",
    "aicfo.welcomeMsg": "您好！我是 Aria。选择下方审计项，我对您的实时账目进行快速合规筛查。",
    "aicfo.suggestedLabel": "选择审计提问",
    "aicfo.voiceStandby": "语音 CFO 模式待命。点击麦克风开始。",
    "aicfo.voiceTitle": "语音 CFO 模拟器",
    "aicfo.voiceSubtitle": "点击麦克风通过语音模型咨询 Aria",
    "aicfo.voiceListening": "Aria 正在聆听。请说...",
    "aicfo.voiceUserQuery": "用户：预测我们下个季度的现金流偏差...",
    "aicfo.voiceAriaResponse": "Aria：正在处理总账数据。基于当前的平均消耗率，我预计第四季度的总现金跑道为 16.4 个月。风险指数保持稳定在 1.2%。",

    "aicfo.forecastTitle": "动态运营资金与利润模拟器",
    "aicfo.forecastLead": "理顺运营预算，测试利润率敏感度，并模拟季度现金流跑道场景。",
    "aicfo.sliderGrowth": "预计季度增长率",
    "aicfo.sliderExpense": "运营成本削减比例",
    "aicfo.forecastRevenue": "预计营业收入",
    "aicfo.forecastExpense": "预计运营成本",
    "aicfo.forecastProfit": "预计 EBITDA 利润率",

    "products.eyebrow": "产品矩阵",
    "products.title": "为各业务部门设计的强大而精美模块",
    "products.lead": "专为跨国扩展而设计的统一平台。用经过认证的合规系统取代零散工具。",

    "prodTab.accounting": "智能会计",
    "prodTab.sales": "销售终端",
    "prodTab.expenses": "费用支出",
    "prodTab.hr": "人力资源",
    "prodTab.payroll": "工资薪酬",
    "prodTab.inventory": "智能库存",
    "prodTab.reports": "报表引擎",
    "prodTab.automation": "流程自动化",
    "prodTab.communication": "协同沟通",

    "gallery.eyebrow": "图库巡礼",
    "gallery.title": "高保真系统操作界面",
    "gallery.lead": "虚拟浏览 Hiesabati 的统一财务终端、销售班次对账和合规跟踪仪表盘。",

    "galleryFilter.all": "全部界面",
    "galleryFilter.ai": "人工智能与预测",
    "galleryFilter.accounting": "会计与销售终端",
    "galleryFilter.hr": "人事与工资",
    "galleryFilter.reports": "报表与合规",

    "sectors.eyebrow": "行业专项解决方案",
    "sectors.title": "为每个行业量身打造的专业模块",
    "sectors.lead": "从重工业车间到高街零售与主权市场分析 — Hiesabati 为每种运营环境提供精密设计的专项模块。",
    "sectors.glassTitle": "玻璃与材料加工 ERP",
    "sectors.glassDesc": "从原材料优化到定制钢化生产线。自动监控批次效率、损耗率和玻璃制造间接成本核算。",
    "sectors.mfgTitle": "工业制造与车间管理",
    "sectors.mfgDesc": "同步物料清单(BOM)、跟踪工艺路线步骤、分配劳动差异，并对原材料库存进行全面序列号追溯管理。",
    "sectors.posTitle": "销售终端(POS)与无缝零售",
    "sectors.posDesc": "支持多收银台高并发的 POS 系统，可离线运行，即时与总账同步，并自动套用当地税务规则。",
    "sectors.reportsTitle": "主权市场智能与分析",
    "sectors.reportsDesc": "动态财务报告、货币波动跟踪及面向主权投资组合的专项市场洞察报告自动生成。",

    "video.eyebrow": "产品演示视频",
    "video.title": "企业运营平台功能漫游",
    "video.lead": "观看 2 分钟的系统概述，了解 Hiesabati 如何自动记账并标记税务风险。",

    "price.eyebrow": "灵活定价",
    "price.title": "为全球化扩张提供透明的定价计划",
    "pricing.monthly": "按月计费",
    "pricing.annually": "按年计费",
    "pricing.saveTag": "节省 20%",

    "test.eyebrow": "客户口碑",
    "test.title": "备受全球企业首席财务官好评",

    "about.eyebrow": "企业介绍",
    "about.title": "为机构控制与全球业务扩张而打造",
    "about.p1": "Hiesabati AI 将先进的机器学习模型与稳健的复式记账账簿紧密结合，为跨国企业提供全方位的财务可见性。",
    "about.p2": "我们采用全球化远程协作模式，合规框架可全面支持多国税务规则（增值税、企业所得税及地区关税），实现零妥协的安全保障。",

    "contact.eyebrow": "客户服务",
    "contact.title": "启动企业客户对接",
    "contact.lead": "与我们的解决方案专家预约详细的平台技术简报会。",
    "contact.name": "姓名",
    "contact.company": "企业主体名称",
    "contact.email": "业务电子邮箱",
    "contact.message": "系统需求说明",
    "contact.submit": "提交简报申请",
    "contact.siteLabel": "官方网站",
    "contact.emailLabel": "企业信箱",
    "contact.phoneLabel": "解决方案专线",
    "contact.hqLabel": "全球总部大楼",
    "contact.hqVal": "阿联酋迪拜谢赫扎耶德路阿斯平商业大厦",
    "contact.socialTitle": "官方协同社交渠道",

    "footer.blurb": "AI 驱动的企业财务操作系统，助您轻松完成审计并实现业务腾飞。",
    "footer.h1": "解决方案",
    "footer.solutionsTitle": "核心模块",
    "footer.h2": "公司资讯",
    "footer.hSubscribe": "订阅合规通知",
    "footer.subscribeLead": "获取每月有关地区税改和 Hiesabati 最新发布的资讯。",
    "footer.subscribeBtn": "订阅",
    "footer.solAccounting": "复式记账法",
    "footer.solReporting": "动态税收合规",
    "footer.solWorkflow": "自动化工作流",
    "footer.careers": "职业招聘",
    "footer.blog": "资源博客",
    "footer.privacy": "隐私章程",
    "footer.terms": "治理服务条款",
    "footer.cookie": "Cookie 设置",
    "video.sessionTitle": "Aria 模拟会话",
    "video.sessionSub": "实时账目合规流程演示",
    "sec.card1Title": "SOC 2 Type II 审计认证",
    "sec.card1Desc": "由独立注册会计师对安全托管、加密传输和操作流程进行的年度合规性审计。",
    "sec.card2Title": "ISO 27001 信息安全标准",
    "sec.card2Desc": "在全球业务范围内严格执行 ISO/IEC 信息安全管理体系要求。",
    "sec.card3Title": "GDPR & IFRS 双重合规",
    "sec.card3Desc": "遵循严苛的跨国数据隐私法规，提供符合全球主流会计准则的账目审计核查。",
    "sec.card4Title": "AES-256 军事级加密",
    "sec.card4Desc": "所有数据库实体及文件存储节点均通过军事级加密算法安全锁定。",
    "reg.eyebrow": "官方注册资质",
    "reg.title": "HIESABATI — 注册企业资质",
    "reg.desc": "根据阿联酋商业法特许设立、登记注册并合规运营。面向全球合作伙伴提供完备的尽职调查透明度。",
    "reg.labelLicense": "商业营业执照号",
    "reg.labelMembership": "商会会员编号",
    "reg.labelRegistration": "企业注册代号",
    "reg.labelProprietor": "法定代表人/业主",
    "reg.labelAddress": "官方注册地址",
    "reg.valAddress": "阿联酋迪拜，商业中心，1508号办公区",
    "reg.labelWebsite": "官方网址",
    "office.hqTitle": "迪拜全球总部",
    "office.hqAddress": "阿联酋迪拜，商业中心，1508号办公区",
    "office.waTitle": "WhatsApp 快捷通道",
    "office.waDesc": "通过 WhatsApp 官方企业通道为您提供实时企业咨询服务。",
    "office.webTitle": "官方网址",
    "office.webDesc": "访问产品演示、演示中心以及获取高级简报。",
    "office.emailTitle": "企业官方邮箱",
    "office.emailDesc": "企业级系统架构师将在 24 小时内响应您的定制需求。",
    "journey.eyebrow": "交互式模拟",
    "journey.title": "Hiesabati 业务全流程演示",
    "journey.lead": "逐步探索完整的企业运营周期，实时查看 Hiesabati 的运行效果。",
    "journey.s1Title": "公司注册",
    "journey.s1Desc": "建立实体档案、设置财务日期及默认币种。",
    "journey.s2Title": "分支机构与仓库设置",
    "journey.s2Desc": "配置全球运营地点、货架仓位与仓管人员。",
    "journey.s3Title": "用户与角色权限管理",
    "journey.s3Desc": "邀请团队成员、配置精细的ACL范围并强制启用两步验证(2FA)。",
    "journey.s4Title": "客户与供应商管理",
    "journey.s4Desc": "监控信用额度、应付款项及商业资质档案。",
    "journey.s5Title": "产品与库存管理",
    "journey.s5Desc": "生成商品条码、触发调拨补货并实时跟踪库存量。",
    "journey.s6Title": "销售流程管理",
    "journey.s6Desc": "涵盖销售报价、销售订单、销售出库、开发票收款及对账单。",
    "journey.s7Title": "采购采购控制",
    "journey.s7Desc": "处理采购申请、采购单生成、三单匹配入库及库存自动更新。",
    "journey.s8Title": "财务会计管理",
    "journey.s8Desc": "总账管理、遵循复式记账法、应收应付(AR/AP)分析及银行对账。",
    "journey.s9Title": "人力资源管理",
    "journey.s9Desc": "员工档案建立、考勤排班、工时记录与绩效挂钩 of 薪资核算。",
    "journey.s10Title": "税收与合规",
    "journey.s10Desc": "自动生成增值税申报表、详细审计日志追踪及地方税收合规性校验。",
    "journey.s11Title": "工作流自动控制",
    "journey.s11Desc": "配置多级审批链、业务规则预警推送及定时数据报表发送。",
    "journey.s12Title": "AI 智能财务官",
    "journey.s12Desc": "自动预测业务趋势、捕获异常财务明细并输出针对性决策洞察。",
    "journey.s13Title": "决策分析报告",
    "journey.s13Desc": "自动汇总现金流量表、业务关键指标(KPI)看板及合规审计跟踪记录。",
    "journey.s14Title": "高管决策中心",
    "journey.s14Desc": "实时查询企业健康指数评分及多维战略经营建议报告。",
    "journey.s15Title": "业务规模扩张",
    "journey.s15Desc": "引入多币种核算体系并支持开设跨国分支及控股子公司。",
    "journey.statementTitle": "\"从第一张发票，到全球化跨国企业集团...\"",
    "journey.statementDesc": "HIESABATI 为您商业版图的每一步提供数字化引擎。",
    "footer.copy": "© 2026 Hiesabati AI. 保留所有权利。商业许可证号: 987654/DXB。",
    "demoVideo.eyebrow": "Aria 实时展示",
    "demoVideo.title": "体验 AI 智能销售助手",
    "demoVideo.desc": "观看 Aria 如何智能与用户互动，实时提供功能、定价和银行级安全信息，并无缝连接 WhatsApp 解决方案架构师的直播演示。",
    "success.counter1": "覆盖 40+ 国家",
    "success.counter2": "25,000+ 家企业",
    "success.counter3": "5 大洲",
    "success.counter4": "全球统一平台",
    "success.filterCountry": "国家/地区：",
    "success.filterIndustry": "行业：",
    "success.filterSize": "公司规模：",
    "success.labelCountry": "📍 国家",
    "success.labelIndustry": "🏢 行业",
    "success.labelScale": "👥 规模",
    "success.labelType": "💼 类型",
    "success.operChallenge": "运营挑战",
    "success.hiesabatiSol": "Hiesabati 解决方案",
    "success.yearsClient": "年资客户",
    "footer.linkCustomerExp": "客户案例",
    "footer.linkSecurity": "安全与信任",
    "footer.linkOfficialSite": "官方网站",
    "footer.linkWhatsApp": "WhatsApp 支持"
  },
  ur: {
    dir: "rtl",
    brandName: "حساباتی AI",
    "nav.features": "خصوصیات",
    "nav.aicfo": "AI سی ایف او",
    "nav.products": "مصنوعات",
    "nav.gallery": "گیلری",
    "nav.pricing": "قیمتیں",
    "nav.about": "تعارف",
    "nav.contact": "رابطہ",
    "nav.getStarted": "شروع کریں",
    "nav.extraSolutions": "حلول",
    "nav.extraSecurity": "سیکیورٹی",
    "nav.extraIntegrations": "انضمام سسٹم",

    "hero.badge": "فنانس • کاروباری آپریشنز • AI اسسٹنٹ",
    "hero.title": "حساباتی AI",
    "hero.lead": "اپنے ذہین کاروباری اور مالیاتی پارٹنر سے بات چیت شروع کریں۔ حساباتی AI (Hiesabati AI) آپ کے کاروبار کی ہر تفصیل کو سمجھتا ہے، اکاؤنٹنگ، سیلز، انوینٹری، مینوفیکچرنگ، تعمیرات، میٹریل، ورک فورس، اور آپریشنز کا ریئل ٹائم میں تجزیہ کرتا ہے تاکہ پیشین گوئی کی بصیرتیں، درست سفارشات، اور خودکار خطرے کی روک تھام فراہم کی جا سکے۔",
    "hero.pillar1Title": "کثیر شعبہ جاتی ذہانت",
    "hero.pillar1Desc": "اکاؤنٹنگ، انوینٹری، مینوفیکچرنگ، اور افرادی قوت کا حقیقی وقت کا تجزیہ۔",
    "hero.pillar2Title": "پیشین گوئی کے تجزیات",
    "hero.pillar2Desc": "جدید پیشین گوئی، خودکار بجٹ سازی، اور آپ کی انگلی پر اسٹریٹجک سفارشات۔",
    "hero.pillar3Title": "صفر غلطی تعمیل",
    "hero.pillar3Desc": "24/7 الرٹس، خودکار خطرے کی روک تھام، اور کثیر ملکی ٹیکس آڈیٹنگ۔",
    "hero.ctaPrimary": "خصوصی بریفنگ کی درخواست کریں",
    "hero.ctaSecondary": "پلیٹ فارم دریافت کریں",
    "hero.stat1": "فعال کاروباری ادارے",
    "hero.stat2": "روزانہ آڈٹس",
    "hero.stat3": "سسٹم SLA",
    "hero.float1Label": "ماہانہ آمدنی",
    "hero.float2Label": "آڈٹ خطرہ انڈیکس",

    "partners.title": "صنعت کے رہنماؤں کے لیے مالیاتی نظام کا انتظام",

    "features.eyebrow": "انٹرپرائز ماحولیاتی نظام",
    "features.title": "کارپوریٹ مالیات کا انتظام کرنے کی ہر صلاحیت",
    "features.lead": "اکاؤنٹنگ لیجر، پوائنٹ آف سیل ٹرمینلز، پے رول رنز اور اثاثوں کی انوینٹری کو ایک محفوظ اور خودکار ورک اسپیس میں مربوط کریں۔",

    "stats.s1": "فعال کاروباری ادارے",
    "stats.s2": "آڈٹ شدہ لین دین",
    "stats.s3v": "95%",
    "stats.s3": "ٹیکس فائلنگ درستگی",
    "stats.s4": "تعمیل اسکور",

    "aicfo.eyebrow": "مالیاتی ذہانت کا انجن",
    "aicfo.title": "ملیں Aria سے — آپ کا خودمختار فنانشل سی ایف او",
    "aicfo.lead": "اکاؤنٹ کی فوری مصالحت، VAT آڈٹ، ورکنگ کیپیٹل کی پیش گوئی، اور انوائس آڈٹ کے لیے ہمارے AI سے رابطہ کریں۔",
    "aicfo.assistantName": "Aria — فنانشل AI سی ایف او",
    "aicfo.assistantStatus": "محفوظ کنکشن فعال ہے",
    "aicfo.welcomeMsg": "خوش آمدید۔ میں آریا ہوں۔ اپنے کھاتوں کی فوری تعمیل کی جانچ کرنے کے لیے نیچے دیے گئے کسی آڈٹ آپشن کا انتخاب کریں۔",
    "aicfo.suggestedLabel": "آڈٹ سوال منتخب کریں",
    "aicfo.voiceStandby": "وائس CFO موڈ اسٹینڈ بائی۔ شروع کرنے کے لیے مائیک پر کلک کریں۔",
    "aicfo.voiceTitle": "وائس CFO سمیلیٹر",
    "aicfo.voiceSubtitle": "صوتی ماڈل کے ذریعے آریا سے مشورہ کرنے کے لیے مائیک پر کلک کریں",
    "aicfo.voiceListening": "آریا سن رہی ہے۔ بولیں...",
    "aicfo.voiceUserQuery": "صارف: اگلے کوارٹر کے لیے ہمارے کیش فلو کے فرق کی پیشن گوئی کریں...",
    "aicfo.voiceAriaResponse": "آریا: لیجر ان پٹس پر کارروائی ہو رہی ہے۔ میں موجودہ اوسط برن ریٹ کی بنیاد پر Q4 کا مجموعی کیش رن وے 16.4 ماہ متوقع کرتی ہوں۔ رسک انڈیکس 1.2% پر مستحکم ہے۔",

    "aicfo.forecastTitle": "متحرک ورکنگ کیپیٹل اور منافع کا سمیلیٹر",
    "aicfo.forecastLead": "آپریٹنگ بجٹ کو معقول بنائیں، منافع کے مارجن کا ٹیسٹ کریں اور سہ ماہی کیش کی پیش گوئی سمیلیٹ کریں۔",
    "aicfo.sliderGrowth": "توقع سہ ماہی شرح نمو",
    "aicfo.sliderExpense": "اخراجات میں کٹوتی",
    "aicfo.forecastRevenue": "تخمینہ آمدنی",
    "aicfo.forecastExpense": "تخمینہ اخراجات",
    "aicfo.forecastProfit": "تخمینہ EBITDA مارجن",

    "products.eyebrow": "مصنوعات کا ماحولیاتی نظام",
    "products.title": "ہر آپریشنل یونٹ کے لیے خوبصورت اور طاقتور ماڈیولز",
    "products.lead": "عالمی وسعت کے لیے تیار کردہ ایک مربوط پلیٹ فارم۔ بکھرے ہوئے اوزاروں کو سرٹیفائیڈ تعمیل سے بدلیں۔",

    "prodTab.accounting": "اکاؤنٹنگ",
    "prodTab.sales": "پوائنٹ آف سیل",
    "prodTab.expenses": "اخراجات",
    "prodTab.hr": "ایچ آر سویٹ",
    "prodTab.payroll": "پے رول",
    "prodTab.inventory": "انوینٹری",
    "prodTab.reports": "رپورٹس انجن",
    "prodTab.automation": "آٹومیشن",
    "prodTab.communication": "کمیونیکیشن",

    "gallery.eyebrow": "مصنوعات کا ٹور",
    "gallery.title": "ہائی فائیڈیلٹی آپریشنز کا انٹرفیس",
    "gallery.lead": "حساباتی کے مربوط مالیاتی ٹرمینل، کیشیر ٹرمینلز، اور ٹیکس ڈیش بورڈز کا جائزہ لیں۔",

    "galleryFilter.all": "تمام اسکرینیں",
    "galleryFilter.ai": "مصنوعی ذہانت اور پیشگوئی",
    "galleryFilter.accounting": "اکاؤنٹنگ اور پوائنٹ آف سیل",
    "galleryFilter.hr": "ایچ آر اور پے رول",
    "galleryFilter.reports": "رپورٹس اور ٹیکس تعمیل",

    "sectors.eyebrow": "خصوصی صنعتی شعبے",
    "sectors.title": "ہر شعبے کے لیے خصوصی حل",
    "sectors.lead": "بھاری صنعت سے لے کر خوردہ تجارت اور مارکیٹ تجزیات تک — حسابتی ہر آپریشنل ماحول کے لیے درست انجینئرڈ ماڈیول فراہم کرتا ہے۔",
    "sectors.glassTitle": "شیشہ اور مواد پروسیسنگ ERP",
    "sectors.glassDesc": "خام شیٹ بہتری سے لے کر کسٹم ٹمپرنگ تک۔ بیچ کارکردگی، ضیاع کا فیصد، اور شیشہ سازی کے اخراجات کا خودکار حساب۔",
    "sectors.mfgTitle": "صنعتی مینوفیکچرنگ اور فلور کنٹرول",
    "sectors.mfgDesc": "BOM مواد کی فہرستیں مطابقت کریں، روٹنگ مراحل کو ٹریک کریں، لیبر فرق مختص کریں، اور مکمل سیریل ٹریس ایبلٹی کے ساتھ خام انوینٹری کا انتظام کریں۔",
    "sectors.posTitle": "نقطہ فروخت (POS) اور آسان خوردہ تجارت",
    "sectors.posDesc": "کثیر رجسٹر POS جو آف لائن کام کرے، فوری طور پر لیجر سے مطابقت کرے، اور مقامی ٹیکس قوانین خودکار طریقے سے لاگو کرے۔",
    "sectors.reportsTitle": "مارکیٹ انٹیلی جنس اور تجزیاتی رپورٹس",
    "sectors.reportsDesc": "متحرک مالیاتی رپورٹنگ، کرنسی اتار چڑھاؤ کی نگرانی، اور خودمختار سرمایہ کاری پورٹ فولیوز کے لیے تجزیاتی رپورٹس۔",

    "video.eyebrow": "پلیٹ فارم ڈیمو",
    "video.title": "انٹرپرائز آپریشنز پلیٹ فارم کا واکتھرو",
    "video.lead": "ہمارا 2 منٹ کا ویڈیو ڈیمو دیکھیں اور سمجھیں کہ کس طرح حساباتی خودکار روزنامچہ درج کرتا اور ٹیکس کے خطرات کو روکتا ہے۔",

    "price.eyebrow": "سبسکرپشن پلانز",
    "price.title": "عالمی وسعت کے لیے شفاف قیمتیں",
    "pricing.monthly": "ماہانہ ادائیگی",
    "pricing.annually": "سالانہ ادائیگی",
    "pricing.saveTag": "20% بچت کریں",

    "test.eyebrow": "صارفین کی کامیابی",
    "test.title": "عالمی کاروباری اداروں کے مالیاتی سربراہان کا پسندیدہ",

    "about.eyebrow": "کمپنی کا خاکہ",
    "about.title": "عالمی کاروباری وسعت اور انتظامی کنٹرول کے لیے تیار کردہ",
    "about.p1": "حساباتی AI جدید مشین لرننگ ماڈلز کو روایتی ڈبل انٹری اکاؤنٹنگ لیجرز کے ساتھ مربوط کرتا ہے تاکہ بین الاقوامی کاروبار کے لیے مکمل مرئیت فراہم کی جا سکے۔",
    "about.p2": "ہم ریموٹ ٹیم کے طور پر کام کرتے ہیں، اور ہمارا تعمیل فریم ورک متعدد ممالک کے ٹیکس ضوابط (VAT، کارپوریٹ ٹیکس، علاقائی کسٹمز) کی حمایت کرتا ہے۔",

    "contact.eyebrow": "کلائنٹ ڈیسک",
    "contact.title": "انٹرپرائز آن بورڈنگ کا آغاز کریں",
    "contact.lead": "ہمارے حل کے ماہرین کے ساتھ پلیٹ فارم کی تفصیلی بریفنگ شیڈول کریں۔",
    "contact.name": "پورا نام",
    "contact.company": "کمپنی کا نام",
    "contact.email": "کاروباری ای میل",
    "contact.message": "سسٹم کی ضروریات",
    "contact.submit": "درخواست جمع کریں",
    "contact.siteLabel": "آفیشل ویب سائٹ",
    "contact.emailLabel": "کارپوریٹ ان باکس",
    "contact.phoneLabel": "ہاٹ لائن",
    "contact.hqLabel": "عالمی صدر دفتر",
    "contact.hqVal": "اسپن کمرشل ٹاور، شیخ زاید روڈ، دبئی، متحدہ عرب امارات",
    "contact.socialTitle": "سرکاری سوشل چینلز",

    "footer.blurb": "کاروباری اداروں کے لیے بہترین مالیاتی آپریٹنگ سسٹم جو آسان آڈٹ اور تیزی سے ترقی چاہتے ہیں۔",
    "footer.h1": "حل",
    "footer.solutionsTitle": "بنیادی ماڈیولز",
    "footer.h2": "کمپنی",
    "footer.hSubscribe": "تعمیلی خبرنامے کی رکنیت لیں",
    "footer.subscribeLead": "علاقائی ٹیکسوں کی تبدیلیوں اور حساباتی ریلیز پر ماہانہ الرٹس حاصل کریں۔",
    "footer.subscribeBtn": "رکن بنیں",
    "footer.solAccounting": "ڈبل انٹری کھاتہ",
    "footer.solReporting": "متحرک تعمیل",
    "footer.solWorkflow": "خودکار ورک فلو",
    "footer.careers": "روزگار",
    "footer.blog": "بلاگ",
    "footer.privacy": "رازداری کا منشور",
    "footer.terms": "شرائط و ضوابط",
    "footer.cookie": "کوکیز کی ترجیحات",
    "video.sessionTitle": "Aria Autonomous Session",
    "video.sessionSub": "Live ledger compliance walkthrough",
    "sec.card1Title": "SOC 2 Type II Certified",
    "sec.card1Desc": "Annual independent CPA auditing of operational processes, secure hosting, and encryption safeguards.",
    "sec.card2Title": "ISO 27001 Standard",
    "sec.card2Desc": "Complete execution of ISO/IEC information security management systems rules across global operations.",
    "sec.card3Title": "GDPR & IFRS Compliant",
    "sec.card3Desc": "Strict regional data privacy guidelines and globally standardized corporate accounting ledger audits.",
    "sec.card4Title": "AES-256 Encryption",
    "sec.card4Desc": "All database records and file storage nodes are secured using military-grade cryptographic keys.",
    "reg.eyebrow": "Official Registration",
    "reg.title": "HIESABATI — Registered Enterprise",
    "reg.desc": "Licensed, registered, and operating under UAE commercial law. Full transparency for enterprise due diligence.",
    "reg.labelLicense": "Trade License Number",
    "reg.labelMembership": "Membership Number",
    "reg.labelRegistration": "Registration Number",
    "reg.labelProprietor": "Proprietor",
    "reg.labelAddress": "Registered Address",
    "reg.valAddress": "B05-102, Commercial Center, Floor 1508, Dubai, UAE",
    "reg.labelWebsite": "Official Website",
    "office.hqTitle": "Dubai HQ (AET)",
    "office.hqAddress": "B05-102, Commercial Center, Floor 1508, Dubai, UAE",
    "office.waTitle": "WhatsApp Direct",
    "office.waDesc": "Instant enterprise support via WhatsApp business line",
    "office.webTitle": "Official Website",
    "office.webDesc": "Platform demos, product tours, and enterprise briefings",
    "office.emailTitle": "Corporate Inbox",
    "office.emailDesc": "Solution architects available within 24 hours",
    "journey.eyebrow": "انٹرایکٹو سمولیشن",
    "journey.title": "حساباتی بزنس کا سفر A سے Z تک",
    "journey.lead": "بزنس آپریشنز کے مکمل چکر کو مرحلہ وار دیکھیں تاکہ حساباتی کو لائیو کام کرتے ہوئے دیکھا جا سکے۔",
    "journey.s1Title": "کمپنی رجسٹریشن",
    "journey.s1Desc": "کمپنی کا پروفائل بنائیں، مالیاتی تاریخیں اور ڈیفالٹ کرنسی منتخب کریں۔",
    "journey.s2Title": "برانچ اور گودام",
    "journey.s2Desc": "عالمی مقامات، گودام کے خانے، اور اسٹور منیجرز کو ترتیب دیں۔",
    "journey.s3Title": "صارف اور کردار",
    "journey.s3Desc": "ٹیم کو مدعو کریں، تفصیلی رسائی (ACL) سیٹ کریں، اور 2FA لازمی کریں۔",
    "journey.s4Title": "کسٹمر اور سپلائر",
    "journey.s4Desc": "کریڈٹ کی حدود، واجب الادا رقم، اور کاروباری پروفائلز ٹریک کریں۔",
    "journey.s5Title": "پروڈکٹ اور انوینٹری",
    "journey.s5Desc": "بار کوڈز بنائیں، گودام کی منتقلی کو فعال کریں، اور اسٹاک ٹریک کریں۔",
    "journey.s6Title": "فروخت کا عمل",
    "journey.s6Desc": "کوٹیشن سے لے کر سیلز آرڈر، انوائسنگ، ادائیگیاں، اور اسٹیٹمنٹس۔",
    "journey.s7Title": "خریداری کا عمل",
    "journey.s7Desc": "خریداری کی درخواستیں، آرڈرز، سپلائرز سے ملاپ، اور انوینٹری اپ ڈیٹ۔",
    "journey.s8Title": "مالیاتی انتظام",
    "journey.s8Desc": "جنرل لیجر، ڈبل انٹری، AR/AP کنٹرول، اور بینک ملاپ۔",
    "journey.s9Title": "انسانی وسائل",
    "journey.s9Desc": "پروفائلز، شیڈولنگ، حاضری کی ٹریکنگ، اور کارکردگی پے رول۔",
    "journey.s10Title": "ٹیکس اور تعمیل",
    "journey.s10Desc": "VAT ڈیکلریشنز، آڈٹ لاگز، اور علاقائی قوانین۔",
    "journey.s11Title": "خودکار انجن",
    "journey.s11Desc": "کثیر الجہتی منظوریوں، الرٹ فلو، اور شیڈول رپورٹس کو ترتیب دیں۔",
    "journey.s12Title": "AI CFO انجن",
    "journey.s12Desc": "پیش گوئیاں چلائیں، مالیاتی غلطیوں کی نشاندہی کریں، اور تجاویز پیش کریں۔",
    "journey.s13Title": "رپورٹس اور تجزیہ",
    "journey.s13Desc": "کیش فلو رپورٹس، ایگزیکٹو KPIs، اور آڈٹ ٹریلز بنائیں۔",
    "journey.s14Title": "ایگزیکٹو فیصلہ مرکز",
    "journey.s14Desc": "کمپنی کی صحت کا انڈیکس اسکور اور اسٹریٹجک ایڈوائزری چیک کریں۔",
    "journey.s15Title": "کاروبار کی ترقی",
    "journey.s15Desc": "کثیر کرنسی آپریشنز اور بین الاقوامی ذیلی اداروں کے ساتھ توسیع کریں۔",
    "journey.statementTitle": "\"پہلی انوائس سے لے کر عالمی انٹرپرائز تک...\"",
    "journey.statementDesc": "حساباتی آپ کے کاروبار کے ہر قدم کو طاقت دیتا ہے۔",
    "footer.copy": "© 2026 حساباتی AI۔ جملہ حقوق محفوظ ہیں۔ تجارتی لائسنس نمبر: 987654/DXB.",
    "sec.card1Title": "SOC 2 Type II سرٹیفیکیشن",
    "sec.card1Desc": "آپریشنل عمل، محفوظ ہوسٹنگ، اور خفیہ کاری کی سالانہ آزاد CPA آڈیٹنگ۔",
    "sec.card2Title": "ISO 27001 معیار",
    "sec.card2Desc": "عالمی آپریشنز میں ISO/IEC انفارمیشن سیکیورٹی مینجمنٹ سسٹمز قوانین کا مکمل نفاذ۔",
    "sec.card3Title": "GDPR اور IFRS تعمیل",
    "sec.card3Desc": "سخت علاقائی ڈیٹا پرائیویسی ہدایات اور عالمی سطح پر معیاری کارپوریٹ اکاؤنٹنگ آڈٹ۔",
    "sec.card4Title": "AES-256 خفیہ کاری",
    "sec.card4Desc": "تمام ڈیٹا بیس ریکارڈز اور فائل اسٹوریج نوڈز فوجی درجے کی خفیہ نگاری سے محفوظ ہیں۔",
    "reg.eyebrow": "سرکاری رجسٹریشن",
    "reg.title": "HIESABATI — رجسٹرڈ انٹرپرائز",
    "reg.desc": "متحدہ عرب امارات کے تجارتی قانون کے تحت لائسنس یافتہ، رجسٹرڈ اور کام کرنے والا۔ انٹرپرائز کی مکمل شفافیت۔",
    "reg.labelLicense": "تجارتی لائسنس نمبر",
    "reg.labelMembership": "رکنیت نمبر",
    "reg.labelRegistration": "رجسٹریشن نمبر",
    "reg.labelProprietor": "مالک",
    "reg.labelAddress": "رجسٹرڈ پتہ",
    "reg.valAddress": "B05-102، کمرشل سینٹر، فلور 1508، دبئی، UAE",
    "reg.labelWebsite": "سرکاری ویب سائٹ",
    "office.hqTitle": "دبئی ہیڈ کوارٹرز",
    "office.hqAddress": "B05-102، کمرشل سینٹر، فلور 1508، دبئی، UAE",
    "office.waTitle": "واٹس ایپ براہ راست",
    "office.waDesc": "واٹس ایپ بزنس لائن کے ذریعے فوری انٹرپرائز سپورٹ",
    "office.webTitle": "سرکاری ویب سائٹ",
    "office.webDesc": "پلیٹ فارم ڈیمو، پروڈکٹ ٹورز، اور انٹرپرائز بریفنگز",
    "office.emailTitle": "کارپوریٹ ان باکس",
    "office.emailDesc": "24 گھنٹوں میں دستیاب سلوشن آرکیٹیکٹس",
    "video.sessionTitle": "Aria کا خودمختار سیشن",
    "video.sessionSub": "لائیو لیجر کمپلائنس واک تھرو",
    "demoVideo.eyebrow": "آریا حرکت میں",
    "demoVideo.title": "AI سیلز اسسٹنٹ کا تجربہ کریں",
    "demoVideo.desc": "دیکھیں کہ آریا کس طرح ذہانت سے صارفین کے ساتھ خصوصیات، قیمتوں اور بینک درجے کی سیکیورٹی کے بارے میں ریئل ٹائم معلومات فراہم کرتی ہے۔",
    "success.counter1": "40+ ممالک",
    "success.counter2": "25,000+ کاروبار",
    "success.counter3": "5 براعظم",
    "success.counter4": "عالمی پلیٹ فارم",
    "success.filterCountry": "ملک:",
    "success.filterIndustry": "صنعت:",
    "success.filterSize": "کمپنی کا حجم:",
    "success.labelCountry": "📍 ملک",
    "success.labelIndustry": "🏢 صنعت",
    "success.labelScale": "👥 پیمانہ",
    "success.labelType": "💼 قسم",
    "success.operChallenge": "آپریشنل چیلنج",
    "success.hiesabatiSol": "حساباتی حل",
    "success.yearsClient": "سال کا کلائنٹ",
    "footer.linkCustomerExp": "کسٹمر کا تجربہ",
    "footer.linkSecurity": "سیکیورٹی اور اعتماد",
    "footer.linkOfficialSite": "سرکاری ویب سائٹ",
    "footer.linkWhatsApp": "واٹس ایپ سپورٹ"
  }
};

/* ============== 2. DATA ARRAYS (STRUCTURED) ============== */
const DATA = {
  features: {
    en: [
      ["🧠", "AI CFO Advisory", "Predictive cash flow models, capital simulators, and anomaly alerts."],
      ["📊", "Ledger Accounting", "Asset management, multi-currency ledger, and automatic closing runs."],
      ["⚙️", "Point of Sale Terminal", "Shift-by-shift reconciliation, cashier validation, and offline transactions."],
      ["👥", "Workforce Suite", "Central employee directory, work tasks, and shift scheduling."],
      ["🧾", "GCC VAT Compliance", "Automated calculations, tax returns filing support, and audit trail."],
      ["🔍", "Consolidated Audit Trail", "Log every database mutation with cryptographically verified footprints."],
      ["🤖", "Workflow Automation", "Trigger actions on budget exceedance, invoice arrival, or calendar dates."],
      ["💬", "Communication Hub", "Built-in chat, audio notes, and instant receipts sharing inside team chats."],
      ["💡", "Real-time Analytics", "Instant KPI dashboards and trend visualizations."],
      ["", "Scalable Cloud Architecture", "Deploy on global data centers with auto‑scaling."],
      ["🔐", "Security & Compliance", "End-to-end encryption, role‑based access, and audit trails."],
      ["📈", "Financial Forecasting", "AI‑driven cash flow and profit forecasts."]
    ],
    ar: [
      ["🧠", "الاستشارات المالية بالذكاء الاصطناعي", "نماذج التدفق النقدي التنبؤية ومحاكيات رأس المال وتنبيهات المخاطر."],
      ["📊", "دفتر الحسابات العام", "إدارة الأصول، دفتر الأستاذ متعدد العملات، وإقفال الحسابات تلقائياً."],
      ["⚙️", "محطات نقاط البيع", "تسوية الورديات يدوياً وتلقائياً، التحقق من الصندوق، والمعاملات بدون إنترنت."],
      ["👥", "إدارة القوى العاملة", "دليل موظفين مركزي، مهام عمل تشغيلية، وتخطيط الورديات الحيوية."],
      ["🧾", "الامتثال لضريبة القيمة المضافة", "حسابات تلقائية بالكامل، دعم تقديم الإقرارات، ومسارات تدقيق صارمة."],
      ["🔍", "مسار التدقيق الموحد", "تسجيل كامل لكل العمليات داخل قاعدة البيانات مع بصمة تحقق مشفرة."],
      ["🤖", "أتمتة العمليات (RPA)", "تفعيل الموافقات عند تجاوز الميزانية، أو استلام الفواتير، أو حلول المواعيد."],
      ["💬", "مركز الاتصال والتعاون", "دردشة مدمجة للفريق، ملاحظات صوتية، ومشاركة فورية للمستندات والإيصالات."]
    ],
    fr: [
      ["🧠", "Conseil CFO IA", "Modèles de flux prédictifs, simulateurs de trésorerie et alertes."],
      ["📊", "Comptabilité Générale", "Gestion des actifs, grand livre multidevise et clôtures automatisées."],
      ["⚙️", "Terminaux de Point de Vente", "Clôture de caisse par poste, validation de caisse et transactions hors ligne."],
      ["👥", "Portail des Employés", "Annuaire centralisé, assignation de tâches et planification d'horaires."],
      ["🧾", "Conformité Fiscale", "Calculs automatisés, génération de déclarations et pistes d'audit."],
      ["🔍", "Journal d'Audit Vérifié", "Historique cryptographique de toutes les modifications de base de données."],
      ["🤖", "Automatisation des Flux", "Déclencheurs automatiques sur dépassement de budget ou facturation."],
      ["💬", "Centre Collaboratif", "Messagerie d'équipe, notes vocales et partage immédiat de factures."]
    ],
    zh: [
      ["🧠", "AI CFO 咨询决策", "预测性现金流模型、资金敏感度模拟和异常风控提醒。"],
      ["📊", "复式记账总账", "固定资产管理、多币种账簿以及期末自动结算结账。"],
      ["⚙️", "销售终端 (POS)", "班次收银对账、收银员授权校验以及离线交易数据同步。"],
      ["👥", "企业人力资源", "中央员工花名册、工作任务流派发以及考勤排班计划。"],
      ["🧾", "税收与增值税合规", "系统自动计算税费、支持一件导出申报表及完整审计历史。"],
      ["🔍", "加密级防篡改审计链", "使用加密哈希记录每一次数据修改，确保审计安全性。"],
      ["🤖", "智能流程自动化", "当超出预算额度、收到发票或到达截止日期时自动触发流转。"],
      ["💬", "企业协同通讯", "内置即时聊天、快速语音备忘录以及在会话中共享单据。"]
    ],
    ur: [
      ["🧠", "AI سی ایف او ایڈوائزری", "پیشگوئی نقد بہاؤ ماڈل، کیپیٹل سمیلیٹر، اور بے ضابطگی کے الرٹس۔"],
      ["📊", "لیجر اکاؤنٹنگ", "اثاثہ جات کا انتظام، کثیر کرنسی کھاتہ، اور خودکار سالانہ کلوزنگ۔"],
      ["⚙️", "پوائنٹ آف سیل ٹرمینل", "شفٹ کے مطابق مصالحت، کیشئیر تصدیق، اور آف لائن ٹرانزیکشنز۔"],
      ["👥", "افرادی قوت کا انتظام", "مرکزی ملازمین کی فہرست، کام کے کام اور شفٹ شیڈولنگ۔"],
      ["🧾", "ٹیکس اور VAT تعمیل", "خودکار حساب کتاب، ٹیکس گوشوارے فائل کرنے کی سہولت، اور آڈٹ ٹریل۔"],
      ["🔍", "تصدیق شدہ آڈٹ ٹریل", "ڈیٹا بیس کی ہر تبدیلی کا کرپٹوگرافک ریکارڈ محفوظ کریں۔"],
      ["🤖", "ورک فلو آٹومیشن", "بجٹ حد سے تجاوز، انوائس آمد، یا کیلنڈر کی تاریخوں پر خودکار اقدامات۔"],
      ["💬", "رابطہ حب", "ٹیم چیٹس کے اندر چیٹ، آڈیو نوٹس، اور رسیدیں شیئر کرنے کی سہولت۔"]
    ]
  },
  products: {
    accounting: {
      img: "assets/JournalEntries.png",
      en: {
        title: "Unified General Ledger & Journal Entries",
        desc: "Certified double-entry engine designed for corporate compliance. Automate calculations, manage depreciation schedule, and lock accounting periods with confidence.",
        list: ["Auto-balanced multi-currency ledger bookings", "GAAP & IFRS compliance rulesets active", "Audit logs captured for every posting transaction"]
      },
      ar: {
        title: "دفتر الأستاذ الموحد والقيود اليومية",
        desc: "محرك معتمد مزدوج القيد مصمم للامتثال المؤسسي الفوري. قم بأتمتة الحسابات وإدارة جداول استهلاك الأصول وإغلاق الفترات المحاسبية بثقة.",
        list: ["حجز قيود متعدد العملات متوازن تلقائياً", "قواعد امتثال معايير المحاسبة الدولية IFRS و GAAP", "سجلات تدقيق مسجلة لكل عملية ترحيل"]
      },
      fr: {
        title: "Grand Livre Général & Écritures Comptables",
        desc: "Moteur en partie double certifié pour la conformité d'entreprise. Automatisez les calculs, gérez l'amortissement et verrouillez les exercices.",
        list: ["Écritures comptables multidevises équilibrées", "Règles comptables GAAP & IFRS actives", "Historique d'audit complet pour chaque transaction"]
      },
      zh: {
        title: "统一复式记账总账与日记账分录",
        desc: "经过机构认证的复式记账内核，专为企业合规设计。支持自动摊销、折旧管理及会计期间安全锁定。",
        list: ["自动平衡的多币种账簿记账", "全面支持 GAAP 与 IFRS 会计准则", "每次记账操作均记录完整审计历史"]
      },
      ur: {
        title: "مربوط جنرل کھاتہ اور روزنامچہ اندراجات",
        desc: "کارپوریٹ تعمیل کے لیے تیار کردہ ڈبل انٹری اکاؤنٹنگ انجن۔ خودکار حساب کتاب چلائیں اور پراعتماد طریقے سے اکاؤنٹنگ فترات مقفل کریں۔",
        list: ["خود کار متوازن ملٹی کرنسی لیجر بکنگ", "GAAP اور IFRS تعمیلی قوانین فعال ہیں", "ہر پوسٹنگ ٹرانزیکشن کے لیے آڈٹ لاگز"]
      }
    },
    sales: {
      img: "assets/Point_of_sale.png",
      en: {
        title: "Point of Sale Cashier & Shift Manager",
        desc: "Manage high-velocity retail sales terminals. Real-time shift reconciliation, cash drawer audit controls, and seamless offline cashier synchronization.",
        list: ["Shift Sell terminals controller active", "Cash drawer audit trail & terminal variance checks", "Integrated payment gateway API protocols"]
      },
      ar: {
        title: "نقطة البيع ومراقب ورديات الكاشير",
        desc: "أدر محطات مبيعات التجزئة عالية السرعة. تسويات ورديات فورية، فحوصات تدقيق درج النقدية، ومزامنة كاشير كاملة بدون إنترنت.",
        list: ["مراقب محطات ورديات المبيعات Shift Sell نشط", "مسار تدقيق درج النقد وفحص فروقات الصندوق", "بروتوكولات ربط بوابات الدفع المدمجة"]
      },
      fr: {
        title: "Point de Vente & Gestion des Postes",
        desc: "Gérez les terminaux de vente à fort volume. Réconciliation des postes en temps réel, contrôle des tiroirs-caisses et synchronisation hors ligne.",
        list: ["Contrôleur de terminaux de vente Shift Sell actif", "Audit de tiroir-caisse et détection des écarts", "Protocoles API de passerelle de paiement intégrés"]
      },
      zh: {
        title: "销售点终端 (POS) 与收银班次管理",
        desc: "高效管理零售门店的收银终端。支持实时班次对账、钱箱审计盘点以及离线销售数据自动对账同步。",
        list: ["Shift Sell 收银终端控制器就绪", "钱箱审计追踪及终端资金差异自动核查", "集成主流支付网关 API 接口规范"]
      },
      ur: {
        title: "پوائنٹ آف سیل کیشئیر اور شفٹ مینیجر",
        desc: "تیز رفتار ریٹیل سیلز ٹرمینلز کا انتظام کریں۔ ریئل ٹائم شفٹ مصالحت، کیش دراز آڈٹ کنٹرولز، اور آف لائن کیشئیر سنکرونائزیشن۔",
        list: ["شفٹ سیل ٹرمینلز کنٹرولر فعال ہے", "کیش دراز آڈٹ ٹریل اور ٹرمینل فرق کی جانچ", "مربوط ادائیگی گیٹ وے API پروٹوکول"]
      }
    },
    expenses: {
      img: "assets/Financial_Statements.png",
      en: {
        title: "Automated Expense Audit & Cash Statements",
        desc: "Verify every currency outflow. Capture receipt uploads with intelligent text extraction, automatically categorize operational spend, and audit financial leaks.",
        list: ["AI-powered receipt text extraction (OCR)", "Dynamic spending policy controls", "Real-time cash flow variance visualization"]
      },
      ar: {
        title: "التدقيق التلقائي للمصروفات والقوائم المالية",
        desc: "تحقق من كل تدفق خارج للعملة. التقط صور الإيصالات مع استخراج النصوص الذكي وتصنيف تلقائي للمصاريف وتدقيق التسريبات المالية.",
        list: ["استخراج نصوص الإيصالات بالذكاء الاصطناعي (OCR)", "عناصر تحكم ديناميكية بسياسات الصرف", "رسم بياني لحظي لتباين التدفق النقدي"]
      },
      fr: {
        title: "Audit de Dépenses & Flux de Trésorerie",
        desc: "Vérifiez chaque flux sortant. Capturez les reçus par extraction de texte intelligente, catégorisez les dépenses opérationnelles et limitez les fuites.",
        list: ["Extraction de texte de reçus par IA (OCR)", "Contrôle dynamique des politiques de dépenses", "Visualisation en temps réel des variations de trésorerie"]
      },
      zh: {
        title: "自动费用审计与现金流量表",
        desc: "审核企业的每一笔资金流出。利用 AI 图像文字识别提取发票单据数据，自动归类运营支出并拦截财务漏洞。",
        list: ["AI 驱动的发票与收据文本提取 (OCR)", "动态支出政策和额度风控管理", "实时现金流差异与偏离度可视化看板"]
      },
      ur: {
        title: "خودکار اخراجات آڈٹ اور کیش گوشوارے",
        desc: "ہر کرنسی کے اخراج کے بہاؤ کی تصدیق کریں۔ ذہین ٹیکسٹ ایکسٹریکشن کے ساتھ رسید اپ لوڈز حاصل کریں، اور اخراجات کا خودکار آڈٹ کریں۔",
        list: ["AI سے چلنے والا رسید ٹیکسٹ ایکسٹریکشن (OCR)", "متحرک اخراجات کی پالیسی کنٹرولز", "ریئل ٹائم کیش فلو فرق کی مرئیت"]
      }
    },
    hr: {
      img: "assets/Tasks.png",
      en: {
        title: "Workforce Lifecycle & Task Tracking",
        desc: "Manage personnel records, delegate operations tasks, and track attendance. Connected directly with financial cost centers to map operational ROI.",
        list: ["Central personnel profile repository", "Interactive operations task scheduler", "Departmental workforce cost allocations"]
      },
      ar: {
        title: "دورة حياة الموظفين وتتبع مهام العمل",
        desc: "أدر سجلات الموظفين، ووزّع مهام العمليات، وتابع الحضور والانصراف. متصل مباشرة بمراكز التكلفة المالية لحساب العائد على الاستثمار التشغيلي.",
        list: ["مستودع مركزي لملفات الموظفين", "جدولة مهام تفاعلية لفرق العمليات", "تخصيص تكاليف الموارد البشرية حسب الأقسام"]
      },
      fr: {
        title: "Suivi des Collaborateurs & Tâches",
        desc: "Gérez les dossiers du personnel, attribuez des tâches opérationnelles et suivez les présences. Lié directement aux centres de coûts.",
        list: ["Répertoire centralisé des profils d'employés", "Planificateur interactif des tâches opérationnelles", "Affectation budgétaire des coûts de personnel"]
      },
      zh: {
        title: "员工生命周期与工作任务跟踪",
        desc: "管理员工人事档案、指派每日工作任务并追踪考勤。直接关联企业财务成本中心，科学测算运营投资回报率。",
        list: ["中央人事档案及资料库系统", "交互式运营任务排期与派发器", "按部门分配的人工成本控制看板"]
      },
      ur: {
        title: "افرادی قوت کا انتظام اور کاموں کی ٹریکنگ",
        desc: "ملازمین کے ریکارڈ کا انتظام کریں، آپریشنز کے کام سونپیں، اور حاضری کو ٹریک کریں۔ آپریشنل ROI کو نقشہ کرنے کے لیے لاگت کے مراکز سے منسلک۔",
        list: ["مرکزی ملازمین کے پروفائل کی فہرست", "انٹرایکٹو آپریشنز ٹاسک شیڈولر", "محکمہ جاتی افرادی قوت لاگت کی الاٹمنٹ"]
      }
    },
    payroll: {
      img: "assets/Performance.png",
      en: {
        title: "Performance-Linked Global Payroll Engine",
        desc: "Run payroll processing on schedule. Automatically calculate deductions, process performance incentives, and generate payslips fully integrated with bank transfer nodes.",
        list: ["Automated salary batch processing runs", "Performance indices tied to payroll calculations", "Direct salary bank transfer export capabilities"]
      },
      ar: {
        title: "محرك الرواتب العالمي المرتبط بالأداء",
        desc: "شغّل معالجة الرواتب في موعدها المحدد. احسب الاستقطاعات تلقائياً، وعالج حوافز الأداء، وأصدر قسائم الرواتب المرتبطة بنقاط التحويل البنكي.",
        list: ["معالجة دفعات الرواتب التلقائية في مواعيدها", "ربط مؤشرات الأداء بحسابات الرواتب تلقائياً", "تصدير ملفات التحويل المباشر للرواتب للبنوك"]
      },
      fr: {
        title: "Moteur de Paie lié aux Performances",
        desc: "Exécutez la paie à date fixe. Calculez les déductions, intégrez les bonus de performance et générez les fiches de paie connectées aux banques.",
        list: ["Traitement automatique des lots de salaires", "Indicateurs de performance liés aux salaires", "Exportation des virements bancaires directs"]
      },
      zh: {
        title: "业绩挂钩的全球工资与薪酬引擎",
        desc: "准时高效发放员工薪资。自动计算代扣代缴税费、处理绩效奖金激励，并生成与银行网关对接的薪资支付凭证。",
        list: ["自动化薪资批处理运行计划", "与绩效指标绑定的薪酬自动计算规则", "直连银行网银的薪资代发数据导出文件"]
      },
      ur: {
        title: "کارکردگی سے منسلک عالمی پے رول انجن",
        desc: "شیڈول کے مطابق پے رول پروسیسنگ چلائیں۔ کٹوتیاں، مراعات کا خودکار حساب لگائیں، اور پے سلپس بینک ٹرانسفر کے ساتھ مربوط کریں۔",
        list: ["خودکار تنخواہ بیچ پروسیسنگ رنز", "پے رول کے حساب کتاب سے منسلک کارکردگی کے اشاریے", "براہ راست تنخواہ بینک ٹرانسفر ایکسپورٹ کی خصوصیات"]
      }
    },
    inventory: {
      img: "assets/Inventory_Report.png",
      en: {
        title: "Real-Time Stock Audit & Valuation",
        desc: "Eliminate discrepancies. Monitor stock moves across multiple warehouse locations, automatically execute cost of goods sold calculations, and trigger low-stock alerts.",
        list: ["Multi-warehouse real-time tracking metrics", "Automated FIFO & Weighted Average valuation", "Reorder automation triggers based on run rates"]
      },
      ar: {
        title: "جرد وتقييم المخزون في الوقت الفعلي",
        desc: "تخلص من الفروقات. راقب تحركات المخزون عبر مواقع مستودعات متعددة، واحسب تكلفة البضائع المباعة تلقائياً، وفعّل تنبيهات انخفاض المخزون.",
        list: ["مقاييس تتبع لحظية للمستودعات المتعددة", "تقييم آلي بطرق FIFO والمتوسط المرجح", "إطلاق طلبات إعادة الطلب تلقائياً بناءً على معدلات السحب"]
      },
      fr: {
        title: "Suivi des Stocks & Évaluation",
        desc: "Éliminez les écarts de stock. Suivez les mouvements d'articles sur plusieurs entrepôts, calculez la valeur des stocks et configurez les alertes.",
        list: ["Suivi en temps réel sur plusieurs entrepôts", "Valorisation automatisée PEPS (FIFO) & CUMP", "Seuils de réapprovisionnement automatique configurables"]
      },
      zh: {
        title: "实时库存盘点与资产估值",
        desc: "彻底消除库存盘亏。跨多仓库监控库存移动，自动计算销售商品成本 (COGS)，并在库存不足时自动发起采购补货申请。",
        list: ["多仓库实时库存跟踪与动销指标", "自动先进先出 (FIFO) 及加权平均估值算法", "基于消耗率的自动安全库存重订货触发器"]
      },
      ur: {
        title: "ریئل ٹائم اسٹاک آڈٹ اور ویلیوایشن",
        desc: "اسٹاک کے فرق کو ختم کریں۔ متعدد گوداموں میں اسٹاک کی نقل و حرکت کی نگرانی کریں، اور خودکار کم اسٹاک الرٹس فعال کریں۔",
        list: ["ملٹی گودام ریئل ٹائم ٹریکنگ میٹرکس", "خودکار FIFO اور وزنی اوسط ویلیوایشن", "رن ریٹ کی بنیاد پر دوبارہ آرڈر کرنے کے ٹریگرز"]
      }
    },
    reports: {
      img: "assets/Reports.png",
      en: {
        title: "Dynamic Analytics & Financial Consolidation",
        desc: "Generate balance sheets, trial balances, and regional cash flow charts instantly. Export tax-ready audit books with verified cryptographically sealed files.",
        list: ["Consolidated multi-subsidiary financials", "One-click CSV & Microsoft Excel exports", "Legally compliant audit trailing outputs"]
      },
      ar: {
        title: "التحليلات الديناميكية وتوحيد القوائم المالية",
        desc: "أصدر الميزانيات العمومية وموازين المراجعة ومخططات التدفق النقدي فورا. صَدّر دفاتر الحسابات الجاهزة للضرائب بملفات مؤمنة ومختومة رقمياً.",
        list: ["قوائم مالية موحدة للشركات التابعة المتعددة", "تصدير ملفات CSV و Excel بنقرة واحدة", "مخرجات مسار التدقيق المتوافقة قانونياً"]
      },
      fr: {
        title: "Analyses Financières Consolideés",
        desc: "Générez bilans, balances et tableaux de flux de trésorerie instantanément. Exportez les livres comptables conformes scellés de manière sécurisée.",
        list: ["Consolidation des données multi-filiales", "Exports CSV & Microsoft Excel en un clic", "Traces d'audit certifiées et conformes à la loi"]
      },
      zh: {
        title: "动态数据分析与财务报表合并",
        desc: "即时生成资产负债表、科目余额表和地区现金流量表。一件导出税务合规的高清财务凭证与加密锁定审计账簿。",
        list: ["跨多子公司财务报表一键智能合并", "CSV 与 Microsoft Excel 格式一键无损导出", "完全符合司法与监管合规要求的防篡改审计底稿"]
      },
      ur: {
        title: "متحرک تجزیات اور مالیاتی استحکام",
        desc: "بیلنس شیٹ، ٹرائل بیلنس، اور علاقائی کیش فلو چارٹس فوری تیار کریں۔ تصدیق شدہ فائلز کے ساتھ ٹیکس کے لیے تیار آڈٹ بکس برآمد کریں۔",
        list: ["مربوط کثیر ذیلی مالیاتی رپورٹنگ", "ایک کلک کے ساتھ CSV اور Microsoft Excel ایکسپورٹ", "قانونی طور پر تعمیلی آڈٹ ٹریل آؤٹ پٹس"]
      }
    },
    automation: {
      img: "assets/VAT_Dashboard.png",
      en: {
        title: "Enterprise Automation Workflows",
        desc: "Define conditional pipelines to remove administrative manual actions. Connect accounting ledgers directly with external micro-services.",
        list: ["Conditional statement workflow triggers", "VAT return automated compilation engine", "Database-level audit trails and secure API hooks"]
      },
      ar: {
        title: "سير عمل الأتمتة للمؤسسات",
        desc: "حدد خطوط العمل الشرطية للتخلص من الإجراءات الإدارية اليدوية. اربط الدفاتر المحاسبية مباشرة بالخدمات الخارجية الصغيرة المدمجة.",
        list: ["محفزات سير العمل القائمة على الشروط", "محرك التجميع الآلي لإقرارات ضريبة القيمة المضافة", "مسارات تدقيق على مستوى قاعدة البيانات وربط API آمن"]
      },
      fr: {
        title: "Automatisation des Flux de Travail",
        desc: "Définissez des processus conditionnels pour supprimer les interventions manuelles. Connectez la comptabilité à vos micro-services.",
        list: ["Déclencheurs de flux selon des règles précises", "Moteur de calcul de TVA automatique", "Pistes d'audit en base de données et crochets API"]
      },
      zh: {
        title: "企业级自动化流程工作流",
        desc: "自定义条件触发的工作流管道，彻底摒弃繁琐的人工行政审批。支持将底层财务账目系统直接对接外部微服务模块。",
        list: ["多维条件组合式工作流自动触发器", "增值税申报表自动汇总与对账编制引擎", "数据库级别的底层审计留痕与安全 API 钩子"]
      },
      ur: {
        title: "انٹرپرائز آٹومیشن ورک فلوز",
        desc: "انتظامی دستی اقدامات کو ختم کرنے کے لیے مشروط پائپ لائنز کی وضاحت کریں۔ اکاؤنٹنگ لیجرز کو براہ راست بیرونی مائیکرو سروسز سے جوڑیں۔",
        list: ["مشروط ورک فلو ٹریگرز", "VAT ریٹرن خودکار مرتب کرنے کا انجن", "ڈیٹا بیس کی سطح پر آڈٹ ٹریلز اور محفوظ API ہکس"]
      }
    },
    communication: {
      img: "assets/chat.png",
      en: {
        title: "Secure Communication Hub & AI Assistant Chat",
        desc: "Collaborate directly on active ledger entries. Send receipt files inside chat channels, resolve expense disputes with your AI assistant, and keep every conversation in context.",
        list: ["Ledger-linked group messaging channels", "Dynamic document upload scanner in chats", "Conversational Aria AI CFO integration"]
      },
      ar: {
        title: "مركز التواصل الآمن ودردشة المساعد الذكي",
        desc: "تعاون مباشرة حول قيود الحسابات النشطة. أرسل ملفات الإيصالات والمستندات داخل قنوات المحادثة، وحل نزاعات المصاريف مع مساعدك المالي الذكي.",
        list: ["قنوات مراسلة جماعية مرتبطة بالحسابات", "ماسح ضوئي تفاعلي لرفع المستندات في المحادثات", "دمج كامل مع المدير المالي الذكي آريا"]
      },
      fr: {
        title: "Centre de Communication & Chat de l'Assistant IA",
        desc: "Collaborez directement sur les lignes comptables. Envoyez les justificatifs dans les canaux d'équipe et résolvez les litiges de dépenses avec l'IA.",
        list: ["Canaux de discussion liés aux écritures comptables", "Scanner intégré de documents dans les chats", "Intégration directe du CFO IA conversationnel Aria"]
      },
      zh: {
        title: "安全协同沟通中心与 AI 财务官对话",
        desc: "直接在财务账目凭证行中进行协同沟通。在聊天频道中上传原始发票附件，使用 AI 助理对差旅报销纠纷进行合规诊断。",
        list: ["与具体账簿会计凭证关联的协同群聊频道", "会话内嵌的多功能单据与发票附件扫描仪", "原生集成可支持日常业务问答的 Aria AI 助理"]
      },
      ur: {
        title: "محفوظ کمیونیکیشن حب اور AI اسسٹنٹ چیٹ",
        desc: "کھاتوں کے اندراجات پر براہ راست تعاون کریں۔ چیٹ چینلز میں رسید فائلیں بھیجیں، اور اپنے AI اسسٹنٹ کے ساتھ اخراجات کے مسائل حل کریں۔",
        list: ["کھاتوں سے منسلک گروپ میسجنگ چینلز", "چیٹ کے اندر متحرک دستاویز اپ لوڈ اسکینر", "گفتگو کے لیے Aria AI سی ایف او انٹیگریشن"]
      }
    }
  },
  gallery: [
    { img: "assets/dashboard.png", category: "ai", en: "Enterprise Global Dashboard System", ar: "نظام لوحة التحكم العالمية للمؤسسات", fr: "Système de Tableau de Bord Global d'Entreprise", zh: "企业全球财务总览看板系统", ur: "انٹرپرائز گلوبل ڈیش بورڈ سسٹم" },
    { img: "assets/dashboard2.png", category: "ai", en: "CFO Predictive Forecasting Model", ar: "نموذج توقعات المدير المالي التنبؤي", fr: "Modèle de Prévisions Prédictives du CFO", zh: "首席财务官前瞻性业务预测模型", ur: "سی ایف او پیشگوئی ماڈل" },
    { img: "assets/AI_Assistant.png", category: "ai", en: "Aria AI Smart Invoice Scanning Console", ar: "لوحة تحكم آريا لمسح الفواتير الذكية", fr: "Console de Scan de Factures Aria IA", zh: "Aria AI 智能发票文字识别与扫描控制台", ur: "آریا AI اسمارٹ انوائس اسکیننگ کنسول" },
    { img: "assets/AI_Document_Analysis.png", category: "ai", en: "OCR Financial Document Classifier", ar: "مصنف المستندات المالية المعتمد على القراءة الضوئية", fr: "Classificateur de Documents OCR par IA", zh: "基于 OCR 的财务单据智能分类与解析器", ur: "OCR فنانشل دستاویزات کا نظام" },
    { img: "assets/JournalEntries.png", category: "accounting", en: "Corporate Multi-Currency Journal Ledger", ar: "دفتر اليومية متعدد العملات للشركات", fr: "Journal Comptable Multidevise d'Entreprise", zh: "企业级多币种日记账与往来明细分类账", ur: "کارپوریٹ ملٹی کرنسی جرنل لیجر" },
    { img: "assets/Point_of_sale.png", category: "accounting", en: "High-Volume Point of Sale Cashier Screen", ar: "شاشة كاشير نقاط البيع ذات حجم المبيعات المرتفع", fr: "Écran de Point de Vente à Fort Volume", zh: "大运量零售门店收银结算点终端界面", ur: "پوائنٹ آف سیل کیشئیر اسکرین" },
    { img: "assets/Shift_Sell.png", category: "accounting", en: "Sales Shift Reconciliation Dashboard", ar: "لوحة تسوية ورديات المبيعات والصناديق", fr: "Tableau de Bord de Réconciliation de Caisse", zh: "收银员每日销售班次现金解缴与对账看板", ur: "سیلز شفٹ مصالحتی ڈیش بورڈ" },
    { img: "assets/Vendors.png", category: "accounting", en: "Corporate Vendor & Supplier Database", ar: "قاعدة بيانات الموردين وبائعي الشركات", fr: "Base de Données Fournisseurs d'Entreprise", zh: "企业合作伙伴、供应商及客商名录库", ur: "کارپوریٹ وینڈر اور سپلائر ڈیٹا بیس" },
    { img: "assets/Tasks.png", category: "hr", en: "Operations Workforce Task Assignee List", ar: "قائمة المكلفين بمهام القوى العاملة التشغيلية", fr: "Liste d'Assignation des Tâches Opérationnelles", zh: "运营部门现场工作任务指派与跟踪清单", ur: "آپریشنز افرادی قوت ٹاسک لسٹ" },
    { img: "assets/Performance.png", category: "hr", en: "Payroll Productivity Metrics Platform", ar: "منصة مقاييس إنتاجية مسيرات الرواتب", fr: "Indicateurs de Performance et Calcul de Paie", zh: "薪资发放绩效考核与劳动力生产率效能看板", ur: "پے رول پروڈکٹیوٹی میٹرکس پلیٹ فارم" },
    { img: "assets/Notifications.png", category: "hr", en: "Security Alerts & Workspace Log Notification", ar: "تنبيهات الأمان وإشعارات سجل مساحة العمل", fr: "Alerte de Sécurité & Notifications d'Espace", zh: "安全审计警报与企业工作区日志实时通知中心", ur: "سیکیورٹی الرٹس اور لاگ نوٹیفکیشن" },
    { img: "assets/Excel_Report.png", category: "reports", en: "Automated Trial Balance to Excel Exporter", ar: "مصدّر ميزان المراجعة التلقائي لملفات إكسل", fr: "Exportation Automatique de Balance vers Excel", zh: "科目余额表与财务凭证一键无损导出 Excel 接口", ur: "آٹومیٹڈ ٹرائل بیلنس ٹو ایکسیل ایکسپورٹر" },
    { img: "assets/Reports.png", category: "reports", en: "Custom Financial Report Builder Layout", ar: "لوحة بناء التقارير المالية المخصصة", fr: "Générateur de Rapports Financiers Personnalisés", zh: "自定义组合财务报表与多维分析建模器", ur: "فنانشل رپورٹ بلڈر لے آؤٹ" },
    { img: "assets/Inventory_Report.png", category: "reports", en: "Interactive Multi-Warehouse Stock Valuation", ar: "تقييم مخزون تفاعلي للمستودعات المتعددة", fr: "Valorisation de Stock Multi-Entrepôts", zh: "多仓联动仓储盘点与物资估值分析表", ur: "انٹرایکٹو ملٹی گودام اسٹاک ویلیوایشن" },
    { img: "assets/VAT_Dashboard.png", category: "reports", en: "Automated Regional VAT Return Compilation", ar: "تجميع آلي لإقرارات ضريبة القيمة المضافة الإقليمية", fr: "Compilateur de Déclarations de TVA Régionale", zh: "自动汇算清缴增值税及地区税务申报控制台", ur: "خودکار علاقائی VAT ریٹرن کمپائلیشن" },
    { img: "assets/VAT_Reports.png", category: "reports", en: "Audit History Log of Verified Tax Filings", ar: "سجل تاريخ التدقيق للملفات الضريبية المعتمدة", fr: "Historique d'Audit des Déclarations de Taxe", zh: "税务局申报回执与历史缴税审计日志记录册", ur: "آڈٹ ہسٹری لاگ آف ٹیکس فائلنگ" },
    { img: "assets/GCC.png", category: "reports", en: "GCC Custom Regional Regulatory Settings", ar: "إعدادات اللوائح الإقليمية المخصصة لدول الخليج", fr: "Paramètres Réglementaires pour la Zone GCC", zh: "海湾阿拉伯国家合作委员会 (GCC) 地区定制化税规设定", ur: "علاقائی ریگولیٹری ترتیبات" },
    { img: "assets/Manufacturing.png", category: "reports", en: "BOM Assembly Work Order Operations Console", ar: "لوحة عمليات أوامر تشغيل تجميع المواد BOM", fr: "Console des Bons de Travail d'Assemblage (Nomenclature)", zh: "物料清单 (BOM) 装配与车间生产工单排产控制台", ur: "اسمبلی ورک آرڈر آپریشنز کنسول" },
    { img: "assets/Intro.png", category: "reports", en: "Platform Setup Onboarding Wizard Screen", ar: "شاشة معالج تهيئة وإعداد المنصة للعملاء الجدد", fr: "Écran de l'Assistant d'Onboarding et Config", zh: "新企业客户系统初始化向导及配置终端", ur: "پلیٹ فارم سیٹ اپ اسکرین" },
    { img: "assets/chat.png", category: "ai", en: "Real-time Team Conversation Audit Ledger", ar: "سجل محادثات الفريق والتدقيق في الوقت الفعلي", fr: "Registre d'Audit et Discuter d'Équipe en Direct", zh: "实时团队沟通记录与凭证行批注审计账簿", ur: "ریئل ٹائم ٹیم چیٹ آڈٹ لیجر" }
  ],
  pricing: {
    en: [
      [
        "AI Financial Assistant Suite",
        "All-in-one AI finance and business management platform",
        "$35", "/Per month", "Get Started", true,
        [
          "🤖 <b>AI CFO Assistant</b> – Real-time dashboards, AI analytics, forecasting & decision support",
          "📒 <b>Core Accounting</b> – GL, COA, JE, TB & financial reporting",
          "🏢 <b>Business Operations</b> – Sales, AR/AP, customers, vendors & banking",
          "📦 <b>Enterprise Management</b> – Inventory, manufacturing, payroll, HR & employee chat",
          "🧾 <b>Tax & Audit</b> – VAT, Corporate Tax, audit trail & compliance",
          "⚙️ <b>AI Automation</b> – Smart bookkeeping, reporting, alerts & workflow automation"
        ]
      ],
      [
        "Growth Business Intelligence Plan - 3 users",
        "AI business plan for growing companies covering acct, fin, ops, tax, analytics, automation, and AI insights for better control and decisions. <em>(Best for Small Businesses)</em>",
        "$120", "/per month", "Get Started", false,
        [
          "🧠 Smart Assistant | Voice • Text • Files • Multi-lang",
          "📥 Input | Manual • AI Bot • File Upload",
          "📊 Fin | Accounting • Basic Reports • Web/PDF Export",
          "📈 Ops | Sales • Purchases • AR/AP • Cash Flow",
          "📦 Inv | Stock Mgmt",
          "📄 Tax | VAT • E-Invoicing • GCC Corp Tax • Reporting",
          "🔍 Audit | Basic Trail & Review",
          "🏢 Projects | Basic Tracking & Tasks",
          "💬 Collab | Chat • Tasks • Messages",
          "🔔 Ctrl | Alerts • Reminders • Approvals",
          "📊 Insights | Dashboards • KPIs • Basic Forecasting",
          "⚙️ Auto | Smart Workflows",
          "📊 Exec View | dashboards • forecast •"
        ]
      ],
      [
        "Enterprise Intelligence Suite - 5 users",
        "AI-driven enterprise suite covering acct, fin, ops, HR, tax, audit, analytics, and automation with real-time insights for full business control and strategic decisions. <em>(Best for Growing Companies)</em>",
        "$180", "/per month", "Get Started", false,
        [
          "🧠 Decision Engine | AI insights • recs • decisions",
          "🎙️ Smart Input | Multi-lang • voice • text • files",
          "📥 Input | manual • AI bot • files • auto",
          "📊 Fin | advanced analysis • reports • web/PDF",
          "📈 Ops | cashflow • sales perf • business ctrl",
          "📦 Assets | inv • asset mgmt • tracking",
          "👥 HR | workforce • payroll • lifecycle",
          "📄 Tax & Compliance | GCC VAT • corp tax • reporting",
          "🔍 Audit | full trail • evidence • findings",
          "🏢 Projects | planning • cost • resources",
          "💬 Workspace | chat • approvals • collab",
          "🔔 Ops Center | alerts • follow-ups • monitoring",
          "⚙️ Auto | workflow engine • rules •"
        ]
      ],
      [
        "Custom Intelligence Suite",
        "A flexible AI business plan built to match your needs. Choose modules across acct, fin, ops, HR, tax, audit, analytics, and automation with AI assistance and real-time control. <em>(Best for Enterprises)</em>",
        "$ASK", "/as request", "Get Started", true,
        [
          "🧩 Modular system – choose what you need",
          "🧠 AI assistant included",
          "📊 Real-time reporting & analytics",
          "⚙️ Smart automation & workflows",
          "🔐 Full control & scalability",
          "🏢 Built for any industry"
        ]
      ]
    ],
    ar: [
      [
        "باقة المساعد المالي الذكي",
        "منصة متكاملة للذكاء الاصطناعي المالي وإدارة الأعمال",
        "35$", "/شهرياً", "ابدأ الآن", true,
        [
          "🤖 <b>المدير المالي الذكي</b> – لوحات تحكم فورية، تحليلات، توقعات ودعم القرار",
          "📒 <b>المحاسبة الأساسية</b> – دفتر أستاذ، دليل حسابات، قيود، ميزان مراجعة وتقارير",
          "🏢 <b>عمليات الأعمال</b> – مبيعات، حسابات، عملاء، موردون ومصرفية",
          "📦 <b>الإدارة المؤسسية</b> – مخزون، تصنيع، رواتب، موارد بشرية ودردشة الموظفين",
          "🧾 <b>الضرائب والتدقيق</b> – ضريبة القيمة المضافة، ضريبة الشركات، مسار تدقيق والامتثال",
          "⚙️ <b>الأتمتة بالذكاء الاصطناعي</b> – محاسبة ذكية، تقارير، تنبيهات وأتمتة سير العمل"
        ]
      ],
      [
        "خطة الذكاء التجاري للنمو - 3 مستخدمين",
        "خطة أعمال ذكية للشركات المتنامية تشمل المحاسبة والعمليات والضرائب والتحليلات والأتمتة ورؤى الذكاء الاصطناعي لتحكم وقرارات أفضل. <em>(الأفضل للشركات الصغيرة)</em>",
        "120$", "/شهرياً", "ابدأ الآن", false,
        [
          "🧠 المساعد الذكي | صوت • نص • ملفات • متعدد اللغات",
          "📥 الإدخال | يدوي • روبوت ذكي • رفع ملفات",
          "📊 المالية | محاسبة • تقارير أساسية • تصدير PDF/ويب",
          "📈 العمليات | مبيعات • مشتريات • ذمم • تدفق نقدي",
          "📦 المخزن | إدارة المخزون",
          "📄 الضرائب | ضريبة القيمة المضافة • الفوترة الإلكترونية • ضريبة الشركات • تقارير",
          "🔍 التدقيق | مسار أساسي ومراجعة",
          "🏢 المشاريع | تتبع أساسي ومهام",
          "💬 التعاون | دردشة • مهام • رسائل",
          "🔔 التحكم | تنبيهات • تذكيرات • موافقات",
          "📊 الرؤى | لوحات تحكم • مؤشرات أداء • توقعات أساسية",
          "⚙️ الأتمتة | سير العمل الذكي",
          "📊 العرض التنفيذي | لوحات • توقعات"
        ]
      ],
      [
        "باقة الذكاء المؤسسي - 5 مستخدمين",
        "مجموعة مؤسسية مدعومة بالذكاء الاصطناعي تشمل المحاسبة والعمليات والموارد البشرية والضرائب والتدقيق والتحليلات والأتمتة مع رؤى في الوقت الفعلي لتحكم كامل وقرارات استراتيجية. <em>(الأفضل للشركات المتوسطة)</em>",
        "180$", "/شهرياً", "ابدأ الآن", false,
        [
          "🧠 محرك القرار | رؤى الذكاء الاصطناعي • التوصيات • القرارات",
          "🎙️ الإدخال الذكي | متعدد اللغات • صوت • نص • ملفات",
          "📥 الإدخال | يدوي • روبوت ذكي • ملفات • تلقائي",
          "📊 المالية | تحليل متقدم • تقارير • ويب/PDF",
          "📈 العمليات | تدفق نقدي • أداء المبيعات • تحكم الأعمال",
          "📦 الأصول | مخزون • إدارة الأصول • تتبع",
          "👥 الموارد البشرية | القوى العاملة • رواتب • دورة حياة الموظف",
          "📄 الضرائب والالتزام | ضريبة القيمة المضافة • ضريبة الشركات • تقارير",
          "🔍 التدقيق | مسار كامل • أدلة • نتائج",
          "🏢 المشاريع | تخطيط • تكلفة • موارد",
          "💬 مساحة العمل | دردشة • موافقات • تعاون",
          "🔔 مركز العمليات | تنبيهات • متابعة • مراقبة",
          "⚙️ الأتمتة | محرك سير العمل • قواعد"
        ]
      ],
      [
        "باقة الذكاء المخصصة",
        "خطة عمل مرنة مدعومة بالذكاء الاصطناعي مصممة لتلبية احتياجاتك. اختر الوحدات التي تفضلها في المحاسبة والعمليات والموارد والضرائب والتدقيق مع تحكم فوري. <em>(الأفضل للشركات الكبرى)</em>",
        "طلب سعر", "/حسب الطلب", "ابدأ الآن", true,
        [
          "🧩 نظام معياري – اختر ما تحتاج إليه فقط",
          "🧠 مساعد ذكاء اصطناعي متضمن",
          "📊 تقارير وتحليلات فورية",
          "⚙️ أتمتة ذكية ومسارات عمل مؤتمتة",
          "🔐 تحكم كامل وقابلية غير محدودة للتوسع",
          "🏢 مصمم خصيصاً لأي قطاع أعمال"
        ]
      ]
    ],
    fr: [
      [
        "Portail Assistant Financier IA",
        "Plateforme tout-en-un de gestion financière et commerciale IA",
        "35 €", "/mois", "Commencer", true,
        [
          "🤖 <b>CFO IA</b> – Tableaux de bord en temps réel, analyses, prévisions & aide à la décision",
          "📒 <b>Comptabilité de Base</b> – GL, COA, JE, TB & reporting financier",
          "🏢 <b>Opérations Commerciales</b> – Ventes, AR/AP, clients, fournisseurs & banque",
          "📦 <b>Gestion d'Entreprise</b> – Inventaire, fabrication, paie, RH & chat d'équipe",
          "🧾 <b>Impôts & Audit</b> – TVA, impôt sur les sociétés, piste d'audit & conformité",
          "⚙️ <b>Automatisation IA</b> – Tenue de livres intelligente, alertes & flux de travail"
        ]
      ],
      [
        "Plan de Croissance Business Intelligence - 3 utilisateurs",
        "Plan d'affaires IA pour les entreprises en croissance couvrant la comptabilité, les finances, les opérations, la fiscalité, les analyses, l'automatisation et les informations IA pour un meilleur contrôle et de meilleures décisions. <em>(Idéal pour les petites entreprises)</em>",
        "120 €", "/mois", "Commencer", false,
        [
          "🧠 Assistant Intelligent | Voix • Texte • Fichiers • Multilingue",
          "📥 Saisie | Manuel • Robot IA • Téléchargement de fichiers",
          "📊 Fin | Comptabilité • Rapports de base • Export Web/PDF",
          "📈 Ops | Ventes • Achats • AR/AP • Flux de trésorerie",
          "📦 Inv | Gestion des stocks",
          "📄 Taxe | TVA • Facturation électronique • Impôt sur les sociétés",
          "🔍 Audit | Piste de base & examen",
          "🏢 Projets | Suivi de base & tâches",
          "💬 Collab | Chat • Tâches • Messages",
          "🔔 Ctrl | Alertes • Rappels • Approbations",
          "📊 Analyses | Tableaux de bord • KPI • Prévisions de base",
          "⚙️ Auto | Flux de travail intelligents",
          "📊 Vue Exécutive | tableaux de bord • prévisions"
        ]
      ],
      [
        "Suite d'Intelligence Entreprise - 5 utilisateurs",
        "Suite d'entreprise basée sur l'IA couvrant la comptabilité, les finances, les opérations, les RH, la fiscalité, l'audit, les analyses et l'automatisation avec des informations en temps réel pour un contrôle total de l'activité et des décisions stratégiques. <em>(Idéal pour les entreprises en croissance)</em>",
        "180 €", "/mois", "Commencer", false,
        [
          "🧠 Moteur de Décision | Analyses IA • recs • décisions",
          "🎙️ Saisie Intelligente | Multi-langue • voix • texte • fichiers",
          "📥 Saisie | manuel • robot IA • fichiers • auto",
          "📊 Fin | analyse avancée • rapports • web/PDF",
          "📈 Ops | trésorerie • perf des ventes • contrôle d'activité",
          "📦 Actifs | inventaire • gestion d'actifs • suivi",
          "👥 RH | effectifs • paie • cycle de vie",
          "📄 Taxes & Conformité | TVA GCC • impôt sur les sociétés • rapports",
          "🔍 Audit | piste complète • preuves • conclusions",
          "🏢 Projets | planification • coût • ressources",
          "💬 Espace de travail | chat • approbations • collab",
          "🔔 Centre d'Opérations | alertes • suivis • surveillance",
          "⚙️ Auto | moteur de flux de travail • règles"
        ]
      ],
      [
        "Suite d'Intelligence Personnalisée",
        "Un plan d'affaires IA flexible conçu pour répondre à vos besoins. Choisissez vos modules: compta, finance, opérations, RH, taxes, audit, analyses et automatisation avec contrôle en temps réel. <em>(Idéal pour les entreprises)</em>",
        "Sur devis", "/à la demande", "Commencer", true,
        [
          "🧩 Système modulaire – choisissez ce dont vous avez besoin",
          "🧠 Assistant IA inclus",
          "📊 Rapports & analyses en temps réel",
          "⚙️ Automatisation intelligente & flux",
          "🔐 Contrôle total & évolutivité",
          "🏢 Conçu pour tous les secteurs"
        ]
      ]
    ],
    zh: [
      [
        "智能财务助手套件",
        "一体化 AI 财务与商业管理智能平台",
        "¥249", "/月", "开始体验", true,
        [
          "🤖 <b>AI CFO 助手</b> – 实时仪表盘、智能分析、预测与决策支持",
          "📒 <b>核心会计</b> – 总账、会计科目表、日记账、试算表与财务报告",
          "🏢 <b>业务运营</b> – 销售、应收/应付、客户、供应商与银行对账",
          "📦 <b>企业管理</b> – 库存、制造、工资发放、人力资源与员工聊天",
          "🧾 <b>税务与审计</b> – 增值税、企业所得税、审计追踪与合规",
          "⚙️ <b>AI 自动化</b> – 智能记账、报告、警报与工作流自动化"
        ]
      ],
      [
        "成长型商业智能计划 - 3 用户",
        "适合成长型企业的 AI 商业计划，涵盖会计、财务、运营、税务、分析、自动化和 AI 洞察，助您实现更佳掌控与决策。<em>（适合小企业）</em>",
        "¥840", "/月", "开始体验", false,
        [
          "🧠 智能助手 | 语音 • 文本 • 文件 • 多语言支持",
          "📥 数据录入 | 手动 • AI 机器人 • 文件上传",
          "📊 财务计账 | 记账 • 基础报告 • 网页/PDF导出",
          "📈 业务运营 | 销售 • 采购 • 应收/应付 • 现金流",
          "📦 库存管理 | 基础库存管家",
          "📄 税务合规 | 增值税 • 电子发票 • 企业所得税 • 税报",
          "🔍 基础审计 | 基础审计链条与审阅",
          "🏢 项目管理 | 基础项目跟踪与任务派发",
          "💬 团队协同 | 沟通聊天 • 任务安排 • 消息通知",
          "🔔 控制中心 | 业务警报 • 自动提醒 • 审批流",
          "📊 智能洞察 | 仪表盘 • 核心 KPI • 基础财务预测",
          "⚙️ 智能流转 | 自动化智能工作流",
          "📊 决策视图 | 主管决策仪表盘 • 预测"
        ]
      ],
      [
        "企业级智能套件 - 5 用户",
        "由 AI 驱动的企业级套件，涵盖会计、财务、运营、人力资源、税务、审计、分析和自动化，提供实时洞察，实现全面的业务控制和战略决策。<em>（适合成长型公司）</em>",
        "¥1260", "/月", "开始体验", false,
        [
          "🧠 决策大脑 | AI 业务洞察 • 智能建议 • 自动决策决策",
          "🎙️ 智能采集录入 | 多语言支持 • 语音识别 • 文本识别 • 文件导入",
          "📥 输入方式 | 手动录入 • AI 智能助理 • 文件自动提取 • 系统自动流转",
          "📊 深度财务分析 | 财务高级分析建模 • 自动报告输出 • 网页/PDF导出",
          "📈 业务经营掌控 | 现金流实时跟踪 • 销售业绩审计 • 全面经营风控",
          "📦 资产库存管理 | 多仓库库存管理 • 资产配置与管理 • 实时流向跟踪",
          "👥 企业人力资源 | 员工花名册管理 • 工资表自动核发 • 员工生命周期管理",
          "📄 税务与合规 | 增值税自动计算 • 企业所得税自动核对 • 一键税报生成",
          "🔍 深度合规审计 | 完整系统变动日志 • 凭证链条追踪 • 审计事实 findings",
          "🏢 高级项目管理 | 项目周期规划 • 项目成本精细化核算 • 团队资源分配",
          "💬 协同办公空间 | 内置即时通信 • 多级审批协作 • 任务多人协同",
          "🔔 智能运营中心 | 业务警报 • 任务跟踪催办 • 24小时监控系统",
          "⚙️ 自动化引擎 | 业务流转引擎配置 • 规则自定义"
        ]
      ],
      [
        "专属定制智能套件",
        "根据您的个性化需求灵活定制的 AI 商业计划。自由选择会计、财务、运营、人力、税务、审计、分析和自动化模块，配以 AI 协同及实时管控。<em>（最适合大型企业）</em>",
        "点此询价", "/根据需求", "开始体验", true,
        [
          "🧩 乐高式模块化系统 – 自由定制选择所需模块",
          "🧠 配套赠送独家定制的 AI 智能副驾驶助理",
          "📊 支持实时报表生成与高级商业智能分析分析",
          "⚙️ 全链路工作流审批流智能流转与自动化",
          "🔐 极高的数据自主控制权与系统无限弹性扩展",
          "🏢 广泛适用于各个细分行业，支持跨国架构"
        ]
      ]
    ],
    ur: [
      [
        "حساباتی مالیاتی اسسٹنٹ پیکیج",
        "آل ان ون AI فنانس اور بزنس مینجمنٹ پلیٹ فارم",
        "35$", "/فی مہینہ", "شروع کریں", true,
        [
          "🤖 <b>AI CFO اسسٹنٹ</b> – ریئل ٹائم ڈیش بورڈز، AI تجزیات، پیشین گوئی اور فیصلے کا تعاون",
          "📒 <b>بنیادی اکاؤنٹنگ</b> – GL، COA، JE، TB اور مالیاتی رپورٹنگ",
          "🏢 <b>کاروباری آپریشنز</b> – سیلز، AR/AP، صارفین، وینڈرز اور بینکنگ",
          "📦 <b>انٹرپرائز مینجمنٹ</b> – انوینٹری، مینوفیکچرنگ، پے رول، HR اور ملازمین کی چیٹ",
          "🧾 <b>ٹیکس اور آڈٹ</b> – VAT، کارپوریٹ ٹیکس، آڈٹ ٹریل اور تعمیل",
          "⚙️ <b>AI آٹومیشن</b> – اسمارٹ بک کیپنگ، رپورٹنگ، الرٹس اور ورک فلو آٹومیشن"
        ]
      ],
      [
        "گروتھ بزنس انٹیلیجنس پلان - 3 صارفین",
        "بڑھتی ہوئی کمپنیوں کے لیے AI کاروباری منصوبہ جس میں بہتر کنٹرول اور فیصلوں کے لیے acct، fin، ops، ٹیکس، تجزیات، آٹومیشن، اور AI بصیرت شامل ہیں۔ <em>(چھوٹے کاروباروں کے لیے بہترین)</em>",
        "120$", "/فی مہینہ", "شروع کریں", false,
        [
          "🧠 اسمارٹ اسسٹنٹ | آواز • متن • فائلیں • کثیر لسانی",
          "📥 ان پٹ | دستی • AI بوٹ • فائل اپ لوڈ",
          "📊 فنانس | اکاؤنٹنگ • بنیادی رپورٹیں • ویب/پی ڈی ایف ایکسپورٹ",
          "📈 آپریشنز | سیلز • خریداری • AR/AP • کیش فلو",
          "📦 انوینٹری | اسٹاک مینجمنٹ",
          "📄 ٹیکس | VAT • ای انوائسنگ • GCC کارپوریٹ ٹیکس • رپورٹنگ",
          "🔍 آڈٹ | بنیادی ٹریل اور جائزہ",
          "🏢 پروجیکٹس | بنیادی ٹریکنگ اور ٹاسکس",
          "💬 تعاون | چیٹ • ٹاسکس • پیغامات",
          "🔔 کنٹرول | الرٹس • یاد دہانیاں • الموافقات",
          "📊 بصیرتیں | ڈیش بورڈز • KPIs • بنیادی پیشین گوئی",
          "⚙️ آٹو | اسمارٹ ورک فلوز",
          "📊 ایگزیکٹو ویو | ڈیش بورڈز • پیشین گوئی"
        ]
      ],
      [
        "انٹرپرائز انٹیلیجنس سوٹ - 5 صارفین",
        "AI سے چلنے والا انٹرپرائز سوٹ جس میں مکمل کاروباری کنٹرول اور حکمت عملی کے فیصلوں کے لیے acct، fin، ops، HR، ٹیکس، آڈٹ، تجزیات، اور حقیقی وقت کی بصیرت کے ساتھ آٹومیشن شامل ہے۔ <em>(بڑھتی ہوئی کمپنیوں کے لیے بہترین)</em>",
        "180$", "/فی مہینہ", "شروع کریں", false,
        [
          "🧠 فیصلے کا انجن | AI بصیرتیں • سفارشات • فیصلے",
          "🎙️ اسمارٹ ان پٹ | کثیر لسانی • آواز • متن • فائلیں",
          "📥 ان پٹ | دستی • AI بوٹ • فائلیں • خودکار",
          "📊 فنانس | جدید تجزیہ • رپورٹیں • ویب/پی ڈی ایف",
          "📈 آپریشنز | کیش فلو • سیلز کی کارکردگی • کاروباری کنٹرول",
          "📦 اثاثے | انوینٹری • اثاثہ جات کا انتظام • ٹریکنگ",
          "👥 HR | افرادی قوت • پے رول • لائف سائیکل",
          "📄 ٹیکس اور تعمیل | GCC VAT • کارپوریٹ ٹیکس • رپورٹنگ",
          "🔍 آڈٹ | مکمل ٹریل • شواہد • نتائج",
          "🏢 پروجیکٹس | منصوبہ بندی • لاگت • وسائل",
          "💬 ورک اسپیس | چیٹ • الموافقات • تعاون",
          "🔔 آپریشنز سینٹر | الرٹس • فالو اپس • نگرانی",
          "⚙️ آٹو | ورک فلو انجن • قوانین"
        ]
      ],
      [
        "حسب ضرورت انٹیلیجنس سوٹ",
        "ایک لچکدار AI کاروباری منصوبہ جو آپ کی ضروریات کے مطابق بنایا گیا ہے۔ ریئل ٹائم کنٹرول کے ساتھ acct، fin، ops، HR، ٹیکس، آڈٹ، تجزیات، اور آٹومیشن کے ماڈیولز منتخب کریں۔ <em>(انٹرپرائزز کے لیے بہترین)</em>",
        "طلب قیمت", "/درخواست پر", "شروع کریں", true,
        [
          "🧩 ماڈیولر سسٹم – اپنی ضرورت کا انتخاب کریں",
          "🧠 AI اسسٹنٹ شامل ہے",
          "📊 ریئل ٹائم رپورٹنگ اور تجزیات",
          "⚙️ اسمارٹ آٹومیشن اور ورک فلوز",
          "🔐 مکمل کنٹرول اور اسکیل ایبلٹی",
          "🏢 کسی بھی صنعت کے لیے"
        ]
      ]
    ]
  },
  testimonials: {
    en: [
      ["★★★★★", "“The AI CFO is like having a full-time financial advisor. It caught a billing error that saved us $23,000.”", "BM", "Bakht Mohammad", "CEO, Sadat Dinar Khil Group"],
      ["★★★★★", "“We replaced QuickBooks and three other tools. Hiesabati AI does everything in one place with better insights.”", "QA", "Qahir Ahmadi", "Founder, Qahir Production Co."],
      ["★★★★★", "“The cash flow forecasting is incredibly accurate. We now plan 6 months ahead with confidence.”", "NQ", "Nadim Quraishi", "CFO, Quraishi Group"]
    ],
    ar: [
      ["★★★★★", "«المدير المالي الذكي أشبه بمستشار مالي دائم وموجود على مدار الساعة. اكتشف خطأً في الفوترة وفّر علينا 23,000 دولار.»", "BM", "بخت محمد", "الرئيس التنفيذي، مجموعة سادات دينار خيل"],
      ["★★★★★", "«استبدلنا QuickBooks وثلاث أدوات أخرى مشتتة. حسابتي الذكي يقوم بكل شيء في منصة واحدة برؤى أفضل.»", "QA", "قاهر أحمدي", "مؤسس شركة قاهر للإنتاج الفني"],
      ["★★★★★", "«تنبؤات التدفقات النقدية دقيقة بشكل مذهل. أصبحنا نخطط لستة أشهر مقبلاً بكل ثقة ورقابة.»", "NQ", "نديم قريشي", "المدير المالي، مجموعة قريشي الاستثمارية"]
    ],
    fr: [
      ["★★★★★", "« Le CFO IA est comparable à un conseiller financier à temps plein. Il a repéré une erreur qui nous a évité 23 000 $ de pertes. »", "BM", "Bakht Mohammad", "Directeur Général, Sadat Dinar Khil Group"],
      ["★★★★★", "« Nous avons remplacé QuickBooks et trois autres outils. Hiesabati AI rassemble tout au même endroit avec de meilleures analyses. »", "QA", "Qahir Ahmadi", "Fondateur, Qahir Production Co."],
      ["★★★★★", "« Les prévisions de trésorerie sont d'une justesse incroyable. Nous planifions à 6 mois en toute confiance. »", "NQ", "Nadim Quraishi", "Directeur Financier, Quraishi Group"]
    ],
    zh: [
      ["★★★★★", "“使用 AI CFO 就像拥有一位全职财务顾问。它及时捕捉到一处计费错误，帮我们挽回了 23,000 美元的损失。”", "BM", "Bakht Mohammad", "首席执行官, Sadat Dinar Khil 集团"],
      ["★★★★★", "“我们用它替代了 QuickBooks 及另外三个工具。Hiesabati AI 在一个平台处理了所有账务并提供了更好的洞察。”", "QA", "Qahir Ahmadi", "创始人, Qahir 影视制作公司"],
      ["★★★★★", "“现金流预测惊人地准确。我们现在可以非常自信地规划未来 6 个月的商业计划。”", "NQ", "Nadim Quraishi", "首席财务官, Quraishi 集团"]
    ],
    ur: [
      ["★★★★★", "“AI سی ایف او کا ہونا ہر وقت فنانشل ایڈوائزر کی موجودگی جیسا ہے۔ اس نے بلنگ کی غلطی پکڑی جس سے ہمارے 23,000 ڈالر بچ گئے۔”", "BM", "بخت محمد", "سی ای او، سادات دینار خیل گروپ"],
      ["★★★★★", "“ہم نے QuickBooks اور دیگر تین ٹولز کو بدلا۔ حساباتی تمام کام ایک ہی جگہ بہتر نتائج کے ساتھ کرتا ہے۔”", "QA", "قاہر احمدی", "بانی، قاہر پروڈکشن کمپنی"],
      ["★★★★★", "“کیش فلو کی پیش گوئی حیرت انگیز طور پر درست ہے۔ اب ہم 6 ماہ آگے کی منصوبہ بندی اعتماد کے ساتھ کرتے ہیں۔”", "NQ", "ندیم قریشی", "سی ایف او، قریشی گروپ"]
    ]
  },
  aboutList: {
    en: ["Founded to empower enterprises with institutional-grade AI forecasting", "Active in UAE and regional GCC custom compliance environments", "Protected by bank-level end-to-end data encryption keys", "Supporting multi-market operation under one parent entity"],
    ar: ["تأسست لتمكين المؤسسات من التنبؤ بالذكاء الاصطناعي على مستوى مؤسسي", "نشط في بيئات الامتثال المخصصة في دولة الإمارات ودول مجلس التعاون الخليجي", "محمي بمفاتيح تشفير بيانات شاملة بمستوى أمان البنوك", "يدعم العمليات متعددة الأسواق تحت مظلة كيان أم واحد"],
    fr: ["Créé pour doter les entreprises de prévisions financières par IA", "Actif dans l'environnement réglementaire des Émirats et du GCC", "Sécurisé par des clés de chiffrement de données de niveau bancaire", "Gestion de filiales multi-marchés sous une entité consolidée"],
    zh: ["致力于为企业提供机构级的人工智能财务前瞻性预测", "深入适配阿联酋及海湾阿拉伯国家合作委员会 (GCC) 特有税规", "采用银行级端到端加密钥匙系统保护客户核心商业隐私", "支持单一母公司实体下管理多国多市场跨国业务的运营"],
    ur: ["کاروباری اداروں کو ادارہ جاتی درجے کی AI پیش گوئی فراہم کرنے کے لیے قائم کیا گیا", "متحدہ عرب امارات اور علاقائی تعمیل کے ماحول میں فعال", "بینک کی سطح کے اختتام سے آخر تک ڈیٹا انکرپشن کے تحت محفوظ", "ایک بنیادی ادارے کے تحت کثیر مارکیٹ آپریشنز کی حمایت"]
  },
  chatSim: {
    en: [
      ["Run capital audit", "What was our net margin last month?", "According to your active corporate ledger, the net margin for last month finalized at **28.4%** (Gross Revenue: **$148,200**, Operating Costs: **$106,110**). I have flagged a **$4,200** tax depreciation adjustment that was omitted. Click here to post balancing ledger entry."],
      ["Audit compliance", "Is there any active tax compliance risk?", "I scanned all recent journal entries. All Q2 GCC VAT returns are compiled. However, I identified **3 active vendors** who have missing or unverified Tax Registration Numbers (TRN). This presents an audit exposure of **$8,500**. I have queued automated requests to these suppliers to submit documents."],
      ["Forecast runway", "What is the projected cash runway?", "Based on your 18-day average collections cycle and a 15% reduction in inventory variance, I project your cash balance by end of Q3 to reach **$312,500** (+12.4% QoQ). Your cash runway remains highly secure at **14.2 months** at current burn rates."]
    ],
    ar: [
      ["تشغيل تدقيق الأرباح", "ما هو هامش صافي أرباحنا للشهر الماضي؟", "وفقًا لدفتر أستاذ شركتك النشط، استقر هامش صافي الربح للشهر الماضي عند **28.4%** (إجمالي الإيرادات: **148,200 دولار**، تكاليف التشغيل: **106,110 دولار**). لقد رصدت تسوية إهلاك ضريبي بقيمة **4,200 دولار** تم إغفالها. انقر هنا لترحيل القيد الموازن."],
      ["تدقيق الامتثال الضريبي", "هل هناك أي مخاطر نشطة تتعلق بالامتثال الضريبي؟", "لقد قمت بفحص جميع القيود اليومية الأخيرة. إقرارات ضريبة القيمة المضافة لدول الخليج للربع الثاني مكتملة. ومع ذلك، حددت **3 موردين نشطين** تنقصهم أرقام تسجيل ضريبي (TRN) غير موثقة. يشكل هذا تعرضًا تدقيقيًا بقيمة **8,500 دولار**. لقد أرسلت طلبات تلقائية لهؤلاء الموردين لتقديم المستندات."],
      ["توقع التدفق المالي", "ما هو التدفق المالي النقدي المتوقع للشركة؟", "استنادًا إلى متوسط دورة التحصيل البالغة 18 يومًا وتقليل فروق المخزون بنسبة 15%، أتوقع أن يصل رصيدك النقدي بحلول نهاية الربع الثالث إلى **312,500 دولار** (+12.4% ربع سنوي). لا يزال التدفق النقدي آمناً للغاية ويكفي لـ **14.2 شهراً** بمعدل الصرف الحالي."]
    ],
    fr: [
      ["Audit des marges", "Quel était notre marge nette le mois dernier ?", "Selon votre grand livre d'entreprise, la marge nette du mois dernier s'est élevée à **28.4%** (Revenu Brut: **148 200 $**, Coûts Opérationnels: **106 110 $**). J'ai détecté un ajustement d'amortissement fiscal de **4 200 $** omis. Cliquez ici pour ajuster le grand livre."],
      ["Vérifier la fiscalité", "Existe-t-il un risque fiscal actif ?", "J'ai analysé les écritures de journal récentes. Les déclarations de TVA de la zone GCC pour le T2 sont compilées. Cependant, j'ai identifié **3 fournisseurs actifs** sans numéro de TVA (TRN) validé. Cela représente un risque d'audit de **8 500 $**. J'ai envoyé des relances automatiques."],
      ["Prévision de trésorerie", "Quelle est la projection de notre réserve financière ?", "Sur la base d'un cycle de recouvrement de 18 jours et d'une baisse des écarts de stock de 15%, je projette un solde de trésorerie de **312 500 $** à la fin du T3 (+12.4%). Votre réserve financière reste robuste à **14.2 mois** au rythme de dépenses actuel."]
    ],
    zh: [
      ["运行利润率审计", "上个月的净利润率是多少？", "根据您的实时企业账簿，上个月的净利润率最终为 **28.4%**（总营业收入：**$148,200**，运营成本：**$106,110**）。我检测到一笔被遗漏的 **$4,200** 税务折旧调整项。点击此处可自动生成平衡记账分录。"],
      ["审计合规风险", "目前是否存在税务合规风险？", "我扫描了最近所有的日记账分录。第二季度海湾地区增值税申报表已全部编制完成。但是，我发现有 **3 家活跃供应商** 缺少或未验证税号 (TRN)。这带来了约 **$8,500** 的审计风险漏洞。我已向这些供应商发送自动通知，要求其补交单据。"],
      ["预测现金跑道", "预计现金流的安全周期是多少？", "基于您目前 18 天的平均应收账款回款周期，以及库存盘偏差削减 15% 的假设，我预测到第三季度末您的现金余额将达到 **$312,500**（环比增长 12.4%）。按当前的资金消耗率，您的现金跑道处于非常安全的 **14.2 个月** 周期。"]
    ],
    ur: [
      ["منافع آڈٹ چلائیں", "پچھلے مہینے ہمارا خالص مارجن کیا تھا؟", "آپ کے فعال کارپوریٹ کھاتہ کے مطابق، پچھلے مہینے کا خالص مارجن **28.4%** رہا (مجموعی آمدنی: **148,200$**، آپریٹنگ اخراجات: **106,110$**)۔ میں نے **4,200$** کی ٹیکس کٹوتی کی غلطی پکڑی ہے جو شامل نہیں تھی۔ بیلنس کرنے کے لیے یہاں کلک کریں۔"],
      ["ٹیکس تعمیل آڈٹ", "کیا کوئی فعال ٹیکس تعمیلی خطرہ ہے؟", "میں نے تمام حالیہ روزنامچہ اندراجات اسکین کیے۔ دوسری سہ ماہی کے تمام VAT گوشوارے مرتب ہو چکے ہیں۔ البتہ، میں نے ایسے **3 سپلائرز** کی نشاندہی کی ہے جن کا ٹیکس نمبر (TRN) درج نہیں ہے۔ یہ **8,500$** کے آڈٹ خطرے کا باعث ہے۔ میں نے ان کو دستاویزات جمع کرانے کا خودکار الرٹ بھیج دیا ہے۔"],
      ["کیش رن وے کی پیش گوئی", "پیش گوئی کے مطابق کیش رن وے کیا ہے؟", "آپ کے 18 روزہ اوسط ریکوری سائیکل اور انوینٹری میں 15 فیصد کمی کی بنیاد پر، میں پیش گوئی کرتا ہوں کہ تیسری سہ ماہی کے اختتام تک آپ کا کیش بیلنس **312,500$** (+12.4% سہ ماہی) تک پہنچ جائے گا۔ موجودہ اخراجات پر آپ کا کیش رن وے **14.2 مہینوں** کے ساتھ محفوظ ہے۔"]
    ]
  },
  finChecklist: {
    en: ["Automated multi-currency journal entries", "Real-time trial balance generation", "Depreciation schedule management", "Period-end closing automation"],
    ar: ["إدخالات يومية متعددة العملات تلقائياً", "إنشاء ميزان المراجعة في الوقت الفعلي", "إدارة جداول الإهلاك", "أتمتة إقفال نهاية الفترة"],
    fr: ["Écritures comptables multidevises automatisées", "Balance de vérification en temps réel", "Gestion des tableaux d'amortissement", "Clôture de période automatisée"],
    zh: ["自动化多币种日记账分录", "实时试算平衡表生成", "折旧计划表管理", "会计期间自动结账"],
    ur: ["خودکار ملٹی کرنسی جرنل اندراجات", "ریئل ٹائم ٹرائل بیلنس جنریشن", "فرسودگی شیڈول مینجمنٹ", "مدت کے اختتام پر خودکار بندش"]
  },
  hrChecklist: {
    en: ["Central employee profile repository", "Performance-linked payroll engine", "Shift scheduling & attendance tracking", "Departmental cost allocation reports"],
    ar: ["مستودع مركزي لملفات الموظفين", "محرك رواتب مرتبط بالأداء", "جدولة الورديات وتتبع الحضور", "تقارير تخصيص تكاليف الأقسام"],
    fr: ["Répertoire centralisé des employés", "Moteur de paie lié à la performance", "Planification des postes et suivi des présences", "Rapports d'allocation des coûts par département"],
    zh: ["中央员工档案库", "绩效挂钩薪资引擎", "排班与考勤追踪", "部门成本分摊报告"],
    ur: ["مرکزی ملازمین پروفائل ریپوزٹری", "کارکردگی سے منسلک پے رول انجن", "شفٹ شیڈولنگ اور حاضری ٹریکنگ", "محکمانہ لاگت الاٹمنٹ رپورٹس"]
  },
  hrMiniChecklist: {
    en: ["Automated onboarding workflows", "Leave management system", "Real-time workforce analytics"],
    ar: ["سير عمل تأهيل الموظفين الجدد تلقائياً", "نظام إدارة الإجازات", "تحليلات القوى العاملة اللحظية"],
    fr: ["Flux d'intégration automatisés", "Gestion des congés", "Analyse en temps réel de la main-d'œuvre"],
    zh: ["自动入职流程", "假期管理系统", "实时人力分析"],
    ur: ["خودکار آن بورڈنگ ورک فلوز", "چھٹی کا نظم و نسق", "ریئل ٹائم افرادی قوت تجزیات"]
  },
  taxCards: {
    en: [
      ["🧾", "Automated VAT Returns", "Pre-compiled VAT forms ready for one-click submission to regional tax authorities."],
      ["📋", "Corporate Tax Engine", "Calculate corporate tax liability with jurisdiction-specific rules and exemptions."],
      ["🔒", "Cryptographic Audit Trail", "Every transaction sealed with tamper-proof hash verification for legal compliance."],
      ["🌍", "GCC Regional Compliance", "Pre-configured rulesets for UAE, Saudi Arabia, Bahrain, Qatar, Oman, and Kuwait."]
    ],
    ar: [
      ["🧾", "إقرارات ضريبة القيمة المضافة التلقائية", "نماذج ضريبية مجمعة مسبقاً وجاهزة للتقديم بنقرة واحدة."],
      ["📋", "محرك ضريبة الشركات", "حساب الالتزامات الضريبية للشركات وفقاً للقواعد الإقليمية والاستثناءات."],
      ["🔒", "مسار تدقيق مشفر", "كل معاملة مختومة بتحقق تشفيري مقاوم للتلاعب."],
      ["🌍", "الامتثال الإقليمي الخليجي", "مجموعات قواعد مهيأة مسبقاً للإمارات والسعودية والبحرين وقطر وعمان والكويت."]
    ],
    fr: [
      ["🧾", "Déclarations TVA Automatisées", "Formulaires pré-compilés prêts pour soumission en un clic."],
      ["📋", "Moteur Fiscal Corporate", "Calculez l'impôt sur les sociétés selon les règles juridictionnelles."],
      ["🔒", "Trail d'Audit Cryptographique", "Chaque transaction scellée avec vérification de hash inviolable."],
      ["🌍", "Conformité Régionale GCC", "Règles préconfigurées pour les Émirats, l'Arabie Saoudite, le Bahreïn, le Qatar."]
    ],
    zh: [
      ["🧾", "自动增值税申报", "预编译的增值税表格，一键提交给各地区税务机关。"],
      ["📋", "企业所得税引擎", "根据各辖区特定规则和豁免计算企业所得税。"],
      ["🔒", "加密审计追踪", "每笔交易均加密签名，确保法律合规。"],
      ["🌍", "海湾地区合规", "预配置的阿联酋、沙特、巴林、卡塔尔、阿曼和科威特规则集。"]
    ],
    ur: [
      ["🧾", "خودکار VAT ریٹرن", "ٹیکس فارم پہلے سے تیار، ایک کلک میں جمع کروائیں۔"],
      ["📋", "کارپوریٹ ٹیکس انجن", "علاقائی قوانین کے مطابق ٹیکس ذمہ داری کا حساب لگائیں۔"],
      ["🔒", "کرپٹوگرافک آڈٹ ٹریل", "ہر لین دین ہیش تصدیق سے محفوظ۔"],
      ["🌍", "خلیجی علاقائی تعمیل", "امارات، سعودیہ، بحرین، قطر، عمان اور کویت کے لیے ترتیبات۔"]
    ]
  },
  autoSteps: {
    en: [
      ["1", "Define Trigger", "Set conditions: budget threshold, invoice receipt, calendar deadline, or custom event."],
      ["2", "Build Workflow", "Chain actions: approve, notify, escalate, post journal entry, or send to external API."],
      ["3", "Monitor & Audit", "Track every automated execution with full audit trail and exception reporting."]
    ],
    ar: [
      ["1", "تحديد المحفز", "ضع الشروط: حد الميزانية، استلام فاتورة، موعد نهائي، أو حدث مخصص."],
      ["2", "بناء سير العمل", "سلسلة الإجراءات: الموافقة، الإخطار، التصعيد، ترحيل القيد، أو الإرسال لواجهة خارجية."],
      ["3", "المراقبة والتدقيق", "تتبع كل تنفيذ آلي مع مسار تدقيق كامل وتقارير الاستثناءات."]
    ],
    fr: [
      ["1", "Définir le Déclencheur", "Conditions: seuil budgétaire, réception de facture, échéance ou événement personnalisé."],
      ["2", "Construire le Flux", "Actions: approuver, notifier, escalader, passer une écriture comptable ou appel API."],
      ["3", "Surveiller & Auditer", "Suivi de chaque exécution avec piste d'audit complète et rapport d'exceptions."]
    ],
    zh: [
      ["1", "定义触发条件", "设置条件：预算阈值、收到发票、日历截止日期或自定义事件。"],
      ["2", "构建工作流", "链式操作：审批、通知、升级、过账或发送至外部API。"],
      ["3", "监控与审计", "追踪每次自动执行的完整审计日志和异常报告。"]
    ],
    ur: [
      ["1", "ٹریگر مقرر کریں", "شرائط طے کریں: بجٹ حد، انوائس وصولی، کیلنڈر کی آخری تاریخ، یا حسب ضرورت۔"],
      ["2", "ورک فلو بنائیں", "منظوری، اطلاع، بڑھانا، جرنل اندراج، یا بیرونی API بھیجیں۔"],
      ["3", "نگرانی اور آڈٹ", "ہر خودکار عمل کو مکمل آڈٹ ٹریل کے ساتھ ٹریک کریں۔"]
    ]
  },
  commCards: {
    en: [
      ["💬", "Ledger-Linked Messaging", "Start conversations anchored to specific journal entries, invoices, or expense claims."],
      ["📎", "Document Scanner", "Upload receipts and contracts directly in chat — AI extracts key data automatically."],
      ["🤖", "Aria AI In-Chat", "Ask Aria financial questions right inside the conversation thread."],
      ["🔔", "Smart Notifications", "Get alerts for approvals, budget breaches, and compliance deadlines."]
    ],
    ar: [
      ["💬", "الرسائل المرتبطة بالحسابات", "ابدأ محادثات مرتبطة بقيود يومية أو فواتير أو مطالبات مصاريف محددة."],
      ["📎", "ماسح المستندات", "ارفع الإيصالات والعقود مباشرة في المحادثة — الذكاء الاصطناعي يستخرج البيانات تلقائياً."],
      ["🤖", "آريا داخل المحادثة", "اسأل آريا أي سؤال مالي مباشرة داخل سلسلة المحادثة."],
      ["🔔", "إشعارات ذكية", "تلقى تنبيهات للموافقات وتجاوزات الميزانية والمواعيد النهائية للامتثال."]
    ],
    fr: [
      ["💬", "Messagerie liée au Grand Livre", "Discussions ancrées aux écritures comptables, factures ou notes de frais."],
      ["📎", "Scanner de Documents", "Téléchargez reçus et contrats dans le chat — l'IA extrait les données automatiquement."],
      ["🤖", "Aria IA en Chat", "Posez des questions financières à Aria directement dans la conversation."],
      ["🔔", "Notifications Intelligentes", "Alertes pour les approbations, dépassements de budget et échéances de conformité."]
    ],
    zh: [
      ["💬", "账簿关联消息", "围绕特定日记账分录、发票或费用索赔发起对话。"],
      ["📎", "文档扫描仪", "在聊天中直接上传收据和合同——AI自动提取关键数据。"],
      ["🤖", "Aria AI 内嵌对话", "在对话线程中直接向Aria提问财务问题。"],
      ["🔔", "智能通知", "获取审批、预算超标和合规截止日的即时提醒。"]
    ],
    ur: [
      ["💬", "کھاتہ سے منسلک پیغام رسانی", "مخصوص جرنل اندراجات، انوائسز کے ارد گرد بات چیت شروع کریں۔"],
      ["📎", "دستاویز اسکینر", "رسیدیں اور معاہدے چیٹ میں اپ لوڈ کریں — AI خودکار ڈیٹا نکالتا ہے۔"],
      ["🤖", "Aria AI چیٹ میں", "گفتگو کے اندر Aria سے فنانشل سوالات پوچھیں۔"],
      ["🔔", "سمارٹ نوٹیفکیشنز", "منظوریوں، بجٹ خلاف ورزیوں اور تعمیل کی آخری تاریخوں کے الرٹس حاصل کریں۔"]
    ]
  },
  complianceMap: {
    gcc: {
      title: {
        en: "GCC Regional Compliance (UAE, Saudi Arabia)",
        ar: "الامتثال الإقليمي لدول الخليج (الإمارات، السعودية)",
        fr: "Conformité Régionale GCC (EAU, Arabie Saoudite)",
        zh: "海湾地区合规（阿联酋、沙特阿拉伯）",
        ur: "خلیجی علاقائی تعمیل (امارات، سعودی عرب)"
      },
      desc: {
        en: "Pre-configured local regulatory setups for VAT compiling, corporate tax calculations, WPS (Wage Protection System) exports, and localized invoice formats.",
        ar: "إعدادات تنظيمية محلية مهيأة مسبقاً لجمع ضريبة القيمة المضافة، وحسابات ضريبة الشركات، وصادرات نظام حماية الأجور (WPS)، وتنسيقات الفواتير المحلية.",
        fr: "Configurations réglementaires locales pré-configurées pour la compilation de la TVA, les calculs d'impôt sur les sociétés, les exports WPS et les factures localisées.",
        zh: "为增值税编制、企业所得税计算、WPS（工资保护系统）数据导出及本地化发票格式预先配置的本地监管设置。",
        ur: "VAT مرتب کرنے، کارپوریٹ ٹیکس کے حساب کتاب، WPS (ویج پروٹیکشن سسٹم) برآمدات، اور مقامی انوائس فارمیٹس کے لیے پہلے سے ترتیب شدہ علاقائی ترتیبات۔"
      },
      list: {
        en: ["✓ Fully GCC VAT audit-ready formats", "✓ Wage Protection System (WPS) integration", "✓ Certified Corporate Tax calculating engine"],
        ar: ["✓ تنسيقات جاهزة تماماً لتدقيق ضريبة القيمة المضافة الخليجية", "✓ تكامل تام مع نظام حماية الأجور (WPS)", "✓ محرك معتمد لحساب ضريبة الشركات"],
        fr: ["✓ Formats entièrement prêts pour l'audit de la TVA GCC", "✓ Intégration du système de protection des salaires (WPS)", "✓ Moteur certifié de calcul de l'impôt sur les sociétés"],
        zh: ["✓ 完全符合海湾地区增值税审计要求的格式", "✓ 与工资保护系统 (WPS) 深度集成", "✓ 经过官方认证的企业所得税计算引擎"],
        ur: ["✓ مکمل طور پر خلیجی VAT آڈٹ کے لیے تیار فارمیٹس", "✓ ویج پروٹیکشن سسٹم (WPS) انٹیگریشن", "✓ تصدیق شدہ کارپوریٹ ٹیکس کیلکولیٹر انجن"]
      }
    },
    eu: {
      title: {
        en: "European Union Regulatory Compliance (IFRS / GDPR)",
        ar: "الامتثال التنظيمي للاتحاد الأوروبي (IFRS / GDPR)",
        fr: "Conformité Réglementaire Union Européenne (IFRS / RGPD)",
        zh: "欧盟监管合规（IFRS 会计准则与 GDPR 隐私法案）",
        ur: "یورپی یونین ریگولیٹری تعمیل (IFRS / GDPR)"
      },
      desc: {
        en: "Complete alignment with GDPR user privacy regulations, IFRS international bookkeeping rules, and automated VAT One-Stop Shop (OSS) filings for cross-border sales.",
        ar: "محاذاة كاملة مع لوائح خصوصية المستخدم GDPR، وقواعد مسك الدفاتر الدولية IFRS، وإيداعات ضريبة القيمة المضافة المبسطة (OSS) للمبيعات عبر الحدود.",
        fr: "Alignement complet avec le RGPD pour la confidentialité, les normes comptables IFRS et les déclarations de TVA via le guichet unique (OSS) pour les ventes transfrontalières.",
        zh: "完全符合 GDPR 用户隐私条例、IFRS 国际记账规则，以及针对跨境销售的增值税一站式（OSS）申报系统。",
        ur: "GDPR صارف کی رازداری کے قواعد، IFRS بین الاقوامی بک کیپنگ قوانین، اور سرحد پار فروخت کے لیے خودکار VAT ون اسٹاپ شاپ (OSS) فائلنگ کے ساتھ مکمل ہم آہنگی۔"
      },
      list: {
        en: ["✓ Strict GDPR user control protocols active", "✓ Fully compliant with IFRS accounting ledgers", "✓ Automated EU OSS VAT filing reports"],
        ar: ["✓ بروتوكولات صارمة للتحكم في بيانات المستخدم بموجب GDPR", "✓ متوافق تماماً مع دفاتر المحاسبة الدولية IFRS", "✓ تقارير تقديم ضريبة القيمة المضافة الموحدة EU OSS تلقائياً"],
        fr: ["✓ Protocoles de contrôle utilisateur stricts RGPD actifs", "✓ Totalement conforme aux normes de grand livre IFRS", "✓ Rapports automatiques de déclaration de TVA européenne OSS"],
        zh: ["✓ 严苛的 GDPR 用户数据控制协议已激活", "✓ 完全兼容 IFRS 国际复式记账规范", "✓ 自动化欧盟 OSS 增值税申报报表生成"],
        ur: ["✓ سخت GDPR صارف کنٹرول پروٹوکولز فعال ہیں", "✓ IFRS اکاؤنٹنگ لیجرز کے ساتھ مکمل تعمیل", "✓ خودکار یورپی یونین OSS VAT فائلنگ رپورٹس"]
      }
    },
    na: {
      title: {
        en: "North America Financial Alignment (GAAP)",
        ar: "المطابقة المالية لأمريكا الشمالية (GAAP)",
        fr: "Alignement Financier Amérique du Nord (GAAP)",
        zh: "北美财务标准对齐（US GAAP 公认会计准则）",
        ur: "شمالی امریکہ فنانشل الائنمنٹ (GAAP)"
      },
      desc: {
        en: "Automatic US GAAP accounting ledger translation, localized state-by-state sales tax calculations, corporate IRS-ready reporting templates, and secure bank integrations.",
        ar: "ترجمة تلقائية لدفتر المحاسبة وفقاً لمبادئ GAAP الأمريكية، وحسابات ضريبة المبيعات المحلية لكل ولاية، ونماذج تقارير جاهزة لمصلحة الضرائب الأمريكية (IRS)، وتكامل بنكي آمن.",
        fr: "Traduction automatique du grand livre selon les normes US GAAP, calculs des taxes sur les ventes par État américain, modèles IRS et intégrations bancaires sécurisées.",
        zh: "自动将账簿转换为美国公认会计准则（US GAAP）规范，提供各州本地化销售税自动计算，生成符合 IRS 申报要求的报告模板，以及美加主流银行安全对接。",
        ur: "خودکار امریکی GAAP اکاؤنٹنگ لیجر ترجمہ، ریاست بہ ریاست مقامی سیلز ٹیکس کا حساب، کارپوریٹ IRS رپورٹنگ ٹیمپلیٹس، اور محفوظ بینک انٹیگریشنز۔"
      },
      list: {
        en: ["✓ US GAAP standardized bookkeeping formats", "✓ Accurate state-by-state Sales Tax matching", "✓ Pre-formatted corporate IRS tax sheet exports"],
        ar: ["✓ تنسيقات مسك دفاتر موحدة وفقاً لمبادئ US GAAP", "✓ مطابقة دقيقة لضرائب المبيعات لكل ولاية أمريكية", "✓ تصدير أوراق ضريبة الشركات الجاهزة لمصلحة الضرائب IRS"],
        fr: ["✓ Formats de comptabilité standardisés US GAAP", "✓ Calcul précis de la Sales Tax par État", "✓ Exports de rapports pré-formatés pour l'IRS"],
        zh: ["✓ 符合美国 GAAP 标准的记账底稿格式", "✓ 精确的北美各州/省销售税（Sales Tax）计算", "✓ 预设格式的美国企业所得税 IRS 申报单导出"],
        ur: ["✓ امریکی GAAP معیاری بک کیپنگ فارمیٹس", "✓ ریاست بہ ریاست درست سیلز ٹیکس میچنگ", "✓ کارپوریٹ IRS ٹیکس شیٹ برآمدات"]
      }
    },
    ap: {
      title: {
        en: "Asia-Pacific Regional Compliance (IFRS)",
        ar: "الامتثال الإقليمي لآسيا والمحيط الهادئ (IFRS)",
        fr: "Conformité Régionale Asie-Pacifique (IFRS)",
        zh: "亚太地区合规标准（IFRS 国际会计准则）",
        ur: "ایشیا پیسیفک علاقائی تعمیل (IFRS)"
      },
      desc: {
        en: "Multi-market tax framework matching rules for major APAC economies, automated corporate GST calculation modules, multi-currency ledger matching, and local payment gateway hooks.",
        ar: "قواعد مطابقة الإطار الضريبي متعدد الأسواق لاقتصادات آسيا والمحيط الهادئ الرئيسية، ووحدات حساب ضريبة السلع والخدمات (GST) الآلية، ومطابقة الدفاتر متعددة العملات، وربط بوابات الدفع المحلية.",
        fr: "Règles fiscales multi-marchés pour les principales économies APAC, modules de calcul automatique de la GST, gestion multidevise et passerelles de paiement locales.",
        zh: "针对亚太主要经济体的多市场税收框架匹配规则，自动化的企业消费税（GST）计算模块，多币种自动对账总账，以及本地主流支付网关接口集成。",
        ur: "اہم APAC معیشتوں کے لیے ٹیکس فریم ورک، خودکار کارپوریٹ GST کیلکولیشن ماڈیولز، ملٹی کرنسی لیجر میچنگ، اور مقامی ادائیگی گیٹ ویز۔"
      },
      list: {
        en: ["✓ Automated corporate GST calculation systems", "✓ Multi-currency real-time cross-ledger matching", "✓ Pre-configured integrations with APAC banks"],
        ar: ["✓ أنظمة حساب ضريبة السلع والخدمات (GST) للشركات تلقائياً", "✓ مطابقة دفاتر متعددة العملات في الوقت الفعلي", "✓ عمليات ربط مهيأة مسبقاً مع بنوك آسيا والمحيط الهادئ"],
        fr: ["✓ Systèmes de calcul automatique de la GST", "✓ Rapprochement multidevises en temps réel", "✓ Intégrations préconfigurées avec les banques APAC"],
        zh: ["✓ 自动化的亚太地区企业消费税（GST）计算系统", "✓ 实时跨币种多账簿对账匹配与汇兑差额损益计算", "✓ 预配置的亚太主流商业银行直连接口"],
        ur: ["✓ خودکار کارپوریٹ GST کیلکولیشن سسٹمز", "✓ ملٹی کرنسی ریئل ٹائم کراس لیجر میچنگ", "✓ APAC بینکوں کے ساتھ پہلے سے ترتیب شدہ انٹیگریشنز"]
      }
    }
  }
};

/* RENDER FINANCIAL CHECKLIST */
function renderFinChecklist(lang) {
  const list = document.getElementById("finList");
  if (!list) return;
  list.innerHTML = "";
  const items = DATA.finChecklist[lang] || DATA.finChecklist.en;
  items.forEach(text => {
    list.innerHTML += `<li style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;font-size:15px;">
      <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:var(--gold-soft);stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;margin-top:3px;flex-shrink:0;"><path d="M20 6L9 17l-5-5"/></svg>
      <span>${text}</span>
    </li>`;
  });
}

/* RENDER CHART BARS */
function renderChartBars() {
  const container = document.getElementById("chartBars");
  if (!container) return;
  container.innerHTML = "";
  const months = ["J", "F", "M", "A", "M", "J"];
  const revHeights = [65, 72, 58, 80, 75, 84];
  const expHeights = [30, 28, 35, 22, 25, 23];
  months.forEach((m, i) => {
    container.innerHTML += `<div class="bar-group">
      <div class="bar rev" style="height:${revHeights[i]}%"></div>
      <div class="bar exp" style="height:${expHeights[i]}%"></div>
      <span>${m}</span>
    </div>`;
  });
}

/* RENDER HR CHECKLISTS */
function renderHrChecklists(lang) {
  const hrList = document.getElementById("hrList");
  const hrMini = document.getElementById("hrMini");
  if (hrList) {
    hrList.innerHTML = "";
    const items = DATA.hrChecklist[lang] || DATA.hrChecklist.en;
    items.forEach(text => {
      hrList.innerHTML += `<li style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;font-size:15px;">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:var(--gold-soft);stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;margin-top:3px;flex-shrink:0;"><path d="M20 6L9 17l-5-5"/></svg>
        <span>${text}</span>
      </li>`;
    });
  }
  if (hrMini) {
    hrMini.innerHTML = "";
    const items = DATA.hrMiniChecklist[lang] || DATA.hrMiniChecklist.en;
    items.forEach(text => {
      hrMini.innerHTML += `<li style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;font-size:15px;">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:var(--gold-soft);stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;margin-top:3px;flex-shrink:0;"><path d="M20 6L9 17l-5-5"/></svg>
        <span>${text}</span>
      </li>`;
    });
  }
}

/* RENDER TAX GRID */
function renderTaxGrid(lang) {
  const grid = document.getElementById("taxGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const items = DATA.taxCards[lang] || DATA.taxCards.en;
  const svgIcons = [
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7l3 3L21 3"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`
  ];
  items.forEach(([icon, title, desc], idx) => {
    const card = document.createElement("div");
    card.className = "mini-card reveal";
    card.innerHTML = `
      <div class="mini-card-icon">${svgIcons[idx] || svgIcons[0]}</div>
      <div class="mini-card-body">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
      <div class="mini-card-glow"></div>
    `;
    grid.appendChild(card);
  });
}

/* RENDER AUTOMATION STEPS */
function renderAutoSteps(lang) {
  const container = document.getElementById("autoSteps");
  if (!container) return;
  container.innerHTML = "";
  const items = DATA.autoSteps[lang] || DATA.autoSteps.en;
  items.forEach(([num, title, desc]) => {
    container.innerHTML += `<div class="step-card reveal">
      <div class="step-num">${num}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>`;
  });
}

/* RENDER COMMUNICATION GRID */
function renderCommGrid(lang) {
  const grid = document.getElementById("commGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const items = DATA.commCards[lang] || DATA.commCards.en;
  const svgIcons = [
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`
  ];
  items.forEach(([icon, title, desc], idx) => {
    const card = document.createElement("div");
    card.className = "mini-card reveal";
    card.innerHTML = `
      <div class="mini-card-icon">${svgIcons[idx] || svgIcons[0]}</div>
      <div class="mini-card-body">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
      <div class="mini-card-glow"></div>
    `;
    grid.appendChild(card);
  });
}

/* CONTACT FORM HANDLER */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const success = document.getElementById("formSuccess");
    if (success) {
      success.style.display = "block";
      setTimeout(() => { success.style.display = "none"; }, 5000);
    }
    form.reset();
  });
}

/* ============== 3. INTERACTIVE LOGIC CLASS/SETUP ============== */
let currentLanguage = "en";

// LocalStorage helpers to avoid breakage
function setSavedTheme(theme) {
  try {
    localStorage.setItem("hiesabati_theme", theme);
  } catch (e) { }
}
function getSavedTheme() {
  try {
    return localStorage.getItem("hiesabati_theme") || "dark";
  } catch (e) { return "dark"; }
}
function setSavedLang(lang) {
  try {
    localStorage.setItem("hiesabati_lang", lang);
  } catch (e) { }
}
function getSavedLang() {
  try {
    return localStorage.getItem("hiesabati_lang") || "en";
  } catch (e) { return "en"; }
}

// Merge translations from translations.js
if (window.HIESABATI_FEAT_TRANSLATIONS) {
  Object.keys(window.HIESABATI_FEAT_TRANSLATIONS).forEach(lang => {
    if (I18N[lang]) {
      Object.assign(I18N[lang], window.HIESABATI_FEAT_TRANSLATIONS[lang]);
    }
  });
}

/* ══════════════════════════════════════
   FEATURES V2 — 19 Enterprise Modules
   ══════════════════════════════════════ */

const FEAT_MODULES = [
  {
    id: "ai-assistant",
    category: "AI",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1 2-3 3-5 3 0 5 2 9 5 11 3-2 5-6 5-11-2 0-4-1-5-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "AI Business Assistant",
    desc: "Conversational AI engine that understands your business context, answers financial questions, and proactively alerts you to risks and opportunities.",
    features: ["Natural language financial queries","Proactive anomaly alerts","Cash flow predictions","Budget variance explanations","Automated report narration","Invoice anomaly detection","Risk scoring & warnings","Multi-department AI insights","Voice command support","Chat history & memory","Context-aware recommendations","Multilingual AI responses"]
  },
  {
    id: "accounting",
    category: "Accounting",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M12 2v20M2 7h5M2 17h5M17 7h5M17 17h5"/></svg>`,
    title: "Accounting",
    desc: "Certified double-entry accounting engine designed for multi-entity corporate compliance, GAAP & IFRS standards, with automated period closings.",
    features: ["General Ledger (GL)","Journal Entries","Trial Balance","Chart of Accounts","Multi-currency Ledger","GAAP & IFRS Compliance","Automated Period Closing","Depreciation Schedules","Fixed Asset Management","Bank Reconciliation"]
  },
  {
    id: "finance",
    category: "Finance",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V2l18 10-18 10z"/></svg>`,
    title: "Finance",
    desc: "Enterprise financial management covering budgeting, cash flow, capital planning, and real-time financial dashboards across all business units.",
    features: ["Budget Planning & Control","Cash Flow Management","Financial Statements","Profit & Loss Reports","Balance Sheet","Working Capital Analysis","Capital Expenditure Tracking","Intercompany Transactions","Multi-company Consolidation","Cost Center Accounting","Treasury Management","Financial KPI Dashboards"]
  },
  {
    id: "tax",
    category: "Tax",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    title: "Tax & Compliance",
    desc: "Automated tax calculation, filing support, and compliance management across GCC VAT, corporate tax, withholding tax, and global multi-country tax systems.",
    features: ["GCC VAT Calculations","VAT Return Filing","Corporate Tax Reports","Withholding Tax (WHT)","Multi-country Tax Rules","Tax Codes & Mappings","Tax Audit Trail","Compliance Dashboards","E-invoicing (ZATCA / FTA)","Zakat Calculations","Tax Period Management","Deferred Tax Accounting"]
  },
  {
    id: "audit",
    category: "Accounting",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "Financial Control & Audit",
    desc: "Cryptographically verified audit trails, approval workflows, segregation of duties, and real-time financial control dashboards for enterprise-grade governance.",
    features: ["Immutable Audit Logs","Dual-Control Approvals","Segregation of Duties","Role-Based Permissions","Period Lock Controls","Financial Anomaly Detection","Deviation Alerts","Approval Matrix Engine","Document Versioning","Compliance Score Cards","External Auditor Access","Regulatory Reporting"]
  },
  {
    id: "ai-intelligence",
    category: "AI",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    title: "AI Financial Intelligence",
    desc: "Machine-learning powered financial forecasting, scenario simulation, predictive analytics, and intelligent recommendation engine for CFOs and financial teams.",
    features: ["Revenue Forecasting","Expense Prediction","Profit Margin Simulation","Cash Runway Analysis","Scenario Planning","Seasonal Trend Analysis","AI Budget Suggestions","Anomaly Scoring","Predictive Cash Flow","ROI Analysis","Cost Optimization Alerts","Smart Financial Reports"]
  },
  {
    id: "invoices",
    category: "Finance",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    title: "Invoices & Documents",
    desc: "Full-cycle invoice management with OCR scanning, e-invoicing compliance, automated follow-ups, and document management across all legal entities.",
    features: ["Invoice Generation","Sales Invoices","Purchase Invoices","Credit & Debit Notes","OCR Invoice Scanning","Receipt Scanner","ZATCA E-Invoicing","FTA UAE Compliance","Payment Follow-up Automation","Recurring Invoices","Multi-currency Invoicing","PDF & Print Templates"]
  },
  {
    id: "inventory",
    category: "Inventory",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    title: "Inventory & Warehouses",
    desc: "Real-time inventory tracking across multiple warehouses with automated reorder points, stock valuation methods, barcode scanning, and movement reports.",
    features: ["Multi-warehouse Management","Stock Movements","Reorder Point Alerts","FIFO / LIFO / AVCO Costing","Barcode & QR Scanning","Expiry Date Tracking","Stock Valuation Reports","Transfer Orders","Stock Adjustments","Inventory Audits","Bin Location Management","Supplier Lead Time Tracking"]
  },
  {
    id: "sales-crm",
    category: "CRM",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Sales & CRM",
    desc: "End-to-end sales pipeline management with customer relationship tools, quotation builder, Point of Sale terminals, and real-time revenue tracking.",
    features: ["Sales Pipeline","Customer Database (CRM)","Quotation Builder","Sales Orders","Point of Sale (POS)","Cashier & Shift Management","Revenue Dashboards","Customer Credit Limits","Sales Targets & Tracking","Discount Controls","Commission Management","After-Sales Support"]
  },
  {
    id: "purchasing",
    category: "Enterprise",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    title: "Purchasing & Suppliers",
    desc: "Complete procurement lifecycle management from supplier onboarding to purchase orders, receiving, three-way matching, and vendor performance analytics.",
    features: ["Supplier Management","Purchase Requests","Purchase Orders","Goods Receiving Notes","Three-Way Matching","Supplier Invoices","Vendor Evaluation","Procurement Analytics","Landed Cost Tracking","Preferred Supplier Lists","Contract Management","Payment Terms Tracking"]
  },
  {
    id: "manufacturing",
    category: "Manufacturing",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16z"/></svg>`,
    title: "Manufacturing & Production",
    desc: "Production planning, Bill of Materials management, work order execution, capacity planning, and manufacturing cost analysis for industrial operations.",
    features: ["Bill of Materials (BOM)","Work Orders","Production Planning","Material Requirements Planning","Quality Control Checks","Batch & Serial Tracking","Machine Capacity Planning","Production Cost Analysis","Scrap & Waste Tracking","Subcontracting Management","Production Schedules","Finished Goods Costing"]
  },
  {
    id: "projects",
    category: "Projects",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>`,
    title: "Projects Management",
    desc: "Full project lifecycle management with budgeting, task tracking, resource allocation, profitability analysis, and real-time progress dashboards.",
    features: ["Project Planning","Milestone Tracking","Task Management","Resource Allocation","Project Budgeting","Timesheet Logging","Project Invoicing","Profitability Analysis","Gantt Chart View","Project Cost Tracking","Subcontractor Management","Project Status Reports"]
  },
  {
    id: "hr",
    category: "HR",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    title: "Human Resources",
    desc: "Comprehensive HR management from employee onboarding to payroll, attendance, leave management, performance reviews, and end-of-service calculations.",
    features: ["Employee Profiles","Payroll Processing","Attendance Tracking","Leave Management","End-of-Service (EOSB)","Visa & Permit Tracking","Performance Reviews","Org Chart Management","Salary Advances","Overtime Calculations","Multi-country Payroll","HR Analytics Dashboards"]
  },
  {
    id: "communication",
    category: "Enterprise",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: "Communication & Workflow",
    desc: "Built-in team collaboration, document sharing, automated workflow approvals, task notifications, and internal messaging across all departments.",
    features: ["Internal Team Chat","Audio & Voice Notes","Document Sharing","Approval Workflows","Task Notifications","Email Automation","Announcement Board","Meeting Scheduling","Workflow Builder","Escalation Rules","Department Channels","Mobile Push Alerts"]
  },
  {
    id: "monitoring",
    category: "AI",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    title: "Smart Monitoring",
    desc: "AI-powered real-time monitoring engine that continuously scans for financial anomalies, unusual transactions, budget breaches, and operational risks.",
    features: ["Real-time Transaction Monitoring","Budget Breach Alerts","Anomaly Detection Engine","KPI Threshold Warnings","Expense Spike Detection","Unusual Pattern Recognition","Smart Notification Center","Risk Heat Maps","Loss Prevention Alerts","Waste Detection","Operational Risk Scoring","Live Financial Pulse"]
  },
  {
    id: "enterprise",
    category: "Enterprise",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    title: "Enterprise Management",
    desc: "Multi-entity, multi-branch, and multi-country business management with centralized control, consolidated reporting, and global configuration options.",
    features: ["Multi-company Setup","Multi-branch Management","Multi-currency Operations","Intercompany Transactions","Consolidated Reporting","Global Configuration","User Role Management","Company-level Permissions","Data Segregation","Centralized Dashboard","License & Subscription Mgmt","White-label Options"]
  },
  {
    id: "integrations",
    category: "Integrations",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>`,
    title: "Integrations & Mobility",
    desc: "Open REST API platform with pre-built integrations for payment gateways, e-commerce, banking, and government portals, plus native mobile apps.",
    features: ["REST API Access","Payment Gateway Integrations","Bank Feed Sync","E-commerce Integrations","Government Portal Sync","EDI & XML Exchange","Mobile iOS & Android Apps","Webhook Automation","Third-party App Market","SSO & LDAP Integration","Custom Integration Builder","Data Import & Export"]
  },
  {
    id: "bi",
    category: "BI",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    title: "Business Intelligence",
    desc: "Interactive dashboards, drill-down reports, scheduled report delivery, custom KPI builders, and executive-level analytics for data-driven decisions.",
    features: ["Custom Dashboards","Drill-down Reports","Scheduled Report Delivery","KPI Builder","Data Visualization Charts","Revenue Analytics","Cost Analytics","Comparative Period Analysis","Export to Excel / PDF","Pivot Table Reports","Benchmark Analysis","Executive Summary Reports"]
  },
  {
    id: "security",
    category: "Security",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: "Security & Governance",
    desc: "Enterprise-grade security infrastructure with end-to-end encryption, multi-factor authentication, role-based access control, and full data compliance.",
    features: ["End-to-End Encryption","Two-Factor Authentication (2FA)","Role-Based Access Control","IP Restriction & Whitelisting","Session Management","Data Backup & Recovery","GDPR Compliance Tools","Data Residency Options","Penetration Test Reports","Security Audit Logs","Login Anomaly Detection","SSO / SAML Support"]
  }
];

/* ── Render Feature Modules ── */
function renderFeatures(lang) {
  const grid = document.getElementById("featureGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const dict = I18N[lang] || I18N.en;

  // Translate search placeholder
  const searchInput = document.getElementById("featSearchInput");
  if (searchInput && dict["features.searchPlaceholder"]) {
    searchInput.placeholder = dict["features.searchPlaceholder"];
  }

  FEAT_MODULES.forEach(mod => {
    const title = dict[`features.mod.${mod.id}.title`] || mod.title;
    const desc = dict[`features.mod.${mod.id}.desc`] || mod.desc;
    const translatedFeats = mod.features.map((f, idx) => dict[`features.mod.${mod.id}.feat.${idx}`] || f);
    const count = translatedFeats.length;
    const suffix = dict["features.featCountSuffix"] || "Features";

    const card = document.createElement("article");
    card.className = "fmod-card reveal";
    card.dataset.cat = mod.category;
    card.dataset.id  = mod.id;

    card.innerHTML = `
      <div class="fmod-top-bar"></div>
      <div class="fmod-header">
        <div class="fmod-icon-wrap">
          ${mod.icon}
        </div>
        <div class="fmod-title-block">
          <h3 class="fmod-title">${title}</h3>
          <span class="fmod-badge">${count} ${suffix}</span>
        </div>
      </div>
      <p class="fmod-desc">${desc}</p>
      <div class="fmod-divider"></div>
      <ul class="fmod-list">
        ${translatedFeats.map(f => `
          <li class="fmod-item">
            <svg class="fmod-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 4L6 11 3 8"/>
            </svg>
            <span class="fmod-feat-text">${f}</span>
          </li>
        `).join("")}
      </ul>
    `;
    grid.appendChild(card);
  });

  // Wire up search and filter after cards are rendered
  initFeaturesInteractivity();
  observeRevealElements();
}

/* ── Features Interactivity: search + filter ── */
let _featInitialized = false;
function initFeaturesInteractivity() {
  if (_featInitialized) return;
  _featInitialized = true;

  const searchInput = document.getElementById("featSearchInput");
  const searchClear = document.getElementById("featSearchClear");
  const filterBtns  = document.querySelectorAll("#featFilters .filter-chip");
  const noResults   = document.getElementById("featNoResults");
  let activeCategory = "all";
  let searchQuery    = "";

  function applyFilter() {
    const grid = document.getElementById("featureGrid");
    if (!grid) return;
    const cards = grid.querySelectorAll(".fmod-card");
    let visible = 0;
    const q = searchQuery.toLowerCase().trim();

    cards.forEach(card => {
      const cat  = card.dataset.cat;
      const text = card.textContent.toLowerCase();

      const catMatch  = activeCategory === "all" || cat === activeCategory;
      const textMatch = !q || text.includes(q);

      if (catMatch && textMatch) {
        card.style.display = "";
        // Highlight matching feat text
        card.querySelectorAll(".fmod-feat-text").forEach(el => {
          if (q && el.textContent.toLowerCase().includes(q)) {
            el.classList.add("fmod-highlight");
          } else {
            el.classList.remove("fmod-highlight");
          }
        });
        visible++;
      } else {
        card.style.display = "none";
        card.querySelectorAll(".fmod-feat-text").forEach(el => el.classList.remove("fmod-highlight"));
      }
    });

    if (noResults) noResults.style.display = visible === 0 ? "" : "none";
    if (searchClear) searchClear.style.opacity = q ? "1" : "0";
  }

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value;
      applyFilter();
    });
  }

  if (searchClear) {
    searchClear.style.opacity = "0";
    searchClear.addEventListener("click", () => {
      if (searchInput) { searchInput.value = ""; searchInput.focus(); }
      searchQuery = "";
      applyFilter();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      applyFilter();
    });
  });
}

/* RENDER PRODUCTS TABS */
function renderProductsTab(activeTab, lang) {
  const container = document.getElementById("tabsContentArea");
  if (!container) return;
  container.innerHTML = "";

  const tabData = DATA.products[activeTab];
  if (!tabData) return;

  const content = tabData[lang];
  const wrapper = document.createElement("div");
  wrapper.className = "tab-content active";
  wrapper.innerHTML = `
    <div class="tab-info">
      <h3>${content.title}</h3>
      <p>${tabData[lang].desc}</p>
      <ul class="check-list">
        ${content.list.map(item => `
          <li>
            <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
            <span>${item}</span>
          </li>
        `).join("")}
      </ul>
    </div>
    <div class="tab-media">
      <img src="${tabData.img}" alt="${content.title}" loading="lazy">
    </div>
  `;
  container.appendChild(wrapper);
}

/* RENDER SCREENSHOT GALLERY GRID */
function renderGallery(filterCategory, lang) {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = "";

  DATA.gallery.forEach(item => {
    if (filterCategory !== "all" && item.category !== filterCategory) return;

    const card = document.createElement("div");
    card.className = "gallery-item reveal";
    card.setAttribute("data-src", item.img);
    card.setAttribute("data-title", item[lang]);

    card.innerHTML = `
      <img src="${item.img}" alt="${item[lang]}" loading="lazy">
      <div class="gallery-caption">
        <span>${item.category.toUpperCase()}</span>
        <h4>${item[lang]}</h4>
      </div>
    `;
    grid.appendChild(card);

    // Lightbox open trigger
    card.addEventListener("click", () => {
      openLightbox(item.img, item[lang]);
    });
  });

  // Re-observe scroll reveal entries
  observeRevealElements();
}

/* RENDER PRICING MATRIX */
function renderPricing(lang) {
  const grid = document.getElementById("priceGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const items = DATA.pricing[lang] || DATA.pricing["en"];

  const planIcons = ["", "📈", "🏢", "🧩"];
  const planUrls = [
    "https://www.hiesabati.com/checkout?plan=ai-financial-assistant-suite",
    "https://www.hiesabati.com/checkout?plan=growth-business-intelligence-plan---3-users",
    "https://api.whatsapp.com/send/?phone=%2B971558870648&text=Hi%21+I%27m+interested+in+the+Enterprise+Intelligence+Suite+-+5++users.&type=phone_number&app_absent=0",
    "https://www.hiesabati.com/checkout?plan=custom-intelligence-suite"
  ];
  const popularLabel = { en: "MOST POPULAR", ar: "الأكثر طلباً", fr: "LE PLUS POPULAIRE", zh: "最受欢迎", ur: "سب سے مقبول" };
  const trialNote = { en: "14-day free trial · No credit card", ar: "14 يوماً مجاناً · بدون بطاقة", fr: "14 jours gratuits · Sans carte", zh: "14天免费 · 无需信用卡", ur: "14 دن مفت · کارڈ نہیں" };
  const customNote = { en: "Tailored quote · No commitment", ar: "عرض مخصص · بلا التزام", fr: "Devis personnalisé · Sans engagement", zh: "定制报价 · 无需承诺", ur: "کسٹم قیمت · کوئی عہد نہیں" };

  items.forEach(([name, desc, price, period, cta, isPopular, feats], idx) => {
    const isFree = price === "Free" || price === "مجاني" || price === "Gratuit" || price === "免费" || price === "مفت";
    const isCustom = price === "$ASK" || price === "اسأل" || price === "Sur mesure" || price === "询价" || price === "پوچھیں";

    const displayPrice = isFree
      ? (lang === "ar" ? "مجاني" : lang === "fr" ? "Gratuit" : lang === "zh" ? "免费" : lang === "ur" ? "مفت" : "Free")
      : isCustom
        ? (lang === "ar" ? "اسأل" : lang === "fr" ? "Sur devis" : lang === "zh" ? "询价" : lang === "ur" ? "پوچھیں" : "Custom")
        : price;

    const card = document.createElement("div");
    card.className = `price-card reveal ${isPopular ? "pop" : ""}`;

    card.innerHTML = `
      <div class="pc-top-bar"></div>
      ${isPopular ? `<span class="tag">${popularLabel[lang] || "MOST POPULAR"}</span>` : ""}

      <div class="pc-header">
        <span class="pc-icon">${planIcons[idx] || ""}</span>
        <h3>${name}</h3>
        <p class="pc-desc">${desc}</p>
      </div>

      <div class="pc-price-block">
        <div class="pc-price-row">
          <span class="pc-amount ${isFree ? 'pc-free' : ''} ${isCustom ? 'pc-ask' : ''}">${displayPrice}</span>
          ${!isFree ? `<span class="pc-period">${period}</span>` : ""}
        </div>
        <p class="pc-note">${isFree ? (trialNote[lang] || trialNote.en) : isCustom ? (customNote[lang] || customNote.en) : ""}</p>
      </div>

      <div class="pc-divider"></div>

      <ul class="pc-feats">
        ${feats.map(f => `<li><span class="pc-feat-text">${f}</span></li>`).join("")}
      </ul>

      <a href="${planUrls[idx] || "https://www.hiesabati.com/auth"}" target="_blank" rel="noopener noreferrer"
         class="btn pc-cta btn-primary">
        ${cta}
        <svg viewBox="0 0 24 24" class="pc-arrow"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    `;
    grid.appendChild(card);
  });

  observeRevealElements();
}


/* RENDER TESTIMONIALS */
function renderTestimonials(lang) {
  const container = document.getElementById("testGrid");
  if (!container) return;
  container.innerHTML = "";

  const items = DATA.testimonials[lang];
  items.forEach(([stars, quote, avatarTag, name, role]) => {
    const card = document.createElement("div");
    card.className = "test-card reveal";
    card.innerHTML = `
      <div>
        <div class="stars">${stars}</div>
        <q>${quote}</q>
      </div>
      <div class="who">
        <div class="avatar">${avatarTag}</div>
        <div>
          <b>${name}</b>
          <span>${role}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* RENDER ABOUT BULLETS */
function renderAboutBullets(lang) {
  const list = document.getElementById("aboutList");
  if (!list) return;
  list.innerHTML = "";
  const items = DATA.aboutList[lang];
  items.forEach(bullet => {
    list.innerHTML += `
      <li style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;font-size:15px;">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:var(--gold-soft);stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;margin-top:3px;"><path d="M20 6L9 17l-5-5"/></svg>
        <span>${bullet}</span>
      </li>
    `;
  });
}

/* ============== 4. SIMULATOR CALCULATIONS ============== */
function calculateForecast() {
  const growth = parseFloat(document.getElementById("growthSlider").value);
  const expenseCut = parseFloat(document.getElementById("expenseSlider").value);

  document.getElementById("growthVal").textContent = growth + "%";
  document.getElementById("expenseVal").textContent = expenseCut + "%";

  // Base revenue $100,000, base expenses $50,000
  const baseRevenue = 100000;
  const baseExpense = 50000;

  const estimatedRev = baseRevenue * (1 + (growth / 100));
  const estimatedOpex = baseExpense * (1 - (expenseCut / 100));
  const estimatedEbitda = ((estimatedRev - estimatedOpex) / estimatedRev) * 100;

  // Format currencies
  const formatter = new Intl.NumberFormat(currentLanguage === "ar" ? "ar-AE" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });

  document.getElementById("projectedRevenue").textContent = formatter.format(estimatedRev);
  document.getElementById("projectedExpenses").textContent = formatter.format(estimatedOpex);
  document.getElementById("projectedProfit").textContent = estimatedEbitda.toFixed(1) + "%";
}

/* ============== 5. AI CFO CHATBOT SIMULATOR ============== */
function renderChatbotSimulator(lang) {
  const promptsBox = document.getElementById("chatPromptsGrid");
  if (!promptsBox) return;
  promptsBox.innerHTML = "";

  const prompts = DATA.chatSim[lang];
  prompts.forEach(([btnText, questionText, responseText]) => {
    const btn = document.createElement("button");
    btn.className = "chat-prompt-btn";
    btn.textContent = btnText;
    promptsBox.appendChild(btn);

    btn.addEventListener("click", () => {
      triggerChatMessageFlow(questionText, responseText);
    });
  });
}

function triggerChatMessageFlow(userMsg, robotResponse) {
  const chatMessages = document.getElementById("chatSimMessages");
  if (!chatMessages) return;

  // 1. Append Outgoing bubble
  const userBubble = document.createElement("div");
  userBubble.className = "chat-msg outgoing";
  userBubble.textContent = userMsg;
  chatMessages.appendChild(userBubble);

  // Auto scroll
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // 2. Append Typing indicator bubble
  const typingBubble = document.createElement("div");
  typingBubble.className = "chat-msg incoming typing-bubble";
  typingBubble.innerHTML = `
    <div class="typing-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  chatMessages.appendChild(typingBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // 3. Remove typing indicator and append Robot response after 1.2s
  setTimeout(() => {
    typingBubble.remove();

    const robotBubble = document.createElement("div");
    robotBubble.className = "chat-msg incoming";
    robotBubble.innerHTML = robotResponse;
    chatMessages.appendChild(robotBubble);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1200);
}

/* ============== 6. LIGHTBOX & MODAL CONTROLS ============== */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");

function openLightbox(src, title) {
  if (!lightbox) return;
  lightboxImg.src = src;
  lightboxTitle.textContent = title;
  lightbox.style.display = "flex";
}

if (document.getElementById("lightboxClose")) {
  document.getElementById("lightboxClose").addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  // Close on backdrop click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
}

/* Video Modal controllers */
const videoModal = document.getElementById("videoModal");
const playBtn = document.getElementById("playBtn");
const videoModalClose = document.getElementById("videoModalClose");
const modalVideoElement = document.getElementById("modalVideoElement");

if (playBtn && videoModal) {
  playBtn.addEventListener("click", () => {
    videoModal.style.display = "flex";
    if (modalVideoElement) {
      modalVideoElement.play();
      modalVideoElement.muted = false;
    }
  });
}

if (videoModalClose && videoModal) {
  videoModalClose.addEventListener("click", () => {
    videoModal.style.display = "none";
    if (modalVideoElement) modalVideoElement.pause();
  });
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      if (modalVideoElement) modalVideoElement.pause();
    }
  });
}

/* ============== 7. SCROLL COUNTERS AND REVEALS ============== */
function startCounter(counter) {
  if (counter.classList.contains("counter-animated")) return;
  counter.classList.add("counter-animated");

  const target = parseFloat(counter.getAttribute("data-counter"));
  const speed = 200;
  const increment = target / speed;
  let current = 0;

  const animate = () => {
    current += increment;
    if (current < target) {
      if (target % 1 !== 0) { // Float numbers
        counter.innerText = current.toFixed(2);
      } else {
        counter.innerText = Math.ceil(current);
      }
      setTimeout(animate, 10);
    } else {
      counter.innerText = target;
    }
  };
  animate();
}

// Scroll Intersection Observers
let revealObserver;
function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal");
  if (revealObserver) {
    elements.forEach(el => revealObserver.observe(el));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");

        // If element is a stat with a counter, trigger animation
        const counterEl = entry.target.querySelector("[data-counter]");
        if (counterEl) {
          startCounter(counterEl);
        }

        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => revealObserver.observe(el));
}

/* ============== 8. THEME & LOCALIZATION ENGINE ============== */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "◐" : "◑";
  }
  setSavedTheme(theme);

  // Redraw standby voice waveform to match new theme contrast
  if (typeof isVoiceDemoActive !== 'undefined' && !isVoiceDemoActive) {
    stopVoiceWaveformAnimation();
  }
}

function applyLanguage(lang) {
  currentLanguage = lang;
  setSavedLang(lang);

  const dict = I18N[lang];
  if (!dict) return;

  // Set document directives
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;

  // Translate all marked HTML elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Re-render language-dependent components
  renderFeatures(lang);

  // Re-render active product tab
  const activeTabBtn = document.querySelector(".tab-btn.active");
  const currentTab = activeTabBtn ? activeTabBtn.getAttribute("data-tab") : "accounting";
  renderProductsTab(currentTab, lang);

  // Re-render gallery
  const activeFilterBtn = document.querySelector(".filter-btn.active");
  const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
  renderGallery(currentFilter, lang);

  // Re-render pricing
  renderPricing(lang);

  // Re-render remaining dynamic blocks
  if (typeof selectSuccessCase !== 'undefined') {
    selectSuccessCase(activeSuccessCountry);
  }
  renderAboutBullets(lang);
  renderFinChecklist(lang);
  renderChartBars();
  renderHrChecklists(lang);
  renderTaxGrid(lang);
  renderAutoSteps(lang);
  renderCommGrid(lang);
  renderChatbotSimulator(lang);
  calculateForecast();
}

/* ============== 8.5. PREMIUM INTERACTIVE SCHEMES ============== */
let currentTerminalTab = 'overview';
function switchTerminalTab(tab) {
  currentTerminalTab = tab;
  const container = document.getElementById("terminalMainContent");
  if (!container) return;

  // Highlight active tab
  document.querySelectorAll(".sidebar-item").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(tab));
  });

  if (tab === 'overview') {
    container.innerHTML = `
      <div class="terminal-overview-view">
        <div class="terminal-metrics">
          <div class="metric-card">
            <span>Gross Cash Runway</span>
            <h4 id="termRunway">${currentLanguage === 'ar' ? '14.2 شهراً' : '14.2 months'}</h4>
          </div>
          <div class="metric-card">
            <span>Operating Cash Flow</span>
            <h4 id="termOpex">$312,500</h4>
          </div>
        </div>
        <div class="terminal-chart-container">
          <svg class="terminal-svg-chart" viewBox="0 0 400 120">
            <path d="M 0 100 Q 80 80 160 50 T 320 20 T 400 10" fill="none" stroke="var(--gold-soft)" stroke-width="3"></path>
            <path d="M 0 100 Q 80 80 160 50 T 320 20 T 400 10 L 400 120 L 0 120 Z" fill="rgba(231,199,119,0.06)"></path>
            <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.1)"></line>
          </svg>
        </div>
        <div class="terminal-log-ticker">
          <div class="log-row"><span class="green">[OK]</span> Audit trail verified for transaction 0x9B41</div>
          <div class="log-row"><span class="gold">[WARN]</span> Vendor missing TRN tax ID; auto-alert queued</div>
        </div>
      </div>
    `;
  } else if (tab === 'ledger') {
    container.innerHTML = `
      <div style="overflow-x:auto;">
        <table class="terminal-ledger-table">
          <thead>
            <tr><th>DATE</th><th>TXN</th><th>TYPE</th><th>DEBIT</th><th>CREDIT</th><th>STATUS</th></tr>
          </thead>
          <tbody>
            <tr><td>2026-07-09</td><td>#4801</td><td>SALES</td><td>$12,400</td><td>-</td><td>VERIFIED</td></tr>
            <tr><td>2026-07-09</td><td>#4802</td><td>OPEX</td><td>-</td><td>$1,250</td><td>AUDITED</td></tr>
            <tr><td>2026-07-08</td><td>#4799</td><td>PAYROLL</td><td>-</td><td>$84,300</td><td>VERIFIED</td></tr>
            <tr><td>2026-07-08</td><td>#4798</td><td>TAX VAT</td><td>$8,500</td><td>-</td><td>VERIFIED</td></tr>
          </tbody>
        </table>
      </div>
    `;
  } else if (tab === 'ocr') {
    container.innerHTML = `
      <div class="terminal-ocr-view">
        <div class="ocr-scanner-bar"></div>
        <div style="padding: 12px; background: rgba(0,255,102,0.05); border: 1px dashed #00ff66; border-radius: 4px; margin-top: 10px;">
          <strong>Aria OCR Processor:</strong><br>
          File: <span class="gold">invoice_9874_dubai.pdf</span><br>
          Scanning entities... 89% complete.<br>
          Detected Tax TRN: <span class="green">100348756900003</span><br>
          Match Ledger: <span class="green">Success</span>
        </div>
      </div>
    `;
  }
}

function selectMapRegion(region) {
  const data = DATA.complianceMap[region];
  if (!data) return;

  // Highlight active dot on map
  document.querySelectorAll(".map-node").forEach(node => {
    node.classList.toggle("active", node.getAttribute("data-region") === region);
  });

  // Update compliance info card
  const titleEl = document.getElementById("compRegionTitle");
  const descEl = document.getElementById("compRegionDesc");
  const listEl = document.getElementById("compRegionList");

  if (titleEl) titleEl.textContent = data.title[currentLanguage] || data.title.en;
  if (descEl) descEl.textContent = data.desc[currentLanguage] || data.desc.en;

  if (listEl) {
    listEl.innerHTML = "";
    const listItems = data.list[currentLanguage] || data.list.en;
    listItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  }
}

const extraPagesData = {
  solutions: {
    title: {
      en: "Enterprise Core Solutions",
      ar: "الحلول الأساسية للمؤسسات",
      fr: "Solutions d'Entreprise",
      zh: "企业核心解决方案",
      ur: "انٹرپرائز بنیادی حل"
    },
    content: {
      en: "Hiesabati AI delivers pre-built, compliant accounting and reporting pipelines tailored for massive multi-subsidiary corporations, logistics managers, retail networks, and fintech startups.",
      ar: "يقدم حسابتي الذكي خطوطاً محاسبية وتقارير جاهزة ومتوافقة تم تصميمها خصيصاً للشركات الكبرى ذات الفروع المتعددة، ومديري الخدمات اللوجستية، وشبكات التجزئة، والشركات الناشئة في مجال التكنولوجيا المالية.",
      fr: "Hiesabati AI propose des flux comptables et réglementaires pré-intégrés, conçus pour les grandes entreprises multi-filiales, la logistique, le retail et la fintech.",
      zh: "Hiesabati AI 为大型多子公司集团、物流企业、零售网络及金融科技初创公司提供预设且合规的智能会计与报表处理流程。",
      ur: "حساباتی AI کثیر ذیلی اداروں، لاجسٹکس، ریٹیل نیٹ ورکس، اور فنانشل اسٹارٹ اپس کے لیے خودکار اکاؤنٹنگ اور رپورٹنگ حل فراہم کرتا ہے۔"
    },
    list: {
      en: ["<strong>Multi-Subsidiary</strong> ledger consolidation", "<strong>WPS Payroll</strong> regional bank interfaces", "<strong>VAT & Custom Tax</strong> GCC & global engines"],
      ar: ["<strong>توحيد دفاتر</strong> الشركات التابعة المتعددة", "<strong>رواتب حماية الأجور</strong> مع واجهات بنكية إقليمية", "<strong>ضريبة القيمة المضافة والجمارك</strong> للخليج والعالم"],
      fr: ["Consolidation des comptes <strong>Multi-Filiales</strong>", "Gestion des salaires <strong>WPS</strong> connectée aux banques", "Moteurs de taxes <strong>TVA & Douanes</strong> régionaux"],
      zh: ["<strong>多子公司</strong> 账簿合并与抵消分录", "<strong>WPS 工资单</strong> 地区商业银行接口规范", "<strong>增值税与关税</strong> 海湾及全球计算引擎"],
      ur: ["<strong>کثیر ذیلی کھاتوں</strong> کا استحکام", "<strong>WPS پے رول</strong> علاقائی بینک انٹرفیس", "<strong>VAT اور کسٹم ٹیکس</strong> خلیجی اور عالمی انجن"]
    }
  },
  security: {
    title: {
      en: "Security & Sovereign Trust",
      ar: "الأمن والثقة السيادية",
      fr: "Sécurité et Confiance",
      zh: "安全与主权信托",
      ur: "سیکیورٹی اور خود مختار ٹرسٹ"
    },
    content: {
      en: "Hiesabati AI is engineered with multi-layered AES-256 cryptographic ledgers, SOC 2 Type II compliance controls, and real-time sovereign hosting isolation to ensure maximum financial security.",
      ar: "تم تصميم حسابتي بمستويات متعددة من دفاتر التشفير AES-256، وضوابط الامتثال لشهادة SOC 2 Type II، وعزل الاستضافة السيادية لضمان أقصى قدر من الأمان المالي.",
      fr: "Hiesabati AI intègre des registres cryptographiques AES-256, la conformité SOC 2 Type II et l'isolation de l'hébergement souverain pour garantir une sécurité financière maximale.",
      zh: "Hiesabati AI 配备了多层 AES-256 加密分类账、SOC 2 Type II 合规控制，以及实时的主权托管隔离，以确保最高级别的金融数据安全。",
      ur: "حساباتی AI کو کثیر سطحی AES-256 انکرپشن کھاتوں، SOC 2 Type II تعمیل، اور خود مختار ہوسٹنگ آئسولیشن کے ساتھ تیار کیا گیا ہے۔"
    },
    list: {
      en: ["<strong>AES-256 Encryption</strong> for database and transport protection", "<strong>SOC 2 Type II Certification</strong> for compliance standards", "<strong>Sovereign Cloud Deployments</strong> to isolate sub-entity nodes"],
      ar: ["تشفير <strong>AES-256</strong> لحماية قاعدة البيانات والنقل", "شهادة <strong>SOC 2 Type II</strong> لمعايير الامتثال المعتمدة", "خيارات نشر <strong>السحابة السيادية</strong> لعزل العقد التابعة"],
      fr: ["Chiffrement <strong>AES-256</strong> pour la protection des données et du transport", "Certification <strong>SOC 2 Type II</strong> pour les normes de conformité", "Déploiements en <strong>Cloud Souverain</strong> pour isoler les nœuds"],
      zh: ["采用 <strong>AES-256 加密</strong> 以确保数据库与传输安全", "符合 <strong>SOC 2 Type II 认证</strong> 的行业最高合规标准", "支持 <strong>主权云部署</strong> 以完全隔离各子实体的节点"],
      ur: ["ڈیٹا بیس اور ٹرانسمیشن کے تحفظ کے لیے <strong>AES-256 انکرپشن</strong>", "تعمیل کے معیارات کے لیے <strong>SOC 2 Type II سرٹیفیکیشن</strong>", "ذیلی اداروں کو الگ رکھنے کے لیے <strong>سوویرین کلاؤڈ تنصیب</strong>"]
    }
  },
  integrations: {
    title: {
      en: "Global Payment & Bank Integrations",
      ar: "التكاملات مع بوابات الدفع والبنوك العالمية",
      fr: "Passerelles de Paiement & Banques",
      zh: "全球支付网关与商业银行对接",
      ur: "عالمی ادائیگی اور بینک انٹیگریشنز"
    },
    content: {
      en: "Connect Hiesabati ledger directly to your institutional bank accounts and payment gateways. Auto-pull credit statement entries and resolve invoice status updates seamlessly.",
      ar: "اربط دفاتر حساباتي مباشرة بحساباتك المصرفية المؤسسية وبوابات الدفع. اسحب قيود الكشوفات البنكية تلقائياً وحلّ تحديثات حالة الفواتير بسلاسة.",
      fr: "Connectez Hiesabati à vos comptes bancaires et vos passerelles de paiement. Récupérez vos relevés et mettez à jour le statut des factures.",
      zh: "将 Hiesabati 账本系统直接与您的商业银行账户和支付网关挂钩。自动导入银行对账单，实现发票支付状态的实时自动核销。",
      ur: "حساباتی لیجر کو براہ راست اپنے بینک اکاؤنٹس اور ادائیگی کے گیٹ ویز سے جوڑیں۔ بینک اسٹیٹمنٹ اندراجات خود کار طریقے سے درآمد کریں۔"
    },
    list: {
      en: ["<strong>Direct bank hooks</strong> (Stripe, GCC local banks, HSBC)", "<strong>Automated reconciliation</strong> rulesets built‑in", "<strong>AES-256 encrypted</strong> network tunnel transmissions"],
      ar: ["<strong>روابط بنكية مباشرة</strong> (سترايب، بنوك الخليج المحلية، HSBC)", "<strong>قواعد تسوية تلقائية</strong> مدمجة بالنظام", "<strong>تشفير AES-256</strong> لقنوات نقل البيانات الشبكية"],
      fr: ["<strong>Flux bancaires directs</strong> (Stripe, banques locales GCC, HSBC)", "<strong>Rapprochement automatique</strong> intégré", "Tunnels réseau sécurisés par chiffrement <strong>AES-256</strong>"],
      zh: ["<strong>直接银行直连</strong> (Stripe、海湾本土银行、汇丰银行等)", "<strong>自动化对账对账</strong> 规则内置于核心引擎", "采用 <strong>AES-256 加密</strong> 的安全网关通道传输"],
      ur: ["<strong>براہ راست بینک ہکس</strong> (Stripe، خلیجی مقامی بینک، HSBC)", "<strong>خودکار مصالحت</strong> کے قوانین بلٹ ان ہیں", "<strong>AES-256 انکرپٹڈ</strong> نیٹ ورک ٹنل ٹرانسمیشن"]
    }
  },
  privacy: {
    title: {
      en: "Privacy Charter & Data Sovereignty",
      ar: "ميثاق الخصوصية وسيادة البيانات",
      fr: "Charte de Confidentialité",
      zh: "隐私章程与数据主权",
      ur: "رازداری کا چارٹر اور ڈیٹا کی خود مختاری"
    },
    content: {
      en: "Hiesabati AI holds institutional-grade privacy rules. Financial transactions, tax matrices, and employee rosters are encrypted and stored in sovereign isolated environments.",
      ar: "يلتزم حسابتي بقواعد خصوصية مؤسسية صارمة. يتم تشفير المعاملات المالية والمصفوفات الضريبية وقوائم الموظفين وتخزينها في بيئات معزولة سيادياً.",
      fr: "Hiesabati AI applique des règles de confidentialité de niveau institutionnel. Les transactions financières, les données fiscales et les listes d'employés sont cryptées et stockées dans des environnements souverains isolés.",
      zh: "Hiesabati AI 遵循机构级隐私规范。所有财务交易、税务矩阵和员工名册均经过高强度加密，并存储在独立隔离的主权运行环境中。",
      ur: "حساباتی AI تنظیمی سطح کے رازداری کے قواعد پر عمل کرتی ہے۔ مالیاتی لین دین، ٹیکس ڈیٹا، اور ملازمین کی فہرستیں انکرپٹ کر کے خود مختار ماحول میں محفوظ کی جاتی ہیں۔"
    },
    list: {
      en: ["<strong>Zero-sharing policy</strong> on corporate accounting records", "<strong>Multi-tenant data isolation</strong> with security vaults", "Fully compliant with <strong>GDPR, GCC Data Laws</strong> and local regulations"],
      ar: ["سياسة <strong>عدم مشاركة البيانات بالكامل</strong> لدفاتر حسابات الشركات", "<strong>عزل كامل للبيانات</strong> مع خزائن أمان مشفرة", "متوافق تماماً مع <strong>GDPR وقوانين البيانات الخليجية</strong> واللوائح المحلية"],
      fr: ["<strong>Zéro partage</strong> de vos écritures comptables d'entreprise", "<strong>Isolation multi-locataire</strong> des données avec coffres sécurisés", "Conformité stricte au <strong>RGPD, lois du CCG</strong> et règles locales"],
      zh: ["对企业会计账簿记录执行 <strong>零数据共享政策</strong>", "通过安全密钥库实现 <strong>多租户数据深度隔离</strong>", "完全符合 <strong>GDPR、海湾国家数据保护法</strong> 以及本土税务合规要求"],
      ur: ["کارپوریٹ اکاؤنٹنگ ریکارڈز پر <strong>زیرو ڈیٹا شیئرنگ پالیسی</strong>", "سیکیورٹی والٹس کے ساتھ <strong>ملٹی ٹیننٹ ڈیٹا آئسولیشن</strong>", "<strong>GDPR، GCC ڈیٹا قوانین</strong> اور مقامی ضوابط کی مکمل تعمیل"]
    }
  },
  terms: {
    title: {
      en: "Terms of Corporate Governance",
      ar: "شروط الحوكمة المؤسسية",
      fr: "Conditions de Gouvernance",
      zh: "企业治理与服务条款",
      ur: "کارپوریٹ گورننس کی شرائط"
    },
    content: {
      en: "Governing software usage, system uptime, SLA commitments, and API service agreements for institutional sub-entities and joint stock enterprises.",
      ar: "تنظيم استخدام البرمجيات، وجاهزية النظام، والتزامات اتفاقية مستوى الخدمة SLA، واتفاقيات الخدمة للمؤسسات التابعة والشركات المساهمة.",
      fr: "Régit l'utilisation du logiciel, le temps de disponibilité du système, les engagements de niveau de service (SLA) et les accords API pour les entités et filiales.",
      zh: "规范多层级子实体、联营及股份制集团软件使用许可、系统正常运行时间（Uptime）、SLA服务承诺以及API服务协议。",
      ur: "ذیلی اداروں اور جوائنٹ اسٹاک کمپنیوں کے لیے سافٹ ویئر کے استعمال، سسٹم اپ ٹائم، SLA کے وعدوں اور API معاہدوں کو منظم کرنا۔"
    },
    list: {
      en: ["Guaranteed <strong>99.9% platform availability</strong> under premium SLAs", "<strong>Double-entry compliance</strong> tracking with audit trail validation", "Authorized usage controls governed by <strong>advanced role hierarchies</strong>"],
      ar: ["ضمان <strong>جاهزية المنصة بنسبة 99.9%</strong> بموجب اتفاقيات الخدمة الممتازة", "تتبع <strong>الامتثال المزدوج</strong> مع التحقق من مسار التدقيق", "ضوابط استخدام معتمدة تديرها <strong>هياكل الأدوار المتقدمة</strong>"],
      fr: ["Garantie de <strong>disponibilité de 99,9%</strong> sous SLA premium", "Suivi de conformité en <strong>partie double</strong> et validation d'audit", "Contrôles d'accès gérés par une <strong>hiérarchie de rôles avancée</strong>"],
      zh: ["在高端SLA服务条款下保证 <strong>99.9% 的系统可用性</strong>", "内置 <strong>双分录合规追踪</strong> 并支持防篡改审计链校验", "由 <strong>高级角色控制矩阵</strong> 进行的严格授权使用管控"],
      ur: ["پریمیم SLAs کے تحت <strong>99.9% پلیٹ فارم کی دستیابی</strong> کی ضمانت", "آڈٹ ٹریل کی توثیق کے ساتھ <strong>ڈبل انٹری تعمیل</strong> ٹریکنگ", "<strong>اعلیٰ کردار کے درجہ بندی</strong> کے تحت استعمال کی نگرانی"]
    }
  },
  cookies: {
    title: {
      en: "Cookie & Local Storage Settings",
      ar: "إعدادات ملفات تعريف الارتباط والتخزين المحلي",
      fr: "Paramètres des Cookies & Stockage",
      zh: "Cookie 与本地存储配置",
      ur: "کوکی اور لوکل اسٹوریج سیٹنگز"
    },
    content: {
      en: "Manage cookies and local storage tokens used exclusively for secure authentication, local state recovery (theme/language), and Aria CFO session persistence.",
      ar: "إدارة ملفات تعريف الارتباط ورموز التخزين المحلي المستخدمة حصرياً للمصادقة الآمنة، واستعادة حالة الموقع (المظهر/اللغة)، واستمرارية جلسة المدير المالي آريا.",
      fr: "Gérez les cookies et jetons de stockage local utilisés exclusivement pour l'authentification sécurisée, la récupération de l'état (thème/langue) et les sessions Aria CFO.",
      zh: "管理仅用于安全身份验证、本地界面状态恢复（主题/语言风格）以及 Aria AI CFO 智能会话状态持续性所需的 Cookie 和本地存储密钥。",
      ur: "کوکیز اور لوکل اسٹوریج ٹوکنز کا انتظام کریں جو صرف لاگ ان سیکیورٹی، لوکل اسٹیٹ (تھیم/زبان) اور آریا CFO سیشن کے لیے استعمال ہوتے ہیں۔"
    },
    list: {
      en: ["<strong>Secure session cookies</strong> for multi-subsidiary console persistence", "<strong>Zero third-party tracking</strong> or behavioral marketing trackers", "Toggle-controlled local storage parameters for <strong>compliance monitoring</strong>"],
      ar: ["ملفات تعريف <strong>جلسة آمنة</strong> لاستمرارية لوحة التحكم متعددة الفروع", "<strong>خالٍ تماماً من تتبع الطرف الثالث</strong> أو متعقبات التسويق السلوكي", "معلمات تخزين محلي يتم التحكم فيها لتسهيل <strong>مراقبة الامتثال</strong>"],
      fr: ["<strong>Cookies de session sécurisés</strong> pour la persistance de la console", "<strong>Aucun suivi tiers</strong> ni cookies de ciblage publicitaire", "Stockage local paramétrable destiné uniquement au <strong>suivi de conformité</strong>"],
      zh: ["使用 <strong>安全会话 Cookie</strong> 以实现多子公司管理后台状态持续", "承诺 <strong>无第三方追踪</strong>，拒绝任何行为性营销跟踪代码", "由用户自主控制本地存储参数，以满足 <strong>合规性审计监控</strong>"],
      ur: ["کثیر ذیلی کنسول کے لیے <strong>محفوظ سیشن کوکیز</strong>", "<strong>تیسرے فریق کی ٹریکنگ</strong> یا مارکیٹنگ ٹریکرز کا مکمل خاتمہ", "<strong>تعمیل کی نگرانی</strong> کے لیے کنٹرول شدہ لوکل اسٹوریج پیرامیٹرز"]
    }
  }
};

function openExtraPage(page) {
  const data = extraPagesData[page];
  if (!data) return;

  const overlay = document.getElementById("drawerOverlay");
  const panel = document.getElementById("drawerPanel");
  const content = document.getElementById("drawerContent");

  if (!overlay || !panel || !content) return;

  const title = data.title[currentLanguage] || data.title.en;
  const desc = data.content[currentLanguage] || data.content.en;
  const listItems = data.list[currentLanguage] || data.list.en;

  content.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <ul class="drawer-features-list">
      ${listItems.map(item => `<li><strong>✓</strong> <div>${item}</div></li>`).join("")}
    </ul>
    ${page === 'security' ? `
      <div class="code-block-mock">
// Hiesabati Cryptographic Audit Trail Signature
{
  "ledger_root_hash": "0x7f8a9c2b4d6e8f...",
  "signature_type": "SHA-256 with SECP256K1",
  "audit_compliance": "SOC-2 Type-II Verified",
  "isolated_hosting": "Sovereign Node #12-DXB",
  "encryption_status": "Active (TLS 1.3 / AES-256-GCM)"
}
      </div>
    ` : ''}
    <a href="#contact" onclick="closeDrawer()" class="btn btn-primary" style="width:100%; text-align:center; justify-content:center;">Request Security Briefing</a>
  `;

  overlay.classList.add("active");
  panel.classList.add("active");
}

function closeDrawer() {
  const overlay = document.getElementById("drawerOverlay");
  const panel = document.getElementById("drawerPanel");
  if (overlay) overlay.classList.remove("active");
  if (panel) panel.classList.remove("active");
}

let isVoiceDemoActive = false;
let voiceAnimationId = null;
let voiceWaveformPhase = 0;
let voiceAmplitudeCurrent = 2.0;

function toggleVoiceDemo() {
  const btn = document.getElementById("voiceMicBtn");
  const log = document.getElementById("voiceStatusLog");
  if (!btn || !log) return;

  isVoiceDemoActive = !isVoiceDemoActive;
  btn.classList.toggle("active", isVoiceDemoActive);

  const dict = I18N[currentLanguage] || I18N.en;

  if (isVoiceDemoActive) {
    log.innerHTML = `"${dict["aicfo.voiceListening"] || "Aria is listening. Speak now..."}"`;

    // Simulate user speaking and Aria responding
    setTimeout(() => {
      if (!isVoiceDemoActive) return;
      log.innerHTML = `"${dict["aicfo.voiceUserQuery"] || "User: Predict our cash flow variance for next quarter..."}"`;

      setTimeout(() => {
        if (!isVoiceDemoActive) return;
        log.innerHTML = `"${dict["aicfo.voiceAriaResponse"] || "Aria: Processing..."}"`;
      }, 2500);
    }, 2000);
  } else {
    log.innerHTML = `"${dict["aicfo.voiceStandby"] || "Voice CFO mode standby. Click mic to begin."}"`;
  }
}

function startVoiceWaveformAnimation() {
  const canvas = document.getElementById("voiceWaveform");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  if (voiceAnimationId) {
    cancelAnimationFrame(voiceAnimationId);
  }

  function getCSSVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  let isVisible = false;
  let isAnimating = false;

  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
    if (isVisible && !isAnimating) {
      isAnimating = true;
      draw();
    }
  });
  observer.observe(canvas);

  function draw() {
    if (!isVisible) {
      isAnimating = false;
      return;
    }

    if (canvas.width !== canvas.parentElement.clientWidth || canvas.height !== canvas.parentElement.clientHeight) {
      canvas.width = canvas.parentElement.clientWidth || 300;
      canvas.height = canvas.parentElement.clientHeight || 80;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;

    let targetAmplitude = 2.0;
    if (isVoiceDemoActive) {
      targetAmplitude = 14.0 + Math.sin(voiceWaveformPhase * 2.5) * 8.0;
    } else {
      targetAmplitude = 2.0 + Math.sin(voiceWaveformPhase * 0.4) * 0.6;
    }
    voiceAmplitudeCurrent += (targetAmplitude - voiceAmplitudeCurrent) * 0.12;

    const primaryColor = getCSSVar('--primary') || '#2354E6';
    const goldColor = getCSSVar('--gold-soft') || '#E7C777';
    const cyanColor = getCSSVar('--accent-cyan') || '#06b6d4';

    const waves = [
      { phaseOffset: 0, color: primaryColor, opacity: 0.8, freq: 3.5, width: 2.2 },
      { phaseOffset: Math.PI * 0.5, color: cyanColor, opacity: 0.45, freq: 5.0, width: 1.4 },
      { phaseOffset: Math.PI, color: goldColor, opacity: 0.25, freq: 2.5, width: 1.2 }
    ];

    waves.forEach(w => {
      ctx.strokeStyle = w.color;
      ctx.globalAlpha = w.opacity;
      ctx.lineWidth = w.width;
      ctx.lineCap = 'round';

      if (isVoiceDemoActive) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = w.color;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const normalizedX = x / width;
        const fade = Math.sin(normalizedX * Math.PI);
        const angle = normalizedX * Math.PI * w.freq + voiceWaveformPhase + w.phaseOffset;
        const y = height / 2 + Math.sin(angle) * voiceAmplitudeCurrent * fade;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    });

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1.0;

    voiceWaveformPhase += isVoiceDemoActive ? 0.16 : 0.035;
    voiceAnimationId = requestAnimationFrame(draw);
  }
}

function stopVoiceWaveformAnimation() {
  // Loop runs constantly now for ambient breathing baseline, stub kept for compatibility
}

function startHeroCanvasAnimation() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1
    });
  }

  let isVisible = false;
  let isAnimating = false;

  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
    if (isVisible && !isAnimating) {
      isAnimating = true;
      animate();
    }
  });
  observer.observe(canvas);

  function animate() {
    if (!isVisible) {
      isAnimating = false;
      return;
    }
    
    ctx.clearRect(0, 0, width, height);

    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    ctx.strokeStyle = currentTheme === 'dark' ? 'rgba(35, 84, 230, 0.04)' : 'rgba(29, 78, 216, 0.05)';
    ctx.fillStyle = currentTheme === 'dark' ? 'rgba(231, 199, 119, 0.15)' : 'rgba(185, 134, 47, 0.2)';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        if ((dx*dx + dy*dy) < 32400) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
}

function renderRiskHeatMap() {
  const grid = document.getElementById("heatMapGrid");
  const terminal = document.getElementById("auditTerminalLogs");
  if (!grid) return;
  grid.innerHTML = "";

  // Create 64 heat blocks
  for (let i = 0; i < 64; i++) {
    const cell = document.createElement("div");
    cell.className = "heat-cell";
    grid.appendChild(cell);
  }
  
  function addAuditLog(type) {
    if (!terminal) return;
    const msg = document.createElement("div");
    msg.className = "log-row";
    msg.style.animation = "fadeIn 0.3s ease forwards";
    
    const regions = ['UAE', 'SA', 'UK', 'US', 'EU', 'SG'];
    const reg = regions[Math.floor(Math.random() * regions.length)];
    const hash = Math.random().toString(16).substr(2, 6).toUpperCase();
    
    if (type === 'high') {
      msg.innerHTML = `<span style="color:#f43f5e; margin-right:8px;">[FLAGGED]</span> Anomaly detected in cross-border transaction 0x${hash}. Isolation active.`;
    } else if (type === 'warn') {
      msg.innerHTML = `<span style="color:#facc15; margin-right:8px;">[ANALYZING]</span> Checking VAT compliance rate variance for ${reg} entity.`;
    } else {
      msg.innerHTML = `<span style="color:#2dd4bf; margin-right:8px;">[VERIFIED]</span> Block ledger node ${hash} validated securely in ${Math.floor(Math.random()*120 + 20)}ms.`;
    }
    
    terminal.appendChild(msg);
    if (terminal.childElementCount > 3) {
      terminal.removeChild(terminal.firstChild);
    }
  }
  
  if (terminal) {
    terminal.innerHTML = "";
    addAuditLog('ok');
    addAuditLog('warn');
  }

  // Periodically toggle some warning/risk blocks to simulate living data flow
  setInterval(() => {
    const cells = grid.querySelectorAll(".heat-cell");
    if (cells.length === 0) return;

    const indexToModify = Math.floor(Math.random() * cells.length);
    const cell = cells[indexToModify];

    cell.className = "heat-cell";
    const rand = Math.random();
    
    if (rand < 0.15) {
      cell.classList.add("risk-high");
      addAuditLog('high');
    } else if (rand < 0.30) {
      cell.classList.add("risk-warn");
      addAuditLog('warn');
    } else {
      // Occasional "ok" log
      if (Math.random() > 0.5) addAuditLog('ok');
    }
  }, 1800);
}

function showTimelineDetail(year) {
  const dict = I18N[currentLanguage] || I18N.en;
  let text = "";
  if (year === 2020) text = dict["timeline.2020"] || "Double-entry ledger core engine certified.";
  if (year === 2022) text = dict["timeline.2022"] || "GCC tax framework & automated VAT launched.";
  if (year === 2024) text = dict["timeline.2024"] || "Aria Autonomous CFO cognitive engine integrated.";
  if (year === 2026) text = dict["timeline.2026"] || "Pre-IPO compliance audits & international expansion.";

  // Open in dynamic drawer panel with details
  const overlay = document.getElementById("drawerOverlay");
  const panel = document.getElementById("drawerPanel");
  const content = document.getElementById("drawerContent");

  if (!overlay || !panel || !content) return;

  content.innerHTML = `
    <h3 style="color:var(--gold-soft); font-size:24px;">Hiesabati Milestones — ${year}</h3>
    <p style="margin-top:20px; font-size:16px; line-height:1.7;">${text}</p>
    <div style="margin-top:32px; padding:20px; background:rgba(255,255,255,0.02); border:1px solid var(--border-glass); border-radius:var(--radius-sm);">
      <strong>Pre-IPO Audit Statement:</strong> Verified compliance matching ISO guidelines. All system ledgers compiled with 0.00% manual overrides.
    </div>
  `;

  overlay.classList.add("active");
  panel.classList.add("active");
}

// ============ GLOBAL DATA OVERRIDES & CONTROLLERS ============
const JOURNEY_STEPS = [
  {
    title: {
      en: "Company Registration",
      ar: "تأسيس الشركة",
      zh: "公司注册",
      fr: "Enregistrement",
      ur: "کمپنی رجسٹریشن"
    },
    image: "assets/dashboard.png",
    log: {
      en: "<span class='green'>[OK]</span> Company profile active. Fiscal parameters configured: AED, SAR.",
      ar: "<span class='green'>[OK]</span> ملف المنشأة نشط. تمت تهيئة المعاملات المادية: درهم إماراتي، ريال سعودي.",
      zh: "<span class='green'>[OK]</span> 企业实体配置激活。已完成主结算币种设定: AED, SAR。",
      fr: "<span class='green'>[OK]</span> Profil de l'entreprise actif. Paramètres fiscaux configurés: AED, SAR.",
      ur: "<span class='green'>[OK]</span> کمپنی پروفائل فعال۔ مالیاتی پیرامیٹرز ترتیب دیے گئے: AED، SAR۔"
    }
  },
  {
    title: {
      en: "Branch & Warehouse Setup",
      ar: "إعداد الفروع والمستودعات",
      zh: "分支机构与仓库设置",
      fr: "Branches et Entrepôts",
      ur: "برانچ اور گودام"
    },
    image: "assets/Vendors.png",
    log: {
      en: "<span class='green'>[OK]</span> 4 global warehouses added. Regional manager permissions assigned.",
      ar: "<span class='green'>[OK]</span> تم إضافة 4 مستودعات عالمية. وتعيين صلاحيات المدير الإقليمي.",
      zh: "<span class='green'>[OK]</span> 已添加 4 个全球仓库。区域管理人员权限已分配。",
      fr: "<span class='green'>[OK]</span> 4 entrepôts mondiaux ajoutés. Autorisations de responsable régional attribuées.",
      ur: "<span class='green'>[OK]</span> 4 عالمی گودام شامل کیے گئے۔ علاقائی مینیجر के اختیارات تفویض کر دیے گئے۔"
    }
  },
  {
    title: {
      en: "User & Role Management",
      ar: "إدارة المستخدمين والأدوار",
      zh: "用户与角色权限管理",
      fr: "Utilisateurs et Rôles",
      ur: "صارف اور کردار"
    },
    image: "assets/Tasks.png",
    log: {
      en: "<span class='gold'>[SECURE]</span> 2FA enforcement active. ACL scope policy compiled for 12 department heads.",
      ar: "<span class='gold'>[SECURE]</span> التحقق الثنائي نشط. تم تجميع سياسة صلاحيات الوصول لـ 12 رئيساً للأقسام.",
      zh: "<span class='gold'>[SECURE]</span> 两步验证(2FA)强制执行开启。已为 12 名部门负责人生成ACL权限策略。",
      fr: "<span class='gold'>[SECURE]</span> Authentification 2FA obligatoire active. Politique de portée ACL compilée pour 12 chefs de département.",
      ur: "<span class='gold'>[SECURE]</span> 2FA لازمی لاگو ہے۔ 12 شعبہ جاتی سربراہان کے لیے ACL پالیسی تیار۔"
    }
  },
  {
    title: {
      en: "Customer & Supplier Management",
      ar: "إدارة العملاء والموردين",
      zh: "客户与供应商管理",
      fr: "Clients et Fournisseurs",
      ur: "کسٹمر اور سپلائر"
    },
    image: "assets/Vendors.png",
    log: {
      en: "<span class='green'>[OK]</span> Supplier balances imported from CSV. Credit alert limits verified.",
      ar: "<span class='green'>[OK]</span> تم استيراد أرصدة الموردين من ملف CSV. وتأكيد حدود تنبيه الائتمان.",
      zh: "<span class='green'>[OK]</span> 供应商账户余额已成功从 CSV 导入。信用额度超限预警阈值已核实。",
      fr: "<span class='green'>[OK]</span> Soldes fournisseurs importés depuis CSV. Limites d'alerte de crédit vérifiées.",
      ur: "<span class='green'>[OK]</span> سپلائر کے بیلنس CSV سے درآمد کر لیے گئے۔ کریڈٹ الرٹ کی حدود تصدیق شدہ۔"
    }
  },
  {
    title: {
      en: "Product & Inventory Management",
      ar: "إدارة المنتجات والمخزون",
      zh: "产品与库存管理",
      fr: "Produits et Inventaire",
      ur: "پروڈکٹ اور انوینٹری"
    },
    image: "assets/Inventory_Report.png",
    log: {
      en: "<span class='green'>[OK]</span> 12,400 SKU barcodes compiled. Real-time low stock trigger warning active.",
      ar: "<span class='green'>[OK]</span> تم تجميع 12,400 باركود SKU. وتنشيط تحذير انخفاض المخزون في الوقت الفعلي.",
      zh: "<span class='green'>[OK]</span> 12,400 个 SKU 条形码生成完毕。实时低库存自动提醒功能已激活。",
      fr: "<span class='green'>[OK]</span> 12 400 codes-barres SKU compilés. Alerte de stock bas en temps réel active.",
      ur: "<span class='green'>[OK]</span> 12,400 SKU بارکوڈز تیار۔ ریئل ٹائم کم اسٹاک وارننگ فعال۔"
    }
  },
  {
    title: {
      en: "Sales Process",
      ar: "عملية المبيعات",
      zh: "销售流程管理",
      fr: "Processus de Vente",
      ur: "فروخت کا عمل"
    },
    image: "assets/Point_of_sale.png",
    log: {
      en: "<span class='green'>[PAYMENT]</span> Invoice #4891 created. E-invoice QR validation passed. WPS sync completed.",
      ar: "<span class='green'>[PAYMENT]</span> تم إنشاء الفاتورة #4891. واجتياز التحقق من رمز الاستجابة السريعة للفاتورة الإلكترونية. واكتمال مزامنة WPS.",
      zh: "<span class='green'>[PAYMENT]</span> 销售发票 #4891 已创建。电子发票二维码合规核验通过。工资单WPS通道对接成功。",
      fr: "<span class='green'>[PAYMENT]</span> Facture #4891 créée. Validation QR de facture électronique réussie. Synchronisation WPS terminée.",
      ur: "<span class='green'>[PAYMENT]</span> انوائس #4891 تیار۔ ای انوائس QR تصدیق کامیاب۔ WPS مطابقت پذیری مکمل۔"
    }
  },
  {
    title: {
      en: "Purchasing Process",
      ar: "عملية الشراء",
      zh: "采购采购控制",
      fr: "Processus d'Achat",
      ur: "خریداری کا عمل"
    },
    image: "assets/Shift_Sell.png",
    log: {
      en: "<span class='green'>[OK]</span> PO #9084 approved by CFO. Stock levels auto-apportioned to Central warehouse.",
      ar: "<span class='green'>[OK]</span> تمت الموافقة على طلب الشراء #9084 من قبل المدير المالي. وتم توزيع مستويات المخزون تلقائياً إلى المستودع المركزي.",
      zh: "<span class='green'>[OK]</span> 采购订单 #9084 已通过CFO审批。采购商品库存在入库后自动分配至中央仓库。",
      fr: "<span class='green'>[OK]</span> Commande #9084 approuvée par le CFO. Niveaux de stock auto-répartis vers l'entrepôt central.",
      ur: "<span class='green'>[OK]</span> PO #9084 CFO سے منظور شدہ۔ اسٹاک کی سطح خودکار طور پر مرکزی گودام میں منتقل۔"
    }
  },
  {
    title: {
      en: "Financial Management",
      ar: "الإدارة المالية",
      zh: "财务会计管理",
      fr: "Gestion Financière",
      ur: "مالیاتی انتظام"
    },
    image: "assets/JournalEntries.png",
    log: {
      en: "<span class='green'>[LEDGER]</span> Trial balance computed. Double-entry validation check passed.",
      ar: "<span class='green'>[LEDGER]</span> تم احتساب ميزان المراجعة. واجتياز فحص التحقق من القيد المزدوج.",
      zh: "<span class='green'>[LEDGER]</span> 科目余额表已计算生成。复式记账借贷平衡校验通过。",
      fr: "<span class='green'>[LEDGER]</span> Balance de vérification calculée. Contrôle de validation double partie réussi.",
      ur: "<span class='green'>[LEDGER]</span> ٹرائل بیلنس تیار۔ ڈبل انٹری تصدیقی چیک کامیاب۔"
    }
  },
  {
    title: {
      en: "Human Resources",
      ar: "الموارد البشرية",
      zh: "人力资源管理",
      fr: "Ressources Humaines",
      ur: "انسانی وسائل"
    },
    image: "assets/Performance.png",
    log: {
      en: "<span class='green'>[HR]</span> Attendance sync verified (98%). Net payroll batch queued for WPS bank transmission.",
      ar: "<span class='green'>[HR]</span> تم تأكيد مزامنة الحضور (98%). ووضع دفعة الرواتب الصافية في قائمة الانتظار لإرسالها لبنك WPS.",
      zh: "<span class='green'>[HR]</span> 员工考勤数据校验完毕(到岗率 98%)。本期应发薪资报批已发送至WPS银行代发接口队列。",
      fr: "<span class='green'>[HR]</span> Synchronisation des présences vérifiée (98%). Lot de paie net mis en file d'attente pour transmission bancaire WPS.",
      ur: "<span class='green'>[HR]</span> حاضری کی تصدیق مکمل (98%)۔ نیٹ پے رول بیچ WPS بینک منتقلی کے لیے تیار۔"
    }
  },
  {
    title: {
      en: "Tax & Compliance",
      ar: "الضرائب والامتثال",
      zh: "税收与合规",
      fr: "Fiscalité et Conformité",
      ur: "ٹیکس اور تعمیل"
    },
    image: "assets/VAT_Dashboard.png",
    log: {
      en: "<span class='gold'>[COMPLIANCE]</span> GCC VAT declaration sheet compiled. Direct ZATCA portal sync ready.",
      ar: "<span class='gold'>[COMPLIANCE]</span> تم تجميع إقرار ضريبة القيمة المضافة لدول الخليج. وجاهزية المزامنة المباشرة مع بوابة هيئة الزكاة والضريبة والجمارك (ZATCA).",
      zh: "<span class='gold'>[COMPLIANCE]</span> 海湾国家增值税申报底稿生成完毕。支持直接上传对接沙特ZATCA申报门户。",
      fr: "<span class='gold'>[COMPLIANCE]</span> Déclaration de TVA du CCG compilée. Synchronisation directe avec le portail ZATCA prête.",
      ur: "<span class='gold'>[COMPLIANCE]</span> GCC VAT فارم تیار۔ ZATCA پورٹل کے ساتھ براہ راست مطابقت پذیری کے لیے تیار۔"
    }
  },
  {
    title: {
      en: "Automation Engine",
      ar: "محرك الأتمتة",
      zh: "工作流自动控制",
      fr: "Moteur d'Automatisation",
      ur: "خودکار انجن"
    },
    image: "assets/Notifications.png",
    log: {
      en: "<span class='green'>[WORKFLOW]</span> Approval rule triggered: OPEX voucher exceeding $5K auto-routed to CFO.",
      ar: "<span class='green'>[WORKFLOW]</span> تم تشغيل قاعدة الموافقة: تم تحويل قسيمة نفقات التشغيل التي تتجاوز $5K تلقائياً للمدير المالي.",
      zh: "<span class='green'>[WORKFLOW]</span> 预设审批流规则激活: 单笔超过 $5K 的日常经营支出凭证已自动抄送至 CFO 邮箱审批。",
      fr: "<span class='green'>[WORKFLOW]</span> Règle d'approbation déclenchée: Bon OPEX dépassant 5 000 $ auto-acheminé vers le CFO.",
      ur: "<span class='green'>[WORKFLOW]</span> منظوری کا اصول فعال: 5 ہزار ڈالر سے زائد کا واؤچر خودکار طور پر CFO کو منتقل۔"
    }
  },
  {
    title: {
      en: "AI CFO Engine",
      ar: "محرك المدير المالي الذكي",
      zh: "AI 智能财务官",
      fr: "Moteur d'IA CFO",
      ur: "AI CFO انجن"
    },
    image: "assets/AI_Assistant.png",
    log: {
      en: "<span class='green'>[AI ARIA]</span> Predictor projecting runway: 16.4 months. Cash flow anomaly detection active.",
      ar: "<span class='green'>[AI ARIA]</span> تتوقع آريا مسار سيولة نقدية: 16.4 شهراً. تفعيل اكتشاف الانحرافات في التدفقات النقدية.",
      zh: "<span class='green'>[AI ARIA]</span> Aria 决策助手预测企业现金周转周期: 16.4 个月。大额应收应付异常对账监测处于活跃状态。",
      fr: "<span class='green'>[AI ARIA]</span> Prédiction de la piste de trésorerie: 16,4 mois. Détection des anomalies de flux de trésorerie active.",
      ur: "<span class='green'>[AI ARIA]</span> بقایا کیش کی مدت का تخمینہ: 16.4 ماہ۔ کیش فلو کی غلطیوں کی نشاندہی فعال۔"
    }
  },
  {
    title: {
      en: "Reports & Analytics",
      ar: "التقارير والتحليلات",
      zh: "决策分析报告",
      fr: "Rapports et Analyses",
      ur: "رپورٹس اور تجزیہ"
    },
    image: "assets/Reports.png",
    log: {
      en: "<span class='green'>[OK]</span> Financial Statements compiled. Real-time EBITDA margin updated.",
      ar: "<span class='green'>[OK]</span> تم تجميع القوائم المالية. وتحديث هامش EBITDA في الوقت الفعلي.",
      zh: "<span class='green'>[OK]</span> 财务分析三大报表生成完毕。实时 EBITDA 净利润率指标已更新显示。",
      fr: "<span class='green'>[OK]</span> États financiers compilés. Marge EBITDA mise à jour en temps réel.",
      ur: "<span class='green'>[OK]</span> مالیاتی گوشوارے تیار۔ ریئل ٹائم EBITDA مارجن اپ ڈیٹ۔"
    }
  },
  {
    title: {
      en: "Executive Decision Center",
      ar: "مركز القرار التنفيذي",
      zh: "高管决策中心",
      fr: "Centre de Décision Exécutif",
      ur: "ایگزیکٹو فیصلہ مرکز"
    },
    image: "assets/AI_Document_Analysis.png",
    log: {
      en: "<span class='green'>[DECISION]</span> Business Health Score: 96/100. Growth advisory generated for KSA expansion.",
      ar: "<span class='green'>[DECISION]</span> نقاط صحة الأعمال: 96/100. تم إصدار تقرير استشاري للنمو والتوسع في السعودية.",
      zh: "<span class='green'>[DECISION]</span> 企业经营健康评分: 96/100。系统已针对沙特阿拉伯市场业务拓展输出战略评估建议。",
      fr: "<span class='green'>[DECISION]</span> Score de santé d'entreprise: 96/100. Conseil de croissance généré pour l'expansion en Arabie Saoudite.",
      ur: "<span class='green'>[DECISION]</span> بزنس ہیلتھ اسکور: 96/100۔ سعودی عرب میں توسیع کے لیے اسٹریٹجک ایڈوائزری تیار۔"
    }
  },
  {
    title: {
      en: "Business Growth",
      ar: "نمو الأعمال",
      zh: "业务规模扩张",
      fr: "Croissance des Affaires",
      ur: "کاروبار کی ترقی"
    },
    image: "assets/GCC.png",
    log: {
      en: "<span class='gold'>[SLA]</span> Sovereign multi-tenant node replication active. Currencies sync: AED, SAR, GBP, EUR, USD.",
      ar: "<span class='gold'>[SLA]</span> تفعيل نسخ محطة التشغيل متعددة الشركات السيادية. مزامنة العملات: درهم إماراتي، ريال سعودي، جنيه إسترليني، يورو، دولار أمريكي.",
      zh: "<span class='gold'>[SLA]</span> 主权多租户云节点数据复制同步已启用。已完成结算币种实时更新对账: AED, SAR, GBP, EUR, USD。",
      fr: "<span class='gold'>[SLA]</span> Réplication de nœud multi-tenant souverain active. Devise sync: AED, SAR, GBP, EUR, USD.",
      ur: "<span class='gold'>[SLA]</span> کثیر رینٹل کلاؤڈ نوڈ ڈیٹا ریپلیکیشن فعال۔ کرنسی ہم آہنگی: AED، SAR، GBP، EUR، USD۔"
    }
  }
];

const SUCCESS_STORIES = {
  ae: {
    flag: "🇦🇪", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "construction",
    countryName: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة", fr: "Émirats Arabes Unis", zh: "阿拉伯联合酋长国", ur: "متحدہ عرب امارات" },
    companyName: { en: "Al Hamra Construction Group", ar: "مجموعة الحمراء للمقاولات", fr: "Al Hamra Construction Group", zh: "阿尔哈姆拉建设集团", ur: "الحمرا کنسٹرکشن گروپ" },
    industry: { en: "Construction & Infrastructure", ar: "البناء والبنية التحتية", fr: "Construction & Infrastructure", zh: "建筑与基础设施建设", ur: "کنسٹرکشن اور انفراسٹرکچر" },
    sizeText: { en: "Enterprise (1,200 Employees)", ar: "مؤسسة كبرى (١,٢٠٠ موظف)", fr: "Grande Entreprise (1 200 employés)", zh: "大型企业 (1,200 名员工)", ur: "بڑی کمپنی (1,200 ملازمین)" },
    businessType: { en: "Corporate Entity", ar: "كيان مؤسسي", fr: "Entité Corporative", zh: "股份制集团", ur: "کارپوریٹ ادارہ" },
    ceo: { en: "Tareq Al-Mansoori, Chief Executive", ar: "طارق المنصوري، الرئيس التنفيذي", fr: "Tareq Al-Mansoori, Directeur Général", zh: "Tareq Al-Mansoori, 首席执行官", ur: "طارق المنصوری، چیف ایگزیکٹو" },
    challenge: {
      en: "Fragmented subcontractor billing, manual payroll for 1,200+ site workers, and complex GCC VAT compliance across multiple active project sites.",
      ar: "فواتير المقاولين الفرعيين المجزأة، وحساب الرواتب اليدوي لأكثر من ١,٢٠٠ عامل موقع، وامتثال معقد لضريبة القيمة المضافة لدول الخليج عبر مواقع متعددة.",
      fr: "Facturation fragmentée des sous-traitants, gestion manuelle de la paie pour plus de 1 200 ouvriers et conformité complexe à la TVA du CCG.",
      zh: "分散的分包商账单、1,200多名现场工人的手动工资管理，以及多个活跃项目现场复杂的波斯湾GCC增值税合规性。",
      ur: "ذیلی ٹھیکیداروں کی بلنگ، 1,200 سے زائد ملازمین کی دستی تنخواہیں، اور متعدد پروجیکٹس پر پیچیدہ جی سی سی وی اے ٹی کی تعمیل۔"
    },
    solution: {
      en: "Unified cost centers for each project site, performance-linked automatic payroll generation, and automatic GCC TRN matching tax tools.",
      ar: "مراكز تكلفة موحدة لكل موقع مشروع، وتوليد تلقائي للرواتب المرتبطة بالأداء، وأدوات ضريبية تلقائية لمطابقة أرقام التسجيل الضريبي الخليجي.",
      fr: "Centres de coûts unifiés pour chaque chantier, génération automatique de paie et outils de vérification automatique du TRN fiscal.",
      zh: "为每个项目现场统一成本中心，引入与考勤绩效挂钩的工资自动工资核发模块，并集成海湾国家TRN税号自动匹配比对工具。",
      ur: "ہر پروجیکٹ کے لیے مربوط لاگت کے مراکز، کارکردگی پر مبنی خودکار تنخواہوں کا نظام، اور خودکار جی سی سی ٹیکس ٹولز۔"
    },
    testimonial: {
      en: "Hiesabati automated our labor payroll and GCC VAT billing with absolute reliability, saving our accounting team 120+ hours each month.",
      ar: "أتمت حسابتي رواتب عمالنا وفواتير ضريبة القيمة المضافة لدول الخليج بموثوقية مطلقة، مما وفر لفريق المحاسبة لدينا أكثر من ١٢٠ ساعة شهرياً.",
      fr: "Hiesabati a automatisé notre paie de main-d'œuvre et notre facturation de la TVA du CCG avec une fiabilité absolue.",
      zh: "Hiesabati 以绝对可靠的方式实现了现场人工工资与GCC增值税计税开票自动化，每月为我们的财务团队节省了120多个小时的操作时间。",
      ur: "حساباتی نے ہمارے لیبر پے رول اور جی سی سی وی اے ٹی بلنگ کو مکمل طور پر خودکار بنا دیا، جس سے ہمارے اکاؤنٹنگ ڈیپارٹمنٹ کو ماہانہ 120 گھنٹے سے زیادہ کی بچت ہوئی۔"
    },
    results: [
      { val: "42%", label: { en: "Faster Financial Closing", ar: "إغلاق مالي أسرع", fr: "Clôture Financière Plus Rapide", zh: "财务结算提速", ur: "تیز مالیاتی بندش" } },
      { val: "98%", label: { en: "Reduced Manual Work", ar: "تقليل العمل اليدوي", fr: "Travail Manuel Réduit", zh: "手动操作减少", ur: "دستی کام میں کمی" } },
      { val: "99.2%", label: { en: "GCC VAT Accuracy", ar: "دقة ضريبة القيمة المضافة", fr: "Précision TVA du CCG", zh: "增值税合规准确率", ur: "جی سی سی ٹیکس درستگی" } }
    ]
  },
  sa: {
    flag: "🇸🇦", rating: 5, years: 5, sizeCode: "enterprise", industryCode: "retail",
    countryName: { en: "Saudi Arabia", ar: "المملكة العربية السعودية", fr: "Arabie Saoudite", zh: "沙特阿拉伯", ur: "سعودی عرب" },
    companyName: { en: "Al-Riyadh Retail Outlets", ar: "منافذ الرياض للتجزئة", fr: "Al-Riyadh Retail Outlets", zh: "利雅得零售集团", ur: "الریاض ریٹیل آؤٹ لیٹس" },
    industry: { en: "Retail & E-commerce", ar: "التجزئة والتجارة الإلكترونية", fr: "Commerce de Détail & E-commerce", zh: "零售与电子商务", ur: "ریٹیل اور ای کامرس" },
    sizeText: { en: "Enterprise (2,500 Employees)", ar: "مؤسسة كبرى (٢,٥٠٠ موظف)", fr: "Grande Entreprise (2 500 employés)", zh: "大型企业 (2,500 名员工)", ur: "بڑی کمپنی (2,500 ملازمین)" },
    businessType: { en: "Subsidiary Retailer", ar: "شركة تجزئة تابعة", fr: "Détaillant Filiale", zh: "连锁零售实体", ur: "ذیلی خوردہ فروش" },
    ceo: { en: "Abdulrahman Al-Sudais, CFO", ar: "عبد الرحمن السديس، المدير المالي", fr: "Abdulrahman Al-Sudais, CFO", zh: "Abdulrahman Al-Sudais, 首席财务官", ur: "عبدالرحمن السدیس، سی ایف او" },
    challenge: {
      en: "Daily inventory reconciliation across 45 stores, legacy POS software delays, and Saudi ZATCA phase 2 e-invoicing integration challenges.",
      ar: "تسوية المخزون اليومية عبر ٤٥ متجراً، وتأخيرات برنامج نقاط البيع القديم، وتحديات دمج المرحلة الثانية من الفوترة الإلكترونية لهيئة الزكاة والضريبة والجمارك.",
      fr: "Réconciliation quotidienne des stocks dans 45 magasins, retards des systèmes POS et intégration de la phase 2 de la ZATCA saoudienne.",
      zh: "45家实体门店每日库存核对滞后、传统POS系统同步延迟，以及沙特ZATCA第二阶段电子发票接口对接和数字签名生成难题。",
      ur: "45 اسٹورز میں روزانہ انوینٹری کی تسوية، پرانے پی او ایس سافٹ ویئر کی تاخیر، اور سعودی زکوٰۃ و ٹیکس اتھارٹی فیز 2 انضمام کے مسائل۔"
    },
    solution: {
      en: "Real-time POS API ledger posting, automated multi-warehouse inventory updates, and native ZATCA Phase 2 compliance engine integration.",
      ar: "ترحيل فوري لدفاتر نقاط البيع عبر واجهة برمجة التطبيقات، وتحديثات تلقائية للمخزون في مستودعات متعددة، وتكامل أصلي مع محرك الامتثال للمرحلة الثانية لهيئة الزكاة.",
      fr: "Rapprochement en temps réel via API POS, mises à jour de stocks multi-entrepôts et conformité native ZATCA Phase 2.",
      zh: "实现POS接口实时入账与过账、多仓库库存数据动态调拨更新，以及深度集成的沙特ZATCA Phase 2合规开票与上报模块。",
      ur: "ریئل ٹائم POS API لیجر پوسٹنگ، خودکار ملٹی گودام انوینٹری اپ ڈیٹس، اور مقامی ZATCA فیز 2 تعمیل انجن۔"
    },
    testimonial: {
      en: "Direct POS ledger syncing and compliance automation saved our finance team hundreds of manual hours every week.",
      ar: "وفر المزامنة المباشرة لدفاتر نقاط البيع وأتمتة الامتثال مئات الساعات اليدوية لفريقنا المالي كل أسبوع.",
      fr: "La synchronisation directe du grand livre POS nous a fait gagner des centaines d'heures de travail par semaine.",
      zh: "收银终端POS与云端财务账簿的直接同步和全自动报税，每周为我们的财务团队节省了数百小时的手动核对工作。",
      ur: "براہ راست POS لیجر مطابقت اور تعمیل آٹومیشن نے ہماری فنانس ٹیم کو ہر ہفتے دستی کام کے سیکڑوں گھنٹے بچائے۔"
    },
    results: [
      { val: "30%", label: { en: "Operational Cost Cut", ar: "خفض التكاليف التشغيلية", fr: "Réduction des Coûts", zh: "运营成本降低", ur: "آپریشنل اخراجات میں کمی" } },
      { val: "99.8%", label: { en: "Inventory Accuracy", ar: "دقة المخزون", fr: "Précision des Stocks", zh: "库存账实相符率", ur: "انوینٹری درستگی" } },
      { val: "100%", label: { en: "ZATCA Compliance Approved", ar: "اعتماد هيئة الزكاة", fr: "Conformité ZATCA validée", zh: "沙特税局合规审核通过", ur: "ZATCA تعمیل منظور" } }
    ]
  },
  gb: {
    flag: "🇬🇧", rating: 5, years: 3, sizeCode: "mid", industryCode: "consulting",
    countryName: { en: "United Kingdom", ar: "المملكة المتحدة", fr: "Royaume-Uni", zh: "英国", ur: "برطانیہ" },
    companyName: { en: "Apex Strategy Partners", ar: "أبيكس لشركاء الاستراتيجية", fr: "Apex Strategy Partners", zh: "顶峰战略合伙人公司", ur: "ایپیکس اسٹریٹیجی پارٹنرز" },
    industry: { en: "Financial Consulting", ar: "الاستشارات المالية", fr: "Conseil Financier", zh: "金融与战略咨询", ur: "مالیاتی مشاورت" },
    sizeText: { en: "Mid-market (250 Employees)", ar: "متوسطة الحجم (٢٥٠ موظف)", fr: "Moyenne Entreprise (250 employés)", zh: "中型企业 (250 名员工)", ur: "درمیانے درجے کی کمپنی (250 ملازمین)" },
    businessType: { en: "Partnership Firm", ar: "شركة تضامن", fr: "Société de Personnes", zh: "合伙制咨询公司", ur: "شراکت دار فرم" },
    ceo: { en: "Sarah Jenkins, Managing Director", ar: "سارة جينكينز، العضو المنتدب", fr: "Sarah Jenkins, Directrice", zh: "Sarah Jenkins, 董事总经理", ur: "سارہ جینکنز، منیجنگ ڈائریکٹر" },
    challenge: {
      en: "Multi-currency client billing, cross-border VAT reconciliation, and predicting capital cash runway for dynamic scaling decisions.",
      ar: "فواتير العملاء متعددة العملات، وتسوية ضريبة القيمة المضافة عبر الحدود، والتنبؤ بمدرج السيولة لاتخاذ قرارات التوسع الديناميكي.",
      fr: "Facturation multi-devises, réconciliation TVA transfrontalière et prévision des flux de trésorerie.",
      zh: "多币种客户开票计费、跨境增值税退税与抵扣对账，以及动态扩张决策所需的资本现金流生命周期预测。",
      ur: "ملٹی کرنسی کلائنٹ بلنگ، سرحد پار VAT مفاہمت، اور متحرک توسیع کے لیے کیپٹل کیش رن وے کی پیشن گوئی۔"
    },
    solution: {
      en: "Automatic multi-currency journal posting, localized VAT compliance grids, and Aria AI forecasting integration.",
      ar: "ترحيل تلقائي للدفاتر متعددة العملات، وشبكات امتثال ضريبة القيمة المضافة المحلية، وتكامل توقعات الذكاء الاصطناعي لآريا.",
      fr: "Écritures multi-devises automatisées, grilles fiscales locales et prévisions Aria AI.",
      zh: "外币交易总账自动汇兑损益转换记账、英国本土税局兼容的税务合规系统，以及集成Aria人工智能预测决策沙盘。",
      ur: "خودکار ملٹی کرنسی جرنل پوسٹنگ، مقامی VAT تعمیل، اور آریا AI پیشن گوئی۔"
    },
    testimonial: {
      en: "Aria's predictive cash flow runway was critical during our European scaling phase. Accurate and reliable.",
      ar: "كان مدرج التدفق النقدي التنبؤي لآريا حاسماً خلال مرحلة توسعنا الأوروبي. دقيق وموثوق.",
      fr: "Les prévisions Aria AI de trésorerie ont été cruciales pour notre expansion.",
      zh: "Aria 自动生成的预测性现金流分析，在我们在欧洲进行业务扩张的过程中起到了至关重要的风控支撑作用。非常精准。",
      ur: "آریا کی پیشن گوئی پر مبنی کیش فلو رن وے ہماری توسیع کے مرحلے کے دوران اہم تھا۔ درست اور قابل اعتماد۔"
    },
    results: [
      { val: "95%", label: { en: "Forecast Accuracy", ar: "دقة التوقعات", fr: "Précision des Prévisions", zh: "现金流预测吻合度", ur: "ملازمت کی پیشن گوئی" } },
      { val: "24h", label: { en: "Multi-Currency Close", ar: "إغلاق مالي متعدد العملات", fr: "Clôture Multi-devises", zh: "多币种月度结账耗时", ur: "ملٹی کرنسی بندش" } },
      { val: "+38%", label: { en: "EBITDA Insights", ar: "رؤى الأرباح التشغيلية", fr: "Insights EBITDA", zh: "运营息税折旧前利润增长", ur: "EBITDA بصیرت" } }
    ]
  },
  de: {
    flag: "🇩🇪", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "manufacturing",
    countryName: { en: "Germany", ar: "ألمانيا", fr: "Allemagne", zh: "德国", ur: "جرمنی" },
    companyName: { en: "München Precision Engineering", ar: "ميونخ للهندسة الدقيقة", fr: "München Precision Engineering", zh: "慕尼黑精工制造有限责任公司", ur: "میونخ پرسیجن انجینئرنگ" },
    industry: { en: "Industrial Manufacturing", ar: "التصنيع الصناعي", fr: "Fabrication Industrielle", zh: "工业精密制造", ur: "صنعتی مینوفیکچرنگ" },
    sizeText: { en: "Enterprise (850 Employees)", ar: "مؤسسة كبرى (٨٥٠ موظف)", fr: "Grande Entreprise (850 employés)", zh: "大型企业 (850 名员工)", ur: "بڑی کمپنی (850 ملازمین)" },
    businessType: { en: "GmbH Enterprise", ar: "شركة ذات مسؤولية محدودة (GmbH)", fr: "Entreprise GmbH", zh: "工业制造GmbH集团", ur: "GmbH کارپوریٹ" },
    ceo: { en: "Dieter Schmidt, Operations Director", ar: "ديتر شميت، مدير العمليات", fr: "Dieter Schmidt, Directeur des Opérations", zh: "Dieter Schmidt, 运营总监", ur: "ڈیٹر شمیٹ، آپریشنز ڈائریکٹر" },
    challenge: {
      en: "Complex asset depreciation schedules, machine hour cost allocation, and strict IFRS compliance audits.",
      ar: "جداول استهلاك الأصول المعقدة، وتخصيص تكلفة ساعات الآلة، وتدقيقات امتثال صارمة للمعايير الدولية لإعداد التقارير المالية (IFRS).",
      fr: "Amortissement d'actifs complexes, imputation analytique des coûts machines et audits de conformité IFRS stricts.",
      zh: "复杂的重型制造设备折旧分类账单计算、机器工时制造费用合理分摊分配，以及严苛的国际财务报告准则IFRS审计标准。",
      ur: "پیچیدہ اثاثوں کی فرسودگی، مشین کے گھنٹوں کی لاگت کی تقسیم، اور سخت IFRS تعمیل آڈٹ۔"
    },
    solution: {
      en: "Automated fixed asset depreciation manager, cost center matrices, and multi-tenant ledger isolation.",
      ar: "مدير استهلاك الأصول الثابتة المؤتمت، ومصفوفات مراكز التكلفة، وعزل دفاتر الحسابات متعددة المستأجرين.",
      fr: "Gestionnaire automatique d'amortissement, matrices de centres de coûts et isolation des livres financiers.",
      zh: "部署固资折旧自动化管理系统、建立精细化车间工段成本中心矩阵，以及实施多租户账簿安全隔离。",
      ur: "خودکار مقررہ اثاثوں کی فرسودگی کا مینیجر، لاگت کے مرکز کا میٹرکس، اور ملٹی ٹیننٹ لیجر کی علیحدگی۔"
    },
    testimonial: {
      en: "Our IFRS audits have never been smoother. Zero compliance gaps found. Exceptional design philosophy.",
      ar: "لم تكن عمليات تدقيق المعايير الدولية لإعداد التقارير المالية لدينا أكثر سلاسة من أي وقت مضى. لم يتم العثور على فجوات امتثال.",
      fr: "Nos audits IFRS n'ont jamais été aussi simples. Zéro écart de conformité relevé.",
      zh: "我们在引入该系统后进行的IFRS国际财务审计无比顺畅，审计师未发现任何合规性漏洞。设计哲学极其优异。",
      ur: "ہمارے IFRS آڈٹ کبھی بھی اتنے آسان نہیں تھے۔ کوئی تعمیل کا فرق نہیں ملا۔"
    },
    results: [
      { val: "100%", label: { en: "IFRS Audit Pass", ar: "اجتياز تدقيق المعايير الدولية", fr: "Réussite Audit IFRS", zh: "国际财务审计通过率", ur: "IFRS آڈٹ پاس" } },
      { val: "4.8★", label: { en: "Compliance Rating", ar: "تقييم الامتثال", fr: "Score de Conformité", zh: "合规等级评分", ur: "تعمیل کی درجہ بندی" } },
      { val: "-18%", label: { en: "Operational Waste", ar: "تقليل الهدر التشغيلي", fr: "Gaspillage Réduit", zh: "车间运营损耗降低", ur: "آپریشنل فضلہ میں کمی" } }
    ]
  },
  fr: {
    flag: "🇫🇷", rating: 5, years: 3, sizeCode: "mid", industryCode: "hospitality",
    countryName: { en: "France", ar: "فرنسا", fr: "France", zh: "法国", ur: "فرانس" },
    companyName: { en: "Le Parisien Resorts", ar: "منتجعات لو باريسيان", fr: "Le Parisien Resorts", zh: "巴黎人度假酒店集团", ur: "لو پیرسین ریزورٹس" },
    industry: { en: "Hospitality & Leisure", ar: "الضيافة والترفيه", fr: "Hôtellerie & Loisirs", zh: "酒店餐饮与旅游休闲", ur: "مہمان نوازی اور تفریح" },
    sizeText: { en: "Mid-market (400 Employees)", ar: "متوسطة الحجم (٤٠٠ موظف)", fr: "Moyenne Entreprise (400 employés)", zh: "中型企业 (400 名员工)", ur: "درمیانے درجے کی کمپنی (400 ملازمین)" },
    businessType: { en: "SA Hospitality Group", ar: "مجموعة ضيافة مساهمة (SA)", fr: "Groupe Hôtelier SA", zh: "SA连锁酒店实体", ur: "SA مہمان نوازی گروپ" },
    ceo: { en: "Jean-Pierre Blanc, General Manager", ar: "جان بيير بلان، المدير العام", fr: "Jean-Pierre Blanc, Directeur", zh: "Jean-Pierre Blanc, 总经理", ur: "ژاں پیئر بلانک، جنرل مینیجر" },
    challenge: {
      en: "Managing shift-linked payroll differentials, multi-site staff expense claims, and seasonal cost center fluctuations.",
      ar: "إدارة فروق رواتب الموظفين المرتبطة بالنوبات، ومطالبات نفقات الموظفين متعددة المواقع، وتقلبات مراكز التكلفة الموسمية.",
      fr: "Gestion des écarts de paie liés aux shifts, notes de frais multi-sites et fluctuations saisonnières.",
      zh: "管理与班次时间挂钩的工资差异、多门店员工日常费用报销流程琐碎，以及淡旺季不同酒店成本中心的剧烈波动。",
      ur: "شفٹ پر مبنی تنخواہوں کا انتظام، متعدد مقامات پر عملے کے اخراجات کے دعوے، اور موسمی لاگت کے مرکز کے مسائل۔"
    },
    solution: {
      en: "Integrated HR shift-to-payroll link, mobile receipt upload scanner, and automated seasonal cost allocation.",
      ar: "ربط متكامل للموارد البشرية بين الورديات والرواتب، وماسح ضوئي لرفع الإيصالات عبر الهاتف، وتخصيص تلقائي للتكاليف الموسمية.",
      fr: "Lien paie-shifts intégré, scanner de reçus sur mobile et allocation saisonnière automatisée.",
      zh: "打通人力资源班次考勤与工资核发数据链、引入手机端发票契约扫描智能解析工具，以及部署自动应付账款分摊分配算法。",
      ur: "مربوط ایچ آر شفٹ ٹو پے رول لنک، موبائل رسید اپ لوڈ اسکینر، اور خودکار موسمی لاگت کی تقسیم۔"
    },
    testimonial: {
      en: "Hiesabati automated leaves, payroll, and departmental costing under one simple and beautifully structured dashboard.",
      ar: "أتمت حسابتي الإجازات والرواتب وتكاليف الأقسام تحت لوحة تحكم واحدة بسيطة ومنظمة بشكل جميل.",
      fr: "Hiesabati a automatisé les congés, la paie et la comptabilité analytique sur un tableau de bord élégant.",
      zh: "Hiesabati 将员工休假审批、绩效工资发放和部门运营成本核算完全整合到了一个简洁、精美的中央数据大屏中。",
      ur: "حساباتی نے ایک آسان اور خوبصورتی سے ترتیب دیئے گئے ڈیش بورڈ کے تحت چھٹیاں، پے رول، اور شعبہ جاتی لاگت کو خودکار بنا دیا۔"
    },
    results: [
      { val: "92%", label: { en: "Employee Satisfaction", ar: "رضا الموظفين", fr: "Satisfaction Employés", zh: "员工系统满意度", ur: "ملازمین کا اطمینان" } },
      { val: "-22%", label: { en: "Expense Leakage Checked", ar: "الحد من تسرب النفقات", fr: "Pertes de Frais Évitées", zh: "报销漏洞和虚报杜绝", ur: "اخراجات کے رساو کی روک تھام" } },
      { val: "2h", label: { en: "Shift Audit Speed", ar: "سرعة تدقيق الورديات", fr: "Vitesse Audit des Shifts", zh: "排班考勤核对耗时", ur: "شفٹ آڈٹ کی رفتار" } }
    ]
  },
  us: {
    flag: "🇺🇸", rating: 5, years: 2, sizeCode: "growth", industryCode: "technology",
    countryName: { en: "United States", ar: "الولايات المتحدة الأمريكية", fr: "États-Unis", zh: "美国", ur: "ریاستہائے متحدہ امریکہ" },
    companyName: { en: "Silicon AI Technologies", ar: "سيليكون لتقنيات الذكاء الاصطناعي", fr: "Silicon AI Technologies", zh: "硅谷AI科技创新股份有限公司", ur: "سلیکون اے آئی ٹیکنالوجیز" },
    industry: { en: "Technology & Software", ar: "التكنولوجيا والبرمجيات", fr: "Technologie & Logiciels", zh: "云计算与人工智能软件", ur: "ٹیکنالوجی اور سافٹ ویئر" },
    sizeText: { en: "Growth (80 Employees)", ar: "شركة متنامية (٨٠ موظف)", fr: "Jeune Pousse (80 employés)", zh: "高成长企业 (80 名员工)", ur: "ترقی کرتی کمپنی (80 ملازمین)" },
    businessType: { en: "Delaware C-Corp", ar: "شركة C-Corp في ديلاوير", fr: "Delaware C-Corp", zh: "特拉华州C-Corp", ur: "ڈیلاویئر C-Corp" },
    ceo: { en: "Marc Andreessen, Co-Founder", ar: "مارك أندريسن، المؤسس المشارك", fr: "Marc Andreessen, Co-fondateur", zh: "Marc Andreessen, 联合创始人", ur: "مارک اینڈریسن، شریک بانی" },
    challenge: {
      en: "Multi-subsidiary intercompany bills, rapid capitalization of R&D assets, and US GAAP to IFRS conversions.",
      ar: "الفواتير المتبادلة بين الشركات التابعة المتعددة، ورسملة أصول البحث والتطوير السريعة، وتحويلات مبادئ المحاسبة المقبولة عموماً في أمريكا (US GAAP) إلى المعايير الدولية.",
      fr: "Factures intersociétés multi-filiales, capitalisation rapide de la R&D et conversions GAAP/IFRS.",
      zh: "跨子公司内部关联交易对账与轧差、高强度研发费用资产化确权计算，以及美国GAAP会计准则与国际IFRS准则的转换报表生成。",
      ur: "متعدد ذیلی اداروں کے درمیان بلنگ، R&D اثاثوں کا تیزی سے سرمایہ کاری، اور US GAAP سے IFRS میں تبدیلی۔"
    },
    solution: {
      en: "Automated intercompany ledger clearing, R&D asset capitalization module, and dual-basis accounting standards reporting.",
      ar: "مقاصة تلقائية لدفاتر الشركات الزميلة، ووحدة رسملة أصول البحث والتطوير، وتقارير المعايير المحاسبية المزدوجة.",
      fr: "Compensation intersociétés automatique, module de capitalisation R&D et reporting double standard.",
      zh: "部署内部往来总账自动轧差清理功能、固资模块集成研发项目资产化记账工具，以及支持一键输出双准则财务比照报告。",
      ur: "خودکار انٹر کمپنی لیجر کلیئرنگ، R&D اثاثوں کا سرمایہ کاری ماڈیول، اور دوہرے مالیاتی معیار کی رپورٹنگ۔"
    },
    testimonial: {
      en: "We transitioned to US GAAP and resolved multi-subsidiary billing with Hiesabati in days. Dynamic decision analytics.",
      ar: "انتقلنا إلى مبادئ المحاسبة المقبولة عموماً في أمريكا وحللنا الفواتير بين الشركات مع حسابتي في أيام معدودة.",
      fr: "Nous avons migré vers les US GAAP et résolu la facturation inter-filiales en quelques jours.",
      zh: "我们在短短几天内就完成了向US GAAP美国公认会计准则的平稳过渡，并一举解决了子集团交叉持股对账的难题。分析大屏十分强悍。",
      ur: "ہم نے Hiesabati کے ساتھ چند دنوں میں ہی US GAAP میں منتقلی مکمل کی اور ذیلی اداروں کی بلنگ کا مسئلہ حل کیا۔"
    },
    results: [
      { val: "60%", label: { en: "Faster Financial Reporting", ar: "تقارير مالية أسرع", fr: "Reporting Financier Plus Rapide", zh: "月度财务报表输出提速", ur: "تیز مالیاتی رپورٹنگ" } },
      { val: "$4.2M", label: { en: "R&D Capitalization Synced", ar: "رسملة البحث والتطوير المتزامنة", fr: "R&D Capitalisée Synchronisée", zh: "研发资产化账目自动对齐", ur: "R&D سرمایہ کاری ہم آہنگ" } },
      { val: "Zero", label: { en: "Dual GAAP Discrepancies", ar: "فروقات محاسبية صفرية", fr: "Zéro Écart Double GAAP", zh: "双准则转换对账差错", ur: "صفر دوہری GAAP تضادات" } }
    ]
  },
  sg: {
    flag: "🇸🇬", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "logistics",
    countryName: { en: "Singapore", ar: "سنغافورة", fr: "Singapour", zh: "新加坡", ur: "سنگاپور" },
    companyName: { en: "Merlion Cargo Services", ar: "ميرليون لخدمات الشحن", fr: "Merlion Cargo Services", zh: "鱼尾狮货运物流集团", ur: "مرلیون کارگو سروسز" },
    industry: { en: "Logistics & Transport", ar: "اللوجستيات والنقل", fr: "Logistique & Transport", zh: "国际物流与多式联运", ur: "لوجسٹکس اور ٹرانسپورٹ" },
    sizeText: { en: "Enterprise (1,500 Employees)", ar: "مؤسسة كبرى (١,٥٠٠ موظف)", fr: "Grande Entreprise (1 500 employés)", zh: "大型企业 (1,500 名员工)", ur: "بڑی کمپنی (1,500 ملازمین)" },
    businessType: { en: "Pte Ltd Corporation", ar: "شركة خاصة محدودة (Pte Ltd)", fr: "Corporation Pte Ltd", zh: "新加坡Pte Ltd合资企业", ur: "Pte Ltd کارپوریشن" },
    ceo: { en: "Lim Wei Xiong, Logistics Controller", ar: "ليم وي شيونغ، مراقب العمليات اللوجستية", fr: "Lim Wei Xiong, Contrôleur Logistique", zh: "Lim Wei Xiong, 物流与风控总监", ur: "لم وی ژونگ، لوجسٹکس کنٹرولر" },
    challenge: {
      en: "Tracking shipping inventory across multiple maritime warehouses, customs tax compliance calculations, and multi-currency carrier payouts.",
      ar: "تتبع مخزون الشحن عبر مستودعات بحرية متعددة، وحسابات الامتثال لجمارك الضرائب، ومدفوعات الناقلين متعددة العملات.",
      fr: "Suivi des stocks dans plusieurs entrepôts maritimes, calculs de taxes douanières et paiements multi-devises.",
      zh: "监控分布在各大海运港口保税仓库中的物流集装箱库存、计算极为复杂的口岸关税与进出口增值税，以及给各国承运商结付多币种运费款项。",
      ur: "متعدد سمندری گوداموں میں سامان کی ترسیل کی ٹریکنگ، کسٹم ٹیکس کی تعمیل کا حساب، اور ملٹی کرنسی ادائیگی۔"
    },
    solution: {
      en: "Dynamic inventory transfer tracking sheets, automatic duty calculation modules, and integrated multi-currency vendor settlement registers.",
      ar: "أوراق تتبع ديناميكية لنقل المخزون، ووحدات تلقائية لحساب الرسوم، وسجلات متكاملة لتسويات الموردين متعددة العملات.",
      fr: "Suivi dynamique des transferts de stocks, calcul automatique des taxes douanières et règlement multi-devises.",
      zh: "部署动态跨仓库库存转移划拨电子台账、嵌入自动进出口关税计税逻辑，以及建立面向境外分销商和承运商的多币种统一结算簿。",
      ur: "متحرک انوینٹری ٹرانسفر ٹریکنگ، خودکار ٹیکس حساب کتاب، اور ملٹی کرنسی سپلائر تصفیہ۔"
    },
    testimonial: {
      en: "Managing cross-border custom declarations and multi-currency registers is now fully automated. Superb operational support.",
      ar: "أصبحت إدارة التصاريح الجمركية عبر الحدود وسجلات العملات المتعددة مؤتمتة بالكامل الآن. دعم تشغيلي رائع.",
      fr: "La gestion des déclarations douanières et des devises est désormais entièrement automatisée.",
      zh: "以前头疼的跨境报关税务核对和多国货币记账现在完全实现了无人值守全自动化，系统性能卓越，运维支持非常到位。",
      ur: "سرحد پار کسٹم ڈیکلریشن اور ملٹی کرنسی رجسٹروں کا انتظام اب مکمل طور پر خودکار ہے۔"
    },
    results: [
      { val: "95%", label: { en: "Warehouse Efficiency", ar: "كفاءة المستودعات", fr: "Efficacité Entrepôts", zh: "仓库收发货周转率提升", ur: "گودام کی کارکردگی" } },
      { val: "Instant", label: { en: "Multi-Currency Clear", ar: "تسوية فورية للعملات", fr: "Apurement Devise Instantané", zh: "跨境汇兑清算耗时", ur: "فوری ملٹی کرنسی کلئیرنس" } },
      { val: "+28%", label: { en: "Asset Turn Velocity", ar: "سرعة دوران الأصول", fr: "Vitesse Rotation Actifs", zh: "物流集装箱资产周转速度", ur: "اثاثوں کے گھومنے کی رفتار" } }
    ]
  },
  ca: {
    flag: "🇨🇦", rating: 5, years: 5, sizeCode: "mid", industryCode: "healthcare",
    countryName: { en: "Canada", ar: "كندا", fr: "Canada", zh: "加拿大", ur: "کینیڈا" },
    companyName: { en: "Maple Health Services", ar: "خدمات مابل الصحية", fr: "Maple Health Services", zh: "枫叶医疗健康服务集团", ur: "میپل ہیلتھ سروسز" },
    industry: { en: "Healthcare & Clinics", ar: "الرعاية الصحية والعيادات", fr: "Santé & Cliniques", zh: "医疗服务与连锁诊所", ur: "صحت عامہ اور کلینکس" },
    sizeText: { en: "Mid-market (350 Employees)", ar: "متوسطة الحجم (٣٥٠ موظف)", fr: "Moyenne Entreprise (350 employés)", zh: "中型企业 (350 名员工)", ur: "درمیانے درجے کی کمپنی (350 ملازمین)" },
    businessType: { en: "Healthcare Provider", ar: "مزود رعاية صحية", fr: "Prestataire de Santé", zh: "连锁医疗机构", ur: "صحت کی دیکھ بھال کا ادارہ" },
    ceo: { en: "Elizabeth Ross, Chief Administrator", ar: "إليزابيث روس، رئيسة الإدارة", fr: "Elizabeth Ross, Administratrice", zh: "Elizabeth Ross, 首席行政运营官", ur: "البتھ راس، چیف ایڈمنسٹریٹر" },
    challenge: {
      en: "Handling complex nursing shifts, overtime calculations, medical supply tracking, and local provincial compliance reports.",
      ar: "التعامل مع نوبات التمريض المعقدة، وحسابات العمل الإضافي، وتتبع المستلزمات الطبية، وتقارير الامتثال الإقليمية المحلية.",
      fr: "Gestion des shifts d'infirmiers, heures supplémentaires, suivi des fournitures médicales et conformité provinciale.",
      zh: "处理复杂繁琐的医护人员值班与换班、加班费合规精确计算、昂贵医疗耗材全生命周期追溯，以及符合加拿大各省卫生局规范的合规审计表单生成。",
      ur: "نرسنگ شفٹوں کا انتظام، اوور ٹائم کا حساب، طبی سامان کی ٹریکنگ، اور صوبائی تعمیل کی رپورٹنگ۔"
    },
    solution: {
      en: "Native shifts management system, automated overtime payroll trigger, and localized tax framework setups.",
      ar: "نظام إدارة ورديات أصلي، ومشغل تلقائي لكشوف رواتب العمل الإضافي، وإعدادات إطار ضريبي محلي.",
      fr: "Système natif de gestion des shifts, calcul automatique des heures supplémentaires et cadre fiscal local.",
      zh: "配置原生医疗班次调度排班系统、引入加班工时工资自动结算与核发模块，并集成加拿大分省税务申报接口。",
      ur: "مقامی شفٹ مینجمنٹ سسٹم، اوور ٹائم پے رول کا خودکار نظام، اور مقامی ٹیکس فریم ورک۔"
    },
    testimonial: {
      en: "We manage clinical staff shifts, local payroll, and compliance reporting in the same secure dashboard. Excellent interface.",
      ar: "ندير نوبات الطاقم الطبي، وكشوف الرواتب المحلية، وتقارير الامتثال في نفس لوحة التحكم الآمنة. واجهة ممتازة.",
      fr: "Nous gérons les plannings, la paie locale et les rapports de conformité sur le même dashboard sécurisé.",
      zh: "我们成功在同一个高安全等级的控制台中统一管理了各家医院护士排班、本地员工薪酬发放及卫生局监管合规报告，系统界面美轮美奂。",
      ur: "ہم عملے کی شفٹوں، مقامی پے رول، اور تعمیل کی رپورٹنگ کو ایک ہی ڈیش بورڈ میں منظم کرتے ہیں۔"
    },
    results: [
      { val: "-22%", label: { en: "Operational Cost Reduction", ar: "تقليل التكاليف التشغيلية", fr: "Coût Opérationnel Réduit", zh: "日常行政费用削减", ur: "آپریشنل اخراجات میں کمی" } },
      { val: "99%", label: { en: "Scheduling Accuracy", ar: "دقة جدولة المواعيد", fr: "Précision des Plannings", zh: "医护排班准确率", ur: "شیڈولنگ کی درستگی" } },
      { val: "Zero", label: { en: "Compliance Breaches", ar: "مخالفات امتثال صفرية", fr: "Zéro Infraction Légale", zh: "违规和劳动争议发生率", ur: "صفر تعمیلی خلاف ورزیاں" } }
    ]
  },
  au: {
    flag: "🇦🇺", rating: 5, years: 3, sizeCode: "growth", industryCode: "education",
    countryName: { en: "Australia", ar: "أستراليا", fr: "Australie", zh: "澳大利亚", ur: "آسٹریلیا" },
    companyName: { en: "Sydney Academic Institute", ar: "معهد سيدني الأكاديمي", fr: "Sydney Academic Institute", zh: "悉尼学术教育集团", ur: "سڈنی اکیڈمک انسٹی ٹیوٹ" },
    industry: { en: "Education & Academy", ar: "التعليم والأكاديمية", fr: "Éducation & Académies", zh: "高等教育与职业培训", ur: "تعلیم اور اکیڈمی" },
    sizeText: { en: "Growth (90 Employees)", ar: "شركة متنامية (٩٠ موظف)", fr: "Jeune Pousse (90 employés)", zh: "高成长机构 (90 名员工)", ur: "ترقی کرتی کمپنی (90 ملازمین)" },
    businessType: { en: "Educational Trust", ar: "صندوق تعليمي", fr: "Fiducie Éducative", zh: "教育信托与非营利学校", ur: "تعلیمی ٹرسٹ" },
    ceo: { en: "Alistair Cook, Operations Head", ar: "أليستر كوك، رئيس العمليات", fr: "Alistair Cook, Directeur Opérations", zh: "Alistair Cook, 运营事务负责人", ur: "ایلسٹر کک، آپریشنز ہیڈ" },
    challenge: {
      en: "Tracking student tuition payments, managing multi-department teacher payrolls, and seasonal enrollment audit trails.",
      ar: "تتبع دفعات الرسوم الدراسية للطلاب، وإدارة كشوف رواتب المعلمين متعددة الأقسام، ومسارات تدقيق التسجيل الموسمي.",
      fr: "Suivi des frais de scolarité, gestion des paies enseignants et pistes d'audit d'inscriptions.",
      zh: "跟踪管理学费的分期结付与逾期催收、处理不同院系教师极其复杂的教学工时工资发放，以及招生季学籍审计跟踪。",
      ur: "طلبہ کی فیسوں کی ٹریکنگ، متعدد شعبوں کے اساتذہ کی تنخواہوں کا انتظام، اور موسمی داخلوں کا آڈٹ ٹریل۔"
    },
    solution: {
      en: "Smart automated invoicing schedules, departmental cost center assignments, and digital student ledger auditing.",
      ar: "جداول فوترة ذكية مؤتمتة، وتعيين مراكز تكلفة لكل قسم، وتدقيق رقمي لدفاتر الطلاب.",
      fr: "Échéanciers de facturation intelligents, affectation de centres de coûts et audits de grands livres.",
      zh: "引入学费账期自动提醒与智能催收机制、为各教研室分配独立的成本中心，并对学生财务账户进行数字化自动对账审计。",
      ur: "سمارٹ خودکار انوائسنگ، شعبہ جاتی لاگت کے مراکز، اور ڈیجیٹل اسٹوڈنٹ لیجر آڈٹ۔"
    },
    testimonial: {
      en: "Hiesabati's smart billing schedules and audit trail logs eliminated tuition accounting disputes entirely.",
      ar: "ألغت جداول الفوترة الذكية وسجلات مسار التدقيق من حسابتي النزاعات المحاسبية للرسوم تماماً.",
      fr: "Les échéanciers de Hiesabati ont complètement éliminé les litiges comptables.",
      zh: "Hiesabati 提供的智能开票提醒机制和系统审计日志，彻底杜绝了学生缴费退费和财务账目的争议纠纷。",
      ur: "حساباتی کے سمارٹ بلنگ شیڈول اور آڈٹ ٹریل لاگز نے ٹیوشن اکاؤنٹنگ کے تنازعات کو مکمل طور پر ختم کر دیا۔"
    },
    results: [
      { val: "+34%", label: { en: "Invoicing Speed", ar: "سرعة الفوترة", fr: "Vitesse de Facturation", zh: "学费结收速度提升", ur: "فوترة کی رفتار" } },
      { val: "100%", label: { en: "Audit Trail Approved", ar: "مسار التدقيق المعتمد", fr: "Pistes d'Audit validées", zh: "审计可追溯度", ur: "آڈٹ ٹریل منظور" } },
      { val: "Zero", label: { en: "Billing Disputes", ar: "نزاعات الفوترة الصفرية", fr: "Zéro Litige Facturation", zh: "财务对账争议纠纷", ur: "صفر بلنگ تنازعات" } }
    ]
  },
  jp: {
    flag: "🇯🇵", rating: 5, years: 5, sizeCode: "enterprise", industryCode: "distribution",
    countryName: { en: "Japan", ar: "اليابان", fr: "Japon", zh: "日本", ur: "جاپان" },
    companyName: { en: "Tokyo Logistics Corp", ar: "شركة طوكيو للوجستيات", fr: "Tokyo Logistics Corp", zh: "东京多式联运商贸物流株式会社", ur: "ٹوکیو لاجسٹکس کارپ" },
    industry: { en: "Wholesale & Distribution", ar: "الجملة والتوزيع", fr: "Commerce de Gros & Distribution", zh: "大宗商品批发与分销物流", ur: "تھوک فروشی اور تقسیم" },
    sizeText: { en: "Enterprise (600 Employees)", ar: "مؤسسة كبرى (٦٠٠ موظف)", fr: "Grande Entreprise (600 employés)", zh: "大型企业 (600 名员工)", ur: "بڑی کمپنی (600 ملازمین)" },
    businessType: { en: "Kabushiki Gaisha", ar: "كابوشيكي غايشا (شركة مساهمة يابانية)", fr: "Kabushiki Gaisha", zh: "株式会社", ur: "کابوشیکی گیشا" },
    ceo: { en: "Kenji Sato, General Manager", ar: "كينجي ساتو، المدير العام", fr: "Kenji Sato, Directeur", zh: "佐藤健二, 常务总经理", ur: "کینجی ستو، جنرل مینیجر" },
    challenge: {
      en: "Multi-warehouse stock movements across 12 ports, real-time procurement approvals, and strict Japanese Tax compliance regulations.",
      ar: "حركات المخزون في مستودعات متعددة عبر ١٢ ميناء، وموافقات الشراء في الوقت الفعلي، ولوائح الامتثال الضريبي اليابانية الصارمة.",
      fr: "Mouvements de stocks inter-entrepôts sur 12 ports, approbations d'achats et fiscalité japonaise.",
      zh: "横跨日本12个核心港口的多个大型转运保税仓库的库存调拨、大额采购多级实时审批流程，以及符合日本电子账簿保存法规范的合规性。",
      ur: "12 بندرگاہوں پر ملٹی گودام اسٹاک کی نقل و حرکت، ریئل ٹائم خریداری کی منظوری، اور جاپانی ٹیکس قوانین۔"
    },
    solution: {
      en: "Automated warehouse transfers register, cloud multi-stage procurement approvals, and Japanese local compliance updates.",
      ar: "سجل نقل المخزون التلقائي بين المستودعات، وموافقات الشراء السحابية متعددة المراحل، وتحديثات الامتثال اليابانية المحلية.",
      fr: "Régistre de transferts automatisé, workflows d'approbations d'achats et conformité japonaise.",
      zh: "部署自动化跨港口仓库调拨电子台账系统、开发云端多级采购链审批工作流，并确保系统符合日本最新的电子账簿保存法规范。",
      ur: "خودکار گودام ٹرانسفر رجسٹر، کلاؤڈ ملٹی اسٹیج خریداری کی منظوری، اور جاپانی مقامی تعمیل کی اپ ڈیٹس۔"
    },
    testimonial: {
      en: "Multi-warehouse inventory transfer and automated procurement flows are incredibly robust. Highly reliable platform.",
      ar: "تعد عمليات نقل المخزون بين مستودعات متعددة وتدفقات المشتريات المؤتمتة قوية بشكل لا يصدق. منصة موثوقة للغاية.",
      fr: "Les transferts de stocks et les flux d'achats sont robustes. Plateforme fiable.",
      zh: "该系统的多仓库自动拨货和智能化采购审批链极具弹性和可靠性，帮我们在跨境分销和履约上打下了扎实基础。赞！",
      ur: "ملٹی گودام انوینٹری کی منتقلی اور خودکار خریداری کا بہاؤ انتہائی مضبوط ہے۔"
    },
    results: [
      { val: "99.5%", label: { en: "Inventory Accuracy", ar: "دقة تتبع المخزون", fr: "Précision des Stocks", zh: "仓库账实一致率", ur: "انوینٹری درستگی" } },
      { val: "-14%", label: { en: "Procurement Lead Time", ar: "تقليل زمن التوريد", fr: "Délai Approvisionnement", zh: "采购审批与采购周期缩短", ur: "خریداری کے وقت میں کمی" } },
      { val: "Zero", label: { en: "Audit Gaps", ar: "فجوات التدقيق الصفرية", fr: "Zéro Écart Audit", zh: "国税厅税务审计合规漏洞", ur: "صفر آڈٹ فرق" } }
    ]
  }
};

let currentJourneyStep = 0;
function selectJourneyStep(index) {
  currentJourneyStep = index;
  const nodes = document.querySelectorAll(".journey-step-node");
  nodes.forEach((node, i) => {
    node.classList.toggle("active", i === index);
  });

  const step = JOURNEY_STEPS[index];
  if (!step) return;

  const titleEl = document.getElementById("journeySimTitle");
  const imgEl = document.getElementById("journeySimImg");
  const logsEl = document.getElementById("journeySimLogs");

  const lang = document.documentElement.lang || 'en';
  const stepTitle = (step.title[lang] || step.title.en || step.title).toUpperCase();
  const stepLog = step.log[lang] || step.log.en || step.log;

  if (titleEl) titleEl.textContent = `HIESABATI SIMULATOR // STEP ${index + 1} // ${stepTitle}`;
  if (imgEl) {
    imgEl.style.opacity = 0.3;
    setTimeout(() => {
      imgEl.src = step.image;
      imgEl.style.opacity = 1;
    }, 100);
  }
  if (logsEl) {
    logsEl.innerHTML = `<div class="log-row">${stepLog}</div>`;
  }
}

let activeSuccessCountry = 'ae';
function filterSuccessCases() {
  const country = document.getElementById("successFilterCountry").value;
  const industry = document.getElementById("successFilterIndustry").value;
  const size = document.getElementById("successFilterSize").value;

  let matchCountry = 'ae';
  for (let key in SUCCESS_STORIES) {
    const item = SUCCESS_STORIES[key];
    const countryMatch = (country === 'all' || key === country);
    const industryMatch = (industry === 'all' || item.industryCode === industry);
    const sizeMatch = (size === 'all' || item.sizeCode === size);

    if (countryMatch && industryMatch && sizeMatch) {
      matchCountry = key;
      break;
    }
  }
  selectSuccessCase(matchCountry);
}

function selectSuccessCase(country) {
  activeSuccessCountry = country;
  document.querySelectorAll(".success-map-node").forEach(node => {
    node.classList.toggle("active", node.getAttribute("data-country") === country);
  });

  const story = SUCCESS_STORIES[country];
  if (!story) return;

  const compName = story.companyName[currentLanguage] || story.companyName.en;
  const challenge = story.challenge[currentLanguage] || story.challenge.en;
  const solution = story.solution[currentLanguage] || story.solution.en;
  const testimonial = story.testimonial[currentLanguage] || story.testimonial.en;
  const results = story.results;
  const industry = story.industry[currentLanguage] || story.industry.en;
  const sizeText = story.sizeText[currentLanguage] || story.sizeText.en;
  const businessType = story.businessType[currentLanguage] || story.businessType.en;

  const card = document.getElementById("successStoryDetailsCard");
  if (!card) return;

  card.style.opacity = 0.3;

  setTimeout(() => {
    const t = (key) => (window.I18N && window.I18N[currentLanguage] && window.I18N[currentLanguage][key]) || window.I18N?.en?.[key] || key;
    card.innerHTML = `
      <div class="success-header-row">
        <div class="success-comp-info">
          <h3 style="font-size:24px; color:var(--ink-primary); display:flex; align-items:center; gap:12px; margin-bottom:8px;">
            <span style="font-size:32px;">${story.flag}</span> ${compName}
          </h3>
          <div class="success-comp-meta" style="display:flex; flex-wrap:wrap; gap:16px; font-size:13px; color:var(--ink-secondary);">
            <span><strong>${t('success.labelCountry')}:</strong> ${story.countryName[currentLanguage] || story.countryName.en}</span>
            <span><strong>${t('success.labelIndustry')}:</strong> ${industry}</span>
            <span><strong>${t('success.labelScale')}:</strong> ${sizeText}</span>
            <span><strong>${t('success.labelType')}:</strong> ${businessType}</span>
          </div>
        </div>
        <div style="font-size: 20px; color: var(--gold-soft); font-weight:700;">
          ${"★".repeat(story.rating)} <span style="font-size:12px; color:var(--ink-secondary); font-weight:500;">(${story.years} ${t('success.yearsClient')})</span>
        </div>
      </div>
      
      <div class="success-results-grid">
        <div class="success-result-card">
          <h4>${results[0].val}</h4>
          <p>${results[0].label[currentLanguage] || results[0].label.en}</p>
        </div>
        <div class="success-result-card">
          <h4>${results[1].val}</h4>
          <p>${results[1].label[currentLanguage] || results[1].label.en}</p>
        </div>
        <div class="success-result-card">
          <h4>${results[2].val}</h4>
          <p>${results[2].label[currentLanguage] || results[2].label.en}</p>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:40px; margin-bottom:32px;" class="success-body-split">
        <div>
          <h4 style="color:var(--ink-primary); font-size:15px; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:12px;">${t('success.operChallenge')}</h4>
          <p class="muted" style="font-size:14px; line-height:1.6;">${challenge}</p>
        </div>
        <div>
          <h4 style="color:var(--ink-primary); font-size:15px; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:12px;">${t('success.hiesabatiSol')}</h4>
          <p class="muted" style="font-size:14px; line-height:1.6;">${solution}</p>
        </div>
      </div>

      <div class="success-testimonial-block" style="border-left: 3px solid var(--gold-soft); padding-left: 24px; margin-bottom: 24px; font-style: italic; font-size: 15px; color: var(--ink-primary); line-height: 1.8;">
        "${testimonial}"
      </div>
      
      <div style="font-size:13px; color:var(--ink-muted); font-weight:600;">
        — ${story.ceo[currentLanguage] || story.ceo.en}, Executive Leadership Team
      </div>
    `;
    card.style.opacity = 1;
  }, 100);
}

/* ============== 9. INITIALIZATION EVENTS ============== */
document.addEventListener("DOMContentLoaded", () => {
  // A. Load saved configuration or defaults
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);

  const initialLang = getSavedLang();
  const langSel = document.getElementById("langSel");
  if (langSel) {
    langSel.value = initialLang;
    langSel.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
      window.location.reload();
    });
  }
  
  const langSelMobile = document.getElementById("langSelMobile");
  if (langSelMobile) {
    langSelMobile.value = initialLang;
    langSelMobile.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
      window.location.reload();
    });
  }
  
  applyLanguage(initialLang);

  // B. Event Listeners setup

  // Theme Switcher Button (Desktop)
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      window.location.reload();
    });
  }
  
  // Theme Switcher Button (Mobile)
  const themeBtnMobile = document.getElementById("themeBtnMobile");
  if (themeBtnMobile) {
    themeBtnMobile.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      window.location.reload();
    });
  }

  // Header scroll backdrop effect
  let scrollTicking = false;
  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const header = document.getElementById("header");
        if (header) {
          header.classList.toggle("scrolled", window.scrollY > 40);
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Mobile Menu Drawer Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close menu when clicking nav link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }

  // Forecast Widget Sliders
  const growthSlider = document.getElementById("growthSlider");
  const expenseSlider = document.getElementById("expenseSlider");
  if (growthSlider && expenseSlider) {
    growthSlider.addEventListener("input", calculateForecast);
    expenseSlider.addEventListener("input", calculateForecast);
  }

  // Product Tab buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const selectedTab = e.target.getAttribute("data-tab");
      renderProductsTab(selectedTab, currentLanguage);
    });
  });

  // Gallery Filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const selectedFilter = e.target.getAttribute("data-filter");
      renderGallery(selectedFilter, currentLanguage);
    });
  });



  // C. Contact form handler
  setupContactForm();

  // D. Start Intersection Observer for scroll animations
  observeRevealElements();

  // E. Initialize Interactive systems
  startHeroCanvasAnimation();
  switchTerminalTab('overview');
  selectMapRegion('gcc');
  renderRiskHeatMap();
  if (typeof selectJourneyStep !== 'undefined') selectJourneyStep(0);
  if (typeof selectSuccessCase !== 'undefined') selectSuccessCase('ae');
  setTimeout(() => {
    stopVoiceWaveformAnimation();
  }, 200);
});