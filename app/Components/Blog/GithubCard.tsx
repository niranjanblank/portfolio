import Link from "next/link";
import {
    AiFillGithub
    } from 'react-icons/ai'
export default function GithubCard({link}:{link: string}) {
    return (
        <Link className="border border-gray-300 p-4 rounded-lg hover:bg-gray-600 hover:text-white" 
        target="_blank"
        href={link}
        >
        <h1>Please visit the github repo for entire code. Thank You</h1>
        <h2 className="text-xl font-semibold flex items-center gap-2"><AiFillGithub/>niranjanblank</h2>
        <p className="break-all">{link}</p>
        
        </Link>
    )
}