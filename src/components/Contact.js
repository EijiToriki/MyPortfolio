import React, { useEffect, useState } from 'react'
import '../css/contact.css'
import { motion } from "framer-motion"

const Contact = ({ isVisible }) => {
  const [showContact, setShowContact] = useState(isVisible);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const contactElement = document.getElementById('contact');
    
    if (contactElement) {
      const contactOffsetTop = contactElement.offsetTop;
      if (scrollPosition > contactOffsetTop - window.innerHeight - 50) {
        setShowContact(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='contact' className='contact-top'>
      {showContact && (
        <motion.div
          className="figure2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='contact-title'>
            ■ Contact
          </h1>
          <div className='contact-content'>
            <p className='contact-sentence'>ご連絡は以下のメールアドレスにお願いいたします。</p>
            <p className='contact-sentence'>※ 全角で記載しております。お手数ですが、半角文字への変換をお願いいたします。</p>
            <div className='contact-grid'>
              <div className='contact-item'>(Email)</div>
              <div className='contact-item'>ｋｔ２ｌａｇｅ＠ｇｍａｉｌ．ｃｏｍ</div>
            </div>
            <div className='contact-grid'>
              <div className='contact-item'>(GitHub Account)</div>
              <div className='contact-item'>
                <a href='https://github.com/EijiToriki' target="_blank" className='contact-a' rel="noopener noreferrer">
                  https://github.com/EijiToriki
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Contact