import React from 'react'
import '../css/skill.css'
import { certificate, framework, infrastructure, programming_language, tool  } from '../data/skillGridData'

const Skill = () => {
  return (
    <div id='skill' div className='skill-top'>
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
              return(
                <>
                  <div key={idx} className='skill-item'>{output.skill}</div>
                  <div className='skill-item'>{output.level}</div>
                </>
              )
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
                  <div key={idx} className='skill-item'>{output.skill}</div>
                  <div className='skill-item'>{output.level}</div>
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
                  <div key={idx} className='skill-item'>{output.skill}</div>
                  <div className='skill-item'>{output.level}</div>
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
                  <div key={idx} className='skill-item'>{output.skill}</div>
                  <div className='skill-item'>{output.level}</div>
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
    </div>
  )
}

export default Skill