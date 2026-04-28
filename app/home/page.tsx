export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <section className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8 space-y-10">

        {/* Header */}
        <header className="space-y-4 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900">
            De Technocraat
          </h1>
          <p className="text-gray-600 text-lg">
            Artikels over technologie, AI en de impact op onze samenleving.
          </p>
        </header>

        {/* Artikels */}
        <section className="space-y-8">

          {/* Artikel 1 */}
          <article className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer">
              Was het verzet van Dario Amodei tegen minister Hegseth het
              “Ik ben Spartacus!”-moment van Silicon Valley?
            </h2>

            <img
              src="/afeelding 1.png"
              alt="artikel 1"
              className="rounded-lg w-full h-auto object-cover"
            />

            <p className="text-gray-600 text-sm">
              13 maart 2026 — Dominique Deckmyn
            </p>

            <p className="text-gray-800">
              Big tech schaart zich achter Anthropic in een opvallend conflict met de Amerikaanse overheid. Is dit een kantelpunt voor Silicon Valley?
            </p>

            <a href="/artikel1" className="text-indigo-600 font-medium hover:underline">
              Lees artikel →
            </a>
          </article>

          {/* Artikel 2 */}
          <article className="space-y-3 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer">
              Leidt AI-slop tot de dood van sociale media?
            </h2>

            <img
              src="/afbeelding 2.png"
              alt="artikel 2"
              className="rounded-lg w-full h-auto object-cover"
            />

            <p className="text-gray-600 text-sm">
              2 januari 2026 — Dominique Deckmyn
            </p>

            <p className="text-gray-800">
              AI-gegenereerde video’s overspoelen sociale media. Maar willen we daar echt naar blijven kijken?
            </p>

            <a href="/artikel2" className="text-indigo-600 font-medium hover:underline">
              Lees artikel →
            </a>
          </article>

          {/* Artikel 3 */}
          <article className="space-y-3 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer">
              Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
            </h2>

            <img
              src="/afbeelding3.png"
              alt="artikel 3"
              className="rounded-lg w-full h-auto object-cover"
            />

            <p className="text-gray-600 text-sm">
              23 januari 2026 — Dominique Deckmyn
            </p>

            <p className="text-gray-800">
              Met AI-tools kan iedereen nu zelf apps en games bouwen. Hoe werkt dat precies?
            </p>

            <a href="/artikel3" className="text-indigo-600 font-medium hover:underline">
              Lees artikel →
            </a>
          </article>

        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t pt-6">
          © 2026 — De Technocraat
        </footer>

      </section>
    </main>
  )
}