import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className='header'>
                <p className='header__content'>{props.headerData[0]}</p>
                <p className='header__content'>{props.headerData[1]}</p>
                <p className='header__content'>{props.headerData[2]}</p>
                <p className='header__content'
                    onClick={props.toggleHeaderContent}>{props.headerDisplay ? '-' : '+'}
                </p>
            </div>
        </nav>
    )
}


export default Header