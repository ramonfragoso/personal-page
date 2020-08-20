import styled from 'styled-components';


export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;

    padding-left: 10%;
    padding-right: 10%;
    margin-top: 2%;
    
    @media (max-width: 800px) {
        padding: 5%;
    }
    
    @media (max-width: 800px ) {
        flex-direction: column;
    };

`;

export const ImageContainer = styled.div`
    background-color: #ff00ea;
    width: 350px;
    height: 350px;

    @media (max-width: 800px ) {
        width: 90%;
        height: 90%;
    };

    margin-right: 50px;
`;

export const Image = styled.img`

    transition: ease-in-out 0.2s;
    transform:translate(10px, -10px);

    &:hover {
    transform:translate(20px, -20px);
    }
    max-width: 100%;
    max-height: 100%;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Title = styled.div`
    font-size: 500%;
    color: white;
    text-shadow: -2px 2px 0px #ff8000;
`;

export const Subtitle = styled.div`
    font-size: 200%;
    margin: 5px;
    color: #bfbfbf;
`;

export const Link = styled.a`
    color: #ff00ea;

    @media (max-width: 800px ) {
        font-size: 75%;
    };

    
`;
