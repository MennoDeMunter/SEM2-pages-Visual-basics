export default function Artikel1() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <article className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8 space-y-10">
        {/* Header */}
        <header className="space-y-4 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Leidt AI-slop tot de dood van sociale media?
          </h1>
          <p className="text-gray-600 text-sm">
            Dominique Deckmyn — 2 januari 2026 om 23:59
          </p>
          <div className="flex gap-6 text-indigo-600 font-medium text-sm">
            <button className="hover:underline">Luisteren</button>
            <button className="hover:underline">Delen</button>
          </div>
        </header>
        {/* Introductie */}

        {/* Afbeelding direct onder de titel - save the provided file as public/afeelding 1.png */}
          <div className="mt-4 w-full flex justify-center">
            <img
              src="/afbeelding 2.png"
              alt="afbeelding 2.png"
              className="rounded-lg max-w-full h-auto object-cover"
            />
          </div>

        <p className="text-gray-800 leading-relaxed text-lg">
          Schattige katten, gegenereerd door AI. © youtube
        </p>
        <h2 className="text-2xl font-semibold text-gray-900">DE TECHNOCRAAT</h2>
        {/* Artikeltekst */}
        <section className="prose prose-lg text-gray-800 leading-relaxed max-w-none space-y-6">
          <p>
            Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop:
            video's met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan.
            Blijven we daar in 2026 naar kijken?
          </p>
          <p>
            De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen,
            zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een
            realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is:
            willen we daarnaar blijven kijken?
          </p>
          <p>
            Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de
            enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes die
            bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. Als je op Youtube
            een nieuwe account aanmaakt, dan is 20 procent van de video's die je worden aangeboden
            van AI afkomstig.
          </p>
          <p>
            Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent
            een nieuw tijdperk in sociale media. Tijdens het eerste tijdperk deelden we ons eigen
            leven op Facebook en Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen aan
            de levens van celebrity's en influencers – tijdperk twee. En nu komt er een stortvloed van
            AI-video's aan.
          </p>
          <p>
            Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel
            wezen: hoe meer AI in onze feed, hoe minder video's we bekijken van professionele makers
            en van onze eigen vrienden. Nochtans hadden sociale media echt wel een bestaansreden,
            namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen. Zijn we in 2026
            dan zo veranderd?
          </p>
          <p>
            Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die
            ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonder
            enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo's, onmogelijke
            stunts, spectaculaire taarten of gewelddadige pranks, of wat ook je ding mag zijn (elders
            op het internet krijgen pornoliefhebbers nu video's te zien die almaar meer tonen van wat
            ze willen, ook als dat anatomisch totaal onmogelijk is).
          </p>
          <p>
            Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. Maar
            Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo's, u krijgt
            kattenvideo's die nog veel schattiger zijn dan in het echt.
          </p>
          <p>
            Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor
            AI-slop: vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik
            'm weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de
            voornaamste auteur was.
          </p>
          <p>
            De eerste paar weken was AI-video nieuw en verrassend, dat wel. En nu nog is het soms
            lachen geblazen met sommige van die Sora-filmpjes (ook al mijd ik ze). Er is heus wel een
            plaats voor AI-video, bijvoorbeeld om speciale effecten te produceren in films. En er zijn
            creatieve mensen die toffe, vaak heel grappige video's maken die zonder AI onbetaalbaar
            duur zouden zijn.
          </p>
          <p>
            Maar horen ze thuis op Instagram en Facebook? Dat waren toch 'sociale' media, nietwaar?
            Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een
            computer gegenereerde video's, aanbevolen door een algoritme? In die zin zien we nu de
            dood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.
          </p>
          <p>
            <em>Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast 'Bits &amp; atomen'.</em>
          </p>
        </section>
        {/* Gerelateerde sectie */}
        <section className="bg-gray-100 p-6 rounded-lg space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">Lees ook</h3>
          <p className="text-indigo-700 font-medium hover:underline cursor-pointer">
            Kandidaat-product van het jaar: de AI-videogenerator.
          </p>
          <p className="text-indigo-700 font-medium hover:underline cursor-pointer">
            "De acteursfilm zal duurder worden dan de superheldenproductie"
          </p>
        </section>
        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t pt-6">
          Cultuur en media — De Technocraat — Artificiële intelligentie — Mark Zuckerberg
        </footer>
      </article>
    </main>
  )
}