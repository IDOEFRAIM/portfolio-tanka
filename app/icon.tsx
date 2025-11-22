import { ImageResponse } from 'next/og';
import React from 'react';

// Paramètres de l'image (Route Segment Config)
export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Génération de l'image
export default function Icon() {
  return new ImageResponse(
    React.createElement(
      'div',
      {
        // Élément simple pour l'icône en tant que React element
        style: {
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '4px', // Légèrement arrondi
          fontWeight: 'bold',
        },
      },
      'E'
    ),
    {
      ...size,
    }
  );
}