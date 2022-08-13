import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppBgContainer,
  CardContainer,
  HeadingAndImageContainer,
  CardHeading,
  CardImage,
  TextAreaContainer,
  ButtonsContainer,
  ButtonList,
  Button,
  TextAreaInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderLineActive: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({
      isUnderLineActive: !prevState.isUnderLineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderLineActive} = this.state
    return (
      <AppBgContainer>
        <CardContainer>
          <HeadingAndImageContainer>
            <CardHeading>Text Editor</CardHeading>
            <CardImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingAndImageContainer>
          <TextAreaContainer>
            <ButtonsContainer>
              <ButtonList>
                <Button
                  data-testid="bold"
                  type="button"
                  className="un-active-button"
                  onClick={this.onClickBold}
                  isActive={isBoldActive}
                >
                  <VscBold />
                </Button>
              </ButtonList>
              <ButtonList>
                <Button
                  data-testid="italic"
                  type="button"
                  className="un-active-button"
                  onClick={this.onClickItalic}
                  isActive={isItalicActive}
                >
                  <GoItalic />
                </Button>
              </ButtonList>
              <ButtonList>
                <Button
                  data-testid="underline"
                  type="button"
                  className="un-active-button"
                  onClick={this.onClickUnderLine}
                  isActive={isUnderLineActive}
                >
                  <AiOutlineUnderline />
                </Button>
              </ButtonList>
            </ButtonsContainer>
            <TextAreaInput
              type="textarea"
              rows={99}
              columns={55}
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderLineActive={isUnderLineActive}
            />
          </TextAreaContainer>
        </CardContainer>
      </AppBgContainer>
    )
  }
}

export default TextEditor
