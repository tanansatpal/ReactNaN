import loadable from '@loadable/component'
import {RouteProps} from "react-router";

const Address = loadable(() => import('./components/Address'));
const Shipping = loadable(() => import('./components/Shipping'));
const Payment = loadable(() => import('./components/Payment'));
const Review = loadable(() => import('./components/Review'));

const routes: RouteProps[] = [
    {
        path: "/checkout/address",
        exact: true,
        component: Address
    },
    {
        path: "/checkout/payment",
        exact: true,
        component: Payment
    },
    {
        path: "/checkout/shipping",
        exact: true,
        component: Shipping
    },
    {
        path: "/checkout/review",
        exact: true,
        component: Review
    }
];

export default routes;
