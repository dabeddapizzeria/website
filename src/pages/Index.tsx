import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";
import { Description } from "@radix-ui/react-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const pizzeItems = [
  {
    name: "Margherita",
    description: "Pomodoro, mozzarella di bufala, basilico fresco",
    price: "€5.00",
    image: "/menu/margherita.jpg",
  },
  {
    name: "Salame",
    description: "Pomodoro, mozzarella, salame piccante e olive nere",
    price: "€7.00",
    image: "/menu/diavola.jpg",
  },
  {
    name: "Quattro Stagioni",
    description:
      "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive",
    price: "€8.00",
    image: "/menu/quattroStagioni.jpg",
  },
  {
    name: "Capricciosa",
    description:
      "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi e olive",
    price: "€9.00",
    image: "/menu/capricciosa.JPG",
  },
  {
    name: "Bufala e pomodorini",
    description: "Pomodoro fresco, mozzarella di bufala, pomodorini e basilico",
    price: "€8.50",
    image: "/menu/bufala-pomodorini.webp",
  },

  {
    name: "Guanciale e panna",
    description: "Mozzarella, guanciale croccante e panna fresca",
    price: "€8.00",
    image: "/menu/guanciale-panna.JPG",
  },
  {
    name: "Mediterranea",
    description: "Pomodoro, mozzarella, melanzane, zucchine, peperoni e olive",
    price: "€8.00",
    image: "/menu/mediteranna.JPG",
  },
  {
    name: "Prosciutto",
    description: "Pomodoro, mozzarella e prosciutto crudo stagionato",
    price: "€7.00",
    image: "/menu/proscuitto.jpg",
  },
  {
    name: "Salsiccia e friarielli",
    description: "Mozzarella, salsiccia e friarielli napoletani",
    price: "€8.00",
    image: "/menu/salsiccia-friarielli.jpg",
  },
  {
    name: "Siciliana",
    description: "Pomodoro, mozzarella, alici, capperi e olive nere",
    price: "€7.00",
    image: "/menu/siciliana.jpg",
  },
  {
    name: "Speck e provola",
    description: "Mozzarella, speck affumicato e provola",
    price: "€7.00",
    image: "/menu/speck-provala.jpg",
  },
  {
    name: "Vegetariana",
    description: "Pomodoro, mozzarella e verdure grigliate di stagione",
    price: "€7.00",
    image: "/menu/vegeteriana.jpg",
  },
  {
    name: "Zucca e scamorza",
    description: "Mozzarella, crema di zucca e scamorza affumicata",
    price: "€7.00",
    image: "/menu/zucca-scamorza.jpg",
  },
  {
    name: "Focaccia al lardo",
    description: "Focaccia calda con lardo di Colonnata",
    price: "€5.50",
    image: "/menu/foccacia-lardo.jpg",
  },
  {
    name: "Bedda",
    description: "Pomodoro, mozzarella, melanzane fritte, ricotta salata",
    price: "€10.00",
    image: "/menu/pizza-bedda.jpg",
  },
  {
    name: "Tegamino",
    description:
      "Pizza napoletana cotta nel tegamino con pomodoro e mozzarella",
    price: "€5.00",
    image: "/menu/tegamino.webp",
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmigiano e pecorino",
    price: "€8.00",
    image: "/menu/quattroformaggio.jpg",
  },
  {
    name: "Panzeroto fritto",
    description: "Panzerotto fritto con pomodoro e mozzarella",
    price: "€6.50",
    image: "/menu/panzerotto-fritto.webp",
  },
  {
    name: "Calzone classico",
    description: "Calzone ripieno di pomodoro, mozzarella e prosciutto",
    price: "€6.50",
    image: "/menu/calzone.jpg",
  },
  {
    name: "Focaccia fritta",
    description: "Focaccia fritta leggera e croccante",
    price: "€3.00",
    image: "/menu/foccacia-fritte.jpg",
  },
  {
    name: "Baby pizza",
    description: "Mini pizza margherita",
    price: "€3.50",
    image: "/menu/baby-pizza.webp",
  },
];
const rosteriaItems = [
  {
    name: "Pollo con patate",
    description: "Pollo arrosto servito con patate al forno croccanti",
    price: "€12.50",
    image: "/menu/pollo-arrosto-con-patate.jpg",
  },
  {
    name: "Mezzo pollo con patate",
    description: "Mezzo pollo arrosto servito con patate al forno",
    price: "€6.50",
    image: "/menu/mezzo-pollo-patate.png",
  },
  {
    name: "Pollo classico",
    description: "Pollo intero arrosto marinato con erbe aromatiche",
    price: "€9.00",
    image: "/menu/polloIntero.jpg",
  },
  {
    name: "Cosce di pollo fritte - 4pz",
    description: "4 cosce di pollo impanate e fritte dorate",
    price: "€7.00",
    image: "/menu/cosce-di-pollo.png",
  },

  {
    name: "Coscette e alette di pollo fritte - 6pz",
    description: "6 pezzi misti di coscette e alette di pollo fritte",
    price: "€6.50",
    image: "/menu/alette-di-pollo.png",
  },
  {
    name: "Bocconcini di pollo con patate fritte - 6pz",
    description: "6 bocconcini di pollo croccanti serviti con patatine fritte",
    price: "€7.00",
    image: "/menu/boccocini-pollo-patate.png",
  },
  {
    name: "Pollo alla piastra",
    description: "Filetto di pollo cotto alla piastra, leggero e saporito",
    price: "€6.00",
    image: "/menu/pollo-alla-piastra.jpg",
  },
  {
    name: "Spiedini di pollo - 2pz",
    description: "2 spiedini di pollo marinati e grigliati",
    price: "€5.00",
    image: "/menu/spiedini-di-pollo.jpg",
  },
];

