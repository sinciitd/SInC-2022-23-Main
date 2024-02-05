import React from "react";
import styled from "styled-components";
import logo from "./sinc_logo.png"

function LoginForm(props) {
  return (
    <Container>
      <Header>
        <Title>Login</Title>
        <Subtitle>Begin your journey of innovations with SinC</Subtitle>
      </Header>
      <Form>
        <FormGroup>
          <Label>
            Email <Required>*</Required>
          </Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>
            Password <Required>*</Required>
          </Label>
          <Input type="password" />
        </FormGroup>
        <Button>Login</Button>
        <TextWrapper>
          Don't have an account? <Link>Register here</Link>
        </TextWrapper>
      </Form>
      <ImageWrapper>
        <Image
          loading="lazy"
          src={logo}
        />
      </ImageWrapper>
      <ContactInfo>
        For urgent query, call us on +91 78787 87878
      </ContactInfo>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 22.264px;
  border: 1px solid #abe0e0;
  background-color: #fff;
  margin-inline: auto;
  display: flex;
  max-width: 70%;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 28px 80px 28px 80px;
  margin-block: 100px;

  @media (max-width: 1024px) {
    
  }
  @media (max-width: 768px) {
    width: 100%;

    @media (max-width: 468px) {
      max-width: 90%;
`;

const Header = styled.div`
  display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-item: center;
  width: 100%;
  max-width: 525px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  color: #082533;
  white-space: nowrap;
  margin-inline: auto;
  font: 500 40px Poppins, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Subtitle = styled.div`
  color: rgba(8, 37, 51, 0.8);
  align-self: stretch;
  margin-top: 21px;
  margin-inline: auto;
  white-space: nowrap;
  font: 400 18px Poppins, sans-serif;

  @media (max-width: 1024px) {
    white-space: initial;
    text-align: center;

  }
`;

const ImageWrapper = styled.span`
  display: flex;
  margin-top: 18px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20%;
  fill: var(--Black, #1e1b59);
  overflow: hidden;
  max-width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  align-self: stretch;
  margin-top: 12px;
  @media (max-width: 768px) {
    paddin-block: 4%;
`;

const Label = styled.label`
  color: #f00;
  font: 600 17px Poppins, sans-serif;


  @media (max-width: 768px) {
    paddin-block: 4%;
`;

const Required = styled.span`
  font-weight: 400;
  color: rgba(255, 0, 0, 1);
`;

const Input = styled.input`
  color: #082533;
  border-radius: 15.901px;
  border: 0.53px solid #082533;
  align-self: stretch;
  margin-top: 12px;
  padding: 26px 60px 26px 34px;
  font: 400 17px Poppins, sans-serif;


  @media (max-width: 768px) {
    paddin-block: 4%;
`;

const Button = styled.button`
  color: #f8fafb;
  border-radius: 15px;
  background-color: #082533;
  align-self: stretch;
  margin-top: 54px;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  font: 600 22px Poppins, sans-serif;


  @media (max-width: 768px) {
    paddin-block: 4%;
`;

const TextWrapper = styled.div`
  color: #205168;
  margin-top: 29px;
  white-space: nowrap;
  font: 400 18px Poppins, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Link = styled.span`
  color: rgba(32, 81, 104, 1);
  cursor: pointer;

  &:hover {
    // Optional: You can add additional styles when the span is hovered
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  color: #030e19;
  margin-top: 17px;
  white-space: nowrap;
  font: 400 18px Poppins, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default LoginForm;