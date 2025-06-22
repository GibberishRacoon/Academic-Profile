import { useState } from "react";
import {
  FaBook,
  FaFileAlt,
  FaExternalLinkAlt,
  FaFilter,
  FaSearch,
} from "react-icons/fa";

const MyAchievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("wszystkie");
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      id: 1,
      title: "Propagandowy obraz świata społecznego w piosenkach dziecięcych",
      type: "book",
      year: "2023",
      publisher: "Wydawnictwo Adam Marszałek",
      url: "https://sklep.marszalek.com.pl/pl/glowna/5785-propagandowy-obraz-swiata-spolecznego-w-piosenkach-dzieciecych.html",
      description:
        "Analiza sposobów przedstawiania rzeczywistości społecznej w piosenkach dla dzieci oraz ich wpływ na kształtowanie światopoglądu młodego odbiorcy.",
    },
    {
      id: 2,
      title:
        "Nauczycielskie koncepcje dziecięcej pracy grupowej w klasach początkowych",
      type: "book",
      year: "2022",
      publisher: "Wydawnictwo Adam Marszałek",
      url: "https://sklep.marszalek.com.pl/pl/glowna/4694-nauczycielskie-koncepcje-dzieciecej-pracy-grupowej-w-klasach-poczatkowych.html",
      description:
        "Badanie nad sposobami organizacji pracy grupowej w klasach początkowych oraz jej wpływem na rozwój społeczny i poznawczy dzieci.",
    },
  ];

  const publications = [
    {
      id: 3,
      title: "Artykuł w Problemach Wczesnej Edukacji",
      type: "article",
      year: "2024",
      journal: "Problemy Wczesnej Edukacji",
      url: "https://czasopisma.bg.ug.edu.pl/index.php/pwe/article/view/7253",
      description:
        "Badania nad współczesnymi wyzwaniami w edukacji przedszkolnej i wczesnoszkolnej.",
    },
    {
      id: 4,
      title: "Publikacja w PWE - zagadnienia dydaktyczne",
      type: "article",
      year: "2023",
      journal: "Problemy Wczesnej Edukacji",
      url: "https://czasopisma.bg.ug.edu.pl/index.php/pwe/article/view/4161",
      description:
        "Analiza metod dydaktycznych w pracy z dziećmi w wieku przedszkolnym.",
    },
    {
      id: 5,
      title: "Artykuł w CEJSH - perspektywy pedagogiczne",
      type: "article",
      year: "2023",
      journal: "CEJSH Portal",
      url: "https://cejsh.icm.edu.pl/cejsh/element/bwmeta1.element.desklight-1c5dc897-3db3-471a-83ed-d094de271d1c",
      description:
        "Przegląd współczesnych tendencji w pedagogice wczesnoszkolnej.",
    },
    {
      id: 6,
      title: "Publikacja w Ars Educandi",
      type: "article",
      year: "2023",
      journal: "Ars Educandi",
      url: "https://czasopisma.bg.ug.edu.pl/index.php/arseducandi/article/view/5079",
      description:
        "Badania nad efektywnością różnych metod edukacyjnych w pracy z dziećmi.",
    },
    {
      id: 7,
      title: "Artykuł naukowy w CEJSH",
      type: "article",
      year: "2022",
      journal: "CEJSH Portal",
      url: "https://cejsh.icm.edu.pl/cejsh/element/ojs-doi-10_18778_2450-4491_17_06",
      description: "Interdyscyplinarne podejście do zagadnień edukacyjnych.",
    },
    {
      id: 8,
      title: "Educational Role of Language Journal",
      type: "article",
      year: "2023",
      journal: "ERL Journal",
      url: "https://educationalroleoflanguage.org/erl-journal/erl-journal-issues/volume-10/2023v02p08/",
      description:
        "Międzynarodowa publikacja dotycząca roli języka w procesie edukacyjnym.",
    },
    {
      id: 9,
      title: "Studia i Badania - Ateneum",
      type: "article",
      year: "2023",
      journal: "Studia i Badania",
      url: "https://ateneum.edu.pl/assets/Uploads/studiaibadania/004Pilecka2023.pdf",
      description:
        "Badania nad współczesnymi metodami nauczania w szkole podstawowej.",
    },
    {
      id: 10,
      title: "Studia i Badania - publikacja 2024",
      type: "article",
      year: "2024",
      journal: "Studia i Badania",
      url: "https://ateneum.edu.pl/assets/Uploads/studiaibadania/studia_1_2024/003_2024_pilecka.pdf",
      description: "Najnowsze badania w dziedzinie pedagogiki wczesnoszkolnej.",
    },
    {
      id: 11,
      title: "Segregator 2 - SIBN Pedagogika",
      type: "article",
      year: "2017",
      journal: "Studia i Badania Naukowe - Pedagogika",
      url: "https://ateneum.edu.pl/assets/Uploads/studiaibadania/segregator2-sibn-1-2017-pedagogika.pdf",
      description:
        "Fundamentalne badania z zakresu teorii i praktyki pedagogicznej.",
    },
  ];

  const allWorks = [...books, ...publications];

  const filteredWorks = allWorks.filter((work) => {
    const matchesCategory =
      selectedCategory === "wszystkie" || work.type === selectedCategory;
    const matchesSearch =
      work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const WorkCard = ({ work }) => (
    <div className="bg-[var(--color-bg)] border border-[var(--color-primary)]/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-lg ${
            work.type === "book"
              ? "bg-[var(--color-accent)] text-white"
              : "bg-[var(--color-gold)] text-[var(--color-primary)]"
          }`}
        >
          {work.type === "book" ? (
            <FaBook size={20} />
          ) : (
            <FaFileAlt size={20} />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-snug">
              {work.title}
            </h3>
            <span className="text-sm font-medium text-[var(--color-copper)] bg-[var(--color-gold)]/20 px-2 py-1 rounded-full whitespace-nowrap">
              {work.year}
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-sm text-[var(--color-primary)]/80 font-medium">
              {work.type === "book" ? work.publisher : work.journal}
            </p>
            <p className="text-sm text-[var(--color-primary)]/70 leading-relaxed">
              {work.description}
            </p>
          </div>

          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-copper)] font-medium text-sm transition-all duration-300 hover:gap-3"
          >
            <span>Zobacz publikację</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[var(--color-bg)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-bg-section)] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-tight mb-4 sm:mb-6">
              Mój{" "}
              <span className="inline-block bg-[var(--color-accent)] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg">
                dorobek naukowy
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-primary)]/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ponad 30 lat badań, publikacji i pracy naukowej w dziedzinie
              pedagogiki i edukacji wczesnoszkolnej
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-accent)] mb-1">
                  {books.length}
                </div>
                <div className="text-sm sm:text-base text-[var(--color-primary)]/70 font-medium">
                  Książki
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-copper)] mb-1">
                  {publications.length}
                </div>
                <div className="text-sm sm:text-base text-[var(--color-primary)]/70 font-medium">
                  Artykuły
                </div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-gold)] mb-1">
                  30+
                </div>
                <div className="text-sm sm:text-base text-[var(--color-primary)]/70 font-medium">
                  Lat doświadczenia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-[var(--color-bg-section)]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <FaSearch
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-primary)]/50"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Szukaj publikacji..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-primary)]/30 rounded-lg bg-[var(--color-bg)] text-[var(--color-primary)] placeholder-[var(--color-primary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <FaFilter
                  className="text-[var(--color-primary)]/70"
                  size={16}
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-[var(--color-primary)]/30 rounded-lg bg-[var(--color-bg)] text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all duration-300 cursor-pointer"
                >
                  <option value="wszystkie">Wszystkie</option>
                  <option value="book">Książki</option>
                  <option value="article">Artykuły</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredWorks.length > 0 ? (
              <>
                <div className="text-center mb-8">
                  <p className="text-[var(--color-primary)]/70">
                    Znaleziono {filteredWorks.length}{" "}
                    {filteredWorks.length === 1
                      ? "publikację"
                      : filteredWorks.length < 5
                        ? "publikacje"
                        : "publikacji"}
                  </p>
                </div>

                <div className="grid gap-6 md:gap-8">
                  {filteredWorks.map((work) => (
                    <WorkCard key={work.id} work={work} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-bg-section)] rounded-full">
                  <FaSearch
                    className="text-[var(--color-primary)]/50"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                  Brak wyników
                </h3>
                <p className="text-[var(--color-primary)]/70">
                  Nie znaleziono publikacji spełniających kryteria wyszukiwania.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[var(--color-bg-section)] to-[var(--color-bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Zainteresowany współpracą?
            </h2>
            <p className="text-lg text-[var(--color-primary)]/80 mb-8">
              Zapraszam do kontaktu w sprawie projektów badawczych, publikacji
              naukowych czy współpracy dydaktycznej.
            </p>
            <button className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[var(--color-copper)] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
              Skontaktuj się ze mną
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAchievements;
