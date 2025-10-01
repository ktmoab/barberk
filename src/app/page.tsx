import Image from "next/image";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaCut,
  FaStar,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const treatments = [
  { title: "BARBERS HERRKLIPP", desc: "30 minuter.", price: "475 KR" },
  { title: "BARBERS FADE KLIPP", desc: "45 minuter.", price: "490 KR" },
  { title: "BARBERS KLIPP AV UNGA HERRAR", desc: "30 minuter.", price: "375 KR" },
  { title: "BARBERS SNABBPUTS AV NACKE & SIDOR (INGEN FADE)", desc: "15 minuter.", price: "250 KR" },
  { title: "BARBERS HUVUDRAKNING", desc: "30 minuter.", price: "380 KR" },
  { title: "BARBERS STUDENT", desc: "30 minuter.", price: "395 KR" },
  { title: "PENSIONÄR", desc: "30 minuter.", price: "300 KR" },
  { title: "FAR & SON", desc: "60 minuter.", price: "700 KR" },
  { title: "BEARD CUT & SHAPE", desc: "30 minuter.", price: "395 KR" },
  { title: "KLASSISK RAKNING", desc: "30 minuter.", price: "395 KR" },
  { title: "FULL TREATMENT", desc: "60 minuter.", price: "700 KR" },
  { title: "TRÅDNING AV SKÄGGLINJERNA", desc: "15 minuter.", price: "250 KR" },
  { title: "TRIM/PUTS AV SKÄGG", desc: "15 minuter.", price: "250 KR" },
  { title: "HÅRKLIPPNING OCH SKÄGGTRIMNING", desc: "45 minuter.", price: "600 KR" },
  { title: "PUTS AV HÅR & SKÄGG", desc: "30 minuter.", price: "500 KR" },
  { title: "BEARD CUT & SHAPE + MASKINKLIPP", desc: "45 minuter.", price: "600 KR" },
];

const gold = "#c7a162";
const bokaLink = "https://www.bokadirekt.se/places/the-barber-kalmar-ab-35121";

