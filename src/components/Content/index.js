import React from 'react';
import { StyledContent, PersonalTitle, WorksTitle, CheckTitle, WorkTitle, WorkTitleContainer, LineWork, LinePersonal, Emoji } from './styles';
import Personal from './Personal';
import Work from './Work';
import styled from 'styled-components';

const Container = styled.div`
    padding-left: 10%;
    @media (max-width: 800px) {
        padding: 5%;
    }
`;

const Content = () => {

    const onClick = () => {
        window.document.getElementById('personal').scrollIntoView({behavior: "smooth"});
    }

    return (
        <Container>
            <StyledContent>
                <CheckTitle >
                    Check my 
                    <WorkTitleContainer onClick={onClick}>
                        <WorkTitle>work</WorkTitle>
                    </WorkTitleContainer>
                </CheckTitle>
                <Emoji onClick={onClick}>&#128071;</Emoji>
            </StyledContent>
            
            <WorksTitle id='personal'>
                Work
                <LineWork/>
            </WorksTitle>
            <Work/>

            <PersonalTitle id='personal'>
                Personal Projects
                <LinePersonal/>
            </PersonalTitle>
            <Personal/>        

        </Container>
    )
}

export default Content;