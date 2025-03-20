import { useState } from 'react';
import { BookOpen, Code, Database, Server, Layout, ChevronRight, Github } from 'lucide-react';

function App() {
  const [activeDay, setActiveDay] = useState(1);

  const days = [{
      day: 1,
      title: "Node.js & Express Fundamentals",
      icon: <Server className="w-6 h-6" />,
      topics: [
        "Introduction to Node.js and its architecture",
        "Setting up a Node.js development environment",
        "Understanding npm and package management",
        "Creating a basic Express server",
        "Routing in Express",
        "Middleware concepts and implementation",
        "RESTful API design principles",
        "Building a simple API with Express"
      ],
      resources: [
        { name: "Node.js Documentation", url: "https://nodejs.org/en/docs/" },
        { name: "Express.js Guide", url: "https://expressjs.com/en/guide/routing.html" },
        { name: "RESTful API Design Best Practices", url: "https://restfulapi.net/" }
      ],
      project: "Build a simple REST API with Express that handles CRUD operations for a 'tasks' resource"
    },
    {
      day: 2,
      title: "MongoDB & Mongoose",
      icon: <Database className="w-6 h-6" />,
      topics: [
        "Introduction to MongoDB and NoSQL databases",
        "Setting up MongoDB (local and MongoDB Atlas)",
        "CRUD operations in MongoDB",
        "Introduction to Mongoose ODM",
        "Creating Schemas and Models",
        "Data validation with Mongoose",
        "Relationships in MongoDB (references vs embedding)",
        "Advanced queries and aggregation"
      ],
      resources: [
        { name: "MongoDB University", url: "https://university.mongodb.com/" },
        { name: "Mongoose Documentation", url: "https://mongoosejs.com/docs/" },
        { name: "MongoDB Atlas", url: "https://www.mongodb.com/cloud/atlas" }
      ],
      project: "Connect your Express API to MongoDB using Mongoose and implement proper data models"
    },
    {
      day: 3,
      title: "React Fundamentals",
      icon: <Layout className="w-6 h-6" />,
      topics: [
        "React core concepts (components, props, state)",
        "JSX syntax and expressions",
        "Component lifecycle and hooks",
        "State management with useState and useReducer",
        "Side effects with useEffect",
        "Handling forms and events",
        "Conditional rendering",
        "Lists and keys"
      ],
      resources: [
        { name: "React Documentation", url: "https://react.dev/learn" },
        { name: "React Hooks Reference", url: "https://react.dev/reference/react" },
        { name: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" }
      ],
      project: "Build a React frontend for your tasks API with components for listing, creating, updating, and deleting tasks"
    },
    {
      day: 4,
      title: "Full Stack Integration",
      icon: <Code className="w-6 h-6" />,
      topics: [
        "Connecting React frontend to Express backend",
        "HTTP requests with Axios or Fetch API",
        "Handling asynchronous operations",
        "Error handling and loading states",
        "Authentication and authorization (JWT)",
        "Protected routes in React",
        "Environment variables and configuration",
        "CORS and security considerations"
      ],
      resources: [
        { name: "Axios Documentation", url: "https://axios-http.com/docs/intro" },
        { name: "JWT Introduction", url: "https://jwt.io/introduction" },
        { name: "React Router Documentation", url: "https://reactrouter.com/en/main" }
      ],
      project: "Integrate your React frontend with your Express backend, implement authentication, and create protected routes"
    },
    {
      day: 5,
      title: "Deployment & Advanced Topics",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        "Preparing your application for production",
        "Deployment options (Heroku, Vercel, Netlify, etc.)",
        "Environment configuration for different stages",
        "Performance optimization techniques",
        "Introduction to Redux for state management",
        "Server-side rendering with Next.js",
        "WebSockets for real-time applications",
        "Testing MERN applications"
      ],
      resources: [
        { name: "Heroku Documentation", url: "https://devcenter.heroku.com/" },
        { name: "Redux Documentation", url: "https://redux.js.org/" },
        { name: "Next.js Documentation", url: "https://nextjs.org/docs" }
      ],
      project: "Deploy your full-stack application to a hosting platform and implement at least one advanced feature (e.g., real-time updates, global state management)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">
              <Code className="mr-2" /> MERN Stack in 5 Days
            </h1>
            <a 
              href="https://github.com/topics/mern-stack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5 mr-1" />
              <span>GitHub Resources</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
              <div className="space-y-2">
                {days.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setActiveDay(day.day)}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center justify-between transition-colors ${
                      activeDay === day.day
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="bg-gray-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                        {day.day}
                      </span>
                      <span>{day.title}</span>
                    </div>
                    {activeDay === day.day && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {days.map((day) => (
              <div
                key={day.day}
                className={`bg-gray-800 rounded-lg shadow-lg p-6 ${
                  activeDay === day.day ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    {day.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Day {day.day}: {day.title}</h2>
                    <p className="text-gray-400">MERN Stack Learning Journey</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Topics</h3>
                  <ul className="space-y-2">
                    {day.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-2">
                          {index + 1}
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Resources</h3>
                  <ul className="space-y-2">
                    {day.resources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Daily Project</h3>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <p>{day.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 mt-12 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400">
            Happpy Learning!!!❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;