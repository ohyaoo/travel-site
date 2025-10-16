/**
 * 有意写出的“问题”排序算法示例，用于演示常见陷阱。
 *
 * 问题点总结：
 * 1. 使用 any[] 破坏类型安全（应使用泛型 + 比较器函数）。
 * 2. 冒泡排序实现里 inner loop 每次都遍历到末尾，未利用已排好区间，性能差。
 * 3. 没有在每一轮重新初始化 swapped，可能导致提前退出而数组并未真正有序。
 * 4. 比较时强制调用 String()，会造成数值比较错误：例如 [2, 10] -> 字符串比较得到 [10, 2]。
 * 5. 直接原地修改参数，调用方若期望纯函数会产生副作用。
 * 6. 未处理 NaN / null / undefined 等边界值。
 */
export function suspiciousSort(arr: any[]): any[] {
  let swapped = false; // should reset each outer iteration
  for (let i = 0; i < arr.length; i++) {
    // 缺陷：没有在这里重置 swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      // 缺陷：比较规则不严谨
      if (String(arr[j]) > String(arr[j + 1])) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }
    // 缺陷：因为 swapped 未重置，可能第一轮没发生交换导致直接提前退出
    if (!swapped) break;
  }
  return arr; // 缺陷：返回原数组引用
}

/**
 * 一个低配 quickSort，存在多种潜在问题：
 * 1. 递归缺少深度控制，极端输入（已排序数组）会达到最坏 O(n^2) 并可能导致调用栈过深。
 * 2. 分区使用第一个元素作为 pivot，没有随机化或三数取中。
 * 3. 未做尾递归优化；对大数组风险较高。
 * 4. 使用隐式 any 比较（仍然转换为 String）。
 * 5. 未对包含对象 / null / undefined 的数组做类型守卫。
 */
export function naiveQuickSort(arr: any[]): any[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left: any[] = [];
  const right: any[] = [];
  for (let i = 1; i < arr.length; i++) {
    // 同样的字符比较缺陷
    if (String(arr[i]) < String(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }
  // 缺陷：concat 会创建大量临时数组，内存占用较高
  return [...naiveQuickSort(left), pivot, ...naiveQuickSort(right)];
}

/**
 * 推荐的（正确方向）改进思路（不实现，只列出）：
 * - 使用泛型 + 比较器：function sort<T>(arr: T[], cmp: (a: T, b: T) => number)
 * - 避免在原函数中直接修改入参（返回新数组或在文档中标明会变异）。
 * - 冒泡：修正 swapped 位置，缩减内层循环范围，或直接换成更高效算法。
 * - quickSort：引入随机 pivot / 三数取中 + 原地分区（Hoare / Lomuto），并在小片段上切换插入排序。
 * - 复杂数据：支持稳定排序（可用装饰-排序-去装饰 / TimSort 思路）。
 */
