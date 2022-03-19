import { useState, useRef } from 'react'
import Wrapper from '../../components/wrapper/wrapper'
import { constants } from '../../utils/constants'
import { faqList } from '../../utils/faq'
import style from './faq.module.scss'
import { CSSTransition } from "react-transition-group";

export const Faq = () => {
  const nodeRef = useRef(null)
  const [transition, setTransition] = useState(false)
  const [active, setActive] = useState({
    theme: 0,
    question: null
  })

  const handleClickTheme = (index) => {
    if (active.theme === index) {
      return
    }
    setActive({
      ...active,
      theme: index,
      question: null
    })
    setTransition(false)
  }

  const handleClickQuestion = (index) => {
    if (active.question === index) {
      setActive({
        ...active,
        question: null
      })
      setTransition(false)
    }
    else {
      setActive({
        ...active,
        question: index
      })
      setTransition(true)
    }
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
                  <li className={`${style.theme} ${active.theme === index && style.active}`} key={index} onClick={() => handleClickTheme(index)}>{theme.title}</li>
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
                          className={`${style.question} ${active.question === index && style.active}`}
                          onClick={() => handleClickQuestion(index)}
                        >
                          {question.title}
                        </p>

                        {
                          active.question === index &&
                          <CSSTransition
                            in={active.question === index}
                            timeout={300}
                            classNames={{
                              enter: style.Enter,
                              enterActive: style.EnterActive,
                              enterDone: style.EnterDone,
                              exit: style.Exit,
                              exitActive: style.ExitActive,
                              exitDone: style.ExitDone,

                            }}
                            unmountOnExit
                            nodeRef={nodeRef}
                          >

                            <p className={style.answer} ref={nodeRef}>
                              {
                                question.answer
                              }
                            </p>
                          </CSSTransition>
                        }




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
