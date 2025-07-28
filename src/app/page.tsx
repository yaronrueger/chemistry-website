import Image from "next/image";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ScrollAnimation from "./ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen theme-bg-primary">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 theme-bg-tertiary relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:hidden">
          <Image 
            src="/logo_thumbnail.png" 
            alt="Young Agers Background Logo" 
            width={600} 
            height={600}
            className="object-contain"
          />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold theme-text-primary mb-6">
            Young Agers
          </h1>
          <p className="text-xl md:text-2xl theme-text-secondary mb-8 max-w-3xl mx-auto">
            A community of early-career researchers working on the Maillard reaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-secondary">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animationType="fade-up" delay="delay-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">
                  About YoungAGErs
                </h2>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto">
                  The Young AGErs are a community of early-career researchers. Our topics are all 
                  connected to the Maillard reaction in some way and cover a wide range of areas, 
                  from biochemistry to food processing and (pre-)clinical research. Young AGErs 
                  are spread across many universities.
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animationType="fade-up" delay="delay-300">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold theme-text-primary mb-2">Biochemistry</h3>
                  <p className="theme-text-secondary">
                    Understanding the molecular mechanisms of the Maillard reaction.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-up" delay="delay-400">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold theme-text-primary mb-2">Food Processing</h3>
                  <p className="theme-text-secondary">
                    Applying Maillard reaction insights to improve food quality and safety.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-up" delay="delay-500">
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold theme-text-primary mb-2">Clinical Research</h3>
                  <p className="theme-text-secondary">
                    Exploring the health implications and therapeutic potential.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Mission Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="mission" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-tertiary">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <ScrollAnimation animationType="fade-left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg theme-text-secondary mb-6">
                    We believe that young people have the power to change the world. 
                    Our mission is to develop innovative technologies and sustainable solutions 
                    that have positive impacts on society and the environment.
                  </p>
                  <ul className="space-y-3 theme-text-secondary">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Promoting young talent in technology and innovation
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Developing sustainable and ethical technology solutions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Building a community for knowledge sharing and mentoring
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-right" delay="delay-300">
                <div className="mt-8 lg:mt-0">
                  <div className="theme-card-bg rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-semibold theme-text-primary mb-4">Our Values</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium theme-text-primary">Transparency</h4>
                        <p className="text-sm theme-text-secondary">Open communication and honest collaboration</p>
                      </div>
                      <div>
                        <h4 className="font-medium theme-text-primary">Sustainability</h4>
                        <p className="text-sm theme-text-secondary">Responsible development for the future</p>
                      </div>
                      <div>
                        <h4 className="font-medium theme-text-primary">Inclusion</h4>
                        <p className="text-sm theme-text-secondary">Diversity and equality in all areas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Symposium Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="symposium" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-secondary">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animationType="fade-up" delay="delay-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">
                  Young AGErs Symposium
                </h2>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto mb-8">
                  Every year, the Young AGErs Symposium takes place, providing an easily accessible platform 
                  for early career researchers to share their latest research or research plans. There is also 
                  plenty of opportunity to socialise, network and discuss our work with other Young AGErs in 
                  an informal setting.
                </p>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto mb-8">
                  You can find impressions of the last symposia in our <a href="/gallery" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">gallery</a>.
                </p>
              </div>
            </ScrollAnimation>
            
            {/* Upcoming Event Highlight */}
            <ScrollAnimation animationType="fade-up" delay="delay-400">
              <div className="theme-card-bg border-2 border-blue-400 dark:border-blue-600 rounded-lg shadow-xl p-8 mb-8 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  🎉 Join us for the 8th Young AGErs Symposium in Berlin! 🎉
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">
                  <strong>16th and 17th October 2025 in Berlin</strong>
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  This welcoming and accessible event is specially designed for early-career researchers 
                  working on any aspect of the Maillard reaction. Whether you want to share your latest 
                  findings, present your research plans or simply connect with other early-career scientists 
                  in the field, this is the perfect opportunity!
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">✨ Present your work and receive valuable feedback!</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🤝 Meet and network with peers in a friendly, informal setting.</h4>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animationType="fade-up" delay="delay-500">
              <div className="text-center">
                <a
                  href="/symposium"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View Past Symposium Programmes
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation animationType="fade-up">
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 theme-bg-tertiary">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animationType="fade-up" delay="delay-200">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">
                  Contact
                </h2>
                <p className="text-lg theme-text-secondary max-w-3xl mx-auto">
                  Interested in collaboration? We&apos;d love to hear from you!
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationType="fade-up" delay="delay-300">
              <div className="max-w-lg mx-auto">
                <div>
                  <h3 className="text-xl font-semibold theme-text-primary mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium theme-text-primary text-lg">Email</p>
                    <p className="theme-text-secondary">contact@young-agers.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium theme-text-primary text-lg">Location</p>
                    <p className="theme-text-secondary">Berlin, Germany</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium theme-text-primary text-lg">Working Hours</p>
                    <p className="theme-text-secondary">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="font-medium theme-text-primary mb-6 text-lg">Follow Us</h4>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors transform hover:scale-110">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C8.396 0 7.989.013 6.784.072 5.579.132 4.75.333 4.017.63c-.764.297-1.413.69-2.058 1.334C1.315 2.608.921 3.257.624 4.021.327 4.754.126 5.583.066 6.788.007 7.993 0 8.4 0 12.017c0 3.617.013 4.024.072 5.229.06 1.205.261 2.034.558 2.767.297.764.69 1.413 1.334 2.058.645.645 1.294 1.037 2.058 1.334.733.297 1.562.498 2.767.558 1.205.061 1.612.074 5.229.074 3.617 0 4.024-.013 5.229-.074 1.205-.06 2.034-.261 2.767-.558.764-.297 1.413-.69 2.058-1.334.645-.645 1.037-1.294 1.334-2.058.297-.733.498-1.562.558-2.767.061-1.205.074-1.612.074-5.229 0-3.617-.013-4.024-.074-5.229-.06-1.205-.261-2.034-.558-2.767-.297-.764-.69-1.413-1.334-2.058C19.392.921 18.743.529 17.979.232 17.246-.065 16.417-.266 15.212-.326 14.007-.387 13.6-.4 9.983-.4h4.034zm-.932 21.751c-3.416 0-3.823-.013-5.006-.072-1.066-.048-1.645-.22-2.032-.365-.511-.198-.876-.436-1.26-.82-.384-.384-.622-.749-.82-1.26-.145-.387-.317-.966-.365-2.032-.059-1.183-.072-1.59-.072-5.006 0-3.416.013-3.823.072-5.006.048-1.066.22-1.645.365-2.032.198-.511.436-.876.82-1.26.384-.384.749-.622 1.26-.82.387-.145.966-.317 2.032-.365 1.183-.059 1.59-.072 5.006-.072 3.416 0 3.823.013 5.006.072 1.066.048 1.645.22 2.032.365.511.198.876.436 1.26.82.384.384.622.749.82 1.26.145.387.317.966.365 2.032.059 1.183.072 1.59.072 5.006 0 3.416-.013 3.823-.072 5.006-.048 1.066-.22 1.645-.365 2.032-.198.511-.436.876-.82 1.26-.384.384-.749.622-1.26.82-.387.145-.966.317-2.032.365-1.183.059-1.59.072-5.006.072zm0-5.751c-3.183 0-5.75-2.567-5.75-5.75s2.567-5.75 5.75-5.75 5.75 2.567 5.75 5.75-2.567 5.75-5.75 5.75zm0-9.218c-1.914 0-3.468 1.554-3.468 3.468s1.554 3.468 3.468 3.468 3.468-1.554 3.468-3.468-1.554-3.468-3.468-3.468zm6.789-2.431c0-.747-.606-1.353-1.353-1.353s-1.353.606-1.353 1.353.606 1.353 1.353 1.353 1.353-.606 1.353-1.353z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </ScrollAnimation>

    <Footer />
  </div>
);
}
