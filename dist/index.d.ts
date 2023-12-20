import { Vue2, App } from 'vue-demi';
/**
 *
 * @param el 需要截图的包裹的（原生的）DOM 对象
 * @param fileName 文件名称
 * @description 将html元素转换成canvas，再将canvas转换成pdf下载，适用于vue2和vue3以及原生js
 * @example printOut(document.getElementById('app')!, 'test')
 */
export declare function printOut(el: HTMLElement, fileName: string): void;
export declare function htmldownload2pdf(app: typeof Vue2): void;
export declare function htmldownload2pdf(app: App<Element>): void;
declare const _default: {
    install(app: typeof Vue2 | App<Element>): void;
};
export default _default;
