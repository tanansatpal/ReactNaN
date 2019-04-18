import HomeModule from "./modules/home/home.module";
import loadable from '@loadable/component'

const CategoryModule = loadable(() => import('./modules/category/category.module'));
const ProductModule = loadable(() => import('./modules/product/product.module'));
const CartModule = loadable(() => import('./modules/cart/cart.module'));
const CheckoutModule = loadable(() => import('./modules/checkout/checkout.module'));
const UserModule = loadable(() => import('./modules/user/user.module'));
const AuthModule = loadable(() => import('./modules/auth/auth.module'));
const OrderConfirmationModule = loadable(() => import('./modules/order-confirmation/order-confirmation.module'));
const ContactModule = loadable(() => import('./modules/contact/contact.module'));
import {RouteProps} from "react-router";

const routes: RouteProps[] = [
    {
        path: "/",
        exact: true,
        component: HomeModule
    },
    {
        path: "/auth",
        component: AuthModule
    },
    {
        path: "/category",
        component: CategoryModule
    },
    {
        path: "/product",
        component: ProductModule
    },
    {
        path: "/cart",
        component: CartModule
    },
    {
        path: "/checkout",
        component: CheckoutModule
    },
    {
        path: "/user",
        component: UserModule
    },
    {
        path: "/contact",
        component: ContactModule
    },
    {
        path: "/order-confirm/:id",
        component: OrderConfirmationModule
    },
    {
        path: '',
        component: HomeModule
    }
];

export default routes;
