import Image from "next/image";

export default function Loading(props) {
    return (
        <section className={'fixed w-full h-full flex items-center justify-center bg-black inset-0 z-10 ' + (props.loading ? '' : 'hidden')}>
            <div>
                <picture className='block w-28 md:w-48 h-auto'>
                    <Image src='/img/logo.svg' width={174} height={175} layout='responsive' alt='logo' />
                </picture>
                <p className='pt-4 text-white tracking-widest text-center animate-pulse'>Loading...</p>
            </div>
        </section>
    )
}
