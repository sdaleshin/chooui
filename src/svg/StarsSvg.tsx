import { generateSvgComponent } from './generateSvgComponent'
import { Colors } from '../styles/colors/colors'

export const StarsSvg = generateSvgComponent(
    <svg xmlns='http://www.w3.org/2000/svg' width='38' height='33' viewBox='0 0 38 33' fill='none'>
        <path
            d='M24.6052 31.4492L25.1371 26.8523L28.8852 24.1001L24.2532 23.5723L21.48 19.8526L20.9481 24.4495L17.2001 27.2017L21.8321 27.7295L24.6052 31.4492Z'
            fill={Colors.Red60} />
        <path
            d='M27.931 13.3698L31.1156 9.99016L35.778 9.99276L32.3726 6.83232L32.3752 2.20518L29.1907 5.58484L24.5282 5.58224L27.9337 8.74267L27.931 13.3698Z'
            fill={Colors.Blue60} />
        <path
            d='M3.45581 10.5342L4.45429 8.08286L6.94094 7.13368L4.47088 6.14275L3.51446 3.67491L2.51598 6.12629L0.0293268 7.07547L2.49939 8.0664L3.45581 10.5342Z'
            fill={Colors.Yellow50} />
    </svg>,
)
