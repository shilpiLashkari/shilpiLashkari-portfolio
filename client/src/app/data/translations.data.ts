export type Language = 'en' | 'hi';

export const TRANSLATIONS: Record<Language, any> = {
    en: {
        nav: {
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Shilpi Lashkari",
            role: "Full-Stack Web Developer",
            description: "Building scalable, high-performance web applications with 4+ years of expertise in the tech industry.",
            sayHi: "Say Hi!"
        },
        about: {
            title: "About Me",
            p1: "I specialize in architecting robust backends with <span class=\"text-highlight\">Node.js</span> and crafting pixel-perfect frontends using <span class=\"text-highlight\">Angular & React</span>. With over 4 years of experience, I bridge the gap between complex logic and elegant user interfaces.",
            p2: "I thrive on solving complex challenges, from database optimization to integrating <span class=\"text-highlight\">AI models</span>."
        },
        experience: {
            title: "Professional Experience",
            jobs: [
                {
                    role: "Senior Software Engineer",
                    company: "Infosys",
                    period: "Mar 2022 - Present",
                    desc: "Architecting India’s e-governance modernization (ICEGATE) and enterprise cloud solutions using Angular 17, Spring Boot, and Node.js. Successfully migrated legacy ASP.NET systems to efficient microservices, boosting data efficiency by 30% and deployment speeds by 45%. Championed DevOps best practices with Azure and Jenkins, ensuring secure, high-performance delivery across agile cycles."
                },
                {
                    role: "AI Engineer - Angular Developer",
                    company: "Althea.ai",
                    period: "Mar 2021 - Feb 2022",
                    desc: "Evolved from Frontend to Full-Stack development, delivering the company’s official website and AI-powered internal dashboards. Engineered dynamic forms and integrated Python/Django APIs, automating workflows to reduce manual processes by 40%. Leveraged AWS for scalable cloud deployments while optimizing SQL databases for reliability."
                },
                {
                    role: "Frontend Developer Internship",
                    company: "Flit Webs",
                    period: "Dec 2019 - Apr 2020",
                    desc: "Accelerated from core web technologies to building complex, interactive applications using Angular. Collaborated in an agile startup environment to deliver responsive UI components and integrate RESTful APIs, establishing a strong foundation in modern web development and software lifecycles."
                }
            ]
        },
        projects: {
            title: "Selected Works",
            viewCaseStudy: "View Project",
            challenge: "Challenge",
            solution: "Solution",
            outcome: "Outcome",
            conclusions: "Conclusions",
            future: "Key Tech",
            list: [
                {
                    name: "Human-in-the-Loop Response Orchestrator",
                    summary: "An enterprise-grade SRE platform designed to transform infrastructure chaos into secure, intelligent action. It orchestrates the entire incident lifecycle by clustering thousands of noisy alerts from multi-cloud environments into manageable, actionable situations. By keeping a human at the center of every critical remediation step, it ensures that automated scripts only execute with explicit approval, bridging the gap between raw telemetry and safe, rapid infrastructure recovery.",
                    problem: "Alert fatigue, noisy multi-cloud notifications, and risky unsupervised production automation.",
                    solution: "Smart heuristic clustering and mandatory human-approval gates for all remediation scripts.",
                    outcome: "Zero-latency response for critical production outages with 100% human oversight.",
                    future: "Angular • React • Node.js • Python"
                },
                {
                    name: "Nexura AI-Powered CRM Platform",
                    summary: "A sophisticated, enterprise-ready Customer Relationship Management platform featuring a high-performance visual deal pipeline and global search. It integrates a context-aware AI assistant powered by Google Gemini that analyzes live business metrics to provide real-time growth intelligence and sales forecasting. Built on a robust monorepo architecture, it offers a unified dashboard for managing complex accounts with sub-second data retrieval. ",
                    problem: "Fragmented sales data across teams and a lack of real-time, AI-driven growth forecasting.",
                    solution: "Unified dashboard with a Gemini-powered context-aware assistant for business intelligence.",
                    outcome: "Streamlined sales tracking and forecasting with automated, AI-driven business insights.",
                    future: "React 18 • Node.js • Prisma • Gemini"
                },
                {
                    name: "Production Outage Time-Machine",
                    summary: "A revolutionary observability 'Time-Machine' that allows SREs to rewind system states to the exact second of a production failure. By overlaying deployment events, configuration changes, and git commits directly onto live D3.js metric waves, it eliminates the guesswork during high-pressure incidents. This micro-frontend ecosystem synchronizes multiple 'war room' views to provide a unified diagnostic workspace for rapid root-cause analysis.",
                    problem: "Difficulty correlating rapid deployment cycles with latent performance spikes during outages.",
                    solution: "Micro-frontend event-recording system that overlays system changes onto live D3.js metrics.",
                    outcome: "Rapid root-cause analysis enabling 'debugging like a scientist' with historical state scrubbing.",
                    future: "Angular 17 • D3.js • Socket.io • RxJS"
                },
                {
                    name: "Flux Experimental Generative Browser",
                    summary: "An experimental 'Generative Web' simulation that explores a future where websites are hallucinated on the fly based on user search intent rather than being retrieved from static servers. Using a custom heuristic 'Flux Engine' and GPT-4, it generates unique, production-ready HTML and Tailwind CSS in real-time. The prototype features a complete browser shell with history tracking and state persistence, blurring the line between web browsing and imagination.",
                    problem: "The static nature of the traditional web content limits creative exploration and spontaneous generation.",
                    solution: "Heuristic flux engine and LLM integration to build fully-functional sites on the fly per user prompt.",
                    outcome: "Infinite navigation with zero 404 errors in a dynamically hallucinated generative ecosystem.",
                    future: "React • Framer Motion • OpenAI API"
                },
                {
                    name: "Smart String Analyser",
                    summary: "A high-performance, logic-driven text analysis engine built to demonstrate core JavaScript engineering principles and efficient real-time processing. It handles complex tasks like character frequency mapping, palindrome detection, and pattern recognition using purely functional logic. The project emphasizes clean code, debounced event handling, and optimized DOM manipulation without the overhead of heavy frameworks, showcasing a logic-first approach to web engineering.",
                    problem: "Real-time analysis tools often suffer from input lag and fail to handle complex edge-case symbols.",
                    solution: "Vanilla JS engine utilizing debouncing, frequency mapping, and pure functional logic modules.",
                    outcome: "Scalable, logic-first demonstration of core web engineering and high-performance text processing.",
                    future: "Vanilla JS • Regex • Bootstrap"
                }
            ]
        },
        contact: {
            title: "Get In Touch",
            desc: "Open to Full-Stack Developer, Software Engineer, & Frontend / Backend Engineer roles. My inbox is always open!",
            btn: "Say Hello"
        },
        hobbies: {
            title: "More Than Just Code",
            cards: {
                books: { title: "Books", subtitle: "Continuous Learner" },
                music: { title: "Music", subtitle: "Creative Flow" },
                games: { title: "Gaming", subtitle: "Strategic Thinking" },
                tech: { title: "Forever Curious", subtitle: "Always Exploring Tech" }
            }
        },
        chat: {
            title: "Shilpi's Assistant",
            status: "Online",
            placeholder: "Ask about my experience...",
            thinking: "Thinking...",
            greeting: "Hi! I'm Shilpi's personal assistant. I'm here to share details about her developer journey, tech stack, and projects. What would you like to know?",
            responses: {
                stack: "I specialize in the MEAN stack (MongoDB, Express, Angular, Node.js). I'm also proficient with TypeScript, Tailwind CSS, and integrating AI models using OpenAI.",
                experience: "I have 4 years of experience building scalable web applications. Currently, I'm a Senior Engineer focusing on backend migration and AI integration.",
                project: "One of my key projects is an E-Commerce Logistics Engine where I optimized MongoDB queries to handle Black Friday traffic with 99.9% uptime.",
                contact: "You can reach me at shilpilashkari@gmail.com or find me on LinkedIn!",
                ai: "I use AI to accelerate development—from generating boilerplate code to debugging race conditions. Better tools mean better software.",
                fallback: "That's a great question! I'm best equipped to answer about my technical skills, experience, and projects. Feel free to ask about those!"
            }
        },
        terminal: {
            title: "My Opinion on AI",
            content: "\"As a developer, I see AI not as a replacement, but as a <span class=\"text-highlight\">powerful amplifier</span> of human creativity. It handles the repetitive, allowing us to focus on architecture, empathy, and innovation.\"\n\"The future isn't about choosing between human or machine—it's about <span class=\"text-highlight\">collaborative intelligence</span>. Human ingenuity guiding machine precision to build things we couldn't dream of before.\""
        }
    },
    hi: {
        nav: {
            about: "मेरे बारे में",
            experience: "अनुभव",
            projects: "प्रोजेक्ट्स",
            contact: "संपर्क"
        },
        hero: {
            greeting: "नमस्ते, मैं हूँ",
            name: "शिल्पी लश्करी",
            role: "फुल-स्टैक वेब डेवलपर",
            description: "4+ वर्षों के अनुभव के साथ स्केलेबल और उच्च-प्रदर्शन वेब ऐप्स बनाने वाले फुल-स्टैक वेब डेवलपर।",
            sayHi: "नमस्ते कहें!"
        },
        about: {
            title: "मेरे बारे में",
            p1: "मैं एक <span class=\"text-highlight\">फुल-स्टैक वेब डेवलपर</span> हूँ और मुझे स्केलेबल वेब एप्लिकेशन बनाने का 4+ वर्षों का अनुभव है। मेरी विशेषज्ञता <span class=\"text-highlight\">Node.js</span> के साथ मजबूत बैकएंड और <span class=\"text-highlight\">Angular & React</span> का उपयोग करके आकर्षक फ्रंटएंड बनाने में है।",
            p2: "मुझे जटिल चुनौतियों को हल करना पसंद है, चाहे वह डेटाबेस ऑप्टिमाइज़ेशन हो या <span class=\"text-highlight\">AI मॉडल</span> का एकीकरण।"
        },
        experience: {
            title: "व्यावसायिक अनुभव",
            jobs: [
                {
                    role: "सीनियर सॉफ्टवेयर इंजीनियर",
                    company: "इंफोसिस (Infosys)",
                    period: "मार्च 2022 - वर्तमान",
                    desc: "ICEGATE और Cloud Software Group जैसे बड़े स्तर के प्रोजेक्ट्स के लिए विकास का नेतृत्व कर रही हूँ। पुराने सिस्टम को आधुनिक माइक्रोसर्विसेज में बदला, जिससे डेटा दक्षता में 30% सुधार हुआ।"
                },
                {
                    role: "AI इंजीनियर - Angular डेवलपर",
                    company: "Althea.ai",
                    period: "मार्च 2021 - फरवरी 2022",
                    desc: "AI-संचालित डैशबोर्ड और कंपनी की आधिकारिक वेबसाइट का विकास किया। गतिशील वेब फॉर्म बनाकर और Python/Django API को एकीकृत करके मैन्युअल काम को 40% कम किया।"
                },
                {
                    role: "फ्रंटएंड डेवलपर इंटर्नशिप",
                    company: "Flit Webs",
                    period: "दिसंबर 2019 - अप्रैल 2020",
                    desc: "रेस्पॉन्सिव UI कंपोनेंट्स और इंटरैक्टिव वेब एप्लिकेशन बनाकर अपनी डेवलपर यात्रा शुरू की। Angular और एगिल डेवलपमेंट में बुनियादी अनुभव प्राप्त किया।"
                }
            ]
        },
        projects: {
            title: "चयनित कार्य",
            viewCaseStudy: "प्रोजेक्ट देखें",
            challenge: "चुनौती",
            solution: "समाधान",
            outcome: "परिणाम",
            conclusions: "निष्कर्ष (Conclusions)",
            future: "मुख्य तकनीक",
            list: [
                {
                    name: "ह्यूमन-इन-द-लूप रिस्पॉन्स ऑर्केस्ट्रेटर",
                    summary: "एक एंटरप्राइज-ग्रेड SRE प्लेटफॉर्म जिसे इंफ्रास्ट्रक्चर की अराजकता को सुरक्षित, बुद्धिमान कार्रवाई में बदलने के लिए डिज़ाइन किया गया है। यह मल्टी-क्लाउड वातावरण से हजारों शोर भरे अलर्ट को प्रबंधनीय, कार्रवाई योग्य स्थितियों में क्लस्टर करके पूरे घटना जीवनचक्र को व्यवस्थित करता है। हर महत्वपूर्ण सुधार चरण के केंद्र में एक मानवीय हस्तक्षेप रखकर, यह सुनिश्चित करता है कि स्वचालित स्क्रिप्ट केवल स्पष्ट अनुमोदन के साथ निष्पादित हों, जिससे टेलीमेट्री और सुरक्षित इंफ्रास्ट्रक्चर रिकवरी के बीच की खाई को पाटा जा सके।",
                    problem: "अलर्ट थकान, शोर भरे मल्टी-क्लाउड नोटिफिकेशन और जोखिम भरा असुरक्षित ऑटोमेशन।",
                    solution: "स्मार्ट ह्यूरिस्टिक क्लस्टरिंग और सभी सुधारात्मक स्क्रिप्ट के लिए अनिवार्य मानवीय स्वीकृति द्वार।",
                    outcome: "100% मानवीय निरीक्षण के साथ क्रिटिकल आउटेज के लिए जीरो-लेटेंसी रिस्पॉन्स।",
                    future: "Angular • React • Node.js"
                },
                {
                    name: "नेक्सुरा (Nexura) AI-पावर्ड CRM प्लेटफॉर्म",
                    summary: "एक परिष्कृत, एंटरप्राइज-रेडी CRM प्लेटफॉर्म जिसमें हाई-परफॉरमेंस विजुअल डील पाइपलाइन और ग्लोबल सर्च है। इसमें गूगल जेमिनी द्वारा संचालित एक संदर्भ-जागरूक AI सहायक है जो रीयल-टाइम विकास खुफिया और बिक्री पूर्वानुमान प्रदान करने के लिए लाइव व्यावसायिक मेट्रिक्स का विश्लेषण करता है। एक मजबूत मोनोरेपो आर्किटेक्चर पर निर्मित, यह सब-सेकंड डेटा पुनर्प्राप्ति के साथ जटिल खातों के प्रबंधन के लिए एक एकीकृत डैशबोर्ड प्रदान करता है।",
                    problem: "टीमों के बीच बिखरा हुआ सेल्स डेटा और रीयल-टाइम, AI-संचालित विकास पूर्वानुमान का अभाव।",
                    solution: "व्यावसायिक खुफिया के लिए जेमिनी-पावर्ड स्मार्ट सहायक के साथ एकीकृत डैशबोर्ड।",
                    outcome: "स्वचालित, AI-संचालित व्यावसायिक अंतर्दृष्टि के साथ बेहतर सेल्स ट्रैकिंग और पूर्वानुमान।",
                    future: "React 18 • Node.js • Gemini"
                },
                {
                    name: "प्रोडक्शन आउटेज टाइम-मशीन",
                    summary: "एक क्रांतिकारी ऑब्जर्वेबिलिटी 'टाइम-मशीन' जो SRE को प्रोडक्शन विफलता के सटीक सेकंड तक सिस्टम स्टेट्स को रिवाइंड करने की अनुमति देती है। लाइव D3.js मेट्रिक्स पर परिनियोजन घटनाओं, कॉन्फ़िगरेशन परिवर्तनों और गिट कमिट्स को सीधे ओवरले करके, यह अनुमान को समाप्त करता है। यह माइक्रो-Frontend इकोसिस्टम तेजी से मूल कारण विश्लेषण के लिए एक एकीकृत नैदानिक कार्यक्षेत्र प्रदान करने के लिए कई 'वॉर रूम' दृश्यों को सिंक्रनाइज़ करता है।",
                    problem: "तेजी से तैनाती चक्रों और आउटेज के दौरान विलंबता स्पाइक्स के बीच संबंध बनाना कठिन।",
                    solution: "माइक्रो-फ्रंटएंड इवेंट-रिकॉर्डिंग सिस्टम जो लाइव D3.js मेट्रिक्स पर परिवर्तनों को दिखाता है।",
                    outcome: "विजुअल हिस्टोरिकल स्क्रबिंग के साथ तेज़ मूल कारण विश्लेषण 'Debugging like a scientist' सक्षम करता है।",
                    future: "Angular 17 • D3.js • Socket.io"
                },
                {
                    name: "फ्लक्स (Flux) प्रयोगात्मक जनरेटिव ब्राउज़र",
                    summary: "एक प्रयोगात्मक 'जनरेटिव वेब' सिमुलेशन जो एक ऐसे भविष्य की खोज करता है जहाँ वेबसाइटें स्थिर सर्वर से प्राप्त होने के बजाय उपयोगकर्ता की खोज के आधार पर ऑन-द-फ्लाई निर्मित होती हैं। एक कस्टम ह्यूरिस्टिक 'फ्लक्स इंजन' और GPT-4 का उपयोग करके, यह वास्तविक समय में अद्वितीय, प्रोडक्शन-रेडी HTML और Tailwind CSS बनाता है। इसमें इतिहास ट्रैकिंग और स्थिति दृढ़ता के साथ एक पूर्ण ब्राउज़र शेल है, जो वेब ब्राउज़िंग और कल्पना के बीच की रेखा को धुंधला कर देता है।",
                    problem: "पारंपरिक वेब सामग्री की स्थिर प्रकृति रचनात्मक अन्वेषण और स्वतः पीढ़ी को सीमित करती है।",
                    solution: "उपयोगकर्ता प्रॉम्प्ट के अनुसार चलते-फिरते साइट बनाने के लिए LLM एकीकरण और फ्लक्स इंजन।",
                    outcome: "एक जनरेटिव इकोसिस्टम में बिना 404 के अनंत नेविगेशन और ऑन-डिमांड कंटेंट जेनरेशन।",
                    future: "React • Framer Motion • OpenAI"
                },
                {
                    name: "स्मार्ट स्ट्रिंग एनालाइज़र",
                    summary: "एक हाई-परफॉरमेंस, लॉजिक-संचालित टेक्स्ट विश्लेषण इंजन जिसे कोर जावास्क्रिप्ट इंजीनियरिंग सिद्धांतों और कुशल रीयल-टाइम प्रसंस्करण प्रदर्शित करने के लिए बनाया गया है। यह शुद्ध कार्यात्मक तर्क का उपयोग करके चरित्र आवृत्ति मानचित्रण, विलोम शब्द (palindrome) पहचान और पैटर्न पहचान जैसे कार्यों को संभालता है। यह इंजन भारी फ्रेमवर्क के बिना, स्वच्छ कोड, डिबाउंस इवेंट हैंडलिंग और अनुकूलित DOM हेरफेर पर जोर देता है, जो वेब इंजीनियरिंग के लिए एक लॉजिक-फर्स्ट दृष्टिकोण दिखाता है।",
                    problem: "रीयल-टाइम विश्लेषण उपकरण अक्सर इनपुट लैग से ग्रस्त होते हैं और विशेष प्रतीकों को संभालने में विफल रहते।",
                    solution: "डिबाउंसिंग, फ़्रीक्वेंसी मैपिंग और शुद्ध लॉजिक फ़ंक्शंस का उपयोग करने वाला वेनिला JS इंजन।",
                    outcome: "कोर वेब इंजीनियरिंग और हाई-परफॉरमेंस टेक्स्ट प्रोसेसिंग का स्केलेबल, लॉजिक-फर्स्ट प्रदर्शन।",
                    future: "Vanilla JS • Regex • Bootstrap"
                }
            ]
        },
        contact: {
            title: "संपर्क में रहें",
            desc: "फुल-स्टैक डेवलपर, सॉफ्टवेयर इंजीनियर और फ्रंटएंड / बैकएंड इंजीनियर भूमिकाओं के लिए उपलब्ध। मेरा इनबॉक्स हमेशा खुला है!",
            btn: "नमस्ते कहें"
        },
        hobbies: {
            title: "कोडिंग से परे",
            cards: {
                books: { title: "किताबें", subtitle: "सतत शिक्षार्थी" },
                music: { title: "संगीत", subtitle: "रचनात्मक प्रवाह" },
                games: { title: "गेमिंग", subtitle: "रणनीतिक सोच" },
                tech: { title: "हमेशा जिज्ञासु", subtitle: "तकनीक की खोज" }
            }
        },
        chat: {
            title: "शिल्पी की सहायक",
            status: "ऑनलाइन",
            placeholder: "मेरे अनुभव के बारे में पूछें...",
            thinking: "सोच रही हूँ...",
            greeting: "नमस्ते! मैं शिल्पी की व्यक्तिगत सहायक हूँ। मैं यहाँ उनके डेवलपर सफर, तकनीक और प्रोजेक्ट्स के बारे में जानकारी देने के लिए हूँ। आप क्या जानना चाहेंगे?",
            responses: {
                stack: "मैं MEAN स्टैक (MongoDB, Express, Angular, Node.js) में विशेषज्ञ हूँ। मुझे TypeScript, Tailwind CSS और OpenAI का उपयोग करके AI मॉडल को एकीकृत करने में भी महारत हासिल है।",
                experience: "मेरे पास स्केलेबल वेब एप्लिकेशन बनाने का 4 साल का अनुभव है। वर्तमान में, मैं एक सीनियर इंजीनियर हूँ जो बैकएंड माइग्रेशन और AI इंटीग्रेशन पर ध्यान केंद्रित कर रही हूँ।",
                project: "मेरा एक प्रमुख प्रोजेक्ट ई-कॉमर्स लॉजिस्टिक्स इंजन है जहाँ मैंने ब्लैक फ्राइडे ट्रैफ़िक को 99.9% अपटाइम के साथ संभालने के लिए MongoDB क्वेरीज़ को अनुकूलित किया।",
                contact: "आप मुझसे shilpilashkari@gmail.com पर संपर्क कर सकते हैं या लिंक्डइन पर मुझे पा सकते हैं!",
                ai: "मैं विकास को तेज करने के लिए AI का उपयोग करती हूँ—बॉयलरप्लेट कोड बनाने से लेकर रेस कंडीशन को डिबग करने तक। बेहतर उपकरण मतलब बेहतर सॉफ्टवेयर।",
                fallback: "यह एक अच्छा सवाल है! मैं अपनी तकनीकी कौशल, अनुभव और प्रोजेक्ट्स के बारे में जवाब देने के लिए सबसे उपयुक्त हूँ। बेझिझक उनके बारे में पूछें!"
            }
        },
        terminal: {
            title: "AI पर मेरी राय",
            content: "\"एक डेवलपर के रूप में, मैं AI को एक प्रतिस्थापन के रूप में नहीं, बल्कि मानव रचनात्मकता के एक <span class=\"text-highlight\">शक्तिशाली एम्पलीफायर</span> के रूप में देखता हूँ। यह दोहराव वाले कार्यों को संभालता है, जिससे हम वास्तुकला, सहानुभूति और नवाचार पर ध्यान केंद्रित कर सकते हैं।\"\n\"भविष्य मानव या मशीन के बीच चयन करने के बारे में नहीं है—यह <span class=\"text-highlight\">सहयोगात्मक बुद्धिमत्ता</span> के बारे में है। मानव सरलता मशीन की सटीकता का मार्गदर्शन करती है ताकि हम उन चीजों का निर्माण कर सकें जिनका हमने पहले सपना भी नहीं देखा था।\""
        }
    }
};
