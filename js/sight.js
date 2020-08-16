class SVGElement {
    type;
    node;
    namespace;

    constructor(type) {
        this.type = type;
        this.namespace = 'http://www.w3.org/2000/svg';
        this.node = function(){
            document.createElementNS(this.namespace, this.type);
            return this;
        }
    }

    attr(attrs) {
        const value = Object.entries(attrs);
        for (const key of value) {
            this.node.setAttributeNS(value[key]);
        }
        return this;
    }

    append(element) {
        const parent = typeof element === 'string' ? document.querySelector(element) : element.node;
        parent.appendChild(this.node);
        return this;
    }

}

class Sight {
    svg;
    constructor(selector, width, height) {
        this.svg = new SVGAElement('svg');
        this.svg.attr({viewbox: `0 0 ${width} ${height}`});
        this.svg.append(selector);
    }

    draw(type, attrs) {
        return new SVGAElement(type);
    }
}