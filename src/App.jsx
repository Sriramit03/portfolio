import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';
import ScrollToTop from './components/ScrollToTop.jsx';
import UseScrollToTop from './hooks/useScrollToTop.jsx';

const About = lazy(()=>import('./pages/ConfusionAbout.jsx'))
const Contact = lazy(()=>import('./pages/ConfusionContact.jsx'))
const Home = lazy(()=>import('./pages/ConfusionHome.jsx'))
const Projects = lazy(()=>import('./pages/ConfusionProjects.jsx'))
const SingleProject = lazy(()=>import('./pages/ConfusionSingleProject.jsx'))
import './App.css'
const App = () => {
  return (
    <AnimatePresence>
      <div className='bg-secondary-light dark:bg-primary-dark transition duration-300'>
      <Router>
        <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
               <Routes>
                <Route path='/'element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/single-project" element={<SingleProject />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />}/>
               </Routes>
          </Suspense>
          <AppFooter />
      </Router>
      <UseScrollToTop />
      </div>
    </AnimatePresence>
  )
}

export default App