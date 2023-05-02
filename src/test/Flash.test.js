import Flash from '../Flash'

function sampleFn() {
  return 2 + 3
}

function anotherFn() {
  return 5 * 5
}

describe('FlashJS', () => {
  describe('run', () => {
    it('should return the correct analytics data', async () => {
      const result = await Flash.run(sampleFn, 5)
      expect(result).toHaveProperty('average')
      expect(result).toHaveProperty('analitics')
      expect(result.analitics).toHaveLength(5)
    })
  })

  describe('Compare', () => {
    let compare
    beforeEach(() => {
      compare = new Flash.Compare()
    })

    it('should add a function to the items array', () => {
      compare.add(sampleFn, 'sampleFn')
      expect(compare.items).toHaveLength(1)
    })

    it('should remove a function from the items array', () => {
      compare.add(sampleFn, 'sampleFn')
      compare.remove('sampleFn')
      expect(compare.items).toHaveLength(0)
    })

    it('should return the correct stats for multiple functions', async () => {
      compare.add(sampleFn, 'sampleFn')
      compare.add(anotherFn, 'anotherFn')
      const result = await compare.run(5)
      expect(result).toHaveProperty('items')
      expect(result.items).toHaveProperty('sampleFn')
      expect(result.items).toHaveProperty('anotherFn')
      expect(result).toHaveProperty('min')
      expect(result).toHaveProperty('max')
    })
  })
})
