import Link from 'next/link';

const Error404 = (props: any) => {
    return (
        <div className="pt-[82px] lg:pt-[106px]">
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="p-5 text-center font-semibold">
                    <h2 className="mb-8 text-[50px] font-bold leading-none md:text-[80px]">404</h2>
                    <h4 className="mb-5 text-xl font-semibold text-primary sm:text-5xl">¡Oh!</h4>
                    <p className="text-base">Lo sentimos la página que buscas no existe</p>
                    <Link href="/" className="btn mx-auto mt-10 w-max">
                        Regresar a Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;
