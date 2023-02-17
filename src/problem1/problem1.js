// Solution 1: For loops
var sum_to_n_a = function(n) {
    // your code here
    answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += i;
    }
    return answer;
};

// Solution 2: Math Formula for summation
var sum_to_n_b = function(n) {
    // your code here
    return n * (n + 1) / 2;
};

// Solution 3: Recursion
var sum_to_n_c = function(n) {
    // your code here
    if (n == 1) {
        return 1;
    } else {
        return n + sum_to_n_c(n - 1); 
    }
}
        

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));