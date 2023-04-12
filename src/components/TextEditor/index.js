import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  CardContainer,
  ImgContainer,
  Heading,
  Image,
  EditorContainer,
  ButtonsContainer,
  Items,
  Button,
  TextArea,
  Line,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onUnderline = () => {
    const {isUnderline} = this.state
    this.setState({isUnderline: !isUnderline})
  }

  onItalic = () => {
    const {isItalic} = this.state
    this.setState({isItalic: !isItalic})
  }

  onBold = () => {
    const {isBold} = this.state
    this.setState({isBold: !isBold})
  }

  render() {
    const {isBold, isUnderline, isItalic} = this.state

    return (
      <BgContainer>
        <CardContainer>
          <ImgContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgContainer>
          <EditorContainer>
            <ButtonsContainer>
              <Items>
                <Button
                  data-testid="bold"
                  onClick={this.onBold}
                  color={isBold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold size={25} />
                </Button>
              </Items>
              <Items>
                <Button
                  data-testid="italic"
                  onClick={this.onItalic}
                  color={isItalic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic size={25} />
                </Button>
              </Items>
              <Items>
                <Button
                  data-testid="underline"
                  //   onClick={() => this.setState({isUnderline: !isUnderline})}
                  onClick={this.onUnderline}
                  color={isUnderline ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </Items>
            </ButtonsContainer>
            <Line />
            <TextArea
              fontStyle={isItalic ? 'italic' : 'normal'}
              fontWeight={isBold ? 'bold' : 'normal'}
              textDecoration={isUnderline ? 'underline' : 'normal'}
              row="30"
              cols="10"
            />
          </EditorContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
