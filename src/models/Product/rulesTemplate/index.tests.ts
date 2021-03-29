import {
  mediumCoverageRule,
  fullCoverageRule,
  lowCoverageRule,
  specialFullCoverageRule,
  superSaleRule,
} from './index'

describe('models::RulesTemplate', () => {
  it('mediumCoverageRule', () => {
    expect(mediumCoverageRule(true, 4, 0)).toBe(2)
    expect(mediumCoverageRule(false, 4, 0)).toBe(3)
  })

  it('fullCoverageRule', () => {
    expect(fullCoverageRule(false, 6, 0)).toBe(7)
  })

  it('lowCoverageRule', () => {
    expect(lowCoverageRule(true, 20, 0)).toBe(0)
    expect(lowCoverageRule(false, 20, 0)).toBe(19)
  })

  it('specialFullCoverageRule', () => {
    expect(specialFullCoverageRule(false, 15, 4)).toBe(18)
    expect(specialFullCoverageRule(false, 10, 8)).toBe(12)
    expect(specialFullCoverageRule(false, 13, 11)).toBe(14)
  })

  it('superSaleRule', () => {
    expect(superSaleRule(true, 31, 0)).toBe(0)
    expect(superSaleRule(false, 31, 0)).toBe(29)
  })
})
