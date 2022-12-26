import React from 'react';
import { Link } from 'react-router-dom';
import './_style.scss';

export default function Error404() {
  return (
    <div className="error-page-wrapper">
      <div className="code">404</div>
      <p className="description">
        Oups ! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}
