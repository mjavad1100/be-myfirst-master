'use client';

import { memo, useState } from 'react';
import './services.css';
import { data } from './data';

const Services = memo(() => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="services">

        <div className="services__noise"></div>

        <div className="services__container">

          <div className="services__header">

         

            <h1>
              Visual Stories
            </h1>

        

          </div>

          <div className="services__grid">

            {data.map((item, index) => (
              <div
                className={`services__card ${
                  index === 0 ? 'services__card--large' : ''
                }`}
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
              >

                <img
                  src={item.image}
                  alt={item.titles[0]}
                  loading="lazy"
                />

                <div className="services__overlay"></div>

                <div className="services__content">

                  <span className="services__number">
                    0{item.id}
                  </span>

                  <div className="services__titles">
                    {item.titles.map((title, index) => (
                      <h3 key={index}>
                        {title}
                      </h3>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="services__modal"
          onClick={() => setSelectedImage(null)}
        >

          <button className="services__close">
            ×
          </button>

          <img
            src={selectedImage}
            alt="preview"
            className="services__modal-image"
            loading="lazy"
          />

        </div>
      )}
    </>
  );
});

Services.displayName = 'Services';
export default Services;