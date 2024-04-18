import * as React from "react"
import { Dimensions, View } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg"

const sizes = Dimensions.get('window');
const pxH = sizes.height * sizes.scale;
const pxW = sizes.width * sizes.scale;

const svgHeightPx = 311;
const svgWidthPx = 253;

const svgHeightDp = sizes.height * svgHeightPx / 2778;

export const CommonSplash = React.memo((props: SvgProps) => (
  <View style={{ backgroundColor: 'white', height: sizes.height, width: sizes.width, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ transform: [{ scale: svgHeightDp / 123 }] }}>
        <Svg
            width={100}
            height={123}
            fill="none"
            {...props}
        >
            <Path
            fill="#363636"
            fillRule="evenodd"
            d="M46.225 121.587a5.75 5.75 0 0 0 7.55 0c14.93-12.994 26.25-25.158 33.915-36.495C95.827 73.055 100 61.766 100 51.255c0-15.526-5.006-28.032-15.108-37.357C74.874 4.651 63.223 0 50 0 36.777 0 25.126 4.651 15.108 13.898 5.006 23.223 0 35.73 0 51.255c0 10.51 4.173 21.8 12.31 33.837 7.664 11.337 18.985 23.501 33.915 36.495Zm32.36-44.781c-6.17 9.579-15.678 20.288-28.574 32.13-12.608-11.839-22.053-22.553-28.377-32.143-6.5-9.857-9.62-18.353-9.62-25.538 0-11.602 3.695-20.981 11.024-28.268C30.393 15.675 39.35 12.024 50 12.024c10.65 0 19.607 3.65 26.962 10.963 7.33 7.287 11.023 16.666 11.023 28.268 0 7.194-3.051 15.695-9.4 25.55Z"
            clipRule="evenodd"
            />
            <Path
            fill="#363636"
            d="M46.374 63.589v24.156c0 2.044 1.624 3.7 3.626 3.7s3.626-1.656 3.626-3.7V63.59c0-.867.626-1.748 1.67-2.203 1.894-.824 3.562-2.07 5.001-3.712 2.137-2.44 3.203-5.377 3.203-8.744V29.145c0-2.043-1.623-3.7-3.626-3.7-2.002 0-3.625 1.657-3.625 3.7V46.31c0 .74-.588 1.338-1.312 1.338-.724 0-1.311-.599-1.311-1.338V29.145c0-2.043-1.624-3.7-3.626-3.7s-3.626 1.657-3.626 3.7V46.31c0 .74-.587 1.338-1.311 1.338s-1.312-.599-1.312-1.338V29.145c0-2.043-1.623-3.7-3.625-3.7-2.003 0-3.626 1.657-3.626 3.7V48.93c0 3.367 1.066 6.305 3.203 8.744 1.44 1.643 3.107 2.888 5 3.712 1.045.455 1.671 1.336 1.671 2.203Z"
            />
        </Svg>
    </View>
  </View>
), () => true);