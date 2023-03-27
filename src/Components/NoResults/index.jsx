import { Heading } from '@chakra-ui/react';
import React from 'react';

const NoResults = () => {
    return(
        <div>
            <Heading color='red.500' textAlign='center'>Su búsqueda no arrojó resultados</Heading>
        </div>
    )
}

export { NoResults }