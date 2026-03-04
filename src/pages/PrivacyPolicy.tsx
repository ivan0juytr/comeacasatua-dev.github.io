import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-semibold text-warm-brown mb-8">
            {t('privacy.title')}
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">{t('privacy.intro')}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('privacy.collection.title')}
              </h2>
              <p>{t('privacy.collection.text')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('privacy.use.title')}
              </h2>
              <p>{t('privacy.use.text')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p>{t('privacy.cookies.text')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('privacy.rights.title')}
              </h2>
              <p>{t('privacy.rights.text')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-medium text-warm-brown mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p>{t('privacy.contact.text')}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
