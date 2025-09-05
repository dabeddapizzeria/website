
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Girrarosto pizzeria fast food </h3>
            <p className="text-gray-300 mb-4">
              Autentica cucina italiana con ingredienti freschi e ricette
              tradizionali dallo chef bedda 
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contatti</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Corso Regina Margherita, 280Bis/c, Torino</p>
              <p>📞 +39 371 598 7959</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Orari</h4>
            <div className="space-y-2 text-gray-300">
              <p>Lunedì - Giovedì: 12:00 - 15:00, 19:00 - 23:00</p>
              <p>Venerdì - Sabato: 12:00 - 15:00, 19:00 - 24:00</p>
              <p>Domenica: 12:00 - 23:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Trattoria Da Bedda. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
