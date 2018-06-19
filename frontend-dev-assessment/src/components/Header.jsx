// React;
import React from 'react';
// Props;
import PropTypes from 'prop-types';

const propTypes = {
    headerDataOne: PropTypes.string,
    headerDataTwo: PropTypes.string,
    headerDataThree: PropTypes.string,
    toggleHeaderContent: PropTypes.func,
    showHideHeaderContent: PropTypes.bool
};

const Header = (props) => {
    // props.toggleHeaderContent =>toggles header content;
    // press on the '-' to hide content and change '-' to '+' (uses props.showHideHeaderContent); 
    // '+' to show content and change back to '-';

    return (
        <nav>
            <div className="header">
                <p className="header__content">{props.headerDataOne}</p>
                <p className="header__content">{props.headerDataTwo}</p>
                <p className="header__content">{props.headerDataThree}</p>
                <div className="header__content">
                    <button className="header__button"
                        onClick={props.toggleHeaderContent}>

                        <p>{props.showHideHeaderContent ? '-' : '+'}</p>
                    </button>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = propTypes;

export default Header;