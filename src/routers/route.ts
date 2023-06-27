import { Menu, RouteList } from '@/models/route';
import Report from '@/pages/Report';

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
  { name: 'Thống kê khảo sát', path: '/report', component: Report() },
  { name: 'Số lượng khảo sát', path: '/report/number', component: Report() },
  { name: 'Cấp độ TN theo TH', path: '/report/brand-experience', component: Report() },
  { name: 'Cấp độ TN theo DV', path: '/report/service-experience', component: Report() },
  { name: 'Bộ phận cần cải thiện', path: '/report/improvement', component: Report() },
  { name: 'Danh sách khách hàng phản ánh', path: '/report/feedback-list', component: Report() },
  { name: 'KH giới thiệu KH', path: '/report/recommend', component: Report() },
  { name: 'Câu hỏi', path: '/question', component: Report() },
  { name: 'Khách hàng khảo sát', path: '/customer', component: Report() },
  { name: 'Danh sách tài khoản', path: '/account', component: Report() },
];
