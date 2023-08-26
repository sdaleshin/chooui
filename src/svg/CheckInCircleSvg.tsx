import { generateSvgComponent } from './generateSvgComponent'
import { Colors } from '../styles/colors/colors'

export const CheckInCircleSvg = generateSvgComponent(
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.75"
            y="0.75"
            width="22.5"
            height="22.5"
            rx="11.25"
            stroke={Colors.Gray0}
            strokeWidth="1.5"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8047 7.52851C18.0651 7.78886 18.0651 8.21097 17.8047 8.47132L10.4714 15.8047C10.2111 16.065 9.78894 16.065 9.5286 15.8047L6.19526 12.4713C5.93491 12.211 5.93491 11.7889 6.19526 11.5285C6.45561 11.2682 6.87772 11.2682 7.13807 11.5285L10 14.3904L16.8619 7.52851C17.1223 7.26816 17.5444 7.26816 17.8047 7.52851Z"
            fill={Colors.Gray0}
        />
    </svg>,
)
