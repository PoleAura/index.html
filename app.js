
/* =========================================================
   POLAURA
   File: app.js
   Website: Research & Location Intelligence
   ========================================================= */

(() => {
  "use strict";

  const app = document.getElementById("app");
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const langSwitch = document.getElementById("lang-switch");
  const yearElement = document.getElementById("year");

  if (!app) return;

  const state = {
    language: "en",
    currentRoute: "",
  };

  const languageContent = {
    en: {
      navHome: "Home",
      navAbout: "About Us",
      navServices: "What To Do",
      navLocations: "Locations",
      navContact: "Contact",
      tagline: "WE FIND MORE THAN PLACES.",
      legalLink: "Privacy Policy & Terms of Use",
      heroEyebrow: "Research · Locations · Local Intelligence",
      heroTitle: "WE FIND MORE <span>THAN PLACES.</span>",
      heroDescription:
        "Research-led location intelligence, local insight and field coordination for stories that need to go beyond the obvious.",
      heroPrimary: "START YOUR CHAPTER",
      heroSecondary: "EXPLORE OUR WORK",
      heroStatus: "RESEARCH-LED. LOCALLY INFORMED.",
      scrollLabel: "DISCOVER POLAURA",
      orbitEyebrow: "A DIFFERENT POINT OF VIEW",
      orbitTitle: "Every place has a story.",
      orbitDescription:
        "We connect research, geography and local knowledge to help media teams understand a place before they arrive.",
      orbitCenter: "PLACE<br>INTELLIGENCE",
      aboutEyebrow: "WHO WE ARE",
      aboutTitle: "Beyond the location.",
      aboutText:
        "POLAURA is a research and location intelligence studio supporting filmmakers, journalists, documentary teams and creative organizations working across places and cultures.",
      aboutText2:
        "From early-stage research to on-the-ground coordination, we help teams build a clearer understanding of locations, communities, access and context.",
      aboutQuote:
        "A strong story begins long before the camera starts rolling.",
      servicesEyebrow: "WHAT WE DO",
      servicesTitle: "Clarity before the journey.",
      servicesDescription:
        "Practical research and location support designed around the needs of each project.",
      locationsEyebrow: "EXPLORE OUR REGIONS",
      locationsTitle: "Places with perspective.",
      locationsDescription:
        "Explore locations, environments and cultural contexts across the region.",
      viewLocation: "EXPLORE LOCATION",
      contactEyebrow: "LET'S BEGIN",
      contactTitle: "START YOUR CHAPTER.",
      contactDescription:
        "Tell us about your project, the places you need to understand, and the support you are looking for.",
      formName: "Your name",
      formEmail: "Email address",
      formOrganization: "Organization / Company",
      formProject: "Project type",
      formProjectPlaceholder: "Select project type",
      formMessage: "Tell us about your project",
      formSubmit: "SEND AN ENQUIRY",
      formPrivacy:
        "Please avoid sending confidential or sensitive information through this initial form.",
      formSuccess:
        "Your email application should open with your enquiry. Please review and send your message.",
      projectOptions: [
        "Film & Documentary",
        "News & Journalism",
        "Advertising & Commercial",
        "Research & Analysis",
        "Location Scouting",
        "Other",
      ],
      serviceItems: [
        {
          number: "01",
          title: "Research & Location Intelligence",
          description:
            "Contextual research, location assessment and structured information to support informed project decisions.",
        },
        {
          number: "02",
          title: "Location Scouting & Recce",
          description:
            "Identify and assess potential locations through visual references, site information and practical considerations.",
        },
        {
          number: "03",
          title: "Access, Permits & Logistics",
          description:
            "Support with access enquiries, local coordination, permit pathways and location-specific logistics.",
        },
        {
          number: "04",
          title: "Cultural & Local Insight",
          description:
            "Understand local customs, community context and sensitivities that may shape how a project is approached.",
        },
        {
          number: "05",
          title: "Local Networks & Expertise",
          description:
            "Connect projects with relevant local professionals, specialists, organizations and knowledgeable sources.",
        },
        {
          number: "06",
          title: "Location Briefs & Visual Research",
          description:
            "Organize location references, practical notes and research findings into clear, project-ready briefs.",
        },
      ],
      locations: {
        riyadh: {
          name: "Riyadh",
          country: "SAUDI ARABIA",
          short:
            "Contemporary architecture, evolving urban landscapes and traditional districts.",
          intro:
            "Explore Riyadh through its financial district, transport networks, historic neighborhoods and surrounding landscapes.",
          places: [
            "Kingdom Centre Tower",
            "King Abdullah Financial District",
            "Riyadh Metro",
            "Diriyah",
            "Edge of the World",
            "Al Muaiqiliyah",
            "Traditional & Popular Houses",
          ],
        },
        jeddah: {
          name: "Jeddah",
          country: "SAUDI ARABIA",
          short:
            "Red Sea coastlines, historic architecture and a distinctive urban identity.",
          intro:
            "Discover the contrasts between Jeddah's waterfront, historic Al-Balad and its northern coastal areas.",
          places: [
            "King Fahd Fountain",
            "Jeddah Corniche",
            "Historic Al-Balad",
            "Bayt Al-Matbouli",
            "North Obhur",
          ],
        },
        alula: {
          name: "AlUla",
          country: "SAUDI ARABIA",
          short:
            "Desert formations, heritage sites and striking cultural landscapes.",
          intro:
            "Explore the region's sandstone formations, oasis landscapes, heritage architecture and contemporary cultural venues.",
          places: [
            "Elephant Rock",
            "Dar Tantora",
            "AlUla Oasis",
            "Hegra",
            "AlUla Old Town",
            "Maraya Hall",
          ],
        },
        kuwait: {
          name: "Kuwait",
          country: "STATE OF KUWAIT",
          short:
            "Gulf architecture, traditional markets and distinctive coastal settings.",
          intro:
            "Explore Kuwait's urban character through its waterfront, traditional markets, island settings and residential architecture.",
          places: [
            "Kuwait Towers",
            "Souq Al-Mubarakiya",
            "Failaka Island",
            "Traditional Kuwaiti Houses",
            "Diwaniyas",
            "Salmiya Market",
          ],
        },
        jordan: {
          name: "Jordan",
          country: "HASHEMITE KINGDOM OF JORDAN",
          short:
            "Desert environments, ancient landmarks and historic urban neighborhoods.",
          intro:
            "Discover the country's diverse environments, from desert landscapes to historic streets and classical architecture.",
          places: [
            "Jordanian Desert",
            "Roman Theatre",
            "Old Salt",
            "Historic Amman Houses",
            "Historic Urban Districts",
          ],
        },
      },
      locationResearchEyebrow: "LOCATION RESEARCH",
      locationResearchTitle: "Understand the place in context.",
      locationResearchText:
        "Each location can be assessed through its visual character, local context, practical access and relevance to your project.",
      mapLabel: "EXPLORE THE AREA",
      locationContact: "DISCUSS A PROJECT",
      backToLocations: "ALL LOCATIONS",
      legalTitle: "Privacy Policy & Terms of Use",
      legalIntro:
        "This page outlines general principles for using the POLAURA website and handling information submitted through it. Final terms should be reviewed and adapted to the applicable law and the actual operation of the business.",
      legalSections: [
        {
          title: "1. Introduction",
          text:
            "POLAURA provides information about research, location intelligence and related support services. By accessing this website, you agree to use it lawfully and responsibly.",
        },
        {
          title: "2. Information You Provide",
          text:
            "When you contact us, you may choose to provide your name, email address, organization and project details. Please provide only information you are authorized to share.",
        },
        {
          title: "3. How Information Is Used",
          text:
            "Submitted information may be used to respond to enquiries, understand project requirements, communicate about requested services and maintain business records where appropriate.",
        },
        {
          title: "4. Confidentiality",
          text:
            "We aim to handle enquiries with discretion. However, this website form should not be treated as a secure channel for trade secrets, personal records, security-sensitive material or other highly confidential information.",
        },
        {
          title: "5. Data Sharing",
          text:
            "Personal information should not be sold. Information may be shared with relevant service providers or professional partners only where reasonably necessary for website operation, responding to a request or delivering an agreed service, subject to applicable requirements.",
        },
        {
          title: "6. Data Security",
          text:
            "Reasonable technical and organizational measures should be used to protect information. No online transmission or storage method can be guaranteed to be completely secure.",
        },
        {
          title: "7. Data Retention",
          text:
            "Information should be retained only for as long as reasonably necessary for the purpose for which it was collected, legitimate business needs and applicable legal obligations.",
        },
        {
          title: "8. Your Choices and Rights",
          text:
            "Depending on applicable law, you may have rights to access, correct, delete or restrict certain uses of your personal information. Contact the website operator to make a request.",
        },
        {
          title: "9. Cookies and Technical Data",
          text:
            "The website or its hosting provider may process limited technical data necessary for security, functionality and performance. Any additional analytics or tracking technologies should be disclosed and managed in accordance with applicable requirements.",
        },
        {
          title: "10. Third-Party Services",
          text:
            "External services, including map providers, fonts, hosting platforms and linked websites, may operate under their own terms and privacy policies. POLAURA does not control all practices of these external providers.",
        },
        {
          title: "11. Intellectual Property",
          text:
            "Unless otherwise indicated, website text, branding, layout and original materials are protected by applicable intellectual property laws. You may not reproduce or commercially use them without appropriate permission.",
        },
        {
          title: "12. Website Content",
          text:
            "Website content is provided for general informational purposes. The inclusion of a location or reference does not guarantee access, permission to film, current conditions or suitability for a particular project.",
        },
        {
          title: "13. Location Information",
          text:
            "Location details, images and descriptions may change over time. Users should independently verify access requirements, safety conditions, permissions and relevant local rules before undertaking any activity.",
        },
        {
          title: "14. No Guarantee of Outcomes",
          text:
            "Any research, coordination or location support is subject to the information available, third-party decisions, local conditions and the scope agreed for the particular project.",
        },
        {
          title: "15. Acceptable Use",
          text:
            "You must not misuse this website, attempt unauthorized access, introduce malicious code, interfere with its operation or use its content for unlawful purposes.",
        },
        {
          title: "16. External Links",
          text:
            "Links to external websites are provided for convenience or reference. They do not necessarily represent endorsement, and users should review the terms of those websites.",
        },
        {
          title: "17. Limitation of Liability",
          text:
            "To the extent permitted by applicable law, the website operator is not responsible for losses arising solely from reliance on general website content, temporary unavailability or third-party services.",
        },
        {
          title: "18. Changes to These Terms",
          text:
            "These terms may be updated when website features, services or legal requirements change. The latest version should be published on this page with an appropriate revision date.",
        },
        {
          title: "19. Applicable Law",
          text:
            "The applicable law and competent jurisdiction should be identified by the website operator based on the business's legal establishment and relevant contractual arrangements.",
        },
        {
          title: "20. Contact",
          text:
            "For privacy-related enquiries, questions about these terms or requests concerning information you have submitted, please use the contact details officially published by the website operator.",
        },
        {
          title: "21. Acceptance",
          text:
            "By continuing to use this website, you acknowledge that you have read this information. Any separate service agreement may contain additional terms that apply to the specific project.",
        },
      ],
      legalNotice:
        "Draft template — review and adapt before publishing. This text is not legal advice and should be checked against the laws applicable to the business.",
      notFoundTitle: "This page is off the map.",
      notFoundText:
        "The page may have moved or the address may be incorrect.",
      returnHome: "RETURN HOME",
    },

    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navServices: "ماذا نقدم",
      navLocations: "المواقع",
      navContact: "تواصل معنا",
      tagline: "نكتشف ما هو أبعد من المكان.",
      legalLink: "سياسة الخصوصية وشروط الاستخدام",
      heroEyebrow: "البحث · المواقع · المعرفة المحلية",
      heroTitle: "نكتشف ما هو <span>أبعد من المكان.</span>",
      heroDescription:
        "أبحاث متخصصة، ومعلومات عن المواقع، ومعرفة محلية، وتنسيق ميداني للمشروعات الإعلامية التي تتطلب فهمًا أعمق للمكان.",
      heroPrimary: "ابدأ مشروعك معنا",
      heroSecondary: "اكتشف خدماتنا",
      heroStatus: "بحث متخصص. ومعرفة محلية.",
      scrollLabel: "اكتشف بولورا",
      orbitEyebrow: "منظور مختلف",
      orbitTitle: "لكل مكان حكاية.",
      orbitDescription:
        "نربط البحث بالجغرافيا والمعرفة المحلية لمساعدة الفرق الإعلامية على فهم المكان قبل الوصول إليه.",
      orbitCenter: "معرفة<br>المكان",
      aboutEyebrow: "من نحن",
      aboutTitle: "ما وراء الموقع.",
      aboutText:
        "بولورا منصة متخصصة في البحث ودراسة المواقع، تدعم صناع الأفلام والصحفيين وفرق الأفلام الوثائقية والمؤسسات الإبداعية العاملة عبر أماكن وثقافات مختلفة.",
      aboutText2:
        "من البحث الأولي إلى التنسيق الميداني، نساعد الفرق على تكوين فهم أوضح للمواقع والمجتمعات وإمكانية الوصول والسياق المحلي.",
      aboutQuote:
        "تبدأ القصة القوية قبل تشغيل الكاميرا بوقت طويل.",
      servicesEyebrow: "ماذا نقدم",
      servicesTitle: "وضوح قبل الانطلاق.",
      servicesDescription:
        "خدمات بحثية ومساندة ميدانية مصممة وفق احتياجات كل مشروع.",
      locationsEyebrow: "اكتشف مناطقنا",
      locationsTitle: "أماكن برؤية مختلفة.",
      locationsDescription:
        "اكتشف المواقع والبيئات والسياقات الثقافية في المنطقة.",
      viewLocation: "استكشف الموقع",
      contactEyebrow: "لنبدأ معًا",
      contactTitle: "ابدأ مشروعك معنا.",
      contactDescription:
        "أخبرنا عن مشروعك والأماكن التي ترغب في دراستها ونوع الدعم الذي تحتاج إليه.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formOrganization: "الجهة أو الشركة",
      formProject: "نوع المشروع",
      formProjectPlaceholder: "اختر نوع المشروع",
      formMessage: "أخبرنا عن مشروعك",
      formSubmit: "إرسال الاستفسار",
      formPrivacy:
        "يرجى عدم إرسال معلومات سرية أو حساسة عبر نموذج التواصل الأولي.",
      formSuccess:
        "من المفترض أن يفتح تطبيق البريد الإلكتروني لديك برسالة جاهزة. راجع الرسالة ثم أرسلها.",
      projectOptions: [
        "الأفلام والأفلام الوثائقية",
        "الأخبار والصحافة",
        "الإعلانات والمشروعات التجارية",
        "البحث والتحليل",
        "استكشاف المواقع",
        "أخرى",
      ],
      serviceItems: [
        {
          number: "01",
          title: "البحث ومعلومات المواقع",
          description:
            "بحث سياقي وتقييم للمواقع ومعلومات منظمة تساعد على اتخاذ قرارات مدروسة بشأن المشروع.",
        },
        {
          number: "02",
          title: "استكشاف المواقع والمعاينة",
          description:
            "تحديد المواقع المحتملة وتقييمها بالاستناد إلى المراجع البصرية والمعلومات الميدانية والاعتبارات العملية.",
        },
        {
          number: "03",
          title: "التصاريح والوصول والخدمات اللوجستية",
          description:
            "المساندة في الاستفسار عن إمكانية الوصول والتنسيق المحلي ومسارات التصاريح والمتطلبات اللوجستية.",
        },
        {
          number: "04",
          title: "الفهم الثقافي والمحلي",
          description:
            "فهم العادات والسياق المجتمعي والحساسيات المحلية التي قد تؤثر في طريقة تنفيذ المشروع.",
        },
        {
          number: "05",
          title: "الشبكات والخبرات المحلية",
          description:
            "ربط المشروعات بالمتخصصين والمهنيين والمؤسسات والمصادر المحلية ذات الصلة.",
        },
        {
          number: "06",
          title: "ملفات المواقع والبحث البصري",
          description:
            "تنظيم المراجع البصرية والملاحظات العملية ونتائج البحث في ملفات واضحة وجاهزة للاستخدام.",
        },
      ],
      locations: {
        riyadh: {
          name: "الرياض",
          country: "المملكة العربية السعودية",
          short:
            "عمارة معاصرة ومشاهد حضرية متجددة وأحياء تقليدية.",
          intro:
            "اكتشف الرياض من خلال مركزها المالي وشبكات النقل والأحياء التاريخية والمشاهد الطبيعية المحيطة بها.",
          places: [
            "برج مركز المملكة",
            "مركز الملك عبدالله المالي",
            "مترو الرياض",
            "الدرعية",
            "حافة العالم",
            "المعيقلية",
            "البيوت الشعبية والتقليدية",
          ],
        },
        jeddah: {
          name: "جدة",
          country: "المملكة العربية السعودية",
          short:
            "ساحل البحر الأحمر وعمارة تاريخية وهوية حضرية مميزة.",
          intro:
            "اكتشف التنوع بين واجهة جدة البحرية والبلد التاريخية والمناطق الساحلية الشمالية.",
          places: [
            "نافورة الملك فهد",
            "كورنيش جدة",
            "جدة التاريخية — البلد",
            "بيت المتبولي",
            "أبحر الشمالية",
          ],
        },
        alula: {
          name: "العلا",
          country: "المملكة العربية السعودية",
          short:
            "تكوينات صخرية صحراوية ومواقع تراثية ومشاهد ثقافية لافتة.",
          intro:
            "اكتشف التكوينات الصخرية وواحات العلا وعمارتها التراثية ومواقعها الثقافية المعاصرة.",
          places: [
            "جبل الفيل",
            "دار طنطورة",
            "واحة العلا",
            "الحِجر",
            "البلدة القديمة",
            "قاعة مرايا",
          ],
        },
        kuwait: {
          name: "الكويت",
          country: "دولة الكويت",
          short:
            "عمارة خليجية وأسواق تقليدية ومواقع ساحلية مميزة.",
          intro:
            "اكتشف الطابع العمراني للكويت من خلال الواجهة البحرية والأسواق التقليدية والجزر والعمارة السكنية.",
          places: [
            "أبراج الكويت",
            "سوق المباركية",
            "جزيرة فيلكا",
            "البيوت الكويتية التقليدية",
            "الديوانيات",
            "سوق السالمية",
          ],
        },
        jordan: {
          name: "الأردن",
          country: "المملكة الأردنية الهاشمية",
          short:
            "بيئات صحراوية ومعالم أثرية وأحياء حضرية تاريخية.",
          intro:
            "اكتشف تنوع البيئات الأردنية، من المشاهد الصحراوية إلى الشوارع التاريخية والعمارة الكلاسيكية.",
          places: [
            "الصحراء الأردنية",
            "المدرج الروماني",
            "السلط القديمة",
            "بيوت عمّان القديمة",
            "الأحياء التاريخية",
          ],
        },
      },
      locationResearchEyebrow: "البحث في المواقع",
      locationResearchTitle: "افهم المكان ضمن سياقه.",
      locationResearchText:
        "يمكن دراسة كل موقع من حيث طابعه البصري وسياقه المحلي وإمكانية الوصول إليه ومدى ملاءمته للمشروع.",
      mapLabel: "استكشف المنطقة",
      locationContact: "ناقش مشروعك",
      backToLocations: "جميع المواقع",
      legalTitle: "سياسة الخصوصية وشروط الاستخدام",
      legalIntro:
        "توضح هذه الصفحة المبادئ العامة لاستخدام موقع بولورا والتعامل مع المعلومات المرسلة عبره. ينبغي مراجعة النص النهائي وتكييفه مع القوانين المعمول بها وطبيعة عمل المنشأة الفعلية.",
      legalSections: [
        {
          title: "1. مقدمة",
          text:
            "تقدم بولورا معلومات عن خدمات البحث ومعلومات المواقع والدعم المرتبط بها. باستخدام هذا الموقع، فإنك توافق على استخدامه بصورة قانونية ومسؤولة.",
        },
        {
          title: "2. المعلومات التي تقدمها",
          text:
            "عند التواصل معنا، قد تختار تقديم اسمك وبريدك الإلكتروني والجهة التي تمثلها وتفاصيل مشروعك. يرجى تقديم المعلومات التي يحق لك مشاركتها فقط.",
        },
        {
          title: "3. كيفية استخدام المعلومات",
          text:
            "قد تُستخدم المعلومات المرسلة للرد على الاستفسارات وفهم متطلبات المشروعات والتواصل بشأن الخدمات المطلوبة والاحتفاظ بسجلات العمل عند الحاجة.",
        },
        {
          title: "4. السرية",
          text:
            "نسعى إلى التعامل مع الاستفسارات بسرية وحرص. ومع ذلك، لا ينبغي اعتبار نموذج الموقع قناة آمنة لإرسال الأسرار التجارية أو السجلات الشخصية أو المعلومات الحساسة أمنيًا أو غيرها من المعلومات شديدة السرية.",
        },
        {
          title: "5. مشاركة البيانات",
          text:
            "لا ينبغي بيع المعلومات الشخصية. وقد تتم مشاركتها مع مزودي الخدمات أو الشركاء المهنيين ذوي الصلة عند الضرورة المعقولة لتشغيل الموقع أو الرد على الطلب أو تقديم خدمة متفق عليها، وفق المتطلبات المعمول بها.",
        },
        {
          title: "6. أمن البيانات",
          text:
            "ينبغي استخدام تدابير تقنية وتنظيمية معقولة لحماية المعلومات. ولا يمكن ضمان الأمان الكامل لأي وسيلة لنقل المعلومات أو تخزينها عبر الإنترنت.",
        },
        {
          title: "7. الاحتفاظ بالبيانات",
          text:
            "ينبغي الاحتفاظ بالمعلومات للمدة اللازمة بصورة معقولة للغرض الذي جُمعت من أجله، واحتياجات العمل المشروعة، والالتزامات القانونية المعمول بها.",
        },
        {
          title: "8. خياراتك وحقوقك",
          text:
            "قد تتمتع، بحسب القانون المعمول به، بحقوق تتعلق بالوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها أو تقييد بعض أوجه استخدامها. يمكنك التواصل مع الجهة المشغلة للموقع لتقديم طلب.",
        },
        {
          title: "9. ملفات تعريف الارتباط والبيانات التقنية",
          text:
            "قد يعالج الموقع أو مزود الاستضافة بعض البيانات التقنية اللازمة للأمان والوظائف والأداء. وينبغي الإفصاح عن أي أدوات إضافية للتحليل أو التتبع وإدارتها وفق المتطلبات المعمول بها.",
        },
        {
          title: "10. خدمات الجهات الخارجية",
          text:
            "قد تخضع الخدمات الخارجية، بما فيها الخرائط والخطوط ومنصات الاستضافة والمواقع المرتبطة، لشروط وسياسات خصوصية مستقلة. ولا تتحكم بولورا في جميع ممارسات هذه الجهات.",
        },
        {
          title: "11. الملكية الفكرية",
          text:
            "ما لم يُذكر خلاف ذلك، تخضع نصوص الموقع وهويته البصرية وتصميمه ومواده الأصلية لأنظمة الملكية الفكرية المعمول بها. ولا يجوز إعادة نشرها أو استخدامها تجاريًا دون إذن مناسب.",
        },
        {
          title: "12. محتوى الموقع",
          text:
            "يُقدم محتوى الموقع لأغراض معلوماتية عامة. ولا يعني إدراج موقع أو مرجع ضمان إمكانية الوصول إليه أو الحصول على إذن للتصوير أو توافر الظروف المناسبة أو ملاءمته لمشروع معين.",
        },
        {
          title: "13. معلومات المواقع",
          text:
            "قد تتغير تفاصيل المواقع وصورها وأوصافها بمرور الوقت. وينبغي للمستخدمين التحقق بشكل مستقل من متطلبات الوصول والسلامة والتصاريح والأنظمة المحلية ذات الصلة قبل تنفيذ أي نشاط.",
        },
        {
          title: "14. عدم ضمان النتائج",
          text:
            "تخضع خدمات البحث أو التنسيق أو دعم المواقع للمعلومات المتاحة وقرارات الجهات الأخرى والظروف المحلية ونطاق العمل المتفق عليه لكل مشروع.",
        },
        {
          title: "15. الاستخدام المقبول",
          text:
            "يُمنع إساءة استخدام الموقع أو محاولة الوصول غير المصرح به أو إدخال برمجيات ضارة أو تعطيل عمله أو استخدام محتواه لأغراض غير قانونية.",
        },
        {
          title: "16. الروابط الخارجية",
          text:
            "قد تُدرج روابط لمواقع خارجية للتسهيل أو الاستدلال. ولا يعني ذلك بالضرورة تأييد محتواها، وينبغي للمستخدم مراجعة شروط تلك المواقع.",
        },
        {
          title: "17. حدود المسؤولية",
          text:
            "إلى الحد الذي يسمح به القانون المعمول به، لا تتحمل الجهة المشغلة للموقع المسؤولية عن الخسائر الناتجة حصريًا عن الاعتماد على المحتوى العام أو التوقف المؤقت للموقع أو خدمات الجهات الخارجية.",
        },
        {
          title: "18. تعديل الشروط",
          text:
            "قد تُحدّث هذه الشروط عند تغيير خصائص الموقع أو الخدمات أو المتطلبات القانونية. وينبغي نشر النسخة الأحدث في هذه الصفحة مع تاريخ مراجعة مناسب.",
        },
        {
          title: "19. القانون المعمول به",
          text:
            "ينبغي تحديد القانون المختص والجهة القضائية بناءً على مقر المنشأة القانوني والترتيبات التعاقدية ذات الصلة.",
        },
        {
          title: "20. التواصل",
          text:
            "للاستفسارات المتعلقة بالخصوصية أو هذه الشروط أو طلبات المعلومات التي سبق إرسالها، يرجى استخدام بيانات التواصل الرسمية المنشورة من الجهة المشغلة للموقع.",
        },
        {
          title: "21. الموافقة",
          text:
            "باستمرارك في استخدام الموقع، فإنك تقر بأنك اطلعت على هذه المعلومات. وقد يتضمن أي اتفاق مستقل للخدمات شروطًا إضافية تنطبق على المشروع المعني.",
        },
      ],
      legalNotice:
        "مسودة أولية — يرجى مراجعتها وتكييفها قبل النشر. هذا النص ليس استشارة قانونية وينبغي التحقق من توافقه مع الأنظمة المعمول بها.",
      notFoundTitle: "هذه الصفحة خارج الخريطة.",
      notFoundText:
        "ربما انتقلت الصفحة أو أن العنوان غير صحيح.",
      returnHome: "العودة للرئيسية",
    },
  };

  /*
   * Images are illustrative remote references.
   * Replace these URLs with verified landmark photography
   * and images you have permission to use before publishing.
   */
  const imageLibrary = {
    hero:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85",
    orbitRiyadh:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
    orbitArchitecture:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
    orbitDesert:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80",
    orbitCoast:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    riyadh:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
    jeddah:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85",
    alula:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=85",
    kuwait:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85",
    jordan:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
  };

  const locationImages = {
    riyadh: [
      imageLibrary.riyadh,
      imageLibrary.orbitArchitecture,
      imageLibrary.orbitRiyadh,
      imageLibrary.orbitArchitecture,
      imageLibrary.orbitDesert,
      imageLibrary.riyadh,
      imageLibrary.orbitArchitecture,
    ],
    jeddah: [
      imageLibrary.jeddah,
      imageLibrary.orbitCoast,
      imageLibrary.orbitArchitecture,
      imageLibrary.orbitArchitecture,
      imageLibrary.jeddah,
    ],
    alula: [
      imageLibrary.alula,
      imageLibrary.orbitDesert,
      imageLibrary.alula,
      imageLibrary.orbitDesert,
      imageLibrary.alula,
      imageLibrary.orbitArchitecture,
    ],
    kuwait: [
      imageLibrary.kuwait,
      imageLibrary.orbitArchitecture,
      imageLibrary.jeddah,
      imageLibrary.orbitArchitecture,
      imageLibrary.kuwait,
      imageLibrary.riyadh,
    ],
    jordan: [
      imageLibrary.jordan,
      imageLibrary.orbitArchitecture,
      imageLibrary.orbitDesert,
      imageLibrary.orbitArchitecture,
      imageLibrary.jordan,
    ],
  };

  const serviceSymbols = ["⌕", "◎", "↗", "◌", "⌘", "▤"];

  function t(key) {
    return languageContent[state.language][key] ?? key;
  }

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return entities[character];
    });
  }

  function getCurrentRoute() {
    const raw = window.location.hash.replace(/^#/, "") || "/";
    return raw.startsWith("/") ? raw : `/${raw}`;
  }

  function setLanguage(language) {
    if (!languageContent[language]) return;
    state.language = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.dir = language === "ar" ? "rtl" : "ltr";

    if (langSwitch) {
      langSwitch.innerHTML =
        language === "en"
          ? 'AR <span>/</span> EN'
          : 'EN <span>/</span> AR';
      langSwitch.setAttribute(
        "aria-label",
        language === "en" ? "Switch to Arabic" : "Switch to English"
      );
    }

    render();
  }

  function closeMenu() {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    if (!mainNav || !menuToggle) return;
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  }

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }

  function updateNavigation(route) {
    if (!mainNav) return;

    const currentSection = route.split("/")[1] || "home";

    mainNav.querySelectorAll("[data-nav]").forEach((link) => {
      const nav = link.dataset.nav;
      const active =
        nav === currentSection ||
        (nav === "home" && currentSection === "");

      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function imageHTML(src, alt, className = "") {
    return `
      <img
        class="${className}"
        src="${escapeHTML(src)}"
        alt="${escapeHTML(alt)}"
        loading="lazy"
        decoding="async"
      >
    `;
  }

  function renderHero() {
    return `
      <section class="hero">
        <div class="hero-background" aria-hidden="true">
          <img src="${imageLibrary.hero}" alt="" fetchpriority="high">
        </div>
        <div class="hero-grid" aria-hidden="true"></div>

        <div class="hero-content">
          <div class="hero-copy">
            <p class="eyebrow">${t("heroEyebrow")}</p>
            <h1>${t("heroTitle")}</h1>
            <p class="hero-description">${t("heroDescription")}</p>

            <div class="hero-actions">
              <a class="button button-primary" href="#/contact">
                ${t("heroPrimary")}
                <span class="button-arrow" aria-hidden="true">↗</span>
              </a>
              <a class="button" href="#/what-we-do">
                ${t("heroSecondary")}
              </a>
            </div>

            <div class="hero-meta">
              <span class="status-dot" aria-hidden="true"></span>
              <span>${t("heroStatus")}</span>
            </div>
          </div>
        </div>

        <a class="hero-scroll" href="#/about">${t("scrollLabel")}</a>
      </section>
    `;
  }

  function renderOrbitSection() {
    const orbitItems = [
      { src: imageLibrary.orbitRiyadh, alt: "Urban environment" },
      { src: imageLibrary.orbitArchitecture, alt: "Architecture" },
      { src: imageLibrary.orbitDesert, alt: "Desert landscape" },
      { src: imageLibrary.orbitCoast, alt: "Coastal landscape" },
    ];

    return `
      <section class="section orbit-section">
        <div class="page-shell orbit-layout">
          <div class="orbit-copy reveal">
            <p class="eyebrow">${t("orbitEyebrow")}</p>
            <h2>${t("orbitTitle")}</h2>
            <p class="section-description">${t("orbitDescription")}</p>
            <a class="text-link" href="#/locations">
              ${t("navLocations")}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="orbit-stage reveal" aria-label="${escapeHTML(t("orbitTitle"))}">
            <div class="orbit-ring" aria-hidden="true"></div>
            <div class="orbit-center">
              <span>${t("orbitCenter")}</span>
            </div>
            ${orbitItems
              .map(
                (item) => `
                  <div class="orbit-item">
                    ${imageHTML(item.src, item.alt)}
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderAboutSection() {
    return `
      <section class="section" id="about-section">
        <div class="page-shell about-grid">
          <div class="about-title reveal">
            <p class="eyebrow">${t("aboutEyebrow")}</p>
            <h2>${t("aboutTitle")}</h2>
          </div>

          <div class="about-body reveal reveal-delay-1">
            <p>${t("aboutText")}</p>
            <p>${t("aboutText2")}</p>
            <blockquote class="about-quote">${t("aboutQuote")}</blockquote>
          </div>
        </div>
      </section>
    `;
  }

  function renderServicesSection() {
    const services = t("serviceItems");

    return `
      <section class="section" id="services-section">
        <div class="page-shell">
          <div class="section-heading reveal">
            <p class="eyebrow">${t("servicesEyebrow")}</p>
            <h2>${t("servicesTitle")}</h2>
            <p class="section-description">${t("servicesDescription")}</p>
          </div>

          <div class="service-grid">
            ${services
              .map(
                (service, index) => `
                  <article class="service-card reveal">
                    <span class="service-number">${service.number}</span>
                    <span class="service-symbol" aria-hidden="true">
                      ${serviceSymbols[index] || "↗"}
                    </span>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderLocationsSection() {
    const locations = t("locations");
    const order = ["riyadh", "jeddah", "alula", "kuwait", "jordan"];

    return `
      <section class="section" id="locations-section">
        <div class="page-shell">
          <div class="section-heading reveal">
            <p class="eyebrow">${t("locationsEyebrow")}</p>
            <h2>${t("locationsTitle")}</h2>
            <p class="section-description">${t("locationsDescription")}</p>
          </div>

          <div class="location-grid">
            ${order
              .map(
                (key, index) => `
                  <a class="location-card reveal" href="#/locations/${key}">
                    <div class="location-card-image">
                      ${imageHTML(
                        imageLibrary[key],
                        `${locations[key].name} location reference`
                      )}
                    </div>
                    <div class="location-card-content">
                      <span class="location-index">
                        ${String(index + 1).padStart(2, "0")} /
                        ${String(order.length).padStart(2, "0")}
                      </span>
                      <h3>${locations[key].name}</h3>
                      <p>${locations[key].short}</p>
                      <span class="text-link">
                        ${t("viewLocation")}
                        <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderContactSection() {
    const options = t("projectOptions");

    return `
      <section class="section contact-section" id="contact-section">
        <div class="page-shell contact-grid">
          <div class="contact-intro reveal">
            <p class="eyebrow">${t("contactEyebrow")}</p>
            <h2>${t("contactTitle")}</h2>
            <p class="section-description">${t("contactDescription")}</p>
          </div>

          <form class="contact-form reveal reveal-delay-1" id="contact-form">
            <div class="form-field">
              <label for="contact-name">${t("formName")}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autocomplete="name"
                required
                maxlength="120"
                placeholder="${escapeHTML(t("formName"))}"
              >
            </div>

            <div class="form-field">
              <label for="contact-email">${t("formEmail")}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autocomplete="email"
                required
                maxlength="200"
                placeholder="${escapeHTML(t("formEmail"))}"
              >
            </div>

            <div class="form-field full-width">
              <label for="contact-organization">${t("formOrganization")}</label>
              <input
                id="contact-organization"
                name="organization"
                type="text"
                autocomplete="organization"
                maxlength="200"
                placeholder="${escapeHTML(t("formOrganization"))}"
              >
            </div>

            <div class="form-field full-width">
              <label for="contact-project">${t("formProject")}</label>
              <select id="contact-project" name="projectType" required>
                <option value="">${t("formProjectPlaceholder")}</option>
                ${options
                  .map(
                    (option) =>
                      `<option value="${escapeHTML(option)}">${escapeHTML(option)}</option>`
                  )
                  .join("")}
              </select>
            </div>

            <div class="form-field full-width">
              <label for="contact-message">${t("formMessage")}</label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxlength="5000"
                placeholder="${escapeHTML(t("formMessage"))}"
              ></textarea>
            </div>

            <p class="form-note">${t("formPrivacy")}</p>

            <button class="button button-primary" type="submit">
              ${t("formSubmit")}
              <span class="button-arrow" aria-hidden="true">↗</span>
            </button>

            <p class="form-status" id="form-status" role="status" hidden></p>
          </form>
        </div>
      </section>
    `;
  }

  function renderHome() {
    app.innerHTML = `
      ${renderHero()}
      ${renderOrbitSection()}
      ${renderAboutSection()}
      ${renderServicesSection()}
      ${renderLocationsSection()}
      ${renderContactSection()}
    `;

    setupRevealAnimations();
    setupContactForm();
  }

  function renderLocationDetail(key) {
    const locations = t("locations");
    const location = locations[key];

    if (!location) {
      renderNotFound();
      return;
    }

    const places = location.places;
    const images = locationImages[key] || [];
    const mapQuery = encodeURIComponent(`${location.name} ${location.country}`);
    const mapURL =
      `https://www.google.com/maps?q=${mapQuery}&output=embed`;

    app.innerHTML = `
      <section class="location-hero">
        ${imageHTML(
          imageLibrary[key],
          `${location.name} landscape`,
          "location-hero-image"
        )}
        <div class="location-hero-content">
          <p class="eyebrow">${escapeHTML(location.country)}</p>
          <h1>${location.name}</h1>
          <p>${location.intro}</p>
          <a class="button" href="#/locations">
            <span aria-hidden="true">←</span>
            ${t("backToLocations")}
          </a>
        </div>
      </section>

      <section class="section">
        <div class="page-shell">
          <div class="section-heading reveal">
            <p class="eyebrow">${t("locationResearchEyebrow")}</p>
            <h2>${t("locationResearchTitle")}</h2>
            <p class="section-description">${t("locationResearchText")}</p>
          </div>

          <div class="location-feature-grid">
            ${places
              .map(
                (place, index) => `
                  <article class="location-feature reveal">
                    ${imageHTML(
                      images[index] || imageLibrary[key],
                      `${place} — ${location.name}`
                    )}
                    <h3>${place}</h3>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="page-shell">
          <div class="section-heading reveal">
            <p class="eyebrow">${t("mapLabel")}</p>
            <h2>${location.name}</h2>
          </div>
          <div class="map-frame reveal">
            <iframe
              title="${escapeHTML(location.name)} map"
              src="${mapURL}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="page-shell">
          <div class="section-heading reveal">
            <p class="eyebrow">${t("contactEyebrow")}</p>
            <h2>${t("locationContact")}</h2>
            <p class="section-description">${location.intro}</p>
            <a class="button button-primary" href="#/contact">
              ${t("heroPrimary")}
              <span class="button-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    `;

    setupRevealAnimations();
  }

  function renderLocationsLanding() {
    app.innerHTML = `
      <section class="section legal-page">
        <div class="page-shell">
          <div class="section-heading reveal">
            <p class="eyebrow">${t("locationsEyebrow")}</p>
            <h1>${t("locationsTitle")}</h1>
            <p class="section-description">${t("locationsDescription")}</p>
          </div>
          ${renderLocationCardsOnly()}
        </div>
      </section>
    `;

    setupRevealAnimations();
  }

  function renderLocationCardsOnly() {
    const locations = t("locations");
    const order = ["riyadh", "jeddah", "alula", "kuwait", "jordan"];

    return `
      <div class="location-grid">
        ${order
          .map(
            (key, index) => `
              <a class="location-card reveal" href="#/locations/${key}">
                <div class="location-card-image">
                  ${imageHTML(imageLibrary[key], locations[key].name)}
                </div>
                <div class="location-card-content">
                  <span class="location-index">
                    ${String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>${locations[key].name}</h3>
                  <p>${locations[key].short}</p>
                  <span class="text-link">${t("viewLocation")} ↗</span>
                </div>
              </a>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderLegalPage() {
    const sections = t("legalSections");

    app.innerHTML = `
      <section class="section legal-page">
        <div class="page-shell">
          <div class="legal-intro">
            <p class="eyebrow">${t("legalLink")}</p>
            <h1>${t("legalTitle")}</h1>
            <p class="section-description">${t("legalIntro")}</p>
          </div>

          <div class="legal-content">
            ${sections
              .map(
                (section) => `
                  <section class="legal-section">
                    <h2>${section.title}</h2>
                    <p>${section.text}</p>
                  </section>
                `
              )
              .join("")}

            <p class="legal-updated">${t("legalNotice")}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderNotFound() {
    app.innerHTML = `
      <section class="page-shell empty-state">
        <p class="eyebrow">404</p>
        <h1>${t("notFoundTitle")}</h1>
        <p>${t("notFoundText")}</p>
        <a class="button button-primary" href="#/">
          ${t("returnHome")}
        </a>
      </section>
    `;
  }

  function setupRevealAnimations() {
    const elements = app.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            activeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form || !status) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const organization = String(data.get("organization") || "").trim();
      const projectType = String(data.get("projectType") || "").trim();
      const message = String(data.get("message") || "").trim();

      /*
       * IMPORTANT:
       * Replace this placeholder with your real business email.
       * For reliable submissions, connect a form service or backend.
       */
      const contactEmail = "YOUR_EMAIL@example.com";

      if (
        !contactEmail ||
        contactEmail === "YOUR_EMAIL@example.com"
      ) {
        status.hidden = false;
        status.textContent =
          state.language === "ar"
            ? "يرجى إضافة بريدك الإلكتروني الحقيقي داخل ملف app.js قبل تفعيل نموذج التواصل."
            : "Please add your real email address in app.js before activating the contact form.";
        return;
      }

      const subject = encodeURIComponent(
        `POLAURA website enquiry — ${projectType}`
      );

      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || "Not provided"}`,
          `Project type: ${projectType}`,
          "",
          "Project details:",
          message,
        ].join("\n")
      );

      status.hidden = false;
      status.textContent = t("formSuccess");

      window.location.href =
        `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    });
  }

  function render() {
    const route = getCurrentRoute();
    state.currentRoute = route;

    closeMenu();
    updateNavigation(route);

    if (route === "/" || route === "") {
      renderHome();
    } else if (route === "/about") {
      renderHome();
      requestAnimationFrame(() => {
        document.getElementById("about-section")?.scrollIntoView();
      });
    } else if (
      route === "/what-we-do" ||
      route === "/services"
    ) {
      renderHome();
      requestAnimationFrame(() => {
        document.getElementById("services-section")?.scrollIntoView();
      });
    } else if (route === "/locations") {
      renderLocationsLanding();
    } else if (route.startsWith("/locations/")) {
      const key = route.split("/")[2];
      renderLocationDetail(key);
    } else if (route === "/contact") {
      renderHome();
      requestAnimationFrame(() => {
        document.getElementById("contact-section")?.scrollIntoView();
      });
    } else if (
      route === "/privacy-terms" ||
      route === "/privacy" ||
      route === "/terms"
    ) {
      renderLegalPage();
    } else {
      renderNotFound();
    }

    updateNavigation(route);

    if (route === "/" || route === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (app) app.focus({ preventScroll: true });
  }

  /* -------------------- Event listeners -------------------- */

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  if (langSwitch) {
    langSwitch.addEventListener("click", () => {
      setLanguage(state.language === "en" ? "ar" : "en");
    });
  }

  if (mainNav) {
    mainNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  document.documentElement.lang = state.language;
  document.documentElement.dir = "ltr";

  updateHeader();
  render();
})();
