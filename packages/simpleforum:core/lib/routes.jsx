FlowRouter.route("/", {
  name: 'home',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});
