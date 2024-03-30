export default defineNuxtRouteMiddleware((to, from) => {
  const currentUser = useCookie("current-user");
  const isAuthenticated = useCookie("is-authenticated");

  if (!isAuthenticated.value) {
    return "/login";
  }

  if (to.params.username !== currentUser.value) {
    return `/profile/${currentUser.value}`;
  }
});
