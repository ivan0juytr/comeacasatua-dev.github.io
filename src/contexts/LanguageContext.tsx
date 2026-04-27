import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Camere',
    'nav.services': 'Servizi',
    'nav.location': 'Posizione',
    'nav.contact': 'Contatti',
    'nav.book': 'Prenota Ora',
    
    // Hero
    'hero.welcome': 'Benvenuti a',
    'hero.name': 'Comeacasatua B&B',
    'hero.subtitle': 'Il tuo rifugio accogliente a Bari',
    'hero.cta': 'Scopri le Camere',
    'hero.book': 'Prenota Ora',
    
    // Intro
    'intro.title': 'Sentiti come a casa tua',
    'intro.text': 'Comeacasatua nasce per offrirti un’esperienza autentica a Bari, in un contesto riservato e confortevole. Tra atmosfere accoglienti, comfort moderni e attenzione ai dettagli, qui troverai il luogo ideale per sentirti davvero a casa, con il centro città facilmente raggiungibile.',
    'intro.discover': 'Scopri di più',
    
    // Why Choose Us
    'why.title': 'Perché Sceglierci',
    'why.subtitle': 'Tutto ciò che rende unico il tuo soggiorno',
    'why.location.title': 'Posizione Strategica',
    'why.location.desc': 'A pochi passi dalla Città Vecchia, dal lungomare e dalle migliori attrazioni di Bari.',
    'why.breakfast.title': 'Colazione Pugliese',
    'why.breakfast.desc': 'Ogni mattina una colazione ricca con prodotti locali freschi e specialità tipiche.',
    'why.comfort.title': 'Comfort Moderno',
    'why.comfort.desc': 'Camere eleganti con tutti i comfort: WiFi veloce, aria condizionata, biancheria premium.',
    'why.hospitality.title': 'Ospitalità Familiare',
    'why.hospitality.desc': 'Vi accogliamo come famiglia, con consigli personalizzati e attenzione ai dettagli.',
    'why.flexible.title': 'Flessibilità',
    'why.flexible.desc': 'Check-in e check-out flessibili per adattarci alle vostre esigenze di viaggio.',
    
    // Rooms
    'rooms.title': 'Le Nostre Camere',
    'rooms.subtitle': 'Eleganza e comfort per ogni esigenza',
    'rooms.classic.name': 'Camera Classic',
    'rooms.classic.desc': 'Accogliente e luminosa, perfetta per coppie in cerca di romanticismo e tranquillità.',
    'rooms.superior.name': 'Camera Superior',
    'rooms.superior.desc': 'Più ampia e raffinata, con vista sulla città e angolo relax dedicato.',
    'rooms.suite.name': 'Suite Famiglia',
    'rooms.suite.desc': 'Spaziosa e versatile, ideale per famiglie o soggiorni prolungati.',
    'rooms.from': 'da',
    'rooms.night': '/notte',
    'rooms.guests': 'ospiti',
    'rooms.size': 'mq',
    'rooms.view': 'Verifica Disponibilità',
    'rooms.all': 'Vedi Tutte le Camere',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Per un soggiorno indimenticabile',
    'services.breakfast': 'Colazione',
    'services.breakfast.desc': 'Ricca colazione italiana con prodotti artigianali freschi ogni mattina.',
    'services.wifi': 'WiFi Gratuito',
    'services.wifi.desc': 'Connessione ad alta velocità in tutte le aree del B&B.',
    'services.ac': 'Aria Condizionata',
    'services.ac.desc': 'Climatizzazione in ogni camera per il massimo comfort.',
    'services.cleaning': 'Pulizia Giornaliera',
    'services.cleaning.desc': 'Servizio di pulizia e cambio biancheria quotidiano.',
    'services.checkin': 'Check-in Flessibile',
    'services.checkin.desc': 'Orari personalizzabili per accogliervi al meglio.',
    'services.parking': 'Parcheggio Custodito',
    'services.parking.desc': 'Parcheggio riservato e sicuro a pochi passi dalla struttura.',
    
    'services.luggage': 'Deposito Bagagli',
    'services.luggage.desc': 'Custodia gratuita dei bagagli per early check-in o late check-out.',
    
    // Location
    'location.title': 'Dove Siamo',
    'location.subtitle': 'Strada Torre Tresca 22, Bari',
    'location.desc': 'Siamo in una zona residenziale di Bari, ben collegata con i mezzi pubblici e comoda per raggiungere sia il centro storico sia il mare e l’aeroporto.',
    'location.oldtown': 'Città Vecchia',
    'location.oldtown.dist': 'Circa 15–20 minuti in auto',
    'location.seafront': 'Lungomare',
    'location.seafront.dist': 'Circa 12 minuti in auto',
    'location.station': 'Stazione Centrale',
    'location.station.dist': 'Circa 15 minuti in auto',
    'location.airport': 'Aeroporto di Bari “Karol Wojtyla”',
    'location.airport.dist': 'Circa 20 minuti in auto',
    'location.beach': 'Spiagge (Pane e Pomodoro / Torre Quetta / Lido San Francesco)',
    'location.beach.dist': 'Circa 15–20 minuti in auto',
    'location.attractions': 'Attrazioni Vicine',
    'location.basilica': 'Basilica di San Nicola',
    'location.basilica.dist': 'Circa 15–20 minuti in auto',
    'location.castello': 'Castello Svevo',
    'location.castello.dist': 'Circa 15–20 minuti in auto',
    'location.teatro': 'Teatro Petruzzelli',
    'location.teatro.dist': 'Circa 15–20 minuti in auto',

    // Reviews
    'reviews.title': 'Cosa Dicono i Nostri Ospiti',
    'reviews.subtitle': 'Le esperienze di chi ci ha scelto',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.subtitle': 'Tutto quello che devi sapere',
    'faq.checkin.q': 'Quali sono gli orari di check-in e check-out?',
    'faq.checkin.a': 'Il check-in è dalle 14:00 alle 20:00, il check-out entro le 10:30. Per orari diversi, contattateci e cercheremo di accontentarvi.',
    'faq.breakfast.q': 'La colazione è inclusa?',
    'faq.breakfast.a': 'Sì, la colazione è sempre inclusa nel prezzo. Serviamo una ricca colazione italiana con prodotti locali freschi ogni mattina.',
    'faq.parking.q': 'C\'è un parcheggio disponibile?',
    'faq.parking.a': 'Abbiamo un nostro parcheggio sicuro e privato.',
    'faq.pets.q': 'Sono ammessi animali domestici?',
    'faq.pets.a': 'Sì, gli animali di piccola taglia sono i benvenuti con un supplemento di €10 a notte. Vi preghiamo di comunicarcelo al momento della prenotazione.',
    'faq.cancel.q': 'Qual è la politica di cancellazione?',
    'faq.cancel.a': 'Cancellazione gratuita fino a 48 ore prima dell\'arrivo. Per cancellazioni tardive, verrà addebitata la prima notte.',
    
    // Contact
    'contact.title': 'Contattaci',
    'contact.subtitle': 'Siamo qui per aiutarti',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.phone': 'Telefono',
    'contact.message': 'Messaggio',
    'contact.dates': 'Date di interesse',
    'contact.guests': 'Numero ospiti',
    'contact.send': 'Invia Messaggio',
    'contact.success': 'Messaggio inviato con successo!',
    'contact.booking': 'Prenota su Booking.com',
    'contact.info': 'Informazioni di Contatto',
    'contact.address': 'Strada Torre Tresca 22, 70124 Bari, quartiere Poggiofranco, Italia',
    
    // Footer
    'footer.desc': 'Un rifugio accogliente a Bari, dove comfort e autentica ospitalità pugliese si incontrano.',
    'footer.links': 'Link Utili',
    'footer.contact': 'Contatti',
    'footer.social': 'Seguici',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Termini e Condizioni',

    // Privacy Policy
    'privacy.title': 'Informativa sulla Privacy',
    'privacy.intro': 'Questa informativa sulla privacy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando utilizzi il nostro sito web e i nostri servizi.',
    'privacy.collection.title': 'Raccolta delle Informazioni',
    'privacy.collection.text': 'Raccogliamo informazioni personali come nome, email, numero di telefono e dettagli della prenotazione quando effettui una prenotazione o ci contatti.',
    'privacy.use.title': 'Utilizzo delle Informazioni',
    'privacy.use.text': 'Utilizziamo le tue informazioni per elaborare prenotazioni, fornire servizi e migliorare la tua esperienza.',
    'privacy.cookies.title': 'Cookie',
    'privacy.cookies.text': 'Utilizziamo cookie per migliorare la navigazione del sito e analizzare il traffico.',
    'privacy.rights.title': 'I Tuoi Diritti',
    'privacy.rights.text': 'Hai il diritto di accedere, rettificare o cancellare le tue informazioni personali.',
    'privacy.contact.title': 'Contattaci',
    'privacy.contact.text': 'Per qualsiasi domanda sulla privacy, contattaci a comeacasatua.bari@gmail.com.',

    // Terms of Service
    'terms.title': 'Termini e Condizioni',
    'terms.intro': 'Questi termini e condizioni regolano l\'utilizzo del nostro sito web e dei nostri servizi.',
    'terms.bookings.title': 'Prenotazioni',
    'terms.bookings.text': 'Le prenotazioni sono soggette a conferma e possono essere cancellate secondo la nostra politica.',
    'terms.cancellation.title': 'Politica di Cancellazione',
    'terms.cancellation.text': 'Cancellazione gratuita fino a 48 ore prima dell\'arrivo. Per cancellazioni tardive, verrà addebitata la prima notte.',
    'terms.liability.title': 'Responsabilità',
    'terms.liability.text': 'Non siamo responsabili per perdite o danni derivanti da eventi al di fuori del nostro controllo.',
    'terms.changes.title': 'Modifiche ai Termini',
    'terms.changes.text': 'Ci riserviamo il diritto di modificare questi termini in qualsiasi momento.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.services': 'Services',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.name': 'Comeacasatua',
    'hero.subtitle': 'Your welcoming retreat in Bari',
    'hero.cta': 'Discover Rooms',
    'hero.book': 'Book Now',
    
    // Intro
    'intro.title': 'Feel at home',
    'intro.text': 'Comeacasatua was created to offer an authentic stay in Bari, in a peaceful and comfortable setting. With welcoming atmospheres, modern amenities and attention to detail, it is the perfect place to truly feel at home, with the city center easily reachable.',
    'intro.discover': 'Discover More',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'Everything that makes your stay unique',
    'why.location.title': 'Strategic Location',
    'why.location.desc': 'Just steps from the Old Town, seafront, and the best attractions in Bari.',
    'why.breakfast.title': 'Apulian Breakfast',
    'why.breakfast.desc': 'Every morning a rich breakfast with fresh local products and typical specialties.',
    'why.comfort.title': 'Modern Comfort',
    'why.comfort.desc': 'Elegant rooms with all amenities: fast WiFi, air conditioning, premium linens.',
    'why.hospitality.title': 'Family Hospitality',
    'why.hospitality.desc': 'We welcome you like family, with personalized tips and attention to detail.',
    'why.flexible.title': 'Flexibility',
    'why.flexible.desc': 'Flexible check-in and check-out to adapt to your travel needs.',
    
    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Elegance and comfort for every need',
    'rooms.classic.name': 'Classic Room',
    'rooms.classic.desc': 'Cozy and bright, perfect for couples seeking romance and tranquility.',
    'rooms.superior.name': 'Superior Room',
    'rooms.superior.desc': 'Larger and more refined, with city views and a dedicated relaxation area.',
    'rooms.suite.name': 'Family Suite',
    'rooms.suite.desc': 'Spacious and versatile, ideal for families or extended stays.',
    'rooms.from': 'from',
    'rooms.night': '/night',
    'rooms.guests': 'guests',
    'rooms.size': 'sqm',
    'rooms.view': 'Check Availability',
    'rooms.all': 'View All Rooms',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'For an unforgettable stay',
    'services.breakfast': 'Breakfast Included',
    'services.breakfast.desc': 'Rich Italian breakfast with fresh local products every morning.',
    'services.wifi': 'Free WiFi',
    'services.wifi.desc': 'High-speed connection in all areas of the B&B.',
    'services.ac': 'Air Conditioning',
    'services.ac.desc': 'Climate control in every room for maximum comfort.',
    'services.cleaning': 'Daily Cleaning',
    'services.cleaning.desc': 'Daily cleaning service and linen change.',
    'services.checkin': 'Flexible Check-in',
    'services.checkin.desc': 'Customizable hours to welcome you at your best.',
    'services.parking': 'Partner Parking',
    'services.parking.desc': 'Secure parking just steps from the property.',
    'services.luggage': 'Luggage Storage',
    'services.luggage.desc': 'Free luggage storage for early check-in or late check-out.',
    
    // Location
    'location.title': 'Where We Are',
    'location.subtitle': 'In the heart of Bari',
    'location.desc': 'Located in the historic center of Bari, just steps from the main attractions of the city. The ideal location to explore the beauty of Puglia.',
    'location.oldtown': 'Old Town',
    'location.oldtown.dist': '5 minutes walk',
    'location.seafront': 'Seafront',
    'location.seafront.dist': '10 minutes walk',
    'location.station': 'Central Station',
    'location.station.dist': '15 minutes walk',
    'location.airport': 'Airport',
    'location.airport.dist': '25 minutes by car',
    'location.beach': 'Beaches',
    'location.beach.dist': '15 minutes by car',
    'location.attractions': 'Nearby Attractions',
    'location.basilica': 'Basilica of Saint Nicholas',
    'location.castello': 'Swabian Castle',
    'location.teatro': 'Petruzzelli Theatre',
    
    // Reviews
    'reviews.title': 'What Our Guests Say',
    'reviews.subtitle': 'Experiences from those who chose us',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know',
    'faq.checkin.q': 'What are the check-in and check-out times?',
    'faq.checkin.a': 'Check-in is from 2:00 PM to 8:00 PM, check-out by 10:30 AM. For different times, contact us and we will try to accommodate you.',
    'faq.breakfast.q': 'Is breakfast included?',
    'faq.breakfast.a': 'Yes, breakfast is always included in the price. We serve a rich Italian breakfast with fresh local products every morning.',
    'faq.parking.q': 'Is there parking available?',
    'faq.parking.a': 'We have our private and safe parking lot.',
    'faq.pets.q': 'Are pets allowed?',
    'faq.pets.a': 'Yes, small pets are welcome with a supplement of €10 per night. Please let us know when booking.',

    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.dates': 'Dates of interest',
    'contact.guests': 'Number of guests',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.booking': 'Book on Booking.com',
    'contact.info': 'Contact Information',
    'contact.address': 'Via Roma 123, 70121 Bari, Italy',
    
    // Footer
    'footer.desc': 'Your welcoming retreat in Bari. Experience authentic Apulian hospitality.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.social': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms and Conditions',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.intro': 'This privacy policy describes how we collect, use, and protect your personal information when you use our website and services.',
    'privacy.collection.title': 'Information Collection',
    'privacy.collection.text': 'We collect personal information such as name, email, phone number, and booking details when you make a booking or contact us.',
    'privacy.use.title': 'Use of Information',
    'privacy.use.text': 'We use your information to process bookings, provide services, and improve your experience.',
    'privacy.cookies.title': 'Cookies',
    'privacy.cookies.text': 'We use cookies to improve site navigation and analyze traffic.',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.text': 'You have the right to access, rectify, or delete your personal information.',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.text': 'For any questions about privacy, contact us at comeacasatua.bari@gmail.com.',

    // Terms of Service
    'terms.title': 'Terms and Conditions',
    'terms.intro': 'These terms and conditions govern the use of our website and services.',
    'terms.bookings.title': 'Bookings',
    'terms.bookings.text': 'Bookings are subject to confirmation and may be canceled according to our policy.',
    'terms.cancellation.title': 'Cancellation Policy',
    'terms.cancellation.text': 'Free cancellation up to 48 hours before arrival. For late cancellations, the first night will be charged.',
    'terms.liability.title': 'Liability',
    'terms.liability.text': 'We are not responsible for losses or damages arising from events beyond our control.',
    'terms.changes.title': 'Changes to Terms',
    'terms.changes.text': 'We reserve the right to modify these terms at any time.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
