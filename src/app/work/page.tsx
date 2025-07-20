import { Badge } from '@/components/ui/badge';
import WorkExperience from '@/components/WorkExperience';

export const metadata = {
  title: 'Resume | Nhac Nguyen',
  description: "Nhac Nguyen's online resume and professional experience.",
};

const WorkPage = () => {
  return (
    <section className="max-w-2xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Nhac Nguyen</h1>
        <p className="text-lg text-muted-foreground mb-2">
          Fullstack Software Engineer in Berlin, Germany
        </p>
        <p className="text-base text-muted-foreground">
          8+ years of experience building robust, scalable, and user-centric
          software solutions. Specialized in Java, React, Next.js, Atlassian
          plugin development, and cloud-native architectures.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Skills</h2>
        <ul className="flex flex-wrap gap-2 justify-center">
          <span className="block w-full text-xs text-muted-foreground mt-2 mb-1 text-center">
            Backend
          </span>
          <Badge variant="outline">Java</Badge>
          <Badge variant="outline">Spring</Badge>
          <Badge variant="outline">Spring Boot</Badge>
          <Badge variant="outline">SQL</Badge>
          <Badge variant="outline">Microservices</Badge>
          <span className="block w-full text-xs text-muted-foreground mt-4 mb-1 text-center">
            Frontend
          </span>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
          <span className="block w-full text-xs text-muted-foreground mt-4 mb-1 text-center">
            Other
          </span>
          <Badge variant="outline">Cloud</Badge>
          <Badge variant="outline">Atlassian Plugin Development</Badge>
        </ul>
      </div>

      {/* Work Experience Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Work Experience
        </h2>
        <div className="grid gap-6">
          <WorkExperience
            title="Senior Fullstack Software Engineer"
            company="mgm technology partners GmbH"
            location="Berlin, Germany"
            date="2022 - Present"
          >
            <li>
              Worked on an eCommerce project using Spring Boot microservices
              architecture.
            </li>
            <li>
              Responsible for the checkout section on the frontend, implemented
              in React.js.
            </li>
            <li>
              Integrated Apple Pay and PayPal payment methods into the site
              using Adyen.
            </li>
            <li>
              Transitioned to a new project in the automotive industry (Audi),
              building an application to connect car dealerships with customers
              for vehicle enrollment.
            </li>
            <li>
              Fullstack development with Spring Boot microservices on the
              backend and Vue/Nuxt.js on the frontend.
            </li>
          </WorkExperience>
          <WorkExperience
            title="Fullstack Software Engineer"
            company="mgm technology partners Vietnam"
            location="Da Nang, Vietnam"
            date="2018 - 2022"
          >
            <li>
              Contributed as a Junior Engineer to a Spring Boot real-time
              project using Server-Sent Events (SSE) for backend and
              React/TypeScript for frontend.
            </li>
            <li>
              Developed and maintained Spring Boot APIs, and configured CORS for
              secure cross-origin requests.
            </li>
            <li>Implemented a chat feature on the frontend using Firebase.</li>
            <li>
              Transitioned to a new project, assisting the team in setting up
              comprehensive automation testing with Selenium for a Spring Boot &
              React application.
            </li>
            <li>
              Spent nearly 5 years as part of the Atlassian Team, developing and
              maintaining Atlassian plugins (Jira/Confluence, Datacenter &
              Cloud).
            </li>
          </WorkExperience>
          <WorkExperience
            title="Intern Backend Developer"
            company="mgm technology partners Vietnam"
            location="Da Nang, Vietnam"
            date="2017 - 2018"
          >
            <li>
              Worked as an intern on a real-time web application using Node.js
              and React.js.
            </li>
            <li>
              Designed and implemented the database schema for the application
              in MongoDB.
            </li>
            <li>
              Responsible for the backend real-time features: set up Socket.io
              and handled real-time events (send, receive, etc.).
            </li>
            <li>
              Actively participated in team brainstorming sessions and
              contributed to idea implementation.
            </li>
          </WorkExperience>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Education
        </h2>
        <div className="bg-card p-5 rounded-lg border border-border">
          <h3 className="text-lg font-bold mb-1 text-foreground">
            B.Sc. in Computer Science
          </h3>
          <p className="text-muted-foreground">
            College of Information Technology - The University of Da Nang | 2015
            - 2018
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-10 text-center">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Contact</h2>
        <p className="text-muted-foreground mb-2">
          Open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a
          href="mailto:nguyentatnhac@gmail.com"
          className="inline-block bg-accent text-accent-foreground px-5 py-2 rounded-full font-semibold hover:bg-accent/80 transition"
        >
          Email Me
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://github.com/nguyentatnhac"
          target="_blank"
          aria-label="GitHub"
          className="text-accent hover:text-accent/80 text-2xl"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.184 22 16.437 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/nhac-tat-nguyen"
          target="_blank"
          aria-label="LinkedIn"
          className="text-accent hover:text-accent/80 text-2xl"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default WorkPage;
