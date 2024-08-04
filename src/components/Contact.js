import React from 'react'
import '../css/contact.css'

const Contact = () => {
  return (
    <div id='contact' className='contact-top'>
      <h1 className='contact-title'>
        ■ Contact
      </h1>
      <div className='contact-content'>
        <p className='contact-sentence'>ご連絡は以下のメールアドレスにお願いいたします。</p>
        <p className='contact-sentence'>※ 全角で記載しております。お手数ですが、半角文字への変換をお願いいたします。</p>
        <div className='contact-grid'>
          <div className='contact-item'>Email</div>
          <div className='contact-item'>ｋｔ２ｌａｇｅ＠ｇｍａｉｌ．ｃｏｍ</div>
          <div className='contact-item'>GitHub Account</div>
          <div className='contact-item'>
            <a href='https://github.com/EijiToriki' target="_blank" className='contact-a' rel="noopener noreferrer">
              https://github.com/EijiToriki
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact