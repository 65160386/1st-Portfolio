import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";




export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */} 
        <Navbar />


        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
            {/* ส่ง email ไม่ได้, ไม่ได้ add animation pop-up หลังจากส่ง email สำเร็จ  
            how to animate pop-up:
            1. add folder ui -> add 2 files toast, toaster
            2. add folder hooks -> add 1 file use-toasts*/}

        </main>
        {/* Footer */}
        <Footer />
    </div>
    )
}