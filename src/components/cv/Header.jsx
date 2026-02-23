import { cvData } from '../../data/cv-data';

const Header = () => {
  const { name, label, email, url, location, summary } = cvData.basics;

  return (
    <header className="flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-bold text-primary">{name}</h1>
      <p className="text-xl text-text mt-2">{label}</p>
      <div className="flex space-x-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
        <a href={`mailto:${email}`} className="hover:text-primary">{email}</a>
        <span>|</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{url}</a>
        <span>|</span>
        <p>{location}</p>
      </div>
      <p className="mt-6 max-w-2xl">{summary}</p>
    </header>
  );
};

export default Header;
