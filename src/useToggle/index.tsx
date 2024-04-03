import { useMemo, useState } from 'react';

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  // const [state, setState] = useState<D | R>(defaultValue);

  // const actions = useMemo(() => {
  //   const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

  //   const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
  //   const set = (value: D | R) => setState(value);
  //   const setLeft = () => setState(defaultValue);
  //   const setRight = () => setState(reverseValueOrigin);

  //   return {
  //     toggle,
  //     set,
  //     setLeft,
  //     setRight,
  //   };
  // }, []);

  // return [state, actions];


  //用法: 基础用法是不带参数 提供的就是[state,{toggle,setLeft,setRight}]
  //高级用法是会传递两个参数leftValue和RightValue 提供的是[state, { toggle, set, setLeft, setRight }]
  const [state, setState] = useState<D | R>(defaultValue)
  console.log('render', state, defaultValue)
  const actions = useMemo(() => {
    console.log('memo', state, defaultValue)
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;
    const toggle = () => setState((s) => {
      console.log('state', state)
      return s === defaultValue ? reverseValueOrigin : defaultValue
    })
    const setLeft = () => {
      setState(defaultValue)
    }
    const setRight = () => {
      setState(reverseValueOrigin)
    }
    const set = (v: D | R) => { setState(v) }
    return {
      toggle,
      setLeft,
      setRight,
      set
    }
  }, [])

  return [state, actions]
}

export default useToggle;

