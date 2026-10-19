const IMAGES = {
  riyadh: "https://commons.wikimedia.org/wiki/Special:FilePath/Riyadh%20Skyline%20showing%20the%20King%20Abdullah%20Financial%20District%20%28KAFD%29%20and%20the%20famous%20Kingdom%20Tower%20.jpg?width=1800",
  jeddah: "https://commons.wikimedia.org/wiki/Special:FilePath/King%20Fahd%27s%20Fountain.jpg?width=1600",
  alula: "https://commons.wikimedia.org/wiki/Special:FilePath/Elephant%20rock%2C%20Al-%27Ula%20%282024%29.jpg?width=1600",
  kuwait: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuwait%20Towers%20View.jpg?width=1600",
  jordan: "https://commons.wikimedia.org/wiki/Special:FilePath/Petra%2C%20Jordan.jpg?width=1600",
  earth: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1800&q=85",
  mountains: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85"
};

const TEXT = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navServices: "What To Do",
    navLocations: "Locations",
    navContact: "Contact",
    tagline: "WE FIND MORE THAN PLACES.",
    legalLink: "Privacy Policy & Terms of Use",
    heroEyebrow: "Research · Location Intelligence · Local Insight",
    heroTitle: "FIND THE PLACE BEHIND THE STORY",
    heroSub: "Research. Locations. Local Insight.",
    heroCopy: "We help filmmakers, journalists, brands, and creative teams discover the places, people, context, and local details that bring a project to life.",
    cta: "START YOUR CHAPTER",
    orbitTitle: "EVERY STORY HAS A PLACE.",
    orbitCopy: "We connect creative ideas with real places, trusted information, local expertise, and the details that make a story authentic.",
    orbitNote: "A world of places · One connected perspective",
    aboutKicker: "01 / ABOUT US",
    aboutTitle: "WE CONNECT STORIES WITH PLACES.",
    aboutP1: "POLAURA is a research and location intelligence studio supporting film, news, documentary, advertising, and media projects.",
    aboutP2: "We connect creative teams with real places, reliable information, local expertise, and the context needed to make informed decisions.",
    manifesto: "WE FIND MORE THAN PLACES.",
    servicesKicker: "02 / WHAT WE DO",
    servicesTitle: "RESEARCH THAT MOVES A STORY FORWARD.",
    servicesIntro: "From early discovery to practical location insight, we help teams make informed decisions about place, context, access, and local realities.",
    locationsKicker: "03 / LOCATIONS",
    locationsTitle: "EXPLORE THE REGION",
    locationsIntro: "Discover contemporary skylines, historic districts, cultural landmarks, and distinctive landscapes.",
    discover: "DISCOVER",
    riyadh: "Riyadh",
    jeddah: "Jeddah",
    alula: "AlUla",
    kuwait: "Kuwait",
    jordan: "Jordan",
    riyadhDesc: "A dynamic capital where contemporary architecture meets deep-rooted heritage.",
    jeddahDesc: "A Red Sea city shaped by waterfront life, historic streets, and coastal character.",
    alulaDesc: "Monumental sandstone formations, ancient heritage, and expansive desert horizons.",
    kuwaitDesc: "A Gulf capital with a distinctive skyline, traditional markets, and urban culture.",
    jordanDesc: "Ancient stone, desert landscapes, historic towns, and layered cultural heritage.",
    contactKicker: "04 / CONTACT",
    contactTitle: "START YOUR CHAPTER",
    contactCopy: "Tell us about your project and let us explore the places, information, and stories behind it.",
    name: "Name",
    email: "Email",
    projectType: "Project Type",
    selectProject: "Select a project type",
    film: "Film / Documentary",
    news: "News / Journalism",
    advertising: "Advertising / Brand",
    research: "Research / Other",
    projectDetails: "Tell us about your project",
    send: "START YOUR CHAPTER",
    formNote: "This form is a demonstration. Connect an email address or form service before publishing to receive enquiries.",
    formSuccess: "Your details have been prepared.",
    backLocations: "Back to Locations",
    mapTitle: "LOCATION MAP",
    mapCopy: "Explore the approximate location on the interactive map.",
    privacyTitle: "Privacy Policy & Terms of Use",
    privacyIntro: "This is a preliminary website policy draft. Review it against applicable laws and your actual business practices before publication."
  },

  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "ماذا نقدم",
    navLocations: "المواقع",
    navContact: "تواصل معنا",
    tagline: "نجد ما هو أبعد من الأماكن.",
    legalLink: "سياسة الخصوصية وشروط الاستخدام",
    heroEyebrow: "البحث · ذكاء المواقع · المعرفة المحلية",
    heroTitle: "اكتشف المكان خلف الحكاية",
    heroSub: "البحث. المواقع. المعرفة المحلية.",
    heroCopy: "نساعد صُنّاع الأفلام والصحفيين والعلامات التجارية والفرق الإبداعية على اكتشاف الأماكن والسياقات والتفاصيل المحلية التي تمنح المشاريع حياتها.",
    cta: "ابدأ مشروعك",
    orbitTitle: "لكل حكاية مكان.",
    orbitCopy: "نربط الأفكار الإبداعية بالأماكن الحقيقية والمعلومات الموثوقة والخبرات المحلية والتفاصيل التي تمنح الحكاية أصالتها.",
    orbitNote: "عالم من الأماكن · رؤية مترابطة",
    aboutKicker: "01 / من نحن",
    aboutTitle: "نربط الحكايات بالأماكن.",
    aboutP1: "POLAURA منصة متخصصة في البحث وذكاء المواقع، تدعم مشاريع الأفلام والأخبار والوثائقيات والإعلانات والإعلام.",
    aboutP2: "نربط الفرق الإبداعية بالأماكن الحقيقية والمعلومات الموثوقة والخبرات المحلية والسياق اللازم لاتخاذ قرارات مدروسة.",
    manifesto: "نجد ما هو أبعد من الأماكن.",
    servicesKicker: "02 / ماذا نقدم",
    servicesTitle: "بحث يدفع الحكاية إلى الأمام.",
    servicesIntro: "من الاستكشاف الأولي إلى المعلومات العملية عن المواقع، نساعد الفرق على اتخاذ قرارات مدروسة بشأن المكان والسياق والوصول والواقع المحلي.",
    locationsKicker: "03 / المواقع",
    locationsTitle: "اكتشف المنطقة",
    locationsIntro: "اكتشف الأفق العمراني والأحياء التاريخية والمعالم الثقافية والمشاهد الطبيعية المميزة.",
    discover: "اكتشف",
    riyadh: "الرياض",
    jeddah: "جدة",
    alula: "العلا",
    kuwait: "الكويت",
    jordan: "الأردن",
    riyadhDesc: "عاصمة متجددة تلتقي فيها العمارة المعاصرة بالإرث الثقافي.",
    jeddahDesc: "مدينة على البحر الأحمر تتميز بواجهتها البحرية وأحيائها التاريخية وهويتها الساحلية.",
    alulaDesc: "تكوينات صخرية مهيبة وتراث عريق وآفاق صحراوية واسعة.",
    kuwaitDesc: "عاصمة خليجية تجمع بين الأفق العمراني والأسواق التقليدية والثقافة الحضرية.",
    jordanDesc: "حجارة عريقة وصحارى وبلدات تاريخية وطبقات غنية من التراث.",
    contactKicker: "04 / التواصل",
    contactTitle: "ابدأ مشروعك",
    contactCopy: "أخبرنا عن مشروعك، ودعنا نستكشف الأماكن والمعلومات والحكايات التي تقف خلفه.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    projectType: "نوع المشروع",
    selectProject: "اختر نوع المشروع",
    film: "فيلم / وثائقي",
    news: "أخبار / صحافة",
    advertising: "إعلان / علامة تجارية",
    research: "بحث / أخرى",
    projectDetails: "أخبرنا عن مشروعك",
    send: "ابدأ مشروعك",
    formNote: "هذا نموذج تجريبي. يجب ربطه ببريد إلكتروني أو خدمة نماذج قبل النشر لاستقبال الطلبات.",
    formSuccess: "تم تجهيز بيانات طلبك.",
    backLocations: "العودة إلى المواقع",
    mapTitle: "خريطة الموقع",
    mapCopy: "استكشف الموقع التقريبي عبر الخريطة التفاعلية.",
    privacyTitle: "سياسة الخصوصية وشروط الاستخدام",
    privacyIntro: "هذه مسودة أولية لسياسة الموقع. يجب مراجعتها وفق القوانين المنطبقة وممارسات العمل الفعلية قبل النشر."
  }
};

