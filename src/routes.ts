import UploadedFile from './components/uploadFile/UploadFile';
import Route from './route';

export const routes: Route[] = [
  {
    path: '/',
    name: 'Root Page',
    component: UploadedFile,
    exact: true,
  },
];
