'use client';

import { Phone, Mail, Truck, Home, Trash2, Recycle, Caravan } from 'lucide-react';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src="logo.png" alt="Mountain Peak Hauling Logo" width="50px" height="50px" />
            <span className={styles.businessName}>Mountain Peak Hauling & Junk Removal</span>
          </div>
          <nav className={styles.nav}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Professional Hauling & Junk Removal
            </h1>
            <p className={styles.heroSubtitle}>
              Serving Signal Mountain and surrounding areas
            </p>
            <p className={styles.heroText}>
              Fast, reliable service for homeowners and contractors. We handle everything from single items to full property cleanouts.
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
                <div className={styles.serviceIcon}>
                  <Truck />
                </div>
                <h3>Dump Trailer Rental</h3>
                <p>
                  Need to haul debris yourself? Rent our dump trailer by the day or week. Perfect for DIY projects and renovations.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Home />
                </div>
                <h3>Home Cleanouts</h3>
                <p>
                  Moving, downsizing, or handling an estate? We'll clear out your entire property quickly and respectfully.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Trash2 />
                </div>
                <h3>Junk & Trash Removal</h3>
                <p>
                  Old furniture, appliances, yard waste, construction debris—we haul it all. Same-day service available.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Recycle />
                </div>
                <h3>Scrap Metal Pick-Up</h3>
                <p>
                  Got scrap metal lying around? We'll pick it up and dispose of it properly. Free pickup for large loads.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Caravan />
                </div>
                <h3>Camper Relocation</h3>
                <p>
                  Need to move a camper or trailer? We handle local relocations safely and efficiently.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Truck />
                </div>
                <h3>Hauling Earth Materials</h3>
                <p>
                  Temporary description
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Truck />
                </div>
                <h3>Small Building Demo</h3>
                <p>
                  Temporary description
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Truck />
                </div>
                <h3>Furniture, mattress, and appliance pickup and disposal</h3>
                <p>
                  Temporary description
                </p>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Truck />
                </div>
                <h3>Brush Cleanup and Removal</h3>
                <p>
                  Temporary description
                </p>
              </div>


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
            <p className={styles.contactSubtitle}>
              Ready to clear out that junk? Call or text us today for a free quote.
            </p>
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
            <p className={styles.serviceArea}>
              Serving Signal Mountain, TN and nearby areas
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerBusiness}>
            Mountain Peak Hauling & Junk Removal LLC
          </p>
          <p className={styles.footerContact}>
            <a href="tel:7066713258">(706) 671-3258</a> | <a href="mailto:tylerbramlett84@gmail.com">tylerbramlett84@gmail.com</a>
          </p>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} Mountain Peak Hauling & Junk Removal LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
