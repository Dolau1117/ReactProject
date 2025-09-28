export function getProjects() {
    return [
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
    ];
}
export function getSkills() {
    return [
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
    ];
}
export function aboutMe() {
    return [
        {
            name: "Jenalyn Malayo",
            description: "an IT student who loves exploring technology and learning new things. I enjoy creating projects that challenge me and help me grow.",
            photo: "/profile.png"
        }
    ]
}
export function contactDetails() {
    return [
        { name: "Email", description: "jenalynmalayo@yahoo.com", url: "mailto:jenalynmalayo@yahoo.com", icon: "text-info mdi mdi-email" },
        { name: "Mobile", description: "+639091520748", url: "tel:+639091520748", icon: "text-info mdi mdi-phone" },
        { name: "GitHub", description: "https://github.com/jenalynmalayo53-boop", url: "https://github.com/jenalynmalayo53-boop", icon: "text-info mdi mdi-github" },
    ]
}
