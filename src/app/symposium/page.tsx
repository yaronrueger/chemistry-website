import fs from 'fs';
import path from 'path';
import { Header } from '@/app/Header';
import { Footer } from '@/app/Footer';

const SymposiumPage = () => {
  const programmesDirectory = path.join(process.cwd(), 'public', 'symposiumprogrammes');
  const programmeFiles = fs.readdirSync(programmesDirectory).filter(file => file.endsWith('.pdf'));

  const programmes = programmeFiles.map(file => {
    const yearMatch = file.match(/^(\d{4})/);
    const year = yearMatch ? yearMatch[1] : 'N/A';
    return {
      year,
      fileName: file,
      url: `/symposiumprogrammes/${file}`
    };
  }).sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="theme-bg-primary theme-text-primary min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24 flex-grow">
        <h2 className="text-4xl font-bold text-center mb-12 theme-text-primary">Symposium Programmes</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center theme-text-secondary mb-6">
            Welcome to the Symposium Programmes page! Here, you can explore the programmes from previous years and download the registration form for the upcoming Symposium 2025.
          </p>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Registration-Symposium-2025.pdf"
                download
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Download Registration Form (PDF)
              </a>
              <a
                href="/Book of Abstracts.pdf"
                download
                className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Download Book of Abstracts (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="theme-bg-secondary shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 theme-border theme-bg-accent text-left text-xs font-semibold theme-text-secondary uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-5 py-3 border-b-2 theme-border theme-bg-accent text-left text-xs font-semibold theme-text-secondary uppercase tracking-wider">
                    Programme
                  </th>
                  <th className="px-5 py-3 border-b-2 theme-border theme-bg-accent"></th>
                </tr>
              </thead>
              <tbody>
                {programmes.map(programme => (
                  <tr key={programme.fileName}>
                    <td className="px-5 py-5 border-b theme-border theme-bg-secondary text-sm">
                      <p className="theme-text-primary whitespace-no-wrap">{programme.year}</p>
                    </td>
                    <td className="px-5 py-5 border-b theme-border theme-bg-secondary text-sm">
                      <p className="theme-text-primary whitespace-no-wrap">{programme.fileName}</p>
                    </td>
                    <td className="px-5 py-5 border-b theme-border theme-bg-secondary text-sm text-right">
                      <a
                        href={programme.url}
                        download
                        className="theme-text-accent hover:opacity-80 font-semibold"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SymposiumPage;
