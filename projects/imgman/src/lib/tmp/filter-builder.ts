
export function filterBuilder() {
    let filter = '';

    const append = (newFilter: string) => filter = `${filter} ${newFilter}`

    return {
        blur: (pixels: number) => append(`blur(${pixels}px)`),
        grayscale: (percentage: number) => append(`grayscale(${percentage}%)`),
        toString: () => filter

    }
}

export class FilterBuilder {

    filter = '';

    static create() {
        return new FilterBuilder();
    }

    blur(pixels: number) {
        this.append(`blur(${pixels}px)`);
        return this;
    }

    brightness(percentage: number) {
        this.append(`brightness(${percentage}%)`);
        return this;
    }

    contrast(percentage: number) {
        this.append(`contrast(${percentage}%)`);
        return this;
    }

    grayscale(percentage: number) {
        this.append(`grayscale(${percentage}%)`);
        return this;
    }

    hueRotate(degrees: number) {
        this.append(`hue-rotate(${degrees}deg)`);
        return this;
    }

    invert(percentage: number) {
        this.append(`invert(${percentage}%)`);
        return this;
    }

    opacity(percentage: number) {
        this.append(`opacity(${percentage}%)`);
        return this;
    }

    saturate(percentage: number) {
        this.append(`saturate(${percentage}%)`);
        return this;
    }

    sepia(percentage: number) {
        this.append(`sepia(${percentage}%)`);
        return this;
    }

    toString() {
        return this.filter;
    }


    private append(newFilter: string) {
        this.filter = `${this.filter} ${newFilter}`
    }

}