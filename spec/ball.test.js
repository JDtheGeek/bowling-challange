import * as Ball from '../scripts/ball'

describe('Ball', () => {
  describe('.isStrike', () => {
    it('should return true if passed 10', () => {
      expect(Ball.isStrike(10)).toBe(true)
    })
    it('should return false if not passed 10', () => {
      expect(Ball.isStrike(9)).toBe(false)
      expect(Ball.isStrike(0)).toBe(false)
      expect(Ball.isStrike(11)).toBe(false)
    })
  })

  describe('.isGutterBall', () => {
    it('should return true if passed 0', () => {
      expect(Ball.isGutterBall(0)).toBe(true)
    })
    it('should return false if not passed 0', () => {
      expect(Ball.isGutterBall(10)).toBe(false)
      expect(Ball.isGutterBall(11)).toBe(false)
      expect(Ball.isGutterBall(1)).toBe(false)
    });
  })
})
