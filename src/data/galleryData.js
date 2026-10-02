// Αρχείο: src/data/galleryData.js

// Imports εικόνων
import sunset_balconyWide from '../assets/sunset_balcony_wide.jpg';
import sunset_balcony from '../assets/sunset_balcony.jpg';
import outside from '../assets/outside.jpg';
import wc from '../assets/wc.jpg';
import livingRoom from '../assets/livingRoom.jpg';
import bedroom from '../assets/bedroom.jpg';
import kitchen from '../assets/kitchen.jpg';
import Laundry from '../assets/Laundry.jpg';
import livingRoom_horse from '../assets/livingRoom_horse.jpg';
import garden from '../assets/garden.jpg';
import sunset_sun from '../assets/sunset_sun.jpg';
import outside_door from '../assets/outsidedoor.jpg';
import outside_roof from '../assets/outside_roof.jpg';
import inside_out from '../assets/inside_out.jpg';

// Κάνουμε export τον πίνακα για να μπορούμε να τον καλέσουμε από άλλα αρχεία
export const galleryImages = [
    { 
      id: 1, 
      images: [livingRoom, livingRoom_horse], 
      el: { caption: "Καθιστικό" }, en: { caption: "Living Room" } 
    },
    { 
      id: 2, 
      images: [sunset_balconyWide, garden, sunset_balcony, sunset_sun], 
      el: { caption: "Μπαλκόνι" }, 
      en: { caption: "Balcony" } 
    },
    { 
      id: 3, 
      images: [bedroom], 
      el: { caption: "Υπνοδωμάτιο" }, 
      en: { caption: "Bedroom" } 
    },
    { 
      id: 4, 
      images: [outside, outside_door, outside_roof, inside_out], 
      el: { caption: "Εξωτερικός χώρος" }, 
      en: { caption: "Outside" } 
    },
    { 
      id: 5, 
      images: [wc], 
      el: { caption: "Wc" }, 
      en: { caption: "Wc" } 
    },
    { 
      id: 6, 
      images: [kitchen], 
      el: { caption: "Κουζίνα" }, 
      en: { caption: "Kitchen" } 
    },
    { 
      id: 7, 
      images: [Laundry], 
      el: { caption: "Φροντίδα Ρούχων" }, 
      en: { caption: "Laundry Room" } 
    }
];