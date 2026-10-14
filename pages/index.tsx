import { useRef } from 'react';

import Modal from '../components/Modal';
import { homeCopy } from '../content/home.copy';

const Index = () => {
  const dialog = useRef<any>();
  const copy = homeCopy;

  return (
    <>
      {/* Portada */}
      <section className="mt-[82px] bg-[url(/assets/images/bg-legalmed.jpg)] bg-cover bg-center bg-no-repeat text-white lg:mt-[106px]">
        <div className="container min-h-[440px] lg:min-h-[800px]">
          <div className="flex flex-col gap-7 pt-24 md:flex-row md:gap-0">
            <div className="space-y-5 pb-10 pt-24 text-center ltr:md:text-left rtl:md:text-right">
              <h5 className="text-xl font-bold">{copy.hero.eyebrow}</h5>
              <h2 className="text-4xl font-black uppercase sm:text-6xl sm:leading-tight">
                <span className="text-secondary">{copy.hero.titlePrefix}</span>{" "}
                {copy.hero.titleSuffix}
              </h2>
              <p className="text-xl font-semibold">{copy.hero.description}</p>
              <a
                href={copy.hero.cta.href}
                className="btn rounded-md bg-white"
                target="_blank"
                rel="noreferrer"
              >
                {copy.hero.cta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué es importante */}
      <section className="pb-16 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-[1440px] bg-black py-12 dark:bg-gray-dark sm:rounded-[32px] lg:py-24">
          <div className="container">
            <div className="flex flex-col items-center gap-6 lg:flex-row">
              <div className="flex-1 text-center ltr:md:text-left rtl:md:text-right">
                <div lang="es" className="heading mb-8 break-words">
                  <h4 className="!text-primary">{copy.importance.title}</h4>
                  <h6 className="mt-[18px] text-left !font-semibold !text-gray">
                    {copy.importance.description}
                  </h6>
                </div>
                <ul className="space-y-3">
                  {copy.importance.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-left">
                      <span className="text-primary">✓</span>
                      <span className="text-lg font-semibold text-white">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex-1 items-center justify-center overflow-hidden rounded-[25px]">
                <div className="absolute z-10 flex h-full w-full items-center justify-center">
                  {/* <button
                    type="button"
                    aria-label="Reproducir video"
                    className="group flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white ring-[5px] ring-white/10 transition hover:bg-secondary"
                    onClick={() => dialog.current?.open()}
                  >
                    ▶
                  </button> */}
                </div>
                <img
                  src={copy.importance.image}
                  className="xl:h-[500px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        ref={dialog}
        width="100%"
        height="100%"
        closeByOverlay
        closeBtn
        closeStyle="floating"
        contentClass="pt-8 px-0 pb-0 !bg-transparent"
        closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
        modal={false}
      >
        <div className="bg-black !p-4 dark:bg-gray-dark">
          <div className="relative aspect-video">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={copy.importance.videoUrl}
              allow="autoplay; fullscreen; encrypted-media;"
            />
          </div>
        </div>
      </Modal>

      {/* Quienes somos */}
      <section
        className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-12 dark:bg-none lg:py-[70px]"
        id="about-us"
      >
        <div className="container">
          <div className="heading text-center">
            <h6>{copy.about.eyebrow}</h6>
            <h4>{copy.about.title}</h4>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {copy.about.cards.map((card) => (
              <div key={card.title} data-aos="fade-up" data-aos-duration="1000">
                <div className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary">
                  <div className="flex h-14 w-14 items-center justify-center">
                    <img src={card.image} alt={card.alt} />
                  </div>
                  <span className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                    {card.title}
                  </span>
                  <h6 className="line-clamp-7 mb-10 text-base font-semibold transition dark:group-hover:text-black">
                    {card.text}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-14 dark:!bg-none lg:py-[100px]" id="services">
        <div className="container">
          <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
            <h6>{copy.services.eyebrow}</h6>
            <h4>{copy.services.title}</h4>
          </div>
          <div className="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {copy.services.items.map((service) => (
              <div key={service.title} className="project block">
                <div
                  className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full rounded-t-3xl object-cover"
                  />
                  <div className="p-5 text-sm font-bold">
                    <h6 className="mb-1 text-black dark:text-white">
                      {service.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section
        className="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]"
        id="team"
      >
        <div className="container">
          <div className="heading text-center">
            <h6>{copy.team.eyebrow}</h6>
            <h4>{copy.team.title}</h4>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {copy.team.members.map((member) => (
              <div
                key={member.name}
                className="group cursor-pointer text-center"
              >
                <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-3xl object-cover object-top"
                  />
                </div>
                <h4 className="pb-2 pt-5 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                  {member.name}
                </h4>
                <h6 className="text-sm font-bold">{member.role}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-12 lg:py-24" id="news">
        <div className="container">
          <div className="flex items-center gap-3">
            <div className="h-[30px] w-[5px] bg-secondary" />
            <h5 className="text-2xl font-extrabold text-black dark:text-white">
              {copy.news.title}
            </h5>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.news.items.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[300px] overflow-hidden rounded-[10px]"
              >
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black" />
                <img
                  src={item.image}
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-110"
                  alt={item.title}
                />
                <h5 className="absolute left-5 top-5 z-[2] rounded bg-primary px-2.5 py-1 text-[12px] font-extrabold text-white">
                  {item.location}
                </h5>
                <div className="absolute bottom-4 left-5 right-5 z-[2] text-white">
                  <a
                    href={item.href}
                    className="text-[19px] font-bold duration-200 hover:text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                  {"description" in item && item.description ? (
                    <p className="my-3 text-sm font-semibold">
                      {item.description}
                    </p>
                  ) : null}
                  <p className="mt-3 text-[13px] font-semibold">{item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="pb-14 lg:py-[60px]" id="contact">
        <div className="container">
          <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
            <h4 className="sm:!leading-[50px]">{copy.contact.title}</h4>
          </div>

          <div className="mb-10 grid gap-[30px] md:grid-cols-3">
            <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7">
              <a
                href={copy.contact.phone.href}
                className="font-bold text-black dark:text-white"
              >
                <span className="block text-[22px]">
                  {copy.contact.phone.label}
                </span>
                {copy.contact.phone.display}
              </a>
            </div>

            <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7">
              <a
                href={copy.contact.email.href}
                className="font-bold text-black dark:text-white"
              >
                <span className="block text-[22px]">
                  {copy.contact.email.label}
                </span>
                {copy.contact.email.display}
              </a>
            </div>

            <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7">
              <span className="text-[22px] font-bold">
                {copy.contact.socialTitle}
              </span>
              <div className="mt-4 flex gap-3">
                {copy.contact.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="h-6 w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <iframe
            title="map"
            id="gmap-canvas"
            width="100%"
            height="320px"
            src={copy.contact.mapUrl}
          />
        </div>
      </section>
    </>
  );
};

export default Index;