const SERVICES = [
  {
    en: "Research & Location Intelligence",
    ar: "البحث وذكاء المواقع",
    enDesc: "Research locations, context, practical requirements, and relevant information to support informed project decisions.",
    arDesc: "البحث عن المواقع والسياق والمتطلبات العملية والمعلومات ذات الصلة لدعم القرارات المدروسة."
  },
  {
    en: "Location Scouting",
    ar: "استكشاف المواقع",
    enDesc: "Identify locations that fit a project's creative vision, visual requirements, and practical needs.",
    arDesc: "تحديد المواقع التي تتوافق مع الرؤية الإبداعية والمتطلبات البصرية والاحتياجات العملية للمشروع."
  },
  {
    en: "Access, Permits & Logistics",
    ar: "الوصول والتصاريح والخدمات اللوجستية",
    enDesc: "Support access coordination, permit enquiries, practical planning, and local logistics where applicable.",
    arDesc: "دعم تنسيق الوصول والاستفسار عن التصاريح والتخطيط العملي والخدمات اللوجستية المحلية عند الاقتضاء."
  },
  {
    en: "Cultural & Local Insight",
    ar: "المعرفة الثقافية والمحلية",
    enDesc: "Understand the cultural, social, historical, and local context behind each location.",
    arDesc: "فهم السياق الثقافي والاجتماعي والتاريخي والمحلي لكل موقع."
  },
  {
    en: "Local Sources & Experts",
    ar: "المصادر والخبراء المحليون",
    enDesc: "Connect projects with relevant local experts, organizations, communities, and sources.",
    arDesc: "ربط المشاريع بالخبراء المحليين والمؤسسات والمجتمعات والمصادر ذات الصلة."
  }
];

