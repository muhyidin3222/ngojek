import React from 'react'
import { Animated } from 'react-native'
import { connect } from "react-redux";
import { Header, AnimationSwipeUp } from './Component'
import Go from './go'
import GoPay from './goPay'
import { numberChange } from '../../../actions'

var hidden1 = true;
var hidden2 = true;

class Beranda extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bounceValue1: new Animated.Value(0),
            bounceValue2: new Animated.Value(0)
        };
    }

    AnimationSwipeUp1() {
        Animated.spring(
            this.state.bounceValue1,
            {
                toValue: hidden1 ? 0 : 500,
                velocity: 3,
                tension: 2,
                friction: 8,
            }
        ).start();
        hidden1 = !hidden1
    }


    AnimationSwipeUp2() {
        Animated.spring(
            this.state.bounceValue2,
            {
                toValue: hidden2 ? 0 : 500,
                velocity: 3,
                tension: 2,
                friction: 8,
            }
        ).start();
        hidden2 = !hidden2
    }

    render() {
        const { bounceValue1, bounceValue2 } = this.state

        return (
            <Animated.View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <Header />
                <GoPay onPress={() => { this.AnimationSwipeUp1() }} />
                <Go onPress={() => { this.AnimationSwipeUp2() }} />
                <AnimationSwipeUp
                    Component={<Go />}
                    onPress={() => this.AnimationSwipeUp1()}
                    bounceValue={bounceValue1} >Fitur GO-PAY lainnya!</AnimationSwipeUp>
                <AnimationSwipeUp
                    Component={<GoPay />}
                    onPress={() => this.AnimationSwipeUp2()}
                    bounceValue={bounceValue2} >Fitur GO-NGOJEK lainnya!</AnimationSwipeUp>
            </Animated.View >
        )
    }
}

const mapStateToProps = (state) => {
    const { number } = state.reducer
    return { number }
}

const mapActionCreators = {
    numberChange
};

export default connect(mapStateToProps, mapActionCreators)(Beranda);