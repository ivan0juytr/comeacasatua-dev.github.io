import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-semibold text-warm-brown mb-8">
            {t('terms.title')}
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">{t('terms.intro')}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('terms.bookings.title')}
              </h2>
              <p>{t('terms.bookings.text')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('terms.cancellation.title')}
              </h2>
              <p>{t('terms.cancellation.text')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('terms.liability.title')}
              </h2>
              <p>{t('terms.liability.text')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('terms.changes.title')}
              </h2>
              <p>{t('terms.changes.text')}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
