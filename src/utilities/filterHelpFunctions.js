

export function getUpperLimit(value) {
    if (value <= 1) {
        return value + 0.1;
    } else {
        return value + 10;
    }
}

export function getLowerLimit(value) {
    if (value <= 1) {
        return value - 0.1;
    } else {
        return value - 10;
    }
}
