import { Vue2, App } from 'vue-demi'
import html2Canvas, { Options } from 'html2canvas'
import JsPDF from 'jspdf'
/**
 *
 * @param el 需要截图的包裹的（原生的）DOM 对象
 * @param fileName 文件名称
 * @description 将html元素转换成canvas，再将canvas转换成pdf下载
 * @example printOut(document.getElementById('app')!, 'test')
 */
export function printOut(el: HTMLElement, fileName: string) {
  var shareContent = el //需要截图的包裹的（原生的）DOM 对象
  var width = shareContent.offsetWidth //获取dom 宽度
  var height = shareContent.offsetHeight //获取dom 高度

  var canvas = document.createElement('canvas') //创建一个canvas节点
  var scale = 4 //定义任意放大倍数 支持小数
  canvas.width = width * scale //定义canvas 宽度 * 缩放，在此我是把canvas放大了2倍
  canvas.height = height * scale //定义canvas高度 *缩放
  canvas.getContext('2d')!.scale(scale, scale) //获取context,设置scale
  html2Canvas(el, {
    scale: 4,
    dpi: 300,
    allowTaint: true
  } as Partial<Options>).then(function (canvas) {
    var context: any = canvas.getContext('2d')
    // 【重要】关闭抗锯齿
    context.mozImageSmoothingEnabled = false
    context.webkitImageSmoothingEnabled = false
    context.msImageSmoothingEnabled = false
    context.imageSmoothingEnabled = false

    var imgData = canvas.toDataURL('image/jpeg', 1.0) //转化成base64格式,可上网了解此格式
    var img = new Image()
    img.src = imgData
    img.onload = function () {
      img.width = img.width / 2 //因为在上面放大了2倍，生成image之后要/2
      img.height = img.height / 2
      img.style.transform = 'scale(0.5)'
      if (img.width > img.height) {
        //此可以根据打印的大小进行自动调节
        var doc = new JsPDF('l', 'mm', [img.width * 0.555, img.height * 0.555])
      } else {
        var doc = new JsPDF('p', 'mm', [img.width * 0.555, img.height * 0.555])
      }
      doc.addImage(imgData, 'jpeg', 10, 0, img.width * 0.505, img.height * 0.545)
      doc.save(fileName + '.pdf')
    }
  })
}

export function htmldownload2pdf(app: typeof Vue2): void
export function htmldownload2pdf(app: App<Element>): void
export function htmldownload2pdf(app: typeof Vue2 | App<Element>) {
  app.directive('exportpdf', (el: HTMLElement, binding: any) => {
    const dom = document.getElementById(binding.value.el)
    el.addEventListener('click', () => {
      if (dom) {
        printOut(dom, binding.value.name)
      }
    })
  })
}
// export default htmldownload2pdf
export default {
  install(app: typeof Vue2 | App<Element>) {
    app.directive('exportpdf', (el: HTMLElement, binding: any) => {
      app.nextTick(() => {
        const dom = document.querySelector(binding.value.el)
        console.log(dom)
        el.addEventListener('click', () => {
          if (dom) {
            printOut(dom, binding.value.name)
          }
        })
      })
    })
  }
}
