import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout, user}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="link header__title" to="/">
          <div className="glitch" data-text="hartjenstein">hartjenstein</div>
        </Link>
        <div className="link header__link-container">
          <Link className="link header__title" to="/contact">
            <h4 className="link__text">Contact</h4>
          </Link>
          <Link className="link header__title" to="/about">
            <h4 className="link__text">About</h4>
          </Link>
          {console.log(user.uid)}
          {!user.uid && <Link className="link header__title" to="/login">
          <button className="button button--link">Login</button>
          </Link>}
          {user.uid && <button className="button button--link" onClick={startLogout}>Logout</button>}
        </div>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
};
//goes below login button - <button className="button button--link" onClick={startLogout}>Logout</button>
const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