const LOCATIONS = [
  {
    id: "riyadh",
    image: IMAGES.riyadh,
    country: "Saudi Arabia",
    map: "24.7136,46.6753",
    bbox: "46.50,24.60,46.85,24.85",
    items: [
      ["KAFD", "Contemporary architecture and striking city geometry.", "مركز الملك عبدالله المالي والعمارة المعاصرة."],
      ["Riyadh Metro", "Transport infrastructure and modern city movement.", "شبكة النقل الحديثة وحركة المدينة."],
      ["Diriyah", "Historic Najdi architecture and cultural heritage.", "العمارة النجدية التاريخية والتراث الثقافي."],
      ["Edge of the World", "Dramatic escarpments and open desert horizons.", "حواف صخرية شاهقة وآفاق صحراوية مفتوحة."],
      ["Traditional Houses", "Residential architecture and neighbourhood character.", "العمارة السكنية التقليدية وطابع الأحياء."]
    ]
  },
  {
    id: "jeddah",
    image: IMAGES.jeddah,
    country: "Saudi Arabia",
    map: "21.4858,39.1925",
    bbox: "39.05,21.38,39.30,21.62",
    items: [
      ["King Fahd Fountain", "Jeddah's landmark fountain on the Red Sea.", "نافورة الملك فهد على ساحل البحر الأحمر."],
      ["Jeddah Corniche", "Waterfront paths, open sea views, and public spaces.", "الواجهة البحرية والإطلالات المفتوحة على البحر."],
      ["Al-Balad", "Historic district with distinctive traditional buildings.", "البلد التاريخية ومبانيها التقليدية المميزة."],
      ["Bayt Al-Matbouli", "Historic domestic architecture and local heritage.", "العمارة السكنية التاريخية والتراث المحلي."],
      ["North Obhur", "Coastal landscapes north of the city.", "المشاهد الساحلية شمال المدينة."]
    ]
  },
  {
    id: "alula",
    image: IMAGES.alula,
    country: "Saudi Arabia",
    map: "26.6085,37.9232",
    bbox: "37.78,26.50,38.08,26.73",
    items: [
      ["Elephant Rock", "A distinctive sandstone formation.", "تكوين صخري رملي مميز."],
      ["Dar Tantora", "Heritage setting in AlUla Old Town.", "موقع تراثي في البلدة القديمة بالعلا."],
      ["AlUla Oasis", "Palm groves and cultivated valley landscapes.", "بساتين النخيل والمشاهد الزراعية في الوادي."],
      ["Hegra", "Nabataean heritage and monumental rock-cut tombs.", "التراث النبطي والمقابر المنحوتة في الصخور."],
      ["Old Town", "Historic lanes and traditional settlement textures.", "الأزقة التاريخية وتفاصيل العمران التقليدي."],
      ["Maraya", "Contemporary reflective architecture in the desert.", "عمارة معاصرة عاكسة وسط الصحراء."]
    ]
  },
  {
    id: "kuwait",
    image: IMAGES.kuwait,
    country: "Kuwait",
    map: "29.3759,47.9774",
    bbox: "47.85,29.25,48.10,29.52",
    items: [
      ["Kuwait Towers", "The country's iconic waterfront landmark.", "أبراج الكويت ومعلمها الساحلي المعروف."],
      ["Souq Al-Mubarakiya", "Traditional market and everyday commercial life.", "سوق المباركية والحياة التجارية اليومية."],
      ["Failaka Island", "Island landscapes and cultural history.", "مشاهد الجزيرة وتاريخها الثقافي."],
      ["Traditional Houses & Diwaniyas", "Domestic architecture and social gathering spaces.", "البيوت التقليدية والديوانيات."],
      ["Salmiya Market", "A lively commercial district near the coast.", "منطقة تجارية حيوية قريبة من الساحل."]
    ]
  },
  {
    id: "jordan",
    image: IMAGES.jordan,
    country: "Jordan",
    map: "31.95,35.93",
    bbox: "35.80,31.85,36.08,32.08",
    items: [
      ["Petra", "Ancient Nabataean architecture carved into sandstone.", "العمارة النبطية القديمة المنحوتة في الحجر الرملي."],
      ["Roman Theatre", "A historic monument in central Amman.", "معلم تاريخي في وسط عمّان."],
      ["Old Salt", "Historic stone houses and traditional streets.", "البيوت الحجرية التاريخية والشوارع التقليدية."],
      ["Old Houses of Amman", "Residential architecture and neighbourhood textures.", "العمارة السكنية وتفاصيل الأحياء القديمة."],
      ["Desert Landscapes", "Open desert horizons and distinctive rock formations.", "آفاق صحراوية مفتوحة وتكوينات صخرية مميزة."]
    ]
  }
];

