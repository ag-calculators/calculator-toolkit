import { read } from './utils/props'

export default class BaseCalculator {
    constructor(renderer, definition) {
        this.renderer = renderer
        this.definition = definition
        this.defaultData = {}
    }
    init (store, view, data) {
        let defaultData = Object.assign({}, this.defaultData, data)

        // Polyfill saveResults
        if (typeof store.saveResults === 'undefined') {
            store.saveResults = function () {}
        }

        if (view && typeof view === 'function') {
            this.renderer.setView(view(defaultData, store), this.controller(store, defaultData))
        }
    }
    controller (store, data) {
        return {
            data: data || { },
            change: (proxy, e) => {
                let name = e.target.name 
                proxy.data[name] = e.target.value
            },            
            move: (proxy, e) => {
                e.preventDefault();
                let frm = e.target.dataset['to']
                
                if (this.views.hasOwnProperty(frm)) {
                    this.renderer.setView(this.views[frm](proxy.data, store), this.controller(store, proxy.data))
                }
            }
        }
    }
    i18n (text, defaultText) {
        return read(this.definition || {}, text) || ( typeof defaultText !== 'undefined' && defaultText || text)
    }
}