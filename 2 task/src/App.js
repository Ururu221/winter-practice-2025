import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="shapes">
        <svg width="20" height="20" viewBox="0 0 20 20"><path d="M19.802 0H0V19.802H19.802V0Z" fill="#070707" /></svg>
        <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10.04 19.811C15.511 19.811 19.946 15.376 19.946 9.906C19.946 4.435 15.511 0 10.04 0C4.569 0 0.134 4.435 0.134 9.906C0.134 15.376 4.569 19.811 10.04 19.811Z" fill="#070707" /></svg>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about-us" className="nav-item">About Us</Link>
        <a href="#" className="nav-item">Portfolio</a>
        <a href="#" className="nav-item">Testimony</a>
        <a href="#" className="nav-item">News</a>
        <a href="#" className="nav-item">Contact</a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="hero-subtitle">Creative Work, Creative Mind</p>
        <h1 className="hero-title">We Are Digital Creative Agency</h1>
        <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/about-us" className="hero-button">Get in Touch</Link>
      </div>
      <div className="hero-image">
        <img src="room.jpg" alt="Creative office space" />
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="blog-section">
      <h2 className="blog-title">Read Our News</h2>
      <div className="blog-cards">
        <div className="blog-card">
          <img src="image1.jpg" alt="Blog Image 1" />
          <p className="blog-date">09 April, 2022 <span>by Admin</span></p>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="blog-link">Read More</a>
        </div>
        <div className="blog-card">
          <img src="image2.jpg" alt="Blog Image 2" />
          <p className="blog-date">10 April, 2022 <span>by Admin</span></p>
          <p className="blog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="blog-link">Read More</a>
        </div>
      </div>
    </section>
  );
}

function Aspects() {
  return (
    <div className="aspects">
                <div className="aspect">
                    <div className="icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="17" fill="#F0BB1F"/>
                            <path d="M40.7425 18.2274C40.9394 18.0305 41.05 17.7634 41.05 17.4849C41.05 17.2064 40.9394 16.9394 40.7425 16.7425C40.5455 16.5455 40.2785 16.4349 40 16.4349C39.7215 16.4349 39.4545 16.5455 39.2575 16.7425L36.2877 19.7123C35.6969 20.3031 35.3651 21.1043 35.3651 21.9397C35.3651 22.7751 35.6969 23.5763 36.2877 24.1671L36.5995 24.4789L29.858 26.8845C29.0524 27.1722 28.3293 27.6525 27.7517 28.2834C27.174 28.9144 26.7593 29.6769 26.5436 30.5047L22.9145 44.4185C22.7879 44.9048 22.7907 45.4158 22.9226 45.9008C23.0544 46.3857 23.3107 46.8278 23.6661 47.1831C24.0215 47.5385 24.4635 47.7948 24.9485 47.9266C25.4334 48.0585 25.9444 48.0613 26.4308 47.9348L40.3445 44.3056C41.1722 44.0896 41.9345 43.6745 42.5652 43.0966C43.1959 42.5187 43.6758 41.7955 43.9633 40.9898L46.3703 34.2497L46.6822 34.5616C47.2729 35.1523 48.0741 35.4842 48.9095 35.4842C49.745 35.4842 50.5462 35.1523 51.1369 34.5616L54.1068 31.5917C54.3037 31.3948 54.4143 31.1277 54.4143 30.8492C54.4143 30.5708 54.3037 30.3037 54.1068 30.1068C53.9099 29.9099 53.6428 29.7992 53.3643 29.7992C53.0858 29.7992 52.8188 29.9099 52.6219 30.1068L49.652 33.0766C49.4551 33.2735 49.188 33.3842 48.9095 33.3842C48.6311 33.3842 48.364 33.2735 48.1671 33.0766L37.7726 22.6822C37.5757 22.4852 37.4651 22.2182 37.4651 21.9397C37.4651 21.6612 37.5757 21.3941 37.7726 21.1972L40.7425 18.2274ZM44.728 32.6074L41.9853 40.2859C41.8126 40.7688 41.5245 41.2022 41.1461 41.5485C40.7678 41.8947 40.3106 42.1433 39.8144 42.2728L26.6193 45.7148L35.0017 37.3324C35.4483 37.4521 35.9218 37.421 36.3489 37.2441C36.776 37.0672 37.1328 36.7543 37.3639 36.354C37.5951 35.9536 37.6876 35.4882 37.6273 35.0299C37.567 34.5715 37.3571 34.1459 37.0302 33.8191C36.7033 33.4922 36.2777 33.2823 35.8194 33.2219C35.361 33.1616 34.8956 33.2542 34.4953 33.4853C34.0949 33.7165 33.782 34.0733 33.6051 34.5003C33.4282 34.9274 33.3972 35.401 33.5168 35.8475L25.1344 44.2299L28.575 31.0363C28.7044 30.5401 28.953 30.0829 29.2993 29.7046C29.6455 29.3262 30.0789 29.0382 30.5618 28.8654L38.2418 26.1212L44.728 32.6074Z" fill="white"/>
                        </svg>
                    </div>
                    <h3><a className="name-of-aspects" href="#">Design</a></h3>
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.</p>
                </div>

                <div className="aspect">
                    <div className="icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="17" fill="#F15A2B"/>
                            <path d="M27 23V27H23V23H27ZM21 21V29H29V21H21ZM37 26V30H33V26H37ZM31 24V32H39V24H31ZM27 35V39H23V35H27ZM21 33V41H29V33H21Z" fill="white"/>
                            <path d="M41 29V35H35V41H29V49H49V29H41ZM37 37H41V41H37V37ZM35 47H31V43H35V47ZM41 47H37V43H41V47ZM47 47H43V43H47V47ZM47 41H43V37H47V41ZM43 35V31H47V35H43Z" fill="white"/>
                        </svg>                        
                    </div>
                    <h3 ><a className="name-of-aspects" href="#">Development</a></h3>
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.</p>
                </div>

                <div className="aspect">
                    <div className="icon">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="17" fill="#006380"/>
                            <path d="M47.4046 20L31.2763 37.7504L26.5954 34.1818H24L31.2763 46L50 20H47.4046Z" fill="white"/>
                            <path d="M44.9455 46.3498C44.9455 46.6271 44.7141 46.8581 44.4364 46.8581H23.6562C23.3785 46.8581 23.1471 46.6271 23.1471 46.3498V25.604C23.1471 25.3267 23.3785 25.0957 23.6562 25.0957H37.8645L40.6876 22H21.0182C20.4628 22 20 22.462 20 23.0165V48.9373C20 49.538 20.4628 50 21.0182 50H46.9818C47.5372 50 48 49.538 48 48.9835V28.7921L44.8992 33.1353C44.9455 33.1353 44.9455 46.3498 44.9455 46.3498Z" fill="white"/>
                        </svg>                        
                    </div>
                    <h3><a className="name-of-aspects" href="#">Testing & QA</a></h3>
                    <p>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.</p>
                </div>
            </div>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h4>Our Contact</h4>
          <p>Office: 4042 Imperial Road, UK</p>
          <p>Help: (0411) 425 277 / 425</p>
          <p>Email: inbox@finance.com</p>
        </div>
        <div className="footer-about">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="wrapper">
      <Header />
      <HeroSection />
      <Aspects />
      <Footer />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="wrapper">
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
