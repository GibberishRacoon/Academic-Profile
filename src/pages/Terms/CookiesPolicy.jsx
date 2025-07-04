import React from "react";
import { Link } from "react-router-dom";
import {
  FaCookie,
  FaShieldAlt,
  FaGavel,
  FaCog,
  FaInfoCircle,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaExclamationTriangle,
  FaToggleOn,
  FaToggleOff,
  FaChrome,
  FaFirefox,
  FaSafari,
  FaEdge,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg-section)] to-[var(--color-bg)]">
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-gold)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <FaCookie className="text-4xl mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                Polityka Cookies
              </h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Informacje o wykorzystywanych plikach cookies na naszej stronie
            </p>
            <div className="mt-6 text-sm opacity-80">
              Ostatnia aktualizacja: 4 lipca 2025
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* What are cookies */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              Czym są pliki cookies
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Pliki cookies to małe pliki tekstowe przechowywane na Twoim
                urządzeniu podczas odwiedzania naszej strony internetowej.
                Pomagają nam zapewnić lepszą funkcjonalność oraz zrozumieć, jak
                korzystasz z naszej witryny.
              </p>

              <div className="bg-[var(--color-accent)]/10 rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">
                      <strong>Transparentność:</strong> Szczegółowo wyjaśniamy,
                      jak używamy cookies i dajemy Ci pełną kontrolę nad
                      ustawieniami. Twoja prywatność jest dla nas priorytetem, a
                      cookies pomagają nam udoskonalać stronę zgodnie z Twoimi
                      potrzebami.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              Rodzaje wykorzystywanych cookies
            </h2>
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="bg-[var(--color-accent)]/5 rounded-lg p-6 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] flex items-center gap-2">
                    <FaShieldAlt className="text-[var(--color-accent)]" />
                    Cookies niezbędne
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--color-primary)]/70">
                      Zawsze aktywne
                    </span>
                    <FaToggleOn className="text-[var(--color-accent)] text-lg" />
                  </div>
                </div>
                <div className="space-y-3 text-[var(--color-primary)]/80">
                  <p>
                    <strong>Cel:</strong> Podstawowa funkcjonalność strony
                    internetowej
                  </p>
                  <p>
                    <strong>Czas trwania:</strong> Sesja lub do zamknięcia
                    przeglądarki
                  </p>
                  <p>
                    <strong>Przykłady:</strong> Preferencje językowe, funkcje
                    bezpieczeństwa, podstawowa nawigacja
                  </p>
                  <p>
                    <strong>Podstawa prawna:</strong> Prawnie uzasadniony
                    interes (RODO Art. 6.1.f)
                  </p>
                  <div className="bg-white/60 rounded p-3 mt-3">
                    <p className="text-xs text-[var(--color-primary)]/60">
                      <FaCheck className="inline text-green-600 mr-1" />
                      Te pliki cookies nie mogą być wyłączone, ponieważ są
                      niezbędne do prawidłowego działania strony.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-[var(--color-gold)]/5 rounded-lg p-6 border-l-4 border-[var(--color-gold)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] flex items-center gap-2">
                    <FaCog className="text-[var(--color-gold)]" />
                    Cookies analityczne
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--color-primary)]/70">
                      Opcjonalne
                    </span>
                    <FaToggleOff className="text-[var(--color-primary)]/40 text-lg" />
                  </div>
                </div>
                <div className="space-y-3 text-[var(--color-primary)]/80">
                  <p>
                    <strong>Cel:</strong> Zrozumienie sposobu korzystania ze
                    strony i poprawa doświadczeń użytkownika
                  </p>
                  <p>
                    <strong>Czas trwania:</strong> Do 26 miesięcy
                  </p>
                  <p>
                    <strong>Dane:</strong> Anonimowe statystyki użytkowania
                  </p>
                  <p>
                    <strong>Podstawa prawna:</strong> Zgoda (RODO Art. 6.1.a)
                  </p>
                  <div className="bg-white/60 rounded p-3 mt-3">
                    <p className="text-xs text-[var(--color-primary)]/60">
                      <FaInfoCircle className="inline text-blue-600 mr-1" />
                      Pomagają nam zrozumieć, które treści akademickie są
                      najbardziej przydatne.
                    </p>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-[var(--color-copper)]/5 rounded-lg p-6 border-l-4 border-[var(--color-copper)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] flex items-center gap-2">
                    <FaCog className="text-[var(--color-copper)]" />
                    Cookies funkcjonalne
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--color-primary)]/70">
                      Opcjonalne
                    </span>
                    <FaToggleOff className="text-[var(--color-primary)]/40 text-lg" />
                  </div>
                </div>
                <div className="space-y-3 text-[var(--color-primary)]/80">
                  <p>
                    <strong>Cel:</strong> Zaawansowane funkcje strony i
                    personalizacja
                  </p>
                  <p>
                    <strong>Czas trwania:</strong> Różny (określony dla każdego
                    pliku cookie)
                  </p>
                  <p>
                    <strong>Przykłady:</strong> Dane formularzy, ustawienia
                    dostępności, preferencje wyświetlania
                  </p>
                  <p>
                    <strong>Podstawa prawna:</strong> Zgoda (RODO Art. 6.1.a)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-party Cookies */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              Cookies podmiotów trzecich
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Możemy wykorzystywać usługi stron trzecich, które ustawiają
                własne pliki cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics:</strong> Do statystyk strony (z
                  anonimizacją IP)
                </li>
                <li>
                  <strong>Platformy akademickie:</strong> Do narzędzi współpracy
                  naukowej
                </li>
                <li>
                  <strong>Media społecznościowe:</strong> Jeśli obecne są
                  przyciski udostępniania
                </li>
              </ul>

              <div className="bg-[var(--color-gold)]/20 rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    <strong>Ważne:</strong> Każdy z tych podmiotów ma własną
                    politykę prywatności, z którą zalecamy się zapoznać.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              Zarządzanie cookies
            </h2>
            <div className="space-y-6">
              {/* Browser Settings */}
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                  Ustawienia przeglądarki
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[var(--color-accent)]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FaChrome className="text-xl text-blue-600" />
                      <strong>Chrome</strong>
                    </div>
                    <p className="text-sm text-[var(--color-primary)]/70">
                      Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie
                    </p>
                  </div>

                  <div className="bg-[var(--color-gold)]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FaFirefox className="text-xl text-orange-600" />
                      <strong>Firefox</strong>
                    </div>
                    <p className="text-sm text-[var(--color-primary)]/70">
                      Ustawienia → Prywatność i bezpieczeństwo
                    </p>
                  </div>

                  <div className="bg-[var(--color-copper)]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FaSafari className="text-xl text-blue-500" />
                      <strong>Safari</strong>
                    </div>
                    <p className="text-sm text-[var(--color-primary)]/70">
                      Preferencje → Prywatność
                    </p>
                  </div>

                  <div className="bg-[var(--color-accent)]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FaEdge className="text-xl text-blue-700" />
                      <strong>Edge</strong>
                    </div>
                    <p className="text-sm text-[var(--color-primary)]/70">
                      Ustawienia → Pliki cookie i uprawnienia witryn
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Cookie Preferences */}
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                  Nasze preferencje cookies
                </h3>
                <div className="bg-[var(--color-accent)]/10 rounded-lg p-4">
                  <p className="text-[var(--color-primary)]/80 mb-3">
                    Możesz zarządzać preferencjami cookies poprzez:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-[var(--color-primary)]/70">
                    <li>Banner zgody na cookies przy pierwszej wizycie</li>
                    <li>Panel ustawień cookies dostępny w stopce strony</li>
                    <li>Kontakt z nami w celu zmiany preferencji</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Consent */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              Zgoda na cookies
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Pierwsza wizyta:</strong> Zobaczysz banner z
                    informacją o cookies i możliwością wyrażenia zgody
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Wycofanie zgody:</strong> Możesz w każdej chwili
                    wycofać zgodę na wykorzystywanie opcjonalnych cookies
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Cookies niezbędne:</strong> Nie można ich wyłączyć
                    ze względu na podstawową funkcjonalność
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Cookies opcjonalne:</strong> Wymagają wyraźnej zgody
                    użytkownika
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Processing */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              Przetwarzanie danych przez cookies
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>Informacje zbierane przez cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Są przetwarzane zgodnie z naszą Polityką Prywatności</li>
                <li>Mogą być anonimizowane do celów analitycznych</li>
                <li>Nie są wykorzystywane do komercyjnego profilowania</li>
                <li>Są przechowywane zgodnie z określonymi okresami</li>
              </ul>
            </div>
          </div>

          {/* Academic Use */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                7
              </span>
              Wykorzystanie akademickie
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>Cookies pomagają nam:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Udostępniać lepsze zasoby edukacyjne</li>
                <li>
                  Zrozumieć, które tematy badawcze są najczęściej odwiedzane
                </li>
                <li>Poprawić doświadczenia użytkowników akademickich</li>
                <li>Zapewnić bezpieczeństwo i funkcjonalność strony</li>
              </ul>

              <div className="bg-[var(--color-accent)]/10 rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <FaUniversity className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    <strong>Cele akademickie:</strong> Wszystkie dane zbierane
                    przez cookies wykorzystywane są wyłącznie w celach
                    edukacyjnych i badawczych, zgodnie z misją akademicką
                    strony.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                8
              </span>
              Zgodność prawna
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>Nasze praktyki dotyczące cookies są zgodne z:</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-[var(--color-accent)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaShieldAlt className="text-[var(--color-accent)]" />
                    <strong>RODO</strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Ogólne rozporządzenie o ochronie danych
                  </p>
                </div>

                <div className="bg-[var(--color-gold)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaGavel className="text-[var(--color-gold)]" />
                    <strong>Dyrektywa ePrivacy</strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Prawo dotyczące cookies
                  </p>
                </div>

                <div className="bg-[var(--color-copper)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaShieldAlt className="text-[var(--color-copper)]" />
                    <strong>Polskie prawo</strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Krajowe przepisy o ochronie danych
                  </p>
                </div>

                <div className="bg-[var(--color-accent)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUniversity className="text-[var(--color-accent)]" />
                    <strong>Polityki instytucjonalne</strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Zasady akademickie
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                9
              </span>
              Aktualizacje polityki cookies
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>Możemy aktualizować tę politykę, aby odzwierciedlić:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Zmiany w technologii cookies</li>
                <li>Nowe funkcje strony internetowej</li>
                <li>Aktualizacje wymogów prawnych</li>
                <li>Opinie użytkowników i ulepszenia</li>
              </ul>
              <p>
                O istotnych zmianach będziemy informować poprzez banner na
                stronie lub aktualizację daty ostatniej modyfikacji.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
              Kontakt w sprawie cookies
            </h2>
            <div className="text-center space-y-4">
              <div className="bg-white/60 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                  Pytania dotyczące cookies
                </h3>
                <p className="text-[var(--color-primary)]/80 mb-6">
                  Jeśli masz pytania dotyczące cookies lub chcesz uzyskać więcej
                  informacji o przetwarzaniu danych, skontaktuj się z nami:
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-[var(--color-primary)]">
                    dr Małgorzata Pilecka, prof. AkAt
                  </p>
                  <p className="text-[var(--color-primary)]/80">
                    Akademia Ateneum w Gdańsku
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[var(--color-primary)]/80">
                    <FaEnvelope className="text-sm" />
                    <span className="font-mono">m.pilecka@ateneum.edu.pl</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[var(--color-primary)]/80">
                    <FaPhone className="text-sm" />
                    <span className="font-mono">503 372 710</span>
                  </div>
                  <p className="text-xs text-[var(--color-primary)]/60 mt-4">
                    Temat: "Zapytanie o politykę cookies"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to Other Legal Documents */}
      <section className="py-12 bg-[var(--color-bg-section)]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-8 text-center">
              Powiązane dokumenty prawne
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                to="/terms"
                className="bg-white/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-accent)]/10 rounded-full mx-auto mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <FaGavel className="text-[var(--color-accent)] text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  Regulamin
                </h4>
                <p className="text-[var(--color-primary)]/70">
                  Zasady korzystania ze strony internetowej
                </p>
              </Link>

              <Link
                to="/privacy"
                className="bg-white/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-gold)]/10 rounded-full mx-auto mb-4 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                  <FaShieldAlt className="text-[var(--color-gold)] text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  Polityka Prywatności
                </h4>
                <p className="text-[var(--color-primary)]/70">
                  Zasady przetwarzania danych osobowych
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;
