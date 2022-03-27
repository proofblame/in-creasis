import Wrapper from '../../../components/wrapper/wrapper'
import { constants } from '../../../utils/constants'
import style from './about-nft.module.scss'

export const AboutNft = () => {
  const { aboutNft } = constants
  return (
    <section className={style.aboutNft}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.content}>
            <p className={style.subtitle}>{aboutNft.subtitle}</p>
          </div>
          <div className={style.imgWrapper}>
            <h2 className={style.title}>{aboutNft.title}</h2>
            <p className={style.nft}>NFT</p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
