import React from "react";
import SVG from "react-inlinesvg/lib/index";
import JS from '../assets/JS.svg';
import CSS from '../assets/CSS.svg';
import HTML from '../assets/HTML.svg';
import Accordion from "./Accordion";
import styled from 'styled-components';
import Computer from '../assets/Computer.jpg';


function Skill(){
  
    
    return(
        <StyledSkills className="skills-container">
            <img className="computer" src = {Computer} alt ="comp-guy"/>   
                <div className="first-skill">
                    <SVG className="html inds-b" src= {HTML}/>
                    <SVG className="css inds-b" src= {CSS}/>
                    <SVG className="js inds-b" src= {JS}/>
                </div>
                    <Accordion />
            </StyledSkills>
    )
}

export default Skill;

const StyledSkills = styled.div`
height: 70%;
display: flex;
flex-direction: column;
justify-content: flex-end;
position: relative; 

@media(max-width:1300px){
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
}

.first-skill{
    height: 20%;
    align-self: center;
    padding-bottom: 50px;
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-around;
    

    @media(max-width:1250px){
        width: 90%;
        flex-direction: row;
    }

    .inds-b{
        
        @media(max-width: 750px){
            height: 60%;
        }
    }
}

}

`