export function el(name, attributes, children) {
    const response = document.createElement(name)
    if (attributes)
        for (const attribute in attributes)
            response.setAttribute(attribute, attributes[attribute])
    if (children)
        response.append(...children)
    return response
}

export function updateSize(canvas) {
    if (canvas.width !== canvas.clientWidth)
        canvas.width = canvas.clientWidth
    if (canvas.height !== canvas.clientHeight)
        canvas.height = canvas.clientHeight
}

export function replicate(size, callback) {
    const response = new Array(size)
    for (let i = 0; i < size; i ++) {
        response[i] = callback(i)
    }
    return response
}

export function lSubtract(vector1, vector2) {
    return vector1.map((v1, i) => v1 - vector2[i])
}

export function lMagnitude2(vector) {
    return vector.reduce((mag, v) => mag + v * v, 0)
}

export function deepClone(data) {
    const response = data
    if (Array.isArray(data)) {
        return data.map((d) => deepClone(d))
    } else if (data && typeof data === 'object') {
        const response = { }
        for (const key in data)
            response[key] = deepClone(data[key])
    }
    return response
}