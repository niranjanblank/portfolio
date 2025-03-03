
import { PortfolioProp, tags } from './interfaces'
import PortfolioItem from './PortfolioItem'
import { client } from '@/app/lib/contentful'

async function getPortfolioItems(): Promise<PortfolioProp[]> {
    const response = await client.getEntries({
        content_type: 'portfolioProject',
        order: ['-fields.order']
        
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
        <div className='flex flex-col items-left'>
            <h3 className="text-5xl md:text-6xl py-1 font-bold dark:text-white">Projects.</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-left dark:text-gray-400 md:text-lg mb-4">
            Here are some of my favorite projects where I’ve put my skills to work! From full-stack development to backend engineering and a bit of data science, these showcase my passion for building things that are both functional and fun.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
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