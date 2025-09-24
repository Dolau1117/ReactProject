export function getProjects() {
    return [
        { id: 1, name: "Portfolio Website", description: "A personal website built with React" },
        { id: 2, name: "Task Manager", description: "App to manage daily tasks" },
        { id: 3, name: "E-commerce Store", description: "Demo online shop built with React" }
    ];
}
export function getSkills() {
    return [
        { name: "Back-End", description: "PHP Open-Source Programming Language" },
        { name: "Front-End", description: "React JS Open-Source UI-Framework" },
        { name: "Database", description: "MySQL Open-Source Database" },
        { name: "Repository", description: "GitHub Open-Source Repository" }
    ];

}
export function aboutMe() {
    return [
        {
            name: "Me Myself",
            description: "a passionate developer who loves building web applications with React.js",
            photo: "/profile.png"
        }
    ]
}
export function contactDetails() {
    return [
        { name: "Email", description: "email.me@gmail.com", url: "mailto:email.me@gmail.com", icon:"text-info mdi mdi-email" },
        { name: "LinkedIn", description: "https://linkedin.com/me", url: "https://linkedin.com/me", icon: "text-info mdi mdi-linkedin" },
        { name: "GitHub", description: "https://github.com/me", url: "https://github.com/me", icon:"text-info mdi mdi-github" },
    ]
}
