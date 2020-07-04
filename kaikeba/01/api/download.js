
const ora = require('ora')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))


async function clone(repo, desc) {
  const process = ora(`正在下载...${repo}`)
  process.start()
  try {
    await download(repo, desc)
  } catch {
    process.fail()
  }
  process.succeed()
}

module.exports = {
  clone
}