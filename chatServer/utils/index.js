const crypto = require('crypto')
const nicknameList = require('./../const/index').nickNameList

// 判断数据类型
function isType(type) {
  return (arg) => {
    return Object.prototype.toString.call(arg) === `[object ${type}]`
  }
}

// 格式化时间·
function fromatTime(time, full = true) { //
  const y = formatNumber(time.getFullYear())
  const m = formatNumber(time.getMonth() + 1)
  const d = formatNumber(time.getDate())
  const h = formatNumber(time.getHours())
  const mm = formatNumber(time.getMinutes())
  const s = formatNumber(time.getSeconds())
  if (full) {
    return `${y}-${m}-${d} ${h}:${mm}${s}`
  } else {
    return `${y}-${m}-${d}`
  }
}

// 格式化数字 '1' => '01'
function formatNumber(num) {
  let isNumber = isType('Number')
  if (!isNumber(num)) return
  return num >= 10 ? String(num) : '0' + String(num)
}

// 生成随机文件名
function randomName() {
  let name = Date.now().toString(16)
  return `chat-${name}`
}

// 生成随机nickname
function randomNickname() {
  const len = nicknameList.length
  const random = Math.floor(Math.random()*len)
  const res = Date.now().toString(16).slice(-2)
  return nicknameList[random] + res
}

// md5加密
function md5(pass) {
  let md5 = crypto.createHash('md5')
  return md5.update(pass).digest('hex')
}

// 获取一个月前的时间
function monthAgo() {
  const nowDate = new Date()
  const y = nowDate.getFullYear()
  const m = nowDate.getMonth()
  const d = nowDate.getDate()
  return new Date(`${y}-${m}-${d}`)
}

module.exports = {
  fromatTime,
  formatNumber,
  randomName,
  md5,
  randomNickname,
  monthAgo
}