let language = "en";
const app = document.getElementById("app");

function t(key) {
  return TEXT[language][key] || TEXT.en[key] || key;
}

function image(url) {
  return String(url).replaceAll('"', "%22");
}

function locationName(location) {
  return t(location.id);
}

function headerSection(title, intro, kicker = "") {
  return `
    <div class="section-head reveal">
      ${kicker ? `<p class="section-kicker">${kicker}</p>` : ""}
      <h2>${title}</h2>
      ${intro ? `<p class="section-intro">${intro}</p>` : ""}
    </div>
  `;
}

function hero() {
  const orbitImages = [
    IMAGES.riyadh,
    IMAGES.jeddah,
    IMAGES.alula,
    IMAGES.kuwait,
    IMAGES.jordan
  ];

  return `
    <section class="hero" id="top">
      <div class="hero-scene" aria-hidden="true">
        <div class="aerial-layer layer-a"></div>
        <div class="aerial-layer layer-b"></div>
        <div class="scan-beam"></div>
        <i class="scan-dot d1"></i>
        <i class="scan-dot d2"></i>
        <i class="scan-dot d3"></i>
      </div>

      <div class="hero-content">
        <p class="eyebrow">${t("heroEyebrow")}</p>
        <h1>${t("heroTitle")}</h1>
        <p class="hero-subline">${t("heroSub")}</p>
        <p class="hero-copy">${t("heroCopy")}</p>
        <a class="cta" href="#/contact">${t("cta")}</a>
      </div>

      <div class="hero-orbit" aria-hidden="true">
        ${orbitImages.map((src, index) =>
          `<img src="${image(src)}" alt="" loading="${index === 0 ? "eager" : "lazy"}">`
        ).join("")}
      </div>

      <div class="hero-index">Location intelligence / 001</div>
    </section>
  `;
}

