import React from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaGavel,
  FaCookie,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaExclamationTriangle,
  FaInfoCircle,
  FaEye,
  FaTrash,
  FaEdit,
  FaDownload,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg-section)] to-[var(--color-bg)]">
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-gold)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <FaShieldAlt className="text-4xl mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                Polityka Prywatności
              </h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Zasady przetwarzania danych osobowych zgodnie z RODO
            </p>
            <div className="mt-6 text-sm opacity-80">
              Ostatnia aktualizacja: 4 lipca 2025
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Data Controller */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              Administrator danych
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Administratorem danych osobowych przetwarzanych w związku z
                korzystaniem z niniejszej strony internetowej jest:
              </p>
              <div className="bg-[var(--color-accent)]/10 rounded-lg p-6 border-l-4 border-[var(--color-accent)]">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaUniversity className="text-[var(--color-accent)] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--color-primary)]">
                        dr Małgorzata Pilecka, prof. AkAt
                      </p>
                      <p className="text-sm text-[var(--color-primary)]/80">
                        Akademia Ateneum w Gdańsku
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="font-mono text-[var(--color-primary)]/80">
                      m.pilecka@ateneum.edu.pl
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="font-mono text-[var(--color-primary)]/80">
                      503 372 710
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Data Collected */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              Rodzaje przetwarzanych danych
            </h2>
            <div className="space-y-6 text-[var(--color-primary)]/90 leading-relaxed">
              {/* Contact Information */}
              <div className="bg-[var(--color-accent)]/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                  <FaUserShield className="text-[var(--color-accent)]" />
                  Dane kontaktowe
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Imię i nazwisko oraz adres e-mail (podczas kontaktu)</li>
                  <li>Numer telefonu (jeśli zostanie podany)</li>
                  <li>Afiliacja akademicka (jeśli jest istotna)</li>
                  <li>Treść korespondencji</li>
                </ul>
              </div>

              {/* Technical Data */}
              <div className="bg-[var(--color-gold)]/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3 flex items-center gap-2">
                  <FaLock className="text-[var(--color-gold)]" />
                  Dane techniczne
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Adres IP i informacje o przeglądarce</li>
                  <li>Anonimowe statystyki korzystania ze strony</li>
                  <li>Dane z plików cookies (szczegóły w Polityce Cookies)</li>
                  <li>Logi dostępu do strony</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Purpose of Data Processing */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              Cele przetwarzania danych
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Komunikacja akademicka:</strong> Odpowiadanie na
                    zapytania dotyczące badań naukowych i współpracy
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Usługi edukacyjne:</strong> Udostępnianie informacji
                    społeczności akademickiej i studentom
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Ulepszanie strony:</strong> Analiza sposobu
                    korzystania w celu poprawy doświadczeń użytkowników
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Zgodność prawna:</strong> Spełnienie wymogów
                    instytucji akademickich
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              Podstawa prawna (RODO Art. 6)
            </h2>
            <div className="space-y-4">
              <div className="bg-[var(--color-accent)]/5 p-4 rounded-lg border-l-4 border-[var(--color-accent)]">
                <strong className="text-[var(--color-primary)] flex items-center gap-2">
                  <FaGavel className="text-sm" />
                  Art. 6 ust. 1 lit. a - Zgoda
                </strong>
                <p className="text-sm text-[var(--color-primary)]/70 mt-1">
                  Dla subskrypcji newslettera i komunikacji nieobowiązkowej
                </p>
              </div>
              <div className="bg-[var(--color-gold)]/5 p-4 rounded-lg border-l-4 border-[var(--color-gold)]">
                <strong className="text-[var(--color-primary)] flex items-center gap-2">
                  <FaGavel className="text-sm" />
                  Art. 6 ust. 1 lit. f - Prawnie uzasadniony interes
                </strong>
                <p className="text-sm text-[var(--color-primary)]/70 mt-1">
                  Dla korespondencji akademickiej i analityki strony
                </p>
              </div>
              <div className="bg-[var(--color-copper)]/5 p-4 rounded-lg border-l-4 border-[var(--color-copper)]">
                <strong className="text-[var(--color-primary)] flex items-center gap-2">
                  <FaGavel className="text-sm" />
                  Art. 6 ust. 1 lit. b - Niezbędność umowna
                </strong>
                <p className="text-sm text-[var(--color-primary)]/70 mt-1">
                  Dla komunikacji związanej ze studentami i działalnością
                  dydaktyczną
                </p>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              Udostępnianie danych
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Nie sprzedajemy ani nie udostępniamy danych osobowych stronom
                trzecim, z wyjątkiem następujących przypadków:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Instytucje akademickie w uzasadnionych celach edukacyjnych
                </li>
                <li>
                  Dostawcy usług technicznych (hosting, analityka) na podstawie
                  umów przetwarzania danych
                </li>
                <li>Wymogi prawne lub nakazy sądowe</li>
              </ul>

              <div className="bg-[var(--color-accent)]/10 rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    <strong>Gwarancja:</strong> Wszystkie podmioty trzecie
                    zobowiązane są do przestrzegania wysokich standardów ochrony
                    danych osobowych.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              Okres przechowywania danych
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Zapytania kontaktowe:</strong> Przechowywane przez 3
                    lata w celach korespondencji akademickiej
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Dane techniczne:</strong> Anonimizowane po 26
                    miesiącach
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Komunikacja ze studentami:</strong> Zgodnie z
                    polityką instytucjonalną
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                7
              </span>
              Twoje prawa (RODO)
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p className="mb-6">
                Zgodnie z RODO przysługują Ci następujące prawa:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[var(--color-accent)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaEye className="text-[var(--color-accent)]" />
                    <strong className="text-[var(--color-primary)]">
                      Prawo dostępu
                    </strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Do informacji o przetwarzanych danych
                  </p>
                </div>

                <div className="bg-[var(--color-gold)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaEdit className="text-[var(--color-gold)]" />
                    <strong className="text-[var(--color-primary)]">
                      Prawo sprostowania
                    </strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Do poprawiania nieprawidłowych danych
                  </p>
                </div>

                <div className="bg-[var(--color-copper)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaTrash className="text-[var(--color-copper)]" />
                    <strong className="text-[var(--color-primary)]">
                      Prawo usunięcia
                    </strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Do usunięcia danych osobowych
                  </p>
                </div>

                <div className="bg-[var(--color-accent)]/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FaDownload className="text-[var(--color-accent)]" />
                    <strong className="text-[var(--color-primary)]">
                      Prawo przenoszenia
                    </strong>
                  </div>
                  <p className="text-sm text-[var(--color-primary)]/70">
                    Do otrzymania danych w formacie ustrukturyzowanym
                  </p>
                </div>
              </div>

              <div className="bg-[var(--color-gold)]/20 rounded-lg p-4 border-l-4 border-[var(--color-accent)] mt-6">
                <div className="flex items-start gap-3">
                  <FaInfoCircle className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">
                      <strong>Ważne:</strong> Możesz w każdej chwili wycofać
                      zgodę na przetwarzanie danych oraz zgłosić sprzeciw wobec
                      przetwarzania opartego na prawnie uzasadnionym interesie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                8
              </span>
              Bezpieczeństwo danych
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Wdrażamy odpowiednie środki techniczne i organizacyjne w celu
                ochrony danych:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Szyfrowana transmisja danych (SSL/TLS)</li>
                <li>Regularne aktualizacje bezpieczeństwa i monitoring</li>
                <li>Kontrola dostępu i uwierzytelnienie</li>
                <li>Regularne kopie zapasowe i procedury odzyskiwania</li>
                <li>Szkolenia w zakresie ochrony danych</li>
              </ul>
            </div>
          </div>

          {/* International Transfers */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                9
              </span>
              Przekazywanie danych międzynarodowe
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Dane przetwarzane są głównie w ramach UE. Ewentualne
                przekazywanie poza UE jest chronione przez:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Decyzje o adekwatności Komisji Europejskiej</li>
                <li>Standardowe klauzule umowne</li>
                <li>Odpowiednie zabezpieczenia wymagane przez RODO</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
              Kontakt w sprawach prywatności
            </h2>
            <div className="text-center space-y-4">
              <div className="bg-white/60 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                  Pytania dotyczące danych osobowych
                </h3>
                <p className="text-[var(--color-primary)]/80 mb-6">
                  W sprawach dotyczących przetwarzania danych osobowych lub
                  realizacji swoich praw skontaktuj się z nami:
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-[var(--color-primary)]">
                    dr Małgorzata Pilecka, prof. AkAt
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
                    Temat wiadomości: "Zapytanie o prywatność - [Twoja prośba]"
                    <br />
                    Czas odpowiedzi: Do 30 dni zgodnie z wymogami RODO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to other policies */}
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
                to="/cookies"
                className="bg-white/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-gold)]/10 rounded-full mx-auto mb-4 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                  <FaCookie className="text-[var(--color-gold)] text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  Polityka Cookies
                </h4>
                <p className="text-[var(--color-primary)]/70">
                  Informacje o wykorzystywanych plikach cookies
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
