import React, { Component } from "react";

class EditAbstract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abstract: props.abstract
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
        <br />
        <br />
      </section>
    );
  }
}

export default EditAbstract;