function orbitGallery() {
  const gallery = [
    IMAGES.riyadh,
    IMAGES.jeddah,
    IMAGES.alula,
    IMAGES.kuwait,
    IMAGES.jordan,
    IMAGES.earth,
    IMAGES.mountains,
    IMAGES.alula
  ];

  return `
    <section class="section orbit-section">
      <div class="orbit-stage">
        <div class="orbit-ring" aria-hidden="true"></div>

        <div class="orbit-track" aria-hidden="true">
          ${gallery.map((src, index) =>
            `<img class="orbit-photo" src="${image(src)}" alt="" loading="lazy">`
          ).join("")}
        </div>

        <div class="orbit-center">
          <h2>${t("orbitTitle")}</h2>
          <p>${t("orbitCopy")}</p>
        </div>

        <div class="orbit-note">${t("orbitNote")}</div>
      </div>
    </section>
  `;
}

function aboutSection() {
  return `
    <section class="section" id="about-preview">
      <div class="about-layout reveal">
        <div class="about-aside">
          <p class="aside-label">${t("aboutKicker")}</p>
          <p>${t("manifesto")}</p>
        </div>

        <div class="about-copy">
          <h2>${t("aboutTitle")}</h2>
          <p>${t("aboutP1")}</p>
          <p>${t("aboutP2")}</p>
          <a class="cta" href="#/about">${t("navAbout")}</a>
        </div>
      </div>
    </section>
  `;
}

function servicesSection() {
  return `
    <section class="section" id="services-preview">
      ${headerSection(t("servicesTitle"), t("servicesIntro"), t("servicesKicker"))}

      <div class="service-list">
        ${SERVICES.map((service, index) => `
          <article class="service-row reveal">
            <span class="service-number">0${index + 1}</span>
            <h3>${language === "ar" ? service.ar : service.en}</h3>
            <p>${language === "ar" ? service.arDesc : service.enDesc}</p>
          </article>
        `).join("")}
      </div>

      <p><a class="cta" href="#/what-we-do">${t("navServices")}</a></p>
    </section>
  `;
}

function locationCard(location) {
  return `
    <a class="location-tile reveal"
       href="#/locations/${location.id}"
       style="--tile-image:url('${image(location.image)}')">

      <span class="mapline">${location.map}</span>

      <div class="tile-content">
        <div>
          <p class="tile-region">${location.country}</p>
          <h3>${locationName(location)}</h3>
          <p>${t(location.id + "Desc")}</p>
        </div>
        <span class="tile-arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  `;
}

function locationsSection() {
  return `
    <section class="section" id="locations-preview">
      ${headerSection(t("locationsTitle"), t("locationsIntro"), t("locationsKicker"))}
      <div class="location-list">
        ${LOCATIONS.map(locationCard).join("")}
      </div>
    </section>
  `;
}

function contactSection() {
  return `
    <section class="section contact-section" id="contact">
      <div class="contact-layout">
        <div class="reveal">
          <p class="section-kicker">${t("contactKicker")}</p>
          <h2>${t("contactTitle")}</h2>
          <p class="contact-copy">${t("contactCopy")}</p>
        </div>

        <form class="contact-form reveal" id="contact-form">
          <div class="field">
            <label for="contact-name">${t("name")}</label>
            <input id="contact-name" name="name" autocomplete="name" required>
          </div>

          <div class="field">
            <label for="contact-email">${t("email")}</label>
            <input id="contact-email" name="email" type="email" autocomplete="email" required>
          </div>

          <div class="field">
            <label for="contact-type">${t("projectType")}</label>
            <select id="contact-type" name="type" required>
              <option value="">${t("selectProject")}</option>
              <option>${t("film")}</option>
              <option>${t("news")}</option>
              <option>${t("advertising")}</option>
              <option>${t("research")}</option>
            </select>
          </div>

          <div class="field">
            <label for="contact-details">${t("projectDetails")}</label>
            <textarea id="contact-details" name="details" required></textarea>
          </div>

          <button class="cta" type="submit">${t("send")}</button>
          <p class="form-note">${t("formNote")}</p>
          <div class="form-success" id="form-success" role="status"></div>
        </form>
      </div>
    </section>
  `;
}

function mapSection(location) {
  const coordinates = location.map.split(",");
  const latitude = coordinates[0];
  const longitude = coordinates[1];

  return `
    <section class="section map-section">
      ${headerSection(t("mapTitle"), t("mapCopy"), t("locationsKicker"))}

      <div class="map-frame">
        <iframe
          title="${locationName(location)} map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=${location.bbox}&layer=mapnik&marker=${location.map}">
        </iframe>

        <a href="https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=11/${latitude}/${longitude}"
           target="_blank" rel="noopener noreferrer">
          ${language === "ar" ? "فتح الخريطة" : "Open full map"} ↗
        </a>
      </div>
    </section>
  `;
}

