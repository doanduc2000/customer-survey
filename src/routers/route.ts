import { Menu, RouteList } from '@/models/route';

export const menu: Menu[] = [
  {
    name: 'Thống kê khảo sát',
    path: '/report',
    dropdown: [
      { name: 'Số lượng khảo sát', path: '/report/number' },
      { name: 'Cấp độ TN theo TH', path: '/report/brand-experience' },
      { name: 'Cấp độ TN theo DV', path: '/report/service-experience' },
      { name: 'Bộ phận cần cải thiện', path: '/report/improvement' },
      { name: 'Danh sách khách hàng phản ánh', path: '/report/feedback-list' },
      { name: 'KH giới thiệu KH', path: '/report/recommend' },
    ],
  },
  { name: 'Câu hỏi', path: '/question', dropdown: [] },
  { name: 'Khách hàng khảo sát', path: '/customer', dropdown: [] },
  { name: 'Danh sách tài khoản', path: '/account', dropdown: [] },
];

export const routeList: RouteList[] = [
  { name: 'Thống kê khảo sát', path: '/report', component: '' },
  { name: 'Số lượng khảo sát', path: '/report/number', component: '' },
  { name: 'Cấp độ TN theo TH', path: '/report/brand-experience', component: '' },
  { name: 'Cấp độ TN theo DV', path: '/report/service-experience', component: '' },
  { name: 'Bộ phận cần cải thiện', path: '/report/improvement', component: '' },
  { name: 'Danh sách khách hàng phản ánh', path: '/report/feedback-list', component: '' },
  { name: 'KH giới thiệu KH', path: '/report/recommend', component: '' },
  { name: 'Câu hỏi', path: '/question', component: '' },
  { name: 'Khách hàng khảo sát', path: '/customer', component: '' },
  { name: 'Danh sách tài khoản', path: '/account', component: '' },
];
