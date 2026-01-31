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
            description: "Full-Stack Web Developer with 4+ YOE building scalable, high-performance web apps.",
            sayHi: "Say Hi!"
        },
        about: {
            title: "About Me",
            p1: "I am a <span class=\"text-highlight\">Full-Stack Web Developer</span> with 4+ years of experience. I specialize in building robust backends with <span class=\"text-highlight\">Node.js</span> and pixel-perfect frontends using <span class=\"text-highlight\">Angular & React</span>.",
            p2: "I thrive on solving complex challenges, from database optimization to integrating <span class=\"text-highlight\">AI models</span>."
        },
        experience: {
            title: "Professional Experience",
            jobs: [
                {
                    role: "Senior Software Engineer",
                    company: "Infosys",
                    period: "Mar 2022 - Present",
                    desc: "Leading development for enterprise-scale projects like ICEGATE and Cloud Software Group. modernized legacy systems into efficient microservices, contributing to a 30% improvement in data efficiency and 45% faster deployment cycles through automated CI/CD pipelines."
                },
                {
                    role: "AI Engineer - Angular Developer",
                    company: "Althea.ai",
                    period: "Mar 2021 - Feb 2022",
                    desc: "Spearheaded the development of AI-powered dashboards and the official company website. Reduced manual operational workflows by 40% by engineering dynamic web forms and integrating Python/Django-based RESTful APIs."
                },
                {
                    role: "Frontend Developer Internship",
                    company: "Flit Webs",
                    period: "Dec 2019 - Apr 2020",
                    desc: "Kickstarted my developer journey by building responsive UI components and interactive web applications. Gained foundational experience in Angular and agile development practices."
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
            greeting: "Hi! I'm the AI Assistant. Ask me anything about my developer's experience, tech stack, or projects.",
            responses: {
                stack: "I specialize in the MEAN stack (MongoDB, Express, Angular, Node.js). I'm also proficient with TypeScript, Tailwind CSS, and integrating AI models using OpenAI.",
                experience: "I have 4 years of experience building scalable web applications. Currently, I'm a Senior Engineer focusing on backend migration and AI integration.",
                project: "One of my key projects is an E-Commerce Logistics Engine where I optimized MongoDB queries to handle Black Friday traffic with 99.9% uptime.",
                contact: "You can reach me at shilpilashkari@gmail.com or find me on LinkedIn!",
                ai: "I use AI to accelerate development—from generating boilerplate code to debugging race conditions. Better tools mean better software.",
                fallback: "That's a great question! I'm best equipped to answer about my technical skills, experience, and projects. Feel free to ask about those!"
            }
        }
    },
    hi: {
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
            description: "Full-Stack Web Developer with 4+ YOE building scalable, high-performance web apps.",
            sayHi: "Say Hi!"
        },
        about: {
            title: "About Me",
            p1: "I am a Full-Stack Web Developer with over 4 years of experience mastering the art of building scalable, high-performance web applications. My expertise spans the entire development lifecycle.",
            p2: "I thrive on solving complex engineering challenges—whether it's optimizing database queries or integrating cutting-edge AI models."
        },
        experience: {
            title: "Professional Experience",
            jobs: [
                {
                    role: "Senior Software Engineer",
                    company: "Infosys",
                    period: "Mar 2022 - Present",
                    desc: "Leading development for enterprise-scale projects like ICEGATE and Cloud Software Group. Modernized legacy systems into efficient microservices."
                },
                {
                    role: "AI Engineer - Angular Developer",
                    company: "Althea.ai",
                    period: "Mar 2021 - Feb 2022",
                    desc: "Spearheaded the development of AI-powered dashboards and the official company website."
                },
                {
                    role: "Frontend Developer Internship",
                    company: "Flit Webs",
                    period: "Dec 2019 - Apr 2020",
                    desc: "Kickstarted my developer journey by building responsive UI components and interactive web applications."
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
                    problem: "Modernizing legacy trade systems.",
                    solution: "Designed responsive Angular 17 components integrated with Spring Boot APIs.",
                    outcome: "Improved data efficiency by 30%.",
                    future: "Angular 17 • Spring Boot"
                },
                {
                    name: "CSG Modernization",
                    summary: "Enterprise-grade cloud application transformation.",
                    problem: "Performance bottlenecks in legacy systems.",
                    solution: "Engineered microservices and optimized MySQL DBs.",
                    outcome: "Deployment speed improved by 45%.",
                    future: "Angular • Node.js"
                },
                {
                    name: "Althea.ai Platform",
                    summary: "AI-powered internal dashboard.",
                    problem: "Manual data workflows.",
                    solution: "Built dynamic web forms and dashboards.",
                    outcome: "Reduced manual processes by 40%.",
                    future: "Angular • Django"
                }
            ]
        },
        contact: {
            title: "Get In Touch",
            desc: "Open to Full-Stack Developer, Software Engineer, & Frontend / Backend Engineer roles.",
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
            greeting: "Hi! I'm the AI Assistant. Ask me anything about my developer's experience, tech stack, or projects.",
            responses: {
                stack: "I specialize in the MEAN stack (MongoDB, Express, Angular, Node.js). I'm also proficient with TypeScript, Tailwind CSS, and integrating AI models using OpenAI.",
                experience: "I have 4 years of experience building scalable web applications. Currently, I'm a Senior Engineer focusing on backend migration and AI integration.",
                project: "One of my key projects is an E-Commerce Logistics Engine where I optimized MongoDB queries to handle Black Friday traffic with 99.9% uptime.",
                contact: "You can reach me at shilpilashkari@gmail.com or find me on LinkedIn!",
                ai: "I use AI to accelerate development—from generating boilerplate code to debugging race conditions. Better tools mean better software.",
                fallback: "That's a great question! I'm best equipped to answer about my technical skills, experience, and projects. Feel free to ask about those!"
            }
        }
    }
};