export default function Home() {
  return (
    <div className="bg-[#232323] min-h-screen flex flex-col font-sans">
      {/* HEADER */}
      <header className="w-full bg-black fixed top-0 left-0 z-50 h-[72px] md:h-[100px]">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-16">
          <div className="flex items-center">
            {/* Logo: responsive max-height so it never squishes */}
            <Image
              src="/images/cropped-thebarberk-logo-4-removebg-preview.png"
              alt="The Barber K Logo"
              width={160}
              height={60}
              className="mb-2 w-auto max-h-[68px] object-contain mix-blend-screen "
            />
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <a
              href={bokaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c7a162] hover:bg-[#ab893f] px-6 py-2 rounded font-bold uppercase text-white text-base tracking-wide"
              style={{ boxShadow: "0 2px 0 #9e803a" }}
            >
              BOKA TID
            </a>
            <a
              href="tel:048027810"
              className="bg-[#c7a162] hover:bg-[#ab893f] px-6 py-2 rounded font-bold uppercase text-white text-base tracking-wide"
              style={{ boxShadow: "0 2px 0 #9e803a" }}
            >
              RING OSS
            </a>
          </div>

          {/* Small mobile action (keeps header useful on small screens) */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={bokaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c7a162] px-3 py-2 rounded font-bold uppercase text-black text-sm"
              style={{ boxShadow: "0 2px 0 #9e803a" }}
            >
              Boka
            </a>
            <a href="tel:048027810" className="text-[#c7a162] text-sm font-medium">
              0480-278 10
            </a>
          </div>
        </div>
      </header>

      {/* HEADER SPACER - matches header height */}
      <div className="h-[72px] md:h-[100px]" aria-hidden />

      {/* HERO */}
      <section className="relative w-full h-[31vh] sm:h-[40vh] md:h-[60vh] min-h-[190px] max-h-[400px] md:max-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Use fill + container so we can control object-fit per breakpoint */}
          <Image
            src="/images/thebarberk-hero.jpg"
            alt="Hero"
            fill
            className="object-contain "
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#c7a162] font-bold text-base md:text-lg tracking-widest mb-1">
            THE BARBER K
          </span>
          <h1 className="text-white font-montserrat text-2xl md:text-4xl font-extrabold leading-tight mb-6">
            Herrfrisör &amp; Barberare i Kalmar
          </h1>
          <a
            href={bokaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c7a162] hover:bg-[#ab893f] text-white font-bold text-base md:text-lg px-8 py-3 rounded transition mb-2"
            style={{ boxShadow: "0 4px 0 #9e803a" }}
          >
            Boka Tid Online
          </a>
        </div>
      </section>

      {/* ICON CARD GRID */}
      <section className="w-full py-6 md:py-12 px-2 md:px-0 flex flex-col items-center bg-[#232323]">
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-auto px-4">
          <a
            href={bokaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#222] rounded-lg p-6 md:p-8 flex flex-col items-center shadow-md hover:brightness-110 transition"
          >
            <span className="block w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c7a162] flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaCalendarAlt size={28} color="#fff" />
            </span>
            <div className="mt-3 text-white font-montserrat text-base md:text-lg font-bold tracking-wide text-center">
              BOKA TID
            </div>
            <div className="mt-1 text-[#c7a162] text-sm md:text-base font-medium flex items-center">
              Boka Online <FaArrowRight color={gold} className="ml-2 -mt-1" />
            </div>
          </a>

          <div className="bg-[#222] rounded-lg p-6 md:p-8 flex flex-col items-center shadow-md">
            <span className="block w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c7a162] flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaPhoneAlt size={28} color="#fff" />
            </span>
            <div className="mt-3 text-white font-montserrat text-base md:text-lg font-bold tracking-wide text-center">
              RING OSS
            </div>
            <a
              href="tel:048027810"
              className="mt-1 text-[#c7a162] text-sm md:text-base font-medium flex items-center hover:underline"
            >
              0480-278 10 <FaArrowRight color={gold} className="ml-2 -mt-1" />
            </a>
          </div>

          <a
            href="#prislista"
            className="bg-[#222] rounded-lg p-6 md:p-8 flex flex-col items-center shadow-md hover:brightness-110 transition"
          >
            <span className="block w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c7a162] flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaCut size={28} color="#fff" />
            </span>
            <div className="mt-3 text-white font-montserrat text-base md:text-lg font-bold tracking-wide text-center">
              PRISLISTA
            </div>
            <div className="mt-1 text-[#c7a162] text-sm md:text-base font-medium flex items-center">
              Behandlingar <FaArrowRight color={gold} className="ml-2 -mt-1" />
            </div>
          </a>

          <a
            href={bokaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#222] rounded-lg p-6 md:p-8 flex flex-col items-center shadow-md hover:brightness-110 transition"
          >
            <span className="block w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c7a162] flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaStar size={28} color="#fff" />
            </span>
            <div className="mt-3 text-white font-montserrat text-base md:text-lg font-bold tracking-wide text-center">
              KUNDOMDÖMEN
            </div>
            <div className="mt-1 text-[#c7a162] text-sm md:text-base font-medium flex items-center">
              Läs Här <FaArrowRight color={gold} className="ml-2 -mt-1" />
            </div>
          </a>
        </div>

        <a
          href={bokaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 md:mt-12 bg-[#c7a162] hover:bg-[#ab893f] text-white font-bold text-base md:text-lg px-8 md:px-10 py-2 md:py-3 rounded transition"
          style={{ boxShadow: "0 4px 0 #9e803a" }}
        >
          Boka Tid Online
        </a>
      </section>

      {/* PRISLISTA SECTION */}
      <section
        className="w-full pt-10 pb-8 md:pt-20 md:pb-16 bg-[#232323] flex flex-col items-center"
        id="prislista"
      >
        <div className="text-[#c7a162] font-bold text-base md:text-lg tracking-widest mb-2 text-center">
          PRISLISTA
        </div>
        <h2 className="text-white font-montserrat text-2xl md:text-4xl font-extrabold mb-10 text-center tracking-wide">
          VÅRA BEHANDLINGAR
        </h2>

        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {treatments.map((t, i) => (
            <a
              key={i}
              href={bokaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#222] rounded-lg shadow-lg px-6 py-5 flex justify-between items-center hover:brightness-110 transition"
            >
              <div>
                <div className="font-montserrat text-white text-base md:text-lg font-extrabold uppercase">
                  {t.title}
                </div>
                <div className="text-white text-sm mt-1">{t.desc}</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[#c7a162] font-bold text-lg md:text-xl">{t.price}</span>
                <span><FaArrowRight color={gold} /></span>
              </div>
            </a>
          ))}
        </div>

        <a
          href={bokaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 bg-[#c7a162] hover:bg-[#ab893f] text-white font-bold text-base md:text-lg px-10 py-3 rounded transition"
          style={{ boxShadow: "0 4px 0 #9e803a" }}
        >
          Boka Tid Online
        </a>
      </section>

      {/* OM KARWAN */}
      <section className="w-full bg-[#232323] flex flex-col items-center pt-12 pb-8 px-4 md:px-0">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            {/* image in fixed container so height is predictable on mobile */}
            <div className="relative rounded-lg overflow-hidden w-full h-[240px] md:h-[340px]">
              <Image
                src="/images/karwan-bw.jpeg"
                alt="Karwan"
                fill
                className="object-contain md:object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-white font-montserrat text-2xl md:text-3xl font-extrabold mb-2">OM KARWAN</h3>
            <div className="text-[#c7a162] font-bold uppercase tracking-widest mb-4 text-base md:text-lg">
              GRUNDARE OCH BARBERARE
            </div>
            <div className="text-white text-base md:text-lg mb-4">
              Att bli frisör har varit min dröm sen liten och så fort barberare yrket började blossa upp i Sverige igen, visste jag att det var just det jag skulle inrikta mig på. Nu, efter ett par års erfarenhet av yrket känner jag att det är dags för mig att göra min personliga touch på en barbershop och det är precis det ni också kommer att känna i The Barber K’s lokal.
              <br />
              <b>Min vision är att kunder ska ha en härlig känsla innan, under och efter besöket.</b>
            </div>
            <a
              href={bokaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c7a162] hover:bg-[#ab893f] text-white font-bold text-base md:text-lg px-8 py-3 rounded transition w-fit"
              style={{ boxShadow: "0 4px 0 #9e803a" }}
            >
              Boka tid med Karwan
            </a>
          </div>
        </div>

        {/* OM KATERINA */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-white font-montserrat text-2xl md:text-3xl font-extrabold mb-2">OM KATERINA</h3>
            <div className="text-[#c7a162] font-bold uppercase tracking-widest mb-4 text-base md:text-lg">FRISÖR</div>
            <div className="text-white text-base md:text-lg mb-4">
              Jag har gått en tvåårig frisörutbildning i Grekland och jobbat där i några år på en herrsalong. 2008 kom jag hem till Sverige och började jobba på Salong Söder här i Kalmar efter det har jag provat på några andra jobb men kände att jag ville tillbaka till frisöryrket. Så nu är jag här på The Barber K och väntar på att få träffa er alla nya som gamla kunder.
            </div>
            <a
              href={bokaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c7a162] hover:bg-[#ab893f] text-white font-bold text-base md:text-lg px-8 py-3 rounded transition w-fit"
              style={{ boxShadow: "0 4px 0 #9e803a" }}
            >
              Boka tid med Katerina
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden w-full h-[240px] md:h-[340px]">
              <Image
                src="/images/katerina-bw.jpeg"
                alt="Katerina"
                fill
                className="object-contain md:object-cover"
              />
            </div>
          </div>
        </div>

        {/* OM OSS */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="relative rounded-lg overflow-hidden w-full h-[240px] md:h-[340px]">
              <Image
                src="/images/about-color.jpeg"
                alt="Om oss"
                fill
                className="object-contain md:object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-white font-montserrat text-2xl md:text-3xl font-extrabold mb-2">OM OSS</h3>
            <div className="text-[#c7a162] font-bold uppercase tracking-widest mb-4 text-base md:text-lg">DINA LOKALA FRISÖR & BARBERARE I KALMAR</div>
            <div className="text-white text-base md:text-lg mb-4">
              Välkomna till oss där vi utför professionella behandlingar. Vi har en familjär och trevlig miljö där jag vi att ni ska känna er som hemma. Slå er ned i de sköna Chesterfieldmöblerna med en av böckerna om allt från whisky till motorcyklar. Kolla runt bland tavlorna och fotbollströjorna. Ta en kopp kaffe för att känna av atmosfären och doften i en barbershop, för att senare få en avslappnade rakning eller hårklippning utförd av din barberare.
            </div>
            <a
              href={bokaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c7a162] hover:bg-[#ab893f] text-white font-bold text-base md:text-lg px-8 py-3 rounded transition w-fit"
              style={{ boxShadow: "0 4px 0 #9e803a" }}
            >
              Boka tid online
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
<section className="w-full bg-[#232323] flex flex-col items-center pt-4 pb-16 px-2 md:px-0">
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left: Big chair image, spans 2 rows */}
    <div className="md:row-span-2 md:col-span-2">
      <Image
        src="/images/gallery-chair.jpeg"
        alt="Chair"
        width={1200}
        height={900}
        className="rounded-lg object-cover w-full h-[400px] md:h-[700px]"
        priority
      />
    </div>
    {/* Top right: MC image */}
    <div>
      <Image
        src="/images/gallery-mc.jpeg"
        alt="MC"
        width={600}
        height={340}
        className="rounded-lg object-cover w-full h-[190px] md:h-[340px]"
      />
    </div>
    {/* Bottom right: Bottle image */}
    <div>
      <Image
        src="/images/gallery-bottle.jpeg"
        alt="Bottle"
        width={600}
        height={340}
        className="rounded-lg object-cover w-full h-[190px] md:h-[340px]"
      />
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-[#2b2a29] w-full pt-16 pb-10 mt-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-white font-montserrat text-lg md:text-2xl font-bold mb-2 tracking-widest">MENY</div>
            <ul>
              <li>
                <a href={bokaLink} target="_blank" rel="noopener noreferrer" className="text-[#c7a162] text-base md:text-lg block mb-1 hover:underline">
                  Prislista
                </a>
              </li>
              <li>
                <a href={bokaLink} target="_blank" rel="noopener noreferrer" className="text-[#c7a162] text-base md:text-lg block mb-1 hover:underline">
                  Boka tid online
                </a>
              </li>
              <li>
                <a href={bokaLink} target="_blank" rel="noopener noreferrer" className="text-[#c7a162] text-base md:text-lg block mb-1 hover:underline">
                  Omdömen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white font-montserrat text-lg md:text-2xl font-bold mb-2 tracking-widest">ADRESS</div>
            <div className="text-[#c7a162] text-base md:text-lg mb-1">Norra Vägen 38, 392 49 Kalmar</div>
            <div className="text-[#c7a162] text-base md:text-lg mb-1">0480-278 10</div>
            <div className="text-[#c7a162] text-base md:text-lg mb-1">karwan@thebarberk.se</div>
          </div>

          <div>
            <div className="text-white font-montserrat text-lg md:text-2xl font-bold mb-2 tracking-widest">ÖPPETTIDER</div>
            <div className="text-white text-base md:text-lg mb-1"><b>Mån-Tor:</b> 09:00 - 18:00</div>
            <div className="text-white text-base md:text-lg mb-1"><b>Fre:</b> 09:00 - 17:00</div>
            <div className="text-white text-base md:text-lg mb-1"><b>Lör:</b> 10:00 - 14:00</div>
            <div className="text-white text-base md:text-lg mt-4 mb-1">Tider utöver ordinarie öppettider går att lösa!</div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Image
              src="/images/cropped-thebarberk-logo-4-removebg-preview.png"
              alt="The Barber K Logo"
              width={160}
              height={60}
              className="mb-2 w-auto max-h-[78px] object-contain mix-blend-screen "
            />

            <div className="text-white text-xs mb-2">HAIRCUT AND BARBER SHOP</div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/TheBarberK.se/" className="text-[#c7a162] hover:text-[#ab893f]" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/thebarberk.se/" className="text-[#c7a162] hover:text-[#ab893f]" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
