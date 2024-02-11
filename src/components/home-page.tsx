import { Badge } from "@/components/ui/badge"

export function HomePage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 p-4 md:grid-cols-2 md:gap-10 lg:p-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Name</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Julien THOMAS</h1>
          <p className="text-gray-500 dark:text-gray-400">FullStack Developer</p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Introduction
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome to my profile website! I'm Julien Thomas, a passionate FullStack Developer with expertise in React,
            NodeJS, TypeScript, MongoDB, and Tailwind. I believe in the power of self-training and hands-on experience,
            continuously striving to deliver seamless user experiences while exploring innovative design principles.
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Projects</div>
          <div>
            {/* Project 1: Memo Movies */}
            <div>
              <h3 className="text-sm font-bold tracking-tighter sm:text-lg md:text-xl lg:text-2xl">Memo Movies</h3>
              <p className="text-gray-500 dark:text-gray-400">
                An app designed to discover, search, and comment on movies from TMDB. Technologies used include React,
                Vite, Tailwind, and Axios. Achievements include managing APIs and creating mock backends.
              </p>
            </div>

            {/* Project 2: Recipe Book */}
            <div>
              <h3 className="text-sm font-bold tracking-tighter sm:text-lg md:text-xl lg:text-2xl">Recipe Book</h3>
              <p className="text-gray-500 dark:text-gray-400">
                A React application allowing users to create, search, and delete recipes. Technologies utilized include
                React, Vite, Motion component, and Regex. Achievements include managing JSON data, implementing forms,
                and enabling search functionalities.
              </p>
            </div>

            {/* Project 3: Duck Hunt */}
            <div>
              <h3 className="text-sm font-bold tracking-tighter sm:text-lg md:text-xl lg:text-2xl">Duck Hunt</h3>
              <p className="text-gray-500 dark:text-gray-400">A self-made game inspired by the classic NES game.</p>
            </div>

            {/* Project 4: Villa Capo Di Muro */}
            <div>
              <h3 className="text-sm font-bold tracking-tighter sm:text-lg md:text-xl lg:text-2xl">
                Villa Capo Di Muro
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                A personal website for a rental house created with WordPress. Technologies used include WordPress
                (plugins), CSS, and MySQL.
              </p>
            </div>
          </div>

          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Tech</div>
          <p className="text-gray-500 dark:text-gray-400">React, Vite, Tailwind, Axios.</p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Technical Skills
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge>NodeJS</Badge>
            <Badge>TypeScript</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Tailwind</Badge>
            <Badge>Figma model integration</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Soft Skills
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Strong self-directed organization</Badge>
            <Badge>Public speaking</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Connect with Me
          </div>
          <div className="grid items-start gap-1 text-sm sm:grid-flow-col sm:gap-2">
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4" />
              <span className="text-gray-500 dark:text-gray-400">email@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" />
              <span className="text-gray-500 dark:text-gray-400">+33 6 02 29 11 43</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Education</div>
          <p className="text-gray-500 dark:text-gray-400">IronHack Web Development bootcamp (Nov 2023 - Feb 2024)</p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Languages</div>
          <p className="text-gray-500 dark:text-gray-400">French (native), English (fluent)</p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Hobbies</div>
          <p className="text-gray-500 dark:text-gray-400">Enthusiastic about iOS features.</p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Professional Experience
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Head of Saint-Gobain Solution North & East (Sept 2020 - Nov 2023)
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:gap-2">
        <div className="overflow-hidden rounded-lg">
          <img
            alt="Cover image"
            className="h-60 w-full object-cover md:h-96"
            height="300"
            src="../../public/static/images/profile-picture.jpg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />

          <img src="../assets/profile-picture.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
