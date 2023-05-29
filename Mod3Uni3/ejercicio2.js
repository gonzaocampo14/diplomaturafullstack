const num1 = prompt('ingrese el primer numero');
const num2 = prompt('ingrese el segundo numero');
const num3 = prompt('ingrese el tercer numero');

const nums = [num1, num2, num3];

if (nums[0] > nums[1] && nums[0] > nums[2]){
    document.write(nums[0] + ' es el mayor');
}
else if (nums[1] > nums[2]){
    document.write(nums[1] + ' es el mayor');
}
else{
    document.write(nums[2] + ' es el mayor');
}