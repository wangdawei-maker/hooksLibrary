import { defineConfig } from 'dumi';
export const menus = [
  // {
  //   title: '生命周期',
  //   children: [],
  // },
  {
    title: '状态',
    children: [
      'useBoolean',
      'useToggle',
      'useSetState',
      'useDebounce'
    ],
  },
  // {
  //   title: 'Effect',
  //   children: [],
  // },
  // {
  //   title: '进阶',
  //   children: [],
  // },
];

export default defineConfig({
  title: 'wangHooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config,
  navs: [
    { title: 'Hooks', path: '/hooks' },
  ],
  menus:{
    '/hooks':menus
  }
});
