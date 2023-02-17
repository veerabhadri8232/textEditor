import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

class TextEditor extends Component {
  state = {
    boldClicked: false,
    underlineClicked: false,
    italicClicked: false,
    textAreaValue: '',
  }

  onClickBold = () => {
    this.setState(prevState => ({boldClicked: !prevState.boldClicked}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italicClicked: !prevState.italicClicked}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      underlineClicked: !prevState.underlineClicked,
    }))
  }

  onChangeTextArea = event => {
    this.setState({textAreaValue: event.target.value})
  }

  render() {
    const {
      boldClicked,
      italicClicked,
      underlineClicked,
      textAreaValue,
    } = this.state

    let boldColor = '#f1f5f9'
    let italicColor = '#f1f5f9'
    let underlineColor = '#f1f5f9'

    if (boldClicked === true) {
      boldColor = '#faff00'
    }

    if (italicClicked === true) {
      italicColor = '#faff00'
    }

    if (underlineClicked === true) {
      underlineColor = '#faff00'
    }

    let className = 'textarea-container'

    if (
      boldClicked === true &&
      underlineClicked === true &&
      italicClicked === true
    ) {
      className = 'textarea-container bold italic underline'
    } else if (boldClicked === true && underlineClicked === true) {
      className = 'textarea-container bold underline'
    } else if (boldClicked === true && italicClicked === true) {
      className = 'textarea-container bold italic'
    } else if (underlineClicked === true && italicClicked === true) {
      className = 'textarea-container italic underline'
    } else if (boldClicked === true) {
      className = 'textarea-container bold'
    } else if (italicClicked === true) {
      className = 'textarea-container italic'
    } else if (underlineClicked === true) {
      className = 'textarea-container underline'
    }

    return (
      <div className="main-container">
        <div className="text-editor-main-container">
          <div className="left-side-container">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-editor-img"
            />
          </div>
          <div className="right-side-container">
            <ul className="font-style-container">
              <li>
                <button
                  onClick={this.onClickBold}
                  type="button"
                  className="bold-btn"
                  data-testid="bold"
                >
                  <VscBold color={boldColor} size="18px" />
                </button>
              </li>
              <li>
                <button
                  onClick={this.onClickItalic}
                  type="button"
                  className="italic-btn"
                  data-testid="italic"
                >
                  <GoItalic color={italicColor} size="18px" />
                </button>
              </li>
              <li>
                <button
                  onClick={this.onClickUnderline}
                  type="button"
                  className="underline-btn"
                  data-testid="underline"
                >
                  <AiOutlineUnderline color={underlineColor} size="18px" />
                </button>
              </li>
            </ul>
            <hr className="hr" />
            <textarea
              value={textAreaValue}
              onChange={this.onChangeTextArea}
              className={className}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
