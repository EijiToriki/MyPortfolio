import React from 'react'
import '../css/introduction.css'
import iconData from '../data/favicon.PNG'
import { motion } from "framer-motion"

const Introduction = () => {
  return (
    <div className='introduction-top' id='introduction'>
      <motion.div
        className="figure2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='introduction-title'>
          ■ Introduction
        </h1>
        <div className='introduction-contents'>
          <img src={iconData} alt="ロゴ画像" className='intro-icon' />
          <div className='intro-sentence'>
            <h3 className='my-name'>
              鳥木 瑛司（とりき えいじ）
            </h3>
            <ul className='intro-content'>
                <li className='intro-list'>都内のSIer企業に勤める社会人３年目</li>
                <li className='intro-list'>本業に加えて子供向けプログラミングスクールの講師を務める</li>
                <li className='intro-list'>趣味はカラオケと筋トレ</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Introduction