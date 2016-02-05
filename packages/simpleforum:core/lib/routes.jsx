FlowRouter.route("/", {
  name: 'home',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

/*
  Users
*/
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

/*
  Forums
*/
FlowRouter.route("/threads/add", {
  name: 'threadadd',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <ThreadsAdd />
    });
  }
});

FlowRouter.route("/thread/:threadId", {
  name: 'threaddetail',
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <ThreadsDetail {...params} />
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
