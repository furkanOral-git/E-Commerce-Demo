import './App.scss'
import Navigation from './components/Navigation.jsx'
import Banner from './components/Banner.jsx'
import Flag from "./components/Flag.jsx"
import SectionTitle from "./components/SectionTitle.jsx";
import SectionCollection from "./components/SectionCollection.jsx"
import SectionForFemale from './components/SectionForFemale.jsx';
import SectionForSpecials from './components/SectionForSpecials.jsx';
import SectionCategories from './components/SectionCategories';
import SectionTheBestSellers from './components/SectionTheBestSellers';
import SectionCollage from './components/SectionCollage';

import { notificationMessages, navTitles, upBannerContent } from "./datas/datas.js"
import { useEffect, useState } from 'react';
import { useDataStore } from "./components/States"



function App() {

  const { fetch } = useDataStore()

  useEffect(() => {

    fetch()

  }, [])



  return (
    <>
      <Navigation datas={navTitles} />
      <Banner datas={upBannerContent} />
      <Flag datas={notificationMessages} />
      <SectionTitle properties={{ title: "KOLEKSİYONLAR", reverse: false, underline: false }} />
      <SectionCollection />
      <SectionTitle properties={{ title: "BAYANLARA ÖZEL PARÇALAR", reverse: true, underline: false }} />
      <SectionForFemale />
      <SectionTitle properties={{ title: "SİZİN İÇİN ÖZEL OLARAK SEÇTİKLERİMİZ", reverse: false, underline: false }} />
      <SectionForSpecials />
      <SectionTitle properties={{ title: "EN ÇOK SATILANLAR", reverse: true, underline: false }} />
      <SectionTheBestSellers />
      <SectionCategories />
      <SectionTitle properties={{ title: "SİZDEN GELENLER", reverse: false, underline: false }} />
      <SectionCollage />
    </>
  )
}

export default App
