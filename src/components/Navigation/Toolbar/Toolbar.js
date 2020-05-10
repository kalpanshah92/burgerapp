import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) =>(
    <header>
        <div> Menu </div>
        <div> <Logo /> </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;