import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Slider1 from "./assets/Slider1.jpg";
import Slider2 from "./assets/Slider2.jpg";
import Slider3 from "./assets/Slider3.jpg";
import headphone from "./assets/headphone.jpg";
import laptop from "./assets/laptop.jpg";
import smartphone from"./assets/smartphone.jpg";
function App() {
  const images=[Slider1,Slider2,Slider3]
  const products = [
    {
      id: 1,
      image:headphone,
      title: "Headphone",
      description: "Boosts your audio",
      price: 899,
    },
    {
      id: 2,
      image: laptop,
      title: "laptop",
      description: "modern technologies integreated beast",
      price: 499,
    },
    {
      id: 3,
      image: smartphone,
      title: "Smartphone",
      description: "modern technologies integreated beast",
      price: 549,
    },
      {
      id: 4,
      image: laptop,
      title: "laptop",
      description: "modern technologies integreated beast",
      price: 499,
    },
    {
      id: 5,
      image: smartphone,
      title: "Smartphone",
      description: "modern technologies integreated beast",
      price: 549,
    },
    {
      id: 6,
     image: laptop,
      title: "laptop",
      description: "modern technologies integreated beast",
      price: 499,
    },
    {
      id:7,
      image: laptop,
      title: "laptop",
      description: "modern technologies integreated beast",
      price: 499,
    },
    {
      id:8,
      image: laptop,
      title: "laptop",
      description: "modern technologies integreated beast",
      price: 499,
    }

  ];

  return (
    <>
      <Slider images={images}/>
      <div className="w-full mx-10 p-8">
        <section className="mb-12">
          <h1 className="text-3xl font-semibold mb-6">Top picks</h1>
          <div className="p-16 flex justify-around flex-wrap gap-10">
            {products.slice(0, 8).map((prod) => (
              <Card
                key={prod.id}
                id={prod.id}
                image={prod.image}
                title={prod.title}
                description={prod.description}
                price={`${prod.price}`}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
