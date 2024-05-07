import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;
  padding-right: 50px;
  padding-left: 50px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 576px) {
    width: 100%;
    padding: 20px;
  }
`

export const DivContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #223a5f;
  color: #ffffff;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
    padding: 20px;
  }
`
export const Para = styled.p`
  margin: 5px;
  font-family: 'Roboto';
  font-size: 20px;
`

export const ScoreContainer = styled.div`
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  width: 70%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    min-width: 450px;
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const Div = styled.div`
  text-align: ${props => props.textAlign};
  background-color: ${props => props.bgColor};
  width: ${props => props.width};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: ${props => props.aliItem};
`

export const DivBtn = styled.div`
  background-color: #ffffff;
  padding: 20px;
  backgroung-color: red;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const DivScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 10px;
`
export const GameButtonContainer = styled(Div)`
  background-color: ${props => props.backColor};
  margin-top: 50px;
  width: ${props => props.width};
  display: flex;
  justify-content: ${props => props.justifyContetnt};
  flex-wrap: wrap;
`

export const Buttton = styled.button`
  background-color: ${props => props.bgColor};
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 20px;
`

export const Img = styled.img`
  width: ${props => props.width};
`
