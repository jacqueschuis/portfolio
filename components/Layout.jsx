import React from 'react';

const Layout = ({children}) => {
    return ( 
    <>
          <main className='md:px-16 px-5 flex flex-col items-stretch'>{children}</main>
    </>
     );
}
 
export default Layout;