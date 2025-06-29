import React, { useState } from "react";
import {
  FaPlay,
  FaYoutube,
  FaFacebookF,
  FaNewspaper,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ytMediaThumbnail from "../assets/YT-Media.jpg";
import fbMediaThumbnail from "../assets/FB-Media.jpg";

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const discussionPanels = [
    {
      id: 1,
      title: "Panel Dyskusyjny - Edukacja i Innowacje",
      url: "https://www.youtube.com/watch?v=YRKOb2MVFnU",
      thumbnail: ytMediaThumbnail,
      duration: "45:30",
      description:
        "Dyskusja o nowoczesnych metodach nauczania i innowacjach w edukacji.",
    },
    {
      id: 2,
      title: "Przyszłość Uniwersytetów - Panel Ekspertów",
      url: "https://www.youtube.com/watch?v=FqWJrOpVNQI&t=2s",
      thumbnail: ytMediaThumbnail,
      duration: "52:15",
      description: "Rozmowa o wyzwaniach stojących przed szkolnictwem wyższym.",
    },
    {
      id: 3,
      title: "Konferencja Naukowa - Metodologie Badawcze",
      url: "https://www.youtube.com/watch?v=uHaEI-GmTmU&t=7182s",
      thumbnail: ytMediaThumbnail,
      duration: "2:15:45",
      description:
        "Prezentacja najnowszych trendów w metodologiach badawczych.",
    },
    {
      id: 4,
      title: "Dialog o Nauce - Interdyscyplinarność",
      url: "https://www.youtube.com/watch?v=L-RVV6nihHo",
      thumbnail: ytMediaThumbnail,
      duration: "38:20",
      description:
        "Znaczenie współpracy międzydyscyplinarnej w badaniach naukowych.",
    },
    {
      id: 5,
      title: "Sympogjum - Etyka w Nauce",
      url: "https://www.youtube.com/watch?v=ZnqjU7uHkLE",
      thumbnail: ytMediaThumbnail,
      duration: "41:12",
      description:
        "Dyskusja o etycznych aspektach prowadzenia badań naukowych.",
    },
  ];

  const facebookLive = {
    id: 6,
    title: "Facebook Live - Q&A z Dr Małgorzatą",
    url: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=1380020322799486",
    thumbnail: fbMediaThumbnail,
    duration: "Live",
    description: "Sesja pytań i odpowiedzi na żywo z Dr Małgorzatą.",
  };

  const interview = {
    title: "Język w szkole - nie powiedz poprawnie, a skutecznie",
    url: "https://www.sestry.eu/pl/artykuly/jezyk-w-szkole-nie-powiedz-poprawnie-a-skutecznie",
    publication: "Sestry.eu",
    date: "2024",
    description:
      "Wywiad o skutecznej komunikacji w środowisku edukacyjnym i metodach nauczania języka.",
  };

  const VideoCard = ({ video, platform = "youtube" }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="absolute top-3 right-3">
          {platform === "youtube" ? (
            <FaYoutube className="text-red-500 text-xl drop-shadow-lg" />
          ) : (
            <FaFacebookF className="text-blue-500 text-xl drop-shadow-lg" />
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300 cursor-pointer">
            <FaPlay className="ml-1" />
          </div> */}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {video.title}
        </h3>
        <p className="text-[var(--color-primary)]/70 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
        >
          Oglądaj
          <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );

  const InterviewCard = ({ interview }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaNewspaper className="text-[var(--color-accent)] text-xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">
              {interview.publication}
            </span>
            <span className="text-xs text-[var(--color-primary)]/60">
              {interview.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {interview.title}
          </h3>
          <p className="text-[var(--color-primary)]/70 text-sm mb-4">
            {interview.description}
          </p>
          <a
            href={interview.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Czytaj wywiad
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 lg:py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Media i Publikacje
          </h2>
          <p className="text-lg sm:text-xl text-[var(--color-primary)]/80 max-w-3xl mx-auto">
            Zapraszam do obejrzenia moich wystąpień, paneli dyskusyjnych oraz
            przeczytania wywiadów o edukacji, nauce i metodologii badawczej.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-[var(--color-bg-section)]/50 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-[var(--color-accent)] text-white shadow-lg"
                  : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
              }`}
            >
              Panele i Wystąpienia
            </button>
            <button
              onClick={() => setActiveTab("interviews")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "interviews"
                  ? "bg-[var(--color-accent)] text-white shadow-lg"
                  : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
              }`}
            >
              Wywiady
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-in-up">
          {activeTab === "videos" && (
            <div className="space-y-12">
              {/* YouTube Videos */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <FaYoutube className="text-red-500" />
                  Panele Dyskusyjne
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {discussionPanels.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      platform="youtube"
                    />
                  ))}
                </div>
              </div>

              {/* Facebook Live */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <FaFacebookF className="text-blue-500" />
                  Facebook Live
                </h3>
                <div className="max-w-md">
                  <VideoCard video={facebookLive} platform="facebook" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "interviews" && (
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
                Najnowsze Wywiady
              </h3>
              <div className="max-w-2xl">
                <InterviewCard interview={interview} />
              </div>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-[var(--color-bg-section)] to-[var(--color-bg-section)]/50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">
                {discussionPanels.length + 1}
              </div>
              <div className="text-sm text-[var(--color-primary)]/70 font-medium">
                Wystąpienia Video
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-copper)] mb-2">
                1
              </div>
              <div className="text-sm text-[var(--color-primary)]/70 font-medium">
                Wywiad Prasowy
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-gold)] mb-2">
                5+
              </div>
              <div className="text-sm text-[var(--color-primary)]/70 font-medium">
                Godzin Materiałów
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                100%
              </div>
              <div className="text-sm text-[var(--color-primary)]/70 font-medium">
                Dostępne Online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
