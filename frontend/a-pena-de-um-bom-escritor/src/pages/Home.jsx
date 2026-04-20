import Hero from '../components/Hero/Hero';
import Gavetas from '../components/Gavetas/Gavetas';
import SobreEscritor from '../components/SobreEscritor/SobreEscritor';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Hero />
      <Gavetas />
      <SobreEscritor />
      <WhatsAppButton />
    </>
  );
}
