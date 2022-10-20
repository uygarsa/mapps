export default [
 
  {
    
    title: 'Genel Bakış',
    route: 'dashboard-ecommerce',

},
{
    
  title: 'Kurum',
  route: 'apps-users-list',

},
  {
    
    title: 'Kullanıcılar',
    path: '/apps/invoice/list/',
      route: 'apps-invoice-list',
      component: () => import('@/views/apps/invoice/invoice-add/InvoiceAdd.vue'),
    

},
{
    
  title: 'Hatalar',
  path: '/dashboard/analytics/',
  route: 'dashboard-analytics',
      component: () => import('@/views/dashboard/analytics/Analytics.vue'),


},
{
  title: 'Kayıt Defteri',  
  path: '/dashboard/analytics/',
  route: 'dashboard-analytics-sales-radar-charts',
      component: () => import('@/views/dashboard/analytics/AnalyticsSalesRadarChart.vue'),

   

},
{
    
  title: 'Moduller',
  path: '/apps/moduls/list',
      route: 'apps-moduls-list',
      component: () => import('@/views/apps/moduls/module-list/ModulList.vue'),

},
  {
    
    title: 'Lisans',
    route: '',

},
{
    
  title: 'Ayarlar',
  route: '',

},
 
]
