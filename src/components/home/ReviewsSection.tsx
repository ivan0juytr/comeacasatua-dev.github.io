import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  {
    name: 'Ospite (Booking.com)',
    location: 'Italia',
    rating: 5,
    textIt: 'Diego è stato gentilissimo fin dal primo contatto, rendendosi disponibile in ogni situazione e dandoci ottimi consigli per la nostra visita a Bari. Camera spaziosa e pulita, letto comodo.',
    textEn: 'Diego was extremely kind from the very first contact, always available and full of great tips for visiting Bari. Spacious and clean room, comfortable bed.',
    date: '2026',
  },
  {
    name: 'Famiglia (Booking.com)',
    location: 'Italia',
    rating: 5,
    textIt: 'Abbiamo trascorso un ottimo soggiorno con mio marito e i bambini. Ci ha colpito l\'accoglienza calorosa, che ci ha fatto sentire come a casa. La colazione era abbondante e deliziosa, perfetta per iniziare la giornata.',
    textEn: 'We had a wonderful stay with my husband and the kids. The warm welcome made us feel right at home. Breakfast was hearty and delicious, perfect to start the day.',
    date: 'Luglio 2025',
  },
  {
    name: 'Coppia (Booking.com)',
    location: 'Italia',
    rating: 5,
    textIt: 'La stanza era spaziosa e luminosa, ci siamo sentiti a casa. Ho apprezzato molto la colazione, con dolci freschi e il caffè perfetto per iniziare bene la giornata.',
    textEn: 'The room was spacious and bright, we felt right at home. I really appreciated the breakfast, with fresh pastries and great coffee to start the day.',
    date: 'Maggio 2025',
  },
  {
    name: 'Ospite internazionale (Booking.com)',
    location: 'Estero',
    rating: 5,
    textIt: 'Un posto accogliente a 10 minuti dalla città vecchia di Bari. Camere confortevoli, pulite e silenziose. Ho adorato le decorazioni e l\'attenzione ai dettagli. Cappuccino eccezionale a colazione. Parcheggio gratuito in loco.',
    textEn: 'A cozy place just 10 minutes away from Bari old town. Rooms are comfortable, clean and quiet. I loved the decorations and attention to detail. Amazing cappuccino with breakfast. Free parking available on site.',
    date: '2025',
  },
  {
    name: 'Coppia (Tripadvisor)',
    location: 'Italia',
    rating: 5,
    textIt: 'Siamo venuti per il concerto. Stanza spaziosa, confortevole e pulitissima. Staff gentilissimo: ci hanno offerto la colazione e ci hanno permesso di lasciare la macchina dopo il check-out. Solo 1 km dallo stadio San Nicola!',
    textEn: 'We came for the concert. Spacious, comfortable and very clean room. Very kind staff: they offered us breakfast and let us leave the car after check-out. Only 1 km from San Nicola stadium!',
    date: 'Ottobre 2025',
  },
  {
    name: 'Rosa (Booking.com)',
    location: 'Italia',
    rating: 5,
    textIt: 'La signora Rosa, collaboratrice, veramente gentile e garbata. Struttura accogliente e molto pulita. Personale gentile, letto comodo e zona molto tranquilla. Stanza e bagno molto spaziosi.',
    textEn: 'Rosa, the staff member, was truly kind and gracious. Welcoming and very clean property. Friendly staff, comfortable bed and very quiet area. Very spacious room and bathroom.',
    date: '2026',
  },
];

export default function ReviewsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonianze
          </span>
          <h2 className="heading-section text-foreground mt-3">
            {t('reviews.title')}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-warm p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{language === 'it' ? review.textIt : review.textEn}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
