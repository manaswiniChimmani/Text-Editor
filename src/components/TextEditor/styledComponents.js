import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  height: 100vh;
`
export const CardContainer = styled.div`
  background-color: #1b1c22;
  width: 60%;
  border-radius: 5px;
  display: flex;
  padding: 20px;
`

export const ImgContainer = styled.div``

export const Heading = styled.h1`
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
`

export const Image = styled.img`
  width: 320px;
  margin-right: 20px;
`

export const EditorContainer = styled.div`
  border: 1px solid #334155;
  background-color: #25262c;
  width: 60%;
  border-radius: 10px;
`
export const ButtonsContainer = styled.ul`
  padding: 10px;
  display: flex;
`
export const Items = styled.li`
  list-style: none;
`

export const Button = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border-width: 0px;
`

export const TextArea = styled.textarea`
  font-size: 14px;
  width: 100%;
  height: 80%;
  background-color: transparent;
  border-width: 0px;
  color: #ffffff;
  outline: none;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
export const Line = styled.hr`
  border: 1px solid #334155;
`
