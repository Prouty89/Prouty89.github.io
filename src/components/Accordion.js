import React from "react";
import Collapse from "@kunukn/react-collapse";
import styled from 'styled-components';


const initialState = [false];
function reducer(state, { type, index }) {
  switch (type) {
    case "toggle":
      state[index] = !state[index];
      return [...state];

    default:
      throw new Error();
  }
}

function Block({ isOpen, title, onToggle, children }) {
  return (
    <div className="toggle-bar">
      <button className="btn-toggle" onClick={onToggle}>
        <span>{title}</span>
      </button>
      <Collapse layoutEffect isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
}

function Accordion() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StyledAccordion className="accordion">

      <Block className="block"
        title="More!"
        isOpen={state[0]}
        onToggle={() => dispatch({ type: "toggle", index: 0 })}
      >
        <div className="accordion-skills">
            <div className="row-one rows">
                <p  className="react inds">ReactJS</p>
                <p  className="redux inds">Redux</p>
                <p  className="jest inds">Jest JavaScript Testing</p>
                <p  className="gatsby inds">GatsbyJS PWA Generator</p>
                <p  className="graphql inds">GraphQL Data Query</p>
            </div>
            <div className="row-two rows">
                <p className="node inds">NodeJS</p>
                <p className="node inds">RESTful API protocols</p>
                <p  className="express inds">Express.js</p>
                <p  className="sql">Structured Query Langquage</p>
                <p  className="sqlite inds">SQLite DBMS</p>
                <p  className="postgres inds">PostgreSQL DMBS</p>
            </div>
            <div className="row-three rows">
                <p  className="python inds">Python</p>
                <p  className="vsc inds">Scrum Teamwork</p>
                <p  className="vsc inds">Visual Studio Code</p>
                <p className="git inds">Best Git Practices</p>
                <p  className="figma inds">Figma Interface Design System</p>
            </div>
        </div>
      </Block>
    </StyledAccordion>
  );
}

export default Accordion;


const StyledAccordion = styled.div`
display: flex;
align-items: flex-end;
padding-bottom: 20px;
z-index: 1;

@media(max-width: 1300px){
    height: 75%;
    align-items: flex-start;
}

.inds{
  @media(max-width:1300px){
    width: 50%;
  }
}

.accordion-skills{
    display: flex;
    padding: 15px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 1%;
    margin-right: 1%;
    background: #F8F8F1;
    color: #777777;
    border-radius: 30px;
    justify-content: space-evenly;

    @media(max-width:1300px){
        padding: 0px;
        display: flex;
        justify-content: center;
        
    }

    .rows{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;

        @media(max-width:1300px){
            width: 33%;
            display: flex;
            height: 400px;
            flex-direction: column;
            justify-content: space-around;
    
        }
    }


}

.toggle-bar{
    height: 80%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-end;
    padding-bottom: 50px;

    @media(max-width:1300px){
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        padding-bottom: 0px;
        height: 100%;
    }
    

.btn-toggle{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 90%;
    border-radius: 30px;
    width: 40px;
    border: none;
    background: #373737;
    cursor: pointer;
    height: 300px;
    margin-left: 2%;
    align-self: flex-end;

    &:focus{
      outline: 0;
    }

    @media(max-width:1300px){
        width: 350px;
        height: 30px;
        display: flex;
        text-align:center;
        align-self: center;
      margin-bottom: 2%;
    }
}
   span{
       font-family: 'Work Sans', sans-serif;
       display: flex;
       justify content: center; 
       align-items: center;
       font-size: 1.5rem;
       text-align: center;
       writing-mode: vertical-lr;
       transform: rotate(180deg);
       width: 100%
       color: #ffffff;

       @media(max-width:1300px){
        display: flex;
        justify-content: center;
        writing-mode: rl;
        font-size: 1rem;
        text-align: center;
        transform: rotate(0deg);
    }
   }

   .row-one{
    @media(max-width:1300px){
        align-items: center;
    } 
   }
}
`