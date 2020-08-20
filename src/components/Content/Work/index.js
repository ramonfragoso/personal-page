import React from 'react';
import { ItemContainer, Container, Image, ImageBg, ImageContainer, Company, Position, Period, ItemLeft, InfoContainer, InfoRight, Description, Link } from './styles';

import bit from '../../../images/bit.png';
import buzz from '../../../images/buzz.png';
import incodde from '../../../images/incodde.png';

const works = [
    {
        src: incodde,
        position: 'Software Developer',
        company: 'Incodde',
        period: 'April 2020 till now',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: "https://incodde.com"
    },
    {
        src: buzz,
        position: 'Intern',
        company: 'Buzzmonitor',
        period: 'May 2019 till April 2020',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: "https://buzzmonitor.com"
    },
    {
        src: bit,
        position: 'Freelancer',
        company: 'Bitpreço.com',
        period: 'Feb 2019 till May 2019.',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: "https://bitpreco.com"
    },
]
const Work = () => {

    return (
        <Container>
            <div>
                {works.map(work => 
                    <Item src={work.src} position={work.position} company={work.company} period={work.period} description={work.description} link={work.link}/>
                )}
            </div>
        </Container>
    )
}


const Item = ({src, period, position, company, description, link}) => {
    return (
        <ItemContainer>
            <ItemLeft>
                <ImageContainer>
                    <ImageBg>
                        <Image src={src}/>
                    </ImageBg>
                </ImageContainer>

                <InfoContainer>
                    <Company>{company}</Company>
                    <Position>{position}</Position>
                    <Period>{period}</Period>
                </InfoContainer>
            </ItemLeft>
            <InfoRight>
                <Description>
                    {description}
                </Description>
                <Link>
                    <a href={link} target="_blank">{link}</a>
                </Link>
            </InfoRight>
        </ItemContainer>
    )
}
export default Work;