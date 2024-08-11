import React, { useEffect, useState } from 'react'
import '../css/skill.css'
import { certificate, framework, infrastructure, programming_language, tool  } from '../data/skillGridData'
import { motion } from "framer-motion"

const Skill = ({ isVisible }) => {
  const [showSkill, setShowSkill] = useState(isVisible);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const skillElement = document.getElementById('skill');
    
    if (skillElement) {
      const skillOffsetTop = skillElement.offsetTop;
      if (scrollPosition > skillOffsetTop - window.innerHeight - 100) {
        setShowSkill(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const judgeSkillLevelColor = (level) => {
    return (
      level === '★★★'
      ? {
          background: 'linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)'
        }
      :
      level === '★★'
      ? {
          background: 'linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%)'
        }
      : {
          background: 'linear-gradient(45deg, #8C4843 0%, #B76E4A 45%, #DAB89F 70%, #B76E4A 85%, #8C4843 90% 100%)'
      }
    )
  }
  
  return (
    <div id='skill' div className='skill-top'>
      {showSkill && (
        <motion.div
          className="figure2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='skill-title'>
            ■ Skill
          </h1>
          <div className='skill-def'>
            ★：1年未満、★★：1年～3年、★★★：3年以上
          </div>
          <div className='skill-content'>
            <h3 className='skill-name'>
              〇プログラミング言語
            </h3>
            <div className='skill-grid'>
              {
                programming_language.map((output, idx) => {
                  return (
                    <>
                      <div
                        key={idx}
                        className='skill-item'
                        style={
                          judgeSkillLevelColor(output.level)
                        }
                      >
                        {output.skill}
                      </div>
                      <div className='skill-item'>
                        {output.level}
                      </div>
                    </>
                  );
                })
              }
            </div>
          </div>
          <div className='skill-content'>
            <h3 className='skill-name'>
              〇フレームワーク
            </h3>
            <div className='skill-grid'>
              {
                framework.map((output, idx) => {
                  return(
                    <>
                      <div
                        key={idx}
                        className='skill-item'
                        style={
                          judgeSkillLevelColor(output.level)
                        }
                      >
                        {output.skill}
                      </div>
                      <div className='skill-item'>
                        {output.level}
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className='skill-content'>
            <h3 className='skill-name'>
              〇インフラ
            </h3>
            <div className='skill-grid'>
              {
                infrastructure.map((output, idx) => {
                  return(
                    <>
                      <div
                        key={idx}
                        className='skill-item'
                        style={
                          judgeSkillLevelColor(output.level)
                        }
                      >
                        {output.skill}
                      </div>
                      <div className='skill-item'>
                        {output.level}
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className='skill-content'>
            <h3 className='skill-name'>
              〇その他ツール
            </h3>
            <div className='skill-grid'>
              {
                tool.map((output, idx) => {
                  return(
                    <>
                      <div
                        key={idx}
                        className='skill-item'
                        style={
                          judgeSkillLevelColor(output.level)
                        }
                      >
                        {output.skill}
                      </div>
                      <div className='skill-item'>
                        {output.level}
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className='skill-content'>
            <h3 className='skill-name'>
              〇保有資格
            </h3>
            <div className='certificate-grid'>
              {
                certificate.map((output, idx) => {
                  return(
                    <div key={idx} className='certificate-item'>{output}</div>
                  )
                })
              }
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Skill