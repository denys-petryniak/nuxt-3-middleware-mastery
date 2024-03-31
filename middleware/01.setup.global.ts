export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("--- Setup Middleware ---");

  if (to.fullPath === "/login?test=true") {
    throw createError({
      statusCode: 405,
      statusMessage: "Login not allowed",
    });
  }

  // return abortNavigation("Failed at global setup middleware");

  // try {
  //   const data = await $fetch("/api/test-path");
  //   return navigateTo(`/profile/${data.username}`);
  // } catch (error) {
  //   abortNavigation(error);
  // }
});
