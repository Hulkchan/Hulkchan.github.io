const {
  dotExistDirectoryCreate,
  generateFile,
  fs,
  log,
  resolvePath,
  successLog,
  errorLog,
  resolveComponentName,
  parseTime
} = require('./common.js');
const {
  articleTemplate
} = require('./articleTemplate.js');

log('请输入文章标题')
let title = ''
process.stdin.on('data', async chunk => {
  title = String(chunk).trim().toString()
  const articleTitle = title
  title = `${parseTime(Date.now(), '{y}-{m}-{d}')}-${title}`
  const date = parseTime(Date.now(), '{y}-{m}-{d} {h}:{i}')
  // 时间检索分类
  const category = parseTime(Date.now(), '{y}-{m}')
  if(!title) return
  const mdFile = resolvePath('../docs/article', `${title}.md`)
  try {
    log(`正在生成 markdown 文件 ${mdFile}`)
    await generateFile(mdFile, articleTemplate(articleTitle, date, category))
    successLog('文章生成成功')
  } catch (e) {
      errorLog(e.message)
  }

  process.stdin.emit('end')
})