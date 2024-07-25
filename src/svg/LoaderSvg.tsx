import { generateSvgComponent } from './generateSvgComponent'
import { Colors } from '../styles/colors/colors'

export const LoaderSvg = generateSvgComponent(
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='24' height='24' fill='white' />
        <circle cx='12' cy='12' r='7.5' stroke='#6DA4F5' />
        <path
            d='M12 4C13.2802 4 14.5416 4.30721 15.6784 4.89583C16.8152 5.48445 17.7942 6.33729 18.533 7.38271L12 12L12 4Z'
            fill='white' />
    </svg>
    ,
)
