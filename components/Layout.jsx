import React from 'react';
import {SwitchTransition, Transition} from 'react-transition-group';

const Layout = ({children}) => {
    return ( 
    <>
          <main className='md:px-16 px-5 flex flex-col items-stretch'>{children}</main>
    </>
     );
}
 
export default Layout;