import { useState, useRef } from 'react';
import Link from 'next/link';
import Modal from '../components/Modal';

const Index = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const dialog: any = useRef();

    return (
        <>
            {/* portada */}
            <section className="bg-[url(/assets/images/bg-legalmed.jpg)] bg-cover bg-center bg-no-repeat mt-[82px] text-white lg:mt-[106px]">
                <div className="container min-h-[440px] lg:min-h-[800px]">
                    <div className="flex flex-col gap-7 md:flex-row md:gap-0 pt-24">
                        <div className="space-y-5 pt-24 pb-10 text-center ltr:md:text-left rtl:md:text-right">
                            <h5 className="text-xl font-bold">Consultores legales</h5>
                            <h2 className="text-4xl font-black uppercase sm:text-6xl sm:leading-tight">
                                <span className="text-secondary">Especialistas</span>{' '} en salud
                            </h2>
                            <p className="text-xl font-semibold ">
                                Firma legal especializada en asesoría, representación y defensa de médicos y profesionales de la salud en derecho médico, sanitario y responsabilidad profesional.
                            </p>
                            <a href="https://wa.link/6ud933" className="btn rounded-md bg-white"
                            target="_blank" rel="noreferrer">
                                Contactar
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* porque es importante */}
            <section className="sm:px-6 pb-16 sm:py-10">
                <div className="mx-auto max-w-[1440px] bg-black py-12 dark:bg-gray-dark sm:rounded-[32px] lg:py-24">
                    <div className="container">
                        <div className="flex flex-col items-center gap-6 lg:flex-row">
                            <div className="flex-1 text-center ltr:md:text-left rtl:md:text-right">
                                <div lang="es" className="heading mb-8 break-words" >
                                    <h4 className="!text-primary">¿Por qué es importante?</h4>
                                    <h6 className="mt-[18px] !font-semibold !text-gray text-left">
                                        Los médicos enfrentan situaciones legales complejas que pueden surgir en cualquier momento de su práctica profesional. Tener una agencia de abogados especializada les permite:
                                    </h6>
                                </div>
                                <div className="flex justify-center sm:gap-16 md:justify-start md:gap-10">
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                        fill="#3DAEBE"
                                                    />
                                                    <path
                                                        d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                        stroke="#3DAEBE"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <Link href="" className="text-lg text-left font-semibold text-white duration-200 hover:text-primary">
                                                Proteger su reputación y carrera profesional
                                            </Link>
                                        </li>
                                        <li className="flex gap-3">
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                        fill="#3DAEBE"
                                                    />
                                                    <path
                                                        d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                        stroke="#3DAEBE"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <Link href="" className="text-lg text-left font-semibold text-white duration-200 hover:text-primary">
                                                Contar con asesoría experta en legislación sanitaria y normativas específicas
                                            </Link>
                                        </li>
                                        <li className="flex gap-3">
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                        fill="#3DAEBE"
                                                    />
                                                    <path
                                                        d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                        stroke="#3DAEBE"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <Link href="" className="text-lg text-left font-semibold text-white duration-200 hover:text-primary">
                                                Minimizar riesgos y manejar adecuadamente los conflictos legales para evitar sanciones graves o pérdidas económicas
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative flex-1 overflow-hidden rounded-[25px] justify-center items-center">
                                <div className="flex w-full h-full justify-center items-center absolute z-10">
                                    <button
                                        type="button"
                                        className="group flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white ring-[5px] ring-white/10 transition hover:bg-secondary"
                                        onClick={() => dialog.current.open()}
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-secondary group-hover:text-black/60"
                                        >
                                            <g clipPath="url(#clip0_279_1223)">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.12543 0.661061C4.53562 -1.06548 1.06668 0.791048 1.06668 3.90361V12.0964C1.06668 15.209 4.53562 17.0655 7.12543 15.3389L13.27 11.2425C15.5838 9.70001 15.5838 6.3 13.27 4.75746L7.12543 0.661061Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_279_1223">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                                <img src="/assets/images/porque-escogernos.jpg" className="xl:h-[500px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                ref={dialog}
                width="100%"
                height="100%"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 !bg-transparent"
                closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
                modal={false}
            >
                <div className="bg-black !p-4 dark:bg-gray-dark">
                    <div className="relative">
                        <div className="aspect-video">
                            <iframe
                                className="absolute top-0 left-0 h-full w-full"
                                src="https://player.cloudinary.com/embed/?public_id=copy_DBCFA7FD-AD1D-4246-BF88-0D0ED1104207_fyhd4h&cloud_name=deewry1j8&profile=cld-default"
                                allow="autoplay; fullscreen; encrypted-media;"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* vision, mision, about us */}
            <section className="bg-[url(/assets/images/service-bg.png)] bg-cover bg-center bg-no-repeat py-12 dark:bg-none lg:py-[70px]" id="about-us">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Legalmed Consultores</h6>
                        <h4>Tu defensa legal en salud</h4>
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            >
                                <div className="flex h-14 w-14 items-center justify-center">
                                    <img src="/assets/images/justicia.png" alt="quienes-somos" />
                                </div>
                                <span className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                                    Quiénes somos
                                </span>
                                <h6 className="mb-10 text-base font-semibold transition line-clamp-7 dark:group-hover:text-black">
                                    Somos una firma legal especializada en asesoría, representación y defensa a médicos y profesionales de la salud, en casos relacionados con la práctica profesional. Nos enfocamos en el derecho médico, sanitario y de responsabilidad profesional.
                                </h6>
                                {/* <Link
                                    href=""
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link> */}
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            >
                                <div className="flex h-14 w-14 items-center justify-center">
                                    <img src="/assets/images/lider.png" alt="visión" />
                                </div>
                                <span className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                                    Visión
                                </span>
                                <h6 className="mb-10 text-base font-semibold transition line-clamp-7 dark:group-hover:text-black">
                                    Ser la firma de abogados médicos líder, reconocida por su excelencia en servicios en el sector salud y por promover prácticas seguras y justas en la atención médica, contribuyendo al fortalecimiento del sistema de salud y a la seguridad de los médicos.
                                </h6>
                                {/* <Link
                                    href=""
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link> */}
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                            >
                                <div className="flex h-14 w-14 items-center justify-center">
                                    <img src="/assets/images/objetivo.png" alt="misión" />
                                </div>
                                <span className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                                    Misión
                                </span>
                                <h6 className="mb-10 text-base font-semibold transition line-clamp-7 dark:group-hover:text-black">
                                    Brindar soluciones legales efectivas que protejan los derechos e intereses de nuestros clientes, con integridad, profesionalismo y compromiso. Comprendemos las necesidades de cada caso y ofrecemos una representación sólida y experta.
                                </h6>
                                {/* <Link
                                    href=""
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black transition group-hover:text-white dark:text-white"
                                    >
                                        <path
                                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* servicios */}
            <section
                className="py-14 dark:!bg-none lg:py-[100px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 54.69%)',
                }}
                id="services"
            >
                <div className="container">
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6>Servicios</h6>
                            <h4>Asesoría personalizada en asuntos legales</h4>
                        </div>
                    </div>
                    <div className="mb-7">
                    </div>
                    <div className="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className={`project ${activeTab === 'all' || activeTab === 'web' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/servicio-5.jpg" alt="project-1" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Cuidado médico insuficiente</h6>
                                    {/* <p>Subtítulo</p> */}
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'ecommerce' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/servicio-2.jpg" alt="servicio-2" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Asesoría en casos administrativos</h6>
                                    {/* <p>Website, App</p> */}
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/servicio-3.jpg" alt="servicio-3" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Consultoría en responsabilidad civil y penal</h6>
                                    {/* <p>Website</p> */}
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'design' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/servicio-4.jpg" alt="servicio-4" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Manejo de conflictos laborales</h6>
                                    {/* <p>Website</p> */}
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'website' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/servicio-1.jpg" alt="servicio-5" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Prevención de riesgos legales</h6>
                                    {/* <p>Branding</p> */}
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'app' ? 'block' : 'hidden'}`}>
                            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="" className="absolute top-0 left-0 h-full w-full"></Link>
                                <img src="/assets/images/servicio-6.jpg" alt="servicio-6" className="h-52 w-full rounded-t-3xl object-cover" />
                                <div className="p-5 text-sm font-bold">
                                    <h6 className="mb-1 text-black dark:text-white">Capacitaciones</h6>
                                    {/* <p>Branding, Website, App</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* equipo */}
            <section className="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-14 dark:bg-black/50 lg:py-[100px]" id="team">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Nuestro equipo</h6>
                        <h4>Abogados especialistas</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/abogada-1.jpg" alt="team-member-1" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Mirja Sofía Martínez Mejía
                            </h4>
                            <h6 className="text-sm font-bold">Abogada</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/abogado-1.jpg" alt="team-member-2" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Luis Alberto Mena Núñez
                            </h4>
                            <h6 className="text-sm font-bold">Abogado</h6>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* <Testimonial /> */}

            {/* noticias */}
            <section className="py-12 lg:py-24" id="news">
                <div className="container">
                    <div className="flex items-center gap-3">
                        <div className="h-[30px] w-[5px] bg-secondary"></div>
                        <h5 className="text-2xl font-extrabold text-black dark:text-white">Evita que tu nombre aparezca en primera plana</h5>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className="group relative h-[300px] flex-1 overflow-hidden rounded-[10px] sm:h-auto" data-aos="zoom-in-up" data-aos-duration="1000">
                            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black"></div>
                            <img
                                src="/assets/images/trending1.png"
                                className="h-full w-full rotate-0 object-cover duration-200 group-hover:rotate-2 group-hover:scale-110"
                                alt=""
                            />
                            <h5 className="absolute top-5 rounded bg-primary py-1 px-2.5 text-[12px] font-extrabold text-white ltr:left-5 rtl:right-5">LIMA</h5>
                            <div className="absolute bottom-4 left-5 right-5 z-[1] text-white">
                                <a
                                    href="https://www.gob.pe/institucion/minsa/noticias/32777-investigaran-denuncia-de-presunta-negligencia-medica-en-hospital-de-puente-piedra"
                                    className="text-xl font-black duration-200 hover:text-secondary dark:hover:text-secondary sm:text-[32px] sm:leading-10"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Denuncian negligencia médica
                                </a>
                                <p className="my-3 text-sm font-semibold">
                                    Investigarán denuncia de presunta negligencia médica en Hospital de Puente Piedra
                                </p>
                                <div className="border-b border-white/40"></div>
                                <div className="mt-[14px] flex gap-4">
                                    <div className="flex items-center gap-3">
                                        <img src="/assets/images/logo-minsa.png" className="w-9" alt="" />
                                        <p className="text-[13px] font-semibold">MINSA</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 5.83325V8.49992L9.66667 10.1666"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <p className="text-[13px] font-semibold">28 Enero 2014</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="group relative h-[263px] w-full overflow-hidden rounded-[10px] lg:max-w-[263px]" data-aos="zoom-in-up" data-aos-duration="1000">
                                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black"></div>
                                <img
                                    src="/assets/images/trending2.png"
                                    className="h-full w-full rotate-0 object-cover duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                                <h5 className="absolute top-5 rounded bg-secondary py-1 px-2.5 text-[12px] font-extrabold text-white ltr:right-5 rtl:left-5">
                                    ICA
                                </h5>
                                <div className="absolute bottom-4 left-5 right-5 z-[1] text-white">
                                    <a  href="https://www.facebook.com/permalink.php/?story_fbid=2309329165908786&id=657835997724786&_rdc=2&_rdr#"
                                        className="text-[19px] font-bold duration-200 hover:text-secondary dark:hover:text-secondary"
                                        target="_blank" rel="noreferrer">
                                        Mujer muere tras liposucción en clínica en Ica{' '}
                                    </a>
                                    <div className="mt-[14px] flex items-center gap-2">
                                        <span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 5.83325V8.49992L9.66667 10.1666"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <p className="text-[13px] font-semibold">15 Agosto 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative h-[263px] w-full overflow-hidden rounded-[10px] lg:max-w-[263px]" data-aos="zoom-in-up" data-aos-duration="1000">
                                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black"></div>
                                <img
                                    src="/assets/images/trending3.png"
                                    className="h-full w-full rotate-0 object-cover duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                                <h5 className="absolute top-5 rounded bg-secondary py-1 px-2.5 text-[12px] font-extrabold text-white ltr:right-5 rtl:left-5">
                                    CUSCO
                                </h5>
                                <div className="absolute bottom-4 left-5 right-5 z-[1] text-white">
                                    <a href="https://x.com/DanielUrresti1/status/1285587782023479299?ref_src=twsrc%5Etfw" 
                                        className="text-[19px] font-bold duration-200 hover:text-secondary dark:hover:text-secondary"
                                        target="_blank" rel="noreferrer"
                                        >
                                        Detienen a médicos sin licencia en Cusco
                                    </a>
                                    <div className="mt-[14px] flex items-center gap-2">
                                        <span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 5.83325V8.49992L9.66667 10.1666"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <p className="text-[13px] font-semibold">21 Julio 2020</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative h-[263px] w-full overflow-hidden rounded-[10px] lg:max-w-[263px]" data-aos="zoom-in-up" data-aos-duration="1000">
                                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black"></div>
                                <img
                                    src="/assets/images/trending4.png"
                                    className="h-full w-full rotate-0 object-cover duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                                <h5 className="absolute top-5 rounded bg-primary py-1 px-2.5 text-[12px] font-extrabold text-white ltr:right-5 rtl:left-5">
                                    ICA
                                </h5>
                                <div className="absolute bottom-4 left-5 right-5 z-[1] text-white">
                                    <a href="https://lalupa.pe/ica/ica-joven-de-19-anos-muere-tras-someterse-a-una-manga-gastrica-en-la-clinica-senor-de-luren-81463/" className="text-[19px] font-bold duration-200 hover:text-secondary dark:hover:text-secondary"
                                    target="_blank" rel="noreferrer">
                                        Joven muere tras operación de banda gástrica 
                                    </a>
                                    <div className="mt-[14px] flex items-center gap-2">
                                        <span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 5.83325V8.49992L9.66667 10.1666"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <p className="text-[13px] font-semibold">19 Febrero 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative h-[263px] w-full overflow-hidden rounded-[10px] lg:max-w-[263px]" data-aos="zoom-in-up" data-aos-duration="1000">
                                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black"></div>
                                <img
                                    src="/assets/images/trending5.png"
                                    className="h-full w-full rotate-0 object-cover duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                                <h5 className="absolute top-5 rounded bg-secondary py-1 px-2.5 text-[12px] font-extrabold text-white ltr:right-5 rtl:left-5">
                                   LIMA 
                                </h5>
                                <div className="absolute bottom-4 left-5 right-5 z-[1] text-white">
                                    <a href="https://www.infobae.com/peru/2024/04/05/caso-munequita-milly-las-implicancias-legales-que-podria-enfrentar-un-medico-por-mala-praxis/" className="text-[19px] font-bold duration-200 hover:text-secondary dark:hover:text-secondary"
                                    target="_blank" rel="noreferrer">
                                        Caso Muñequita Milly: mala praxis
                                    </a>
                                    <div className="mt-[14px] flex items-center gap-2">
                                        <span>
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 5.83325V8.49992L9.66667 10.1666"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                    stroke="#969AA9"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <p className="text-[13px] font-semibold">05 Abril 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contacto */}
            <section className="pb-14 lg:py-[60px]" id="contact">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 className="sm:!leading-[50px]">Contacta con nosotros</h4>
                    </div>
                    <div className="mb-10 grid gap-[30px] md:grid-cols-3">
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <a
                                    href="tel:+51980997849"
                                    className="font-bold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary lg:text-lg"
                                >
                                <div className="mb-4 flex items-center gap-3 text-secondary">
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_563_8253)">
                                                <path
                                                    d="M22.75 17.7883V21.619C22.7501 21.8933 22.6462 22.1574 22.4592 22.358C22.2722 22.5587 22.0161 22.681 21.7425 22.7002C21.2691 22.7327 20.8823 22.75 20.5833 22.75C11.0099 22.75 3.25 14.9901 3.25 5.41667C3.25 5.11767 3.26625 4.73092 3.29983 4.2575C3.31903 3.9839 3.4413 3.72776 3.64195 3.54078C3.84261 3.35379 4.10672 3.24988 4.381 3.25H8.21167C8.34604 3.24986 8.47567 3.29968 8.57537 3.38977C8.67507 3.47986 8.73773 3.6038 8.75117 3.7375C8.77608 3.98667 8.79883 4.18492 8.8205 4.3355C9.0358 5.838 9.477 7.29932 10.1292 8.66992C10.2321 8.88658 10.1649 9.1455 9.96992 9.28417L7.63208 10.9547C9.06149 14.2853 11.7158 16.9396 15.0464 18.369L16.7148 16.0355C16.7829 15.9402 16.8824 15.8718 16.9959 15.8423C17.1093 15.8128 17.2295 15.824 17.3355 15.8741C18.7059 16.525 20.1669 16.9651 21.6688 17.1795C21.8194 17.2012 22.0177 17.225 22.2647 17.2488C22.3982 17.2625 22.5218 17.3253 22.6117 17.425C22.7016 17.5246 22.7512 17.6541 22.7511 17.7883H22.75Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_563_8253">
                                                    <rect width="26" height="26" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-[22px] font-bold">Llámanos</span>
                                </div>
                                980 997 849
                            </a>
                        </div>
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <a
                                    href="mailto:info@legalmed.pe"
                                    className="font-bold text-black transition hover:text-primary dark:text-white dark:hover:text-primary lg:text-lg"
                                >

                                <div className="mb-4 flex items-center gap-3 text-primary">
                                    <div>
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_563_8262)">
                                                <path
                                                    d="M3.24996 3.25H22.75C23.0373 3.25 23.3128 3.36414 23.516 3.5673C23.7192 3.77047 23.8333 4.04602 23.8333 4.33333V21.6667C23.8333 21.954 23.7192 22.2295 23.516 22.4327C23.3128 22.6359 23.0373 22.75 22.75 22.75H3.24996C2.96264 22.75 2.68709 22.6359 2.48393 22.4327C2.28076 22.2295 2.16663 21.954 2.16663 21.6667V4.33333C2.16663 4.04602 2.28076 3.77047 2.48393 3.5673C2.68709 3.36414 2.96264 3.25 3.24996 3.25ZM13.065 12.6566L6.11863 6.75783L4.71571 8.40883L13.079 15.5101L21.2918 8.40342L19.8748 6.76433L13.066 12.6566H13.065Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_563_8262">
                                                    <rect width="26" height="26" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span className="text-[22px] font-bold">Escríbenos </span>
                                </div>
                                info@legalmed.pe
                            </a>
                        </div>
                        {/* <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-3 text-secondary">
                                <div>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_563_8282)">
                                            <path
                                                d="M19.8943 18.8122L13 25.7066L6.10567 18.8122C4.74212 17.4486 3.81354 15.7114 3.43734 13.8201C3.06114 11.9287 3.25423 9.96835 3.99219 8.18678C4.73015 6.4052 5.97983 4.88247 7.58321 3.81113C9.18658 2.73979 11.0716 2.16797 13 2.16797C14.9284 2.16797 16.8134 2.73979 18.4168 3.81113C20.0202 4.88247 21.2699 6.4052 22.0078 8.18678C22.7458 9.96835 22.9389 11.9287 22.5627 13.8201C22.1865 15.7114 21.2579 17.4486 19.8943 18.8122ZM13 14.0845C13.5746 14.0845 14.1257 13.8563 14.5321 13.4499C14.9384 13.0436 15.1667 12.4925 15.1667 11.9179C15.1667 11.3432 14.9384 10.7921 14.5321 10.3858C14.1257 9.97949 13.5746 9.75122 13 9.75122C12.4254 9.75122 11.8743 9.97949 11.4679 10.3858C11.0616 10.7921 10.8333 11.3432 10.8333 11.9179C10.8333 12.4925 11.0616 13.0436 11.4679 13.4499C11.8743 13.8563 12.4254 14.0845 13 14.0845Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_563_8282">
                                                <rect width="26" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-[22px] font-bold">Ubicación</span>
                            </div>
                            <h5 className="font-bold text-black dark:text-white lg:text-lg">La Molina, Lima</h5>
                        </div> */}
                        <div className="rounded-[32px] bg-white px-4 py-6 dark:bg-gray-dark md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center gap-3 text-secondary">
                                <img src="/assets/images/me-gusta.png" alt="me-gusta" className='h-6 w-auto' />
                                <span className="text-[22px] font-bold">Síguenos</span>
                            </div>
                            <div className='flex gap-3'>
                                <a href="https://www.instagram.com/legalmed_peru" target="_blank" rel="noreferrer"><img src="/assets/images/instagram.png" alt="" className='h-6 w-auto'/></a>
                                <a href="https://www.facebook.com/profile.php?id=61565053288270" target="_blank" rel="noreferrer"><img src="/assets/images/facebook.png" alt="" className='h-6 w-auto'/></a>
                                {/* <a href="" target="_blank" rel="noreferrer"><img src="/assets/images/tik-tok.png" alt="" className='h-6 w-auto'/></a> */}
                                <a href="https://wa.link/6ud933" target="_blank" rel="noreferrer"><img src="/assets/images/whatsapp.png" alt="" className='h-6 w-auto'/></a>
                            </div>
                        </div>
                    </div>
                    <iframe title="map" id="gmap-canvas" width="100%" height="320px" src="https://maps.google.com/maps?width=100%25&amp;height=auto&amp;hl=en&amp;q=Avenida%20Ferrero%201280,%20la%20Molina+(Akigreen)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
                </div>
            </section>

        </>
   
    );
};

export default Index;
