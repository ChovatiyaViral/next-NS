import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import website from 'website'


ProductStrip.defaultProps = {
    product: website.products[0],
    isReverse: false,
    page: false,
}

// ProductStrip.propTypes = {
//     name: PropTypes.string.isRequired,
// }


export default function ProductStrip(props) {
    return (
        <section className='bg-white'>
            <div className='3xl:container'>
                <div className={'flex flex-wrap items-center ' + (props.isReverse ? 'md:flex-row-reverse' : '')}>

                    <div className='w-full md:w-1/2 bg-black self-stretch'>

                        <div className='bg-cover bg-center' style={{ backgroundImage: 'url("' + props.product.blockImage2 + '")' }}>
                            <div className='ratio ratio-1x1'>
                                <div className='flex h-full w-full items-center justify-center'>
                                    {/* <picture className='relative block h-full max-w-sm mx-auto py-16'>
                                    <Image src={props.product.image} width={760} height={760} layout='responsive' className='w-full h-auto object-contain' />
                                </picture> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center w-full md:w-1/2 py-20 px-6 flex flex-col justify-center items-center self-stretch bg-cover bg-center relative' style={{ backgroundImage: 'url("/img/home/full-cask.png")' }}>
                        <div className='relative'>
                            <h2 data-aos='fade-up' className='text-4xl lg:text-6xl xl:text-7xl font-heading uppercase text-primary-dark'>{props.product.name}</h2>
                            {/* <h2 data-aos='fade-up' className='italic text-primary mx-2 my-4'>By Duncan Taylor</h2> */}
                            <div data-aos='fade-up' className='flex items-center justify-center mt-5'>
                                <span className='inline-block w-16 bg-white border-b border-primary'></span>
                                <h2 className='italic text-primary mx-2'>By Duncan Taylor</h2>
                                <span className='inline-block w-16 bg-white border-b border-primary'></span>
                            </div>
                            <p data-aos='fade-up' className='text-body max-w-md my-12 mx-auto'>{props.product.excerpt}</p>
                            <Link href={props.product.link}>
                                <a data-aos='fade-up' className='inline-block rounded-full px-20 py-2 text-body-btn font-semibold uppercase text-lg tracking-widest' style={{ backgroundColor: 'rgba(202, 178, 109, 0.67)' }}>Discover</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
