// File: src/data/destinationsData.js
import nightlife from "../assets/nightlife.jpg";
import vouliagmeni2 from "../assets/vouliagmeni2.jpg";
import glyfada2 from "../assets/glyfada2.jpg";
export const destinationsData = {
    
    vouliagmeni: {
      heroImage: vouliagmeni2,
      el: {
        title: "Βουλιαγμένη",
        subtitle: "Υψηλή Γαστρονομία & Αέρας Miami",
        fullDescription: "Η Βουλιαγμένη προσφέρει απαράμιλλη πολυτέλεια...",
        restaurants: [
          { name: "Matsuhisa Athens", desc: "Premium sushi & cocktails με πανοραμική θέα στη θάλασσα." ,url: "https://matsuhisaathens.com/"},
          { name: "Ithaki Restaurant", desc: "Εμβληματικό εστιατόριο για φρέσκο ψάρι και fine dining." ,url: "https://ithakirestaurantbar.gr/"},
          { name: "Blue Fish", desc: "Δημιουργική μεσογειακή κουζίνα ακριβώς πάνω στο κύμα." ,url: "https://www.instagram.com/bluefish.restaurant/"},
          { name: "Island Club", desc: "Ένα από τα πιο exclusive beach clubs της Αθηναϊκής Ριβιέρας, με εξαιρετικά cocktails και θέα στη θάλασσα." ,url: "https://www.islandclubrestaurant.gr/"},
          { name: "Lake Vougliagmeni Restaurant", desc: "Απολαύστε γεύσεις με θέα τη λίμνη Βουλιαγμένης, σε ένα μοναδικό φυσικό περιβάλλον." ,url: "https://lakevouliagmeni.gr/restaurant/"}
        ],
        beaches: [
          { name: "Astir Beach", desc: "Η πιο exclusive και κοσμική παραλία της Αθηναϊκής Ριβιέρας." },
          { name: "Λαιμός Βουλιαγμένης", desc: "Κρυστάλλινα νερά σε έναν μαγευτικό κολπίσκο." }
        ],
        sights: [
          { name: "Λίμνη Βουλιαγμένης", desc: "Ένα σπάνιο γεωλογικό φαινόμενο με ιαματικά νερά." },
          { name: "Ναός Απόλλωνα Ζωστήρα", desc: "Αρχαιολογικός χώρος κρυμμένος στην καρδιά του Αστέρα." },
          { 
            name: "Astir Marina Βουλιαγμένης", 
            desc: "Η πρόσφατα ανακαινισμένη, υπερπολυτελής μαρίνα συνδυάζει το yachting με το απόλυτο high-end shopping. Περπατήστε δίπλα στα εντυπωσιακά yachts και ανακαλύψτε μπουτίκ κορυφαίων οίκων μόδας, όπως Louis Vuitton, Dior και Loro Piana.",
            url: "https://www.astirmarina.com/" 
          }
        ]
      },
      en: {
        title: "Vouliagmeni",
        subtitle: "Fine Dining & Miami Vibe",
        fullDescription: "Vouliagmeni offers unparalleled luxury...",
        restaurants: [
          { name: "Matsuhisa Athens", desc: "Premium sushi & cocktails with a panoramic sea view." ,url: "https://matsuhisaathens.com/"},
          { name: "Ithaki Restaurant", desc: "An iconic restaurant for fresh fish and fine dining." ,url: "https://ithakirestaurantbar.gr/"},
          { name: "Blue Fish", desc: "Creative Mediterranean cuisine right by the waves." ,url: "https://www.instagram.com/bluefish.restaurant/"},
          { name: "Island Club", desc: "One of the most exclusive beach clubs on the Athens Riviera, featuring excellent cocktails and sea views." ,url: "https://www.islandclubrestaurant.gr/"},
          { name: "Lake Vougliagmeni Restaurant", desc: "Enjoy exquisite flavors overlooking Lake Vouliagmeni, set in a unique natural environment." ,url: "https://lakevouliagmeni.gr/en/restaurant/"}
        ],
        beaches: [
          { name: "Astir Beach", desc: "The most exclusive and cosmopolitan beach of the Athens Riviera." },
          { name: "Laimos Vouliagmeni", desc: "Crystal clear waters in a mesmerizing small cove." }
        ],
        sights: [
          { name: "Lake Vouliagmeni", desc: "A rare geological phenomenon with thermal waters." },
          { name: "Temple of Apollo Zoster", desc: "An archaeological site hidden in the heart of Astir." },
          { 
            name: "Astir Marina Vouliagmeni", 
            desc: "The newly renovated, ultra-luxurious marina combines yachting with ultimate high-end shopping. Walk past impressive yachts and discover boutiques of top fashion houses such as Louis Vuitton, Dior, and Loro Piana.",
            url: "https://www.astirmarina.com/" 
          }
        ]
      }  
    },

  glyfada: {
    heroImage: glyfada2,
    el: {
      title: "Γλυφάδα",
      subtitle: "Η απόλυτη εμπειρία της Ριβιέρας",
      fullDescription: "Η Γλυφάδα είναι το κέντρο του εμπορίου και της διασκέδασης των Νοτίων Προαστίων. Ένας τέλειος συνδυασμός κοσμοπολίτικης αύρας, τεράστιας αγοράς και εξαιρετικών επιλογών για έξοδο.",
      restaurants: [
        { name: "Ark", desc: "Βραβευμένο bar-restaurant με εξαιρετική θέα στη θάλασσα, εκλεπτυσμένη διακόσμηση και υψηλή γαστρονομία." ,url: "https://ark-glyfada.gr/"},
        { name: "Caretta Athens", desc: "Με αισθητική που αποπνέει χαλαρή πολυτέλεια, αποτελεί τον ιδανικό all-day προορισμό για εξαιρετικό brunch, ποιοτικό καφέ και signature cocktails σε ένα πανέμορφο περιβάλλον μέσα στην θάλασσα." ,url: "https://www.instagram.com/caretta_athens/"},
        { name: "Ramino Resto", desc: "Κομψό εστιατόριο με αυθεντικές ιταλικές γεύσεις, χειροποίητα ζυμαρικά και μια εξαιρετικά ενημερωμένη λίστα κρασιών." ,url: "https://www.raminoresto.gr/"},
        { name: "Cichetti", desc: "Ιδανικό στέκι εμπνευσμένο από τη Βενετία, προσφέροντας ιταλικά tapas (cichetti) και premium επιλογές για after-shopping κρασί." ,url: "https://www.instagram.com/cicheti_glyfada/"},
        { name: "El Catrin", desc: "Η απόλυτη μεξικάνικη γωνιά της περιοχής, φημισμένη για την αυθεντική, πολύχρωμη ατμόσφαιρα, τα λαχταριστά tacos και τις δροσερές margaritas." ,url: "https://www.elcatrin.gr/"}
      ],
      beaches: [
        { name: "Αστέρια Γλυφάδας", desc: "Οργανωμένη παραλία με vintage αισθητική, λευκή άμμο και πολυτελή beach bars." },
        { name: "Δημοτική Παραλία", desc: "Ελεύθερη παραλία με εύκολη πρόσβαση, ιδανική για χαλαρό μπάνιο και απογευματινό περίπατο." }
      ],
      sights: [
        { name: "Οδός Μεταξά", desc: "Ο μεγαλύτερος εμπορικός δρόμος των Νοτίων Προαστίων, ο απόλυτος προορισμός για shopping therapy." },
        { name: "Μαρίνα Γλυφάδας", desc: "Γραφική μαρίνα, ιδανική για έναν χαλαρωτικό περίπατο δίπλα στα πολυτελή σκάφη στο ηλιοβασίλεμα." }
      ]
    },
    en: {
      title: "Glyfada",
      subtitle: "The Ultimate Riviera Experience",
      fullDescription: "Glyfada is the commercial and entertainment hub of the Southern Suburbs. A perfect blend of cosmopolitan aura, a massive shopping district, and excellent nightlife options.",
      restaurants: [
        { name: "Ark", desc: "Award-winning bar-restaurant with excellent sea views, refined decor, and high gastronomy." ,url: "https://ark-glyfada.gr/"},
        { name: "Caretta Athens", desc: "With an aesthetic exuding relaxed luxury, it's the ideal all-day destination for great brunch, quality coffee, and signature cocktails in a beautiful seaside setting." ,url: "https://www.instagram.com/caretta_athens/"},
        { name: "Ramino Resto", desc: "Elegant restaurant offering authentic Italian flavors, handmade pasta, and an exceptionally curated wine list." ,url: "https://www.raminoresto.gr/"},
        { name: "Cichetti", desc: "Ideal spot inspired by Venice, offering Italian tapas (cichetti) and premium choices for after-shopping wine." ,url: "https://www.instagram.com/cicheti_glyfada/"},
        { name: "El Catrin", desc: "The ultimate Mexican corner of the area, famous for its authentic, colorful atmosphere, delicious tacos, and refreshing margaritas." ,url: "https://www.elcatrin.gr/"}
      ],
      beaches: [
        { name: "Asteria Glyfada", desc: "Organized beach with vintage aesthetics, white sand, and luxurious beach bars." },
        { name: "Municipal Beach", desc: "Free beach with easy access, perfect for a relaxing swim and an afternoon stroll." }
      ],
      sights: [
        { name: "Metaxa Street", desc: "The largest shopping street in the Southern Suburbs, the ultimate destination for shopping therapy." },
        { name: "Glyfada Marina", desc: "Picturesque marina, ideal for a relaxing sunset walk next to luxury yachts." }
      ]
    }
  },

  kalamaki: {
    heroImage: nightlife,
    el: {
      title: "Καλαμάκι",
      subtitle: "Η νυχτερινή ζωή της Ριβιέρας",
      fullDescription: "Η απόλυτη παραλιακή εμπειρία για clubbing και βραδινή έξοδο. Εδώ συγκεντρώνονται τα μεγαλύτερα ονόματα της νυχτερινής διασκέδασης, ακριβώς δίπλα στο κύμα.",
      restaurants: [
        { name: "Penarrubia Lounge", desc: "Εντυπωσιακό all-day bar restaurant με εξωτική ατμόσφαιρα, ιδανικό για καφέ, φαγητό και ποτό δίπλα στη θάλασσα. Την νύχτα, προσφέρει έναν από τους καλύτερους χώρους για clubbing." ,url: "https://www.instagram.com/penarrubialounge/"},
        { name: "Bolivar Beach Bar", desc: "Το επίκεντρο των καλοκαιρινών πάρτι της Αθήνας, με διάσημους guest DJs από όλο τον κόσμο." ,url: "https://www.bolivar.gr/"},
        { name: "Akanthus Beach Club", desc: "Ένα από τα πιο δημοφιλή beach clubs της περιοχής, με εξαιρετική μουσική, κοκτέιλ και θέα στη θάλασσα." ,url: "https://www.instagram.com/akanthus_club/"},
        { name: "Nalu Cafe", desc: "Boho αισθητική, χαλαρό vibe και εξαιρετικά ηλιοβασιλέματα, προσφέροντας υπέροχες επιλογές για brunch." ,url: "https://www.instagram.com/nalu_athens/"}
      ],
      beaches: [
        { name: "Ακτή του Ήλιου", desc: "Η πιο γνωστή οργανωμένη παραλία του Αλίμου με ψιλή άμμο, ξαπλώστρες, water sports και beach bars." },
        { name: "Λουτρά Αλίμου", desc: "Μια πιο ήσυχη επιλογή, αγαπητή στους ντόπιους, ιδανική για χαλαρό κολύμπι." }
      ],
      sights: [
        { name: "Μαρίνα Αλίμου", desc: "Η μεγαλύτερη μαρίνα της Ελλάδας και των Βαλκανίων, με εκατοντάδες ιστιοπλοϊκά και yachts." },
        { name: "Παραλιακός Πεζόδρομος", desc: "Ένας πανέμορφος, φαρδύς πεζόδρομος δίπλα στη θάλασσα, ιδανικός για τρέξιμο, ποδήλατο ή περπάτημα." }
      ]
    },
    en: {
      title: "Kalamaki",
      subtitle: "Absolute Nightlife Experience",
      fullDescription: "The ultimate coastal experience for clubbing and nights out. Here gather the biggest names in nightlife entertainment, right by the waves.",
      restaurants: [
        { name: "Penarrubia Lounge", desc: "Impressive all-day bar restaurant with an exotic atmosphere, ideal for coffee, food, and drinks by the sea. At night, it offers one of the best venues for clubbing." ,url: "https://www.instagram.com/penarrubialounge/"},
        { name: "Bolivar Beach Bar", desc: "The epicenter of summer parties in Athens, featuring famous guest DJs from around the world." ,url: "https://www.bolivar.gr/"},
        { name: "Akanthus Beach Club", desc: "One of the most popular beach clubs in the area, offering excellent music, cocktails, and sea views." ,url: "https://www.instagram.com/akanthus_club/"},
        { name: "Nalu Cafe", desc: "Boho aesthetics, relaxed vibe, and magnificent sunsets, offering great choices for brunch." ,url: "https://www.instagram.com/nalu_athens/"}
      ],
      beaches: [
        { name: "Akti tou Iliou", desc: "The most famous organized beach in Alimos with fine sand, sunbeds, water sports, and beach bars." },
        { name: "Alimos Baths", desc: "A quieter option loved by locals, ideal for a relaxing swim." }
      ],
      sights: [
        { name: "Alimos Marina", desc: "The largest marina in Greece and the Balkans, hosting hundreds of sailboats and yachts." },
        { name: "Coastal Promenade", desc: "A beautiful, wide pedestrian path by the sea, ideal for running, cycling, or walking." }
      ]
    }
  }
};