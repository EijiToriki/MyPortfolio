import { useEffect, useState } from 'react';
import '../css/carrer.css'
import { carrer_table, output_table } from '../data/carrerTableData'
import { motion } from "framer-motion"
import useIsMobile from '../utilities/useIsMobile';

const Carrer = () => {
  const [showCarrer, setShowCarrer] = useState(false);
  const isMobile = useIsMobile();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const carrerElement = document.getElementById('carrer');
    
    if (carrerElement) {
      const carrerOffsetTop = carrerElement.offsetTop;
      if (scrollPosition > carrerOffsetTop - window.innerHeight - 100) {
        setShowCarrer(true);
      }
    }
  };

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]);

  return (
    <div className='carrer-top' id='carrer'>
      {(!isMobile || showCarrer) && (
        <motion.div
          className="figure2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='carrer-title'>
            ■ Career
          </h1>
          <div className='carrer-content'>
            <h3 className='table-name'>
              〇 キャリア年表
            </h3>
            <table className='carrer-table'>
              <tr>
                <th className='carrer-age-th'>年齢</th>
                <th className='carrer-sentence-th'>経歴</th>
              </tr>
              {
                carrer_table.map((carrer, idx) => {
                  return(
                    <tr key={idx}>
                      <td className='carrer-age-td'>{carrer.age}</td>
                      <td className='carrer-sentence-td'>{carrer.sentence}</td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
          <div className='carrer-content'>
            <h3 className='table-name'>
              〇 成果
            </h3>
            <table className='carrer-table'>
              <tr>
                <th className='carrer-age-th'>年齢</th>
                <th className='carrer-sentence-th'>経歴</th>
              </tr>
              {
                output_table.map((output, idx) => {
                  return(
                    <tr key={idx}>
                      <td className='carrer-age-td'>{output.age}</td>
                      <td className='carrer-sentence-td'>
                        <a className='carrer-a' target="_blank" href={output.url} rel="noopener noreferrer">
                          {output.sentence}
                        </a>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Carrer