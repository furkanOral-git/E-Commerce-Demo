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
import { RequestService } from './services/service';
import { notificationMessages, navTitles, upBannerContent } from "./datas/datas.js"
import { useEffect, useState } from 'react';
import { useDataStore } from "./components/States"

//lazy loading yapılacak!!

function App() {

  const { categories, products, campaigns, fetch } = useDataStore()

  useEffect(() => {

    fetch()

    // const fetch = async () => {

    //   const categoriesFetched = await RequestService.prototype.getCategories();
    //   const campaignsFetched = await RequestService.prototype.getCampaigns();
    //   const productsFetched = await RequestService.prototype.getProducts();
    //   setCategoriesData(categoriesFetched)
    //   setCampaignsData(campaignsFetched)
    //   setProductsData(productsFetched)

    // }
    // fetch()

  }, [])

  // useEffect(() => , [productsData, categoriesData, campaignsData])

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
    </>
  )
}

export default App
