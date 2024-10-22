import React from 'react'
import ProjectDescription from '../components/projects/ProjectDescription';
import ProjectDetailsHeader from '../components/projects/ProjectDetailsHeader'
import { SingleContextProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
const SingleProject = () => {
  return (
    <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
            <SingleContextProvider>
                <ProjectDetailsHeader />
                <ProjectDescription />
            </SingleContextProvider>
        </motion.div>
  )
}

export default SingleProject