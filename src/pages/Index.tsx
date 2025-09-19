
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';
import { Description } from '@radix-ui/react-toast';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const pizzeItems = [
  {
    name: "Margherita",
    description: "Pomodoro San Marzano, mozzarella di bufala, basilico fresco",
    price: "€5.00",
    image: "/menu/margherita.png",
  },
  {
    name: "Diavola",
    description: "Pomodoro, mozzarella, salame piccante e olive nere",
    price: "€7.00",
    image: "/menu/diavola.png",
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
    image: "/menu/capricciosa.jpg",
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
    image: "/menu/guanciale-panna.jpg",
  },
  {
    name: "Mediterranea",
    description: "Pomodoro, mozzarella, melanzane, zucchine, peperoni e olive",
    price: "€8.00",
    image: "/menu/medi.png",
  },
  {
    name: "Prosciutto crudo",
    description: "Pomodoro, mozzarella e prosciutto crudo stagionato",
    price: "€7.00",
    image: "/menu/proscuitto-crudo.webp",
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
    image: "/menu/foccacia-fritta.jpg",
  },
  {
    name: "Baby pizza",
    description: "Mini pizza margherita",
    price: "€3.50",
    image:
      "/menu/baby-pizza.webp",
  },
];
const rosteriaItems = [
  {
    name: "Pollo con patate",
    description: "Pollo arrosto servito con patate al forno croccanti",
    price: "€12.50",
    image: "/menu/pollo-con-patate.webp",
  },
  {
    name: "Mezzo pollo con patate",
    description: "Mezzo pollo arrosto servito con patate al forno",
    price: "€6.50",
    image:
      "/menu/mezzo-pollo.jpg",
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
    image: "/menu/cosce-di-pollo.webp",
  },

  {
    name: "Coscette e alette di pollo fritte - 6pz",
    description: "6 pezzi misti di coscette e alette di pollo fritte",
    price: "€6.50",
    image:
      "/menu/coscette-alette-pollo.webp",
  },
  {
    name: "Bocconcini di pollo con patate fritte - 6pz",
    description: "6 bocconcini di pollo croccanti serviti con patatine fritte",
    price: "€7.00",
    image:
      "/menu/boccocini-pollo-patate.png",
  },
  {
    name: "Pollo alla piastra",
    description: "Filetto di pollo cotto alla piastra, leggero e saporito",
    price: "€6.00",
    image:
      "/menu/pollo-alla-piastra.jpg",
  },
  {
    name: "Spiedini di pollo - 2pz",
    description: "2 spiedini di pollo marinati e grigliati",
    price: "€5.00",
    image:
      "/menu/spiedini-di-pollo.jpg",
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
    name: "Pizza disco volante",
    description: "Zucca, stracchino, salsiccia e gorgonzola",
    price: "€10.00",
    image: "/menu/pizza-volante.png",
  },
  {
    name: "Tacos fritto",
    description:
      "Carne di vitello, verza, cavolo viola, riso allo zafferano e mozarella",
    price: "€6.00",
    image: "/menu/tacos.jpg",
  },
  {
    name: "Fagottini di pasta fillo",
    description: "Verdure saltate e carne di vitello",
    price: "€4.00",
    image: "/menu/fagottini-vegetariani.jpg",
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* ✅ Slider Section */}
      <section className="w-full flex flex-col items-center mt-12 px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-5xl text-center mb-6">
          <h2 className="text-3xl font-bold">
            Scopri cosa c'è buono oggi nella nostra vetrina
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
            {/* Video Slide 1 */}
            <SwiperSlide>
              <video
                src="/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl object-cover"
              />
            </SwiperSlide>
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
                src="/video2.mp4"
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

      <div className="bg-gray-50">
        <MenuSection
          id="rosticceria"
          title="Rosticceria"
          description="Carni pregiate cotte alla griglia con maestria e passione"
          items={rosteriaItems}
        />
      </div>

      <MenuSection
        id="fastfood"
        title="Fast Food"
        description="Per chi ha fretta ma non vuole rinunciare al gusto"
        items={fastFoodItems}
      />

      <div className="bg-gray-50">
        <MenuSection
          id="bibite"
          title="Le Nostre Bibite"
          description="Scopri la nostra menu di bibite"
          items={daBere}
        />
      </div>

      <div className="bg-gray-50">
        <MenuSection
          id="specialita"
          title="Specialità della Casa"
          description="I piatti che ci rendono unici, preparati con ricette tradizionali"
          items={specialitaItems}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