const fastFoodItems = [
  {
    name: "Chicken barbecue",
    description: "Cotoletta formaggio, salsa BBQ e speck croccante",
    price: "€7.00",
    image: "/menu/chicken-bbq.png",
  },
  {
    name: "Chicken burger",
    description: "Cotoletta, formaggio, pomodoro, insalata e maionese",
    price: "€6.50",
    image: "/menu/chicken-burger.webp",
  },
  {
    name: "Chicken special",
    description:
      "Petto di pollo alla piastra, formaggio, rucola, bacon e salsa BBQ piccante",
    price: "€6.50",
    image: "/menu/chicken-special.jpg",
  },
  {
    name: "Bedda 2.0",
    description:
      "200gx2 di vitello, formaggio, salsa BBQ, zucchine grigliate, bacon, pomodoro e insalata",
    price: "€10.00",
    image: "/menu/bedda-burger.jpg",
  },

  {
    name: "Cheese burger",
    description:
      "150g di vitello, formaggio, cetriolo, maionese, ketchup, pomodoro e insalata",
    price: "€5.50",
    image: "/menu/manzo-cheese-burger.jpg",
  },
];

const specialitaItems = [
  {
    name: "Tacos fritto",
    description:
      "Carne di vitello, verza, cavolo viola, riso allo zafferano e mozarella",
    price: "€6.00",
    image: "/menu/tacos-fritto.png",
  },
  {
    name: "verdure grigliate",
    description: "Zucca, stracchino, salsiccia e gorgonzola",
    price: "€4.00",
    image: "/menu/verdure-grigliate.png",
  },
  {
    name: "Pizza disco volante",
    description: "Zucca, stracchino, salsiccia e gorgonzola",
    price: "€10.00",
    image: "/menu/pizza-volante.png",
  },
  {
    name: "Fagottini di pasta fillo",
    description: "Verdure saltate e carne di vitello",
    price: "€4.00",
    image: "/menu/fagottini-vegetariani.jpg",
  },
  {
    name: "Patatine fritte",
    description: "Zucca, stracchino, salsiccia e gorgonzola",
    price: "€2.50",
    image: "/menu/patatine-fritte.jpg",
  },

  {
    name: "Patate al forno",
    description: "Zucca, stracchino, salsiccia e gorgonzola",
    price: "€3.50",
    image: "/menu/patate-al-forno.avif",
  },
  {
    name: "foccacia fritta",
    description: "Zucca, stracchino, salsiccia e gorgonzola",
    price: "€3.00",
    image: "/menu/foccacia-fritte.jpg",
  },
];

