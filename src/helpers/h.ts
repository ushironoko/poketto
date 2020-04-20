import { h as render } from 'vue'

export const h = (c: any, o: any, ...args: any): any => {
  const arg = [...args] as any[];
  return render(c, o, arg)
}
