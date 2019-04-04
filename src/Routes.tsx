import HomeModule from "./modules/home/home.module";
// import loadable from '@loadable/component'
//
// const CategoryModule = loadable(() => import('./modules/category/category.module'));
import CategoryModule from "./modules/category/category.module";
import ProductModule from "./modules/product/product.module";
import CartModule from "./modules/cart/cart.module";
import CheckoutModule from "./modules/checkout/checkout.module";
import UserModule from "./modules/user/user.module";
import AuthModule from "./modules/auth/auth.module";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeModule
    },
    {
        path: "/auth",
        exact: false,
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
