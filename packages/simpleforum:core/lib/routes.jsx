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
