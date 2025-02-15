
import { PortfolioProp, tags } from './interfaces'
import PortfolioItem from './PortfolioItem'
import { client } from '@/app/lib/contentful'

async function getPortfolioItems(): Promise<PortfolioProp[]> {
    const response = await client.getEntries({
        content_type: 'portfolioProject'
    })

    const portfolioItems: PortfolioProp[] = response.items.map((item,index) => {
        const srcField = item.fields.src as { fields: { file: { url: string } } };
  
        return {
            title: item.fields.title as string,
            alt: item.fields.alt as string,
            index: index,
            src: `https://${srcField.fields.file.url}`,
            link: item.fields.link as string,
            desc: item.fields.desc as string,
            tags: ((item.fields.tags as unknown) as tags[] ?? []).map((tag: tags) => ({
              tag: tag.tag,
              color: tag.color,
            })),
        }
           
    })
    return portfolioItems
}

const Portfolio = async () => {
    const portfolioItems = await getPortfolioItems()

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
                    index={item.index}
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