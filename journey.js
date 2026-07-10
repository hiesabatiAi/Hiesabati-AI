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
      ur: "<span class='green'>[OK]</span> 4 عالمی گودام شامل کیے گئے۔ علاقائی مینیجر کے اختیارات تفویض کر دیے گئے۔"
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
      zh: "<span class='green'>[OK]</span> 12,400 个 SKU 条形码生成完毕。实时低库存补货自动提醒功能已激活。",
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
      ur: "<span class='green'>[AI ARIA]</span> بقایا کیش کی مدت کا تخمینہ: 16.4 ماہ۔ کیش فلو کی غلطیوں کی نشاندہی فعال۔"
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
      ur: "ہمارے لیبر پے رول اور جی سی سی وی اے ٹی بلنگ کو حساباتی نے مکمل طور پر خودکار بنا دیا، جس سے ہمارے پے رول ڈیپارٹمنٹ کو ماہانہ 120 گھنٹے سے زیادہ کی بچت ہوئی۔"
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
    ceo: { en: "Abdulrahman Al-Sudais, CFO", ar: "عبد الرحمن السديس، المدير المالي", fr: "Abdulrahman Al-Sudais, CFO", zh: "Abdulrahman Al-Sudais, 首席财务官", ur: "عبدالرحمن السدیس، سی ای او" },
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
      zh: "收银终端POS与云端财务账簿 of Hiesabati 的直接同步，每周为我们的财务团队节省了数百小时的手动核对工作。",
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
      ur: "خودکار multi-currency جرنل پوسٹنگ، مقامی VAT تعمیل، اور آریا AI پیشن گوئی۔"
    },
    testimonial: {
      en: "Aria's predictive cash flow runway was critical during our European scaling phase. Accurate and reliable.",
      ar: "كان مدرج التدفق النقدي التنبؤي لآريا حاسماً خلال مرحلة توسعنا الأوروبي. دقيق وموثوق.",
      fr: "Les prévisions Aria AI de trésorerie ont été cruciales pour notre expansion.",
      zh: "Aria 自动生成的预测性现金流分析，在我们在欧洲进行业务扩张的过程中起到了至关重要的风控支撑作用。非常精准。",
      ur: "آریا کی پیشن گوئی پر مبنی کیش فلو رن وے ہماری توسیع کے مرحلے کے دوران اہم تھی۔"
    },
    results: [
      { val: "95%", label: { en: "Forecast Accuracy", ar: "دقة التوقعات", fr: "Précision des Prévisions", zh: "现金流预测吻合度", ur: "پیشن گوئی کی درستگی" } },
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
      ur: "متعدد ذیلی اداروں کے درمیان بلنگ، R&D اثاثوں کا ٹیزی سے سرمایہ کاری، اور US GAAP سے IFRS میں تبدیلی۔"
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
      { val: "Zero", label: { en: "Dual GAAP Discrepancies", ar: "فروقات محاسبية ضريبية صفرية", fr: "Zéro Écart Double GAAP", zh: "双准则转换对账差错", ur: "صفر دوہری GAAP تضادات" } }
    ]
  },
  sg: {
    flag: "🇸🇬", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "logistics",
    countryName: { en: "Singapore", ar: "سنغافورة", fr: "Singapour", zh: "新加坡", ur: "سنگاپور" },
    companyName: { en: "Merlion Cargo Services", ar: "ميرليون لخدمات الشحن", fr: "Merlion Cargo Services", zh: "鱼尾狮货运物流集团", ur: "مرلیون کارگو سروسز" },
    industry: { en: "Logistics & Transport", ar: "اللوجستيات والنقل", fr: "Logistique & Transport", zh: "国际物流与多式联运", ur: "لوجسٹکس اور ٹرانسپورٹ" },
    sizeText: { en: "Enterprise (1,500 Employees)", ar: "مؤسسة كبرى (١,٥٠٠ موظف)", fr: "Grande Entreprise (1 500 employés)", zh: "大型企业 (1,500 名员工)", ur: "بڑی کمپنی (1,500 ملازمین)" },
    businessType: { en: "Pte Ltd Corporation", ar: "شركة خاصة محدودة (Pte Ltd)", fr: "Corporation Pte Ltd", zh: "新加坡Pte Ltd合资企业", ur: "Pte Ltd کارپوریشن" },
    ceo: { en: "Lim Wei Xiong, Logistics Controller", ar: "ليم وي شيونغ، مراقب العمليات اللوجستية", fr: "Lim Wei Xiong, Contrôleur Logistique", zh: "Lim Wei Xiong, 物流与风控总监", ur: "Lim Wei Xiong, 物流 اور کنٹرولر" },
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
      zh: "部署动态跨仓库库存转移划拨电子台账、嵌入自动进出口关税计税逻辑，以及建立面向境外分销商 and 承运商的多币种统一结算簿。",
      ur: "متحرک انوینٹری ٹرانسفر ٹریکنگ، خودکار ٹیکس حساب کتاب، اور ملٹی کرنسی سپلائر تصفیہ۔"
    },
    testimonial: {
      en: "Managing cross-border custom declarations and multi-currency registers is now fully automated. Superb operational support.",
      ar: "أصبحت إدارة التصاريح الجمركية عبر الحدود وسجلات العملات المتعددة مؤتمتة بالكامل الآن. دعم تشغيلي رائع.",
      fr: "La gestion des déclarations douanières et des devises est désormais entièrement automatisée.",
      zh: "以前头疼的跨境报关税务核对和多国货币记账现在完全实现了无人值守全自动化，系统性能卓越，运维支持非常到位。",
      ur: "سرحد پار کسٹم ڈیکلریشن اور ملٹی کرنسی رجسٹروں کا انتظام اب مقررہ طور پر خودکار ہے۔"
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
      zh: "处理换班、加班费合规精确计算、耗材全生命周期追溯，以及符合加拿大分省规范的合规审计表单生成。",
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
      ur: "ہم عملے کی شفٹوں، مقامی پے رول، اور تعمیل کی رپورٹنگ کو ایک ہی ڈیش بوڈ میں رکھتے ہیں۔"
    },
    results: [
      { val: "-22%", label: { en: "Operational Cost Reduction", ar: "تقليل التكاليف التشغيلية", fr: "Coût Opérationnel Réduit", zh: "日常行政费用削减", ur: "آپریشنل اخراجات میں کمی" } },
      { val: "99%", label: { en: "Scheduling Accuracy", ar: "دقة جدولة المواعيد", fr: "Précision des Plannings", zh: "医护排班准确率", ur: "شیڈولنگ کی درستگی" } },
      { val: "Zero", label: { en: "Compliance Breaches", ar: "مخالفات امتثال صفرية", fr: "Zéro Infraction Légale", zh: "违规和劳动争议发生率", ur: "پیچیدہ خلاف ورزیاں" } }
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
      ur: "حساباتی کے سمارٹ بلنگ شیڈول اور آڈٹ ٹریل لاگز نے ٹیوشن اکاؤنٹنگ کے تنازعات کو ختم کر دیا۔"
    },
    results: [
      { val: "+34%", label: { en: "Invoicing Speed", ar: "سرعة الفوترة", fr: "Vitesse de Facturation", zh: "学费结收速度提升", ur: "بلنگ کی رفتار" } },
      { val: "100%", label: { en: "Audit Trail Approved", ar: "مستند مسار التدقيق", fr: "Pistes d'Audit validées", zh: "审计可追溯度", ur: "آڈٹ ٹریل منظور" } },
      { val: "Zero", label: { en: "Billing Disputes", ar: "نزاعات الفوترة الصفرية", fr: "Zéro Litige Facturation", zh: "财务对账争议纠纷", ur: "بلنگ کے تنازعات" } }
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
      zh: "横跨日本12个核心港口的库存调拨、采购审批流程，以及符合日本电子账簿保存法规范的合规性。",
      ur: "12 بندرگاہوں پر ملٹی گودام اسٹاک کی نقل و حرکت، ریئل ٹائم خریداری کی منظوری، اور جاپانی ٹیکس قوانین۔"
    },
    solution: {
      en: "Automated warehouse transfers register, cloud multi-stage procurement approvals, and Japanese local compliance updates.",
      ar: "سجل نقل المخزون التلقائي بين المستودعات، وموافقات الشراء السحابية متعددة المراحل، وتحديثات الامتثال اليابانية المحلية.",
      fr: "Régistre de transferts automatisé, workflows d'approbations d'achats et conformité japonaise.",
      zh: "自动化库存调拨系统、开发采购链审批工作流，并确保系统符合日本最新的电子账簿保存法规范。",
      ur: "خودکار گودام ٹرانسفر رجسٹر، کلاؤڈ ملٹی اسٹیج خریداری کی منظوری، اور جاپانی مقامی تعمیل کی اپ ڈیٹس۔"
    },
    testimonial: {
      en: "Multi-warehouse inventory transfer and automated procurement flows are incredibly robust. Highly reliable platform.",
      ar: "تعد عمليات نقل المخزون بين مستودعات متعددة وتدفقات المشتريات المؤتمتة قوية بشكل لا يصدق. منصة موثوقة للغاية.",
      fr: "Les transferts de stocks et les flux d'achats sont robustes. Plateforme fiable.",
      zh: "该系统的库存调配和采购审批链极具弹性和可靠性，帮我们在履约上打下了扎实基础。",
      ur: "جاپان میں انوینٹری کی منتقلی اور خودکار خریداری کا بہاؤ انتہائی مضبوط ہے۔"
    },
    results: [
      { val: "99.5%", label: { en: "Inventory Accuracy", ar: "دقة تتبع المخزون", fr: "Précision des Stocks", zh: "仓库账实一致率", ur: "انوینٹری درستگی" } },
      { val: "-14%", label: { en: "Procurement Lead Time", ar: "تقليل زمن التوريد", fr: "Délai Approvisionnement", zh: "采购审批与采购周期缩短", ur: "خریداری کے وقت میں کمی" } },
      { val: "Zero", label: { en: "Audit Gaps", ar: "فجوات التدقيق الصفرية", fr: "Zéro Écart Audit", zh: "国税厅税务审计合规漏洞", ur: "آڈٹ کے فرق" } }
    ]
  },
  mx: {
    flag: "🇲🇽", rating: 5, years: 3, sizeCode: "mid", industryCode: "agriculture",
    countryName: { en: "Mexico", ar: "المكسيك", fr: "Mexique", zh: "墨西哥", ur: "میکسیکو" },
    companyName: { en: "AgroMex Exports", ar: "صادرات أغرو مكس", fr: "AgroMex Exports", zh: "墨西哥农业出口集团", ur: "ایگرو مکس ایکسپورٹس" },
    industry: { en: "Agricultural Exports", ar: "الصادرات الزراعية", fr: "Exportations Agricoles", zh: "农业出口与国际贸易", ur: "زرعی برآمدات" },
    sizeText: { en: "Mid-market (320 Employees)", ar: "متوسطة الحجم (٣٢٠ موظف)", fr: "Moyenne Entreprise (320 employés)", zh: "中型企业 (320 名员工)", ur: "درمیانے درجے کی کمپنی (320 ملازمین)" },
    businessType: { en: "S.A. de C.V. Group", ar: "شركة مساهمة متغيرة (S.A. de C.V.)", fr: "Groupe S.A. de C.V.", zh: "S.A. de C.V. 农业集团", ur: "S.A. de C.V. گروپ" },
    ceo: { en: "Carlos Ortiz, Operations Lead", ar: "كارلوس أورتيز، رئيس العمليات", fr: "Carlos Ortiz, Chef Opérations", zh: "Carlos Ortiz, 农场运营主管", ur: "کارلوس اورٹیز، آپریشنز ہیڈ" },
    challenge: {
      en: "Managing seasonal worker wages, USD to MXN exchange fluctuations, and cross-border food safety compliance logs.",
      ar: "إدارة أجور العمال الموسميين، وتقلبات أسعار صرف الدولار مقابل البيزو المكسيكي، وسجلات الامتثال لسلامة الأغذية عبر الحدود.",
      fr: "Gestion des salaires saisonniers, fluctuations USD/MXN et registres de conformité alimentaire transfrontaliers.",
      zh: "管理大量季节性农场工人工资发放、应对美元对墨西哥比索汇率波动的结汇损益，以及记录跨境食品安全合规日志。",
      ur: "موسمی کارکنوں کی اجرت کا انتظام، USD سے MXN شرح تبادلہ کے اتار چڑھاؤ، اور سرحد پار فوڈ سیفٹی لاگز۔"
    },
    solution: {
      en: "Multi-currency automated ledger posting, seasonal payroll batches, and electronic custom invoice attachments.",
      ar: "ترحيل تلقائي للدفاتر متعددة العملات، ودفعات كشوف المرتبات الموسمية، ومرفقات الفواتير الجمركية الإلكترونية.",
      fr: "Écritures automatisées multi-devises, paies saisonnières et pièces jointes électroniques de douane.",
      zh: "部署外币总账自动结转结汇功能、提供针对季节性劳工的薪酬批处理模块，并集成出口海关电子发票存盘附件。",
      ur: "خودکار ملٹی کرنسی پوسٹنگ، موسمی پے رول بیچز، اور الیکٹرانک انوائس اٹیچمنٹس۔"
    },
    testimonial: {
      en: "Cross-border compliance and multi-currency transactions are flawless now. Outstanding design framework.",
      ar: "أصبح الامتثال عبر الحدود والمعاملات متعددة العملات خالية من العيوب الآن. إطار تصميم رائع.",
      fr: "La conformité transfrontalière et les devises fonctionnent parfaitement. Excellent système.",
      zh: "跨境贸易合规审计和多币种结汇过账现在运行得天衣无缝。极佳的技术架构。",
      ur: "سرحد پار تعمیل اور ملٹی کرنسی لین دین اب بالکل درست ہیں۔"
    },
    results: [
      { val: "+45%", label: { en: "Export Billing Speed", ar: "سرعة فواتير التصدير", fr: "Vitesse de Facturation", zh: "出口清关结算提速", ur: "برآمدی بلنگ کی رفتار" } },
      { val: "Zero", label: { en: "Currency Exchange Losses", ar: "خسائر تبادل العملات الصفرية", fr: "Zéro Perte de Change", zh: "汇率兑换零损失", ur: "کرنسی کے تبادلے کا کوئی نقصان نہیں" } },
      { val: "100%", label: { en: "FDA Logs Verified", ar: "التحقق من سجلات سلامة الأغذية", fr: "Registres FDA validés", zh: "卫生监管合规认证通过", ur: "FDA لاگز منظور" } }
    ]
  },
  br: {
    flag: "🇧🇷", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "distribution",
    countryName: { en: "Brazil", ar: "البرازيل", fr: "Brésil", zh: "巴西", ur: "برازیل" },
    companyName: { en: "Brasil Logística & Distribuição", ar: "البرازيل للخدمات اللوجستية والتوزيع", fr: "Brasil Logística & Distribuição", zh: "巴西仓储物流分销集团", ur: "برازیل لاجسٹکس اور تقسیم" },
    industry: { en: "Wholesale & Distribution", ar: "الجملة والتوزيع", fr: "Distribution & Commerce de gros", zh: "大宗商品批发与物流分销", ur: "تھوک فروشی اور تقسیم" },
    sizeText: { en: "Enterprise (1,800 Employees)", ar: "مؤسسة كبرى (١,٨٠٠ موظف)", fr: "Grande Entreprise (1 800 employés)", zh: "大型企业 (1,800 名员工)", ur: "بڑی کمپنی (1,800 ملازمین)" },
    businessType: { en: "S.A. Corporation", ar: "شركة مساهمة برازيلية (S.A.)", fr: "Corporation S.A.", zh: "巴西S.A.联营集团", ur: "S.A. کارپوریشن" },
    ceo: { en: "Roberto Silva, CFO", ar: "روبيرتو سيلفا، المدير المالي", fr: "Roberto Silva, CFO", zh: "Roberto Silva, 财务副总裁", ur: "روبوٹو سلوا، سی ایف او" },
    challenge: {
      en: "Real-time tracking of inventory across 8 states, municipal tax compliance, and carrier reconciliation.",
      ar: "تتبع المخزون في الوقت الفعلي عبر ٨ ولايات، والامتثال للضرائب البلدية، وتسوية حسابات شركات النقل.",
      fr: "Suivi des stocks dans 8 États, fiscalité municipale complexe et réconciliation des transporteurs.",
      zh: "实时监控分布在巴西8个联邦州的复杂库存调拨、处理极为繁琐的巴西地方市政税合规，以及各物流承运方的账目对账。",
      ur: "8 ریاستوں میں انوینٹری کی ریئل ٹائم ٹریکنگ، بلدیاتی ٹیکس کی تعمیل، اور کیریئر مفاہمت۔"
    },
    solution: {
      en: "Unified multi-warehouse ledger matching, dynamic tax rule tables, and automated payment receipts.",
      ar: "مطابقة موحدة لدفاتر مستودعات متعددة، وجداول قواعد ضريبية ديناميكية، وإيصالات دفع مؤتمتة.",
      fr: "Grand livre multi-entrepôts unifié, grilles de taxes dynamiques et reçus automatisés.",
      zh: "部署多仓一体化总账数据对齐、建立动态税率计算对照表，并实现承运商应付款自动匹配结算流程。",
      ur: "مربوط ملٹی گودام لیجر، متحرک ٹیکس رول ٹیبلز، اور خودکار ادائیگی کی رسیدیں۔"
    },
    testimonial: {
      en: "Unified logistics data and multi-warehouse reconciliation is now fully automated. Highly robust ledger.",
      ar: "أصبحت البيانات اللوجستية الموحدة والتسويات متعددة المستودعات مؤتمتة بالكامل الآن. دفتر حسابات قوي للغاية.",
      fr: "Les données de logistique et la réconciliation multi-entrepôts sont désormais automatisées.",
      zh: "集成的仓储数据和跨地区库房对账已经实现了全自动运行。系统底层数据结构极具弹性。",
      ur: "لوجسٹکس ڈیٹا اور ملٹی گودام مفاہمت اب مکمل طور پر خودکار ہیں۔"
    },
    results: [
      { val: "99.4%", label: { en: "Inventory Accuracy", ar: "دقة المخزون", fr: "Précision des Stocks", zh: "跨地区库存账实相符率", ur: "انوینٹری درستگی" } },
      { val: "24h", label: { en: "State Tax Filing", ar: "تقديم الإقرارات الضريبية للولايات", fr: "Déclaration Fiscale État", zh: "跨州地方税申报耗时", ur: "ریاستی ٹیکس فائلنگ" } },
      { val: "-15%", label: { en: "Distribution Cost Cut", ar: "خفض تكاليف التوزيع", fr: "Coût de Logistique Réduit", zh: "大宗配送仓储损耗降低", ur: "تقسیم کے اخراجات میں کمی" } }
    ]
  },
  ar: {
    flag: "🇦🇷", rating: 5, years: 3, sizeCode: "mid", industryCode: "importexport",
    countryName: { en: "Argentina", ar: "الأرجنتين", fr: "Argentine", zh: "阿根廷", ur: "ارجنٹائن" },
    companyName: { en: "Plata Import & Export", ar: "بلاتا للاستيراد والتصدير", fr: "Plata Import & Export", zh: "阿根廷拉普拉塔进出口贸易公司", ur: "پلاٹا امپورٹ اینڈ ایکسپورٹ" },
    industry: { en: "Import & Export", ar: "الاستيراد والتصدير", fr: "Import & Export", zh: "国际进出口贸易", ur: "درآمدات اور برآمدات" },
    sizeText: { en: "Mid-market (180 Employees)", ar: "متوسطة الحجم (١٨٠ موظف)", fr: "Moyenne Entreprise (180 employés)", zh: "中型企业 (180 名员工)", ur: "درمیانے درجے کی کمپنی (180 ملازمین)" },
    businessType: { en: "S.A. Corporation", ar: "شركة مساهمة أرجنتينية", fr: "Société Anonyme", zh: "S.A.进出口公司", ur: "S.A. کارپوریشن" },
    ceo: { en: "Mateo Fernandez, CEO", ar: "ماتيو فرنانديز، الرئيس التنفيذي", fr: "Mateo Fernandez, CEO", zh: "Mateo Fernandez, 总经理", ur: "ماتیو فرنینڈس، سی ای او" },
    challenge: {
      en: "High local inflation indexing, multi-currency cash flow forecasting, and complex customs documentation audits.",
      ar: "مؤشر التضخم المحلي المرتفع، والتنبؤ بالتدفقات النقدية متعددة العملات، وتدقيق الوثائق الجمركية المعقدة.",
      fr: "Indexation de l'inflation locale, prévision de trésorerie multi-devises et audits douaniers complexes.",
      zh: "高通胀环境下的财务指数账目重估、跨国多币种现金流收支预测，以及海关进出口单据合规审计。",
      ur: "مقامی افراط زر کی ایڈجسٹمنٹ، ملٹی کرنسی کیش فلو کی پیشن گوئی، اور کسٹم دستاویزات کا آڈٹ۔"
    },
    solution: {
      en: "Index-linked financial adjustments, real-time multi-currency forecasts, and audit trail ledger tags.",
      ar: "التعديلات المالية المرتبطة بمؤشر التضخم، والتوقعات الفورية لعملات متعددة، وعلامات مسار التدقيق.",
      fr: "Ajustements d'inflation intégrés, prévisions de devises en temps réel et pistes d'audit.",
      zh: "引入与通胀指数挂钩的资产价值重估系统、实时多币种结汇预测沙盘，以及带数字水印的审计记录追踪。",
      ur: "افراط زر سے منسلک مالیاتی ایڈجسٹمنٹ، ریئل ٹائم ملٹی کرنسی پیشن گوئی، اور آڈٹ ٹریل لاگز۔"
    },
    testimonial: {
      en: "Managing cash flows under dynamic local exchange variables was impossible before Hiesabati. Exceptional tools.",
      ar: "كانت إدارة التدفقات النقدية في ظل متغيرات الصرف المحلية المستمرة مستحيلة قبل حسابتي. أدوات استثنائية.",
      fr: "Gérer la trésorerie avec des devises fluctuantes était impossible. Les outils de Hiesabati sont exceptionnels.",
      zh: "在多变的外汇和通胀环境下进行资金流预测，以前几乎是天方夜谭，多亏了 Hiesabati 提供的精细工具。",
      ur: "تبادلہ کے متحرک متغیرات کے تحت کیش فلو کا انتظام حساباتی سے پہلے ناممکن تھا۔"
    },
    results: [
      { val: "94%", label: { en: "Forecast Accuracy", ar: "دقة التوقعات", fr: "Précision des Prévisions", zh: "现金收支预测准确率", ur: "پیشن گوئی کی درستگی" } },
      { val: "Zero", label: { en: "Custom Audit Gaps", ar: "فجوات التدقيق الجمركي الصفرية", fr: "Zéro Écart d'Audit Douane", zh: "海关税务审计差错", ur: "کسٹم آڈٹ کے تضادات" } },
      { val: "+22%", label: { en: "EBITDA Margin", ar: "هامش الأرباح التشغيلية", fr: "Marge EBITDA", zh: "运营利润率提升", ur: "EBITDA مارجن" } }
    ]
  },
  co: {
    flag: "🇨🇴", rating: 5, years: 4, sizeCode: "mid", industryCode: "realestate",
    countryName: { en: "Colombia", ar: "كولومبيا", fr: "Colombie", zh: "哥伦比亚", ur: "کولمبیا" },
    companyName: { en: "Andes Real Estate Development", ar: "تطوير عقارات الأنديز", fr: "Andes Real Estate Development", zh: "安第斯房地产开发集团", ur: "اینڈیز رئیل اسٹیٹ ڈیولپمنٹ" },
    industry: { en: "Real Estate Development", ar: "التطوير العقاري", fr: "Immobilier & Développement", zh: "房地产开发与住宅项目", ur: "رئیل اسٹیٹ ڈیولپمنٹ" },
    sizeText: { en: "Mid-market (240 Employees)", ar: "متوسطة الحجم (٢٤٠ موظف)", fr: "Moyenne Entreprise (240 employés)", zh: "中型企业 (240 名员工)", ur: "درمیانے درجے کی کمپنی (240 ملازمین)" },
    businessType: { en: "S.A.S. Corporation", ar: "شركة مبسطة العقارية (S.A.S.)", fr: "Corporation S.A.S.", zh: "S.A.S. 建设集团", ur: "S.A.S. کارپوریشن" },
    ceo: { en: "Juan Carlos Gomez, Director", ar: "خوان كارلوس غوميز، المدير العام", fr: "Juan Carlos Gomez, Directeur", zh: "Juan Carlos Gomez, 工程财务总监", ur: "خوان کارلوس گومز، ڈائریکٹر" },
    challenge: {
      en: "Allocating construction costs to individual apartment units, buyer billing schedules, and regional tax compliance.",
      ar: "تخصيص تكاليف البناء لوحدات الشقق الفردية، وجداول فوترة المشترين، والامتثال الضريبي الإقليمي.",
      fr: "Répartition des coûts de construction par appartement, échéanciers de paiement des acheteurs et fiscalité.",
      zh: "将庞大而混杂的施工成本精细分摊给每个公寓单位、跟踪购房者的按揭或分期付款进度，以及计算地方税负合规。",
      ur: "تعمیراتی لاگت کو انفرادی اپارٹمنٹس میں تقسیم کرنا، خریداروں کی بلنگ کے شیڈولز، اور علاقائی ٹیکس کی تعمیل۔"
    },
    solution: {
      en: "Project unit cost centers, automated installment billing, and municipal tax filing updates.",
      ar: "مراكز تكلفة وحدات المشاريع، والفوترة التلقائية للأقساط، وتحديثات تقديم الضرائب البلدية.",
      fr: "Centres de coûts par lot, facturation automatique des échéances et déclarations de taxes locales.",
      zh: "引入项目分拆成本中心核算模块、开发应收账款分期账期自动提醒系统，并集成符合省市税务要求的申报表模板。",
      ur: "پروجیکٹ یونٹ لاگت کے مراکز، خودکار قسط بلنگ، اور میونسپل ٹیکس فائلنگ۔"
    },
    testimonial: {
      en: "Tracking cost center allocations for 15 active projects has never been easier. Highly recommended ledger system.",
      ar: "لم يكن تتبع مخصصات مراكز التكلفة لـ ١٥ مشروعاً نشطاً أسهل من أي وقت مضى. نوصي بشدة بنظام الدفاتر هذا.",
      fr: "Suivre la comptabilité analytique de 15 projets actifs est devenu simple. Nous recommandons vivement.",
      zh: "同时监控15个在建项目的分摊成本分配 and 往来流水账，现在变得易如反掌。这款财务软件极力推荐。",
      ur: "15 فعال منصوبوں کے لیے لاگت کے مرکز کی تقسیم کو ٹریک کرنا اب بہت آسان ہے۔"
    },
    results: [
      { val: "35%", label: { en: "Billing Speedup", ar: "تسريع الفوترة", fr: "Facturation Accélérée", zh: "应收款回笼速度提升", ur: "بلنگ کی رفتار" } },
      { val: "100%", label: { en: "Cost Center Accuracy", ar: "دقة مراكز التكلفة", fr: "Précision Centres de Coût", zh: "分部核算和成本分摊精度", ur: "لاگت کے مرکز کی درستگی" } },
      { val: "Zero", label: { en: "Tax Calculation Errors", ar: "أخطاء احتساب الضرائب الصفرية", fr: "Zéro Erreur de Taxes", zh: "涉税计算申报错漏", ur: "ٹیکس حساب کتاب کی غلطیاں" } }
    ]
  },
  it: {
    flag: "🇮🇹", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "automotive",
    countryName: { en: "Italy", ar: "إيطاليا", fr: "Italie", zh: "意大利", ur: "اٹلی" },
    companyName: { en: "Veloce Automotive Group", ar: "مجموعة فيلوتشي للسيارات", fr: "Veloce Automotive Group", zh: "维洛切奢华跑车制造集团", ur: "ویلوچے آٹوموٹو گروپ" },
    industry: { en: "Automotive Manufacturing", ar: "صناعة السيارات", fr: "Industrie Automobile", zh: "豪华跑车与整车精密制造", ur: "آٹوموٹو مینوفیکچرنگ" },
    sizeText: { en: "Enterprise (1,200 Employees)", ar: "مؤسسة كبرى (١,٢٠٠ موظف)", fr: "Grande Entreprise (1 200 employés)", zh: "大型企业 (1,200 名员工)", ur: "بڑی کمپنی (1,200 ملازمین)" },
    businessType: { en: "SpA Corporation", ar: "شركة مساهمة إيطالية (SpA)", fr: "Corporation SpA", zh: "意大利SpA股份制企业", ur: "SpA کارپوریشن" },
    ceo: { en: "Alessandro Rossi, Chief Operations", ar: "أليساندرو روسي، رئيس العمليات", fr: "Alessandro Rossi, Chef Opérations", zh: "Alessandro Rossi, 供应链风控总裁", ur: "الیسانڈرو روسی، چیف آپریشنز" },
    challenge: {
      en: "Precision tracking of assembly line parts inventory, vendor payment cycles, and EU VAT integration.",
      ar: "التتبع الدقيق لمخزون أجزاء خط التجميع، ودورات دفع الموردين، وتكامل ضريبة القيمة المضافة للاتحاد الأوروبي.",
      fr: "Suivi de précision des pièces de ligne d'assemblage, cycles de paiement fournisseurs et TVA UE.",
      zh: "高精度监控装配线上成千上万种零配件的仓储状态、优化境外供应商账期结付周期，并快速对接欧盟VAT税务稽核系统。",
      ur: "اسمبلی لائن پر پرسیجن انوینٹری کی ٹریکنگ، سپلائرز کی ادائیگی، اور یورپی یونین VAT انضمام۔"
    },
    solution: {
      en: "Barcode scanner API ledgers, dynamic vendor settlement registers, and EU-wide VAT tax mapping.",
      ar: "دفاتر واجهة برمجة تطبيقات ماسح الباركود، وسجلات تسوية الموردين الديناميكية، ورسم خرائط ضريبة القيمة المضافة على مستوى الاتحاد الأوروبي.",
      fr: "Grands livres par API code-barres, registres fournisseurs dynamiques et cartographie TVA européenne.",
      zh: "开发基于条码扫描枪的API自动实时过账接口、部署动态供应商结算工作流，并嵌入一键换算并生成欧盟各成员国VAT税单模块。",
      ur: "بار کوڈ اسکینر API لیجر، متحرک سپلائر تصفیہ، اور یورپی یونین VAT ٹیکس میپنگ۔"
    },
    testimonial: {
      en: "Hiesabati connected our assembly supply chain directly to our core balance sheet. Flawless execution.",
      ar: "ربطت حسابتي سلسلة توريد التجميع مباشرة بميزانيتنا العمومية الأساسية. تنفيذ لا تشوبه شائبة.",
      fr: "Hiesabati a connecté notre chaîne d'approvisionnement directement au bilan. Exécution parfaite.",
      zh: "Hiesabati 成功将我们工厂极其冗长的零配件供应链数据直接关联到了公司核心资产负债表上。执行力惊人。",
      ur: "حساباتی نے اسمبلی سپلائی چین کو براہ راست بیلنس شیٹ سے جوڑ دیا۔"
    },
    results: [
      { val: "99.8%", label: { en: "Supply Chain Accuracy", ar: "دقة سلسلة التوريد", fr: "Précision Chaîne Approvisionnement", zh: "供应链核心零部件库存实配率", ur: "سپلائی چین کی درستگی" } },
      { val: "-18d", label: { en: "Vendor Pay Cycle Reduction", ar: "تقليل دورة دفع الموردين", fr: "Cycle Paye Fournisseurs Réduit", zh: "应付款结算周期缩短", ur: "سپلائر ادائیگی کا وقت" } },
      { val: "Zero", label: { en: "EU VAT Compliance Errors", ar: "أخطاء امتثال ضريبة القيمة المضافة للاتحاد الأوروبي", fr: "Zéro Erreur de TVA Européenne", zh: "欧盟内交易VAT申报差错", ur: "یورپی یونین VAT کی غلطیاں" } }
    ]
  },
  es: {
    flag: "🇪🇸", rating: 5, years: 3, sizeCode: "mid", industryCode: "restaurants",
    countryName: { en: "Spain", ar: "إسبانيا", fr: "Espagne", zh: "西班牙", ur: "اسپین" },
    companyName: { en: "Iberia Restaurant Group", ar: "مجموعة مطاعم إيبيريا", fr: "Iberia Restaurant Group", zh: "伊比利亚连锁餐饮集团", ur: "آئیبیریا ریسٹورنٹ گروپ" },
    industry: { en: "Restaurant Operations", ar: "إدارة المطاعم", fr: "Restaurations & Services", zh: "连锁餐饮与中央厨房运营", ur: "ریسٹورنٹ آپریشنز" },
    sizeText: { en: "Mid-market (450 Employees)", ar: "متوسطة الحجم (٤٠٠ موظف)", fr: "Moyenne Entreprise (450 employés)", zh: "中型企业 (450 名员工)", ur: "درمیانے درجے کی کمپنی (450 ملازمین)" },
    businessType: { en: "S.A. Foodservice", ar: "مجموعة خدمات غذائية مساهمة (S.A.)", fr: "Groupe Alimentaire S.A.", zh: "西班牙S.A.餐饮连锁", ur: "S.A. فوڈ سروس" },
    ceo: { en: "Sofia Gomez, Finance Director", ar: "صوفيا غوميز، المدير المالي", fr: "Sofia Gomez, Directrice Financière", zh: "Sofia Gomez, 财务总监", ur: "صوفیہ گومز، فنانس ڈائریکٹر" },
    challenge: {
      en: "Reconciling daily cash from 80 locations, chef shift scheduling, and supplier food invoice matches.",
      ar: "تسوية النقد اليومي من ٨٠ موقعاً، وجدولة نوبات الطهاة، ومطابقة فواتير الموردين للأغذية.",
      fr: "Réconciliation quotidienne de 80 restaurants, plannings des chefs et rapprochement des factures d'achats.",
      zh: "核对旗下80家门店每日大量现金和电子刷卡流水分录、调配厨师复杂的轮班薪酬，以及核对中央厨房海量食品供应商的原料发票。",
      ur: "80 مقامات سے روزانہ کیش کا حساب، شیف کی شفٹ کا انتظام، اور سپلائر فواتیر کی مطابقت۔"
    },
    solution: {
      en: "Central POS ledger sync, shift-to-payroll automation, and auto-matching invoice scanning tools.",
      ar: "مزامنة دفتر نقاط البيع المركزي، وأتمتة نوبات العمل إلى كشوف الرواتب، وأدوات مسح الفواتير ذات المطابقة التلقائية.",
      fr: "Synchronisation POS centrale, paie automatique liée aux shifts et capture automatique de factures.",
      zh: "部署中央POS终端流水实时挂账、引入考勤系统直通工资发放模块，并运行智能发票扫描比对匹配系统。",
      ur: "مرکزی POS لیجر مطابقت، شفٹ ٹو پے رول آٹومیشن، اور خودکار فواتیر اسکیننگ۔"
    },
    testimonial: {
      en: "Daily POS ledger reconciliation is fully automated now. Beautiful and clean dashboard.",
      ar: "أصبحت تسوية دفتر نقاط البيع اليومية مؤتمتة بالكامل الآن. لوحة تحكم جميلة ونظيفة.",
      fr: "La réconciliation des ventes est entièrement automatisée. Tableau de bord très propre.",
      zh: "门店收银台流水到云端财务总账的结转现在完全实现了自动化。数据大屏明晰美观。",
      ur: "روزانہ POS لیجر مفاہمت اب مکمل طور پر خودکار ہے۔"
    },
    results: [
      { val: "92%", label: { en: "Faster Reconciliation", ar: "تسوية أسرع", fr: "Rapprochement Plus Rapide", zh: "每日流水账目核对提速", ur: "تیز مفاہمت" } },
      { val: "-14%", label: { en: "Overtime Payroll Cost", ar: "تكلفة رواتب العمل الإضافي", fr: "Coût d'Heures Supplémentaires", zh: "加班工时工资冒领减少", ur: "اوور ٹائم پے رول کی لاگت" } },
      { val: "Zero", label: { en: "Invoice Discrepancies", ar: "فروقات الفواتير الصفرية", fr: "Zéro Écart de Facturation", zh: "采购入库单与发票差错", ur: "فواتیر کے تضادات" } }
    ]
  },
  nl: {
    flag: "🇳🇱", rating: 5, years: 5, sizeCode: "enterprise", industryCode: "transportation",
    countryName: { en: "Netherlands", ar: "هولندا", fr: "Pays-Bas", zh: "荷兰", ur: "ہالینڈ" },
    companyName: { en: "Rotterdam Maritime Cargo", ar: "روتيردام للشحن البحري", fr: "Rotterdam Maritime Cargo", zh: "鹿特丹港口海运物流公司", ur: "روٹرڈیم میری ٹائم کارگو" },
    industry: { en: "Transportation & Shipping", ar: "النقل والشحن", fr: "Transport & Logistique", zh: "海洋运输与港口集装箱物流", ur: "ٹرانسپورٹیشن اور شپنگ" },
    sizeText: { en: "Enterprise (1,400 Employees)", ar: "مؤسسة كبرى (١,٤٠٠ موظف)", fr: "Grande Entreprise (1 400 employés)", zh: "大型企业 (1,400 名员工)", ur: "بڑی کمپنی (1,400 ملازمین)" },
    businessType: { en: "B.V. Corporation", ar: "شركة ذات مسؤولية محدودة (B.V.)", fr: "Corporation B.V.", zh: "荷兰B.V.物流集团", ur: "B.V. کارپوریشن" },
    ceo: { en: "Jan de Jong, Logistics Controller", ar: "يان دي جونغ، مراقب العمليات اللوجستية", fr: "Jan de Jong, Contrôleur Logistique", zh: "Jan de Jong, 物流航运财务主管", ur: "جان ڈی جونگ، لوجسٹکس کنٹرولر" },
    challenge: {
      en: "Handling international shipping tariffs, vessel fuel cost allocation, and multi-currency payouts to ports.",
      ar: "التعامل مع تعريفات الشحن الدولي، وتخصيص تكلفة وقود السفن، والمدفوعات متعددة العملات للموانئ.",
      fr: "Gestion des tarifs d'expédition internationaux, répartition du carburant et paiements multi-devises aux ports.",
      zh: "计算高度动态的跨国海运运费关税、核算每艘远洋货轮的燃料消耗费用，以及给全球各大港口结付多币种港务港杂费。",
      ur: "بین الاقوامی شپنگ ٹیرف، جہاز کے ایندھن کی لاگت کی تقسیم، اور بندرگاہوں کو ملٹی کرنسی ادائیگیوں کا انتظام۔"
    },
    solution: {
      en: "Automatic tariff calculator sheets, dynamic vessel cost centers, and multi-currency bank wire sync.",
      ar: "أوراق حاسبة التعريفات التلقائية، ومراكز تكلفة السفن الديناميكية، ومزامنة التحويلات البنكية متعددة العملات.",
      fr: "Calculateur de tarifs automatisé, centres de coûts par navire et synchronisation des virements bancaires.",
      zh: "开发自动关税与运费核算工作簿、将每艘货轮设立为独立的项目成本中心，并集成国际多币种电汇银行接口自动同步。",
      ur: "خودکار ٹیرف کیلکولیٹر، متحرک جہاز لاگت کے مراکز، اور ملٹی کرنسی بینک وائر سنک۔"
    },
    testimonial: {
      en: "Multi-currency bank wires and shipping cost center tracking are fully integrated. Flawless shipping operations.",
      ar: "تم دمج التحويلات البنكية متعددة العملات وتتبع مراكز تكلفة الشحن بالكامل. عمليات شحن خالية من العيوب.",
      fr: "Les virements multi-devises et les coûts par navire sont intégrés. Gestion sans faille.",
      zh: "国际多币种电汇流水分录和以货轮为单元 of 成本中心核算被完美打通。航运财务工作毫无错漏。",
      ur: "ملٹی کرنسی بینک وائرز اور شپنگ لاگت کے مرکز کی ٹریکنگ مکمل طور پر مربوط ہیں۔"
    },
    results: [
      { val: "38%", label: { en: "EBITDA Margin Insights", ar: "رؤى هامش الأرباح التشغيلية", fr: "Insights EBITDA Marge", zh: "远洋航线运营利润分析优化", ur: "EBITDA مارجن بصیرت" } },
      { val: "Instant", label: { en: "Multi-Currency Posting", ar: "ترحيل فوري للعملات", fr: "Écritures Devises Instantanées", zh: "多币种外汇记账汇率换算", ur: "فوری ملٹی کرنسی پوسٹنگ" } },
      { val: "-14%", label: { en: "Port Overpay Avoided", ar: "تجنب الدفع الزائد للموانئ", fr: "Surpaiements Évités", zh: "港口停靠超付避免", ur: "بندرگاہوں پر اضافی ادائیگی سے بچاو" } }
    ]
  },
  ch: {
    flag: "🇨🇭", rating: 5, years: 6, sizeCode: "enterprise", industryCode: "financial",
    countryName: { en: "Switzerland", ar: "سويسرا", fr: "Suisse", zh: "瑞士", ur: "سوئٹزرلینڈ" },
    companyName: { en: "Zurich Asset Management", ar: "زيورخ لإدارة الأصول", fr: "Zurich Asset Management", zh: "苏黎世财富与资产管理集团", ur: "زیورخ اثاثہ جات کا انتظام" },
    industry: { en: "Financial Services", ar: "الخدمات المالية", fr: "Services Financiers", zh: "资产管理与私人银行服务", ur: "مالیاتی خدمات" },
    sizeText: { en: "Enterprise (550 Employees)", ar: "مؤسسة كبرى (٥٥٠ موظف)", fr: "Grande Entreprise (550 employés)", zh: "大型企业 (550 名员工)", ur: "بڑی کمپنی (550 ملازمین)" },
    businessType: { en: "AG Investment Trust", ar: "صندوق استثماري سويسري (AG)", fr: "Fiducie d'Investissement AG", zh: "AG投资信托", ur: "AG انوسٹمنٹ ٹرسٹ" },
    ceo: { en: "Stefan Meier, Compliance Chief", ar: "ستيفان ماير، رئيس الامتثال", fr: "Stefan Meier, Chef Conformité", zh: "Stefan Meier, 合规风控总监", ur: "اسٹیفن میئر، تعمیل کے سربراہ" },
    challenge: {
      en: "Audit trails for sovereign wealth clients, compliance with multi-tier tax treaties, and real-time yield reports.",
      ar: "مسارات التدقيق لعملاء الثروة السيادية، والامتثال للمعاهدات الضريبية متعددة المستويات، وتقارير العائد في الوقت الفعلي.",
      fr: "Pistes d'audit pour fonds souverains, conformité aux traités fiscaux et rapports de rendement.",
      zh: "为全球主权基金客户提供严密可信的审计痕迹追踪、遵守跨国多层级双边税收协定，以及生成实时资本收益回报报告。",
      ur: "خود مختار دولت کے کلائنٹس کے لیے آڈٹ ٹریلز، کثیر فریقی ٹیکس معاہدوں کی تعمیل، اور ریئل ٹائم رپورٹس۔"
    },
    solution: {
      en: "Cryptographically signed audit trail logs, localized tax treaty matrices, and real-time financial dashboards.",
      ar: "سجلات مسار التدقيق الموقعة تشفيرياً، ومصفوفات المعاهدات الضريبية المحلية، ولوحات المعلومات المالية الفورية.",
      fr: "Registres d'audit signés par cryptographie, matrices de traités locaux et tableaux de bord financiers.",
      zh: "引入防篡改的加密数字签名审计流水日志、内置跨国双边预扣税收协定计算矩阵，以及实时投资表现看板。",
      ur: "خفیہ طور پر دستخط شدہ آڈٹ ٹریل لاگز، ٹیکس معاہدے کے میٹرکس، اور ریئل ٹائم مالیاتی ڈیش بورڈز۔"
    },
    testimonial: {
      en: "Every journal entry is cryptographically signed and tracked. The absolute premium gold standard of financial software.",
      ar: "كل قيد يومية موقع تشفيرياً ومتتبع. المعيار الذهبي المتميز المطلق للبرمجيات المالية.",
      fr: "Chaque écriture est signée cryptographiquement. Le standard d'excellence des logiciels financiers.",
      zh: "每一笔会计分录都由系统加密签名并可终身追溯。这毫无疑问是企业级财务软件中的天花板金牌标准。",
      ur: "ہر جرنل اینٹری پر خفیہ طور پر دستخط اور ٹریک کیا جاتا ہے۔ مالیاتی سافٹ ویئر کا بہترین گولڈ اسٹینڈرڈ۔"
    },
    results: [
      { val: "100%", label: { en: "Audit Clean Bill", ar: "شهادة تدقيق نظيفة", fr: "Audit sans réserve", zh: "无保留审计意见通过率", ur: "صاف آڈٹ رپورٹ" } },
      { val: "Instant", label: { en: "Yield Report Compute", ar: "حساب تقارير العائد الفوري", fr: "Calcul de Rendement Direct", zh: "收益报告自动生成耗时", ur: "پیداوار رپورٹ کا فوری حساب" } },
      { val: "99.9%", label: { en: "Regulatory Compliance", ar: "الامتثال التنظيمي", fr: "Conformité Réglementaire", zh: "瑞士金管局合规评级", ur: "ریگولیٹری تعمیل" } }
    ]
  },
  se: {
    flag: "🇸🇪", rating: 5, years: 4, sizeCode: "growth", industryCode: "technology",
    countryName: { en: "Sweden", ar: "السويد", fr: "Suède", zh: "瑞典", ur: "سوئد" },
    companyName: { en: "Nord-Green Technologies", ar: "نورد جرين للتقنيات", fr: "Nord-Green Technologies", zh: "斯德哥尔摩绿色智能科技", ur: "نورڈ گرین ٹیکنالوجیز" },
    industry: { en: "Technology & Software", ar: "التكنولوجيا والبرمجيات", fr: "Technologie & Logiciels", zh: "清洁能源与绿色IT软件", ur: "ٹیکنالوجی اور سافٹ ویئر" },
    sizeText: { en: "Growth (85 Employees)", ar: "شركة متنامية (٨٥ موظف)", fr: "Jeune Pousse (85 employés)", zh: "高成长性企业 (85 名员工)", ur: "ترقی کرتی کمپنی (85 ملازمین)" },
    businessType: { en: "AB Corporation", ar: "شركة مساهمة سويدية (AB)", fr: "Corporation AB", zh: "瑞典AB股份制科技实体", ur: "AB کارپوریشن" },
    ceo: { en: "Lars Lindqvist, Co-Founder", ar: "لارس ليندكفيست، المؤسس المشارك", fr: "Lars Lindqvist, Co-fondateur", zh: "Lars Lindqvist, 联合创始人", ur: "لارس لنڈکوسٹ، شریک بانی" },
    challenge: {
      en: "R&D cost capitalization under EU regulations, stock option payroll management, and rapid SaaS cash burn predictions.",
      ar: "رسملة تكاليف البحث والتطوير بموجب لوائح الاتحاد الأوروبي، وإدارة رواتب خيارات الأسهم، وتوقعات معدل حرق السيولة لشركات البرمجيات.",
      fr: "Capitalisation R&D selon les normes UE, gestion des stock-options et prévision du taux de combustion (burn rate).",
      zh: "计算符合欧盟会计准则的研发费用资产化确权计算、管理员工期权行权薪酬，以及预测SaaS订阅业务的资金损耗周期。",
      ur: "یورپی یونین کے قواعد کے تحت R&D اثاثوں کا سرمایہ کاری کا انتظام، اسٹاک آپشن پے رول، اور کیش برن کی پیشن گوئی۔"
    },
    solution: {
      en: "Automatic R&D asset capitalization module, localized payroll option triggers, and Aria AI forecasting algorithms.",
      ar: "وحدة رسملة أصول البحث والتطوير التلقائية، ومشغلات خيارات الرواتب المحلية، وخوارزميات توقعات آريا.",
      fr: "Module automatique de capitalisation R&D, triggers d'options locales et algorithmes prédictifs Aria AI.",
      zh: "自动固资研发支出结转资产模块、建立瑞典本土兼容的股权薪资核算工具，并引入Aria AI智能消耗率预测工具。",
      ur: "خودکار R&D سرمایہ کاری کا ماڈیول، مقامی پے رول آپشنز، اور آریا AI پیشن گوئی کے الگورتھم۔"
    },
    testimonial: {
      en: "Aria AI's predictive runway forecasting transformed our SaaS financial roadmap completely. Invaluable platform.",
      ar: "غيرت توقعات آريا للمدرج التنبئي خريطة الطريق المالية لشركتنا بالكامل. منصة لا تقدر بثمن.",
      fr: "Les prévisions de trésorerie Aria AI ont transformé notre roadmap financière. Plateforme inestimable.",
      zh: "Aria AI 智能现金消耗模型重塑了我们SaaS业务的财务发展路径，帮我们规避了多重风控隐患。弥足珍贵的平台。",
      ur: "آریا AI کی پیشن گوئی نے ہمارے SaaS مالیاتی روڈ میپ کو تبدیل کر دیا۔"
    },
    results: [
      { val: "96%", label: { en: "Cash Burn Accuracy", ar: "دقة حساب حرق السيولة", fr: "Précision Taux Combustion", zh: "现金消耗和生命周期预测准确度", ur: "کیش برن کی درستگی" } },
      { val: "Instant", label: { en: "Option Vest Sync", ar: "مزامنة استحقاق الخيارات الفورية", fr: "Sync Vesting des Options", zh: "员工股权归属分录自动同步", ur: "آپشن ویسٹ سنک" } },
      { val: "Zero", label: { en: "IFRS R&D Disputes", ar: "نزاعات البحث والتطوير للـ IFRS الصفرية", fr: "Zéro Litige R&D IFRS", zh: "研发资本化审计争议", ur: "IFRS R&D کے تنازعات" } }
    ]
  },
  pl: {
    flag: "🇵🇱", rating: 5, years: 4, sizeCode: "mid", industryCode: "wholesale",
    countryName: { en: "Poland", ar: "بولندا", fr: "Pologne", zh: "波兰", ur: "پولینڈ" },
    companyName: { en: "Vistula Wholesale Goods", ar: "فيستولا للسلع بالجملة", fr: "Vistula Wholesale Goods", zh: "维斯瓦河消费品批发分销商", ur: "وسٹولا ہول سیل سامان" },
    industry: { en: "Wholesale Trade", ar: "تجارة الجملة", fr: "Commerce de Gros", zh: "消费品大宗商品批发贸易", ur: "ہول سیل تجارت" },
    sizeText: { en: "Mid-market (280 Employees)", ar: "متوسطة الحجم (٢٨٠ موظف)", fr: "Moyenne Entreprise (280 employés)", zh: "中型企业 (280 名员工)", ur: "درمیانے درجے کی کمپنی (280 ملازمین)" },
    businessType: { en: "Sp. z o.o. Corporation", ar: "شركة ذات مسؤولية محدودة بولندية", fr: "Corporation Sp. z o.o.", zh: "波兰Sp. z o.o.贸易公司", ur: "Sp. z o.o. کارپوریشن" },
    ceo: { en: "Katarzyna Kowalski, CFO", ar: "كاتارزينا كوالسكي، المدير المالي", fr: "Katarzyna Kowalski, CFO", zh: "Katarzyna Kowalski, 财务总监", ur: "کاتارزینا کووالسکی، سی ایف او" },
    challenge: {
      en: "Managing stock updates across 5 hubs, volume client rebates, and Polish VAT tax compliance rules.",
      ar: "إدارة تحديثات المخزون عبر ٥ مراكز، وخصومات العملاء الكبار، وقواعد امتثال ضريبة القيمة المضافة البولندية.",
      fr: "Gestion des stocks sur 5 centres, remises de volume clients et règles de conformité TVA polonaise.",
      zh: "在波兰5个核心物流中转仓之间同步庞大的动态库存盘点、计算面向大客户的大宗交易量折扣返利，以及符合波兰税局规范的合规报税。",
      ur: "5 ہبوں میں اسٹاک اپ ڈیٹس، کلائنٹ کی رعایتیں، اور پولش VAT ٹیکس کی تعمیل۔"
    },
    solution: {
      en: "Multi-warehouse dynamic inventory syncing, automated discount tables, and local VAT portal reports.",
      ar: "مزامنة المخزون الديناميكية متعددة المستودعات، وجداول الخصم المؤتمتة، وتقارير بوابة ضريبة القيمة المضافة المحلية.",
      fr: "Synchronisation dynamique multi-entrepôts, grilles de remises automatisées et rapports TVA locaux.",
      zh: "动态多仓库存同步对账算法、内置阶梯折扣计息引擎，以及集成波兰本地的税务直报接口表格。",
      ur: "ملٹی گودام انوینٹری سنک، خودکار ڈسکاؤنٹ ٹیبلز، اور پولش VAT رپورٹنگ۔"
    },
    testimonial: {
      en: "Hiesabati handles our localized tax compliance and high-volume wholesale billing seamlessly. Superior software architecture.",
      ar: "تتعامل حسابتي مع امتثالنا الضريبي المحلي وفواتير الجملة كبيرة الحجم بسلاسة. بنية برمجية متفوقة.",
      fr: "Hiesabati gère notre TVA locale et notre facturation de gros de manière fluide.",
      zh: "Hiesabati 帮我们一举解决了以前繁琐的本土税务申报和海量批发开票流水的账务对齐。底层技术实力强悍。",
      ur: "حساباتی ہمارے مقامی ٹیکس کی تعمیل اور ہول سیل بلنگ کو آسانی سے سنبھالتی ہے۔"
    },
    results: [
      { val: "99.1%", label: { en: "Inventory Accuracy", ar: "دقة المخزون", fr: "Précision des Stocks", zh: "仓储盘点数据吻合率", ur: "انوینٹری درستگی" } },
      { val: "Instant", label: { en: "Client Rebate Trigger", ar: "تشغيل خصومات العملاء الفوري", fr: "Déclencheur de Remise Immédiat", zh: "阶梯返利自动记账结算", ur: "فوری کلائنٹ چھوٹ" } },
      { val: "Zero", label: { en: "Tax Discrepancies", ar: "فروقات محاسبية ضريبية صفرية", fr: "Zéro Écart Fiscal", zh: "本地涉税处罚发生次数", ur: "صفر ٹیکس تضادات" } }
    ]
  },
  qa: {
    flag: "🇶🇦", rating: 5, years: 5, sizeCode: "enterprise", industryCode: "oilgas",
    countryName: { en: "Qatar", ar: "قطر", fr: "Qatar", zh: "卡塔尔", ur: "قطر" },
    companyName: { en: "Doha Energy Operations", ar: "الدوحة لعمليات الطاقة", fr: "Doha Energy Operations", zh: "多哈能源与石油天然气运营公司", ur: "دوحہ انرجی آپریشنز" },
    industry: { en: "Oil & Gas Operations", ar: "قطر النفط والغاز", fr: "Secteur Pétrolier", zh: "石油天然气开采与能源运营", ur: "آئل اینڈ گیس آپریشنز" },
    sizeText: { en: "Enterprise (2,400 Employees)", ar: "مؤسسة كبرى (٢,٤٠٠ موظف)", fr: "Grande Entreprise (2 400 employés)", zh: "大型企业 (2,400 名员工)", ur: "بڑی کمپنی (2,400 ملازمین)" },
    businessType: { en: "Sovereign Corporation", ar: "شركة حكومية سيادية", fr: "Corporation Souveraine", zh: "主权联营能源实体", ur: "سرکاری کارپوریشن" },
    ceo: { en: "Khalid Al-Thani, Finance Controller", ar: "خالد آل ثاني، مراقب الشؤون المالية", fr: "Khalid Al-Thani, Contrôleur", zh: "Khalid Al-Thani, 能源财务总监", ur: "خالد آل ثانی، فنانس کنٹرولر" },
    challenge: {
      en: "Capital asset tracking for offshore rigs, multi-tier compliance audits, and sub-contractor cost allocations.",
      ar: "تتبع الأصول الرأسمالية لمنصات الحفر البحرية، وتدقيقات الامتثال متعددة المستويات، وتخصيصات تكاليف المقاولين الفرعيين.",
      fr: "Suivi d'actifs pour plateformes offshore, audits complexes et allocation des sous-traitants.",
      zh: "跟踪海上钻井平台折旧及维护费、应付监管机构合规检查，以及工程分包商费用精细化分摊。",
      ur: "آف شور رگز کے لیے اثاثوں کی ٹریکنگ، کثیر فریقی تعمیل آڈٹ، اور ذیلی ٹھیکیداروں کے اخراجات۔"
    },
    solution: {
      en: "Asset lifecycle tracking logs, multi-layered audit structures, and dynamic rig cost centers.",
      ar: "سجلات تتبع دورة حياة الأصول، وهياكل تدقيق متعددة الطبقات، ومراكز تكلفة ديناميكية لمنصات الحفر.",
      fr: "Régistres de cycle de vie des actifs, structures d'audits et centres de coûts par plateforme.",
      zh: "置固资全生命周期追踪折旧台账、开发支持多重审查的内控模块，并设立独立的动态成本中心分摊机制。",
      ur: "اثاثوں کے لائف سائیکل ٹریکنگ، آڈٹ ڈھانچے، اور متحرک رگ لاگت کے مراکز۔"
    },
    testimonial: {
      en: "Hiesabati handles our heavy capital cost centers and audit requirements with unparalleled precision.",
      ar: "تتعامل حسابتي مع مراكز التكاليف الرأسمالية الثقيلة ومتطلبات التدقيق لدينا بدقة لا ميل لها.",
      fr: "Hiesabati gère nos immobilisations lourdes et nos audits avec une précision inégalée.",
      zh: "Hiesabati 在处理高价值资本密集型成本分摊和多层级海内外审计事务时的表现非常专业，精度极高。",
      ur: "حساباتی ہمارے بھاری سرمائے کے اخراجات کے مراکز اور آڈٹ کے تقاضوں کو بے مثال درستگی کے ساتھ سنبھالتی ہے۔"
    },
    results: [
      { val: "99.8%", label: { en: "Asset Lifecycle Match", ar: "مطابقة دورة حياة الأصول", fr: "Précision Cycle de Vie", zh: "固资账实相符率及折旧精度", ur: "اثاثوں کے لائف سائیکل کی درستگی" } },
      { val: "100%", label: { en: "Audit Alignment", ar: "توافق التدقيق الكامل", fr: "Conformité Audit validée", zh: "主权能源审计合规通过率", ur: "آڈٹ کی مطابقت" } },
      { val: "-20%", label: { en: "Subcontractor Leakage", ar: "الحد من تسرب تكاليف المقاولين", fr: "Pertes Sous-traitants Évitées", zh: "分包虚假开票开支截留", ur: "ذیلی ٹھیکیداروں کے اخراجات میں کمی" } }
    ]
  },
  kw: {
    flag: "🇰🇼", rating: 5, years: 5, sizeCode: "enterprise", industryCode: "government",
    countryName: { en: "Kuwait", ar: "الكويت", fr: "Koweït", zh: "科威特", ur: "کویت" },
    companyName: { en: "Kuwait Public Projects Bureau", ar: "مكتب المشاريع العامة الكويتية", fr: "Kuwait Public Projects Bureau", zh: "科威特公共市政工程局", ur: "کویت پبلک پروجیکٹس بیورو" },
    industry: { en: "Government Services", ar: "الخدمات الحكومية", fr: "Services Publics", zh: "公共市政基础设施与市政建设", ur: "سرکاری خدمات" },
    sizeText: { en: "Enterprise (3,500 Employees)", ar: "مؤسسة كبرى (٣,٥٠٠ موظف)", fr: "Grande Entreprise (3 500 employés)", zh: "大型事业单位 (3,500 名员工)", ur: "بڑی کمپنی (3,500 ملازمین)" },
    businessType: { en: "Ministry Bureau", ar: "مكتب وزاري حكومي", fr: "Bureau Ministériel", zh: "科威特部委直属机构", ur: "وزارتی بیورو" },
    ceo: { en: "Nasser Al-Sabah, Finance Director", ar: "ناصر الصباح، رئيس الشؤون المالية", fr: "Nasser Al-Sabah, Directeur Finances", zh: "Nasser Al-Sabah, 公共预算事务司长", ur: "ناصر الصباح، فنانس ڈائریکٹر" },
    challenge: {
      en: "Public budget accounting, strict government audit trail guidelines, and multi-department opex approvals.",
      ar: "محاسبة الميزانية العامة، والتوجيهات الصارمة لمسار التدقيق الحكومي، وموافقات النفقات التشغيلية متعددة الإدارات.",
      fr: "Comptabilité budgétaire publique, pistes d'audit étatiques strictes et approbations multi-ministérielles.",
      zh: "年度审计拨款对账、遵循政府公共支出极其严苛的追溯记录规范，以及跨部门办公费用的签批审批。",
      ur: "عوامی بجٹ اکاؤنٹنگ، سرکاری آڈٹ ٹریل گائیڈ لائنز، اور متعدد شعبوں کی منظوری۔"
    },
    solution: {
      en: "Double-entry budget limits engine, localized public audit records, and automated hierarchy approvals workflows.",
      ar: "محرك حدود الميزانية مزدوج القيد، وسجلات التدقيق العام المحلية، وتدفقات عمل الموافقات الهرمية المؤتمتة.",
      fr: "Moteur de limites budgétaires, rapports d'audit locaux et workflows d'approbations.",
      zh: "设计双分录财政预算控制引擎、内置本地政府要求的审计历史台账，并实现多层级智能无纸化审批流。",
      ur: "بجٹ کی حد کا انجن، مقامی آڈٹ ریکارڈز، اور خودکار منظوری کا نظام۔"
    },
    testimonial: {
      en: "Hiesabati brought absolute transparency to our project allocations and audit trails. Exceptional software.",
      ar: "جلبت حسابتي شفافية مطلقة لمخصصات مشاريعنا ومسارات التدقيق. برنامج استثنائي.",
      fr: "Hiesabati a apporté une transparence absolue à notre budget et à nos audits.",
      zh: "Hiesabati 让我们市政工程的每一分财政拨款和审计记录都彻底公开透明、查有实据。极其强大的软件系统。",
      ur: "حساباتی نے ہمارے پروجیکٹس کی تقسیم اور آڈٹ ٹریلز میں مکمل شفافیت لائی۔"
    },
    results: [
      { val: "100%", label: { en: "Budget Limit Control", ar: "التحكم في حدود الميزانية", fr: "Contrôle des Limites Budgets", zh: "预算超支红线干预率", ur: "بجٹ کی حد کا کنٹرول" } },
      { val: "Instant", label: { en: "Department Audit Track", ar: "تتبع تدقيق الإدارات الفوري", fr: "Piste d'Audit Directe", zh: "跨部门审计明细一键追溯", ur: "فوری شعبہ جاتی آڈٹ ٹریک" } },
      { val: "Zero", label: { en: "Compliance Overdraws", ar: "تجاوزات الامتثال الصفرية", fr: "Zéro Dépassement Légal", zh: "超支违规申报违纪件数", ur: "صفر تعمیلی تضادات" } }
    ]
  },
  eg: {
    flag: "🇪🇬", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "realestate",
    countryName: { en: "Egypt", ar: "مصر", fr: "Égypte", zh: "埃及", ur: "مصر" },
    companyName: { en: "Cairo Landmark Developments", ar: "القاهرة للتطوير العقاري", fr: "Cairo Landmark Developments", zh: "开罗地标房地产集团", ur: "قاہرہ لینڈ مارک ڈیولپمنٹس" },
    industry: { en: "Commercial Real Estate", ar: "العقارات التجارية", fr: "Immobilier Commercial", zh: "商业地产开发与建设", ur: "تجارتی رئیل اسٹیٹ" },
    sizeText: { en: "Enterprise (950 Employees)", ar: "مؤسسة كبرى (٩٥٠ موظف)", fr: "Grande Entreprise (950 employés)", zh: "大型企业 (950 名员工)", ur: "بڑی کمپنی (950 ملازمین)" },
    businessType: { en: "S.A.E. Joint Stock", ar: "شركة مساهمة مصرية (ش.م.م.)", fr: "Société Anonyme S.A.E.", zh: "埃及S.A.E.股份公司", ur: "S.A.E. جوائنٹ اسٹاک" },
    ceo: { en: "Tarek Abdel Latif, CEO", ar: "طارق عبد اللطيف، الرئيس التنفيذي", fr: "Tarek Abdel Latif, CEO", zh: "Tarek Abdel Latif, 集团董事长", ur: "طارق عبداللطیف، سی ای او" },
    challenge: {
      en: "Managing project cash reserves, complex payment schedules, and national tax billing integrations.",
      ar: "إدارة الاحتياطيات النقدية للمشاريع، وجداول الدفع المعقدة، وتكامل الفوترة الضريبية الوطنية.",
      fr: "Gestion des réserves de trésorerie, échéanciers de paiement complexes et intégrations fiscales égyptiennes.",
      zh: "科学监控房地产项目资本公积和现金流安全垫、管理极其漫长的分期付款账单结清率，以及与埃及国家税务局电子发票系统直接对接。",
      ur: "پروجیکٹ کیش ریزرو کا انتظام، ادائیگی کے پیچیدہ شیڈولز، اور قومی ٹیکس بلنگ۔"
    },
    solution: {
      en: "Smart escrow cash flow trackers, automated client payment alerts, and direct Egyptian tax compliance templates.",
      ar: "أدوات تتبع التدفق النقدي للضمان الذكي، وتنبيهات دفع العملاء التلقائية، وقوالب الامتثال الضريبي المصري المباشر.",
      fr: "Suivi de trésorerie par compte séquestre, alertes clients automatiques et conformité fiscale directe.",
      zh: "托管账户现金流精细追踪工具、配置业主账单到期自动提醒回款模块，并直接内嵌对接埃及电子发票（ETA）的申报合规表单。",
      ur: "سمارٹ ایسکرو ٹریکرز، کلائنٹ کی ادائیگی کے خودکار الرٹس، اور مصری ٹیکس کی تعمیل کے ٹیمپلیٹس۔"
    },
    testimonial: {
      en: "Hiesabati handles our capital intensive real estate costs and local tax compliances perfectly. Highly responsive system.",
      ar: "تتعامل حسابتي مع تكاليفنا العقارية كثيفة رأس المال والامتثال الضريبي المحلي بشكل مثالي. منصة مستجيبة للغاية.",
      fr: "Hiesabati gère nos coûts immobiliers lourds et nos taxes locales parfaitement. Système très performant.",
      zh: "Hiesabati 在帮助我们核算高净值地产建设账单和应对本地电子税局监管方面表现极其完美。响应非常敏捷。",
      ur: "حساباتی ہمارے بھاری رئیل اسٹیٹ اخراجات اور مقامی ٹیکس تعمیل کو مکمل طور پر سنبھالتی ہے۔"
    },
    results: [
      { val: "+30%", label: { en: "Collection Efficiency", ar: "كفاءة تحصيل المبالغ", fr: "Efficacité Encaissement", zh: "分期付款逾期收回率", ur: "جمع کرنے کی کارکردگی" } },
      { val: "100%", label: { en: "Tax Integration Ready", ar: "جاهزية التكامل الضريبي", fr: "Intégration Fiscale Prête", zh: "埃及ETA接口对接合规率", ur: "ٹیکس انضمام کی تیاری" } },
      { val: "4.7★", label: { en: "Operational Stability", ar: "الاستقرار التشغيلي", fr: "Stabilité Opérationnelle", zh: "系统底层运行稳定性评分", ur: "آپریشنل استحکام" } }
    ]
  },
  za: {
    flag: "🇿🇦", rating: 5, years: 4, sizeCode: "mid", industryCode: "agriculture",
    countryName: { en: "South Africa", ar: "جنوب أفريقيا", fr: "Afrique du Sud", zh: "南非", ur: "جنوبی افریقہ" },
    companyName: { en: "Cape Valley Farming", ar: "مزارع وادي كيب", fr: "Cape Valley Farming", zh: "开普山谷农业集团", ur: "کیپ ویلی فارمنگ" },
    industry: { en: "Agriculture & Farming", ar: "الزراعة والمزارع", fr: "Agriculture & Fermes", zh: "现代农业与农产品出口", ur: "زراعت اور فارمنگ" },
    sizeText: { en: "Mid-market (150 Employees)", ar: "متوسطة الحجم (١٥٠ موظف)", fr: "Moyenne Entreprise (150 employés)", zh: "中型企业 (150 名员工)", ur: "درمیانے درجے کی کمپنی (150 ملازمین)" },
    businessType: { en: "Pty Ltd Agricultural", ar: "شركة زراعية خاصة محدودة (Pty Ltd)", fr: "Société Agricole Pty Ltd", zh: "南非Pty Ltd农业联营体", ur: "Pty Ltd زرعی" },
    ceo: { en: "Jacob Naidoo, Operations Controller", ar: "جاكوب نايدو، مراقب العمليات", fr: "Jacob Naidoo, Contrôleur Opérations", zh: "Jacob Naidoo, 庄园运营与分销主管", ur: "جیکب نائیڈو، آپریشنز کنٹرولر" },
    challenge: {
      en: "Tracking seasonal worker payroll, equipment depreciation accounts, and export tariff ledgers.",
      ar: "تتبع رواتب العمال الموسميين، وحسابات استهلاك المعدات، ودفاتر تعريفات التصدير.",
      fr: "Gestion de la paie saisonnière, amortissement des équipements et tarifs douaniers d'exportation.",
      zh: "核算季节性采摘短工工资差异、计提各种重型农机和灌溉设备的资产折旧账簿，以及清算出口跨国关税。",
      ur: "موسمی کارکنوں کے پے رول کی ٹریکنگ، آلات کی فرسودگی، اور برآمدی ٹیرف لیجرز۔"
    },
    solution: {
      en: "Shift-to-pay triggers for workers, fixed asset depreciation calculators, and automatic export duty matching.",
      ar: "مشغلات الدفع المعتمدة على الورديات للعمال، وحاسبات استهلاك الأصول الثابتة، والمطابقة التلقائية لرسوم التصدير.",
      fr: "Suivi des paies aux shifts, calcul d'amortissement automatique et gestion des droits d'exportation.",
      zh: "引入考勤排班挂钩的短工计酬结算模块、引入固资折旧计算引擎，以及自动进出口关税及配额自动换算账簿。",
      ur: "ورکرز پے رول، فکسڈ اثاثہ جات کی فرسودگی کا مینیجر، اور برآمدی ڈیوٹی کی مطابقت۔"
    },
    testimonial: {
      en: "Managing payroll for seasonal workers and equipment depreciation is now fully automated. Highly robust tools.",
      ar: "أصبحت إدارة كشوف رواتب العمال الموسميين واستهلاك المعدات مؤتمتة بالكامل الآن. أدوات قوية للغاية.",
      fr: "La gestion des paies saisonnières et des équipements est désormais automatisée. Système robuste.",
      zh: "雇佣的大量临时短工计薪和庞大农机的折旧账簿计算现在完全自动化了。功能非常结实耐用。",
      ur: "موسمی کارکنوں کی تنخواہ اور سامان کی فرسودگی کا انتظام اب خودکار ہے۔"
    },
    results: [
      { val: "99%", label: { en: "Payroll Precision", ar: "دقة كشوف الرواتب", fr: "Précision de la Paie", zh: "薪酬发放准确率与零争议", ur: "پے رول کی درستگی" } },
      { val: "Instant", label: { en: "Asset Depreciation Auto", ar: "استهلاك الأصول التلقائي", fr: "Amortissement Automatique", zh: "固资折旧月度摊销时间", ur: "خودکار اثاثوں کی فرسودگی" } },
      { val: "-12%", label: { en: "Tariff Compliance Overhead", ar: "تكاليف الامتثال للتعريفات", fr: "Coûts de Douane Réduits", zh: "进出口涉税合规管理成本", ur: "ٹیرف تعمیل کے اخراجات میں کمی" } }
    ]
  },
  ng: {
    flag: "🇳🇬", rating: 5, years: 3, sizeCode: "enterprise", industryCode: "technology",
    countryName: { en: "Nigeria", ar: "نيجيريا", fr: "Nigéria", zh: "尼日利亚", ur: "نائجیریا" },
    companyName: { en: "Lagos Telecom Group", ar: "مجموعة لاغوس للاتصالات", fr: "Lagos Telecom Group", zh: "拉各斯电信通讯集团", ur: "لاگوس ٹیلی کام گروپ" },
    industry: { en: "Telecom & Network", ar: "الاتصالات والشبكات", fr: "Télécom & Réseaux", zh: "电信与数据通信网络运营", ur: "ٹیلی کام اور نیٹ ورک" },
    sizeText: { en: "Enterprise (1,200 Employees)", ar: "مؤسسة كبرى (١,٢٠٠ موظف)", fr: "Grande Entreprise (1 200 employés)", zh: "大型企业 (1,200 名员工)", ur: "بڑی کمپنی (1,200 ملازمین)" },
    businessType: { en: "Plc Corporation", ar: "شركة مساهمة عامة نيجيرية (Plc)", fr: "Corporation Plc", zh: "尼日利亚上市Plc集团", ur: "Plc کارپوریشن" },
    ceo: { en: "Femi Otedola, Financial Controller", ar: "فيمي أوتيدولا، مراقب الشؤون المالية", fr: "Femi Otedola, Contrôleur", zh: "Femi Otedola, 运营及财务总裁", ur: "فیمی اوٹیڈولا، فنانس کنٹرولر" },
    challenge: {
      en: "Multi-currency vendor settlement contracts, localized regulatory VAT reporting, and high volume daily cash updates.",
      ar: "عقود تسوية الموردين متعددة العملات، والتقارير الضريبية المحلية لضريبة القيمة المضافة، وتحديثات النقد اليومية الضخمة.",
      fr: "Règlements fournisseurs multi-devises, rapports de TVA locaux et flux de trésorerie quotidiens massifs.",
      zh: "给海外设备供应商的多币种采购合同结算对账、尼日利亚本地高要求的VAT税务合规申报，以及每日超大并发的电信收银账目入账分录。",
      ur: "ملٹی کرنسی سپلائر تصفیہ، مقامی VAT کی تعمیل، اور روزانہ کیش کی بڑی مقدار کا انتظام۔"
    },
    solution: {
      en: "Automated multi-currency payout ledger, localized VAT frameworks, and high-performance POS ledger API.",
      ar: "دفتر مدفوعات متعدد العملات المؤتمت، وأطر ضريبة القيمة المضافة المحلية، وواجهة برمجة تطبيقات دفتر نقاط البيع عالية الأداء.",
      fr: "Grand livre fournisseurs multi-devises, cadre TVA local et API POS haute performance.",
      zh: "引入自动化多币种清算挂账工具、建立尼日利亚本地VAT计税规则框架，以及接入超高吞吐量的收银POS总账同步接口。",
      ur: "خودکار ملٹی کرنسی پے آؤٹ لیجر، مقامی VAT فریم ورکس، اور اعلی کارکردگی کا حامل POS API۔"
    },
    testimonial: {
      en: "Multi-currency clearing and high volume billing are flawlessly managed under one platform. Superior system.",
      ar: "يتم إدارة تسويات العملات المتعددة والفواتير الضخمة الخالية من العيوب تحت منصة واحدة. نظام متفوق.",
      fr: "La gestion multi-devises et la facturation de masse fonctionnent à merveille. Système de premier plan.",
      zh: "高并发收支计费流水和复杂的跨国多币种采购结算全都在一个平台上平稳落地。表现远超预期。",
      ur: "ملٹی کرنسی کلئیرنس اور ہائی حجم بلنگ کا انتظام ایک ہی پلیٹ فارم پر بالکل درست ہے۔"
    },
    results: [
      { val: "30%", label: { en: "Operational Cost Reduction", ar: "تقليل التكاليف التشغيلية", fr: "Coût Opérationnel Réduit", zh: "电信财务结算成本降低", ur: "آپریشنل اخراجات میں کمی" } },
      { val: "Instant", label: { en: "Multi-Currency Cleared", ar: "تسوية فورية للعملات", fr: "Devises Apurées Immédiat", zh: "国际结汇转账记账耗时", ur: "فوری ملٹی کرنسی کلئیرنس" } },
      { val: "99.9%", label: { en: "VAT Report Accuracy", ar: "دقة تقارير ضريبة القيمة المضافة", fr: "Précision Rapport TVA", zh: "国税局VAT纳税合规准确率", ur: "VAT رپورٹ کی درستگی" } }
    ]
  },
  cn: {
    flag: "🇨🇳", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "manufacturing",
    countryName: { en: "China", ar: "الصين", fr: "Chine", zh: "中国", ur: "中国" },
    companyName: { en: "Shenzhen Electronics Corp", ar: "شنتشن للإلكترونيات", fr: "Shenzhen Electronics Corp", zh: "深圳精工电子制造集团", ur: "شینزین الیکٹرانکس کارپ" },
    industry: { en: "High-Tech Manufacturing", ar: "التصنيع عالي التقنية", fr: "Industrie de Haute Technologie", zh: "高精尖电子制造与电子元器件", ur: "ہائی ٹیک مینوفیکچرنگ" },
    sizeText: { en: "Enterprise (2,200 Employees)", ar: "مؤسسة كبرى (٢,٢٠٠ موظف)", fr: "Grande Entreprise (2 200 employés)", zh: "大型企业 (2,200 名员工)", ur: "بڑی کمپنی (2,200 ملازمین)" },
    businessType: { en: "Joint Stock Enterprise", ar: "شركة مساهمة صينية", fr: "Entreprise par Actions", zh: "中外合资股份制集团", ur: "جوائنٹ اسٹاک انٹرپرائز" },
    ceo: { en: "Zhang Wei, CFO", ar: "تشانغ وي، المدير المالي", fr: "Zhang Wei, CFO", zh: "张伟, 集团财务总监", ur: "ژانگ وی، سی ای او" },
    challenge: {
      en: "Component inventory tracking for millions of SKU numbers, rapid logistics payouts, and global export duty reports.",
      ar: "تتبع مخزون المكونات لملايين من أرقام SKU، ومدفوعات لوجستية سريعة، وتقارير رسوم التصدير العالمية.",
      fr: "Suivi des stocks de composants pour des millions de SKU, règlements logistiques et taxes d'exportation.",
      zh: "高密集流水线下对数百万种零配件SKU物资的动态库存状态追踪、极速多频次的物流款项清算，以及海关出口关税和退税对账。",
      ur: "لاکھوں SKU نمبروں کے لیے انوینٹری کی ٹریکنگ، تیز رفتار لاجسٹکس ادائیگیاں، اور عالمی برآمدی ڈیوٹی کی رپورٹنگ۔"
    },
    solution: {
      en: "Real-time SKU barcode integrations, global multi-currency settlements, and digital export tariff tracking sheets.",
      ar: "تكاملات باركود SKU في الوقت الفعلي، والتسويات العالمية متعددة العملات، وأوراق تتبع رسوم التصدير الرقمية.",
      fr: "Intégrations de codes-barres SKU en temps réel, règlements multi-devises et registres d'exportation.",
      zh: "接入条码扫描智能硬件与云端API总账直连、全球多币种外币清算对账簿，以及数字化自动出口退税记账单模块。",
      ur: "ریئل ٹائم SKU بار کوڈ انضمام، عالمی ملٹی کرنسی تصفیہ، اور ڈیجیٹل برآمدی ٹیرف لاگز۔"
    },
    testimonial: {
      en: "Hiesabati handles our millions of SKU records and global logistics payouts with absolute reliability. Flawless framework.",
      ar: "تتعامل حسابتي مع ملايين سجلات SKU ومدفوعات العمليات اللوجستية العالمية بموثوقية مطلقة. إطار لا تشوبه شائبة.",
      fr: "Hiesabati gère des millions de SKU et des paiements logistiques avec une fiabilité absolue. Système parfait.",
      zh: "Hiesabati 承载了我们数百万级别的SKU庞大数据和复杂的出境物流结算对账。系统坚如磐石，极其可靠。",
      ur: "حساباتی ہمارے لاکھوں SKU ریکارڈز اور عالمی لاگت کی ادائیگیوں کو مکمل طور پر خودکار انداز میں سنبھالتی ہے۔"
    },
    results: [
      { val: "99.6%", label: { en: "SKU Accuracy Match", ar: "دقة مطابقة رموز SKU", fr: "Précision des SKU", zh: "数百万SKU物资账实相符率", ur: "SKU کی درستگی" } },
      { val: "45%", label: { en: "Faster Logistics Payout", ar: "مدفوعات لوجستية أسرع", fr: "Paiements Logistiques Plus Rapides", zh: "物流运输应收款到账周期缩短", ur: "تیز لاجسٹکس ادائیگی" } },
      { val: "Zero", label: { en: "Export Custom Discrepancies", ar: "فروقات الجمارك التصديرية الصفرية", fr: "Zéro Écart Douanier Export", zh: "出口关税退税核销误差", ur: "برآمدی کسٹمز کی کوئی غلطی نہیں" } }
    ]
  },
  kr: {
    flag: "🇰🇷", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "automotive",
    countryName: { en: "South Korea", ar: "كوريا الجنوبية", fr: "Corée du Sud", zh: "韩国", ur: "جنوبی کوریا" },
    companyName: { en: "Seoul Automotive Solutions", ar: "سول لحلول السيارات", fr: "Seoul Automotive Solutions", zh: "首尔智能汽车部件制造公司", ur: "سیول آٹوموٹو سلوشنز" },
    industry: { en: "Automotive Parts", ar: "قطع غيار السيارات", fr: "Pièces Automobiles", zh: "智能汽车关键部件精密制造", ur: "آٹوموٹو پارٹس" },
    sizeText: { en: "Enterprise (800 Employees)", ar: "مؤسسة كبرى (٨٠٠ موظف)", fr: "Grande Entreprise (800 employés)", zh: "大型企业 (800 名员工)", ur: "بڑی کمپنی (800 ملازمین)" },
    businessType: { en: "Co Ltd Corporation", ar: "شركة محدودة كورية (Co Ltd)", fr: "Corporation Co Ltd", zh: "株式会社", ur: "Co Ltd کارپوریشن" },
    ceo: { en: "Min-ho Park, General Manager", ar: "مين هو بارك، المدير العام", fr: "Min-ho Park, Directeur", zh: "朴岷镐, 生产部常务总监", ur: "من ہو پارک، جنرل مینیجر" },
    challenge: {
      en: "Supply chain balance sheet updates, factory worker shift calculations, and multi-tier compliance audits.",
      ar: "تحديثات الميزانية العمومية لسلسلة التوريد، وحسابات نوبات عمل عمال المصنع، وتدقيقات الامتثال متعددة المستويات.",
      fr: "Mise à jour du bilan de chaîne d'approvisionnement, paies des ouvriers par shifts et audits légaux.",
      zh: "高频率自动更新装配线供应商往来账簿、核算车间流水线工人的加班与轮班工资，以及符合跨国汽车工业监管链合规审计。",
      ur: "سپلائی چین بیلنس شیٹ اپ ڈیٹس، فیکٹری ورکر شفٹ کیلکولیشنز، اور کثیر فریقی تعمیل آڈٹ۔"
    },
    solution: {
      en: "Real-time supply ledger reconciliation, shift-to-payroll integrations, and automated compliance reports.",
      ar: "تسوية دفاتر التوريد في الوقت الفعلي، وتكامل النوبات مع كشوف الرواتب، وتقارير الامتثال المؤتمتة.",
      fr: "Rapprochement en temps réel des fournisseurs, lien paie-shifts et rapports de conformité.",
      zh: "开发实时应收/应付款往来账核销对账模块、实现考勤班次信息直通绩效工资结算系统，以及一键输出监管链审计合规报告表单。",
      ur: "ریئل ٹائم سپلائی لیجر مفاہمت، شفٹ ٹو پے رول انضمام، اور خودکار تعمیلی رپورٹنگ۔"
    },
    testimonial: {
      en: "Hiesabati connected our production plants and local payroll seamlessly in days. Highly reliable platforms.",
      ar: "ربطت حسابتي مصانعنا الإنتاجية وكشوف الرواتب المحلية بسلاسة في أيام. منصة موثوقة للغاية.",
      fr: "Hiesabati a connecté nos usines et notre paie en quelques jours. Très haute fiabilité.",
      zh: "Hiesabati 在短短几天内就打通了我们零配件加工厂与总公司薪资发放数据。稳定可靠，超乎预期。",
      ur: "حساباتی نے ہمارے پروڈکشن پلانٹس اور پے رول کو آسانی سے جوڑ دیا۔"
    },
    results: [
      { val: "99.5%", label: { en: "Supply Reconciliation Match", ar: "مطابقة تسوية التوريد", fr: "Rapprochement Fournisseurs", zh: "供应链货款账簿核销一致度", ur: "سپلائی مفاہمت کی درستگی" } },
      { val: "40%", label: { en: "Overtime Payroll Cut", ar: "خفض تكاليف العمل الإضافي", fr: "Marge Heures Supplémentaires", zh: "车间加班费冒领虚报削减", ur: "اوور ٹائم پے رول کی لاگت میں کمی" } },
      { val: "Zero", label: { en: "Audit Non-compliance", ar: "عدم الامتثال للتدقيق الصفري", fr: "Zéro Défaut d'Audit", zh: "合规审计不合格漏洞", ur: "آڈٹ کی کوئی عدم تعمیل نہیں" } }
    ]
  },
  in: {
    flag: "🇮🇳", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "consulting",
    countryName: { en: "India", ar: "الهند", fr: "Inde", zh: "印度", ur: "بھارت" },
    companyName: { en: "Bharat Tech Advisory", ar: "بهارات للاستشارات التقنية", fr: "Bharat Tech Advisory", zh: "班加罗尔软件技术服务集团", ur: "بھارت ٹیک ایڈوائزری" },
    industry: { en: "IT Consulting & Services", ar: "استشارات تقنية المعلومات", fr: "Conseil IT & Services", zh: "IT技术咨询与企业级软件外包", ur: "آئی ٹی مشاورت اور خدمات" },
    sizeText: { en: "Enterprise (1,500 Employees)", ar: "مؤسسة كبرى (١,٥٠٠ موظف)", fr: "Grande Entreprise (1 500 employés)", zh: "大型企业 (1,500 名员工)", ur: "بڑی کمپنی (1,500 ملازمین)" },
    businessType: { en: "Pvt Ltd Corporation", ar: "شركة خاصة محدودة هندية (Pvt Ltd)", fr: "Corporation Pvt Ltd", zh: "印度Pvt Ltd民营股份制实体", ur: "Pvt Ltd کارپوریشن" },
    ceo: { en: "Rajesh Sharma, Finance Director", ar: "راجيش شارما، رئيس الشؤون المالية", fr: "Rajesh Sharma, Directeur", zh: "Rajesh Sharma, 集团财务总监", ur: "راجیش شرما، فنانس ڈائریکٹر" },
    challenge: {
      en: "Multi-client project cost tracking, international invoicing structures, and Indian GST tax reconciliation.",
      ar: "تتبع تكاليف المشاريع لعملاء متعددين، وهياكل الفواتير الدولية، وتسوية ضريبة السلع والخدمات الهندية (GST).",
      fr: "Suivi des coûts projets multi-clients, facturation internationale et réconciliation de la taxe GST indienne.",
      zh: "为大量项目核算项目工时成本、开发全球开票计费的模板，以及按时核对印度的GST增值税发票抵扣。",
      ur: "ملٹی کلائنٹ پروجیکٹ لاگت کی ٹریکنگ، بین الاقوامی انوائسنگ، اور انڈین GST ٹیکس مفاہمت۔"
    },
    solution: {
      en: "Flexible project cost centers, localized GST matching codes, and automated client billing reports.",
      ar: "مراكز تكلفة مشاريع مرنة، ورموز مطابقة ضريبة السلع والخدمات المحلية، وتقارير فوترة العملاء المؤتمتة.",
      fr: "Centres de coûts projets flexibles, codes d'alignement GST locaux et rapports de facturation automatisés.",
      zh: "部署灵活的项目成本中心与工时核算矩阵、自动匹配印度GST抵扣税号校验器，以及开发自动化客户月度账单直报。",
      ur: "لچکدار پروجیکٹ لاگت کے مراکز، مقامی GST ٹیکس کوڈز، اور خودکار بلنگ رپورٹس۔"
    },
    testimonial: {
      en: "Indian GST reconciliation and project cost tracking are seamless with Hiesabati. Exceptional software quality.",
      ar: "تعد تسوية ضريبة السلع والخدمات الهندية وتتبع تكاليف المشاريع سلسة للغاية مع حسابتي. جودة برمجيات استثنائية.",
      fr: "La réconciliation GST et le coût par projet sont parfaits. Logiciel d'une qualité rare.",
      zh: "印度的GST发票抵扣计算和外包项目工时成本分摊变得无比顺畅。Hiesabati 的系统性能让人叹服。",
      ur: "انڈین GST مفاہمت اور پروجیکٹ لاگت کی ٹریکنگ حساباتی کے ساتھ انتہائی آسان ہے۔"
    },
    results: [
      { val: "38%", label: { en: "Faster Multi-Client Close", ar: "إغلاق مالي أسرع لعملاء متعددين", fr: "Clôture Multi-projets Rapide", zh: "跨国项目财务结账提速", ur: "تیز مالیاتی بندش" } },
      { val: "100%", label: { en: "GST Matching Accurate", ar: "دقة مطابقة ضريبة السلع والخدمات", fr: "Conformité GST Précise", zh: "印度GST销项进项匹配精度", ur: "GST ٹیکس کی درستگی" } },
      { val: "Zero", label: { en: "Project Costing Errors", ar: "أخطاء احتساب تكاليف المشاريع الصفرية", fr: "Zéro Erreur Coût Projet", zh: "软件工时成本核算分摊错漏", ur: "پروجیکٹ لاگت کی کوئی غلطی نہیں" } }
    ]
  },
  pk: {
    flag: "🇵🇰", rating: 5, years: 4, sizeCode: "mid", industryCode: "wholesale",
    countryName: { en: "Pakistan", ar: "باكستان", fr: "Pakistan", zh: "巴基斯坦", ur: "پاکستان" },
    companyName: { en: "Indus Textiles Wholesale", ar: "إندوس لتجارة المنسوجات", fr: "Indus Textiles Wholesale", zh: "印度河纺织品大宗商品批发商", ur: "انڈس ٹیکسٹائل ہول سیل" },
    industry: { en: "Textiles & Wholesale", ar: "المنسوجات والجملة", fr: "Textiles & Commerce de Gros", zh: "纺织品批发与进出口分销", ur: "ٹیکسٹائل اور ہول سیل" },
    sizeText: { en: "Mid-market (290 Employees)", ar: "متوسطة الحجم (٢٩٠ موظف)", fr: "Moyenne Entreprise (290 employés)", zh: "中型企业 (290 名员工)", ur: "درمیانے درجے کی کمپنی (290 ملازمین)" },
    businessType: { en: "Pvt Ltd Textiles", ar: "شركة منسوجات خاصة محدودة", fr: "Textile Pvt Ltd", zh: "巴基斯坦Pvt Ltd纺织品贸易公司", ur: "Pvt Ltd ٹیکسٹائل" },
    ceo: { en: "Imran Khan, General Manager", ar: "عمران خان، المدير العام", fr: "Imran Khan, Directeur", zh: "Imran Khan, 常务总经理", ur: "عمران خان، جنرل مینیجر" },
    challenge: {
      en: "High volume client credit monitoring, supplier billing delays, and export tax duty filings.",
      ar: "مراقبة ائتمان العملاء ذوي الأحجام الكبيرة، وتأخير فواتير الموردين، وإقرارات ضريبة التصدير.",
      fr: "Suivi des limites de crédit clients, retards factures fournisseurs et taxes d'exportation.",
      zh: "高额度批发客户的账期与授信信用额度监管、供货商发票拖延匹配挂账，以及出口退税的申报对账核销。",
      ur: "کلائنٹ کریڈٹ مانیٹرنگ، سپلائرز کے بلوں میں تاخیر، اور برآمدی ٹیکس فائلنگ۔"
    },
    solution: {
      en: "Credit monitoring engine alerts, automated invoice scanning uploads, and localized export tax sheets.",
      ar: "تنبيهات محرك مراقبة الائتمان، وتحميلات مسح الفواتير المؤتمتة، وأوراق ضريبة التصدير المحلية.",
      fr: "Alertes limites de crédit, imports factures automatiques et cadres fiscaux d'exportation.",
      zh: "授信额度红线预警提醒引擎、发票自动扫描解析上传挂账，并集成巴基斯坦本国出口税务直报表格。",
      ur: "کریڈٹ مانیٹرنگ الرٹس، خودکار فواتیر اسکیننگ، اور مقامی برآمدی ٹیکس شیٹس۔"
    },
    testimonial: {
      en: "Hiesabati automated our wholesale invoicing and client credit controls seamlessly. Invaluable system.",
      ar: "أتمت حسابتي فواتير الجملة وضوابط ائتمان العملاء بسلاسة. نظام لا يثمن.",
      fr: "Hiesabati a automatisé notre facturation de gros et nos limites de crédit. Système inestimable.",
      zh: "Hiesabati 帮我们完全打通并自动控制了批发渠道应收款账期和客户授信信用风控。不可或缺的系统。",
      ur: "حساباتی نے ہمارے ہول سیل انوائسنگ اور کلائنٹ کریڈٹ کنٹرول کو خودکار بنا دیا۔"
    },
    results: [
      { val: "94%", label: { en: "Credit Control Accuracy", ar: "دقة التحكم في الائتمان", fr: "Précision Risque Crédit", zh: "客户账期授信红线拦截准确率", ur: "کریڈٹ کنٹرول کی درستگی" } },
      { val: "Instant", label: { en: "Export Tax Auto-Compile", ar: "تجميع تلقائي لضريبة التصدير", fr: "Compilation Taxe Export Auto", zh: "出口税表自动编译导出", ur: "خودکار برآمدی ٹیکس فائلنگ" } },
      { val: "-16%", label: { en: "Billing Overhead Cut", ar: "خفض تكاليف الفوترة الإضافية", fr: "Coût Facturation Réduit", zh: "大宗贸易财务人工开支削减", ur: "بلنگ کے اخراجات میں کمی" } }
    ]
  },
  nz: {
    flag: "🇳🇿", rating: 5, years: 5, sizeCode: "mid", industryCode: "logistics",
    countryName: { en: "New Zealand", ar: "نيوزيلندا", fr: "Nouvelle-Zélande", zh: "新西兰", ur: "نیوزی لینڈ" },
    companyName: { en: "Pacific Transport & Logistics", ar: "المحيط الهادئ للنقل واللوجستيات", fr: "Pacific Transport & Logistics", zh: "Pacific Transport & Logistics", ur: "پیسفک ٹرانسپورٹ اور لاجسٹکس" },
    industry: { en: "Logistics & Shipping", ar: "الشحن واللوجستيات", fr: "Logistique Maritime", zh: "港口冷链仓储与多式联运", ur: "لاجسٹکس اور شپنگ" },
    sizeText: { en: "Mid-market (220 Employees)", ar: "متوسطة الحجم (٢٢٠ موظف)", fr: "Moyenne Entreprise (220 employés)", zh: "中型企业 (220 名员工)", ur: "درمیانے درجے کی کمپنی (220 ملازمین)" },
    businessType: { en: "LTD Corporation", ar: "شركة ليميتد النيوزيلندية (LTD)", fr: "Corporation LTD", zh: "新西兰LTD集团", ur: "LTD کارپوریشن" },
    ceo: { en: "Liam Thompson, Operations Head", ar: "ليام تومبسون، رئيس العمليات", fr: "Liam Thompson, Chef Opérations", zh: "Liam Thompson, 冷链仓储调配主管", ur: "لیام تھامسن، آپریشنز ہیڈ" },
    challenge: {
      en: "Managing cold storage inventory levels, customs clearing taxes, and multi-currency carrier accounts.",
      ar: "إدارة مستويات مخزون المستودعات المبردة، وضرائب التخليص الجمركي، وحسابات الناقلين متعددة العملات.",
      fr: "Gestion des stocks en zone réfrigérée, taxes douanières et comptes transporteurs multi-devises.",
      zh: "监控港口冷链仓库温控车间货位库存、计算港口报关清关关税，以及给各国海运承运方清算多币种往来账目。",
      ur: "کولڈ اسٹوریج انوینٹری، کسٹم کلیئرنس ٹیکس، اور ملٹی کرنسی کیریئر اکاؤنٹس کا انتظام۔"
    },
    solution: {
      en: "Real-time warehouse barcode logs, localized duty matching calculators, and automatic multi-currency ledgers.",
      ar: "سجلات باركود المستودعات في الوقت الفعلي، وحاسبات مطابقة الرسوم المحلية، ودفاتر الحسابات التلقائية متعددة العملات.",
      fr: "Grand livre par API codes-barres, calculateur de douane local et écritures devises automatiques.",
      zh: "实时库存台账、内置本地化进出口关税智能计算模块，并自动实现跨国结汇结算分录核销。",
      ur: "ریئل ٹائم گودام بار کوڈ لاگز، مقامی کسٹمز کیلکولیٹرز، اور خودکار ملٹی کرنسی لیجرز。"
    },
    testimonial: {
      en: "Cold chain logistics inventory and multi-currency payout reconciliation is fully automated. Unparalleled system support.",
      ar: "أصبحت تسويات مخزون الخدمات اللوجستية لسلسلة التبريد والمدفوعات متعددة العملات مؤتمتة بالكامل. دعم لا مثيل له.",
      fr: "La gestion de logistique froide et les devises sont automatisées. Excellent support.",
      zh: "冷链集装箱盘点与海运运费汇兑结算工作已经完全被自动化替代。运维支持响应十分迅速。",
      ur: "کولڈ چین لاجسٹکس انوینٹری اور ملٹی کرنسی پے آؤٹ مفاہمت اب خودکار ہیں۔"
    },
    results: [
      { val: "99.2%", label: { en: "Cold Storage Accuracy", ar: "دقة المخازن المبردة", fr: "Précision Zone Froide", zh: "冷链仓储盘点准确率", ur: "کولڈ اسٹوریج کی درستگی" } },
      { val: "Instant", label: { en: "Custom Duty Cleared", ar: "التخليص الجمركي الفوري للرسوم", fr: "Taxes de Douane validées", zh: "清关关税与退税核对耗时", ur: "فوری کسٹمز ڈیوٹی کلیئرنس" } },
      { val: "-14%", label: { en: "Carrier Settlement Payout Time", ar: "تقليل زمن تسويات الناقلين", fr: "Délai de Paiement Réduit", zh: "承运商付账审核周转期缩短", ur: "کیریئر کی ادائیگی کا وقت" } }
    ]
  },
  cl: {
    flag: "🇨🇱", rating: 5, years: 3, sizeCode: "mid", industryCode: "oilgas",
    countryName: { en: "Chile", ar: "تشيلي", fr: "Chili", zh: "智利", ur: "چلی" },
    companyName: { en: "Andes Minerals Corp", ar: "أنديز للمعادن", fr: "Andes Minerals Corp", zh: "安第斯矿业公司", ur: "اینڈیز منرلز کارپ" },
    industry: { en: "Natural Resources & Energy", ar: "الموارد الطبيعية والطاقة", fr: "Ressources Naturenelles & Énergie", zh: "矿业与自然资源", ur: "قدرتی وسائل اور توانائی" },
    sizeText: { en: "Mid-market (280 Employees)", ar: "متوسطة الحجم (٢٨٠ موظف)", fr: "Moyenne Entreprise (280 employés)", zh: "中型企业 (280 名员工)", ur: "درمیانے درجے کی کمپنی (280 ملازمین)" },
    businessType: { en: "S.A. Mining", ar: "شركة تعدين مساهمة", fr: "Société Anonyme", zh: "股份制矿业公司", ur: "مائننگ کارپوریشن" },
    ceo: { en: "Carlos Ortiz, Operations Lead", ar: "كارلوس أورتيز، رئيس العمليات", fr: "Carlos Ortiz, Chef Opérations", zh: "Carlos Ortiz, 矿区运营主管", ur: "کارلوس اورٹیز، آپریشنز ہیڈ" },
    challenge: {
      en: "Tracking heavy equipment parts across isolated mountain mine locations, high currency conversion overheads, and local tax compliance.",
      ar: "تتبع قطع غيار المعدات الثقيلة عبر مواقع المناجم الجبلية المعزولة، وارتفاع تكاليف تحويل العملات، والامتثال الضريبي المحلي.",
      fr: "Suivi des pièces d'équipement lourd dans des mines isolées, coûts de conversion élevés et conformité fiscale locale.",
      zh: "在偏远的高山矿区网点监控重型设备的零配件库存、应对频繁的外币兑换对账及汇兑损益，以及清算复杂的本地矿业税收。",
      ur: "پہاڑی کانوں کے مقامات پر بھاری سامان کے پرزوں کی ٹریکنگ، کرنسی کے تبادلے کے اخراجات، اور مقامی ٹیکس کی تعمیل۔"
    },
    solution: {
      en: "Multi-warehouse barcode integrations, automated currency conversion ledger registers, and automated tax billing.",
      ar: "تكامل الباركود متعدد المستودعات، وسجلات دفاتر تحويل العملات المؤتمتة، والفوترة الضريبية المؤتمتة.",
      fr: "Intégration de codes-barres multi-entrepôts, écritures de change automatiques et facturation fiscale automatisée.",
      zh: "部署基于条码的多仓库物资转移追溯系统、开发实时外汇总账结转工具，并内置矿区资源税自动计税开票模板。",
      ur: "ملٹی گودام بار کوڈ انضمام，خودکار کرنسی تبادلہ رجسٹر، اور ٹیکس بلنگ۔"
    },
    testimonial: {
      en: "Tracking cost centers across remote mining operations and automated currency conversions has never been easier.",
      ar: "لم يكن تتبع مراكز التكلفة عبر عمليات التعدين عن بعد وتحويلات العملات المؤتمتة أسهل من أي وقت مضى.",
      fr: "Gérer la comptabilité analytique de sites miniers isolés et le change de devises est devenu très simple.",
      zh: "同时管理多个偏远矿区的财务成本中心以及进行自动外汇结算，以前极其繁琐，现在变得非常简单。",
      ur: "دور دراز مائننگ آپریشنز میں لاگت کے مراکز کی ٹریکنگ اور خودکار کرنسی تبادلہ اب انتہائی آسان ہو گیا ہے۔"
    },
    results: [
      { val: "99.4%", label: { en: "Inventory Accuracy", ar: "دقة المخزون", fr: "Précision des Stocks", zh: "重型零配件实物相符率", ur: "انوینٹری درستگی" } },
      { val: "Instant", label: { en: "Currency Conversions", ar: "تحويلات العملات الفورية", fr: "Conversions Devises", zh: "外汇兑换自动记账时间", ur: "فوری کرنسی تبادلہ" } },
      { val: "Zero", label: { en: "Tax Compliance Gaps", ar: "فجوات الامتثال الضريبي الصفرية", fr: "Zéro Écart Fiscal", zh: "矿区涉税审计合规漏损", ur: "ٹیکس کی کوئی خلاف ورزی نہیں" } }
    ]
  },
  be: {
    flag: "🇧🇪", rating: 5, years: 4, sizeCode: "mid", industryCode: "logistics",
    countryName: { en: "Belgium", ar: "بلجيكا", fr: "Belgique", zh: "比利时", ur: "بیلجیم" },
    companyName: { en: "Brussels Port Logistics", ar: "بروكسل للخدمات اللوجستية", fr: "Brussels Port Logistics", zh: "布鲁塞尔港口物流公司", ur: "برسلز پورٹ لاجسٹکس" },
    industry: { en: "Port & Supply Chain", ar: "الميناء وسلسلة التوريد", fr: "Logistique Portuaire", zh: "港口与跨国供应链物流", ur: "پورٹ اور سپلائی چین" },
    sizeText: { en: "Mid-market (310 Employees)", ar: "متوسطة الحجم (٣١٠ موظف)", fr: "Moyenne Entreprise (310 employés)", zh: "中型企业 (310 名员工)", ur: "درمیانے درجے کی کمپنی (310 ملازمین)" },
    businessType: { en: "S.A. Corporation", ar: "شركة مساهمة بلجيكية", fr: "Société Anonyme", zh: "S.A.物流集团", ur: "S.A. کارپوریشن" },
    ceo: { en: "Philippe Dubois, Operations Chief", ar: "فيليب دوبوا، رئيس العمليات", fr: "Philippe Dubois, Chef Opérations", zh: "Philippe Dubois, 港口调度与物流主管", ur: "فلپ ڈوبوا، آپریشنز چیف" },
    challenge: {
      en: "Managing high-volume shipping customs clearances, EU VAT tax rules, and multi-currency driver salaries.",
      ar: "إدارة التخليص الجمركي للشحن عالي الحجم، وقواعد ضريبة القيمة المضافة للاتحاد الأوروبي، ورواتب السائقين متعددة العملات.",
      fr: "Gestion des déclarations douanières volumineuses, règles de TVA européenne et salaires des chauffeurs en plusieurs devises.",
      zh: "处理大宗集装箱国际货运报关申报、计算繁复的欧盟增值税规则，以及向不同国家的货车司机结算多币种薪资。",
      ur: "ہائی حجم شپنگ کسٹمز کلیئرنس، یورپی یونین VAT ٹیکس کے قوانین، اور ڈرائیوروں کی ملٹی کرنسی تنخواہوں کا انتظام۔"
    },
    solution: {
      en: "Auto-matching invoice imports, EU tax rule grids, and integrated shift payroll engines.",
      ar: "استيراد الفواتير ذات المطابقة التلقائية، وشبكات قواعد الضرائب في الاتحاد الأوروبي، ومحركات رواتب الورديات المتكاملة.",
      fr: "Importation automatique de factures, grilles de TVA européenne et calcul automatique de la paie.",
      zh: "配置智能发票关联匹配模块、内建欧盟各成员国VAT税率对照矩阵，以及集成班次和路程的绩效工资计算系统。",
      ur: "خودکار انوائس اسکیننگ، یورپی یونین ٹیکس رول گرڈز，اور مربوط شفٹ پے رول انجن۔"
    },
    testimonial: {
      en: "The EU tax compliance grid and automatic driver payroll integrations eliminated our operational bottlenecks.",
      ar: "ألغت شبكة الامتثال الضريبي في الاتحاد الأوروبي وتكامل رواتب السائقين التلقائي اختناقاتنا التشغيلية.",
      fr: "La gestion de la TVA européenne et la paie intégrée ont résolu tous nos goulots d'étranglement.",
      zh: "欧盟VAT税务规则自动匹配和司机绩效工资系统，彻底帮我们消除了以往繁琐的后台行政流水分录瓶颈。",
      ur: "یورپی یونین کے ٹیکس تعمیل گرڈ اور خودکار ڈرائیور پے رول نے ہماری آپریشنل رکاوٹوں کو ختم کر دیا۔"
    },
    results: [
      { val: "+40%", label: { en: "Customs Clearing Speed", ar: "سرعة التخليص الجمركي", fr: "Vitesse de Dédouanement", zh: "海关通关与核销速度", ur: "کسٹمز کلیئرنس کی رفتار" } },
      { val: "Zero", label: { en: "EU VAT Errors", ar: "أخطاء ضريبة القيمة المضافة الأوروبية الصفرية", fr: "Zéro Erreur TVA UE", zh: "欧盟内部交易报税差错", ur: "یورپی یونین VAT کی کوئی غلطی نہیں" } },
      { val: "99.2%", label: { en: "Salary Matching Accuracy", ar: "دقة مطابقة الرواتب", fr: "Précision des Salaires", zh: "司机复杂里程工资匹配率", ur: "تنخواہ کی درستگی" } }
    ]
  },
  no: {
    flag: "🇳🇴", rating: 5, years: 3, sizeCode: "growth", industryCode: "technology",
    countryName: { en: "Norway", ar: "النرويج", fr: "Norvège", zh: "挪威", ur: "ناروے" },
    companyName: { en: "Fjord Tech Innovators", ar: "فيورد لمبتكري التكنولوجيا", fr: "Fjord Tech Innovators", zh: "奥斯陆峡湾科技创新公司", ur: "فیورڈ ٹیک انوویٹرز" },
    industry: { en: "Software & CleanTech", ar: "البرمجيات والتكنولوجيا النظيفة", fr: "Logiciels & CleanTech", zh: "绿色新能源与清洁科技软件", ur: "سافٹ ویئر اور کلین ٹیک" },
    sizeText: { en: "Growth (88 Employees)", ar: "شركة متنامية (٨٨ موظف)", fr: "Jeune Pousse (88 employés)", zh: "高成长科技企业 (88 名员工)", ur: "ترقی کرتی کمپنی (88 ملازمین)" },
    businessType: { en: "AS Corporation", ar: "شركة مساهمة نرويجية (AS)", fr: "Corporation AS", zh: "AS股份有限公司", ur: "AS کارپوریشن" },
    ceo: { en: "Lars Lindqvist, Co-Founder", ar: "لارس ليندكفيست، المؤسس المشارك", fr: "Lars Lindqvist, Co-fondateur", zh: "Lars Lindqvist, 联合创始人", ur: "لارس لنڈکوسٹ، شریک بانی" },
    challenge: {
      en: "Tracking research and development cost capitalization, stock options allocations, and cash flow predictions under local rules.",
      ar: "تتبع رسملة تكاليف البحث والتطوير، وتخصيصات خيارات الأسهم، وتوقعات التدفقات النقدية بموجب القواعد المحلية.",
      fr: "Suivi de la capitalisation de la R&D, allocation des stock-options et prévisions de trésorerie locale.",
      zh: "准确跟踪符合本地准则的研发费用的资产化确权、管理复杂的期权行权及回购，以及提供科学的SaaS现金流安全期预测。",
      ur: "R&D اخراجات کی سرمایہ کاری، اسٹاک آپشنز، اور مقامی قوانین کے تحت کیش فلو کی پیشن گوئی۔"
    },
    solution: {
      en: "Automated solid-state capitalization modules, options vesting triggers, and Aria AI cash flow forecasting.",
      ar: "وحدات رسملة الأصول الثابتة المؤتمتة، ومشغلات استحقاق خيارات الأسهم، وتوقعات التدفقات النقدية لآريا.",
      fr: "Modules de capitalisation automatique, triggers de vesting d'options et prévisions de trésorerie Aria AI.",
      zh: "部署自动化研发支出确权资产模块、开发期权归属行权记账工具，以及接入Aria AI智能消耗率预测工具。",
      ur: "خودکار سرمایہ کاری ماڈیول، آپشنز ویسٹنگ ٹریگرز، اور آریا AI کیش فلو پیشن گوئی۔"
    },
    testimonial: {
      en: "Aria AI's predictive runway forecasting and option vesting sync transformed our SaaS financial roadmap completely.",
      ar: "غيرت توقعات آريا للمدرج التنبئي ومزامنة خيارات الأسهم خريطة الطريق المالية لشركتنا بالكامل.",
      fr: "Les prévisions de trésorerie d'Aria AI et la synchro des options ont transformé notre roadmap financière.",
      zh: "Aria AI 生成的智能现金消耗模型和期权自动归属记账，彻底重塑了我们SaaS业务的财务路线图。",
      ur: "آریا AI کی پیشن گوئی اور آپشن ویسٹ سنک نے ہمارے SaaS مالیاتی روڈ میپ کو تبدیل کر دیا۔"
    },
    results: [
      { val: "95%", label: { en: "Runway Forecast Match", ar: "دقة توقعات مدرج السيولة", fr: "Précision Runway Trésorerie", zh: "现金流消耗周期预测精度", ur: "رن وے کی پیشن گوئی کی درستگی" } },
      { val: "Instant", label: { en: "Options Vest Sync", ar: "مزامنة استحقاق الخيارات الفورية", fr: "Vesting Options Synch", zh: "期权分配与归属账簿同步", ur: "فوری آپشن ویسٹ سنک" } },
      { val: "Zero", label: { en: "IFRS R&D Audit Gaps", ar: "فجوات تدقيق البحث والتطوير للمعايير الدولية", fr: "Zéro Écart Audit R&D IFRS", zh: "IFRS研发资本化合规审计误差", ur: "IFRS R&D آڈٹ کے تضادات" } }
    ]
  },
  dk: {
    flag: "🇩🇰", rating: 5, years: 5, sizeCode: "enterprise", industryCode: "manufacturing",
    countryName: { en: "Denmark", ar: "الدنمارك", fr: "Danemark", zh: "丹麦", ur: "ڈنمارک" },
    companyName: { en: "Copenhagen Wind Systems", ar: "كوبنهاغن لأنظمة الرياح", fr: "Copenhagen Wind Systems", zh: "哥本哈根风能系统公司", ur: "کوپن ہیگن ونڈ سسٹمز" },
    industry: { en: "Renewable Energy Mfg", ar: "تصنيع الطاقة المتجددة", fr: "Énergie Renouvelable Mfg", zh: "风能发电及清洁设备精密制造", ur: "قابل تجدید توانائی کی تیاری" },
    sizeText: { en: "Enterprise (820 Employees)", ar: "مؤسسة كبرى (٨٢٠ موظف)", fr: "Grande Entreprise (820 employés)", zh: "大型制造集团 (820 名员工)", ur: "بڑی کمپنی (820 ملازمین)" },
    businessType: { en: "A/S Corporation", ar: "شركة مساهمة دنماركية (A/S)", fr: "Corporation A/S", zh: "A/S风电制造企业", ur: "A/S کارپوریشن" },
    ceo: { en: "Dieter Schmidt, Operations Director", ar: "ديتر شميت، مدير العمليات", fr: "Dieter Schmidt, Directeur Opérations", zh: "Dieter Schmidt, 工业设备运营总监", ur: "ڈیٹر شمیٹ، آپریشنز ڈائریکٹر" },
    challenge: {
      en: "Managing parts inventory across 4 continents, supplier invoicing delays, and dynamic project cost allocation.",
      ar: "إدارة مخزون قطع الغيار عبر ٤ قارات، وتأخير فواتير الموردين، وتخصيص تكاليف المشاريع الديناميكي.",
      fr: "Gestion des stocks de pièces sur 4 continents, retards factures fournisseurs et allocation dynamique par projet.",
      zh: "精细监控分布在四大洲的数万种风电大型零配件仓库库存、减少供应商发票入账延时，以及对大型承建工程开展项目成本分摊。",
      ur: "4 براعظموں میں پرزوں کی انوینٹری کا انتظام، سپلائرز کے بلوں میں تاخیر، اور پروجیکٹ لاگت کی تقسیم۔"
    },
    solution: {
      en: "Global multi-warehouse ledger synchronization, automated supplier bill matching, and dynamic project cost center tags.",
      ar: "مزامنة دفاتر المستودعات المتعددة العالمية، والمطابقة التلقائية لفواتير الموردين، وعلامات مراكز تكلفة المشاريع الديناميكية.",
      fr: "Synchronisation globale multi-entrepôts, rapprochement des factures d'achats et centres de coûts projets dynamiques.",
      zh: "运行全球多仓库账簿实时同步算法、配置应付账款自动识别匹配过账工具，并部署工程项目动态核算单元模块。",
      ur: "عالمی ملٹی گودام مطابقت، خودکار سپلائر بل میچنگ，اور متحرک پروجیکٹ لاگت کے مراکز۔"
    },
    testimonial: {
      en: "Hiesabati handles our heavy capital project costing and worldwide parts inventory seamlessly. Outstanding platform.",
      ar: "تتعامل حسابتي مع تكاليف مشاريعنا الرأسمالية الثقيلة ومخزون قطع الغيار في جميع أنحاء العالم بسلاسة. منصة رائعة.",
      fr: "Hiesabati gère notre comptabilité de chantiers lourds et nos pièces détachées globales de manière fluide.",
      zh: "Hiesabati 在帮助我们核算高净值地产基建工程成本分摊和多国零配件仓库划拨时极其流畅。不可多得的系统平台。",
      ur: "حساباتی ہمارے بھاری پروجیکٹس کی لاگت اور دنیا بھر میں پرزوں کی انوینٹری کو آسانی سے سنبھالتی ہے۔"
    },
    results: [
      { val: "99.6%", label: { en: "Parts Inventory Match", ar: "دقة مطابقة مخزون قطع الغيار", fr: "Précision des Pièces Détachées", zh: "风电设备零部件账实一致率", ur: "پرزوں کی انوینٹری کی درستگی" } },
      { val: "-14d", label: { en: "Billing Process Time", ar: "تقليل زمن معالجة الفواتير", fr: "Temps de Facturation Réduit", zh: "供应商应付账款审核周期缩短", ur: "بلنگ کے وقت میں کمی" } },
      { val: "Zero", label: { en: "Cost Allocation Errors", ar: "أخطاء تخصيص التكاليف الصفرية", fr: "Zéro Erreur d'Imputation", zh: "工程成本摊销核算误差", ur: "لاگت کی تقسیم کی کوئی غلطی نہیں" } }
    ]
  },
  bh: {
    flag: "🇧🇭", rating: 5, years: 4, sizeCode: "mid", industryCode: "financial",
    countryName: { en: "Bahrain", ar: "البحرين", fr: "Bahreïn", zh: "巴林", ur: "بحرین" },
    companyName: { en: "Manama Investment House", ar: "بيت الاستثمار المنامة", fr: "Manama Investment House", zh: "麦纳麦投资信托集团", ur: "منامہ انوسٹمنٹ ہاؤس" },
    industry: { en: "Investment Banking", ar: "الخدمات المصرفية الاستثمارية", fr: "Banque d'Investissement", zh: "金融资产投资与家族财富信托", ur: "انوسٹمنٹ بینکنگ" },
    sizeText: { en: "Mid-market (220 Employees)", ar: "متوسطة الحجم (٢٢٠ موظف)", fr: "Moyenne Entreprise (220 employés)", zh: "中型企业 (220 名员工)", ur: "درمیانے درجے کی کمپنی (220 ملازمین)" },
    businessType: { en: "BSC Corporation", ar: "شركة مساهمة بحرينية (BSC)", fr: "Corporation BSC", zh: "巴林BSC金融信托公司", ur: "BSC کارپوریشن" },
    ceo: { en: "Stefan Meier, Compliance Chief", ar: "ستيفان ماير، رئيس الامتثال", fr: "Stefan Meier, Chef Conformité", zh: "Stefan Meier, 合规风控总监", ur: "اسٹیفن میئر، تعمیل کے سربراہ" },
    challenge: {
      en: "Ensuring audit trail compliance for local and international assets, treaty calculations, and real-time yield reports.",
      ar: "ضمان امتثال مسار التدقيق للأصول المحلية والدولية، وحسابات المعاهدات، وتقارير العائد في الوقت الفعلي.",
      fr: "Assurer la conformité des pistes d'audit pour actifs globaux, calculs de traités fiscaux et rapports de rendement.",
      zh: "向海外投资者提供可追溯的数字签名审计明细、在复杂的双边税收协定网络下换算预扣税金，以及生成实时资金回报报告。",
      ur: "مقامی اور بین الاقوامی اثاثوں کے لیے آڈٹ ٹریل کی تعمیل، معاہدے کے حسابات، اور ریئل ٹائم رپورٹس کا انتظام۔"
    },
    solution: {
      en: "Cryptographically signed journal registries, dynamic local tax treaties, and interactive financial dashboards.",
      ar: "سجلات يومية موقعة تشفيرياً، ومعاهدات ضريبية محلية ديناميكية، ولوحات معلومات مالية تفاعلية.",
      fr: "Registres de journaux signés de façon cryptographique, traités fiscaux locaux et dashboards interactifs.",
      zh: "内置加密签名防篡改的总账分录模块、计算预扣税率的税协对照矩阵，以及实时投资大盘分析大屏。",
      ur: "خفیہ طور پر دستخط شدہ جرنل رجسٹرز، ٹیکس معاہدے کے میٹرکس، اور ریئل ٹائم مالیاتی ڈیش بورڈز۔"
    },
    testimonial: {
      en: "Every journal entry is cryptographically tracked. The absolute premium gold standard of financial software.",
      ar: "يتم تتبع كل قيد يومية تشفيرياً. المعيار الذهبي المتميز المطلق للبرمجيات المالية.",
      fr: "Chaque écriture comptable est sécurisée et tracée. Le standard d'excellence pour la gestion de fortune.",
      zh: "每一笔会计分录都伴随防篡改数字签名且终身可追溯。这毫无疑问是金融管理系统中的黄金标准。",
      ur: "ہر جرنل اینٹری پر خفیہ طور پر دستخط اور ٹریک کیا جاتا ہے۔ مالیاتی سافٹ ویئر کا بہترین گولڈ اسٹینڈرڈ۔"
    },
    results: [
      { val: "100%", label: { en: "Audit Clean Bill", ar: "شهادة تدقيق نظيفة", fr: "Audit sans réserve", zh: "金管局审计无保留通过率", ur: "صاف آڈٹ رپورٹ" } },
      { val: "Instant", label: { en: "Yield Report Compute", ar: "حساب تقارير العائد الفوري", fr: "Calcul de Rendement Direct", zh: "资本收益及回报核算耗时", ur: "قابل تجدید توانائی کی پیداوار کا فوری حساب" } },
      { val: "99.9%", label: { en: "Regulatory Compliance", ar: "الامتثال التنظيمي", fr: "Conformité Réglementaire", zh: "金融衍生品合规评级", ur: "ریگولیٹری تعمیل" } }
    ]
  },
  om: {
    flag: "🇴🇲", rating: 5, years: 3, sizeCode: "mid", industryCode: "oilgas",
    countryName: { en: "Oman", ar: "عمان", fr: "Oman", zh: "阿曼", ur: "عمان" },
    companyName: { en: "Muscat Petroleum Corp", ar: "مسقط للبترول", fr: "Muscat Petroleum Corp", zh: "马斯喀特石油开采集团", ur: "مسقط پٹرولیم کارپ" },
    industry: { en: "Petroleum & Energy", ar: "البترول والطاقة", fr: "Pétrole & Énergie", zh: "石油开采与境外项目承包", ur: "پٹرولیم اور توانائی" },
    sizeText: { en: "Mid-market (290 Employees)", ar: "متوسطة الحجم (٢٩٠ موظف)", fr: "Moyenne Entreprise (290 employés)", zh: "中型采掘企业 (290 名员工)", ur: "درمیانے درجے کی کمپنی (290 ملازمین)" },
    businessType: { en: "SAOC Joint Stock", ar: "شركة مساهمة عمانية مقفلة", fr: "SAOC Joint Stock", zh: "阿曼SAOC合资石油集团", ur: "SAOC جوائنٹ اسٹاک" },
    ceo: { en: "Khalid Al-Thani, Finance Controller", ar: "خالد آل ثاني، مراقب الشؤون المالية", fr: "Khalid Al-Thani, Contrôleur", zh: "Khalid Al-Thani, 钻区财务主管", ur: "خالد آل ثانی، فنانس کنٹرولر" },
    challenge: {
      en: "Offshore drilling asset lifecycle accounting, multi-department approval chains, and localized VAT tax billing.",
      ar: "محاسبة دورة حياة أصول الحفر البحرية، وسلاسل موافقات الإدارات المتعددة، والفوترة الضريبية المحلية لضريبة القيمة المضافة.",
      fr: "Comptabilité des actifs de forage offshore, chaînes d'approbations multi-services et facturation TVA locale.",
      zh: "管理分布在境外各海域中大型海上钻井设备的折旧及大修周期账簿、应付多层级跨部门审核采购审批流，以及上报地方增值税申报表。",
      ur: "آف شور ڈرلنگ اثاثوں کی ٹریکنگ، کثیر فریقی منظوری کا نظام، اور مقامی VAT بلنگ۔"
    },
    solution: {
      en: "Asset lifecycle tracking logs, cloud multi-stage procurement approvals, and direct GCC VAT portal templates.",
      ar: "سجلات تتبع دورة حياة الأصول، وموافقات الشراء السحابية متعددة المراحل، وقوالب بوابة ضريبة القيمة المضافة الخليجية المباشرة.",
      fr: "Régistres de cycle de vie des actifs, approbations d'achats cloud et modèles de TVA du CCG.",
      zh: "开发固资生命周期状态跟踪台账、部署多层级智能无纸化采购签批工作流，并确保系统直连海湾国家VAT计税直报模块。",
      ur: "اثاثوں کے لائف سائیکل ٹریکنگ، کلاؤڈ خریداری کی منظوری، اور خودکار جی سی سی VAT ٹیمپلیٹس۔"
    },
    testimonial: {
      en: "Hiesabati handles our heavy drilling cost centers and localized VAT structures with absolute ease. Superior software.",
      ar: "تتعامل حسابتي مع مراكز تكاليف الحفر الثقيلة وهياكل ضريبة القيمة المضافة المحلية بكل سهولة. برنامج متفوق.",
      fr: "Hiesabati gère nos centres de coûts de forage lourds et notre TVA locale avec une simplicité déconcertante.",
      zh: "Hiesabati 在帮助我们核算高净值钻井设备折旧和处理阿曼本地VAT增值税申报方面表现极其稳定出色。系统底层十分强悍。",
      ur: "حساباتی ہمارے ڈرلنگ کے اخراجات اور مقامی VAT کو مکمل طور پر اور آسانی سے سنبھالتی ہے۔"
    },
    results: [
      { val: "99.8%", label: { en: "Asset Lifecycle Match", ar: "مطابقة دورة حياة الأصول", fr: "Précision des Actifs", zh: "采油设备资产折旧计算精度", ur: "اثاثوں کے لائف سائیکل کی درستگی" } },
      { val: "100%", label: { en: "Audit Alignment", ar: "توافق التدقيق الكامل", fr: "Alignement Audit validé", zh: "主权能源审计合规通过率", ur: "آڈٹ کی مطابقت" } },
      { val: "-20%", label: { en: "Subcontractor Leakage", ar: "الحد من تسرب تكاليف المقاولين", fr: "Pertes Sous-traitants Évitées", zh: "劳务外包开支冒领截留率", ur: "ذیلی ٹھیکیداروں کے اخراجات میں کمی" } }
    ]
  },
  jo: {
    flag: "🇯🇴", rating: 5, years: 4, sizeCode: "mid", industryCode: "healthcare",
    countryName: { en: "Jordan", ar: "الأردن", fr: "Jordanie", zh: "约旦", ur: "اردن" },
    companyName: { en: "Jordan Medical Trust", ar: "الأردن للمستلزمات الطبية", fr: "Jordan Medical Trust", zh: "约旦医疗设备与健康信托", ur: "اردن میڈیکل ٹرسٹ" },
    industry: { en: "Healthcare & Clinics", ar: "الرعاية الصحية والعيادات", fr: "Santé & Cliniques", zh: "医疗服务与连锁诊所", ur: "صحت عامہ اور کلینکس" },
    sizeText: { en: "Mid-market (180 Employees)", ar: "متوسطة الحجم (١٨٠ موظف)", fr: "Moyenne Entreprise (180 employés)", zh: "中型医疗机构 (180 名员工)", ur: "درمیانے درجے کی کمپنی (180 ملازمین)" },
    businessType: { en: "Medical Provider", ar: "مزود خدمات طبية", fr: "Fiducie Médicale", zh: "连锁医疗机构", ur: "طبی خدمات کا ادارہ" },
    ceo: { en: "Elizabeth Ross, Chief Administrator", ar: "إليزابيث روس، رئيسة الإدارة", fr: "Elizabeth Ross, Administratrice", zh: "Elizabeth Ross, 连锁医院行政主管", ur: "البتھ راس، چیف ایڈمنسٹریٹر" },
    challenge: {
      en: "Tracking clinical supply costs, doctor overtime calculations, and ministry of health reporting guidelines.",
      ar: "تتبع تكاليف المستلزمات الطبية، وحسابات العمل الإضافي للأطباء، وإرشادات تقارير وزارة الصحة.",
      fr: "Suivi des coûts de fournitures cliniques, calculs d'heures supplémentaires des médecins et rapports du ministère.",
      zh: "高精度监控昂贵的耗材使用明细、计算医生极其复杂的节假日值班和加班费分录，以及定期向卫生局报送报销统计审计单据。",
      ur: "طبی سامان کی لاگت، ڈاکٹروں کے اوور ٹائم کا حساب، اور وزارت صحت کی گائیڈ لائنز کے مطابق رپورٹنگ۔"
    },
    solution: {
      en: "Unified cost centers, automated shift-to-payroll integrations, and automated compliance reports.",
      ar: "مراكز تكلفة موحدة، وتكامل تلقائي بين الورديات والرواتب، وتقارير امتثال مؤتمتة.",
      fr: "Centres de coûts unifiés, intégration shift-paie automatique et rapports réglementaires automatisés.",
      zh: "配置独立的耗材与手术室成本中心核算、打通排班和加班工资直发数据链路，并内建卫生局监管专用报表格式一键导出。",
      ur: "مربوط لاگت کے مراکز، خودکار شفٹ ٹو پے رول انضمام، اور خودکار تعمیلی رپورٹنگ۔"
    },
    testimonial: {
      en: "Managing clinical staff shift pay and regulatory reporting in one secure dashboard has simplified our operations.",
      ar: "لقد أدى تبسيط عملياتنا من خلال إدارة رواتب نوبات الطاقم الطبي والتقارير التنظيمية في لوحة تحكم واحدة آمنة.",
      fr: "Gérer la paie des shifts médicaux et les rapports réglementaires sur le même dashboard a simplifié nos opérations.",
      zh: "能在一块安全性极高的财务控制面板中，统一打通医护班次薪酬和卫生局报送报销对账，工作效率成倍提升。",
      ur: "طبی عملے کی شفٹوں، تنخواہ اور ریگولیٹری رپورٹنگ کو ایک ہی محفوظ ڈیش بورڈ میں رکھنے سے کام آسان ہو گیا ہے۔"
    },
    results: [
      { val: "-22%", label: { en: "Operational Cost Reduction", ar: "تقليل التكاليف التشغيلية", fr: "Coût Opérationnel Réduit", zh: "日常行政费用削减", ur: "آپریشنل اخراجات میں کمی" } },
      { val: "99%", label: { en: "Scheduling Accuracy", ar: "دقة جدولة المواعيد", fr: "Précision des Plannings", zh: "排班考勤及计薪吻合率", ur: "شیڈولنگ کی درستگی" } },
      { val: "Zero", label: { en: "Compliance Gaps", ar: "فجوات امتثال صفرية", fr: "Zéro Écart Réglementaire", zh: "医患纠纷及财务合规漏损", ur: "صفر تعمیلی تضادات" } }
    ]
  },
  ma: {
    flag: "🇲🇦", rating: 5, years: 4, sizeCode: "mid", industryCode: "agriculture",
    countryName: { en: "Morocco", ar: "المغرب", fr: "Maroc", zh: "摩洛哥", ur: "مراکش" },
    companyName: { en: "Casablanca AgroExports", ar: "الدار البيضاء للصادرات الزراعية", fr: "Casablanca AgroExports", zh: "卡萨布兰卡农产品出口集团", ur: "کاسابلانکا ایگرو ایکسپورٹس" },
    industry: { en: "Agricultural Exports", ar: "الصادرات الزراعية", fr: "Exportations Agricoles", zh: "绿色农业与果蔬国际贸易", ur: "زرعی برآمدات" },
    sizeText: { en: "Mid-market (320 Employees)", ar: "متوسطة الحجم (٣٢٠ موظف)", fr: "Moyenne Entreprise (320 employés)", zh: "中型企业 (320 名员工)", ur: "درمیانے درجے کی کمپنی (320 ملازمین)" },
    businessType: { en: "S.A. Agriculture", ar: "شركة مساهمة زراعية مغربية", fr: "Société Anonyme Agricole", zh: "S.A.种植与进出口集团", ur: "S.A. ایگریکلچر" },
    ceo: { en: "Carlos Ortiz, Operations Lead", ar: "كارلوس أورتيز، رئيس العمليات", fr: "Carlos Ortiz, Chef Opérations", zh: "Carlos Ortiz, 农地与冷链运输调度主管", ur: "کارلوس اورٹیز، آپریشنز ہیڈ" },
    challenge: {
      en: "Managing seasonal worker wages, currency conversion fluctuations between MAD, EUR, and USD, and export tariff auditing.",
      ar: "إدارة أجور العمال الموسميين، وتقلبات أسعار صرف الدرهم المغربي مقابل اليورو والدولار، وتدقيق تعريفات التصدير.",
      fr: "Gestion des salaires saisonniers, fluctuations de change MAD/EUR/USD et audits des tarifs d'exportation.",
      zh: "给数千名采摘工人进行日薪与周薪换算发放、规避迪拉姆MAD与欧元及美元之间的汇率兑换损失，以及完成跨国出口的配额和退税申报。",
      ur: "موسمی کارکنوں کی اجرت، MAD، EUR اور USD کے درمیان شرح تبادلہ کے اتار چڑھاؤ، اور برآمدی ٹیرف کا آڈٹ۔"
    },
    solution: {
      en: "Dynamic multi-currency automated ledgers, batch shift payments, and automated customs document scanners.",
      ar: "دفاتر حسابات تلقائية ديناميكية متعددة العملات، ومدفوعات الورديات المجمعة، وماسحات المستندات الجمركية المؤتمتة.",
      fr: "Grand livre devises dynamique, paiements de paie groupés et scanner de documents douaniers automatique.",
      zh: "配置动态多币种总账自动结转结汇功能、提供面向短工的自动薪资批处理模块，并集成海关电子发票存盘附件。",
      ur: "خودکار لیجرز، بیچ شفٹ ادائیگی، اور خودکار کسٹمز دستاویزات اسکیننگ۔"
    },
    testimonial: {
      en: "Cross-border compliance and multi-currency transactions are flawless now. Outstanding design framework.",
      ar: "أصبح الامتثال عبر الحدود والمعاملات متعددة العملات خالية من العيوب الآن. إطار تصميم رائع.",
      fr: "La conformité transfrontalière et les devises fonctionnent parfaitement. Excellent système.",
      zh: "跨境贸易合规审计和多币种结汇过账现在运行得天衣无缝。极佳的技术架构。",
      ur: "سرحد پار تعمیل اور ملٹی کرنسی لین دین اب بالکل درست ہیں۔"
    },
    results: [
      { val: "+45%", label: { en: "Export Billing Speed", ar: "سرعة فواتير التصدير", fr: "Vitesse de Facturation", zh: "国际回款清税速度提升", ur: "برآمدی بلنگ کی رفتار" } },
      { val: "Zero", label: { en: "Exchange Losses", ar: "خسائر تبادل العملات الصفرية", fr: "Zéro Perte de Change", zh: "汇率汇兑结算零损失", ur: "تبادلے کا کوئی نقصان نہیں" } },
      { val: "100%", label: { en: "Logs Verified", ar: "التحقق من السجلات بالكامل", fr: "Registres validés", zh: "卫生与贸易合规认证通过率", ur: "لاگز منظور" } }
    ]
  },
  ke: {
    flag: "🇰🇪", rating: 5, years: 3, sizeCode: "growth", industryCode: "logistics",
    countryName: { en: "Kenya", ar: "كينيا", fr: "Kenya", zh: "肯尼亚", ur: "کینیا" },
    companyName: { en: "Nairobi Cargo Hub", ar: "نيروبي للشحن", fr: "Nairobi Cargo Hub", zh: "内罗毕货运及多式联运枢纽", ur: "نیروبی کارگو ہب" },
    industry: { en: "Logistics & Shipping", ar: "اللوجستيات والشحن", fr: "Logistique & Shipping", zh: "港口冷链仓储与多式联运", ur: "لاجسٹکس اور شپنگ" },
    sizeText: { en: "Growth (92 Employees)", ar: "شركة متنامية (٩٢ موظف)", fr: "Jeune Pousse (92 employés)", zh: "高成长物流企业 (92 名员工)", ur: "ترقی کرتی کمپنی (92 ملازمین)" },
    businessType: { en: "LTD Transport", ar: "شركة نقل ذات مسؤولية محدودة", fr: "Transport LTD", zh: "运输LTD集团", ur: "LTD ٹرانسپورٹ" },
    ceo: { en: "Liam Thompson, Operations Head", ar: "ليام تومبسون، رئيس العمليات", fr: "Liam Thompson, Chef Opérations", zh: "Liam Thompson, 货运仓储调配主管", ur: "لیام تھامسن، آپریشنز ہیڈ" },
    challenge: {
      en: "Tracking cargo transport across multiple warehouses, local tax compliance reports, and supplier payment reconciliation.",
      ar: "تتبع نقل البضائع عبر مستودعات متعددة، وتقارير الامتثال الضريبي المحلي، وتسوية مدفوعات الموردين.",
      fr: "Suivi des cargaisons dans plusieurs entrepôts, rapports de taxes locales et rapprochement fournisseurs.",
      zh: "高精度跟踪货柜车跨省多仓库的物资移库流水、上报本地税务直报表格，以及与大量散户车队的费用结转对账。",
      ur: "متعدد گوداموں میں کارگو کی ٹریکنگ، مقامی ٹیکس کی تعمیل، اور سپلائرز کی ادائیگی کی مفاہمت۔"
    },
    solution: {
      en: "Real-time warehouse barcode logs, localized duty matching calculators, and automatic multi-currency ledgers.",
      ar: "سجلات باركود المستودعات في الوقت الفعلي، وحاسبات مطابقة الرسوم المحلية، ودفاتر الحسابات التلقائية متعددة العملات.",
      fr: "Grand livre codes-barres en direct, calculateur de taxes local et comptabilité multi-devises automatique.",
      zh: "配置扫码枪API与云端总账直连、内置本地进出口退税计算模块，并自动实现外币往来账目记账核销。",
      ur: "ریئل ٹائم گودام بار کوڈ لاگز، مقامی کسٹمز کیلکولیٹرز، اور خودکار ملٹی کرنسی لیجرز۔"
    },
    testimonial: {
      en: "Logistics inventory and multi-currency payout reconciliation are fully automated. Unparalleled system.",
      ar: "أصبحت تسويات مخزون الخدمات اللوجستية والمدفوعات متعددة العملات مؤتمتة بالكامل. نظام لا يضاهى.",
      fr: "Les stocks de logistique et le change multi-devises sont automatisés. Système de pointe.",
      zh: "仓储物资实时结转盘点与多币种运费对账付款现在被一站式自动挂账取代，运维效率提升显著。",
      ur: "انوینٹری اور ملٹی کرنسی پے آؤٹ مفاہمت اب خودکار ہیں۔"
    },
    results: [
      { val: "99.2%", label: { en: "Inventory Accuracy", ar: "دقة المخازن بالكامل", fr: "Précision des Stocks", zh: "货运枢纽集装箱账实一致率", ur: "انوینٹری کی درستگی" } },
      { val: "Instant", label: { en: "Custom Duty Cleared", ar: "التخليص الجمركي الفوري للرسوم", fr: "Taxes de Douane validées", zh: "清关关税与退税核对耗时", ur: "فوری کسٹمز ڈیوٹی کلیئرنس" } },
      { val: "-14%", label: { en: "Settlement Lead Time", ar: "تقليل زمن التسويات", fr: "Délai de Paiement Réduit", zh: "车队款项到账审核周转期缩短", ur: "ادائیگی کے وقت میں کمی" } }
    ]
  },
  my: {
    flag: "🇲🇾", rating: 5, years: 4, sizeCode: "enterprise", industryCode: "technology",
    countryName: { en: "Malaysia", ar: "ماليزيا", fr: "Malaisie", zh: "马来西亚", ur: "ملائیشیا" },
    companyName: { en: "Kuala Lumpur Chipmakers", ar: "كوالالمبور لصناعة الرقائق", fr: "Kuala Lumpur Chipmakers", zh: "吉隆坡芯片制造股份有限公司", ur: "کوالالمپور چپ میکر" },
    industry: { en: "Semiconductor Mfg", ar: "تصنيع أشباه الموصلات", fr: "Semi-conducteurs Mfg", zh: "半导体零部件精密生产制造", ur: "سیمی کنڈکٹر مینوفیکچرنگ" },
    sizeText: { en: "Enterprise (1,200 Employees)", ar: "مؤسسة كبرى (١,٢٠٠ موظف)", fr: "Grande Entreprise (1 200 employés)", zh: "大型制造集团 (1,200 名员工)", ur: "بڑی کمپنی (1,200 ملازمین)" },
    businessType: { en: "Bhd Corporation", ar: "شركة مساهمة ماليزية عامة", fr: "Corporation Bhd", zh: "Bhd上市股份公司", ur: "Bhd کارپوریشن" },
    ceo: { en: "Zhang Wei, CFO", ar: "تشانغ وي، المدير المالي", fr: "Zhang Wei, CFO", zh: "张伟, 制造工厂财务总监", ur: "ژانگ وی، سی ای او" },
    challenge: {
      en: "High-volume SKU component inventory matching, rapid multi-currency vendor settlement, and global export duty filings.",
      ar: "مطابقة مخزون مكونات SKU عالية الحجم، وتسويات الموردين السريعة متعددة العملات، وإقرارات رسوم التصدير العالمية.",
      fr: "Suivi des stocks de composants pour millions de SKU, règlements logistiques et déclarations d'exportation.",
      zh: "高密集装配线下对数百万种半导体SKU元器件的状态追踪、极速给境外厂商结清采购外汇，以及海关出口关税和退税对账。",
      ur: "لاکھوں SKU نمبروں کے لیے انوینٹری کی ٹریکنگ، سپلائرز کی ادائیگی، اور برآمدی ڈیوٹی کی رپورٹنگ۔"
    },
    solution: {
      en: "Barcode scanner API integrations, automatic multi-currency wire sync, and digital export tariff tracking logs.",
      ar: "تكاملات واجهة برمجة تطبيقات ماسح الباركود، ومزامنة التحويلات التلقائية متعددة العملات، وسجلات تتبع رسوم التصدير الرقمية.",
      fr: "Intégrations de codes-barres par API, règlements multi-devises automatisés et registres d'exportation.",
      zh: "接入条码扫描智能硬件与云端API总账直连、全球多币种外币清算对账簿，以及数字化自动出口退税记账单模块。",
      ur: "بار کوڈ اسکینر API انضمام، خودکار ملٹی کرنسی بینک سنک، اور ڈیجیٹل برآمدی ٹیرف لاگز۔"
    },
    testimonial: {
      en: "Hiesabati handles our millions of SKU records and global vendor payouts with absolute reliability. Flawless framework.",
      ar: "تتعامل حسابتي مع ملايين سجلات SKU ومدفوعات الموردين العالمية بموثوقية مطلقة. إطار لا تشوبه شائبة.",
      fr: "Hiesabati gère nos millions de SKU et nos paiements fournisseurs internationaux avec une fiabilité absolue.",
      zh: "Hiesabati 承载了我们厂百万级别的SKU对账和极其复杂的国际采购清算工作。底层系统技术过应，十分可靠。",
      ur: "حساباتی ہمارے لاکھوں SKU ریکارڈز اور عالمی سپلائرز کی ادائیگیوں کو مکمل طور پر خودکار انداز میں سنبھالتی ہے۔"
    },
    results: [
      { val: "99.6%", label: { en: "SKU Accuracy Match", ar: "دقة مطابقة رموز SKU", fr: "Précision des SKU", zh: "半导体元器件物料库存吻合率", ur: "SKU کی درستگی" } },
      { val: "45%", label: { en: "Faster Vendor Payout", ar: "مدفوعات موردين أسرع", fr: "Paiements Fournisseurs Plus Rapides", zh: "供应商应付货款账期缩短", ur: "تیز سپلائر ادائیگی" } },
      { val: "Zero", label: { en: "Export Discrepancies", ar: "فروقات التصدير الجمركية الصفرية", fr: "Zéro Écart Douanier Export", zh: "出口关税及退税核销误差", ur: "برآمدی کسٹمز کی کوئی غلطی نہیں" } }
    ]
  },
  id: {
    flag: "🇮🇩", rating: 5, years: 5, sizeCode: "enterprise", industryCode: "distribution",
    countryName: { en: "Indonesia", ar: "إندونيسيا", fr: "Indonésie", zh: "印度尼西亚", ur: "انڈونیشیا" },
    companyName: { en: "Jakarta Trade & Distro", ar: "جاكرتا للتجارة والتوزيع", fr: "Jakarta Trade & Distro", zh: "雅加达大宗商贸分销集团", ur: "جاکارتا ٹریڈ اینڈ ڈسٹری بیوشن" },
    industry: { en: "Wholesale & Distribution", ar: "الجملة والتوزيع", fr: "Commerce de Gros & Distro", zh: "大宗商品分销与批发商贸", ur: "تھوک فروشی اور تقسیم" },
    sizeText: { en: "Enterprise (1,800 Employees)", ar: "مؤسسة كبرى (١,٨٠٠ موظف)", fr: "Grande Entreprise (1 800 employés)", zh: "大型分销企业 (1,800 名员工)", ur: "بڑی کمپنی (1,800 ملازمین)" },
    businessType: { en: "PT Corporation", ar: "شركة مساهمة إندونيسية (PT)", fr: "Corporation PT", zh: "PT股份制联营集团", ur: "PT کارپوریشن" },
    ceo: { en: "Roberto Silva, CFO", ar: "روبيرتو سيلفا، المدير المالي", fr: "Roberto Silva, CFO", zh: "Roberto Silva, 集团副总裁兼CFO", ur: "روبوٹو سلوا، سی ایف او" },
    challenge: {
      en: "Coordinating warehouse stock across 15 islands, regional tax compliance, and fleet fuel expenses mapping.",
      ar: "تنسيق مخزون المستودعات عبر ١٥ جزيرة، والامتثال الضريبي الإقليمي، وتخطيط نفقات وقود الأسطول.",
      fr: "Coordination des stocks sur 15 îles, fiscalité régionale complexe et notes de frais de carburant.",
      zh: "科学调度并核对分布在15个主要海岛上的仓储转运库存、计算复杂的跨区域地方税，以及对庞大卡车运输车队的油费报销自动记账。",
      ur: "15 جزیروں میں گوداموں کے اسٹاک کا انتظام، علاقائی ٹیکس کی تعمیل، اور گاڑیوں کے ایندھن کے اخراجات کی ٹریکنگ۔"
    },
    solution: {
      en: "Unified multi-warehouse ledger mapping, dynamic tax rule tables, and automated expense scan matches.",
      ar: "مطابقة دفاتر مستودعات متعددة موحدة، وجداول قواعد ضريبية ديناميكية، ومطابقة تلقائية لمسح النفقات.",
      fr: "Rapprochement multi-entrepôts unifié, grilles de taxes dynamiques et scan automatique de reçus.",
      zh: "部署多仓一体化总账数据对齐、建立动态税率计算对照表，并实现承运商应付款自动匹配结算流程。",
      ur: "مربوط ملٹی گودام لیجر，متحرک ٹیکس رول ٹیبلز، اور خودکار اخراجات اسکیننگ۔"
    },
    testimonial: {
      en: "Coordinating inventory reconciliation across islands and automated tax setups saved us hundreds of manual hours weekly.",
      ar: "وفر لنا تنسيق تسوية المخزون عبر الجزر والإعدادات الضريبية المؤتمتة مئات الساعات اليدوية أسبوعياً.",
      fr: "La gestion de nos stocks multi-îles et la conformité fiscale automatisée nous ont fait gagner un temps précieux.",
      zh: "在多海岛环境下对账仓储盘点和自动申报地方税，以前非常头疼，Hiesabati 帮我们省去了每周大量的琐碎人工。",
      ur: "جزیروں میں انوینٹری مفاہمت اور خودکار ٹیکس کے نظام نے ہمارے ہفتہ وار دستی کام کے سینکڑوں گھنٹے بچائے۔"
    },
    results: [
      { val: "99.4%", label: { en: "Inventory Accuracy", ar: "دقة المخزون", fr: "Précision des Stocks", zh: "跨岛仓库账实相符率", ur: "انوینٹری کی درستگی" } },
      { val: "24h", label: { en: "Regional Tax Filing", ar: "تقديم الإقرارات الضريبية الإقليمية", fr: "Déclaration Fiscale Régionale", zh: "跨地区税局申报耗时", ur: "علاقائی ٹیکس فائلنگ" } },
      { val: "-15%", label: { en: "Distribution Cost Cut", ar: "خفض تكاليف التوزيع", fr: "Coût de Logistique Réduit", zh: "大宗配送物流耗损率降低", ur: "تقسیم کے اخراجات میں کمی" } }
    ]
  },
  vn: {
    flag: "🇻🇳", rating: 5, years: 3, sizeCode: "mid", industryCode: "manufacturing",
    countryName: { en: "Vietnam", ar: "فيتنام", fr: "Vietnam", zh: "越南", ur: "ویتنام" },
    companyName: { en: "Hanoi Garment Factory", ar: "مصنع هانوي للملابس", fr: "Hanoi Garment Factory", zh: "河内精密纺织服装制造厂", ur: "ہنوئی گارمنٹ فیکٹری" },
    industry: { en: "Garment Manufacturing", ar: "تصنيع الملابس", fr: "Industrie Textile", zh: "服装与纺织精密制造", ur: "گارمنٹ مینوفیکچرنگ" },
    sizeText: { en: "Mid-market (290 Employees)", ar: "متوسطة الحجم (٢٩٠ موظف)", fr: "Moyenne Entreprise (290 employés)", zh: "中型企业 (290 名员工)", ur: "درمیانے درجے کی کمپنی (290 ملازمین)" },
    businessType: { en: "Joint Stock Company", ar: "شركة مساهمة فيتنامية", fr: "Société par Actions", zh: "中外合资股份制制造厂", ur: "جوائنٹ اسٹاک کمپنی" },
    ceo: { en: "Min-ho Park, General Manager", ar: "مين هو بارك، المدير العام", fr: "Min-ho Park, Directeur", zh: "朴岷镐, 外贸生产部总经理", ur: "من ہو پارک، جنرل مینیجر" },
    challenge: {
      en: "Tracking production line component stock, factory payroll billing, and export tax logs.",
      ar: "تتبع مخزون مكونات خط الإنتاج، وفواتير كشوف رواتب المصنع، وسجلات ضريبة التصدير.",
      fr: "Suivi des matières sur la ligne de production, paie de l'usine et taxes d'exportation.",
      zh: "高频次跟踪纺织生产线原料消耗及布料库存状态、计算数千名工人的加班与轮班工资，并符合外贸出口清关关税对账。",
      ur: "پروڈکشن لائن اسٹاک کی ٹریکنگ، فیکٹری پے رول بلنگ، اور برآمدی ٹیکس لاگز۔"
    },
    solution: {
      en: "Real-time inventory trackers, shift-to-payroll integrations, and automated compliance reports.",
      ar: "أجهزة تتبع المخزون في الوقت الفعلي، وتكامل الورديات مع كشوف الرواتب، وتقارير الامتثال المؤتمتة.",
      fr: "Suivi des stocks en direct, intégration shift-paie et rapports réglementaires automatisés.",
      zh: "配置实时RFID原料出入库自动过账、实现考勤信息直通员工资发放系统，并内建出口退税合规报告表格。",
      ur: "ریئل ٹائم انوینٹری ٹریکرز، شفٹ ٹو پے رول انضمام، اور خودکار تعمیلی رپورٹنگ۔"
    },
    testimonial: {
      en: "Hiesabati connected our production plants and local payroll seamlessly. Highly reliable framework.",
      ar: "ربطت حسابتي مصانعنا الإنتاجية وكشوف الرواتب المحلية بسلاسة. إطار عمل موثوق للغاية.",
      fr: "Hiesabati a connecté nos usines et notre paie locale sans problème. Système très fiable.",
      zh: "Hiesabati 帮我们一举打通了制造车间原料损耗和工人工资发放账目。外贸清关审计也非常省力。",
      ur: "حساباتی نے ہمارے پروڈکشن پلانٹس اور مقامی پے رول کو آسانی سے جوڑ دیا۔"
    },
    results: [
      { val: "99.5%", label: { en: "Inventory Accuracy Match", ar: "مطابقة دقة المخزون", fr: "Rapprochement des Stocks", zh: "纺织原料与服装库存相符率", ur: "انوینٹری کی درستگی" } },
      { val: "40%", label: { en: "Overtime Payroll Cut", ar: "خفض تكاليف العمل الإضافي", fr: "Marge Heures Supplémentaires", zh: "车间加班费虚假冒领削减", ur: "اوور ٹائم پے رول کی لاگت میں کمی" } },
      { val: "Zero", label: { en: "Compliance Auditing Gaps", ar: "فجوات تدقيق الامتثال الصفرية", fr: "Zéro Écart Réglementaire", zh: "海关税务审计差错漏洞", ur: "آڈٹ کی کوئی عدم تعمیل نہیں" } }
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
    card.innerHTML = `
      <div class="success-header-row">
        <div class="success-comp-info">
          <h3 style="font-size:24px; color:var(--ink-primary); display:flex; align-items:center; gap:12px; margin-bottom:8px;">
            <span style="font-size:32px;">${story.flag}</span> ${compName}
          </h3>
          <div class="success-comp-meta" style="display:flex; flex-wrap:wrap; gap:16px; font-size:13px; color:var(--ink-secondary);">
            <span><strong>📍 Country:</strong> ${story.countryName[currentLanguage] || story.countryName.en}</span>
            <span><strong>🏢 Industry:</strong> ${industry}</span>
            <span><strong>👥 Scale:</strong> ${sizeText}</span>
            <span><strong>💼 Type:</strong> ${businessType}</span>
          </div>
        </div>
        <div style="font-size: 20px; color: var(--gold-soft); font-weight:700;">
          ${"★".repeat(story.rating)} <span style="font-size:12px; color:var(--ink-secondary); font-weight:500;">(${story.years} Years Client)</span>
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
          <h4 style="color:var(--ink-primary); font-size:15px; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:12px;">Operational Challenge</h4>
          <p class="muted" style="font-size:14px; line-height:1.6;">${challenge}</p>
        </div>
        <div>
          <h4 style="color:var(--ink-primary); font-size:15px; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:12px;">Hiesabati Solution</h4>
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

// Animated counters scroll trigger logic
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number[data-target]");
  const speed = 250; // duration control

  const startCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const inc = target / speed;

    const updateCount = () => {
      count += inc;
      if (count < target) {
        counter.innerText = Math.ceil(count).toLocaleString();
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target >= 1000 ? target.toLocaleString() + "+" : target + "+";
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(counter => observer.observe(counter));

  // Ambient dots generator
  const maps = [document.getElementById("successBeaconsMap"), document.getElementById("svgGlobalMap")];
  maps.forEach(map => {
    if (!map) return;
    let seed = 42;
    function seededRand() {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    const regions = [
      { name: "NorthAmerica", cxMin: 130, cxMax: 290, cyMin: 70, cyMax: 160, count: 90 },
      { name: "CentralAmerica", cxMin: 180, cxMax: 240, cyMin: 160, cyMax: 230, count: 30 },
      { name: "SouthAmerica", cxMin: 255, cxMax: 330, cyMin: 240, cyMax: 430, count: 70 },
      { name: "Europe", cxMin: 450, cxMax: 540, cyMin: 70, cyMax: 150, count: 90 },
      { name: "Africa", cxMin: 450, cxMax: 580, cyMin: 200, cyMax: 370, count: 70 },
      { name: "MiddleEast", cxMin: 560, cxMax: 620, cyMin: 170, cyMax: 230, count: 40 },
      { name: "Asia", cxMin: 620, cxMax: 880, cyMin: 70, cyMax: 270, count: 110 },
      { name: "Australia", cxMin: 790, cxMax: 890, cyMin: 320, cyMax: 390, count: 35 }
    ];

    regions.forEach(r => {
      for (let i = 0; i < r.count; i++) {
        const cx = r.cxMin + seededRand() * (r.cxMax - r.cxMin);
        const cy = r.cyMin + seededRand() * (r.cyMax - r.cyMin);

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", cx.toFixed(1));
        circle.setAttribute("cy", cy.toFixed(1));
        circle.setAttribute("r", (1.2 + seededRand() * 1.3).toFixed(1));
        circle.setAttribute("class", "ambient-dot");
        circle.style.animationDelay = `${(seededRand() * 4).toFixed(2)}s`;

        // Insert before first connection line or active beacon to keep them on top layer but visible above landmasses
        const refNode = map.querySelector(".map-connection-line, .success-map-node, .map-node") || map.firstChild;
        map.insertBefore(circle, refNode);
      }
    });
  });
});
