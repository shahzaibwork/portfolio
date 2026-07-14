import hiremind from "../assets/projects/hiremind.webp";
import searchify from "../assets/projects/searchify.webp";
import aiWorkspace from "../assets/projects/ai-workspace.webp";


const projects = [

    {
        title: "HireMind AI",

        featured: true,

        description:
            "AI-powered resume analysis platform that leverages Google Gemini to analyze resumes, generate personalized feedback, identify skill gaps, and help users prepare for technical interviews.",

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Gemini API",
            "JWT Authentication",
        ],

        github:
            "https://github.com/shahzaibwork/HireMind-AI-Resume-Analysis-Platform",

        live:
            "",

        image:
            hiremind,
    },


    {
        title: "Searchify",

        featured: false,

        description:
            "AI-powered shopping assistant that helps users search, compare, and discover products intelligently using modern web technologies.",

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "AI Integration",
        ],

        github:
            "https://github.com/shahzaibwork/Searchify-Web-App",

        live:
            "",

        image:
            searchify,
    },


    {
        title:
            "Real-Time Collaborative Development Workspace with AI Code Assistant",

        featured: false,

        description:
            "A real-time collaborative development platform with AI-powered code assistance, authentication, and workspace management.",

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Gemini API",
            "Socket.io",
        ],

        github:
            "https://github.com/shahzaibwork/Real-Time-Collaborative-Development-Workspace-with-AI-Code-Assistant",

        live:
            "",

        image:
            aiWorkspace,
    },


    {
        title:
            "FastAPI Authentication",

        featured: false,

        description:
            "Secure JWT authentication system built with FastAPI following Test-Driven Development practices.",

        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "JWT",
            "Docker",
        ],

        github:
            "https://github.com/shahzaibwork/FastAPI-TDD-User-Authentication",

        live:
            "",

        image:
            null,
    },


];


export default projects;