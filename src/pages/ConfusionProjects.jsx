import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectProvider } from '../context/ProjectsContext';

const ConfusionProjects = () => {
    
	return (
		<ProjectProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectProvider>
	);
};

export default ConfusionProjects;
