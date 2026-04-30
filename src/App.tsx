/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Diferenciais from './components/Diferenciais';
import Sobre from './components/Sobre';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Diferenciais />
        <Sobre />
        <Depoimentos />
      </main>
      <Footer />
    </div>
  );
}

