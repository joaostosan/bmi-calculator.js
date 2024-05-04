export default async function calculateBmi(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject('arguments must be of type number');
    }
    return weight / (height * height);
}