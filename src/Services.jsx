export function getProjects() {
    return [
        {
            id: 1, name: "Personal Portfolio Website (Biginner)", description: "A responsive website to showcase your skills, projects, and contact information."
        },
        {
            id: 2, name: "Library Management System (Intermediate)", description: "A desktop app for tracking books, members, and borrowing records."
        },
        {
            id: 3, name: "Task Management System (Beginner)", description: "A web app for managing daily tasks with categories and priorities."
        }
    ];
}
export function getSkills() {
    return [
        { name: "Time Management", description: "Finishing tasks on schedule." },
        {
            name: "Communication", description: "Working well with others and sharing ideas." },
        { name: "Leadership", description: "Guiding and motivating a group to achieve goals." }
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
