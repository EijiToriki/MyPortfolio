import React from 'react'
import '../css/skill.css'

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
          <div className='skill-item'>Python</div>
          <div className='skill-item'>★★★</div>
          <div className='skill-item'>JavaScript</div>
          <div className='skill-item'>★★★</div>
          <div className='skill-item'>Java</div>
          <div className='skill-item'>★★</div>
        </div>
        <div className='skill-grid'>
          <div className='skill-item'>C</div>
          <div className='skill-item'>★★</div>
          <div className='skill-item'>VBA</div>
          <div className='skill-item'>★★</div>
          <div className='skill-item'>php</div>
          <div className='skill-item'>★</div>
        </div>
        <div className='skill-grid'>
          <div className='skill-item'>Go</div>
          <div className='skill-item'>★</div>
          <div className='skill-item'>C++</div>
          <div className='skill-item'>★</div>
        </div>
      </div>
      <div className='skill-content'>
        <h3 className='skill-name'>
          〇フレームワーク
        </h3>
        <div className='skill-grid'>
          <div className='skill-item'>React</div>
          <div className='skill-item'>★★★</div>
          <div className='skill-item'>SpringBoot</div>
          <div className='skill-item'>★★</div>
          <div className='skill-item'>flask</div>
          <div className='skill-item'>★</div>
        </div>
        <div className='skill-grid'>
          <div className='skill-item'>Vue</div>
          <div className='skill-item'>★</div>
        </div>
      </div>
      <div className='skill-content'>
        <h3 className='skill-name'>
          〇インフラ
        </h3>
        <div className='skill-grid'>
          <div className='skill-item'>MySQL</div>
          <div className='skill-item'>★★</div>
          <div className='skill-item'>Oracle</div>
          <div className='skill-item'>★★</div>
          <div className='skill-item'>AWS(EC2, RDS etc)</div>
          <div className='skill-item'>★</div>
        </div>
      </div>
      <div className='skill-content'>
        <h3 className='skill-name'>
          〇その他ツール
        </h3>
        <div className='skill-grid'>
          <div className='skill-item'>Excel</div>
          <div className='skill-item'>★★★</div>
          <div className='skill-item'>PowerPoint</div>
          <div className='skill-item'>★★★</div>
          <div className='skill-item'>Word</div>
          <div className='skill-item'>★★★</div>
        </div>
        <div className='skill-grid'>
          <div className='skill-item'>Slack</div>
          <div className='skill-item'>★★★</div>
          <div className='skill-item'>Discord</div>
          <div className='skill-item'>★★</div>
          <div className='skill-item'>Git</div>
          <div className='skill-item'>★★</div>
        </div>
        <div className='skill-grid'>
          <div className='skill-item'>SVN</div>
          <div className='skill-item'>★</div>
        </div>
      </div>
      <div className='skill-content'>
        <h3 className='skill-name'>
          〇保有資格
        </h3>
        <div className='certificate-grid'>
          <div className='certificate-item'>応用情報技術者試験</div>
          <div className='certificate-item'>ネットワークスペシャリスト</div>
          <div className='certificate-item'>JDLA E資格</div>
          <div className='certificate-item'>統計検定２級</div>
          <div className='certificate-item'>TOEIC Reading & Listening　スコア 845</div>
        </div>
      </div>
    </div>
  )
}

export default Skill