// React hook to run code when our component is 'ready'.
import 
    React
    , { useEffect } from 'react';

import { Auth } from 'aws-amplify';
import Container from './Container';
import { useNavigate } from 'react-router-dom';

// Functional component implemented as a const with a multi statement lambda.
const Protected = () => {

    const nav = useNavigate();

    const redirectUserIfNotAuthenticate = async () => {
        try{
            await Auth.currentAuthenticatedUser();
        }
        catch(err){
            nav('/profile')
        }
    };

  useEffect(
      () => {
            redirectUserIfNotAuthenticate();
        }
        , []
     );

    // Return the JSX.
    return (
        <Container>
            <h1>
                Protected route
            </h1>
        </Container>
    );
    }

export default Protected;