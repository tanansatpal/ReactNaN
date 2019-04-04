import HomeModule from "./modules/home/home.module";
import loadable from '@loadable/component'

const CategoryModule = loadable(() => import('./modules/category/category.module'));
const ProductModule = loadable(() => import('./modules/product/product.module'));
const CartModule = loadable(() => import('./modules/cart/cart.module'));
const CheckoutModule = loadable(() => import('./modules/checkout/checkout.module'));
const UserModule = loadable(() => import('./modules/user/user.module'));
const AuthModule = loadable(() => import('./modules/auth/auth.module'));
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
        exact: false,
        component: CategoryModule
    },
    {
        path: "/product",
        exact: false,
        component: ProductModule
    },
    {
        path: "/cart",
        exact: false,
        component: CartModule
    },
    {
        path: "/checkout",
        exact: false,
        component: CheckoutModule
    },
    {
        path: "/user",
        exact: false,
        component: UserModule
    },
    {
        path: '',
        exact: false,
        component: AuthModule
    }
];

export default routes;
