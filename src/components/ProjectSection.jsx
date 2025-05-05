import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BiltzBite Food Application",
    description:
      "This UI/UX Design Workshop will introduce you to designing a healthy food app for those needing help finding daily meal ideas.",
    image: "/project/BiltzBite.png",
    tags: ["Figma", "VS Code", "Canva"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "MY PLACE Website",
    description:
      "This is my fourth year demo-project where the website books and operates various sports fields within the university, and more features",
    image: "/project/Tester.png",
    tags: ["Figma", "VS Code", "Canva", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Try to Fly Application",
    description:
      "This UI/UX design workshop will help you search, book, and view flight details via an application.",
    image: "/project/TrytoFly.png",
    tags: ["Figma", "VS Code", "Canva"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellat
          perferendis sed exercitationem vel eos maxime amet deleniti illum
          explicabo!
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a href="https://github.com/65160386" 
            target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github</a>
        </div>
      </div>
    </section>
  );
};
