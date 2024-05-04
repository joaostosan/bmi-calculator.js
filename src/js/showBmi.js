import calculateBmi from './calculateBmi.js';

export default async function showBmi(weight, height) {
    let message = '';
    try {
        const bmiResult = await calculateBmi(weight, height);
        const bmi = parseFloat(bmiResult).toFixed(2);
        if (bmi < 18.5) return message = `Your BMI is ${bmi}. You are underweight.`;
        else if (bmi < 25) return message = `Your BMI is ${bmi}. You are normal weight.`;
        else if (bmi < 30) return message = `Your BMI is ${bmi}. You are overweight.`;
        else if (bmi < 40) return message = `Your BMI is ${bmi}. You are obese.`;
        else return message = `Your BMI is ${bmi}. You are morbid obese.`;
    } catch (error) {
        return message = error;
    }
}