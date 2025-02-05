'use client'
import cn from 'clsx'
import ThemeSwitch from 'components/theme-switch'
import html2pdf from 'html2pdf.js'
import { useRef } from 'react'
import { Wrapper } from '../(components)/wrapper'

import s from './home.module.scss'

export default function Home() {
  const areaCvRef = useRef(null)

  const handleGeneratePdf = () => {
    const opt = {
      margin: 0,
      filename: 'myResume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { format: 'a4', orientation: 'portrait' },
    }

    html2pdf().from(areaCvRef.current).set(opt).save()
  }

  return (
    <Wrapper theme="dark" className={cn(s.page, s['scale-cv'])}>
      <header className={s['l-header']} id="header">
        <nav className={cn(s['nav'], s['bd-container'])}>
          <a href="#" className={s['nav__logo']}>
            Jerzy Kowalski
          </a>

          <div className={s['nav__menu']} id="nav-menu">
            <ul className={s['nav__list']}>
              <li className={s['nav__item']}>
                <a
                  href="#home"
                  className={cn(s['nav__link'], s['active-link'])}
                >
                  <i className={cn('bx', 'bx-home', s['nav__icon'])}></i>
                  Strona główna
                </a>
              </li>
              <li className={s['nav__item']}>
                <a href="#profile" className={s['nav__link']}>
                  <i className={cn('bx', 'bx-user', s['nav__icon'])}></i>
                  Profil
                </a>
              </li>
              <li className={s['nav__item']}>
                <a href="#education" className={s['nav__link']}>
                  <i className={cn('bx', 'bx-book', s['nav__icon'])}></i>
                  Edukacja
                </a>
              </li>
              <li className={s['nav__item']}>
                <a href="#skills" className={s['nav__link']}>
                  <i className={cn('bx', 'bx-receipt', s['nav__icon'])}></i>
                  Umiejętności
                </a>
              </li>
              <li className={s['nav__item']}>
                <a href="#experience" className={s['nav__link']}>
                  <i
                    className={cn('bx', 'bx-briefcase-alt', s['nav__icon'])}
                  ></i>
                  Doświadczenia
                </a>
              </li>
              <li className={s['nav__item']}>
                <a href="#certificates" className={s['nav__link']}>
                  <i className={cn('bx', 'bx-award', s['nav__icon'])}></i>
                  Cerfyfikaty
                </a>
              </li>
              <li className={s['nav__item']}>
                <a href="#references" className={s['nav__link']}>
                  <i
                    className={cn('bx', 'bx-link-external', s['nav__icon'])}
                  ></i>
                  Referencje
                </a>
              </li>
            </ul>
          </div>

          <div className={s['nav__toggle']} id="nav-toggle">
            <i className={cn('bx', 'bx-grid-alt')}></i>
          </div>
        </nav>
      </header>
      <main className={cn(s['l-main'], s['bd-container'])}>
        <div className={cn(s['resume'])} id="area-cv" ref={areaCvRef}>
          <div className={s['resume__left']}>
            {/* ========== HOME ========== */}
            <section className={s['home']} id="home">
              <div
                className={cn(s['home__container'], s['section'], s['bd-grid'])}
              >
                <div className={cn(s['home__data'], s['bd-grid'])}>
                  <img src="/images/me.jpg" alt="" className={s['home__img']} />

                  <h1 className={s['home__title']}>Jerzy Kowalski</h1>
                  <h3 className={s['home__profession']}>Web developer</h3>

                  <div>
                    {/* Button to download your CV saved in the pdf folder. Available for mobile */}
                    <a
                      download=""
                      href="assets/pdf/ResumeCv.pdf"
                      className={s['home__button-movil']}
                      onClick={handleGeneratePdf}
                      data-html2canvas-ignore
                    >
                      Pobierz CV
                    </a>
                  </div>
                </div>

                <div className={cn(s['home__address'], s['bd-grid'])}>
                  <span className={s['home__information']}>
                    <i className={cn('bx', 'bx-map', s['home__icon'])}></i> al.
                    W. Roździeńskiego 1a, Katowice - Polska
                  </span>
                  <span className={s['home__information']}>
                    <i className={cn('bx', 'bx-envelope', s['home__icon'])}></i>{' '}
                    user@email.com
                  </span>
                  <span className={s['home__information']}>
                    <i className={cn('bx', 'bx-phone', s['home__icon'])}></i>{' '}
                    999-888-777
                  </span>
                </div>
              </div>

              {/* Theme change button */}
              <ThemeSwitch />

              {/* Button to generate and download the pdf. Available for desktop.  */}
              <i
                className={cn('bx', 'bx-download', s['generate-pdf'])}
                title="Generate PDF"
                id="resume-button"
                onClick={handleGeneratePdf}
                data-html2canvas-ignore
              ></i>
            </section>

            <section className={cn(s['social'], s['section'])}>
              <h2 className={s['section-title']}>Społeczność</h2>

              <div className={cn(s['social__container'], s['bd-grid'])}>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className={s['social__link']}
                >
                  <i
                    className={cn(
                      'bx',
                      'bxl-linkedin-square',
                      s['social__icon'],
                    )}
                  ></i>
                  @kowalskijerzy
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className={s['social__link']}
                >
                  <i
                    className={cn('bx', 'bxl-facebook', s['social__icon'])}
                  ></i>
                  @skowalskijerzy
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className={s['social__link']}
                >
                  <i
                    className={cn('bx', 'bxl-instagram', s['social__icon'])}
                  ></i>
                  @kowalskijerzy
                </a>
              </div>
            </section>

            <section className={cn(s['profile'], s['section'])} id="profile">
              <h2 className={s['section-title']}>Profil</h2>
              <p className={s['profile__description']}>
                Jestem osobą odpowiedzialną za swoją pracę w godzinach pracy.
                Ukończyłem różne studia techniczne i wyższe na dużych
                uniwersytetach. Posiadam kilkuletnie doświadczenie i osiągnięcia
                na rynku pracy.
              </p>
            </section>

            <section
              className={cn(s['education'], s['section'])}
              id="education"
            >
              <h2 className={s['section-title']}>Edukacja</h2>

              <div className={cn(s['education__container'], s['bd-grid'])}>
                <div className={s['education__content']}>
                  <div className={s['education__time']}>
                    <span className={s['education__rounder']}></span>
                    <span className={s['education__line']}></span>
                  </div>

                  <div className={cn(s['education__data'], s['bd-grid'])}>
                    <h3 className={s['education__title']}>MASTER OF DESIGN</h3>
                    <span className={s['education__studies']}>
                      University of Studies
                    </span>
                    <span className={s['education__year']}>2010 - 2015</span>
                  </div>
                </div>

                <div className={s['education__content']}>
                  <div className={s['education__time']}>
                    <span className={s['education__rounder']}></span>
                    <span className={s['education__line']}></span>
                  </div>

                  <div className={cn(s['education__data'], s['bd-grid'])}>
                    <h3 className={s['education__title']}>WEB DEVELOPER</h3>
                    <span className={s['education__studies']}>
                      Institute Studies
                    </span>
                    <span className={s['education__year']}>2016 - 2019</span>
                  </div>
                </div>

                <div className={s['education__content']}>
                  <div className={s['education__time']}>
                    <span className={s['education__rounder']}></span>
                    {/* <span className={s['education__line']}></span> */}
                  </div>

                  <div className={cn(s['education__data'], s['bd-grid'])}>
                    <h3 className={s['education__title']}>MASTER IN UI/UX</h3>
                    <span className={s['education__studies']}>
                      Institute Studies
                    </span>
                    <span className={s['education__year']}>2019 - 2021</span>
                  </div>
                </div>
              </div>
            </section>

            <section className={cn(s['skills'], s['section'])} id="skills">
              <h2 className={s['section-title']}>Umiejętności</h2>

              <div className={cn(s['skills__content'], s['bd-grid'])}>
                <ul className={s['skills__data']}>
                  <li className={s['skills__name']}>
                    <span className={s['skills__circle']}></span> Html
                  </li>
                  <li className={s['skills__name']}>
                    <span className={s['skills__circle']}></span> Css
                  </li>
                  <li className={s['skills__name']}>
                    <span className={s['skills__circle']}></span> Sass
                  </li>
                  <li className={s['skills__name']}>
                    <span className={s['skills__circle']}></span> JavaScript
                  </li>
                </ul>

                <ul className={s['skills__data']}>
                  <li className={s['skills__name']}>
                    <span className={s['skills__circle']}></span> Angular
                  </li>
                  <li className={s['skills__name']}>
                    <span className={s['skills__circle']}></span> Firebase
                  </li>
                  <li className={s['skills__name']}>
                    <span className={s['skills__circle']}></span> React
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className={s['resume__right']}>
            {/* <!--========== EXPERIENCE ==========--> */}
            <section
              className={cn(s['experience'], s['section'])}
              id="experience"
            >
              <h2 className={s['section-title']}>Doświadczenie</h2>

              <div className={cn(s['experience__container'], s['bd-grid'])}>
                <div className={s['experience__content']}>
                  <div className={s['experience__time']}>
                    <span className={s['experience__rounder']}></span>
                    <span className={s['experience__line']}></span>
                  </div>

                  <div className={cn(s['experience__data'], s['bd-grid'])}>
                    <h3 className={s['experience__title']}>MASTER OF DESIGN</h3>
                    <span className={s['experience__company']}>
                      Od 2013 to 2015 | Tech Soft
                    </span>
                    <p className={s['experience__description']}>
                      Pracę w tej firmie poświęcam jak największej
                      odpowiedzialności odpowiedni obszar, zapewniając najlepsze
                      wyniki firmy i poprawę produktywności.
                    </p>
                  </div>
                </div>

                <div className={s['experience__content']}>
                  <div className={s['experience__time']}>
                    <span className={s['experience__rounder']}></span>
                    <span className={s['experience__line']}></span>
                  </div>

                  <div className={cn(s['experience__data'], s['bd-grid'])}>
                    <h3 className={s['experience__title']}>
                      UI / UX DESIGN AREA
                    </h3>
                    <span className={s['experience__company']}>
                      Od 2017 to 2019 | Adobe Inc
                    </span>
                    <p className={s['experience__description']}>
                      Pracę w tej firmie poświęcam jak największej
                      odpowiedzialności odpowiedni obszar, zapewniając najlepsze
                      wyniki firmy i poprawę produktywności.
                    </p>
                  </div>
                </div>

                <div className={s['experience__content']}>
                  <div className={s['experience__time']}>
                    <span className={s['experience__rounder']}></span>
                    {/* <!-- <span className={"experience__line"></span> --> */}
                  </div>

                  <div className={cn(s['experience__data'], s['bd-grid'])}>
                    <h3 className={s['experience__title']}>
                      MOBILE APPLICATION DEVELOPER
                    </h3>
                    <span className={s['experience__company']}>
                      Od 2019 to 2021 | App Tech
                    </span>
                    <p className={s['experience__description']}>
                      Pracę w tej firmie poświęcam jak największej
                      odpowiedzialności odpowiedni obszar, zapewniając najlepsze
                      wyniki firmy i poprawę produktywności.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--========== CERTIFICATES ==========--> */}
            <section
              className={cn(s['certificate'], s['section'])}
              id="certificates"
            >
              <h2 className={s['section-title']}>Certifikaty</h2>

              <div className={cn(s['certificate__container'], s['bd-grid'])}>
                <div className={s['certificate__content']}>
                  <h3 className={s['certificate__title']}>
                    Certified for compliance in the work area (2012)
                  </h3>
                  <p className={s['certificate__description']}>
                    Za spełnienie oczekiwań kierowania zespołem do pracy
                    określone zadania w dziedzinie pracy.
                  </p>
                </div>

                <div className={s['certificate__content']}>
                  <h3 className={s['certificate__title']}>
                    Certyfikat uczestnictwa w technologii komputerowej.
                  </h3>
                  <p className={s['certificate__description']}>
                    Za spełnienie oczekiwań kierowania zespołem do pracy
                    określone zadania w dziedzinie pracy.
                  </p>
                </div>

                <div className={s['certificate__content']}>
                  <h3 className={s['certificate__title']}>
                    Achievement medal for productivity excellence during the
                    year (2019)
                  </h3>
                  <p className={s['certificate__description']}>
                    For meeting the expectations of leading the team to work the
                    specified tasks in the labor field.
                  </p>
                </div>
              </div>
            </section>

            {/* <!--========== REFERENCES ==========--> */}
            <section
              className={cn(s['references'], s['section'])}
              id="references"
            >
              <h2 className={s['section-title']}>Referencje</h2>

              <div className={cn(s['references__container'], s['bd-grid'])}>
                <div className={cn(s['references__content'], s['bd-grid'])}>
                  <span className={s['references__subtitle']}>
                    Sr. Director
                  </span>
                  <h3 className={s['references__title']}>Mr. Clay Doe</h3>
                  <ul className={s['references__contact']}>
                    <li>Telefon: 999-888-777</li>
                    <li>Email: user@email.com</li>
                  </ul>
                </div>

                <div className={cn(s['references__content'], s['bd-grid'])}>
                  <span className={s['references__subtitle']}>
                    Mag. Developer
                  </span>
                  <h3 className={s['references__title']}>Mr. Robbinson Bass</h3>
                  <ul className={s['references__contact']}>
                    <li>Telefon: 999-888-777</li>
                    <li>Email: user@email.com</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* <!--========== LANGUAGES ==========--> */}
            <section className={cn(s['languages'], s['section'])}>
              <h2 className={s['section-title']}>Języki</h2>

              <div className={s['languages__container']}>
                <ul className={cn(s['languages__content'], s['bd-grid'])}>
                  <li className={s['languages__name']}>
                    <span className={s['languages__circle']}></span>Hiszpański
                  </li>
                  <li className={s['languages__name']}>
                    <span className={s['languages__circle']}></span>Angielski
                  </li>
                  <li className={s['languages__name']}>
                    <span className={s['languages__circle']}></span>Francuski
                  </li>
                </ul>
              </div>
            </section>

            {/* <!--========== INTERESTS ==========--> */}
            <section className={cn(s['interests'], s['section'])}>
              <h2 className={s['section-title']}>Zainteresowania</h2>

              <div className={cn(s['interests__container'], s['bd-grid'])}>
                <div className={s['interests__content']}>
                  <i
                    className={cn('bx', 'bx-headphone', s['interests__icon'])}
                  ></i>
                  <span className={s['interests__name']}>Muzyka</span>
                </div>
                <div className={s['interests__content']}>
                  <i
                    className={cn('bx', 'bxs-plane-alt', s['interests__icon'])}
                  ></i>
                  <span className={s['interests__name']}>Podróze</span>
                </div>
                <div className={s['interests__content']}>
                  <i className={cn('bx', 'bxs-book', s['interests__icon'])}></i>
                  <span className={s['interests__name']}>Czytnie</span>
                </div>
                <div className={s['interests__content']}>
                  <i
                    className={cn('bx', 'bx-dumbbell', s['interests__icon'])}
                  ></i>
                  <span className={s['interests__name']}>Siłownia</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
