/*
 * @Author: your name
 * @Date: 2021-07-17 20:38:32
 * @LastEditTime: 2021-07-17 20:59:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-javascript-design-pattern/test.js
 */

async function foo(a, b) {
  return a + b;
}

async function run() {
  const res = await foo(1, 2);
  console.log(`res:`, res);
}

run();
