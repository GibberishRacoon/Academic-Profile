import React from "react";
import { Link } from "react-router-dom";
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaGavel,
  FaShieldAlt,
  FaCookie,
  FaEnvelope,
  FaPhone,
  FaUniversity,
} from "react-icons/fa";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg-section)] to-[var(--color-bg)]">
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-gold)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <FaGavel className="text-4xl mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold">Regulamin</h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Zasady korzystania ze strony internetowej dr Małgorzaty Pileckiej,
              prof. AkAt
            </p>
            <div className="mt-6 text-sm opacity-80">
              Ostatnia aktualizacja: 4 lipca 2025
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1 - General Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              Informacje ogólne
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Niniejsza strona internetowa stanowi profesjonalne portfolio
                akademickie
                <strong> dr Małgorzaty Pileckiej, prof. AkAt</strong>. Serwis
                udostępnia informacje o działalności badawczej, publikacjach
                naukowych, działalności dydaktycznej oraz osiągnięciach
                akademickich.
              </p>
              <p>
                Korzystając z tej strony internetowej, akceptujesz niniejszy
                regulamin oraz zobowiązujesz się do przestrzegania zawartych w
                nim zasad.
              </p>
              <div className="bg-[var(--color-accent)]/10 rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <FaUniversity className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    <strong>Afiliacja:</strong> Akademia Ateneum w Gdańsku
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Website Usage */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              Zasady korzystania ze strony
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Strona internetowa przeznaczona jest do celów informacyjnych i
                edukacyjnych:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Treści mogą być wykorzystywane do celów badań naukowych i
                  edukacyjnych z odpowiednim cytowaniem
                </li>
                <li>Komercyjne wykorzystanie treści wymaga pisemnej zgody</li>
                <li>
                  Użytkownicy zobowiązani są do poszanowania praw autorskich
                  wszystkich materiałów
                </li>
                <li>
                  Zabrania się niewłaściwego wykorzystania lub redystrybucji
                  treści bez zgody
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 - Academic Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              Treści akademickie i edukacyjne
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Materiały badawcze i publikacje udostępniane są w celach
                akademickich:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Treści edukacyjne mają charakter informacyjny i nie zastępują
                  formalnej konsultacji akademickiej
                </li>
                <li>
                  Cytowania i odniesienia powinny być weryfikowane niezależnie
                </li>
                <li>
                  Materiały dydaktyczne przeznaczone są dla zapisanych studentów
                  i uprawnionych użytkowników
                </li>
                <li>Wszystkie materiały chronione są prawem autorskim</li>
              </ul>

              <div className="bg-[var(--color-gold)]/20 rounded-lg p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    <strong>Ważne:</strong> Materiały edukacyjne i naukowe
                    prezentowane na stronie mają charakter informacyjny i nie
                    zastępują formalnej konsultacji akademickiej ani nie
                    stanowią oficjalnych wytycznych instytucjonalnych.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - User Responsibilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              Obowiązki użytkowników
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>Użytkownicy zobowiązują się do:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Podawania dokładnych informacji podczas kontaktu</li>
                <li>Poszanowania akademickiego charakteru treści</li>
                <li>Nienadużywania ani nieredystrybuowania treści bez zgody</li>
                <li>
                  Zgłaszania problemów technicznych lub nieodpowiednich treści
                </li>
                <li>Przestrzegania zasad etyki akademickiej</li>
              </ul>
            </div>
          </div>

          {/* Section 5 - Privacy and Data */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              Prywatność i dane osobowe
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Kwestie związane z przetwarzaniem danych osobowych są
                szczegółowo opisane w<strong> Polityce Prywatności</strong>.
                Strona może wykorzystywać pliki cookies w celu poprawy
                funkcjonalności - szczegóły w <strong>Polityce Cookies</strong>.
              </p>
              <p>
                Dane kontaktowe wykorzystywane są wyłącznie do komunikacji
                akademickiej i zawodowej.
              </p>
            </div>
          </div>

          {/* Section 6 - Intellectual Property */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              Własność intelektualna
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Wszystkie oryginalne treści chronione są prawem autorskim
                </li>
                <li>
                  Treści osób trzecich wykorzystywane są na zasadzie dozwolonego
                  użytku lub za zgodą
                </li>
                <li>
                  Wymagane jest odpowiednie przypisanie autorstwa przy
                  wykorzystaniu materiałów
                </li>
                <li>
                  Publikacje badawcze podlegają polityce praw autorskich
                  odpowiednich czasopism
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 - Limitation of Liability */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                7
              </span>
              Ograniczenie odpowiedzialności
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Treści udostępniane są "tak jak są" w celach edukacyjnych
                </li>
                <li>
                  Właściciel strony nie ponosi odpowiedzialności za decyzje
                  podjęte na podstawie treści strony
                </li>
                <li>
                  Linki zewnętrzne udostępniane są dla wygody - nie ponosimy
                  odpowiedzialności za ich treść
                </li>
                <li>
                  Strona ma charakter informacyjny i nie zastępuje
                  profesjonalnego doradztwa
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 - Changes to Terms */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                8
              </span>
              Zmiany regulaminu
            </h2>
            <div className="space-y-4 text-[var(--color-primary)]/90 leading-relaxed">
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszym
                regulaminie. O istotnych zmianach użytkownicy będą informowani
                na stronie internetowej.
              </p>
              <p>
                Aktualna wersja regulaminu jest zawsze dostępna na tej stronie z
                datą ostatniej aktualizacji.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-gold)]/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
              Informacje kontaktowe
            </h2>
            <div className="text-center space-y-4">
              <div className="bg-white/60 rounded-xl p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                  W sprawach dotyczących regulaminu
                </h3>
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
                </div>
              </div>
              <p className="text-[var(--color-primary)]/80 text-sm leading-relaxed max-w-2xl mx-auto">
                Zachęcam do kontaktu w sprawach współpracy naukowej, edukacyjnej
                lub pytań dotyczących treści przedstawionych na stronie.
              </p>
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
                to="/privacy"
                className="bg-white/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-accent)]/10 rounded-full mx-auto mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <FaShieldAlt className="text-[var(--color-accent)] text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                  Polityka Prywatności
                </h4>
                <p className="text-[var(--color-primary)]/70">
                  Zasady przetwarzania danych osobowych zgodnie z RODO
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

export default Terms;
