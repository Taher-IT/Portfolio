import { projects } from "./projects";

export const TRANSLATIONS = {
    en: {
        nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
        footer: { legal: "Legal Notice", privacy: "Privacy Policy" },
        hero: { job: "FRONTEND DEVELOPER" },
        about: {
            title: "Why me", iam: "I am ", local: "locaten in Hamburg..|", remote: "open to work remote..|", talk: "Let's talk",
            passion: "As a passionate developer who fell in love with coding because of the challenges in turning ideas into reality, I enjoy working in a structured way and finding solutions to problems. I am always ready to learn new things, grow with each project, and help the team achieve great results together.",
        },
        skills: { title: "My Skills", learning: "I am currently learning", describtion: "I am currently learning React to broaden my frontend skills and keep up with the latest technologies." },
        projectTitles: {
            title: "My Projects", about: "About the project ", duration: "Duration: ", process: "How I have organised my work", group: "My group work experience",
            learnt: "What I have learnt", tech: "Technologies",
        },
        projects: {
            loco: {
                name: "El Pollo Loco",
                duration: "2 weeks",
                description: "A simple jump-and-run game where you jump on enemies or throw salsa to defeat them, collect coins, and face the final boss at the end.",
                process: "For this project, I followed a step-by-step approach using object-oriented programming. Each game element, like the player, enemies, and coins, had its own JavaScript file and logic.",
                group: "",
                learnt: "This project deepened my understanding of object-oriented programming and how to structure code effectively.",
            },
            portfolio: {
                name: "Portfolio",
                duration: "2 weeks",
                description: "My personal portfolio built with Angular.",
                process: "I focused on clear structure, responsive design, and smooth Angular animations.",
                group: "",
                learnt: "I improved my UI/UX design skills and refined my Angular workflow."
            },
            join: {
                name: "Join",
                duration: "4 weeks",
                description: "A Kanban board for task management with drag-and-drop support.",
                process: "I created an intuitive UI and used state management to keep tasks in sync.",
                group: "We collaborated closely, using Git branches and pull requests for clean code reviews.",
                learnt: ""
            },
            dabubble: {
                name: "DA Bubble",
                duration: "3 weeks",
                description: "A Slack-style chat app with channels, real-time messaging, and an intuitive interface.",
                process: "I kept the codebase clean by following Angular best practices and modular design.",
                group: "We worked in a team of four and held daily stand-ups to stay aligned.",
                learnt: ""
            }
        },
        references: {
            title: "Need a teamplayer? Here is what my colleagues said about me",
            projectLabel: "Project:",
            linkLabel: "Linked to Profile",
            quotes: {
                ha: "Amidst the hectic phases of our project, Taher remains calm under pressure, bringing focus and clarity to complex projects. His solution-driven approach and thoughtful demeanor make him both an effective problem-solver and a positive team presence.",
                shardzhil: "It has been a pleasure working with Taher. He is a highly professional, reliable team player who consistently supports his colleagues with expertise and positivity. His respectful, cooperative nature and problem-solving attitude make him a valuable asset to any team.",
                jon: "I had the opportunity to work with Taher on the Kochwelt project. He was always curious and asked many questions to better understand how processes worked. In this sense, he proved to be a good problem-finder, identifying key issues and potential challenges. Thank you for your contribution to the project!"
            }
        },
        contact: {
            title: "Contact me",
            speech: "If you're planning a project or would like to discuss an opportunity, feel free to contact me! I look forward to new challenges and am happy to support you with my skills.",
            name: "Your Name",
            valName: "Please enter a valid name",
            email: "Your Email",
            valEmail: "Please enter a valid email address",
            message: "Your Message",
            valMessage: "Please enter a message",
            checkRead: "I've read the ",
            privacy: "Privacy Policy",
            agree: "and agree to the processing of my data.",
            send: "Send",
            sending: "Sending...",
            success: "Your message has been sent successfully!",
        },
        imprint: {
            title: "Legal Notice", contact: "Contact", source: "Source: ", backBtn: "Back to Main",
        },

    },

    de: {
        nav: { about: "Über mich", skills: "Fähigkeiten", projects: "Projekte", contact: "Kontakt" },
        footer: { legal: "Impressum", privacy: "Datenschutz" },
        hero: { job: "FRONTEND ENTWICKLER" },
        about: {
            title: "Über mich", iam: "Ich bin ", local: "wohnhaft in Hamburg..|", remote: "offen für Homeoffice..|", talk: "Melde dich",
            passion: "Als leidenschaftlicher Entwickler, der das Programmieren lieben gelernt hat, weil es so spannend ist, Ideen in die Realität umzusetzen, arbeite ich gerne strukturiert und finde kreative Lösungen für Herausforderungen. Ich lerne stets Neues dazu, wachse mit jedem Projekt und unterstütze das Team, um gemeinsam Erfolge zu erzielen.",
        },
        skills: { title: "Meine Fähigkeiten", learning: "Ich lerne momentan", describtion: "Ich lerne gerade React, um meine Frontend-Kenntnisse zu erweitern und mit den neuesten Technologien Schritt zu halten." },
        projectTitles: {
            title: "Meine Projekte", about: "Über die Projekte ", duration: "Dauer: ", process: "Wie ich meine Arbeit organisiert habe", group: "My Teamarbeitserfahrung",
            learnt: "Was ich gelernt habe", tech: "Technologien",
        },
        projects: {
            loco: {
                name: "El Pollo Loco",
                duration: "2 Wochen",
                description: "Ein einfach gehaltenes Jump-and-Run-Spiel, bei dem du auf Gegner springst oder Salsa wirfst, Münzen sammelst und am Ende gegen den Endboss kämpfst.",
                process: "Für dieses Projekt habe ich Schritt für Schritt mit objektorientierter Programmierung gearbeitet. Jedes Spielelement, wie Spieler, Gegner und Münzen, hatte seine eigene JavaScript-Datei und Logik.",
                group: "",
                learnt: "Dieses Projekt hat mein Verständnis für objektorientierte Programmierung und eine gute Code-Struktur vertieft.",
            },
            portfolio: {
                name: "Portfolio",
                duration: "2 Wochen",
                description: "Mein persönliches Portfolio, das ich mit Angular aufgebaut habe.",
                process: "Ich legte Wert auf klare Struktur, responsives Design und flüssige Angular-Animationen.",
                group: "",
                learnt: "Ich habe meine UI/UX-Fähigkeiten verbessert und meinen Angular-Workflow verfeinert."
            },
            join: {
                name: "Join",
                duration: "4 Wochen",
                description: "Ein Kanban-Board für Aufgabenverwaltung mit Drag-and-Drop.",
                process: "Ich habe ein intuitives UI erstellt und State-Management genutzt, um Aufgaben synchron zu halten.",
                group: "Wir haben eng zusammengearbeitet und per Pull-Request sauberen Code sichergestellt.",
                learnt: ""
            },
            dabubble: {
                name: "DA Bubble",
                duration: "3 Wochen",
                description: "Eine Slack-ähnliche Chat-App mit Kanälen, Echtzeit-Nachrichten und intuitiver Oberfläche.",
                process: "Ich habe den Code sauber gehalten, indem ich Angular-Best-Practices und modulare Struktur nutzte.",
                group: "Wir arbeiteten in einem Vierer-Team und hielten tägliche Stand-ups ab.",
                learnt: ""
            }
        },
        references: {
            title: "Auf der Suche nach einem Teamplayer? Das sagen meine Kollegen über mich",
            projectLabel: "Projekt:",
            linkLabel: "Link zum Profil",
            quotes: {
                ha: "Selbst in hektischen Phasen blieb Taher ruhig, brachte Fokus und Klarheit in komplexe Aufgaben. Seine lösungsorientierte Art macht ihn zu einem effektiven Problemlöser und positiven Teammitglied.",
                shardzhil: "Die Zusammenarbeit mit Taher war ein Vergnügen. Er ist professionell, zuverlässig und unterstützt Kollegen stets mit Fachwissen und guter Laune. Seine kooperative Haltung macht ihn zu einer echten Bereicherung für jedes Team.",
                jon: "Ich konnte mit Taher am Kochwelt-Projekt arbeiten. Er stellte viele Fragen, um Abläufe besser zu verstehen, und bewies dabei ein gutes Gespür für Probleme. Danke für deinen Beitrag zum Projekt!"
            }
        },
        contact: {
            title: "Kontakt",
            speech: "Falls Sie ein Projekt planen oder eine Gelegenheit besprechen möchten, kontaktieren Sie mich gerne! Ich freue mich auf neue Herausforderungen und unterstütze Sie gern mit meinen Fähigkeiten.",
            name: "Dein Name",
            valName: "Bitte einen gültigen Namen eingeben",
            email: "Deine E-Mail",
            valEmail: "Bitte eine gültige E-Mail-Adresse eingeben",
            message: "Deine Nachricht",
            valMessage: "Bitte eine Nachricht eingeben",
            checkRead: "Ich habe die ",
            privacy: "Datenschutzerklärung",
            agree: "gelesen, und stimme der Verarbeitung meiner Daten zu.",
            send: "Senden",
            sending: "wird gesendet...",
            success: "Ihre Nachricht wurde erfolgreich geschickt!",
        },
        imprint: {
            title: "Impressum", contact: "Kontakt", source: "Quelle: ", backBtn: "Zurück zur Hauptseite",
        },

    },

} as const;

export type Lang = keyof typeof TRANSLATIONS;