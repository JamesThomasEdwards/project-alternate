//React
import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className='header'>
                <p className='header__content'>{props.headerDataOne}</p>
                <p className='header__content'>{props.headerDataTwo}</p>
                <p className='header__content'>{props.headerDataThree}</p>
                <div className='header__content'>
                    <button
                        onClick={props.toggleHeaderContent}><p>{props.showHideHeaderContent ? '-' : '+'}</p>
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default Header