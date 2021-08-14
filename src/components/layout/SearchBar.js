import React from 'react'

const SearchBar = () => {
    return (
        <nav className="deep-purple darken-3">
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required placeholder="Developed by Ahmed Faraz - Search here"/>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
    )
}

export default SearchBar;
