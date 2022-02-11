/* 
 联合类型就是对象的并集，属性的交集
  赋值上：具有 A或B或A & B 的属性的对象能赋值给 Union。
访问上：为了类型安全，当赋值为 A 或 B 时，联合类型 Union 只能访问 A 或 B ；当赋值为 A & B 时（即全部属性），联合类型 Union 只能访问 A 和 B 的共有属性。

 交叉类型就是对象的交集，属性的并集。
*/

interface A {
  x: number
  y: number
}
interface B {
  y: number
  z: number
}
interface C extends A{
  u:number
}
// 联合类型
type Union = B | A

const obj1: Union = {
  x: 1,
  y: 2,
  z: 3,
}
const obj2: Union = {
  x: 1,
  y: 2,
}
const obj3: Union = {
  y: 2,
  z: 3,
}

obj1.x // error
obj1.y // ok
obj1.z // error

// 交叉类型
type Intersection = B & A
type Intersection2 = A & C

const obj4: Intersection = {
  x: 1,
  y: 2,
  z: 3,
}

obj4.x // ok
obj4.y // ok
obj4.z // ok

const obj5: Intersection2 = {
  x: 1,
  y: 2,
  u: 3,
}