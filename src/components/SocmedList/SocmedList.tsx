import { Github, Linkedin } from "lucide-react"

const SocmedList = ({props} : {props:string}) => {
    return (
        <ul className={`${props} h-full flex-wrap flex flex-row gap-8 content-center`} >
            <li className="cursor-pointer">
                <a href="https://github.com/MeowB" target="blank">
                    <Github className="text-white hover:stroke-primary" />
                </a>
            </li>
            <li className="cursor-pointer">
                <a href="https://www.linkedin.com/in/scott-borlon/" target="blank">
                    <Linkedin className="text-white hover:stroke-primary" />
                </a>
            </li>
        </ul>
    )
}

export default SocmedList