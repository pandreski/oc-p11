import React from 'react';
import Collapse from '../../components/Collapse';
import MediaThinBanner from '../../components/MediaThinBanner';
import image from '../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';
import './_style.scss';

export default function About() {
  return (
    <div className="about">
      <MediaThinBanner
        imageUrl={image}
      />

      <Collapse
        title="Fiabilité"
        body="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      />
      <Collapse
        title="Respect"
        body="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Collapse
        title="Service"
        body="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <Collapse
        title="Sécurité"
        body="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
}
