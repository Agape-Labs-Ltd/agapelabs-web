'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [imgError, setImgError] = useState(false);
  
  return (
    <main className="pt-28 md:pt-32">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Agape Labs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spreading God&apos;s love through innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400" style={{ display: imgError ? 'flex' : 'none' }}>
                <p className="text-sm">About image placeholder</p>
              </div>
              <Image 
                src={'/images/about-image.jpg'}
                alt="About Agape Labs" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImgError(true)}
                style={{ display: imgError ? 'none' : 'block' }}
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Feran and Josh are two young budding entrepreneurs with a passion for connecting people and a deep passion for Christ. After becoming good friends, Feran and Josh decided to begin a couple ventures together and eventually sensed a call from God to house these ongoing apps and future apps under the umbrella of what was to be Agape Labs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Agape Labs was established as a think tank and melting pot for the very best our creativity, imagination and leading innovations in the tech space are able to offer…all pointed towards our core mission; spreading God&apos;s love through tech.
              </p>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Love</h3>
                <p className="text-gray-700">
                  Our name, Agape Labs, comes from the Greek agape (John 13:34). We aim to embody this unconditional love in everything we create.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Building</h3>
                <p className="text-gray-700">
                  We believe in building platforms that bring people together and make God known to as many as possible.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Service</h3>
                <p className="text-gray-700">
                  At the core of our work here at Agape is service. Mark 10:45, Christ teaches and embodies true servant leadership and we are continually striving to serve communities and individuals&apos; needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 