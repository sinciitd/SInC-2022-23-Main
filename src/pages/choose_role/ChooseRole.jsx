import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import student from "./student.png"
import startup from "./startup.png"
import mentor from "./mentor.png"
import tick from './tick.png'
import {useNavigate} from 'react-router-dom'

function ChooseRole(props) {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [selected, setSelected] = useState("");



  const handleRole = (role) => {
    if(role === "Student"){
      setRole("Student")
      setSelected("Student")
    }
    else if(role === "Startup"){
      setRole("Startup")
      setSelected("Startup")
    }
    else if(role === "Mentor"){
      setRole("Mentor")
      setSelected("Mentor")
    }
  }
  const handleContinue = () => {
    if(selected === "Student") {
      navigate('/student')
    }
    else if(selected === "Startup"){
      navigate('/startup')
    }
    else if(selected === "Mentor"){
      navigate('/mentor')
    }
  }
  
  return (
    <Wrapper>
      <Heading>Are you a,</Heading>
      <Options>
        <Option onClick = {() => handleRole('Student')}>
          <Icon src={student} />
          <Label >Student</Label>
          { selected ==="Student" && <Icon src = {tick} style = {{width: "5%", position:"absolute", marginLeft:"25%",marginTop:"17%"}} onClick = {() => handleRole()}/>}
        </Option>
        <Option onClick = {() => handleRole('Startup')}>
          <Icon src={startup} />
          <Label>Startup</Label>
          { selected ==="Startup" && <Icon src = {tick} style = {{width: "5%", position:"absolute", marginLeft:"25%",marginTop:"17%"}} />}
        </Option>
        <Option onClick = {() => handleRole('Mentor')}>
          <Icon src={mentor} />
          <Label>Mentor</Label>
          { selected ==="Mentor" && <Icon src = {tick} style = {{width: "5%", position:"absolute", marginLeft:"25%",marginTop:"17%",}} onClick = {() => handleRole()}/>}
        </Option>
        
      </Options>
      
      <ContinueButton onClick={()=>handleContinue()}>Continue</ContinueButton>
    
      
    </Wrapper>
  );
}

const Wrapper = styled.span`
  border-radius: 22.264px;
  box-shadow: 0px 0px 11.132px 0px rgba(111, 106, 248, 0.25);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 74px;
  width: 100%;
  height: 100vh;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    height:auto
  }
`;

const Heading = styled.div`
  color: #082533;
  align-self: center;
  margin-block : 5%;
  white-space: nowrap;
  font: 400 35px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 5%;
  }
`;

const Options = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    width: 60%;
    
    
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  border-radius: 1.13481rem;
  border: 0.272px solid #41B7B7;
  background: #FAFAFA;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 200px;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 45%;
  margin-block-start: 10%;
  fill: #fff;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 5%; 
`;

const Label = styled.div`
  color: #082533;
  white-space: nowrap;
  margin: 39px 0 13px;
  text-align: center;
  font: 400 28px Poppins, sans-serif;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
`;


const ContinueButton = styled.span`
  color: #f8fafb;
  white-space: nowrap;
  border-radius: 15px;
  background-color: #082533;
  align-self: center;
  text-align: center;
  margin-top: 63px;
  width: 485px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 23px 60px;
  font: 600 22px Poppins, sans-serif;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 425px) {
    width: auto;
  }
}
`;
export default ChooseRole;

