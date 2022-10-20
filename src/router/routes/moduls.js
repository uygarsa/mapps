export default [
    {
        path: '/apps/moduls/module',
        name: 'apps-moduls-module',
        component: () => import('@/views/apps/moduls/module-list/ModulList.vue'),
        meta: {
          pageTitle: 'Moduller',
          contentClass: 'moduls-application',
          breadcrumb: [
            {
              text: 'Modüller',
            },
            {
              text: 'Modüller',
              active: true,
            },
          ],
        },
      },
  ]
  