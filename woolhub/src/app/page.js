import Image from 'next/image'
import Navbar from './components/landing/Navbar'
import HeroMain from './components/landing/HeroMain'
import Services from './components/landing/Services'
import marketTrend from '../../public/Assets/Images/Landing/marketinfo.svg'
import track from "../../public/Assets/Images/Landing/tracking.svg"
import warehouse from "../../public/Assets/Images/Landing/warehouse.svg"
import marketplace from "../../public/Assets/Images/Landing/marketplace.svg"
import Contact from './components/landing/Contact'

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroMain />
      <Services align="flex-row" type="market" img={marketTrend.src} title="Realtime Market Information" spanDescrp="Wool Market Insights:" descrp="Get real-time updates on wool prices, trends, and news to make informed decisions" btntxt="Explore More" />

      <Services align="flex-row-reverse" type="track" img={track.src} title="WoolWatch: Smart Wool Tracking" spanDescrp="Wool Tracking:" descrp="Experience full transparency in the journey of your wool, from farm shears to market shelves. Trace it all with WoolWatch" btntxt="Track My Wool" />

      <Services align="flex-row" type="warehouse" img={warehouse.src} title="Wool Storage and Warehousing" spanDescrp="Optimize Inventory:" descrp="Simplified and Effortless way for wool storage and wool inventory management to boost farm efficiency" btntxt="Get Started Now" />

      <Services align="flex-row-reverse" type="marketplace" img={marketplace.src} title="Wool Tradomg and Marketplace" spanDescrp="Bridging the Wool Trade Gap: " descrp="Unlock a modern marketplace for wool producers to sell their products directly." btntxt="Join Now" />

      <Contact />
    </>
  )
}
