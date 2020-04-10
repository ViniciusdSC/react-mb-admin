import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './header';
import Aside from './aside';
import Footer from './footer';

const Default = ({ children, title, breadcrumbs = [] }) => (
  <div className="wrapper">

    <Header />

    <Aside />

    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{ title }</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                { breadcrumbs.map(({ breadcrumbTitle, link }) => (
                  <li key={breadcrumbTitle} className="breadcrumb-item">
                    <Link to={link}>{ breadcrumbTitle }</Link>
                  </li>
                )) }
                <li className="breadcrumb-item active">{ title }</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          { children }
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

Default.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    breadcrumbTitle: PropTypes.string, link: PropTypes.string,
  })),
};

Default.defaultProps = {
  breadcrumbs: [],
};

export default Default;
