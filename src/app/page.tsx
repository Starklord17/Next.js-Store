import { Description } from "app/components/home/Description";
import { Hero } from '../components/home/Hero/Hero';
import { MainProducts } from '../components/home/MainProducts/MainProducts';

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
