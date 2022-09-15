import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ location }) => {
  const crumbs = location.pathname.split('/');
  let crumbRoute = '';
  const crumbsRoutes = crumbs?.map((crumb) => {
    crumbRoute += crumbRoute.length > 0 ? `/${crumb}` : crumb;
    return {
      route: crumbRoute,
      name: `/${crumb}`,
    };
  });
  return (
    <nav className={styles.breadcrumb__container}>
      <ol className={styles.breadcrumb__list}>
        {crumbsRoutes?.map((crumb, index) => {
          return (
            crumb.route.length > 0 && (
              <li className={styles.breadcrumb__item} key={index}>
                <Link to={crumb.route}>{crumb.name}</Link>
              </li>
            )
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
