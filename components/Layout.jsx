import React from 'react';
import {SwitchTransition, Transition} from 'react-transition-group';

const Layout = ({children}) => {
    return ( 
    <>
          <main>{children}</main>
    </>
     );
}
 
export default Layout;