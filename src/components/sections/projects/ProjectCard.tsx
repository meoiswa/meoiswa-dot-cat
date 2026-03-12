import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'react-bootstrap-icons';
import { translations } from '../../../lib/translations';
import { useLanguage } from '../../../context/LanguageContext';

export interface Project {
  id: string | number;
  title: string;
  description: string | null;
  language: string;
  topics: string[];
  githubUrl: string;
  liveUrl?: string | null;
  stars: number;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <Card className='flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl bg-card text-card-foreground'>
      <CardHeader className='flex-grow justify-between'>
        <div className='flex items-start gap-2'>
          <CardTitle className='font-headline text-xl text-primary flex-1 break-words'>
            {project.title}
          </CardTitle>
          {project.stars > 0 && (
            <Badge key='stars' variant='outlineAccent' className='shrink-0'>
              ★ {project.stars}
            </Badge>
          )}
          {project.language && (
            <Badge
              key='language'
              variant='outlineSecondary'
              className='shrink-0'
            >
              {project.language}
            </Badge>
          )}
        </div>
        {(project.topics.length > 0) && (
          <div className='mt-2 flex flex-row flex-grow flex-wrap gap-1 justify-center'>
            {project.topics.map((tech) => (
              <Badge key={tech} variant='secondary'>
                {tech}
              </Badge>
            ))}
          </div>
        )}
        <CardDescription className='text-card-foreground/70 min-h-[40px] text-ellipsis mt-2'>
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-start gap-2 border-t p-4 pt-4 mt-auto'>
        <Button asChild variant='outline' size='sm'>
          <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
            <Github className='h-4 w-4' /> GitHub
          </a>
        </Button>
        {project.liveUrl && (
          <Button asChild variant='outlineAccent' size='sm'>
            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
              <Globe className='h-4 w-4' />{' '}
              {translations[language].official_site}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
