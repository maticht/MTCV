export const contact = {
    name: 'Matvey Treyvas',
    phone: '+48 509 028 565',
    email: 'matveytreyvas@gmail.com',
    location: 'Poland',
    linkedin: 'https://www.linkedin.com/in/matveytreyvas/',
    github: 'https://github.com/maticht',
    telegram: 'https://t.me/MatsveiTreivas',
    cv: 'https://eu.docs.wps.com/module/common/preview/?sid=sIHHCipbuAcnvmscG',
}

export const summary = `
    Senior System Analyst with a strong engineering mindset and hands-on experience in shaping complex, high-load systems.
    Focused on translating business intent into robust system designs, clear technical requirements, and architecture-aligned specifications.
    Specialized in end-to-end system analysis, solution discovery, and requirement definition for scalable platforms.
    Experienced in working closely with architects and engineering teams to define system boundaries, integrations, data flows, and non-functional requirements.
    Skilled in producing high-quality BRD, system and integration specifications, API contracts, and architectural documentation supported by C4, sequence, data-flow, and ER diagrams.
    Strong domain understanding enables proactive identification of risks, dependencies, and architectural impacts early in the delivery lifecycle.
    Driven by clarity, structure, and technical rigor, ensuring that business goals are realized through well-designed, maintainable, and resilient systems.
`;

export const achievements: string[] = [
    'Developed and launched a proprietary Web3 product that won a major crypto industry competition and secured investment from leading stakeholders, ensuring the project’s further growth and visibility.',
    'Increased user conversion from registration to key in-app event from 2% to 12% and doubled retention through in-depth funnel analytics, onboarding optimization, and targeted A/B testing.',
    'Simplified wallet creation and deposit flows by redesigning UX and optimizing interface logic, which significantly improved transaction completion rates and overall user satisfaction.',
    'Optimized the product’s visual identity and marketing communication, enabling the application to achieve financial self-sustainability and maintain consistent user engagement.',
    'Ensured the reliable operation of a large-scale platform serving over 20,000 daily active users and a total audience exceeding 1.5 million, maintaining performance and system stability under high load.'
];


export type ExperienceItem = {
    role: string
    company: string
    period: string
    bullets: string[]
}

export const experience: ExperienceItem[] = [
    {
        role: 'Senior System Analyst',
        company: 'RedCore',
        period: 'Dec 2025 – Present',
        bullets: [
            'Translating business goals into clear, structured and actionable technical requirements',
            'Creating comprehensive BRD/TSD/integration specs with defined scope, constraints and acceptance criteria',
            'Leading discovery sessions and ensuring alignment across product, architecture and engineering',
            'Assessing initiatives end-to-end, identifying risks, dependencies and architectural impacts',
            'Producing high-quality use cases, interaction flows and technical diagrams for solution design',
            'Partnering with architects to refine system boundaries and document key decisions',
            'Maintaining deep domain knowledge to support planning and guide technical direction',
            'Preparing impact analyses covering performance, reliability, integrations and operational considerations',
            'Improving documentation standards, templates and knowledge structure across the domain',
            'Supporting refinement and planning by shaping epics/stories and ensuring clarity for delivery teams',
            'Acting as the main point for requirement alignment during development',
            'Driving initiatives through the full lifecycle with strong ownership and accountability',
            'Documenting business flows, constraints, edge cases and non-functional requirements',
            'Fostering strong cross-team collaboration and maintaining high communication standards'
        ]
    },
    {
        role: 'System Analyst',
        company: 'Aurora Labs',
        period: 'Jan 2024 – Dec 2025',
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
    analysis: 'BRD, SRS, User Stories, Use Cases, BPMN, UML (sequence, activity, class diagrams), ER diagrams, data flow modeling.',
    tools: 'Confluence, Jira, ClickUp, Miro, Figma, Postman, Swagger, Grafana.',
    systemDesign: 'System architecture, REST/SOAP APIs, integration workflows, process optimization.',
    development: 'JavaScript, TypeScript, Node.js (practical knowledge for solution design and collaboration with engineers).',
    backendDevOps: 'Node.js, Linux, Docker, Kafka, Redis, Git (supporting scalable system deployment).',
    databases: 'SQL, ClickHouse, MongoDB; data modeling and query optimization.',
    methodologies: 'Agile/Scrum/Kanban, stakeholder communication, business process modeling, requirement elicitation and prioritization.'
};

export const education = {
    school: 'Belarusian State University',
    location: 'Minsk, Belarus',
    period: 'Sep 2019 – Jun 2023',
    degree: "Bachelor's Degree in Electrical Power Engineering",
    program: 'Energy efficient technologies and energy management'
}

export const languages = [
    'Russian (C2)',
    'English (B2)',
    'Polish (B2)',
    'Ukrainian (B1)',
    'Belarusian (B1)'
];