function runFunction(fn, amountOfRuns = 10) {
  const analytics = []

  return new Promise((resolve, reject) => {
    for (let i = 0; i < amountOfRuns; i++) {
      let start = Date.now()
      fn()
      analytics.push(Date.now() - start)
    }

    resolve(calculateAnalytics(analytics))
  })
}

function calculateAnalytics(analytics) {
  return {
    average:
      analytics.reduce((total, num) => (total += num), 0) / analytics.length,
    analytics: analytics,
  }
}

class Compare {
  constructor() {
    this.items = []
  }

  add(fn, name) {
    this.items.push({ name, callBack: fn })
  }

  remove(name) {
    this.items = this.items.filter(item => item.name !== name)
  }

  async run(amountOfRuns = 10) {
    this.stats = {
      items: {},
    }

    for (let item of this.items) {
      await runFunction(item.callBack, amountOfRuns).then(
        val => (this.stats.items[item.name] = val)
      )
    }

    this.stats.rank = Object.keys(this.stats.items)
      .map(key => ({
        name: key,
        value: this.stats.items[key],
      }))
      .sort((a, b) => a.value.average - b.value.average)

    this.stats.max = this.stats.rank[this.stats.rank.length - 1]
    this.stats.min = this.stats.rank[0]

    return this.stats
  }
}

const Flash = { runFunction, Compare }
export default Flash
