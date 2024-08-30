import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience | Your Name',
  description: 'A summary of my professional work experience and skills.',
};

const WorkPage = () => {
  return (
    <div className="mx-auto py-8 font-sans text-gray-300">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-white">Nhac Tat Nguyen</h1>
        <p className="text-xl text-gray-400">Software Engineer | Berlin, Germany</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-800 text-white">Summary</h2>
        <p className="text-gray-400">A brief, compelling summary of your professional background and key skills.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-800 text-white">Work Experience</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-1 text-white">Job Title</h3>
          <p className="text-gray-500 mb-2">Company Name | Start Date - End Date</p>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Key responsibility or achievement</li>
            <li>Another important contribution</li>
            <li>A project or initiative you led</li>
          </ul>
        </div>
        {/* Add more job entries as needed */}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-800 text-white">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Skill 1</li>
          <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Skill 2</li>
          <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Skill 3</li>
          <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Skill 4</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-800 text-white">Education</h2>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">Degree Name</h3>
          <p className="text-gray-500">University Name | Graduation Year</p>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
