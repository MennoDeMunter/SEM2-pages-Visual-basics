export default function Artikel1() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <article className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8 space-y-10">

        {/* Header */}
        <header className="space-y-4 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
          </h1>

          <p className="text-gray-600 text-sm">
            Dominique Deckmyn — 23 januari 2026 om 23:59
          </p>

          <div className="flex gap-6 text-indigo-600 font-medium text-sm">
            <button className="hover:underline">Luisteren</button>
            <button className="hover:underline">Delen</button>
          </div>
        </header>

        {/* Introductie */}
        <p className="text-gray-800 leading-relaxed text-lg">
          Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet
          helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat.
          Of liever: AI maakt die voor je.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">DE HELPDESK</h2>

        {/* Artikeltekst */}
        <section className="prose prose-lg text-gray-800 leading-relaxed max-w-none space-y-6">
          <p>
            Het is nog maar januari, maar 'vibecoding', ofwel coderen met AI, maakt al een goede
            kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te
            bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen in
            een stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste versies van Claude,
            Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder noemenswaardige
            voorkennis aan zou kunnen beginnen.
          </p>

          <p>
            Maar is dat zo? Wel: ja en nee. Ja: een simpel programma, zoals een spelletje dat je in
            je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar
            een prompt. Denk aan "maak een spel waarbij je cocktails moet mixen". Al helpt het wel
            om eerst een paar handigheidjes te leren, wat we hieronder zullen doen.
          </p>

          <p>
            Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week
            bouwde, dan moet je wel een beetje weten waar je mee bezig bent. Je hoeft niet te kunnen
            programmeren, je hoeft zelfs geen programmacode te kunnen lezen, wel moet je nadenken
            over wat je precies wilt bouwen en welke componenten daarvoor nodig zijn. Maar hier is
            het goede nieuws: je kunt klein beginnen en heel snel je grenzen verleggen.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Een eenvoudig spel</h3>

          <p>
            Hoe klein? Wel, laten we beginnen met zo'n spelletje. Open een chatbot naar keuze:
            Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat. En vraag om een simpel
            spel. Ik probeerde bijvoorbeeld: "Schrijf een spel waarbij een dinosaurus een bal moet
            koppen."
          </p>

          <p>
            Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren dan
            een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de
            programmeertaal Javascript. Wat doe je met die code? Die bewaar je in een document met
            de extensie '.html', bijvoorbeeld 'Mijnspelletje.html' op je computer.
          </p>

          <p>Op een Windows-pc:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Klik op de code die de chatbot genereerde (meestal op het 'copy'-knopje bovenaan of onderaan)</li>
            <li>Plak de code in een programma als Windows Kladblok of Macintosh TextEdit</li>
            <li>Bewaar het bestand met een naam als 'dinospel.html'</li>
            <li>Klik op dinospel.html</li>
            <li>Het spel opent in je standaardbrowser. En spelen maar!</li>
          </ol>

          <p>
            Als je Microsoft Kladblok gebruikt (dat op elke Windows-pc geïnstalleerd zou moeten
            zijn), moet je wel op één ding letten: het programma heeft de neiging om elk document
            te bewaren met de extensie ".txt". Hou dus in de gaten dat hij er niet stiekem
            dinospel.html.txt van heeft gemaakt.
          </p>

          <p>
            Lukt dat allemaal elke keer? Nee, maar meestal wel, eigenlijk. Soms begrijpt de chatbot
            je verkeerd, en moet je wat meer preciseren: "Schrijf het programma in Javascript en zet
            alles in één bestand." En je kunt ook aanwijzingen geven over de visuele stijl ('laat het
            eruitzien als een 8-bit computerspel'), de bediening ('met de pijltjestoetsen') of het
            spelverloop.
          </p>

          <p>
            Vaak zit de eerste versie niet helemaal goed: er wordt geen score bijgehouden,
            bijvoorbeeld, of de voorwerpen in het spel bewegen te snel of juist te traag. Dan doe je
            een tweede ronde: je vraagt aan ChatGPT of Gemini om de nodige aanpassingen. En hop:
            een verbeterde versie verschijnt, die je op dezelfde manier op je harde schijf bewaart.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Ambitieuzer: een gezinskalender</h3>

          <p>
            Na een tijdje durfde ik iets meer complexe apps aan. Terwijl de AI voor grafische apps
            zoals spelletjes en websites meestal spontaan naar HTML en Javascript zal grijpen, kom
            je voor apps met meer tekst of cijfers eerder bij de programmeertaal Python uit. Dat is
            een prachtige taal om mee aan de slag te gaan, maar je moet wel eerst een werkende
            Python-omgeving op je computer hebben staan. Installeer gratis de recentste versie van
            Python via python.org.
          </p>

          <p>
            Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Het moest een app worden
            voor alle leden van een gezin. Eentje waarin ze elkaars activiteiten zien, maar
            bijvoorbeeld ook kunnen zien wie van de ouders het zoontje op dinsdagavond naar de
            voetbaltraining moet brengen. Ieder gezinslid moet een activiteit kunnen toevoegen.
          </p>

          <p>
            Dat is te ingewikkeld voor een programma van één bestand. De app bestaat dus, opnieuw,
            uit HTML en Javascript. De tabel met alle activiteiten moet toegankelijk zijn voor
            iedereen en moet dus ergens centraal worden bewaard. ChatGPT suggereerde een paar
            opties, ik koos daaruit Supabase, een cloud-database. Om iedereen toegang te geven tot
            dezelfde versie van het programma, heb ik het 'gehost' op een site die Vercel heet. Op
            beide sites maakte ik gratis accounts aan.
          </p>

          <p>
            Ik besliste uiteindelijk, alweer op advies van ChatGPT, om mijn programma niet zomaar
            op mijn harde schijf te bewaren maar op de gespecialiseerde website Github, met een
            gratis account. Github houdt alle veranderingen aan je programma bij, zodat je altijd
            kunt terugkeren naar een eerdere, werkende versie.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Echt agentic werken</h3>

          <p>
            Wie verder wil gaan dan dat – zonder zelf te gaan programmeren – moet 'agentic' gaan
            werken: met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden
            kan zien en zelf kan wijzigen. Dan gaat alles veel sneller en kun je eigenlijk haast
            alles bouwen.
          </p>

          <p>
            Je hoort dezer dagen veel over Claude Code, maar ik opteerde voor het gelijkaardige
            ChatGPT Codex. Dat vereist de betaalversie van ChatGPT, ChatGPT Plus (23 euro per
            maand). Codex is een 'agent': je geeft nog altijd een instructie via een tekstprompt,
            maar dan gaat de AI zelfstandig verschillende stappen na elkaar zetten en zelf ook eigen
            wijzigingen voorstellen. Je moet alleen nog af en toe op 'ja' klikken.
          </p>

          <p>
            Er zijn ook talloze gespecialiseerde vibecoding-instrumenten, zoals Cursor, Replit en
            Lovable. Die laatste twee heb ik vrij uitgebreid uitgeprobeerd, ze werken minstens even
            goed als Codex en hebben een rijkere interface. Het probleem is dat je er doorgaans niet
            in slaagt om een app helemaal af te werken met de gratis versie van Replit of Lovable.
          </p>

          <p>
            Mijn Gezinskalender besloot ik dus verder af te werken met ChatGPT Codex. Stap voor
            stap begon Codex mijn programma te verbeteren, op basis van mijn suggesties maar ook op
            eigen initiatief. Twintig minuten later leek de app eigenlijk klaar om in de app stores
            van Apple en Google aan te bieden.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Voorkennis</h3>

          <p>
            Nog een tip voor wie zijn weg zoekt in vibecoding: in plaats van Kladblok te gebruiken,
            heb ik intussen een ander gratis programma van Microsoft geïnstalleerd, VS Code. Met
            Codex, VS Code en Github, soms nog gecombineerd met Supabase en Vercel, kun je haast
            alles bouwen. Letterlijk zonder een lijn code te schrijven, of zelfs maar te lezen.
          </p>

          <p>
            Hoe groot je voorkennis is, maakt een verschil. Ik heb in mijn jeugd wat leren
            programmeren, in de programmeertaal Basic (op een Sinclair ZX-81, heus!). Net voldoende
            om een beetje te begrijpen wat er aan het gebeuren is als die chatbot code genereert.
            Dat heeft mij zeker geholpen, maar mensen zonder enige programmeerkennis slagen erin om
            gelijkaardige apps te vibecoden.
          </p>

          <p>
            Nog iets: agentic programmeren evolueert momenteel razendsnel. Wat zes maanden geleden
            uren werk kostte, komt nu in één keer uit ChatGPT gerold. Iets vrij complex als mijn
            Gezinskalender duurt nu enkele uren, maar kun je over een paar weken of maanden
            waarschijnlijk met twee-drie prompts genereren.
          </p>
        </section>

        {/* Gerelateerde sectie */}
        <section className="bg-gray-100 p-6 rounded-lg space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">Lees ook</h3>
          <p className="text-indigo-700 font-medium hover:underline cursor-pointer">
            Echt waar: niks AI
          </p>
          <p className="text-indigo-700 font-medium hover:underline cursor-pointer">
            Mijn destructieve cyberhuwelijk met Claude
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t pt-6">
          Inspiratie — De helpdesk — Helpdesk
        </footer>

      </article>
    </main>
  )
}
