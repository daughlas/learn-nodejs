const playerAction = process.argv[process.argv.length - 1]

const random = Math.random() * 3

let computerAction

if (random < 1) {
  computerAction = 'rock'
} else if (random > 2) {
  computerAction = 'scissors'
} else {
  computerAction = 'paper'
}

if (computerAction == playerAction) {
  console.log('平局')
} else if (
  (computerAction == 'rock' && playerAction == 'paper') ||
  (computerAction == 'paper' && playerAction == 'scissors') ||
  (computerAction == 'scissors' && playerAction == 'rock')
) {
  console.log(`人类出了${playerAction}，电脑出了${computerAction}，人类赢`)
} else {
  console.log(`人类出了${playerAction}，电脑出了${computerAction}，电脑赢`)
}