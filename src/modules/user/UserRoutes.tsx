import loadable from '@loadable/component'
import {RouteProps} from "react-router";

const Address = loadable(() => import('./components/Address'));
const Orders = loadable(() => import('./components/Orders'));
const Profile = loadable(() => import('./components/Profile'));
const OrderDetail = loadable(() => import('./components/OrderDetail'));

const routes: RouteProps[] = [
    {
        path: "/user/address",
        exact: true,
        component: Address
    },
    {
        path: "/user/orders",
        exact: true,
        component: Orders
    },
    {
        path: "/user/profile",
        exact: true,
        component: Profile
    },
    {
        path: "/user/order/:id",
        exact: true,
        component: OrderDetail
    }
];

export default routes;
