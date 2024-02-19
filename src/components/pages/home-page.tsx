import { Link } from "react-router-dom"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"

export function HomePage() {
  return (
    <div>
      <div className="bg-gray-50/80 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-12 lg:gap-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center bg-cover">
                  <img
                    alt="Profile Picture"
                    className="h-16 w-16 overflow-hidden rounded-full"
                    src="/static/images/profile-pic.jpg"
                  />
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Julien THOMAS</h1>

                <div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Just a simple web dev.</p>
                  </div>
                  <Separator className="my-4" />
                </div>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a French web developer with a penchant for elegant design and a fascination for all things tech. I
                  thrive on the challenge of turning code into visually stunning creations. Join me on this journey as I
                  seek new opportunities to bring my skills to the forefront of innovation! 💡{" "}
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="/"
                >
                  My Projects
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="/"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">about me</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a passionate web developer with a love for creating stunning and user-friendly websites. My goal
                  is to make the web a more beautiful and accessible place for everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-1 sm:max-w-4xl md:gap-12 lg:max-w-5xl">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Skills</h3>
                <div className="flex justify-center gap-2">
                  <Badge>React</Badge>
                  <Badge>NodeJS</Badge>
                  <Badge>Typescript</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>MongoDB</Badge>
                </div>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Experience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Developed various web applications and worked on multiple client projects.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Education</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Bachelor's Degree in Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Stack</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the technologies and tools I use to bring my web projects to life.
                </p>
              </div>
            </div>
            <Accordion className="group" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <IconReact className="h-6 w-6 animate-spin group-hover:animate-none" />
                    <span>React</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  State lifting, props, context, what a powerfull framework. I just love it. 🫶
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="group" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <IconBxlNodejs className="animate-wave h-6 w-6 group-hover:animate-none" />
                    <span>Node.js</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Thank you Ryan Dahl. Learning Javascript is so usefull. Frontend and Backend can finally bring back
                  together.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="group" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <IconTypescript className="hover:duration-1)00 h-6 w-6 animate-[bounce_2s_ease-in-out_infinite] hover:transition group-hover:animate-none" />
                    <span>Typescript</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Vital. Code comprehension, get bounce easier in a new project. It's a matter of reading code.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="group" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <IconBxlMongodb className="animate h-6 w-6 transition duration-150 group-hover:animate-none" />
                    <span>MongoDB</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Manipulable database. Collection is the art of MongoDB. Let's store some data !
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion className="group" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <IconBxlTailwindCss className="animate h-6 w-6 transition duration-150 group-hover:animate-none" />
                    <span>Tailwind CSS</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  No need to introduce it. database. Collection is the art of MongoDB. Let's store some data !
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mx-auto grid max-w-sm items-start gap-1 sm:max-w-4xl md:gap-12 lg:max-w-5xl lg:grid-cols-2">
              <div className="flex items-center space-x-2">
                <CodepenIcon className="h-6 w-6" />
                <span>CSS3</span>
              </div>
              <div className="flex items-center space-x-2">
                <CodepenIcon className="h-6 w-6" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <DribbbleIcon className="h-6 w-6" />
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2">
                <CodepenIcon className="h-6 w-6" />
                <span>Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <WindIcon className="h-6 w-6" />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function CodepenIcon(props: any) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}

function DribbbleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

function WindIcon(props: any) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}

function IconReact(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 34 32" fill="currentColor" height="1em" width="1em" {...props}>
      <path fill="currentColor" d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z" />
      <path
        fill="currentColor"
        d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
      />
    </svg>
  )
}

function IconBxlNodejs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
    </svg>
  )
}

function IconTypescript(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 -2 12 20" height="auto" width="100%" {...props}>
      <path
        stroke="currentColor"
        d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3h-1A1.5 1.5 0 018.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5z"
      />
    </svg>
  )
}

function IconBxlMongodb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
    </svg>
  )
}

function IconBxlTailwindCss(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M18.5 9.51a4.22 4.22 0 01-1.91-1.34A5.77 5.77 0 0012 6a4.72 4.72 0 00-5 4 3.23 3.23 0 013.5-1.49 4.32 4.32 0 011.91 1.35A5.77 5.77 0 0017 12a4.72 4.72 0 005-4 3.2 3.2 0 01-3.5 1.51zm-13 4.98a4.22 4.22 0 011.91 1.34A5.77 5.77 0 0012 18a4.72 4.72 0 005-4 3.23 3.23 0 01-3.5 1.49 4.32 4.32 0 01-1.91-1.35A5.8 5.8 0 007 12a4.72 4.72 0 00-5 4 3.2 3.2 0 013.5-1.51z" />
    </svg>
  )
}
