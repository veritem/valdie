import { describe, expect, it } from 'vitest'
import { isIPv4 } from '../src'

describe('Test IPv4 validator', () => {
  it('should succeed', () => {
    expect(isIPv4('192.168.0.3').message).toBeUndefined()
    expect(isIPv4('192.168.0.3').success).toBeTruthy()
  })

  it('should fail', () => {
    expect(isIPv4('rrtr3345').success).toBeFalsy()
  })


  it('should fail', () => {
    expect(isIPv4('::0').message).toBe('::0 is not a valid IPv4')
  })
})
