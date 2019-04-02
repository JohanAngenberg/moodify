
export function getUpperLimit(value) {
    let halfInterval = 0.2 //Corresponds to +/- 10%
    return value * (1 + halfInterval);
}

export function getLowerLimit(value) {
    let halfInterval = 0.2 //Corresponds to +/- 10%
    return value * (1 - halfInterval);
}
