import styled from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(90deg, #393e46 0%, #00ADb5 100%);
    padding: 4rem 0 2rem 0;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-right: 100px;

    @media (max-width:960px) {
        display: flex;
        flex-direction: column;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;

    @media (max-width:960px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Links = styled.a`
    color: #eee;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;

    &:hover{
        color: #00adb5;
        transition: 200ms ease-in;
    }
`

export const Title = styled.a`
    color: #eee;
    margin-bottom: 40px;
    font-size: 22px;
    text-decoration: none;
    font-weight: bold;
` 