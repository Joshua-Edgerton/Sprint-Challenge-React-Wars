//IMPORTS
import React from 'react'
import Character from './Character'
import styled from "styled-components";
//STYLED-COMPONENTS
const cardStyle = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
background color: black;
`;
//
const Cards = (props) => {
    return(
        <cardStyle className='cards'>
        {Array.from(props.charactersCollection).map((i, j) => {
            let name=i['name'];
            let birth_year=i['birth_year'];
            let eye_color=i['eye_color'];
            let gender=i['gender'];
            let hair_color=i['hair_color'];
            let skin_color=i['skin_color'];
            let height=i['height'];

            return <Character key={name} height={height} name={name} birth_year={birth_year} eye_color={eye_color} gender={gender} hair_color={hair_color} skin_color={skin_color}/>;})}
        </cardStyle>
    )
}

export default Cards