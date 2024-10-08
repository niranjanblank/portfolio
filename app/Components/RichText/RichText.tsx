import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS, Node, INLINES, Mark } from "@contentful/rich-text-types";
import CodeBlock from "./CodeBlock";

const options = {
    renderMark: {
        [MARKS.CODE] : (text: any) => {
            return (
                // <pre>
                //     <code className="text-lg">{text}</code>
                // </pre>
                <CodeBlock code={text}/>
            )
        }
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
            // Use type assertions if needed, but it's generally safer to handle potential undefined/null values
            const contentWithCodeMark = (node as any).content?.find((item: any) => 
            item.marks && Array.isArray(item.marks) && (item.marks as Mark[]).find(mark => mark.type === MARKS.CODE)
        );
        if (contentWithCodeMark && Array.isArray(children)) {
            // Extract the code from the React element's props
            const codeElement = children.find(
                (child: any) => child?.props?.code
            );
    
            if (codeElement) {
                // Access the `code` prop from the found React element
                const code = codeElement.props.code;
    
                // Ensure the code is passed as a string to CodeBlock
                return <CodeBlock code={code} />;
            }
        }

            return <p>{children}</p>;
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { title, description, file } = node.data.target.fields;
      
            // Ensure the asset is an image
            if (file.contentType.includes('image')) {
              return (
              <div className="flex justify-center">
                <img src={file.url} alt={description || title} />
              </div>
              )
            }
      
            return null; // or a placeholder for non-image assets
          },
        [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => <h1 className="dark:text-white">{children}</h1>,
        [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => <h2 className="dark:text-white">{children}</h2>,
        [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => <h3 className="dark:text-white">{children}</h3>,
        [BLOCKS.HEADING_4]: (node: Node, children: React.ReactNode) => <h4 className="dark:text-white">{children}</h4>,
        [BLOCKS.HEADING_5]: (node: Node, children: React.ReactNode) => <h5 className="dark:text-white">{children}</h5>,
        [BLOCKS.HEADING_6]: (node: Node, children: React.ReactNode) => <h6 className="dark:text-white">{children}</h6>,
        [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
            return <a href={node.data.uri} target="_blank" className="dark:text-white">{children}</a>;
        },
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