import Header from '../components/cv/Header';
import Experience from '../components/cv/Experience';
import Education from '../components/cv/Education';
import Skills from '../components/cv/Skills';
import SeoHead from '../components/SeoHead';

const CVPage = () => {
  return (
    <>
      <SeoHead
        title="CV - Carlos Meneses"
        description="Currículum Vitae de Carlos Meneses, Senior Frontend Developer."
        type="profile"
      />
      <div id="cv-container" className="max-w-4xl mx-auto p-4 sm:p-8 bg-background text-text rounded-lg shadow-lg">
        <Header />
        <Experience />
        <Skills />
        <Education />
      </div>
    </>
  );
};

export default CVPage;
