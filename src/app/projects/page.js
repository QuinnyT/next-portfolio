
import ProjectsSection from "@/app/components/ProjectsSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* <Navbar /> */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
