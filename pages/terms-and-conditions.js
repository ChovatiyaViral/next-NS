import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import website from 'website'


export default function TermsAndConditions(props) {
    return (
        <>
            <Head>
                <title>Rarest of the Rare Scotch Whisky : Terms and Condition</title>
            </Head>
            <div className='h-12'></div>
            <section className='bg-white min-h-screen py-10'>
                <div className='container px-3 md:px-5'>

                    <h1 className='text-4xl sm:text-5xl lg:text-6xl  mt-8 mb-12 leading-tight text-center mx-auto font-heading ' style={{ color: '#AC8F5C' }}>Terms and Conditions</h1>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>TERMS AND CONDITIONS</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>This page contains the terms and conditions on which we supply any of the products (“Products”) listed on our website therarest.duncantaylor.com (“our site”) to you.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>INFORMATION ABOUT US</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>Therarest.duncantaylor.com is a site operated on behalf of Duncan Taylor Scotch Whisky Ltd. We are registered in Scotland under company number SC036622 and with our registered office at King Street, Huntly, Scotland AB54 8HP</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>BALLOTS</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>For ballot products consumers will only be eligible to buy a maximum number of bottles per person, per order or per household. Duncan Taylor Scotch Whisky Ltd. reserves the right to cancel orders if subsequent verification identifies that a consumer has bought more than the maximum number of bottles available for purchase by one person.</p>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>In submitting an entry to a Ballot, the entrants agree to complete the purchase of the Product upon conclusion of the ballot (including any delivery fee and variance by delivery country .) The total fee payable shall include a postage fee based on the Entrant’s country of delivery. The fees charged directly by Duncan Taylor Scotch Whisky may not include all taxes or duties that could be charged on arrival in your country of delivery. You are personally liable for the payment of any additional charges applicable in your country.</p>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>The Entrants will be notified by email if they have been successful and payment will be taken immediately upon an entry being drawn.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>AGE RESTRICTION</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>No goods are offered for sale at this site to any person who is below legal drinking age in the country in which he or she is resident or any person resident in a country where such sale would be contrary to local law. By placing an order through our site you warrant that you are of a lawful age. If you are buying Products as a gift, the recipient must also be of a lawful age. This is the responsibility of the purchaser. If our couriers are in any doubt about the age of the recipient on delivery, they may request some form of ID.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>DISCLOSURE</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>The main characteristics of the goods offered through this site are set out on the pages picturing them. Every effort has been made to display the colours of the goods as accurately as possible. However, because the colour you see will depend on your monitor we cannot guarantee that the colours of the goods received in person will be the same as the colours shown on your monitor.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>SALES TAX/IMPORT DUTIES</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>The sales tax applicable to your order will depend on a number of factors which will be established at the point of placing your order. These include the following:</p>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>The type of goods ordered (rates may differ);</p>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>Where the goods are to be delivered to e.g. UK, EU, outside EU.</p>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>You are responsible for paying any import or similar duties which may be levied on the export or import of the goods ordered by you.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>PRICES, AVAILABILITY AND PROMOTIONS</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>Prices, promotions and specifications can change without notice and Products are subject to availability. If for any reason beyond our control Duncan Taylor Scotch Whisky is unable to supply a particular Product you will be notified as soon as possible.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>PURCHASE LIMITS</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>For certain expressions or limited editions, individuals will only be eligible to buy a limited number of bottles.</p>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>Any charges that result from breaking the terms and conditions and cancellation of order are the responsibility of the individual.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>OUR LIABILITY</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>Duncan Taylor Scotch Whisky’s liability for any losses suffered which were directly caused by Duncan Taylor Scotch Whisky is limited to the purchase price of the Product. Duncan Taylor Scotch Whisky is not responsible for any indirect losses which happen as a side effect of the main loss or damage (including, but not limited to, loss of income or revenue, loss of business, loss of profits or contracts, loss of anticipated savings).</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>USE OF YOUR PERSONAL DATA</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>Please refer to our separate privacy policy (“Privacy Policy”) which informs you how your personal information will be used.</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>WAIVER</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>If Duncan Taylor Scotch Whisky fail to insist upon strict performance of any of your obligations under these terms and conditions, or if Duncan Taylor Scotch Whisky fails to exercise any of the rights or remedies to which it is entitled to, this shall not constitute a waiver of such rights or remedies and shall not relieve you from compliance with such obligations. A waiver by Duncan Taylor Scotch Whisky of any default shall not constitute a waiver of any subsequent default. No waiver by Duncan Taylor Scotch Whisky of any of these terms and conditions shall be effective unless it is expressly stated to be a waiver and is communicated to you in writing. </p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>ENTIRE AGREEMENT</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>These terms and conditions and any document expressly referred to in them constitute the entire agreement between us and supersede any previous arrangement, understanding or agreement between us. We each acknowledge that, neither of us relies on any statement, representation, assurance or warranty (“Representation”) of any person (whether a party to that Contract or not) other than as expressly set out in these terms and conditions. Each of us agrees that the only rights and remedies available to us arising out of or in connection with a Representation shall be for what is provided in these terms and conditions. Nothing in this clause shall limit or exclude any liability for fraud. </p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>OUR RIGHT TO VARY THESE TERMS AND CONDITIONS</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>We have the right to revise and amend these terms and conditions from time to time to reflect, amongst other things, changes in market conditions affecting our business, changes in technology or systems used, changes in payment methods, changes in relevant laws and regulatory requirements. You will be subject to the policies and terms and conditions in force at the time that you order Products, unless any change to those policies or these terms and conditions is required to be made by law or governmental authority (in which case it will apply to orders previously placed by you).</p>

                    <h2 className='text-2xl sm:text-3xl lg:text-4xl  mb-6 leading-tight ' style={{ color: '#AC8F5C' }}>GOVERNING LAW AND JURISDICTION</h2>
                    <p className='px-6 md:px-0 text-base md:text-2xl  mb-8 leading-relaxed' style={{ color: '#4D4D4D' }}>Contracts for the purchase of Products through our site and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) will be governed by Scots law. Any dispute or claim arising out of or in connection with such Contracts or their formation (including non-contractual disputes or claims) shall be subject to the non-exclusive jurisdiction of the courts of Scotland</p>


                    <div className='h-20'></div>

                </div>
            </section>

        </>
    )
}
