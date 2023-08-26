import { generateSvgComponent } from './generateSvgComponent'
import { Colors } from '../styles/colors/colors'

export const CrossInCircleSvg = generateSvgComponent(
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 8L8 16M8 8L16 16"
            stroke={Colors.Gray0}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <rect
            x="0.75"
            y="0.75"
            width="22.5"
            height="22.5"
            rx="11.25"
            stroke={Colors.Gray0}
            strokeWidth="1.5"
        />
    </svg>,
)
