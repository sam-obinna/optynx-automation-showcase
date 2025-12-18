import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Building2, Zap, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolioData";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const categories = ["All", "E-commerce", "Human Resources", "Marketing", "Finance", "Logistics", "Customer Service"];

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("project");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const selectedProject = portfolioItems.find(item => item.id === selectedId);
  
  const filteredProjects = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Project Detail View */}
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl animate-fade-in" style={{ boxShadow: 'var(--shadow-xl)' }}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1.5 bg-primary rounded-full text-xs font-medium text-white mb-3">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  {selectedProject.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Meta Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="card-elevated p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Client</span>
                    </div>
                    <p className="font-semibold">{selectedProject.client}</p>
                  </div>
                  <div className="card-elevated p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Timeline</span>
                    </div>
                    <p className="font-semibold">{selectedProject.timeline}</p>
                  </div>
                </div>

                {/* Problem / Solution / Results */}
                <div className="space-y-6 mb-8">
                  <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                    <h3 className="font-semibold text-destructive mb-2">The Challenge</h3>
                    <p className="text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold text-primary mb-2">Our Solution</h3>
                    <p className="text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                    <h3 className="font-semibold text-green-600 mb-2">The Results</h3>
                    <p className="text-foreground font-medium">{selectedProject.results}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary-dark rounded-full group">
                  <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Projects Grid View */}
      <main className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">OUR WORK</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of automation solutions that have transformed businesses across industries
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-smooth ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="px-3 py-2 rounded-full bg-destructive/10 text-destructive hover:bg-destructive/20 transition-smooth"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects?project=${project.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <article 
                  className="card-elevated overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-primary rounded-full text-xs font-medium text-white">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.problem}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
                        {project.results.split(",")[0]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.timeline}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 md:mt-20 animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to see similar results for your business?
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary-dark rounded-full group">
              <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
