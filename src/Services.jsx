export function getProjects(ownerName) {
    const data = [
        {
            name: "Jenalyn", project: [
                {
                    id: 1,
                    name: "Personal Portfolio Website",
                    description: "A fully responsive and visually appealing website designed to highlight professional skills, showcase completed projects, and provide easy access to contact information. Built with modern frameworks and best practices for performance and accessibility."
                },
                {
                    id: 2,
                    name: "Library Management System",
                    description: "A robust desktop application developed to streamline library operations by managing book inventories, tracking member details, and monitoring borrowing/returning activities. Features include search, categorization, and reporting functions."
                },
                {
                    id: 3,
                    name: "Task Management System",
                    description: "A user-friendly web application that helps individuals and teams organize daily activities by creating, categorizing, and prioritizing tasks. Includes deadline reminders, progress tracking, and collaboration tools for improved productivity."
                }

            ]

        },
        {
            name: "Rica",
            project: [
                {
                    id: 1,
                    name: "Portfolio Website",
                    description: "A modern and responsive personal portfolio website designed to showcase skills, achievements, and projects. Built with React and styled for an engaging user experience, with easy navigation and contact integration."
                },
                {
                    id: 2,
                    name: "Task Manager",
                    description: "A productivity-focused web application that allows users to create, categorize, and prioritize tasks. Includes features like deadlines, status updates, and progress tracking to improve time management."
                },
                {
                    id: 3,
                    name: "E-commerce Store",
                    description: "A demo online shop built with React that simulates real-world e-commerce functionality, including product browsing, shopping cart management, and checkout flow. Designed with scalability and user experience in mind."
                }
            ]
        }



    ];
    return data.find(d => d.name.toLowerCase() === ownerName.toLowerCase()) || { project: [] };

}
export function getSkills(ownerName) {
    const data = [
        {
            name: "Jenalyn", skills: [
                {
                    name: "Time Management",
                    description: "The ability to prioritize tasks, set realistic deadlines, and efficiently allocate time to maximize productivity without compromising quality."
                },
                {
                    name: "Communication",
                    description: "Effectively conveying ideas, actively listening, and ensuring clear understanding across teams and individuals, both in verbal and written forms."
                },
                {
                    name: "Leadership",
                    description: "Inspiring, guiding, and motivating team members by setting direction, fostering collaboration, and driving collective success toward shared goals."
                }
            ]
        },
        {
            name: "Rica", skills: [
                {
                    name: "Teamwork ",
                    description: "Working cooperatively and supporting team success."
                },
                {
                    name: "Critical Thinking",
                    description: "Evaluating information and making sound decisions."
                },
                {
                    name: "Creativity",
                    description: "Thinking outside the box to design and improve projects."
                }
            ]
        }
    ];
    return data.find(d => d.name.toLowerCase() === ownerName.toLowerCase()) || { skills: [] };
}
export function aboutMe() {
    return [
        {
            name: "Jenalyn Malayo",
            description: "an IT student who loves exploring technology and learning new things. I enjoy creating projects that challenge me and help me grow.",
            photo: "/Jenalyn.png"
        }
    ];
    //const data = [
    //    {

    //    },
    //    {
    //        name: "Rica", about: [
    //            {
    //                name: "Rica Marco",
    //                description: "an IT student who values collaboration, leadership, and lifelong learning. I embrace challenges as opportunities to grow and to contribute positively to any team",
    //                photo: "/Rica.png"
    //            }
    //        ]
    //    }
    //]

    //return data.find(d => d.name.toLowerCase() === ownerName.toLowerCase()) || { about: [] };
}
export function contactDetails() {
    return [
        { name: "Email", description: "jenalynmalayo@yahoo.com", url: "mailto:jenalynmalayo@yahoo.com", icon: "text-info mdi mdi-email" },
        { name: "Mobile", description: "+639091520748", url: "tel:+639091520748", icon: "text-info mdi mdi-phone" },
        { name: "GitHub", description: "https://github.com/jenalynmalayo53-boop", url: "https://github.com/jenalynmalayo53-boop", icon: "text-info mdi mdi-github" },
    ]
}
export function getOwners() {
    return [
        {
            id: 1, name: "Jenalyn", photo: "/Jenalyn.png"
        },
        {
            id: 2, name: "Rica", photo: "/Rica.png"
        }
    ]
}
