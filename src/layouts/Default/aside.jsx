import React from 'react';
import { Link } from 'react-router-dom';

export default function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <span className="brand-text font-weight-light">Mighty Blade Admin</span>
      </a>

      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Sistema
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
