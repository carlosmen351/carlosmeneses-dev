import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/Projects';
import CVPage from './pages/CVPage';
import CustomCursor from './components/CustomCursor';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="bg-background text-text min-h-screen">
      {isDesktop && <CustomCursor />}
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;