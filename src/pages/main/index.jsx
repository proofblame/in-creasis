import Banner from './banner/banner';
import PaySystems from './pay-systems/pay-systems';
import GetProfit from './get-profit/get-profit';
import StableSystem from './stable-system/stable-system';
import Invest from './invest/invest';
import Strategy from './strategy/strategy';

export const MainPage = () => {
  return (
    <>
      <Banner />
      <PaySystems />
      <GetProfit />
      <StableSystem />
      <Invest />
      <Strategy />
    </>
  )
}