function locationDetail(location) {
  const intro = t(location.id + "Desc");

  return `
    <section class="page-hero" style="--page-image:url('${image(location.image)}')">
      <div class="breadcrumbs">
        <a href="#/locations">${t("backLocations")}</a> / ${location.country}
      </div>
      <h1>${locationName(location)}</h1>
      <p>${intro}</p>
      <span class="mapline">${location.map}</span>
    </section>

    ${mapSection(location)}

    <section class="section">
      <a class="back-link" href="#/locations">${t("backLocations")}</a>

      <div class="detail-grid">
        ${location.items.map(item => `
          <article class="detail-item reveal" style="--item-image:url('${image(location.image)}')">
            <div class="detail-text">
              <h3>${language === "ar" ? item[0] : item[0]}</h3>
              <p>${language === "ar" ? item[2] : item[1]}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    ${contactSection()}
  `;
}

function legalPage() {
  return `
    <section class="legal">
      <a class="back-link" href="#/">${t("navHome")}</a>
      <h1>${t("privacyTitle")}</h1>
      <p class="last-updated">
        ${language === "ar" ? "مسودة أولية للمراجعة قبل النشر" : "Draft for review before publication"}
      </p>

      <div class="legal-switch">
        <button type="button" data-legal="en" class="${language === "en" ? "active" : ""}">EN</button>
        <button type="button" data-legal="ar" class="${language === "ar" ? "active" : ""}">AR</button>
      </div>

      <div id="legal-body" dir="${language === "ar" ? "rtl" : "ltr"}">
        <p>${t("privacyIntro")}</p>

        <h2>${language === "ar" ? "أولاً: سياسة الخصوصية" : "I. Privacy Policy"}</h2>
        <p>${language === "ar"
          ? "قد نجمع الاسم والبريد الإلكتروني ومعلومات المشروع التي يرسلها المستخدم طوعًا عند التواصل معنا."
          : "We may collect names, email addresses, and project information voluntarily submitted through the contact form."}</p>

        <h3>${language === "ar" ? "استخدام المعلومات" : "How information is used"}</h3>
        <p>${language === "ar"
          ? "تُستخدم المعلومات للرد على الاستفسارات ودراسة متطلبات المشاريع والتواصل بشأن الخدمات المطلوبة."
          : "Information may be used to respond to enquiries, assess project requirements, and communicate about requested services."}</p>

        <h3>${language === "ar" ? "السرية ومشاركة البيانات" : "Confidentiality and sharing"}</h3>
        <p>${language === "ar"
          ? "لا ينبغي إرسال معلومات شديدة الحساسية عبر نموذج الموقع. يجب قصر مشاركة بيانات العملاء والمواقع الحساسة على الأشخاص المخولين عند الحاجة."
          : "Do not submit highly sensitive information through the website form. Client and sensitive location information should only be shared with authorized people when necessary."}</p>

        <h3>${language === "ar" ? "الاحتفاظ بالبيانات وأمنها" : "Data retention and security"}</h3>
        <p>${language === "ar"
          ? "تُتخذ تدابير معقولة لحماية المعلومات، لكن لا يمكن ضمان أمان أي نظام إلكتروني بشكل مطلق."
          : "Reasonable measures should be used to protect information, although no electronic system can be guaranteed completely secure."}</p>

        <hr>

        <h2>${language === "ar" ? "ثانيًا: شروط الاستخدام" : "II. Terms of Use"}</h2>
        <p>${language === "ar"
          ? "المعلومات المعروضة عن المواقع لأغراض البحث والتخطيط، ولا تعني أن الدخول أو التصوير مسموح دون التصاريح والموافقات المطلوبة."
          : "Location information is provided for research and planning. It does not mean that entry or filming is permitted without required approvals."}</p>

        <p>${language === "ar"
          ? "تخضع الخدمات الفعلية لنطاق العمل والاتفاق مع العميل، وقد تتغير ظروف المواقع وإمكانية الوصول إليها."
          : "Actual services are subject to the agreed scope of work. Site conditions and access permissions may change."}</p>

        <p>${language === "ar"
          ? "يجب مراجعة هذه المسودة قانونيًا وتعديلها لتطابق الخدمات الفعلية والجهة المسؤولة عن الموقع قبل نشرها."
          : "This draft must be legally reviewed and adapted to the actual services and responsible business before publication."}</p>
      </div>
    </section>
  `;
}

function homePage() {
  return `
    ${hero()}
    ${orbitGallery()}
    ${aboutSection()}
    ${servicesSection()}
    ${locationsSection()}
    ${contactSection()}
  `;
}

function aboutPage() {
  return `
    <section class="page-hero" style="--page-image:url('${image(IMAGES.riyadh)}')">
      <p class="breadcrumbs">${t("aboutKicker")}</p>
      <h1>${t("aboutTitle")}</h1>
      <p>${t("aboutP1")}</p>
    </section>
    ${aboutSection()}
    ${contactSection()}
  `;
}

function servicesPage() {
  return `
    <section class="page-hero" style="--page-image:url('${image(IMAGES.alula)}')">
      <p class="breadcrumbs">${t("servicesKicker")}</p>
      <h1>${t("servicesTitle")}</h1>
      <p>${t("servicesIntro")}</p>
    </section>
    ${servicesSection()}
    ${contactSection()}
  `;
}

function locationsPage() {
  return `
    <section class="page-hero" style="--page-image:url('${image(IMAGES.jordan)}')">
      <p class="breadcrumbs">${t("locationsKicker")}</p>
      <h1>${t("locationsTitle")}</h1>
      <p>${t("locationsIntro")}</p>
    </section>
    ${locationsSection()}
    ${contactSection()}
  `;
}

function bindContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const status = document.getElementById("form-success");
    status.style.display = "block";

    status.textContent = language === "ar"
      ? "تم التحقق من النموذج، لكن استقبال الطلبات غير مفعّل. اربطي الموقع بخدمة نماذج أو بريد إلكتروني قبل النشر."
      : "The form has been validated, but submissions are not enabled. Connect a form service or email before publishing.";
  });
}

function bindLegalButtons() {
  document.querySelectorAll("[data-legal]").forEach(button => {
    button.addEventListener("click", () => {
      language = button.dataset.legal;
      render();
      location.hash = "#/privacy-terms";
    });
  });
}

function revealElements() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(element => observer.observe(element));
}

function render() {
  const route = (location.hash.replace(/^#/, "") || "/").split("?")[0];

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  const languageButton = document.getElementById("lang-switch");
  if (languageButton) {
    languageButton.innerHTML = language === "en"
      ? 'AR <span>/</span> EN'
      : 'EN <span>/</span> AR';
  }

  if (route === "/" || route === "/home") {
    app.innerHTML = homePage();
  } else if (route === "/about") {
    app.innerHTML = aboutPage();
  } else if (route === "/what-we-do" || route === "/services") {
    app.innerHTML = servicesPage();
  } else if (route === "/locations" || route === "/cities") {
    app.innerHTML = locationsPage();
  } else if (route === "/contact") {
    app.innerHTML = contactSection();
  } else if (route === "/privacy-terms") {
    app.innerHTML = legalPage();
  } else if (route.startsWith("/locations/")) {
    const id = route.split("/")[2];
    const selectedLocation = LOCATIONS.find(item => item.id === id);
    app.innerHTML = selectedLocation
      ? locationDetail(selectedLocation)
      : locationsPage();
  } else {
    app.innerHTML = homePage();
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".main-nav a").forEach(link => {
    const routeForLink = link.getAttribute("href").replace(/^#/, "");
    link.classList.toggle("active", route === routeForLink);
  });

  const nav = document.getElementById("main-nav");
  const menuButton = document.getElementById("menu-toggle");

  if (nav) nav.classList.remove("open");
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }

  bindContactForm();
  bindLegalButtons();
  revealElements();

  window.scrollTo(0, 0);
}

document.getElementById("lang-switch").addEventListener("click", () => {
  language = language === "en" ? "ar" : "en";
  render();
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("main-nav");
  const button = document.getElementById("menu-toggle");
  const isOpen = !nav.classList.contains("open");

  nav.classList.toggle("open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
  button.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

window.addEventListener("scroll", () => {
  document.getElementById("site-header").classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

window.addEventListener("hashchange", render);

render();
