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
    color: black;
    padding: 7px;
    text-shadow: -2px 1px 0px white;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 450%;
    /* text-shadow: -2px 2px 0px #00ffea; */
    color: black;

`;

export const Line = styled.div`
    height: 70px;
    width: 20%;
    background-color: #00ffea;
`;

export const Emoji = styled.div`
    font-size: 300%;
    &:hover {
        cursor: pointer;
    } 
`;