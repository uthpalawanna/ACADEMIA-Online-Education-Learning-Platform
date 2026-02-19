import React from 'react';
import Title from '../common/title/title';

const AboutCard = () => {
  return (
    <section className='aboutHome'>
      <div className="container flexSB">
        <div className="left row">
          <img src="/images/about.webp" alt="About" />
        </div>
        <div className="right row">
          <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning'/>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;