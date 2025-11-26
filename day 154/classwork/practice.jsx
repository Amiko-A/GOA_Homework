import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
//ვიყენებთ getElementById რომ HTML ის ფაილიდან წამოვიღოთ მთავარი ID

const root = createRoot(container);
//ვიყენებთ creareRoot ს რომ შევქმნათ root და შევინახოთ container ში

root.render(
  //ვიყენებთ render ს რომ საიტზე გამოვიტანოთ div,h1 და p
  <div>
      <h1>Hello world</h1> 
      <p>Lorem text</p>
  </div>
)
