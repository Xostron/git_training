/**
 * Учитывая целочисленный массив nums, верните массив answer,
 * в котором answer[i] равно произведению всех элементов массива nums,
 * кроме nums[i]. Произведение любого префикса или суффикса массива nums
 * гарантированно поместится в 32-разрядное целое число. Вы должны написать алгоритм,
 * работающий за время O(n) и не использующий операцию деления.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 */

/**
 * Time limit
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {
	return nums.map((el, i) => {
		nums[i] = 1
		const ex = nums.join('*')
		nums[i] = el
		return eval(ex)
	})
}

var productExceptSelf = function (nums) {
	const pre = [], post=[]
	pre[0]=1
    post[nums.length-1]=1
    for(let i=1;i<nums.length; i++){
        pre[i]=pre[i-1]*nums[i-1]
    }
    for(let i=nums.length-2; i>=0; i--){
        post[i]=post[i+1]*nums[i+1]
    }
    const r = []
    for(let i=0;i<nums.length;i++){
        r[i]=pre[i]*post[i]
    }
    // console.log(pre,post)
    return r
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
