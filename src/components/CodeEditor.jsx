import React from "react";
import PropTypes from "prop-types";
import AceEditor from "react-ace";

class CodeEditor extends React.PureComponent {
  constructor(props) {
    super(props);

    const { value } = this.props;

    this.state = {
      value,
      // inputArr:[]
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (prevProps.value !== value) {
      this.onChange(value);
    }
  }

  onChange = value => {
    const { onChange } = this.props;

    this.setState({ value });
    onChange(value);
  };

  clearInput = () => {
    this.setState({
      value:""
    })
  }

  getValue = () => {
    const { value } = this.state;
    return value;
  };

  render() {
    const { value } = this.state;

    return (
      <>
      {/* <button id="cancel-input-btn" type="button" onClick={() => this.clearInput()}>Clear Code</button> */}
      <AceEditor
        theme="twilight"
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
        {...this.props}
        onChange={this.onChange}
        value={value}
      />
      </>
    );
  }
}

CodeEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

CodeEditor.defaultProps = {
  value: "",
  onChange: () => null
};

export default CodeEditor;
