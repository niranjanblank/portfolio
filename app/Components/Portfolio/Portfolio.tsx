import recommerder_system from '../../../public/recommender_system.png'
import sentiment from '../../../public/sentiment.png'
import plant_vision from '../../../public/plant_vision.png'
import airbnb from '../../../public/airbnb.png'
import Image from 'next/image'
import { PortfolioProp } from './interfaces'
import PortfolioItem from './PortfolioItem'
const Portfolio = () => {

    // array containing the items inside the portfolio
    const portfolioItems:PortfolioProp[] = [
        {src: recommerder_system, alt:'recommender_system', title:'Movie Recommender System', link: 'https://github.com/niranjanblank/MovieRecommenderSystem'},
        {src: sentiment, alt:'sentiment', title:'Sentiment Analysis', link: 'https://github.com/niranjanblank/SentimentAnalysisFrontend'},
        {src: airbnb, alt:'airbnb', title:'Airbnb Data Analysis', link: 'https://github.com/niranjanblank/AirbnbDataAnalysis'},
        {src: plant_vision, alt:'plant_vision', title:'Plant Disease Vision', link: 'https://github.com/niranjanblank/PlantDiseaseVision'},

    ] 

    return (
        <>
        <div className='flex flex-col md:items-center'>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 md:text-xl mb-4">Some of my works highlighting my skills are here</p>
            </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
           {
            // rendering the portfolio items
            portfolioItems.map(item => {
                return (
                    <PortfolioItem src={item.src} alt={item.alt} title={item.title} link={item.link}/>
                )
            })
           }
        </div>
        </>
    )
}

export default Portfolio