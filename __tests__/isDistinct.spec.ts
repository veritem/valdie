import { describe, expect, it } from "vitest"
import { isDistinct } from '../src'



describe('isDistinct', () => {
    it('check for distinctArray validity', () => {
      expect(isDistinct([1, 3, 2, 4, 5, 6, 7, 8, 9, 0]).success).toBeTruthy()
      expect(isDistinct([[1, 3, 2, 4], [5, 6, 7, 8, 9, 0]]).success).toBeTruthy()
      expect(isDistinct([true, false]).success).toBeTruthy()
      expect(isDistinct([1, "string", true]).success).toBeTruthy()
      expect(isDistinct([{name: "string", age: 21}, {name: "another string", age: 32}]).success).toBeTruthy()
    });
  
    it('check if isDistinct validator fails', () => {
      expect(isDistinct([1, 1, 3, 4, 2]).success).toBeFalsy()
      expect(isDistinct([[1, 2, 3], [1, 2, 3]]).success).toBeFalsy()
      expect(isDistinct([true, true]).success).toBeTruthy()
      expect(isDistinct([1, "string", 1, "string"]).success).toBeTruthy()
      expect(isDistinct([{name: "string", age: 21}, {name: "string", age: 21}]).success).toBeTruthy()
    });
  })