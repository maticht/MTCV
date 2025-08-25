export const contact = {
    name: 'Matvey Treyvas',
    phone: '+48 509 028 565',
    email: 'matveytreyvas@gmail.com',
    location: 'Poland',
    linkedin: 'https://www.linkedin.com/in/matveytreyvas/',
    github: 'https://github.com/maticht',
    cv: 'https://eu.docworkspace.com/d/sICPCipbuAd26rsUG?sa=601.1037',
}

export const summary = `System & Business Analyst with a strong software engineering background and proven experience in requirements management, system analysis, and solution design. Skilled in bridging business needs with technical implementation, delivering clear documentation, and ensuring scalable system architectures. Experienced in BRD, SRS, User Stories, BPMN, UML diagrams, and API specifications. Looking to leverage technical and analytical expertise to design efficient solutions and drive business value.`

export const achievements: string[] = [
    'Redesigned product visuals, securing additional funding from stakeholders.',
    'Increased onboarding conversion rate from 8.5% to 42% through analytics and process improvements.',
    'Optimized application loading performance (12s → 8s) in file-heavy environments.',
    'Supported seamless operation of a platform with 20,000+ DAU and a user base exceeding 1,500,000.'
]

export type ExperienceItem = {
    role: string
    company: string
    period: string
    bullets: string[]
}

export const experience: ExperienceItem[] = [
    {
        role: 'System Analyst',
        company: 'Aurora Labs',
        period: 'Mar 2024 – Present',
        bullets: [
            'Acted as a liaison between business stakeholders and the development team, translating business goals into BRD, SRS, user stories, and use cases for game mechanics and microtransactions.',
            'Analyzed business requirements for a high-load Web3 application, designing system architecture diagrams, BPMN workflows, and data flows to ensure scalability and performance.',
            'Conducted user behavior analysis, retention studies, and A/B testing, recommending improvements to onboarding and gameplay features.',
            'Optimized wallet integration and in-game deposit flows, improving user experience and reducing friction in financial operations.',
            'Collaborated with engineers on the selection, deployment, and configuration of infrastructure, ensuring alignment with business and technical requirements.',
            'Developed SQL queries and dashboards in analytical databases (ClickHouse, SQL), delivering data-driven insights for stakeholders.',
            'Designed and documented API specifications, and integration workflows for Web3 features and AI agents.'
        ]
    },
    {
        role: 'Front-End',
        company: 'Andersen',
        period: 'Jul 2023 – Jun 2024',
        bullets: [
            'Developed and maintained applications for a comprehensive healthcare platform, focusing on patient, financial, and resource management.',
            'Optimized app performance, identified and fixed bugs, and performed code reviews to enforce best practices and ensure code quality.',
            'Provided technical reports and insights to stakeholders and managed technical aspects of the project.',
            'Wrote and maintained unit tests to ensure application reliability.'
        ]
    },
    {
        role: 'Front-End',
        company: 'Quant Network',
        period: 'Oct 2022 – Sep 2023',
        bullets: [
            'Developed and maintained React applications for a comprehensive healthcare platform, focusing on patient, financial, and resource management.',
            'Optimized app performance, identified and fixed bugs, and performed code reviews to enforce best practices and ensure code quality.',
            'Provided technical reports and insights to stakeholders and managed technical aspects of the project.',
            'Wrote and maintained unit tests to ensure application reliability.'
        ]
    },
    {
        role: 'Full-Stack',
        company: 'VironIT',
        period: 'Feb 2022 – Jul 2022',
        bullets: [
            'Gained practical training in a commercial project, implementing client-server interactions and API connections.',
            'Managed non-relational databases, assisting in the design and optimization of schemas and queries.',
            'Identified and solved problems in web projects, including debugging and performance optimization.'
        ]
    },
    {
        role: 'Trainee Back-End',
        company: 'Itransition Group',
        period: 'Sep 2021 – Dec 2021',
        bullets: [
            'Completed a training program focused on backend development, improving problem-solving and algorithmic thinking.',
            'Gained experience in managing packages, processing server requests, and working with HTTP and REST API protocols.'
        ]
    }
]

export const skills = {
    requirements: 'BRD, SRS, User Stories, Use Cases, BPMN, UML (sequence, activity, class diagrams).',
    tools: 'Confluence, Jira, ClickUp, Miro, Figma, Postman, Swagger, Grafana.',
    technical: 'REST/SOAP APIs, system architecture, data flow modeling.',
    programming: 'JavaScript, TypeScript, NodeJS.',
    backendDevOps: 'NodeJS, Linux, Docker, Kafka, Redis, Git.',
    databases: 'SQL, ClickHouse, MongoDB.',
    other: 'Agile/Scrum/Kanban, stakeholder communication, business process modeling.'
}

export const education = {
    school: 'Belarusian State University',
    location: 'Minsk, Belarus',
    period: 'Sep 2019 – Jun 2023',
    degree: "Bachelor's Degree in Electrical Power Engineering",
    program: 'Energy efficient technologies and energy management'
}

export const languages = ['English (B2)', 'Polish (B2)', 'Russian (C1)']