import React from 'react';
import { Wrapper } from './style';
import { ReactComponent as NotFoundIcon } from '../../assets/svg/404.svg'

const NotFound = () => {
    return (
        <Wrapper>
            <NotFoundIcon />
        </Wrapper>
    )
}

export default NotFound;