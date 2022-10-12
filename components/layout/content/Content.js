import React from 'react';

function Content(props) {
    return (

        <div className='flex flex-col items-center justify-center'>
            { props?.subtitle1 && (<h4 className='subtitle1'>{props?.subtitle1}</h4>) }
            <h1 className={props.title === 'Cask Strength' ? 'title1' :'title' }>{props?.title} {props?.subtitle2 && (<span className='subtitle2'>{props?.subtitle2}</span>)}</h1>
            <hr className='horizontalLine' />
            {props?.paragraph && (<p className='paragraph'>{props?.paragraph}</p>)}
        </div>
    )
}

export default Content
