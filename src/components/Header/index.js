import React from 'react';
import { StyledHeader, Title, ImageContainer, Image, Info, Subtitle, Link } from './styles';
import prof_pic from '../../images/prof_pic.jpg';
import resume from '../../images/resume.pdf';

const Header = () => {

  return(
    <StyledHeader>
      <ImageContainer>
        <Image src={prof_pic}/>
      </ImageContainer>
      <Info>
        <Title>Ramon Fragoso</Title>
        <Subtitle>Software Developer</Subtitle>
        <Subtitle>CS Major</Subtitle>
        <Subtitle>Visit my Github: <Link style={{color: '#ff00ea'}} href="https://github.com/ramonfragoso" target="_blank">https://github.com/ramonfragoso</Link></Subtitle>
        <Subtitle>Download my&nbsp;  
          <a style={{
          color: '#ff00ea'
          }} href={resume} download="resume.pdf">resumé</a></Subtitle>
      </Info>
    </StyledHeader>
  );
}

export default Header;