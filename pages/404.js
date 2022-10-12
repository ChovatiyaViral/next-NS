import Head from 'next/head'
import Link from 'next/link';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Error 404 - Page not found</title>
            </Head>
            <section className='min-h-screen flex flex-col items-center justify-center'>
                <h1 className='text-3xl md:text-5xl lg:text-8xl my-16 text-white'>404 - Page Not Found</h1>
                <Link href='/'>
                    <a className='text-white border block px-8 py-3 rounded-full uppercase tracking-wider focus:outline-none hover:bg-gray-800 transition-all hover:scale-110 select-none'>
                        Back to home
                    </a>
                </Link>
            </section>
        </>
    )
}
