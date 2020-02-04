
// export class Ball {
//   constructor(ballNum, pins = null, isFillBall = false, isSkipped = false) {
//     this.ballNum = ballNum
//     this.pins = pins
//     this.isSkipped = isSkipped //where first ball of frame was a strike
//     this.isFillBall = isFillBall // for tenth frame
//     this.boxString = ''
//   }

//   skip() {
//     this.isSkipped = true
//     this.boxString = '-'
//   }
// }

export const isStrike = (pins) => pins === 10
export const isGutterBall = (pins) => pins === 0