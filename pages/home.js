import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductStrip from "@/components/home/productStrip";
import website from "website";

export default function Home2() {
  return (
    <>
      <Head>
        <title>{website.title}</title>
        <meta name="description" content={website.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <section
        className="relative bg-[length:225%] md:bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/home/banner.png")',
          backgroundColor: "#000",
        }}
      >
        <span className="absolute top-0 left-0 right-0 w-full h-12 block bg-gradient-to-b from-black"></span>
        <div className="container relative px-3 py-24">
          <div className="hidden md:block h-96"></div>
          <div className="md:hidden h-64"></div>
          <div className="hidden md:block h-24"></div>
          <div className="hidden md:block h-20"></div>
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-6xl lg:text-8xl mt-6 mb-6 font-title text-center"
            style={{ color: "#E7DBCB" }}
          >
            Rarest Of The Rare
          </h1>
          <div data-aos="fade-up" className="flex items-center justify-center">
            <span className="inline-block w-16 bg-white border-b border-primary-light"></span>
            <h2 className="italic text-primary-light mx-2">By Duncan Taylor</h2>
            <span className="inline-block w-16 bg-white border-b border-primary-light"></span>
          </div>
        </div>
      </section>

      <section className="bg-white relative">
        <Image
          src="/img/home/half-cask.png"
          layout="fill"
          className="absolute inset-0 object-cover object-center"
          alt="image"
        />
        <div className="container relative py-20 md:py-28">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center mb-5"
          >
            <span className="inline-block w-16 bg-white border-b border-primary"></span>
            <h2 className="italic text-primary mx-2">By Duncan Taylor</h2>
            <span className="inline-block w-16 bg-white border-b border-primary"></span>
          </div>
          <h2
            data-aos="fade-up"
            className="text-lg md:text-4xl sm:text-5xl max-w-4xl md:mb-8 leading-tight mx-auto font-heading text-center"
          >
            A collection of eight distinctive and exquisite whiskies. Each
            presents a different nuance of{" "}
          </h2>
        </div>
      </section>

      <ProductStrip product={website.products[0]} />
      <ProductStrip product={website.products[1]} isReverse />

      <section
        className="relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("/img/home/story.png")' }}
      >
        <div className="container px-3 py-8 md:py-28">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center mb-5"
          >
            <span className="inline-block w-16 border-b border-white"></span>
            <h2 className="italic text-sm md:text-lg text-white text-center mx-2">
              The Duncan Taylor Story
            </h2>
            <span className="inline-block w-16 border-b border-white"></span>
          </div>
          <h3
            data-aos="fade-up"
            className="text-lg md:text-4xl sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl max-w-2xl mx-auto mb-4 md:mb-14 text-center text-white"
          >
            A collection of eight distinctive and exquisite
          </h3>
          <p
            data-aos="fade-up"
            className="text-xs md:text-lg text-white text-center mx-auto max-w-2xl"
          >
            They are bottled at natural cask strength and unfettered by chill
            filtration. Carefully selected from the company’s coveted reserves,
            They are bottled at natural cask strength and unfettered by chill
            filtration. Carefully selected from the company’s coveted reserves,{" "}
          </p>
        </div>
      </section>

      <section className="" style={{ backgroundColor: "#101010" }}>
        <div className="container px-3 py-8 md:py-24">
          <div className="flex flex-wrap justify-between px-4 py-4 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2 px-4 py-4">
              <Image
                src="/img/home/history-1.jpg"
                width={700}
                height={834}
                layout="responsive"
                alt="history"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 py-4">
              <Image
                src="/img/home/history-2.jpg"
                width={700}
                height={834}
                layout="responsive"
                alt="history"
              />
            </div>
          </div>

          <h2 className="text-xl md:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center mt-12 mb-4 md:mb-8 text-gray-100">
            History
          </h2>
          <h3 className="text-lg md:text-2xl md:text-3xl max-w-xl mx-auto text-center capitalize italic mb-4 md:mb-8 text-primary-light">
            Eighty years of passion as protector and creator of spirits of
            distinction
          </h3>
          <p className="text-xs md:text-lg max-w-5xl mx-auto text-center mb-6 text-gray-400">
            Established in 1938, Duncan Taylor Scotch Whisky Limited is a
            specialist independent whisky merchant with one of the largest
            privately held collections of aged single malt and single grain
            Scotch whisky casks. Today, the company releases these prized
            spirits via an impressive range of award-winning product brands, all
            bottled at its headquarters in Huntly.
          </p>
        </div>
      </section>
    </>
  );
}
