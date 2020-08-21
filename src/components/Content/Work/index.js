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
        description: "I was responsible for developing a bunch of projects for the company’s clients. Most of the work I did was in ReactJS, doing frontend work. I followed the Scrum methodology along with the teams I was part of, following short sprints and deadlines.",
        link: "https://incodde.com"
    },
    {
        src: buzz,
        position: 'Intern',
        company: 'Buzzmonitor',
        period: 'May 2019 till April 2020',
        description: "At this company I was responsible for developing from scratch the frontend of an application called Trends, developed in ReactJS, which went to production to be used by the company’s clients. This application’s objective is to show social network data in charts, from a given query. Here I had tasks such as developing and deploying the application, managing issues and fixing bugs reported by the clients. ",
        link: "https://buzzmonitor.com"
    },
    {
        src: bit,
        position: 'Freelancer',
        company: 'Bitpreço.com',
        period: 'Feb 2019 till May 2019.',
        description: "This company is a bitcoin trading platform. It was my first experience developing applications that went to production and could be used by clients. I was responsible for fixing bugs and developing features for their platform, written in ReactJS.",
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