import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  Container,
  DivContainer,
  ScoreContainer,
  Para,
  Div,
  DivScore,
  GameButtonContainer,
  Buttton,
  Img,
  DivBtn,
} from './StyledComponents'

class Game extends Component {
  state = {score: 0, isGameStarted: false, playerId: '', opponentId: ''}

  resetGame = () => {
    this.setState({
      score: 0,
      isGameStarted: false,
      playerId: '',
      opponentId: '',
    })
  }

  getRockView = () => {
    const {opponentId, playerId} = this.state
    const {choicesList} = this.props
    return (
      <GameButtonContainer justifyContetnt="space-between" width="250px">
        <Div direction="column" aliItem="center">
          <p>YOU</p>
          <Img
            width="100px"
            alt="your choice"
            src={choicesList[playerId].imageUrl}
          />
        </Div>
        <Div direction="column" aliItem="center">
          <p>OPPONENT</p>
          <Img
            width="100px"
            alt="opponent choice"
            src={choicesList[opponentId].imageUrl}
          />
        </Div>
      </GameButtonContainer>
    )
  }

  renderRockOrPaperOrScissorView = () => {
  const { playerId, opponentId } = this.state;

  if (playerId === 0) {
    if (opponentId === 0) {
      return (
        <>
          <div>{this.getRockView()}</div>
          <p>IT IS DRAW</p>
        </>
      );
    }
    if (opponentId === 1) {
      return (
        <>
          <div>{this.getRockView()}</div>
          <p>YOU WON</p>
        </>
      );
    }
    return (
      <>
        <div>{this.getRockView()}</div>
        <p>YOU LOSE</p>
      </>
    );
  }
  if (playerId === 1) {
    if (opponentId === 1) {
      return (
        <>
          <div>{this.getRockView()}</div>
          <p>IT IS DRAW</p>
        </>
      );
    }
    if (opponentId === 2) {
      return (
        <>
          <div>{this.getRockView()}</div>
          <p>YOU WON</p>
        </>
      );
    }
    return (
      <>
        <div>{this.getRockView()}</div>
        <p>YOU LOSE</p>
      </>
    );
  }
  if (playerId === 2) {
    if (opponentId === 2) {
      return (
        <>
          <div>{this.getRockView()}</div>
          <p>IT IS DRAW</p>
        </>
      );
    }
    if (opponentId === 0) {
      return (
        <>
          <div>{this.getRockView()}</div>
          <p>YOU WON</p>
        </>
      );
    }
    return (
      <>
        <div>{this.getRockView()}</div>
        <p>YOU LOSE</p>
      </>
    );
  }
  
  // Default return statement to handle other cases
  return null; // or return some default view
}


  reset = () => {
    this.setState({isGameStarted: false})
  }

  renderGameResult = () => (
    <GameButtonContainer height="500px">
      {this.renderRockOrPaperOrScissorView()}
      <Buttton bgColor="#ffffff" onClick={this.reset}>
        PLAY AGAIN
      </Buttton>
    </GameButtonContainer>
  )

  renderGameView = () => {
    const {choicesList} = this.props

    return (
      <GameButtonContainer justifyContetnt="center" width="350px">
        {choicesList.map(each => {
          const onClickImgBtn = () => {
            const index = choicesList.findIndex(
              eachIterate => eachIterate.id === each.id,
            )

            const randomNum = Math.floor(Math.random() * choicesList.length)

            this.setState({
              isGameStarted: true,
              playerId: index,
              opponentId: randomNum,
            })
            if (index === 0) {
              if (randomNum === 1) {
                this.setState(prevState => ({score: prevState.score + 1}))
              } else if (randomNum === 2) {
                this.setState(prevState => ({score: prevState.score - 1}))
              }
            } else if (index === 1) {
              if (randomNum === 2) {
                this.setState(prevState => ({score: prevState.score + 1}))
              } else if (randomNum === 0) {
                this.setState(prevState => ({score: prevState.score - 1}))
              }
            } else if (randomNum === 0) {
              this.setState(prevState => ({score: prevState.score + 1}))
            } else if (randomNum === 1) {
              this.setState(prevState => ({score: prevState.score - 1}))
            }
          }

          return (
            <Buttton
              bgColor="transparent"
              data-testid={`${each.id.toLowerCase()}Button`}
              onClick={onClickImgBtn}
              key={each.id}
            >
              <Img width="100px" alt={each.id} src={each.imageUrl} />
            </Buttton>
          )
        })}
      </GameButtonContainer>
    )
  }

  render() {
    const {score, isGameStarted} = this.state
    return (
      <Container>
        <DivContainer>
          <ScoreContainer>
            <Div direction="column">
              <h1>
                Rock
                <br />
                Paper
                <br />
                Scissors
              </h1>
            </Div>
            <DivScore>
              <Para>Score</Para>
              <Para>{score}</Para>
            </DivScore>
          </ScoreContainer>
          {isGameStarted ? this.renderGameResult() : this.renderGameView()}
        </DivContainer>
        <div>
          <Popup
            modal
            trigger={
              <Buttton type="button" bgColor="#ffffff">
                Rules
              </Buttton>
            }
          >
            {close => (
              <DivBtn>
                <Buttton type="button" onClick={() => close()}>
                  <RiCloseLine aria-label="close" />
                </Buttton>
                <div>
                  <Img
                    width="100%"
                    alt="rules"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  />
                </div>
              </DivBtn>
            )}
          </Popup>
        </div>
      </Container>
    )
  }
}
export default Game
