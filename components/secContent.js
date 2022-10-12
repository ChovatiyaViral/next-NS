import React from 'react'
import Image from 'next/image';
import classnames from 'classnames';

import Content from './layout/content/Content';
import Section from './layout/content/section';

function SecContent() {
    return (
        <div>

            <div style={{ marginBottom: 154 }}></div>
            <Content title="Our Story"
                paragraph="Remember those long, hot, balmy days, where we were in the company of good people, in great surroundings, just enjoying the moment, thinking about nothing else? In today’s world there are not enough of those moments, so we have set out to bring the good times back."
            />

            {/* <Section>
                <div className='flex items-center justify-evenly' style={{ background: '#FEF1FF' }}>
                    <div className='flex flex-col items-center justify-center'>
                        <Content subtitle1="INDIAN SUMMER GIN" title="Saffron infused"
                            paragraph="Remember those long, hot, balmy days, where we were in the company of good people, in great surroundings, just enjoying the moment, thinking about nothing else? In today’s world there are not enough of those moments, so we have set out to bring the good times back."
                        />
                        <div style={{ marginBottom: 25 }}></div>
                        <button className='btn' >Discover</button>
                    </div>
                    <div>
                        <Image src='/img7.png' alt='bear' width={627} height={1028} />
                    </div>
                </div>

                <div style={{ marginBottom: 30 }}></div>

                <div className='flex items-center justify-evenly' style={{ background: '#FBF7E6'}}>
                    <div>
                        <Image src='/img8.png' alt='bear2' width={610} height={1028} />
                    </div>
                    <div className='columnFlex'>
                        <Content subtitle1="INDIAN SUMMER GIN" title="Cask Strength"
                            paragraph="Remember those long, hot, balmy days, where we were in the company of good people, in great surroundings, just enjoying the moment, thinking about nothing else? In today’s world there are not enough of those moments, so we have set out to bring the good times back."
                        />
                        <div style={{ marginBottom: 25 }}></div>
                        <Button className='btn' >Discover</Button>
                    </div>
                </div>
            </Section> */}

        </div>
    )
}

export default SecContent
