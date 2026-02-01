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
            future: "Key Tech",
            list: [
                {
                    name: "ICEGATE E-Governance Portal",
                    summary: "Scalable trade operations portal for Indian Customs.",
                    problem: "Modernizing legacy trade systems for high-performance and security.",
                    solution: "Designed responsive Angular 17 components integrated with Spring Boot APIs. Implemented secure data handling.",
                    outcome: "Improved data efficiency by 30% and enhanced accessibility.",
                    future: "Angular 17 • Spring Boot"
                },
                {
                    name: "Cloud Software Group Modernization",
                    summary: "Enterprise-grade cloud application transformation.",
                    problem: "Legacy systems suffered from performance bottlenecks and lack of cloud scalability.",
                    solution: "Engineered microservices and optimized MySQL DBs. Automated CI/CD pipelines.",
                    outcome: "Deployment speed improved by 45%.",
                    future: "Angular • Node.js • AWS"
                },
                {
                    name: "Althea.ai Intelligence Platform",
                    summary: "AI-powered internal dashboard and official website.",
                    problem: "Manual data workflows slowed down operations.",
                    solution: "Built dynamic web forms and dashboards using Angular and Python/Django APIs.",
                    outcome: "Reduced manual data processes by 40%.",
                    future: "Angular • Django • AI"
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
            future: "मुख्य तकनीक",
            list: [
                {
                    name: "ICEGATE ई-गवर्नेंस पोर्टल",
                    summary: "भारतीय सीमा शुल्क के लिए स्केलेबल व्यापार संचालन पोर्टल।",
                    problem: "उच्च प्रदर्शन और सुरक्षा के लिए पुराने व्यापार प्रणालियों का आधुनिकीकरण।",
                    solution: "Spring Boot API के साथ एकीकृत उत्तरदायी Angular 17 घटकों को डिज़ाइन किया। सुरक्षित डेटा हैंडलिंग लागू की गई।",
                    outcome: "डेटा दक्षता में 30% सुधार हुआ और पहुंच में वृद्धि हुई।",
                    future: "Angular 17 • Spring Boot"
                },
                {
                    name: "Cloud Software Group आधुनिकीकरण",
                    summary: "एंटरप्राइज-ग्रेड क्लाउड एप्लिकेशन परिवर्तन।",
                    problem: "पुरानी प्रणालियों में प्रदर्शन बाधाएँ और क्लाउड स्केलेबिलिटी की कमी थी।",
                    solution: "माइक्रोसर्विसेज का निर्माण किया और MySQL DB को अनुकूलित किया। स्वचालित CI/CD पाइपलाइन्स।",
                    outcome: "तैनाती की गति में 45% सुधार हुआ।",
                    future: "Angular • Node.js • AWS"
                },
                {
                    name: "Althea.ai इंटेलिजेंस प्लेटफॉर्म",
                    summary: "AI-संचालित आंतरिक डैशबोर्ड और आधिकारिक वेबसाइट।",
                    problem: "मैन्युअल डेटा वर्कफ़्लो ने संचालन को धीमा कर दिया।",
                    solution: "Angular और Python/Django API का उपयोग करके गतिशील वेब फॉर्म और डैशबोर्ड बनाए।",
                    outcome: "मैन्युअल डेटा प्रक्रियाओं को 40% कम किया।",
                    future: "Angular • Django • AI"
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
