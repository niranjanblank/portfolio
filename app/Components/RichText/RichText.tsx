import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS, Node, Mark } from "@contentful/rich-text-types";




const options = {
    renderMark: {
        [MARKS.CODE] : (text: any) => {
            return (
                <pre>
                    <code>{text}</code>
                </pre>
            )
        }
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
            // Use type assertions if needed, but it's generally safer to handle potential undefined/null values
            const contentWithCodeMark = (node as any).content?.find((item: any) => 
                (item.marks as Mark[]).find(mark => mark.type === MARKS.CODE)
            );

            if (contentWithCodeMark) {
                return (
                    <div>
                        <pre>
                            <code>{children}</code>
                        </pre>
                    </div>
                );
            }

            return <p>{children}</p>;
        }
    }
}

export function RichText({content}:{content: Document}) {

    if(!content) {
        return null
    }

    return (
        <>
        {documentToReactComponents(content, options)}
        </>
    )

}