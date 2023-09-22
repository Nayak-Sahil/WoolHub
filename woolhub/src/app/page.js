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
      <Services align="row" type="market" img={marketTrend.src} title="Realtime Market Information" spanDescrp="Wool Market Insights:" descrp="Get real-time updates on wool prices, trends, forecasting and news to make informed decisions" btntxt="Explore More" />

      <Services align="row-reverse" type="track" img={track.src} title="WoolWatch: Smart Wool Tracking" spanDescrp="Wool Tracking:" descrp="Experience full transparency in the journey of your wool, from farm shears to market shelves. Trace it all with WoolWatch" btntxt="Track My Wool" moreDescrp="Know the origin, process, and journey of each strand. Trust in Every Thread: We're committed to showing you the real story behind your wool." spanMoreDescrp="Full Transparency:" />

      <Services align="row" type="warehouse" img={warehouse.src} title="Wool Storage and Warehousing" spanDescrp="Optimize Inventory:" descrp="Simplified and Effortless way for wool storage and wool inventory management to boost farm efficiency" btntxt="Get Started Now" moreDescrp="With intuitive tools and a user-friendly interface, managing your wool inventory becomes a breeze." spanMoreDescrp="Effortless Inventory Management:"/>

      <Services align="row-reverse" type="marketplace" img={marketplace.src} title="Wool Trading and Marketplace" spanDescrp="Bridging the Wool Trade Gap: " descrp="Unlock a modern marketplace for wool producers to sell their products directly." btntxt="Join Now" moreDescrp="Eliminating middlemen. Connect directly with your market.
Modern Marketplace: A platform designed for today's digital age, ensuring ease of use and accessibility." spanMoreDescrp="Direct Transactions:" />

      <Contact />
    </>
  )
}
