//React
import React from 'react';

const Header = (props) => {
    // let headerContent = props.headerData.map((ele) => {
    //     return <p className='header__content'>{ele}</p>
    // })
    return (
        <nav>
            <div className='header'>
                <p className='header__content'>{props.headerDataOne}</p>
                <p className='header__content'>{props.headerDataTwo}</p>
                <p className='header__content'>{props.headerDataThree}</p>
                <p className='header__content'
                    onClick={props.toggleHeaderContent}>{props.headerDisplay ? '-' : '+'}
                </p>
            </div>
        </nav>
    )
}


export default Header