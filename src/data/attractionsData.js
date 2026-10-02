import sounioImg from '../assets/poseidon_temple.webp';
import vouliagmeniImg from '../assets/vouliagmeni_lake.jpg';
import isonImg from '../assets/niarxos.webp';


export const attractionsData = [
  {
    id: 1,
    imageUrl: sounioImg,
    el: {
      title: "Ναός του Ποσειδώνα",
      location: "Σούνιο",
      distance: "45 λεπτά οδικώς",
      description: "Ένα από τα σημαντικότερα μνημεία της αρχαιότητας, σκαρφαλωμένο στον ιερό βράχο του Σουνίου. Απολαύστε το διασημότερο ηλιοβασίλεμα της Αθηναϊκής Ριβιέρας με θέα το Αιγαίο.",
      url: "https://www.discovergreece.com/el/experiences/visit-magical-temple-poseidon-sounion" // Ελληνικό link
    },
    en: {
      title: "Temple of Poseidon",
      location: "Sounio",
      distance: "45 min drive",
      description: "One of the most important monuments of antiquity, perched on the sacred rock of Cape Sounio. Enjoy the most famous sunset of the Athenian Riviera overlooking the Aegean Sea.",
      url: "https://www.discovergreece.com/experiences/visit-magical-temple-poseidon-sounion" // Αγγλικό link
    }
  },
  {
    id: 2,
    imageUrl: vouliagmeniImg,
    el: {
      title: "Λίμνη Βουλιαγμένης",
      location: "Βουλιαγμένη",
      distance: "15 λεπτά οδικώς",
      description: "Ένα σπάνιο γεωλογικό φαινόμενο με ιαματικά νερά που διατηρούν σταθερή θερμοκρασία όλο το χρόνο. Ένας επίγειος παράδεισος ευεξίας περιτριγυρισμένος από επιβλητικούς βράχους.",
      url: "https://lakevouliagmeni.gr/"
    },
    en: {
      title: "Lake Vouliagmeni",
      location: "Vouliagmeni",
      distance: "15 min drive",
      description: "A rare geological phenomenon with thermal waters that maintain a constant temperature year-round. An earthly paradise of wellness surrounded by imposing rocks.",
      url: "https://lakevouliagmeni.gr/en/"
    }
  },
  {
    id: 3,
    imageUrl: isonImg,
    el: {
      title: "Κέντρο Πολιτισμού ΙΣΝ",
      location: "Καλλιθέα",
      distance: "45 λεπτά οδικώς",
      description: "Ένα σύγχρονο αρχιτεκτονικό στολίδι σχεδιασμένο από τον Renzo Piano. Φιλοξενεί την Εθνική Λυρική Σκηνή και την Εθνική Βιβλιοθήκη, περιτριγυρισμένο από ένα υπέροχο μεσογειακό πάρκο.",
      url: "https://www.snfcc.org/"
    },
    en: {
      title: "SNFCC",
      location: "Kallithea",
      distance: "45 min drive",
      description: "A modern architectural gem designed by Renzo Piano. It hosts the Greek National Opera and the National Library, surrounded by a magnificent Mediterranean park.",
      url: "https://www.snfcc.org/en" 
    }
  }
];
