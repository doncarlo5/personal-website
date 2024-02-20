import React from "react"
import Autoplay from "embla-carousel-autoplay"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "react-router-dom"

import { Button, buttonVariants } from "@/components/ui/button"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"
import { Separator } from "../components/ui/separator"

export function HomePage() {
  const [api, setApi] = React.useState<CarouselApi>()
  // @ts-ignore
  const [current, setCurrent] = React.useState(0)
  // @ts-ignore
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

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
                    <p className="text-sm text-muted-foreground">Just a special web dev.</p>
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
                <AnchorLink className={buttonVariants({ variant: "outline" })} href="#projects">
                  Projects
                </AnchorLink>

                <AnchorLink className={buttonVariants({ variant: "outline" })} href="#contact">
                  Contact me
                </AnchorLink>
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
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid justify-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">my stack</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the technologies and tools I use to bring my web projects to life
                </p>
              </div>
            </div>
            <div className="max-w-screen-md">
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
                      <IconBxlNodejs className="h-6 w-6 animate-wave group-hover:animate-none" />
                      <span>Node.js</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Thank you Ryan Dahl. Learning Javascript is so usefull. Frontend and Backend can finally bring back
                    together. 🚀
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
                    Vital. Code comprehension, get bounce easier in a new project. It's a matter of reading code. 📚
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
                    Manipulable database. Collection is the art of MongoDB. Let's store some data ! 📦
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
                  <AccordionContent>No need to introduce it. Shortcut to CSS, it's a must have. 🎨</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <section id="projects">
                  <h2 id="projects" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    my projects
                  </h2>
                  <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a passionate web developer with a love for creating stunning and user-friendly websites. My goal
                    is to make the web a more beautiful and accessible place for everyone.
                  </p>
                </section>
              </div>
            </div>
            <div>
              <div className="flex flex-row-reverse justify-center">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full max-w-xs"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                            <img
                              className="h-full w-full object-cover"
                              src="public/workout-journal-pic.png"
                              alt="workout-journal-pic"
                            />
                            <Separator className="my-4" />
                            <Link
                              className={buttonVariants({ variant: "link" })}
                              to="https://workout-journal-pro.netlify.app/"
                            >
                              Workout Journal
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                            <img
                              className="h-full w-full object-cover"
                              src="public/memo-movies-pic.png"
                              alt="memo-movies-pic"
                            />
                            <Separator className="my-4" />
                            <Link
                              className={buttonVariants({ variant: "link" })}
                              to="https://memomovies-doncarlos.netlify.app/"
                            >
                              Memo Movies
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                            <img
                              className="h-full w-full object-cover"
                              src="public/recipe-book-pic.png"
                              alt="recipe-book-pic"
                            />
                            <Separator className="my-4" />
                            <Link
                              className={buttonVariants({ variant: "link" })}
                              to="https://recipe-book-app-nine.vercel.app/"
                            >
                              Recipe Book
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                            <img
                              className="h-full w-full object-cover"
                              src="public/duck-hunt-pic.png"
                              alt="duck-hunt-pic"
                            />
                            <Separator className="my-4" />
                            <Link
                              className={buttonVariants({ variant: "link" })}
                              to="https://duck-hunt-seven.vercel.app/"
                            >
                              Duck Hunt
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">Project 2</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-1 sm:max-w-4xl md:gap-12 lg:max-w-5xl">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Features used in my projects</h3>
                <div className=" grid-cols-4 justify-center">
                  <Collapsible>
                    <CollapsibleTrigger className={`${buttonVariants({ variant: "ghost" })}`}>
                      "dependencies"
                      <IconChevronCompactDown />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="m-3 gap-2 space-x-2 space-y-2">
                      <Badge>Radix UI library</Badge>
                      <Badge>shadcn/ui</Badge>
                      <Badge>Axios</Badge>
                      <Badge>Lucid React</Badge>
                      <Badge>React Router Dom</Badge>
                      <Badge>Morgan</Badge>
                      <Badge>Jsonwebtoken</Badge>
                      <Badge>Express</Badge>
                      <Badge>Bcrypt</Badge>
                      <Badge>Dotenv</Badge>{" "}
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible>
                    <CollapsibleTrigger className={`${buttonVariants({ variant: "ghost" })}`}>
                      "devDependencies"
                      <IconChevronCompactDown />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="m-3 gap-2 space-x-2 space-y-2">
                      <Badge variant="outline">Prettier sort import</Badge>
                      <Badge variant="outline">Typescript Eslint</Badge>
                      <Badge variant="outline">Prettier Tailwind CSS</Badge>
                      <Badge variant="outline">Autoprefixer</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                      <Badge variant="outline">Nodemon</Badge>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              {/* <div className="grid gap-1">
                <h3 className="text-lg font-bold">Experience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Developed various web applications and worked on multiple client projects.
                </p>
              </div> */}
              {/* <div className="grid gap-1">
                <h3 className="text-lg font-bold">Education</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Bachelor's Degree in Computer Science</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid justify-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <section id="contact">
                <div className="space-y-2">
                  <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">reach me</h2>
                </div>
                <div className="grid gap-1">
                  <div>
                    <div className="flex flex-col items-center gap-2">
                      <Link
                        to="https://github.com/doncarlo5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonVariants({ variant: "outline" })} group`}
                      >
                        <IconGithub className="h-6 w-6 group-hover:animate-[wave_0.8s_ease-in-out_1]" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/julienthomaspro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonVariants({ variant: "outline" })} group`}
                      >
                        <IconLogoLinkedin className="h-6 w-6 group-hover:animate-[wave_0.8s_ease-in-out_1]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
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

function IconGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
  )
}

function IconLogoLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
    </svg>
  )
}

function IconChevronCompactDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" {...props}>
      <path
        fillRule="evenodd"
        d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z"
      />
    </svg>
  )
}
