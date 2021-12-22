import React from 'react';

import { ThemeProvider } from 'styled-components';
import {StyledBreadcrumb} from './Breadcrumb.styled'
import themeSettings from './theme'
import { BreadcrumbItem } from './BreadcrumbItem';

const breadcrumbsList = [
    {name: 'Home', href: '#', active: true},
    {name: 'Library', href: 'https://getbootstrap.com/docs/4.0/components/breadcrumb/', active: true},
    {name: 'Data', active: false}
]

const Breadcrumb = () => {
    return (
        <ThemeProvider theme = {themeSettings}>
            <StyledBreadcrumb>
                {breadcrumbsList.map((item) => <BreadcrumbItem data= {item}/>)}
            </StyledBreadcrumb>
        </ThemeProvider>
    )
}

export default Breadcrumb;