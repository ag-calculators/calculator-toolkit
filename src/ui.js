export const field = (name, title, children) => {
    return `
        <div class="form-field">
            <label for="${name}">${title}</label>
            ${children}
        </div>
    `
}

export const setAttrs = (atts) => {
    if (!atts) return ''
    return Object.keys(atts).reduce( (str, a) => {
        str += `${a}="${atts[a]}"`
        return str
    }, '')
}

export const inputField = (name, type, title, value, attrs) => {
    
    return field(name,title, `<input type="${type}" name="${name}" value="${value}" on="change:${type}Change" ${setAttrs(attrs)}/>`)
}

export const selectField = (name, title, options, value, attrs) => {
    console.log('options', options)
    let select = `<select name="${name}" ${setAttrs(attrs)} on="change:selectChange">${(options || []).reduce( (str, a) => {
        let val = a.value || a
        let text = a.text || a
        let selected = val == value ? 'selected="selected"' : ''
        str += `<option value="${val}" ${selected}>${text}</option>`
        return str
    }, '')}</select>`
    return field(name, title, select)
}

export const optionField = (name, type, title, value, checked, attrs) => {
    return `
        <div class="form-field">
            <input type="${type}" name="${name}" value="${value}" on="change:${type}Change" ${checked && 'checked="checked"' || ''} ${setAttrs(attrs)}/>${title}
        </div>
    `
}