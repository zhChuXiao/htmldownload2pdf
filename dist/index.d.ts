import { Vue2, App } from 'vue-demi';
/**
 *
 * @param el 需要截图的包裹的（原生的）DOM 对象
 * @param fileName 文件名称
 * @description 将html元素转换成canvas，再将canvas转换成pdf下载
 * @example printOut(document.getElementById('app')!, 'test')
 */
export declare function printOut(el: HTMLElement, fileName: string): void;
export declare function demo(num: number): number;
declare function htmldownload2pdf(app: typeof Vue2): void;
declare function htmldownload2pdf(app: App<Element>): void;
export default htmldownload2pdf;
