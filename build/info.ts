import { readdir, stat } from 'fs'
import type { Plugin } from 'vite'
import dayjs, { Dayjs } from 'dayjs'
// @ts-ignore
import { name } from '../package.json'
// @ts-ignore
import { sum } from 'lodash-unified'
import duration from 'dayjs/plugin/duration'
import { green, blue, bold } from 'picocolors'
dayjs.extend(duration)

const staticPath = 'dist'
const fileListTotal: number[] = []

const recursiveDirectory = (folder: string, callback: Function): void => {
  readdir(folder, (err, files: string[]) => {
    if (err) throw err
    let count = 0
    const checkEnd = () => {
      ++count == files.length && callback()
    }
    files.forEach((item: string) => {
      stat(folder + '/' + item, async (err, stats) => {
        if (err) throw err
        if (stats.isFile()) {
          fileListTotal.push(stats.size)
          checkEnd()
        } else if (stats.isDirectory()) {
          recursiveDirectory(`${staticPath}/${item}/`, checkEnd)
        }
      })
    })
    files.length === 0 && callback()
  })
}

const formatBytes = (a: number, b?: number): string => {
  if (0 == a) return '0 Bytes'
  const c = 1024,
    d = b || 2,
    e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}

export default function viteBuildInfo(): Plugin {
  let config: { command: string }
  let startTime: Dayjs
  let endTime: Dayjs
  return {
    name: 'vite:buildInfo',
    configResolved(resolvedConfig: { command: string }) {
      config = resolvedConfig
    },
    buildStart() {
      console.log(
        bold(
          green(
            `ð è¡¨éé¡¹ç®${blue(
              `[${name}]`
            )}å¯å¨æåäºåï¼å¦ææ¨æè§ä¸éï¼è®°å¾ç¹å»åé¢é¾æ¥ç»ä¸ªstarå¦ ð https://github.com/jackbrens/${name}`
          )
        )
      )
      if (config.command === 'build') {
        startTime = dayjs(new Date())
      }
    },
    closeBundle() {
      if (config.command === 'build') {
        endTime = dayjs(new Date())
        recursiveDirectory(staticPath, () => {
          console.log(
            bold(
              green(
                `è¡¨éæåå®æäºåï¼æ»ç¨æ¶${dayjs
                  .duration(endTime.diff(startTime))
                  .format('mmåssç§')}ï¼æååçå¤§å°ä¸º${formatBytes(sum(fileListTotal))}ï¼`
              )
            )
          )
        })
      }
    },
  }
}
