FlowRouter.route("/", {
  name: 'home',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route("/category/manage", {
  name: 'categorymanage',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <CategoriesManage />
    });
  }
});

FlowRouter.route("/user/register", {
  name: 'userregister',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <UserRegister />
    });
  }
});

FlowRouter.route("/user/login", {
  name: 'userlogin',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <UserLogin />
    });
  }
});
