"use client"
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";

export default function CodeBlock({code}:{code: any}){

    useEffect(() => {
        hljs.highlightAll()
    },[])

    return (
    
            <pre className="w-full relative p-0">
                    <code  className="text-lg   w-full  rounded-lg">{code}</code>
            </pre>
     
    )


} 