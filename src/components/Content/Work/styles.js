import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0px;

`;

export const ItemContainer = styled.div`
    display: flex;
    margin: 40px 0px;
    @media (max-width: 1000px ) {
        flex-direction: column;
    };
`;

export const ItemLeft = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px ) {
        margin-bottom: 10px;
    };
`;

export const ImageContainer = styled.div`
    background-color: #ffd500;
    width: 100px;
    height: 100px;
    margin-right: 10px;

    &:hover {
        cursor: pointer;
    }

    /* @media (max-width: 800px ) {
        width: 90%;
        height: 90%;
    }; */
`;

export const ImageBg = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    padding: 5px;
    transition: transform 0.2s, filter 1s;
    transform:translate(3px, -3px);

    &:hover {
        transform:translate(5px, -5px);
        filter: none;
    }
`;

export const Image = styled.img`
    max-width:100%;
    object-fit: contain;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-right: 30px;
    width: 200px;
`;

export const Company = styled.div`
    font-size: 170%;
`;

export const Position = styled.div`
    font-size: 150%;

`;
export const Period = styled.div`
    color: #a0a0a0;
`;

export const InfoRight = styled.div`
    max-width: 500px;
`;

export const Description = styled.div`
    color: #a0a0a0;
    border-left: solid 3px #ffd500;
    padding-left: 15px;
`;

export const Link = styled.div`
    color: #a0a0a0;
    border-left: solid 3px #ffd500;
    padding-left: 15px;
`;