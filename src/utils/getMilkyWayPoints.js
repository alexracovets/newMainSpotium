import randomGaussian from "./randomGaussian";

const getMilkyWayPoints = (count) => {
    const floatArray = new Float32Array(count * 3);
    const MIN_RADIUS = 10;
    const MAX_RADIUS = 15;
    const DEPTH = 8;

    for (let i = 0; i < count; i++) {
        const randomRadius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
        const randomAngle = Math.random() * Math.PI * 2;

        const x = Math.cos(randomAngle) * randomRadius;
        const y = Math.sin(randomAngle) * randomRadius;
        const z = randomGaussian(0, DEPTH / 2);

        floatArray[i * 3] = x;
        floatArray[i * 3 + 1] = y;
        floatArray[i * 3 + 2] = z;
    }

    return floatArray;
}

export default getMilkyWayPoints