import {SiDocker, SiFastapi, SiFlutter, SiGooglemaps, SiJavascript, SiJquery, SiKubernetes, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPytorch, SiRaspberrypi, SiReact, SiRedis, SiTypescript, SiVuedotjs, SiWordpress} from "react-icons/si"
import {DiAws, DiDjango, DiGit, DiGo, DiGoogleCloudPlatform, DiPython} from "react-icons/di"
import {BsAlexa} from "react-icons/bs"
import {FcLinux} from "react-icons/fc"

export const technologyIcons = {
    Alexa: BsAlexa,
    AWS: DiAws,
    Django: DiDjango,
    Docker: SiDocker,
    FastApi: SiFastapi,
    Flutter: SiFlutter,
    GCP: DiGoogleCloudPlatform,
    Git: DiGit,
    Go: DiGo,
    GoogleMaps: SiGooglemaps,
    JQuery: SiJquery,
    JS: SiJavascript,
    Kubernetes: SiKubernetes,
    Linux: FcLinux,
    MySQL: SiMysql,
    Next: SiNextdotjs,
    NodeJS: SiNodedotjs,
    PostgreSQL: SiPostgresql,
    PyTorch: SiPytorch,
    Python: DiPython,
    RaspberryPi: SiRaspberrypi,
    React: SiReact,
    Redis: SiRedis,
    TypeScript: SiTypescript,
    Vue: SiVuedotjs,
    Wordpress: SiWordpress
}

export type TTech = keyof typeof technologyIcons