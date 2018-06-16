import React from 'react';
//React Bootstrap
import PageHeader from 'react-bootstrap/lib/PageHeader'


const Header = (props) => {
    return (
        <nav>
            <div className='header'>
                <p className='button'>{props.headerData[0]}</p>
                <p className='button'>{props.headerData[1]}</p>
                <p className='button'>{props.headerData[2]}</p>
                <p className='button' onClick={props.toggleHeaderContent}>{props.headerDisplay ? '-' : '+'}</p>
            </div>
        </nav>
    )
}


export default Header