import styled from 'styled-components/macro'

export const AppBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1b1c22;
  height: 80vh;
  width: 70vw;
  padding: 20px;
`

export const HeadingAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const CardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #f8fafc;
`

export const CardImage = styled.img`
  width: 70%;
  margin-top: 20px;
`

export const TextAreaContainer = styled.div`
  border: 1px ridge #cbd5e1;
  border-radius: 10px;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px ridge #cbd5e1;
  padding-left: 0;
  padding-bottom: 10px;
  margin-bottom: 0;
`

export const ButtonList = styled.li`
  list-style-type: none;
  margin-left: 15px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextAreaInput = styled.textarea`
  margin-top: 0;
  border: none;
  outline: none;
  padding: 20px;
  background-color: transparent;
  color: #f8fafc;
  font-weight: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderLineActive ? 'underline' : 'normal'};
`
