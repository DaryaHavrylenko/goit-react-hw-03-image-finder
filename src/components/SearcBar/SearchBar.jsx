import React, { Component } from 'react';


class SearchBar extends Component {
  state = {
    query: '',
};
    handleChange = e => {
        const { target } = e;
    this.setState({
      query: target.value.toLowerCase(),
    });
 
 
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Please, enter query!');
      return
}
    this.props.onSubmit(this.state.query);
    this.setState({ query: ''});
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

    render() {
        const { query} = this.state;
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
