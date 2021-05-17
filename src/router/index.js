import Router from "vue-router";
import Vue from "vue";
import Home from "@/components/Home";
import Index from "@/components/Index";
import Test from "@/components/Test";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    name: 'Index',
                    component: Index
                },

                {
                    path: 'test',
                    name: 'Test',
                    component: Test
                }
            ]
        },
    ]
})