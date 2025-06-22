import avatar from "../../assets/Gosia-20.jpg";
import avatarMobile from "../../assets/Gosia-20-mobile.webp"; // 400x600px
import avatarTablet from "../../assets/Gosia-20-tablet.webp"; // 600x900px
import avatarDesktop from "../../assets/Gosia-20-desktop.webp"; // 800x1200px

function HeroSection() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-24">
          {/* Content Section */}
          <div className="flex-1 max-w-2xl text-center lg:text-left order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-tight mb-3 sm:mb-4">
              Jestem{" "}
              <span className="inline-block bg-[var(--color-accent)] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg">
                dr Małgorzata
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-primary)] mb-4 sm:mb-6">
              Witaj na moim portfolio akademickim
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--color-primary)] mb-6 sm:mb-8 leading-relaxed">
              Profesorka, dydaktyczka, naukowczyni. Ponad 30 lat doświadczenia
              na uczelni.
            </p>

            <button className="btn-main inline-flex items-center gap-2 hover:gap-4 transition-all duration-300">
              Zobacz czym się zajmuję
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="relative flex-shrink-0 order-2">
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-[400px] lg:rounded-[4rem] rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-[var(--color-gold)] shadow-2xl bg-[var(--color-bg-section)] mx-auto">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={avatarDesktop}
                  type="image/webp"
                />
                <source
                  media="(min-width: 640px)"
                  srcSet={avatarTablet}
                  type="image/webp"
                />
                <source
                  media="(max-width: 639px)"
                  srcSet={avatarMobile}
                  type="image/webp"
                />
                <img
                  src={avatar}
                  alt="dr Małgorzata - profesor akademicki"
                  className="w-full h-full object-cover lg:object-top"
                  style={{
                    imageRendering: "auto",
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0)",
                    willChange: "transform",
                  }}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
              </picture>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-4 -right-4 sm:top-1/2 sm:right-0 sm:translate-x-1/2 sm:-translate-y-1/2 lg:top-24 lg:left-0 lg:right-auto lg:-translate-x-1/2 lg:translate-y-0 z-10">
              <div className="bg-[var(--color-accent)] text-white rounded-full border-2 sm:border-3 lg:border-4 border-[var(--color-gold)] shadow-xl px-2 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-3 text-center min-w-[80px] sm:min-w-[100px] lg:min-w-[130px]">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                  30+
                </div>
                <div className="text-[10px] sm:text-xs lg:text-xs font-medium opacity-90 leading-tight">
                  lat doświadczenia
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--color-gold)] rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[var(--color-accent)] rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[var(--color-copper)] rounded-full opacity-50 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
