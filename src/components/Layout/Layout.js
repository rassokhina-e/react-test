import React from 'react';
import { Header } from '../Header/index'
import { Footer } from '../Footer/index'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default React.memo(Layout)
