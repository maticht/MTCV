export const contact = {
    name: 'Matvey Treyvas',
    phone: '+48 509 028 565',
    email: 'matveytreyvas@gmail.com',
    location: 'Poland',
    linkedin: 'https://www.linkedin.com/in/matveytreyvas/',
    github: 'https://github.com/maticht',
        telegram: 'https://t.me/MatsveiTreivas',
    cv: 'https://eu.wps.com/l/cbOakujGs7aZoTE3',
}

export const summary = `
Senior System Analyst with a software engineering background and hands-on experience turning business goals into architecture-aligned technical solutions.

Focused on requirements analysis, solution design, integration modeling, and technical documentation for scalable, reliable, and high-load systems. Strong in preparing BRD, SRS, TSD, ADRs, API specifications, BPMN, UML, ERD, and system diagrams that help teams move from discovery to implementation with clarity.

Comfortable working across product, architecture, engineering, QA, and DevOps, balancing business needs with technical constraints, non-functional requirements, and delivery readiness.
`;

export const achievements: string[] = [
    'Increased onboarding conversion rate from 8.5% to 42% through analytics, flow improvements, and product recommendations.',
    'Supported delivery and stable operation of a platform with 20,000+ DAU and more than 1,500,000 users.',
    'Improved wallet and deposit journeys, reducing friction in financial operations and strengthening user experience.',
    'Produced architecture and requirements documentation that improved cross-functional alignment and implementation readiness.'
]

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
        period: 'Dec 2025 - Present',
        bullets: [
            'Translate business goals into architecture-aligned technical requirements.',
            'Design solution approaches for scalable, reliable, and high-load systems.',
            'Prepare architectural documentation, including solution design, TSD, ADRs, and integration specifications.',
            'Create system, sequence, component, and data flow diagrams.',
            'Define system boundaries, integration patterns, API contracts, and data exchange flows.',
            'Assess architectural impacts, dependencies, risks, and trade-offs across initiatives.',
            'Document non-functional requirements for performance, scalability, availability, reliability, and security.',
            'Support architects and engineering teams in solution design and technical decision-making.',
            'Drive requirements clarification across product, architecture, engineering, QA, and DevOps.',
            'Ensure documentation quality, consistency, and readiness for implementation.',
            'Support delivery through the full lifecycle from discovery and design to release readiness.'
        ]
    },
    {
        role: 'System Analyst',
        company: 'Aurora Labs',
        period: 'Dec 2023 - Dec 2025',
        bullets: [
            'Acted as a liaison between business stakeholders and the development team, translating business goals into BRD, SRS, user stories, and use cases for game mechanics and microtransactions.',
            'Analyzed business requirements for a high-load Web3 application, designing system architecture diagrams, BPMN workflows, and data flows to ensure scalability and performance.',
            'Conducted user behavior analysis, retention studies, and A/B testing, recommending improvements to onboarding and gameplay features.',
            'Optimized wallet integration and in-game deposit flows, improving user experience and reducing friction in financial operations.',
            'Collaborated with engineers on the selection, deployment, and configuration of infrastructure, ensuring alignment with business and technical requirements.',
            'Developed SQL queries and dashboards in analytical databases, including ClickHouse, delivering data-driven insights for stakeholders.',
            'Designed and documented API specifications and integration workflows for Web3 features and AI agents.'
        ]
    },
    {
        role: 'Frontend Developer',
        company: 'Andersen Lab',
        period: 'Jun 2023 - Jun 2024',
        bullets: [
            'Developed and maintained applications for a comprehensive healthcare platform, focusing on patient, financial, and resource management.',
            'Optimized application performance, identified and fixed bugs, and performed code reviews to enforce best practices and ensure code quality.',
            'Provided technical reports and insights to stakeholders and managed technical aspects of the project.',
            'Wrote and maintained unit tests to ensure application reliability.'
        ]
    },
    {
        role: 'Frontend Developer',
        company: 'Quant',
        period: 'Oct 2022 - Oct 2023',
        bullets: [
            'Developed and maintained React applications for a comprehensive healthcare platform, focusing on patient, financial, and resource management.',
            'Optimized application performance, identified and fixed bugs, and performed code reviews to enforce best practices and ensure code quality.',
            'Provided technical reports and insights to stakeholders and managed technical aspects of the project.',
            'Wrote and maintained unit tests to ensure application reliability.'
        ]
    },
    {
        role: 'Full-stack Developer',
        company: 'VironIT',
        period: 'Oct 2021 - Jul 2022',
        bullets: [
            'Contributed to a commercial web project, implementing client-server communication and REST API integrations.',
            'Worked with HTTP protocols, request handling, package management, and backend service interaction.',
            'Supported non-relational database design, schema adjustments, and query optimization.',
            'Participated in debugging, issue analysis, and performance improvements across web application components.',
            'Collaborated with the development team to understand system behavior, data flows, and integration logic.'
        ]
    }
]

export const skills = {
    requirements: 'BRD, SRS, V&S, User Stories, Use Cases, NFRs, BPMN, ER, C4, UML.',
    tools: 'Jira, Confluence, AWS, Miro, Figma, Postman, Swagger/OpenAPI, Grafana, ClickUp.',
    technical: 'Solution Design, TSD, Integration Specs, API Specs, ADR, RFC, HLD/LLD, system context and component diagrams.',
    programming: 'JavaScript/TypeScript, Node.js.',
    backendDevOps: 'Docker, Kubernetes, Git, Linux.',
    databases: 'REST/SOAP, API contracts, SQL, ClickHouse, MongoDB, data modeling, ERD, and data flow diagrams.',
    other: 'System decomposition, service boundaries, integration patterns, scalability, reliability, high-load considerations, Agile, Scrum/Kanban, SDLC, discovery, refinement, and stakeholder communication.'
}

export const education = {
    school: 'Belarusian State University',
    location: 'Minsk, Belarus',
    period: 'Sep 2019 - Jun 2023',
    degree: "Bachelor's Degree in Electrical Power Engineering",
    program: 'Energy efficient technologies and energy management'
}

export const languages = ['Russian (C2)', 'English (B2)', 'Polish (B2)', 'Ukrainian (B1)']