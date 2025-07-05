import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaBookOpen,
  FaHeart,
  FaTheaterMasks,
  FaMusic,
  FaShip,
  FaChild,
  FaHandshake,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaUtensils,
  FaFilm,
  FaMap,
} from "react-icons/fa";
import drawingImage from "../assets/drawing.jpg"; // Add your drawing image path here

const AboutMeSection = () => {
  const educationMilestones = [
    {
      year: "2012",
      title: "Wczesna edukacja z logopedią",
      institution: "Uniwersytet Gdański",
    },
    {
      year: "2022",
      title: "Studia doktoranckie z zakresu pedagogiki",
      institution: "Uniwersytet Gdański",
    },
    {
      year: "2024",
      title: "Pedagogika przedszkolna i wczesnoszkolna",
      institution: "Uniwersytet Gdański",
    },
  ];

  const researchInterests = [
    "Konstruktywistyczne metody edukacyjne",
    "Analiza oferty kulturalnej dla dzieci",
    "Pedagogika wczesnej edukacji",
    "Praca grupowa w klasach początkowych",
  ];

  const collaborations = [
    "Trójmiejskie przedszkola i szkoły podstawowe",
    "Poradnie psychologiczno-pedagogiczne",
    "Ośrodek Profilaktyki i Terapii Uzależnień w Gdyni",
    "Polskie Towarzystwo Pedagogiczne",
    "Educational Role of Language Association",
  ];

  const personalInterests = [
    { icon: FaMusic, text: "Śpiewanie muzyki estradowej" },
    { icon: FaBookOpen, text: "Czytanie kryminałów i literatury faktu" },
    { icon: FaTheaterMasks, text: "Chodzenie do teatrów muzycznych" },
    { icon: FaShip, text: "Żeglowanie i wędrówki" },
  ];

  return (
    <div className="w-full bg-[var(--color-bg)] min-h-screen">
      {/* Hero Introduction */}
      <section className="bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-bg-section)] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-tight mb-4 sm:mb-6">
              <span className="inline-block bg-[var(--color-accent)] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg">
                O mnie
              </span>
            </h1>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-[var(--color-primary)]/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                  dr Małgorzata Pilecka, prof. AkAt
                </h3>
                <div className="text-[var(--color-primary)]/80 space-y-1">
                  <p>Katedra Pedagogiki Przedszkolnej i Wczesnoszkolnej</p>
                  <p>Wydział Studiów Edukacyjnych</p>
                  <p className="font-semibold">Akademia Ateneum w Gdańsku</p>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-[var(--color-primary)] leading-relaxed mb-6">
                Jestem pedagogiem wczesnej edukacji oraz pracownikiem
                naukowo-dydaktycznym w
                <span className="font-semibold text-[var(--color-accent)]">
                  {" "}
                  Akademii Ateneum w Gdańsku
                </span>
                , zatrudnionym na stanowisku profesora uczelni.
              </p>

              {/* Contact Information */}
              <div className="bg-[var(--color-bg-section)]/40 rounded-xl p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-[var(--color-accent)] flex-shrink-0" />
                      <div>
                        <div className="font-medium text-[var(--color-primary)]">
                          ul. 3 Maja 25a
                        </div>
                        <div className="text-[var(--color-primary)]/70">
                          80-802 Gdańsk
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-[var(--color-accent)] flex-shrink-0" />
                      <span className="text-[var(--color-primary)] font-mono select-all">
                        503{"\u00A0"}372{"\u00A0"}710
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-[var(--color-accent)] flex-shrink-0" />
                      <span className="text-[var(--color-primary)] font-mono select-all break-all">
                        m.pilecka{"\u0040"}ateneum.edu.pl
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaExternalLinkAlt className="text-[var(--color-accent)] flex-shrink-0" />
                      <a
                        href="https://orcid.org/0000-0002-4815-2949"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        ORCID: 0000-0002-4815-2949
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Journey */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4 flex items-center justify-center gap-3">
                <FaGraduationCap className="text-[var(--color-accent)]" />
                Moja droga edukacyjna
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {educationMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[var(--color-primary)]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-2 leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="text-[var(--color-primary)]/70 text-sm">
                    {milestone.institution}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[var(--color-bg-section)]/50 to-[var(--color-bg-section)]/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-gold)] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-[var(--color-primary)] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                    Doktorat z wyróżnieniem
                  </h3>
                  <p className="text-[var(--color-primary)]/80 leading-relaxed">
                    Doktorat napisany pod kierunkiem Pani prof. dr hab.{" "}
                    <span className="font-semibold">Doroty Klus-Stańskiej</span>{" "}
                    i Pani dr hab.{" "}
                    <span className="font-semibold">Grażyny Szyling</span>{" "}
                    obroniłam z wyróżnieniem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Passion */}
      <section className="py-12 lg:py-16 bg-[var(--color-bg-section)]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4 flex items-center justify-center gap-3">
                <FaHeart className="text-[var(--color-accent)]" />
                Pasja do nauczania
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="space-y-6 text-[var(--color-primary)] leading-relaxed">
                <p className="text-lg">
                  Nauczanie to moja pasja, zarówno od strony teoretycznej, jak i
                  praktycznej. Od zawsze chciałam pracować z dziećmi, a swoją
                  nauczycielską przygodę zaczęłam jeszcze w szkole średniej,
                  udzielając korepetycji młodszym uczniom.
                </p>

                <p>
                  W trakcie studiów pedagogicznych pracowałam jako lektor
                  języków obcych (angielskiego i niemieckiego), a zaraz po nich
                  – jako nauczyciel wychowania przedszkolnego.
                </p>

                <div className="bg-[var(--color-accent)]/10 rounded-xl p-6 border-l-4 border-[var(--color-accent)]">
                  <p className="italic">
                    Tak się zabawnie złożyło, że – wraz z nabywanym przeze mnie
                    doświadczeniem pedagogicznym i nowymi kwalifikacjami –
                    podnosił się także wiek moich „wychowanków": obecnie pracuję
                    głównie z nauczycielami i kandydatami na nauczycieli, choć
                    korzystam z każdej możliwej okazji, aby znów twórczo pobyć z
                    dziećmi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-8 text-center flex items-center justify-center gap-3">
              <FaBookOpen className="text-[var(--color-accent)]" />
              Zainteresowania badawcze
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-4">
                {researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/60 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                    <span className="text-[var(--color-primary)] font-medium">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-accent)]/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                  Publikacje naukowe
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-[var(--color-primary)] text-sm mb-1">
                      2020
                    </h4>
                    <p className="text-[var(--color-primary)]/80 text-sm leading-snug">
                      <em>
                        Nauczycielskie koncepcje dziecięcej pracy grupowej w
                        klasach początkowych
                      </em>
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-[var(--color-primary)] text-sm mb-1">
                      2025
                    </h4>
                    <p className="text-[var(--color-primary)]/80 text-sm leading-snug">
                      <em>
                        Propagandowy obraz świata społecznego w piosenkach
                        dziecięcych
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-12 lg:py-16 bg-[var(--color-bg-section)]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-8 text-center flex items-center justify-center gap-3">
              <FaHandshake className="text-[var(--color-accent)]" />
              Współpraca
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {collaborations.map((collaboration, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-white text-sm" />
                    </div>
                    <span className="text-[var(--color-primary)] font-medium text-sm leading-snug">
                      {collaboration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-8 text-center flex items-center justify-center gap-3">
              <FaChild className="text-[var(--color-accent)]" />
              Życie osobiste
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Family */}
              <div className="bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-accent)]/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-3">
                  <FaHeart className="text-[var(--color-accent)]" />
                  Rodzina
                </h3>
                <div className="space-y-4 text-[var(--color-primary)] leading-relaxed">
                  <p>
                    Mam dwie cudowne Córeczki 
                     które nieustannie motywują mnie do dalszego rozwoju,
                    zadając mądre pytania i zapraszając mnie do swojego
                    magicznego, dziecięcego świata.
                  </p>
                  <p>
                    To dzięki nim mogę czuć się prawdziwym{" "}
                    <span className="font-semibold">
                      „kustoszem dzieciństwa"
                    </span>
                    .
                  </p>
                  <p>
                    Jako rodzina dwukulturowa (mąż Marcin jest Karaimem) staramy
                    się na co dzień promować postawę ekumeniczną oraz życzliwe
                    nastawienie wobec Innego.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
                  W wolnych chwilach
                </h3>
                <div className="grid gap-4 mb-6">
                  {personalInterests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[var(--color-bg-section)]/30 rounded-lg hover:bg-[var(--color-bg-section)]/50 transition-all duration-300"
                    >
                      <interest.icon className="text-[var(--color-accent)] text-lg" />
                      <span className="text-[var(--color-primary)]">
                        {interest.text}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 p-3 bg-[var(--color-bg-section)]/30 rounded-lg">
                    <FaUtensils className="text-[var(--color-accent)] text-lg" />
                    <span className="text-[var(--color-primary)]">
                      Jedzenie sushi
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--color-bg-section)]/30 rounded-lg">
                    <FaFilm className="text-[var(--color-accent)] text-lg" />
                    <span className="text-[var(--color-primary)]">
                      Oglądanie starych filmów
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--color-bg-section)]/30 rounded-lg">
                    <FaMap className="text-[var(--color-accent)] text-lg" />
                    <span className="text-[var(--color-primary)]">
                      Zwiedzanie nowych miejsc
                    </span>
                  </div>
                </div>

                {/* Children's Drawing */}
                <div className="bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-accent)]/10 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                    <FaHeart className="text-[var(--color-accent)]" />
                    Inspiracja od moich córeczek
                  </h4>
                  <div className="bg-white rounded-lg p-3 shadow-inner">
                    <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={drawingImage}
                        alt="Rysunek moich dzieci"
                        className="max-w-full max-h-full object-contain"
                        style={{ imageRendering: "auto" }}
                      />
                    </div>
                    <p className="text-sm text-[var(--color-primary)]/70 text-center mt-2 italic">
                      Rysunek od moich córeczek ❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[var(--color-bg-section)] to-[var(--color-bg)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <FaEnvelope className="text-4xl text-[var(--color-accent)] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Zapraszam do współpracy!
            </h2>
            <p className="text-lg text-[var(--color-primary)]/80 mb-8 leading-relaxed">
              Jeśli jesteś zainteresowany/a nawiązaniem współpracy edukacyjnej –
              zapraszam do kontaktu! 😊
            </p>
            <a
              href="./kontakt"
              className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-copper)] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
            >
              Skontaktuj się ze mną
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMeSection;
