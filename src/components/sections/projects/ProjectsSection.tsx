import { useEffect, useState } from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExclamationTriangle, ArrowRight } from 'react-bootstrap-icons';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { Project, ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const username = 'meoiswa';
  const githubProfileReposUrl = `https://github.com/${username}?tab=repositories`;
  const { language } = useLanguage();
  const t = translations[language];
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=10`,
        );
        if (!response.ok) {
          setError(`GitHub API error: ${response.status} ${response.statusText}`);
          setProjectsData([]);
          return;
        }
        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
          setError('Unexpected response from GitHub API');
          setProjectsData([]);
          return;
        }
        const originalRepos = data.filter(
          (repo) => !(repo as Record<string, unknown>).fork,
        );
        const topFive = originalRepos.slice(0, 5);
        setProjectsData(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          topFive.map((repo: any) => {
            const nameParts = repo.name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ');
            const title = nameParts
              .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            let technologies: string[] = [];
            if (repo.language) technologies.push(repo.language);
            if (repo.topics && Array.isArray(repo.topics)) {
              technologies.push(...repo.topics.slice(0, technologies.length > 0 ? 2 : 3));
            }
            technologies = [...new Set(technologies)].slice(0, 3);
            return {
              id: repo.id,
              title,
              description: repo.description || 'No description available for this project.',
              technologies,
              githubUrl: repo.html_url,
              liveUrl: repo.homepage || null,
            };
          }),
        );
        setError(null);
      } catch {
        setError('Failed to fetch GitHub repositories.');
        setProjectsData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="container mx-auto px-4 w-full bg-background py-8">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-48">
          <p className="text-lg font-semibold">{t.projects_loading}</p>
        </div>
      ) : error ? (
        <div className="text-center py-12 text-foreground/80">
          <ExclamationTriangle className="mx-auto h-12 w-12 text-primary mb-4" />
          <h3 className="font-headline text-xl font-semibold text-primary mb-2">{t.projects_error_title}</h3>
          <p>{error}</p>
          <p>
            {t.projects_error_body}{' '}
            <a href={githubProfileReposUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              {t.projects_error_link}
            </a>{' '}
            {t.projects_error_suffix}
          </p>
        </div>
      ) : projectsData.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* "View all" card */}
          <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">{t.projects_explore_title}</CardTitle>
              <CardDescription className="text-card-foreground/70 min-h-[40px] mt-2">
                {t.projects_explore_body}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-start gap-2 border-t p-4 pt-4 mt-auto">
              <Button
                asChild
                variant="outlineSecondary"
                size="sm"
                className="w-full"
              >
                <a href={githubProfileReposUrl} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-center">
                    <Github className="mr-2 h-4 w-4" /> {t.projects_view_all}{' '}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="text-center py-12 text-foreground/80">
          <ExclamationTriangle className="mx-auto h-12 w-12 text-primary mb-4" />
          <h3 className="font-headline text-xl font-semibold text-primary mb-2">{t.projects_empty_title}</h3>
          <p>{t.projects_empty_body}</p>
          <p>
            {t.projects_error_body}{' '}
            <a href={githubProfileReposUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              {t.projects_empty_link}
            </a>{' '}
            {t.projects_empty_suffix}
          </p>
        </div>
      )}
    </section>
  );
}
