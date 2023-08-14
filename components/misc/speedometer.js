import * as React from "react"
import { View } from "react-native"
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"

const CustomSpeedometer = (props) => (
<View style={{transform: [{rotate: '-7.5deg'},{scale: 1.05}]}} >
    <Svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="56.25 50 150 200" >
        <Defs>
        <LinearGradient
            id="a"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="100%"
            spreadMethod="pad"
        >
            <Stop offset="0%" stopColor="#e2ad5d" />
            <Stop offset="100%" stopColor="#ffc063" />
        </LinearGradient>
        </Defs>
        <G fill="none" strokeLinecap="round" strokeWidth={8} className="svg_g">
        <Path
            stroke="#eef0f0"
            d="M70 150a80 80 0 1 1 160 0 80 80 0 1 1-160 0Z"
            className="fmo-gauge__bg"
            strokeDasharray="270, 999"
            strokeDashoffset='0'
        />
        <Path
            stroke="url(#a)"
            d="M70 150a80 80 0 1 1 160 0 80 80 0 1 1-160 0Z"
            className="fmo-gauge__fill"
            strokeDasharray={`${props.percent * (270/100)}, 999`}
            strokeDashoffset={props.percent == 0 ? 1 : 0}
        />
        </G>
    </Svg>
</View>

)
export default CustomSpeedometer;
``