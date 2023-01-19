import React from 'react';

import './PageContent.css';

function PageTitle (props) {

    const {title} = props;

    return(
        <section className='title'>
            {title}
        </section>
    )
}

export default PageTitle;