import recommerder_system from '../../../public/recommender_system.png'
import sentiment from '../../../public/sentiment.png'
import plant_vision from '../../../public/plant_vision.png'
import airbnb from '../../../public/airbnb.png'
import la_crime from '../../../public/la_crime.png'
import my_notes from '../../../public/my_notes.jpg'
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
        },
        {
            src: la_crime, 
            alt:'la_crime', 
            title:'LA Crime Data Analysis', 
            link: 'https://github.com/niranjanblank/LACrimeDataAnalysis',
            desc: 'This project conducts a thorough exploratory data analysis (EDA) on Los Angeles crime data, aiming to uncover insights and trends that \
            can inform law enforcement policies, community support strategies,\
             and crime prevention initiatives. This project uses R for data cleaning and preprocessing, postgreql for loading data and eda, and python for generating visualizations',
            tags: [
                {tag: 'python', color:'text-orange-500'},
                {tag: 'sql', color: 'text-teal-500'},
                {tag: 'r', color:'text-blue-500'},
                {tag: 'eda', color:'text-green-500'},
                {tag: 'pandas', color:'text-violet-500'}
            ]
        },
        {
            src: my_notes, 
            alt:'my_notes', 
            title:'MyNotes Web Application', 
            link: 'https://github.com/niranjanblank/MyNotes',
            desc: 'My Notes is a multi-user application designed for creating and storing notes. It provides an intuitive interface for users to organize their notes in a unified place. The application is built using React JS with MaterialUI for a beautiful user interface, NodeJS for the backend API, MongoDB for the database and JSON Web Tokens (JWT) for secure user authentication.',
            tags: [
                {tag: 'nodejs', color:'text-green-500'},
                {tag: 'reactjs', color: 'text-sky-500'},
                {tag: 'jwt', color:'text-orange-500'},
                {tag: 'mongodb', color: 'text-green-500'},
                {tag: 'materialui', color: 'text-sky-400'},
                {tag: 'fullstackdevelopment', color: 'text-red-400'},
            ]
        }
    ] 

    return (
        <>
        <div className='flex flex-col items-center'>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-gray-400 md:text-xl mb-4">Some of my works highlighting my skills are here</p>
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