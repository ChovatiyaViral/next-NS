import fs from 'fs'
import path from 'path'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, Fragment, useState } from 'react'
import matter from 'gray-matter'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Listbox } from '@headlessui/react'
import website from 'website'
import { useThemeContext } from 'context/state'

export default function ProductDetailPage(props) {
    const [isBallotOpen, setIsBallotOpen] = useThemeContext();
    const [showFixedBtn, setShowFixedBtn] = useState(false);

    // const [selectedRegion, setSelectedRegion] = useState(props.meta.delivering[0])

    const sliderImages = props.meta.images

    let lastScrollTop = 0

    const handleScroll = () => {
        var st = window.pageYOffset || document.documentElement.scrollTop
        if (window.scrollY > 720) {
            setShowFixedBtn(true)
        } else {
            setShowFixedBtn(false)
        }
        lastScrollTop = st <= 0 ? 0 : st
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Head>
                <title>Rarest of the Rare Scotch Whisky : {props.meta.name}</title>
            </Head>

            <div className='hidden md:h-16'></div>

            <section className='relative'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2'>
                            <div className='md:hidden text-center'>
                                <p data-aos='fade-up' className='capitalize italic text-xl mt-16 mb-8' style={{ color: '#FAEFDF' }}>rarest of the rare</p>
                                <h1 data-aos='fade-up' data-aos-delay='100' className='text-4xl sm:text-6xl lg:text-7xl font-heading uppercase' style={{ color: '#FAEFDF' }}>{props.meta.name}</h1>
                                <p data-aos='fade-up' data-aos-delay='130' className='text-3xl sm:text-5xl lg:text-6xl mt-4 mb-4' style={{ color: '#DCCB9D' }}>{props.meta.number}</p>
                                <p data-aos='fade-up' data-aos-delay='140' className='uppercase text-base font-slab' style={{ color: '#8C754D' }}>{props.meta.bottlesdetails}</p>
                                <span data-aos='fade-up' data-aos-delay='120' className='border-b block w-14 mx-auto my-4' style={{ borderColor: '#938674' }}></span>
                                <p data-aos='fade-up' data-aos-delay='140' className='uppercase text-base font-slab' style={{ color: '#8C754D' }}>{props.meta.available}</p>
                            </div>

                            <div className='sticky top-0'>
                                <div className='relative'>
                                    <picture className='block'>
                                        <Image src={props.meta.bannerimg} width={900} height={900} layout='responsive' priority={true} alt='product image' />
                                    </picture>
                                    <span className='absolute inline-block top-0 left-0 right-0 w-full h-12 bg-gradient-to-b from-black'></span>
                                    <span className='absolute inline-block top-0 bottom-0 right-0 h-full w-12 bg-gradient-to-l from-black'></span>
                                    <span className='absolute inline-block bottom-0 left-0 right-0 w-full h-12 bg-gradient-to-t from-black'></span>
                                    <span className='absolute inline-block top-0 bottom-0 left-0 h-full w-12 bg-gradient-to-r from-black'></span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>

                            <div className='text-center px-3'>
                                <div className='hidden md:block'>
                                    <p data-aos='fade-up' className='capitalize italic text-2xl mt-16 mb-8' style={{ color: '#FAEFDF' }}>rarest of the rare</p>
                                    <h1 data-aos='fade-up' data-aos-delay='100' className='text-4xl sm:text-6xl lg:text-7xl font-heading uppercase' style={{ color: '#FAEFDF' }}>{props.meta.name}</h1>
                                    <span data-aos='fade-up' data-aos-delay='120' className='border-b block w-14 mx-auto my-3' style={{ borderColor: '#938674' }}></span>
                                    <p data-aos='fade-up' data-aos-delay='130' className='text-3xl sm:text-5xl lg:text-6xl my-8' style={{ color: '#DCCB9D' }}>{props.meta.number}</p>
                                    <p data-aos='fade-up' data-aos-delay='140' className='uppercase tracking-wider text-base mb-4' style={{ color: '#DCCB9D' }}>{props.meta.bottlesdetails}</p>
                                    <p data-aos='fade-up' data-aos-delay='140' className='uppercase font-slab' style={{ color: '#8C754D' }}>{props.meta.available}</p>
                                </div>
                                <button onClick={() => setIsBallotOpen(true)} type='button' data-aos='fade-up' data-aos-delay='150' className='uppercase text-base sm:text-lg py-2 px-6 md:px-8 my-8 tracking-widest font-semibold font-sans text-white rounded-full' style={{ backgroundColor: '#AC8F5C' }}>PARTICIPATE IN THE BALLOT</button>
                                {/* <p data-aos='fade-up'><span style={{ color: '#DCCB9D' }}>Not A Member? </span> <button onClick={() => setIsBallotOpen(true)} className='text-white underline italic'>SIGNUP</button></p> */}
                                {/* <div data-aos='fade-up' className='px-5 py-4 mt-6 mb-8 rounded inline-block' style={{ backgroundColor: '#14130F' }}>
                                    <span className='text-base text-left block mb-3 uppercase' style={{ color: '#DCCB9D' }}>we are delivering to:</span>
                                    <Listbox value={selectedRegion} onChange={setSelectedRegion}>
                                        <div className='relative text-base w-72'>
                                            <Listbox.Button className='relative font-semibold font-body w-full inline-flex items-center justify-around px-10 py-2 rounded-md focus:outline-none' style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', color: '#AC8F5C' }}>
                                                {selectedRegion}
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='currentColor'
                                                    className='w-5 h-5 ml-3'
                                                    viewBox='0 0 16 16'
                                                >
                                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"></path>
                                                </svg>
                                            </Listbox.Button>
                                            <Listbox.Options className='absolute font-semibold w-full divide-y divide-gray-300 rounded-md px-2 py-2 border-t border-black' style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)', color: '#AC8F5C' }}>
                                                {props.meta.delivering.map((el, i) => (
                                                    <Listbox.Option
                                                        key={i}
                                                        value={el}
                                                        className='py-1 px-2 font-body cursor-pointer focus:outline-none'
                                                    >
                                                        {el}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </div>
                                    </Listbox>
                                </div> */}
                                <div data-aos='fade-up' className='flex items-center justify-center mt-12 mb-8 md:mb-14'>
                                    <span className='hidden md:inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                                    <h2 className='italic mx-2' style={{ maxWidth: '22rem', color: '#AC8F5C' }}>{props.meta.overline}</h2>
                                    <span className='hidden md:inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                                </div>
                                <p data-aos='fade-up' className='max-w-md text-xs md:text-lg mx-auto pb-14 leading-relaxed' style={{ color: '#FAEFDF' }}>{props.meta.description}</p>
                                <h2 data-aos='fade-up' className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl my-24 uppercase' style={{ color: '#FAEFDF' }}>The Experience</h2>

                                {props.meta.colour && <div>
                                    <h4 data-aos='fade-up' className='uppercase' style={{ color: '#AC8F5C' }}>COLOUR</h4>
                                    <p data-aos='fade-up' className='italic mb-8' style={{ color: '#FAEFDF' }}>{props.meta.colour}</p>
                                </div>}
                                {props.meta.nose && <div>
                                    <h4 data-aos='fade-up' className='uppercase' style={{ color: '#AC8F5C' }}>Nose</h4>
                                    <p data-aos='fade-up' className='italic mb-8' style={{ color: '#FAEFDF' }}>{props.meta.nose}</p>
                                </div>}
                                {props.meta.palate && <div>
                                    <h4 data-aos='fade-up' className='uppercase' style={{ color: '#AC8F5C' }}>Palate</h4>
                                    <p data-aos='fade-up' className='italic mb-8' style={{ color: '#FAEFDF' }}>{props.meta.palate}</p>
                                </div>}
                                {props.meta.finish && <div>
                                    <h4 data-aos='fade-up' className='uppercase' style={{ color: '#AC8F5C' }}>FInish</h4>
                                    <p data-aos='fade-up' className='italic mb-8' style={{ color: '#FAEFDF' }}>{props.meta.finish}</p>
                                </div>}

                                <h2 data-aos='fade-up' className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl mt-28 mb-16' style={{ color: '#FAEFDF' }}>FLAVOUR WHEEL</h2>
                                <picture data-aos='fade-up' className='block w-full h-auto mb-28 px-3 lg:px-20'>
                                    <Image src={props.meta.radar} width={1394} height={1223} className='rounded-3xl object-cover object-center' layout='responsive' alt='flavour wheel' />
                                </picture>

                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-white'>
                <div className='container px-3 py-16'>
                    <div data-aos='fade-up' className='flex items-center justify-center mb-5'>
                        <span className='inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                        <h2 className='italic mx-2' style={{ color: '#8C754D' }}>{props.meta.article1overline}</h2>
                        <span className='inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                    </div>
                    <h2 data-aos='fade-up' className='text-4xl sm:text-5xl lg:text-6xl max-w-4xl mb-8 leading-tight mx-auto font-heading text-center' style={{ color: '#8C754D' }}>{props.meta.article1title}</h2>
                    <p data-aos='fade-up' className='text-base md:text-2xl px-6 md:px-0 md:text-center mx-auto max-w-5xl mb-4 leading-relaxed' style={{ color: '#4D4D4D' }}>{props.meta.article1para1}</p>
                    {props.meta.article1para2 && <p data-aos='fade-up' className='px-6 md:px-0 text-base md:text-2xl md:text-center mx-auto max-w-5xl leading-relaxed' style={{ color: '#4D4D4D' }}>{props.meta.article1para2}</p>}
                </div>
            </section>


            <section className='bg-white'>
                <div className='container px-3 py-16'>
                    <div data-aos='fade-up' className='flex items-center justify-center mb-5'>
                        <span className='inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                        <h2 className='italic mx-2' style={{ color: '#8C754D' }}>{props.meta.article2overline}</h2>
                        <span className='inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                    </div>
                    <h2 data-aos='fade-up' className='text-4xl sm:text-5xl lg:text-6xl max-w-4xl mb-8 leading-tight mx-auto font-heading text-center' style={{ color: '#8C754D' }}>{props.meta.article2title}</h2>
                    <p data-aos='fade-up' className='text-base px-6 md:px-0 md:text-2xl md:text-center mx-auto max-w-5xl mb-4 leading-relaxed' style={{ color: '#4D4D4D' }}>{props.meta.article2para1}</p>
                    {props.meta.article2para2 && <p data-aos='fade-up' className='px-6 md:px-0 text-base md:text-2xl mb-4 md:text-center mx-auto max-w-5xl leading-relaxed' style={{ color: '#4D4D4D' }}>{props.meta.article2para2}</p>}
                    {props.meta.article2para3 && <p data-aos='fade-up' className='px-6 md:px-0 text-base md:text-2xl mb-4 md:text-center mx-auto max-w-5xl leading-relaxed' style={{ color: '#4D4D4D' }}>{props.meta.article2para3}</p>}
                    {props.meta.article2para4 && <p data-aos='fade-up' className='px-6 md:px-0 text-base md:text-2xl mb-4 md:text-center mx-auto max-w-5xl leading-relaxed' style={{ color: '#4D4D4D' }}>{props.meta.article2para4}</p>}
                </div>
            </section>


            <section className='bg-white md:pt-10 pb-10 -mt-2'>
                <div data-aos='fade-up' className='relative py-8 hidden md:block'>
                    <Carousel
                        arrows={true}
                        showDots={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        centerMode={true}
                        keyBoardControl={true}
                        swipeable={true}
                        draggable={true}
                        renderDotsOutside={true}
                        dotListClass='custom-slider-dots'
                        responsive={{
                            desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 1,
                                slidesToSlide: 1,
                            },
                            tablet: {
                                breakpoint: { max: 1024, min: 501 },
                                items: 1,
                                slidesToSlide: 1,
                            },
                            mobile: {
                                breakpoint: { max: 501, min: 0 },
                                items: 1,
                                slidesToSlide: 1,
                            }
                        }}
                    >
                        {sliderImages.map((el, index) => (
                            <div key={index} className=''>
                                <picture className='block w-full px-1 sm:px-2 md:px-3 h-auto'>
                                    <Image src={el} width={1400} height={920} layout='responsive' alt='image' />
                                </picture>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div data-aos='fade-up' className='md:hidden relative py-8'>
                    <Carousel
                        arrows={true}
                        showDots={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        keyBoardControl={true}
                        swipeable={true}
                        draggable={true}
                        renderDotsOutside={true}
                        dotListClass='custom-slider-dots'
                        responsive={{
                            desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 1,
                                slidesToSlide: 1,
                            },
                            tablet: {
                                breakpoint: { max: 1024, min: 501 },
                                items: 1,
                                slidesToSlide: 1,
                            },
                            mobile: {
                                breakpoint: { max: 501, min: 0 },
                                items: 1,
                                slidesToSlide: 1,
                                centerMode: false,
                            }
                        }}
                    >
                        {sliderImages.map((el, index) => (
                            <div key={index} className=''>
                                <picture className='block w-full px-1 sm:px-2 md:px-3 h-auto'>
                                    <Image src={el} width={1400} height={920} layout='responsive' alt='image' />
                                </picture>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>


            <section className='bg-black'>
                <div className='container px-3 py-20'>
                    <div data-aos='fade-up' className='flex items-center justify-center mb-10'>
                        <span className='inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center font-heading tracking-wider mx-2' style={{ color: '#FAEFDF' }}>YOU MAY ALSO LIKE</h2>
                        <span className='inline-block w-16 bg-white border-b' style={{ borderColor: '#8C754D' }}></span>
                    </div>

                    {/* related start */}
                    <div className='px-4'>
                        <div className='border group my-4 max-w-lg overflow-hidden mx-auto' style={{ borderColor: '#574A34' }}>
                            <picture data-aos='fade-up' className='block group-hover:scale-110 transition-all duration-300 mx-auto'>
                                <Image src={props.meta.relatedimage} width={728} height={727} alt='image' />
                            </picture>
                            <h3 data-aos='fade-up' className='text-4xl md:text-5xl px-3 relative mb-4 -mt-16 font-heading text-center tracking-wider uppercase' style={{ color: '#C9BDA6' }}>{props.meta.relatedname}</h3>
                            <p data-aos='fade-up' className='relative px-3 max-w-md mx-auto mb-4 text-center text-white'>{props.meta.relatedcontent}</p>
                            <div data-aos='fade-up' className='px-3 pb-4'>
                                <Link href={props.meta.ralatedlink}>
                                    <a className='rounded-full py-2 text-center font-semibold uppercase tracking-widest block my-10 mx-auto max-w-sm text-white focus:outline-none hover:bg-primary transition-all font-sans' style={{ backgroundColor: '#AC8F5C' }}>
                                        Discover
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* related end */}
                </div>
            </section>



            {showFixedBtn && <button onClick={() => setIsBallotOpen(true)} type='button' className='fixed bottom-0 right-0 font-semibold text-base md:text-lg font-sans tracking-widest rounded-l-full py-2 pl-6 pr-4 mb-16 text-base text-white' style={{ backgroundColor: 'rgba(202, 178, 109, 0.67)' }}>
                PARTICIPATE IN THE BALLOT
            </button>}



        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('products'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownMeta = fs.readFileSync(path.join('products', slug + '.md'), 'utf-8')
    const { data: meta, content } = matter(markdownMeta)
    return {
        props: {
            meta, slug, content
        }
    }
}
