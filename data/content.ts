export const contentData = [
    {
        title: "Work Experience",
        items: [
            {
                title: "Freelance Software Developer",
                subTitle: "Tracker - Your Mobile Fitness Companion",
                date: "2023 - 2023",
                description: "Developed an Android app for tracking fitness activities.",
                href: ""
            }
        ],
    },
    {
        title: "Education",
        items: [
            {
                title: "University of Mauritius",
                subTitle: "BSc Computer Science",
                date: "2023 - 2026",
                description: "",
                href: ""
            },
            {
                title: "Beekrumsing Ramlallah State Secondary School",
                subTitle: "Higher School Certificate (Technical Side)",
                date: "2015 - 2022",
                description: "National Coding Event Junior Hackathon, School Website Maintenance",
                href: ""
            }
        ]
    },

    {
        title: "Projects",
        items: [
            {
                title: "TLDR Fail Testing for IP Addresses in Mauritius",
                subTitle: "Python, Security",
                date: "2024 - Present",
                description: "Collaborated with colleagues on a project analyzing Mauritius' readiness against Quantum Computing, checking websites' TLS implementations.",
                href: "https://github.com/poshan-p/tldr-fail-testing"
            },
            {
                title: "TCP/IP Stack Simulation",
                subTitle: "Go, Network Protocols",
                date: "2023 - Present",
                description: "Built a TCP/IP stack simulation focusing on Layer 2 and Layer 3 functionalities.",
                href: "https://github.com/poshan-p/tcpip"
            },
            {
                title: "Tracker - Your Mobile Fitness Companion",
                subTitle: "Android, Kotlin",
                date: "2023 - 2023",
                description: "Developed an app to track workouts and progress.",
                href: "https://github.com/poshan-p/Tracker"
            },
            {
                title: "CookBook: Recipes & Videos",
                subTitle: "Android, Kotlin",
                date: "2021 - 2023",
                description: "Created an app for exploring and managing recipes.",
                href: "https://gist.github.com/poshan-p/27dd43ccfe99675c538ae0eeceb5563d"
            }
        ]
    },
];

export type Content = {
    title: string;
    items: {
        title: string;
        subTitle: string;
        date: string;
        description: string;
        href: string;
    }[];
};

export type ContentData = Content[];




export const generalData = {
    name: "Poshan Peeroo",
    avatar: "https://avatars.githubusercontent.com/u/75898715?v=4",
    jobTitle: "Level 2 Student",
    about:
        `I am a driven software developer currently pursuing my BSc in Computer Science at the University of Mauritius. My passion lies in solving problems through technology, and I thrive in collaborative environments where I can explore new innovations.

        Throughout my academic journey, I've gained hands-on experience in developing Android applications like "Tracker" and "CookBook," as well as creating network simulations. These projects have honed my skills in various programming languages and technologies, including Go, Kotlin, Java, and network protocols.`,
    contacts: [
        {
            label: "Email",
            value: "poshanpeeroo@gmail.com",
            href: "mailto:poshanpeeroo@gmail.com",
        },
        {
            label: "LinkedIn",
            value: "poshan-peeroo",
            href: "https://www.linkedin.com/in/poshan-peeroo",
        },
        {
            label: "Twitter",
            value: "poshan_peeroo",
            href: "https://x.com/poshan_peeroo",
        },
        {
            label: "Github",
            value: "poshan-p",
            href: "https://github.com/poshan-p",
        },
        {
            label: "Facebook",
            value: "poshan.peeroo",
            href: "https://facebook.com/poshan.peeroo",
        },
    ],
};