const daBere = [
  {
    name: "Coca Cola",
    description: null,
    price: "€2.00",
    image: "/menu/cocacola.jpg",
  },
  {
    name: "Coca Cola Zero",
    description: null,
    price: "€2.00",
    image: "/menu/cocacola-zero.png",
  },
  {
    name: "Fanta",
    description: null,
    price: "€2.00",
    image: "/menu/fanta.webp",
  },
  {
    name: "Sprite",
    description: null,
    price: "€2.00",
    image: "/menu/sprite.png",
  },
  {
    name: "Thè al limone",
    description: null,
    price: "€2.00",
    image: "/menu/theLimone.png",
  },
  {
    name: "Thè alla pesca",
    description: null,
    price: "€2.00",
    image: "/menu/thePesca.png",
  },
  {
    name: "Lemon soda",
    description: null,
    price: "€2.00",
    image: "/menu/lemon-soda.webp",
  },
  {
    name: "Birra becks",
    description: null,
    price: "€3.00",
    image: "/menu/becks.png",
  },
  {
    name: "Birra corona",
    description: null,
    price: "€3.00",
    image: "/menu/corona-extra.jpg",
  },
  {
    name: "Birra ichnusa",
    description: null,
    price: "€3.00",
    image: "/menu/ichnusa.webp",
  },
  {
    name: "Birra Tennents",
    description: null,
    price: "€3.00",
    image: "/menu/tennents.jpg",
  },
  {
    name: "Birra moretti 66cl",
    description: null,
    price: "€2.50",
    image: "/menu/moretti.jpg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#eee8e2]">
      <Navbar />
      <Hero />

      {/* ✅ Slider Section */}
      <section className="w-full flex flex-col items-center mt-12 px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-5xl text-center mb-6">
          <h2 className="text-3xl font-bold">
            Vieni a scoprire le delizie che abbiamo preparato per te oggi
          </h2>
          <p></p>
          <br />
        </div>

        <div className="w-full max-w-5xl">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-2xl shadow-lg"
            spaceBetween={20}
            slidesPerView={1}
          >
            {/* Image Slide */}
            <SwiperSlide>
              <img
                src="/vetrina.png"
                alt="Delicious pizza showcase"
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl object-cover"
              />
            </SwiperSlide>

            {/* Video Slide 2 */}
            <SwiperSlide>
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* ✅ End of Slider Section */}

      <MenuSection
        id="pizze"
        title="Le nostre pizze"
        description="I nostri prodotti cotte nel forno a legna con ingredienti di prima qualità"
        items={pizzeItems}
      />

      <div className="bg-[#ede9e5]">
        <MenuSection
          id="rosticceria"
          title="Rosticceria"
          description="Carni pregiate cotte alla griglia con maestria e passione"
          items={rosteriaItems}
        />
      </div>

      <div className="bg-[#ede9e5]">
        <MenuSection
          id="specialita"
          title="Specialità della Casa"
          description="I piatti che ci rendono unici, preparati con ricette tradizionali"
          items={specialitaItems}
        />
      </div>

      <MenuSection
        id="fastfood"
        title="Fast Food"
        description="Per chi ha fretta ma non vuole rinunciare al gusto"
        items={fastFoodItems}
      />

      <div className="bg-[#ede9e5]">
        <MenuSection
          id="bibite"
          title="Le Nostre Bibite"
          description="Scopri la nostra menu di bibite"
          items={daBere}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
