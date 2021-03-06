import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path(.*)',
            component: () =>
                import ('@/views/redirect/index')
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        component: () =>
            import ('@/views/school/index'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () =>
            import ('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () =>
            import ('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/dashboard/index'),
            name: 'Dashboard',
            meta: { title: '??????', icon: 'dashboard', affix: true }
        }]
    },
]

export const routesList = [{
        path: 'media',
        name: 'Media',
        component: () =>
            import ('@/views/course/media'),
    }, {
        path: 'audio',
        name: 'Audio',
        component: () =>
            import ('@/views/course/audio'),
    }, {
        path: 'video',
        name: 'Video',
        component: () =>
            import ('@/views/course/video'),
    }, {
        path: 'column',
        name: 'Column',
        component: () =>
            import ('@/views/course/column'),
    }, {
        path: 'column_detail',
        name: 'ColumnDetail',
        component: () =>
            import ('@/views/course/column_detail'),
        meta: {
            activeMenu: '/course/column',
            breadcrumb: false,
        },
    },
    {
        path: 'bbs',
        name: 'Bbs',
        component: () =>
            import ('@/views/tool/bbs/bbs'),
    }, {
        path: 'bbs_post',
        name: 'BbsPost',
        component: () =>
            import ('@/views/tool/bbs/post'),
    }, {
        path: 'question',
        name: 'Question',
        component: () =>
            import ('@/views/tool/question'),
    }, {
        path: 'testpaper',
        name: 'Testpaper',
        component: () =>
            import ('@/views/tool/testpaper/index'),
    }, {
        path: 'testpaper_form',
        name: 'TestpaperForm',
        component: () =>
            import ('@/views/tool/testpaper/form'),
    }, {
        path: 'testpaper_test',
        name: 'TestpaperTest',
        component: () =>
            import ('@/views/tool/testpaper/test'),
    }, {
        path: 'book',
        name: 'Book',
        component: () =>
            import ('@/views/tool/book/index'),
    }, {
        path: 'book_detail',
        name: 'BookDetail',
        component: () =>
            import ('@/views/tool/book/detail'),
    },
    {
        path: 'user',
        name: 'User',
        component: () =>
            import ('@/views/user/index'),
    },
    {
        path: 'order',
        name: 'Order',
        component: () =>
            import ('@/views/pay/order'),
    }, {
        path: 'assets',
        name: 'Assets',
        component: () =>
            import ('@/views/pay/assets'),
    }, {
        path: 'payment',
        name: 'Payment',
        component: () =>
            import ('@/views/pay/payment'),
    },
    {
        path: 'group',
        name: 'Group',
        component: () =>
            import ('@/views/marketing/group'),
    }, {
        path: 'flashsale',
        name: 'Flashsale',
        component: () =>
            import ('@/views/marketing/flashsale'),
    }, {
        path: 'coupon',
        name: 'Coupon',
        component: () =>
            import ('@/views/marketing/coupon'),
    },
    {
        path: 'setting_index',
        name: 'SettingIndex',
        component: () =>
            import ('@/views/setting/index'),
    }, {
        path: 'staffs',
        name: 'Staffs',
        component: () =>
            import ('@/views/setting/staffs'),
    }, {
        path: 'role',
        name: 'Role',
        component: () =>
            import ('@/views/setting/role'),
    },
    {
        path: 'mobile_index',
        name: 'MobileIndex',
        component: () =>
            import ('@/views/renovation/mobile/index'),
    }, {
        path: 'mobile_edit',
        name: 'MobileEdit',
        component: () =>
            import ('@/views/renovation/mobile/edit'),
    }, {
        path: 'pc_index',
        name: 'PcIndex',
        component: () =>
            import ('@/views/renovation/pc/index'),
    }, {
        path: 'pc_edit',
        name: 'PcEdit',
        component: () =>
            import ('@/views/renovation/pc/edit'),
    }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
        path: "/course",
        component: Layout,
        redirect: "/course/media",
        name: "Course",
        alwaysShow: true,
        meta: {
            title: "??????",
            icon: "excel",
            roles: ['admin', 'editor']
        },
        children: [{
            path: "media",
            name: "Media",
            component: () =>
                import ('@/views/course/media'),
            meta: {
                title: "??????"
            }
        }, {
            path: "audio",
            name: "Audio",
            component: () =>
                import ('@/views/course/audio'),
            meta: {
                title: "??????"
            }
        }, {
            path: "video",
            name: "Video",
            component: () =>
                import ('@/views/course/video'),
            meta: {
                title: "??????"
            }
        }, {
            path: "column",
            name: "Column",
            component: () =>
                import ('@/views/course/column'),
            meta: {
                title: "??????"
            }
        }, {
            hidden: true,
            path: "column_detail",
            name: "ColumnDetail",
            component: () =>
                import ('@/views/course/column_detail'),
            meta: {
                title: "????????????"
            }
        }]
    },
    {
        path: "/user",
        component: Layout,
        meta: {
            title: "??????",
            icon: "user"
        },
        redirect: "/user",
        children: [{
            path: "user",
            name: "User",
            component: () =>
                import ('@/views/user/index'),
            meta: {
                title: "??????"
            }
        }]
    },
    {
        path: "/pay",
        component: Layout,
        meta: {
            title: "??????",
            icon: "education"
        },
        redirect: "/order",
        children: [{
            path: "order",
            name: "Order",
            component: () =>
                import ('@/views/pay/order'),
            meta: {
                title: "????????????"
            }
        }, {
            path: "assets",
            name: "Assets",
            component: () =>
                import ('@/views/pay/assets'),
            meta: {
                title: "????????????"
            }
        }, {
            path: "payment",
            name: "Payment",
            component: () =>
                import ('@/views/pay/payment'),
            meta: {
                title: "????????????"
            }
        }]
    },

    {
        path: "/renovation",
        component: Layout,
        meta: {
            title: "?????????",
            icon: "education"
        },
        redirect: "/order",
        children: [{
            path: "mobile_index",
            name: "MobileIndex",
            component: () =>
                import ('@/views/renovation/mobile/index'),
            meta: {
                title: "?????????"
            }
        }, {
            path: "mobile_edit",
            name: "MobileEdit",
            hidden: true,
            component: () =>
                import ('@/views/renovation/mobile/edit'),
            meta: {
                title: "???????????????"
            }
        }, {
            path: "pc_index",
            name: "PcIndex",
            component: () =>
                import ('@/views/renovation/pc/index'),
            meta: {
                title: "PC???"
            }
        }, {
            path: "pc_edit",
            name: "PcEdit",
            hidden: true,
            component: () =>
                import ('@/views/renovation/pc/edit'),
            meta: {
                title: "PC?????????"
            }
        }]
    },

    {
        path: "/marketing",
        component: Layout,
        meta: {
            title: "??????",
            icon: "education"
        },
        redirect: "/group",
        children: [{
            path: "group",
            name: "Group",
            component: () =>
                import ('@/views/marketing/group'),
            meta: {
                title: "??????"
            }
        }, {
            path: "flashsale",
            name: "Flashsale",
            component: () =>
                import ('@/views/marketing/flashsale'),
            meta: {
                title: "??????"
            }
        }, {
            path: "coupon",
            name: "Coupon",
            component: () =>
                import ('@/views/marketing/coupon'),
            meta: {
                title: "?????????"
            }
        }]
    },

    {
        path: "/tool",
        component: Layout,
        meta: {
            title: "??????",
            icon: "education"
        },
        redirect: "/bbs",
        children: [{
            path: "bbs",
            name: "Bbs",
            component: () =>
                import ('@/views/tool/bbs/bbs'),
            meta: {
                title: "?????????"
            }
        }, {
            path: "bbs_post",
            name: "BbsPost",
            hidden: true,
            component: () =>
                import ('@/views/tool/bbs/post'),
            meta: {
                title: "????????????"
            }
        }, {
            path: "question",
            name: "Question",
            component: () =>
                import ('@/views/tool/question'),
            meta: {
                title: "??????"
            }
        }, {
            path: "testpaper",
            name: "Testpaper",
            component: () =>
                import ('@/views/tool/testpaper/index'),
            meta: {
                title: "??????"
            }
        }, {
            path: "testpaper_form",
            name: "TestpaperForm",
            hidden: true,
            component: () =>
                import ('@/views/tool/testpaper/form'),
            meta: {
                title: "??????"
            }
        }, {
            path: "testpaper_test",
            name: "TestpaperTest",
            hidden: true,
            component: () =>
                import ('@/views/tool/testpaper/test'),
            meta: {
                title: "????????????"
            }
        }, {
            path: "book",
            name: "Book",
            component: () =>
                import ('@/views/tool/book/index'),
            meta: {
                title: "?????????"
            }
        }, {
            path: "book_detail",
            name: "BookDetail",
            hidden: true,
            component: () =>
                import ('@/views/tool/book/detail'),
            meta: {
                title: "???????????????"
            }
        }]
    },

    {
        path: "/setting",
        component: Layout,
        meta: {
            title: "??????",
            icon: "education"
        },
        redirect: "/setting_index",
        children: [{
            path: "setting_index",
            name: "SettingIndex",
            component: () =>
                import ('@/views/setting/index'),
            meta: {
                title: "????????????"
            }
        }, {
            path: "staffs",
            name: "Staffs",
            component: () =>
                import ('@/views/setting/staffs'),
            meta: {
                title: "????????????"
            }
        }, {
            path: "role",
            name: "Role",
            component: () =>
                import ('@/views/setting/role'),
            meta: {
                title: "????????????"
            }
        }]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router