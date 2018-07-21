import React, { Component } from "react";

class EditAbstract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abstract: props.abstract,
      editing: false
    };
    this.updateAbstract = this.updateAbstract.bind(this);
  }
  updateAbstract(val) {
    this.setState({ abstract: val });
  }

  render() {
    const { title } = this.props;
    const { abstract } = this.state;
    //console.log(this.props);

    if (this.state.editing) {
      return (
        <section className="edit_abstract">
          <textarea
            className="edit"
            value={abstract}
            placeholder="Updated Abstract"
            onChange={e => this.updateAbstract(e.target.value)}
          />
          <br />
          <br />
          <button
            id="button_click_abstract"
            onClick={() => {
              this.props.updateNews(title, abstract);
            }}
          >
            Update Abstract
          </button>
          <button onClick={() => this.setState({ editing: false })}>
            Cancel
          </button>
          <br />
          <br />
        </section>
      );
    }

    return (
      <button onClick={() => this.setState({ editing: true })}>
        Edit Article
      </button>
    );
  }
}

export default EditAbstract;
