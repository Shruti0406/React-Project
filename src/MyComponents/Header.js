import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">{props.title}</span>

        {props.searchBar && (
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
};
