import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    @media (max-width: 800px ) {
        flex-direction: column;
        justify-content: center;
        padding: 0px;
    };

    padding: 20px 10% 20px 20px;
`;

export const StyledProject = styled.div`
    padding-top: 50px;
    width:300px;
    color: #696969;
    font-size: 120%;
`;

export const ImageContainer = styled.div`
    background-color: #00FFEA;
    width: 300px;
    height: 300px;
    
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 800px ) {
        width: 90%;
        height: 90%;
    };
`;

export const Image = styled.img`

    transition: transform 0.2s, filter 1s;
    filter: grayscale(0.5);

    &:hover {
        transform:translate(5px, -5px);
        filter: none;
    }
    max-width: 100%;
    max-height: 100%;
`;

export const Item = styled.div`
    margin:10px 0px;
    padding-left: 5px;
    border-left: solid 4px #00FFEA;
    word-wrap: break-word;
`;
