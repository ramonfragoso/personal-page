import styled from 'styled-components';

export const StyledContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    justify-content: center;
    padding: 30px 10% 30px 50px;
    width: 100%;
    height: 100%;
`;

export const CheckTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 200%;
    color: #515151;
    padding: 0;

`;

export const WorkTitleContainer = styled.div`
    background-color: #00ffea;
    margin-left: 10px;
`;

export const WorkTitle = styled.div`

    &:hover {
        transform:translate(5px, -5px);
        cursor: pointer;
    } 
    transition: ease-in-out 0.2s;
    background-color: #ff00ea;
    color: white;
    padding: 7px;
    text-shadow: -2px 2px 0px black;
`;

const Title = `    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 450%;
    color: white;
`;

export const PersonalTitle = styled.div`
    ${Title}
    text-shadow: -2px 2px 0px #00d5ff;
    color: white;
`;

export const LinePersonal = styled.div`
    height: 70px;
    width: 20%;
    background-color: #00d5ff;
`;

export const WorksTitle = styled.div`
        ${Title}
        text-shadow: -2px 2px 0px #ffd500;
        color: white;
    `;

export const LineWork = styled.div`
    height: 70px;
    width: 20%;
    background-color: #ffd500;
`;

export const Emoji = styled.div`
    font-size: 300%;
    &:hover {
        cursor: pointer;
    } 
`;