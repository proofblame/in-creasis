import { useState } from 'react'
import Wrapper from '../../components/wrapper/wrapper'
import { constants } from '../../utils/constants'
import { faqList } from '../../utils/faq'
import style from './faq.module.scss'

export const Faq = () => {

  const [active, setActive] = useState({
    theme: 0,
    question: null
  })

  const handleClickTheme = (index) => {
    setActive({
      ...active,
      theme: index,
      question: null
    })
  }

  const handleClickQuestion = (index) => {
    setActive({
      ...active,
      question: index
    })
  }





  const { faq } = constants
  return (
    <section className={style.faq} id={'questions'}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.slogan}>{faq.slogan}</p>
            <h2 className={style.title}>{faq.title}</h2>
          </div>
          <div className={style.table}>
            <ul className={style.topics}>
              {
                faqList.map((theme, index) => (
                  <li className={style.theme} key={index} onClick={() => handleClickTheme(index)}>{theme.title}</li>
                ))
              }
            </ul>
            <ul className={style.questions}>
              {
                faqList.map((theme, index) => (
                  (active.theme === index &&
                    theme.questions.map((question, index) => (

                      <li className={style.item} key={index}>
                        <p
                          className={style.question}
                          onClick={() => handleClickQuestion(index)}
                        >
                          {question.title}
                        </p>
                        <p
                          className={`${style.answer} ${active.question === index ? style.active : ''}`}
                        >
                          {question.answer}
                        </p>
                      </li>

                    ))
                  )
                ))
              }
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
