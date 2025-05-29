export default function RdvPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-red-700 text-white">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-red-300">Prendre Rendez-vous</h1>

        <p className="mb-6">Veuillez remplir le formulaire ci-dessous pour prendre un rendez-vous :</p>

        <form className="space-y-4 bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <div>
            <label className="block mb-1 text-sm font-semibold">Nom complet</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Téléphone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="+241 74 13 94 90"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-semibold">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <label className="block mb-1 text-sm font-semibold">Heure</label>
              <input
                type="time"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Laissez un message ou des détails supplémentaires..."
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  );
}
