'use client';

import {
  Phone,
  Mail,
  Truck,
  Home,
  Trash2,
  Recycle,
  Caravan,
  Menu,
  X,
  TreePine,
  Bed,
  Warehouse,
  Stone,
  Hash
} from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  const galleryImages = useMemo(
    () => [
      { src: '/gallery/pickupwithdump.jpg', alt: 'Pickup truck with dump trailer' },
      { src: '/gallery/trailerforrent.jpg', alt: 'A trailer available for rent' },
      { src: '/gallery/earthmatpickup.jpg', alt: 'Earth material pickup' },
      { src: '/gallery/fulldump2.png', alt: 'Full dump truck 2' },
      { src: '/gallery/fulldump3.png', alt: 'Full dump truck 3' },
      { src: '/gallery/fulltruck.png', alt: 'Full truck' },
      { src: '/gallery/fulltruckdump.png', alt: 'Full truck with dump trailer' },
      { src: '/gallery/fulltruckdump2.png', alt: 'Full truck with dump trailer 2' },
      { src: '/gallery/pickupwithdump2.png', alt: 'Pickup truck with dump trailer 2' },
      { src: '/gallery/graveldump.jpeg', alt: 'Gravel dumping out of trailer' }
    ],
    []
  );

  const len = galleryImages.length;
  const wrapIndex = (i: number) => (i + len) % len;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const AUTO_MS = 6000;

  const goNext = () => setCurrentImageIndex((idx) => wrapIndex(idx + 1));
  const goPrev = () => setCurrentImageIndex((idx) => wrapIndex(idx - 1));

  // auto rotate
  useEffect(() => {
    const id = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ close mobile menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileNavOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goToImage = (index: number) => setCurrentImageIndex(index);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src="logo.png" alt="Mountain Peak Hauling Logo" width="50" height="50" />
            <span className={styles.businessName}>Mountain Peak Hauling & Junk Removal</span>
          </div>

          <nav className={styles.nav}>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileNavOpen ? 'true' : 'false'}
          >
            {mobileNavOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileNavOpen && (
          <div className={styles.mobileNav}>
            <a href="#services" onClick={() => setMobileNavOpen(false)}>Services</a>
            <a href="#gallery" onClick={() => setMobileNavOpen(false)}>Gallery</a>
            <a href="#about" onClick={() => setMobileNavOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main>
        <section className={styles.hero}>
  {/* Background Video */}
  <video
    className={styles.heroVideo}
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src="/herovid.mp4" type="video/mp4" />
  </video>

  {/* Dark overlay */}
  <div className={styles.heroOverlay} />

  {/* Content */}
  <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>Professional Hauling & Junk Removal</h1>
    <p className={styles.heroSubtitle}>
      Serving Signal Mountain and surrounding areas
    </p>
    <p className={styles.heroText}>
      Fast, reliable service for homeowners and contractors.
      We handle everything from single items to full property cleanouts.
    </p>

    <a href="tel:7066713258" className={styles.ctaButton}>
      <Phone className={styles.buttonIcon} />
      Call or Text for a Free Quote
    </a>

    <p className={styles.phoneNumber}>
      <a href="tel:7066713258">(706) 671-3258</a>
    </p>
  </div>
</section>

        <section id="services" className={styles.services}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Truck /></div>
                <h3>Dump Trailer Rental</h3>
                <p>Need to haul debris yourself? Rent our dump trailer by the day or week. Perfect for DIY projects and renovations.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Home /></div>
                <h3>Home Cleanouts</h3>
                <p>Moving, downsizing, or handling an estate? We'll clear out your entire property quickly and respectfully.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Trash2 /></div>
                <h3>Junk & Trash Removal</h3>
                <p>Old furniture, appliances, yard waste, construction debris—we haul it all. Same-day service available.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Recycle /></div>
                <h3>Scrap Metal Pick-Up</h3>
                <p>Got scrap metal lying around? We'll pick it up and dispose of it properly. Free pickup for large loads.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Caravan /></div>
                <h3>Camper Relocation</h3>
                <p>Need to move a camper or trailer? We handle local relocations safely and efficiently.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Stone /></div>
                <h3>Hauling Earth Materials</h3>
                <p>Need topsoil, mulch, dirt, or gravel delivered or removed? We handle bulk earth material transport for landscaping, construction, and property development projects.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Warehouse /></div>
                <h3>Small Building Demo</h3>
                <p>From storage sheds to small structures, we safely demolish and haul away the debris. Licensed and experienced with proper disposal procedures.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Bed /></div>
                <h3>Furniture, mattress, and appliance pickup and disposal</h3>
                <p>Unwanted furniture, old mattresses, and broken appliances taking up space? We haul them away and dispose of them responsibly.</p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><TreePine /></div>
                <h3>Brush Cleanup and Removal</h3>
                <p>Tree branches, yard waste, and brush piling up? We'll clear it all out, chip oversized items, and haul away the debris.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className={styles.gallery}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>What We Can Do For You</h2>
            <p className={styles.galleryDescription}>
              See our equipment in action and the quality of work we deliver.
            </p>

            <div className={styles.carouselContainer}>
              <button className={styles.carouselButton} onClick={goPrev} aria-label="Previous image">
                &#10094;
              </button>

              <div className={styles.carouselStage}>
                <img
                  key={currentImageIndex}
                  className={styles.carouselImg}
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  draggable={false}
                />
              </div>

              <button className={styles.carouselButton} onClick={goNext} aria-label="Next image">
                &#10095;
              </button>
            </div>

            <div className={styles.carouselDots}>
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <div className={styles.aboutContent}>
             <p>
                Mountain Peak Hauling & Junk Removal is a locally owned and operated business serving Signal Mountain, TN and the surrounding areas. We're not a national franchise—we're your neighbors, and we take pride in keeping our community clean.
              </p>
              <p>
                Whether you're a homeowner tackling a cleanout, a contractor with job site debris, or someone who just needs a single item hauled away, we're here to help. No job is too big or too small.
              </p>
              <p>
                We show up on time, work hard, and charge fair prices. That's our promise to you.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.contactSubtitle}>Call or text us today for a free quote.</p>
            <div className={styles.contactInfo}>
              <a href="tel:7066713258" className={styles.contactLink}>
                <Phone />
                <span>(706) 671-3258</span>
              </a>
              <a href="mailto:tylerbramlett84@gmail.com" className={styles.contactLink}>
                <Mail />
                <span>tylerbramlett84@gmail.com</span>
              </a>
            </div>
            <p className={styles.serviceArea}>Serving Signal Mountain, TN and nearby areas</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerBusiness}>Mountain Peak Hauling & Junk Removal LLC</p>
          <p className={styles.footerLinks}>
            <a href="#services">Services</a> | <a href="#gallery">Gallery</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
          </p>
          <p className={styles.footerContact}>
            <a href="tel:7066713258">(706) 671-3258</a> |{' '}
            <a href="mailto:tylerbramlett84@gmail.com">tylerbramlett84@gmail.com</a>
          </p>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} Mountain Peak Hauling & Junk Removal LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}