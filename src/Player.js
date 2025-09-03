import React from "react";
import { Card } from "react-bootstrap";

export default function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl
}) {
  // Couleurs par équipe
  const teamColors = {
    "Paris Saint-Germain": "#004170",
    "Al-Nassr": "#FFD700",
    default: "#333"
  };

  const cardStyle = {
    width: '14rem',
    margin: '15px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: teamColors[team] || teamColors.default,
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.5)'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        alt={name} 
        style={{ height: '300px', objectFit: 'cover' }} 
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {jerseyNumber} <br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
