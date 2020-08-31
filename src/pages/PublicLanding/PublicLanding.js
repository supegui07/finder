import React from 'react';
import FormSignInConnectedContainer from "../../components/FormSignIn/FormSignInConnectedContainer";
import './PublicLanding.scss'
import Clap from '../../components/Clap/Clap';

const PublicLanding = () => {
  return (
    <main className='public-landing'>
      <section className="showcase">
        <span className='title'>
          Looking for React Best Practices
          <Clap>
            <Clap.Icon />
            <Clap.Count />
            <Clap.Total />
          </Clap>
        </span>
      </section>
      <section className='sign-in'>
        <FormSignInConnectedContainer />
      </section>
    </main>
  );
};

export default PublicLanding;