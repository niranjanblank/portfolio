import recommerder_system from '../../../public/recommender_system.png'
import sentiment from '../../../public/sentiment.png'
import plant_vision from '../../../public/plant_vision.png'
import airbnb from '../../../public/airbnb.png'
import { PortfolioProp } from './interfaces'
import PortfolioItem from './PortfolioItem'
const Portfolio = () => {

    // array containing the items inside the portfolio
    const portfolioItems:PortfolioProp[] = [
        {
            src: recommerder_system, 
            alt:'recommender_system', 
            title:'Movie Recommender System', 
            link: 'https://github.com/niranjanblank/MovieRecommenderSystem',
            desc: 'This project is a movie recommendation system built using Python, pandas, scikit-learn, streamlit-aggrid and Streamlit. It uses the MovieLens 100k dataset to train a content-based model that recommends movies based on their genres.',
            tags: [ 
                {tag: 'python', color:'text-orange-500'},
                {tag: 'streamlit', color:'text-green-500'}
            ]
        },
        {
            src: sentiment, 
            alt:'sentiment', 
            title:'Sentiment Analysis', 
            link: 'https://github.com/niranjanblank/SentimentAnalysisFrontend',
            desc: 'This project is a sentiment analysis using ReactJS for frontend, Tensorflow and jupyter notebook for training LSTM model for sentiment classification, Gensim for training word2vec model for word embedding generation, and fastAPI for developing backend for sentiment analysis. Sentiment140 was used as the dataset.',
            tags: [
                {tag: 'python', color:'text-orange-500'},
                {tag: 'reactjs', color:'text-sky-500'},
                {tag: 'fastapi', color:'text-green-500'}, 
                {tag: 'tensorflow', color:'text-red-500'}
            ]
        },
        {
            src: airbnb, 
            alt:'airbnb', 
            title:'Airbnb Data Analysis', 
            link: 'https://github.com/niranjanblank/AirbnbDataAnalysis',
            desc: 'This project is a comprehensive analysis of Airbnb listings in New York, aiming to uncover trends, derive insights, and create a predictive model for listing prices. Python was used for data cleaning, eda and model training. PowerBI was used to ceate a dashboard.',
            tags: [
                {tag: 'python', color:'text-orange-500'},
                {tag: 'powerbi', color:'text-rose-500'},
                {tag: 'eda', color:'text-green-500'}, 
                {tag: 'pandas', color:'text-violet-500'}
            ]
        },
        {
            src: plant_vision, 
            alt:'plant_vision', 
            title:'Plant Disease Vision', 
            link: 'https://github.com/niranjanblank/PlantDiseaseVision',
            desc: 'PlantDiseaseVision is an application designed to identify and diagnose plant diseases using computer vision techniques. This application uses transfer learning on a pre-trained ResNet50 model to predict the classes of diseases in plants. It is trained on the New Plant Disease dataset available on Kaggle, which contains 38 classes of plant diseases.',
            tags: [
                {tag: 'python', color:'text-orange-500'},
                {tag: 'streamlit', color:'text-green-500'},
                {tag: 'pytorch', color:'text-red-500'}
                
            ]
        }
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
                    <PortfolioItem  
                    key={item.title} 
                    src={item.src} 
                    alt={item.alt} 
                    title={item.title} 
                    link={item.link}
                    desc={item.desc}
                    tags={item.tags}
                    />
                )
            })
           }
        </div>
        </>
    )
}

export default Portfolio