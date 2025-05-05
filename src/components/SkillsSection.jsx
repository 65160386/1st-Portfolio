import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 45, category: "frontend" },
  { name: "JavaScript", level: 20, category: "frontend" },
  { name: "React", level: 7, category: "frontend" },
  { name: "Tailwind CSS", level: 3, category: "frontend" },

  //Backend
  { name: "Node.js", level: 30, category: "backend" },
  { name: "Express", level: 25, category: "backend" },
  { name: "Mysql", level: 30, category: "backend" },

  //Tool
  { name: "Git/GitHub", level: 22, category: "tools" },
  { name: "Docker", level: 10, category: "tools" },
  { name: "Figma", level: 40, category: "tools" },
  { name: "VS Code", level: 50, category: "tools" },
  { name: "Oracle VirtualBox", level: 45, category: "tools" },

  //etc
  { name: "Window Admin", level: 25, category: "etc" },
  { name: "Linux", level: 15, category: "etc" },
  { name: "Data Analytics", level: 35, category: "etc" },
  { name: "Project management", level: 15, category: "etc" },
  { name: "System Analysis and Design", level: 20, category: "etc" },
  { name: "Valorant", level: 50, category: "etc" },
  { name: "PUBG", level: 70, category: "etc" },
  { name: "FC Online", level: 65, category: "etc" },
];

const categories = ["all", "frontend", "backend", "tools", "etc"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills 🤡</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
